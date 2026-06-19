"""NetGuard AI - Prediction system.

This module loads the trained model, prepares a new CICIDS2017-style CSV, and
exports prediction results for the dashboard and research report.

Windows CMD example:
    py -3 app\\predictor.py --input data\\sample\\sample_cicids2017.csv
"""

import argparse
import json
import sys
if sys.version_info < (3, 8):
    raise RuntimeError(
        "NetGuard AI membutuhkan Python 3.8 atau lebih baru. "
        "Di Windows gunakan: py -3 app\\predictor.py"
    )

from pathlib import Path

import joblib
import numpy as np
import pandas as pd


PROJECT_ROOT = Path(__file__).resolve().parents[1]
MODEL_PATH = PROJECT_ROOT / "models" / "netguard_best_model.pkl"
REPORTS_DIR = PROJECT_ROOT / "reports"
PREDICTION_OUTPUT = REPORTS_DIR / "prediction_result.csv"
RESEARCH_SUMMARY_OUTPUT = REPORTS_DIR / "research_summary.json"
METRICS_PATH = REPORTS_DIR / "metrics.json"


def ensure_reports_dir():
    """Create the reports folder before exporting files."""
    REPORTS_DIR.mkdir(parents=True, exist_ok=True)


def load_metrics():
    """Load saved training metrics for the research report."""
    if not METRICS_PATH.exists():
        return {}

    try:
        with METRICS_PATH.open("r", encoding="utf-8") as file:
            return json.load(file)
    except (json.JSONDecodeError, OSError):
        return {}


def load_trained_model(model_path=MODEL_PATH):
    """Load the best trained model from disk."""
    if not Path(model_path).exists():
        raise FileNotFoundError(
            "Model belum dilatih.\n"
            "Fix: jalankan py -3 app\\train.py --input data\\processed\\sample_cicids2017_processed.csv"
        )

    return joblib.load(model_path)


def get_expected_features(model):
    """Read feature names from a scikit-learn model or pipeline."""
    if hasattr(model, "feature_names_in_"):
        return list(model.feature_names_in_)

    if hasattr(model, "named_steps"):
        for step in model.named_steps.values():
            if hasattr(step, "feature_names_in_"):
                return list(step.feature_names_in_)

    return []


def convert_text_label_to_binary(series):
    """Convert CICIDS2017 text labels to 0=Normal and 1=Anomaly."""
    label_text = series.astype(str).str.strip()
    normal_mask = label_text.str.lower().isin(["benign", "normal"])
    return np.where(normal_mask, 0, 1)


def prepare_prediction_features(input_path, expected_features):
    """Clean a new CSV and align its columns with the trained model."""
    csv_path = Path(input_path)
    if not csv_path.exists():
        raise FileNotFoundError(
            "CSV tidak ditemukan: {}\n"
            "Fix: periksa path file dan jalankan command dari root project.".format(csv_path)
        )

    try:
        original_df = pd.read_csv(csv_path)
    except Exception as error:
        raise ValueError(
            "CSV tidak bisa dibaca: {}\n"
            "Detail error: {}".format(csv_path, error)
        )

    if original_df.empty:
        raise ValueError("CSV kosong. Gunakan file yang memiliki minimal satu baris data.")

    cleaned_df = original_df.copy()
    cleaned_df.columns = cleaned_df.columns.str.strip()

    if "Label" in cleaned_df.columns and "label" not in cleaned_df.columns:
        cleaned_df["actual_label"] = convert_text_label_to_binary(cleaned_df["Label"])
    elif "Label_Binary" in cleaned_df.columns and "label" not in cleaned_df.columns:
        cleaned_df["actual_label"] = pd.to_numeric(cleaned_df["Label_Binary"], errors="coerce").fillna(0).astype(int)
    elif "label" in cleaned_df.columns:
        cleaned_df["actual_label"] = pd.to_numeric(cleaned_df["label"], errors="coerce").fillna(0).astype(int)

    drop_columns = ["Label", "label", "Label_Binary", "label_text", "Label_Text", "actual_label"]
    feature_df = cleaned_df.drop(columns=[column for column in drop_columns if column in cleaned_df.columns])

    feature_df = feature_df.replace(["Infinity", "inf", "Inf", "-Infinity", "-inf", "-Inf"], np.nan)
    feature_df = feature_df.replace([np.inf, -np.inf], np.nan)
    feature_df = feature_df.apply(pd.to_numeric, errors="coerce")
    feature_df = feature_df.dropna(axis=1, how="all")
    feature_df = feature_df.fillna(feature_df.median(numeric_only=True)).fillna(0)

    if expected_features:
        for column in expected_features:
            if column not in feature_df.columns:
                feature_df[column] = 0
        feature_df = feature_df[expected_features]

    if feature_df.empty:
        raise ValueError(
            "CSV tidak memiliki fitur numerik yang bisa diprediksi.\n"
            "Fix: gunakan CSV CICIDS2017 dengan kolom traffic numerik."
        )

    return original_df, cleaned_df, feature_df


