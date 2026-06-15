"""
NetGuard AI - Flask Dashboard

Run from Windows CMD:
    python app\\main.py

If your Windows "python" command points to Python 2, use:
    py -3 app\\main.py
"""

import json
import socket
import sys
if sys.version_info < (3, 8):
    raise RuntimeError(
        "NetGuard AI membutuhkan Python 3.8 atau lebih baru. "
        "Di Windows gunakan: py -3 app\\main.py"
    )

from pathlib import Path

import pandas as pd
from flask import Flask, flash, jsonify, redirect, render_template, request, url_for
from werkzeug.utils import secure_filename

from predictor import RESEARCH_SUMMARY_OUTPUT, run_prediction
from train import train_models


PROJECT_ROOT = Path(__file__).resolve().parents[1]
DATA_PROCESSED_DIR = PROJECT_ROOT / "data" / "processed"
DATA_SAMPLE_DIR = PROJECT_ROOT / "data" / "sample"
REPORTS_DIR = PROJECT_ROOT / "reports"
MODELS_DIR = PROJECT_ROOT / "models"
UPLOAD_DIR = DATA_PROCESSED_DIR
PREDICT_UPLOAD_DIR = DATA_SAMPLE_DIR
METRICS_PATH = REPORTS_DIR / "metrics.json"
COMPARISON_PATH = REPORTS_DIR / "model_comparison.csv"
ALLOWED_EXTENSIONS = {".csv"}

app = Flask(__name__, template_folder=str(PROJECT_ROOT / "templates"), static_folder=str(PROJECT_ROOT / "static"))
app.secret_key = "netguard-ai-student-demo"


def ensure_project_folders():
    """Create folders used by the dashboard if they do not exist yet."""
    DATA_PROCESSED_DIR.mkdir(parents=True, exist_ok=True)
    DATA_SAMPLE_DIR.mkdir(parents=True, exist_ok=True)
    REPORTS_DIR.mkdir(parents=True, exist_ok=True)
    (REPORTS_DIR / "figures").mkdir(parents=True, exist_ok=True)
    MODELS_DIR.mkdir(parents=True, exist_ok=True)


def load_json(path):
    """Read JSON safely. Return an empty dict when the file is missing or invalid."""
    if not path.exists():
        return {}

    try:
        with path.open("r", encoding="utf-8") as file:
            return json.load(file)
    except (json.JSONDecodeError, OSError):
        return {}


def load_model_comparison():
    """Read model comparison CSV safely for Chart.js."""
    if not COMPARISON_PATH.exists():
        return []

    try:
        return pd.read_csv(COMPARISON_PATH).fillna(0).to_dict(orient="records")
    except Exception:
        return []


def latest_processed_csv():
    """Find the newest processed CSV as the default training input."""
    csv_files = list(DATA_PROCESSED_DIR.glob("*.csv"))
    if not csv_files:
        return None
    return max(csv_files, key=lambda path: path.stat().st_mtime)


def sample_csv_path():
    """Return the default sample CSV used for prediction demos."""
    path = DATA_SAMPLE_DIR / "sample_cicids2017.csv"
    return path if path.exists() else None


def infer_dataset_summary_from_csv():
    """Fallback summary for old metrics files that do not contain dataset_summary."""
    csv_path = latest_processed_csv()
    if csv_path is None:
        return {
            "total_records": 0,
            "normal_records": 0,
            "anomaly_records": 0,
            "anomaly_ratio": 0,
        }

    try:
        df = pd.read_csv(csv_path)
    except Exception:
        return {
            "total_records": 0,
            "normal_records": 0,
            "anomaly_records": 0,
            "anomaly_ratio": 0,
        }

    df.columns = df.columns.str.strip()
    label_column = "label" if "label" in df.columns else "Label_Binary" if "Label_Binary" in df.columns else None
    total_records = int(len(df))
    normal_records = 0
    anomaly_records = 0

    if label_column:
        labels = pd.to_numeric(df[label_column], errors="coerce").fillna(0).astype(int)
        normal_records = int((labels == 0).sum())
        anomaly_records = int((labels == 1).sum())

    anomaly_ratio = anomaly_records / total_records if total_records else 0
    return {
        "total_records": total_records,
        "normal_records": normal_records,
        "anomaly_records": anomaly_records,
        "anomaly_ratio": anomaly_ratio,
    }


def calculate_risk(summary):
    """Calculate risk score and recommended action from anomaly ratio."""
    anomaly_ratio = float(summary.get("anomaly_ratio", 0) or 0)
    risk_score = round(anomaly_ratio * 100, 2)

    if anomaly_ratio < 0.10:
        risk_level = "Low"
        action = "Network condition is mostly normal. Continue monitoring."
    elif anomaly_ratio < 0.30:
        risk_level = "Medium"
        action = "Inspect unusual traffic sources and review firewall/router logs."
    else:
        risk_level = "High"
        action = "Prioritize incident investigation, isolate suspicious hosts, and verify critical services."

    return {
        "risk_score": risk_score,
        "risk_level": risk_level,
        "recommended_action": action,
    }