def calculate_risk(anomaly_ratio):
    """Calculate risk score, risk level, and recommended action."""
    risk_score = round(float(anomaly_ratio) * 100, 2)

    if anomaly_ratio < 0.10:
        risk_level = "Low"
        recommended_action = "Network condition is mostly normal. Continue monitoring."
    elif anomaly_ratio < 0.30:
        risk_level = "Medium"
        recommended_action = "Inspect unusual traffic sources and review firewall/router logs."
    else:
        risk_level = "High"
        recommended_action = "Prioritize incident investigation, isolate suspicious hosts, and verify critical services."

    return risk_score, risk_level, recommended_action


def build_research_summary(summary, metrics):
    """Create a concise research summary export."""
    best_model = metrics.get("best_model", "Unknown")
    best_metrics = metrics.get("models", {}).get(best_model, {})

    return {
        "project_title": "NetGuard AI - Predictive Network Failure & Anomaly Monitoring",
        "dataset": "CICIDS2017-style network traffic CSV",
        "best_model": best_model,
        "accuracy": best_metrics.get("accuracy", 0),
        "precision": best_metrics.get("precision", 0),
        "recall": best_metrics.get("recall", 0),
        "f1_score": best_metrics.get("f1_score", 0),
        "risk_score": summary["risk_score"],
        "risk_level": summary["risk_level"],
        "conclusion": (
            "The trained model can classify new network traffic records into Normal or "
            "Anomaly classes. The current prediction batch has a {} risk level with "
            "{}% anomaly ratio.".format(summary["risk_level"], summary["risk_score"])
        ),
    }


def run_prediction(input_path, model_path=MODEL_PATH):
    """Run prediction and export CSV/JSON report artifacts."""
    ensure_reports_dir()
    model = load_trained_model(model_path)
    expected_features = get_expected_features(model)
    original_df, cleaned_df, feature_df = prepare_prediction_features(input_path, expected_features)

    predictions = model.predict(feature_df)
    predictions = pd.Series(predictions).astype(int)
    prediction_text = predictions.map({0: "Normal", 1: "Anomaly"}).fillna("Unknown")

    result_df = original_df.copy()
    result_df["prediction"] = predictions
    result_df["prediction_label"] = prediction_text
    result_df.to_csv(PREDICTION_OUTPUT, index=False)

    total_records = int(len(result_df))
    normal_records = int((predictions == 0).sum())
    anomaly_records = int((predictions == 1).sum())
    anomaly_ratio = anomaly_records / total_records if total_records else 0
    risk_score, risk_level, recommended_action = calculate_risk(anomaly_ratio)

    summary = {
        "input_file": str(input_path),
        "total_records": total_records,
        "normal_records": normal_records,
        "anomaly_records": anomaly_records,
        "anomaly_ratio": anomaly_ratio,
        "risk_score": risk_score,
        "risk_level": risk_level,
        "recommended_action": recommended_action,
        "prediction_output": str(PREDICTION_OUTPUT),
    }

    research_summary = build_research_summary(summary, load_metrics())
    with RESEARCH_SUMMARY_OUTPUT.open("w", encoding="utf-8") as file:
        json.dump(research_summary, file, indent=4)

    return {
        "summary": summary,
        "research_summary": research_summary,
        "preview": result_df.head(20).to_dict(orient="records"),
    }


def print_prediction_summary(result):
    """Print prediction output for Windows CMD users."""
    summary = result["summary"]
    line = "=" * 50
    print("\n{}".format(line))
    print("NETGUARD AI - PREDICTION")
    print(line)
    print("Total data diprediksi: {}".format(summary["total_records"]))
    print("Normal: {}".format(summary["normal_records"]))
    print("Anomaly: {}".format(summary["anomaly_records"]))
    print("Anomaly ratio: {:.2f}%".format(summary["anomaly_ratio"] * 100))
    print("Risk level: {}".format(summary["risk_level"]))
    print("Recommended action: {}".format(summary["recommended_action"]))
    print("Prediction CSV: {}".format(PREDICTION_OUTPUT))
    print("Research summary: {}".format(RESEARCH_SUMMARY_OUTPUT))


def parse_args():
    parser = argparse.ArgumentParser(description="Predict new network traffic CSV data.")
    parser.add_argument("--input", required=True, help="CSV input path, for example data\\sample\\sample_cicids2017.csv")
    return parser.parse_args()


if __name__ == "__main__":
    args = parse_args()
    prediction_result = run_prediction(args.input)
    print_prediction_summary(prediction_result)