def dashboard_context():
    """Build one reusable context for pages and the JSON API."""
    metrics = load_json(METRICS_PATH)
    comparison = load_model_comparison()
    has_training = bool(metrics.get("best_model")) and bool(comparison)

    summary = metrics.get("dataset_summary") or infer_dataset_summary_from_csv()
    risk = calculate_risk(summary)
    best_model = metrics.get("best_model", "-")
    best_model_metrics = metrics.get("models", {}).get(best_model, {})
    confusion_matrix = best_model_metrics.get("confusion_matrix", [[0, 0], [0, 0]])

    return {
        "has_training": has_training,
        "friendly_message": "" if has_training else "Belum ada hasil training.",
        "best_model": best_model if has_training else "-",
        "best_model_accuracy": float(metrics.get("best_model_accuracy") or best_model_metrics.get("accuracy") or 0),
        "summary": summary,
        "risk": risk,
        "comparison": comparison,
        "confusion_matrix": confusion_matrix,
        "latest_dataset": latest_processed_csv().name if latest_processed_csv() else "-",
    }


def allowed_csv(filename):
    """Validate upload extension."""
    return Path(filename).suffix.lower() in ALLOWED_EXTENSIONS


def load_research_summary():
    """Load exported research summary for the report page."""
    report = load_json(RESEARCH_SUMMARY_OUTPUT)
    if not report.get("best_model") and not report.get("risk_level"):
        return {}
    return report


def choose_available_port(preferred_ports):
    """Use port 5000 when possible, otherwise choose the next safe demo port."""
    for port in preferred_ports:
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
            if sock.connect_ex(("127.0.0.1", port)) != 0:
                return port
    return 5050


@app.route("/")
def dashboard():
    """Main monitoring dashboard."""
    return render_template("dashboard.html", data=dashboard_context())


@app.route("/upload", methods=["GET", "POST"])
def upload():
    """Upload a processed CSV that contains a binary label column."""
    ensure_project_folders()

    if request.method == "POST":
        uploaded_file = request.files.get("dataset")
        if not uploaded_file or uploaded_file.filename == "":
            flash("Pilih file CSV terlebih dahulu.", "warning")
            return redirect(url_for("upload"))

        if not allowed_csv(uploaded_file.filename):
            flash("Format file harus .csv.", "danger")
            return redirect(url_for("upload"))

        filename = secure_filename(uploaded_file.filename)
        save_path = UPLOAD_DIR / filename
        uploaded_file.save(save_path)
        flash("Dataset berhasil diupload ke data/processed/{}.".format(filename), "success")
        return redirect(url_for("train_page"))

    return render_template("upload.html", latest_dataset=latest_processed_csv())


@app.route("/train", methods=["GET", "POST"])
def train_page():
    """Run model training from the latest processed CSV."""
    ensure_project_folders()
    dataset_path = latest_processed_csv()

    if request.method == "POST":
        if dataset_path is None:
            flash("Belum ada dataset di data/processed/. Upload atau jalankan preprocessing dulu.", "warning")
            return redirect(url_for("train_page"))

        try:
            train_models(str(dataset_path))
            flash("Training selesai. Dashboard sudah diperbarui.", "success")
            return redirect(url_for("dashboard"))
        except Exception as error:
            flash("Training gagal: {}".format(error), "danger")
            return redirect(url_for("train_page"))

    return render_template("train.html", dataset_path=dataset_path, data=dashboard_context())


@app.route("/result")
def result():
    """Show the current prediction and monitoring result summary."""
    return render_template("result.html", data=dashboard_context())


@app.route("/predict", methods=["GET", "POST"])
def predict():
    """Predict new traffic data using the saved best model."""
    ensure_project_folders()
    prediction = None

    if request.method == "POST":
        action = request.form.get("action")

        if action == "sample":
            input_path = sample_csv_path()
            if input_path is None:
                flash("Sample CSV belum tersedia di data/sample/.", "warning")
                return redirect(url_for("predict"))
        else:
            uploaded_file = request.files.get("dataset")
            if not uploaded_file or uploaded_file.filename == "":
                flash("Pilih file CSV atau gunakan tombol Use Sample CSV.", "warning")
                return redirect(url_for("predict"))

            if not allowed_csv(uploaded_file.filename):
                flash("Format file harus .csv.", "danger")
                return redirect(url_for("predict"))

            filename = secure_filename(uploaded_file.filename)
            input_path = PREDICT_UPLOAD_DIR / filename
            uploaded_file.save(input_path)

        try:
            prediction = run_prediction(input_path)
            flash("Prediksi selesai. Hasil disimpan ke reports/prediction_result.csv.", "success")
        except Exception as error:
            flash(str(error), "danger")
            return redirect(url_for("predict"))

    return render_template("predict.html", prediction=prediction)


@app.route("/report")
def report():
    """Show concise research summary exported by the prediction system."""
    return render_template("report.html", report=load_research_summary())


@app.route("/api/summary")
def api_summary():
    """JSON endpoint used by Chart.js on the dashboard."""
    return jsonify(dashboard_context())


if __name__ == "__main__":
    ensure_project_folders()
    selected_port = choose_available_port([5000, 5001, 5002])
    print("NetGuard AI dashboard running at http://127.0.0.1:{}".format(selected_port))
    app.run(host="127.0.0.1", port=selected_port, debug=True, use_reloader=False)
