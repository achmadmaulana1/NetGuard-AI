"""
NetGuard AI - Model Training

This script trains three beginner-friendly machine learning models for
binary network anomaly detection:
1. Logistic Regression
2. Decision Tree
3. Random Forest

Example for Windows CMD:
    py -3 app\\train.py --input data\\processed\\sample_cicids2017_processed.csv
"""

import argparse
import json
import sys
if sys.version_info < (3, 8):
    raise RuntimeError(
        "NetGuard AI membutuhkan Python 3.8 atau lebih baru. "
        "Di Windows gunakan: py -3 app\\train.py"
    )

from pathlib import Path

import joblib
import matplotlib.pyplot as plt
import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import (
    accuracy_score,
    confusion_matrix,
    f1_score,
    precision_score,
    recall_score,
)
from sklearn.model_selection import train_test_split
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.tree import DecisionTreeClassifier


PROJECT_ROOT = Path(__file__).resolve().parents[1]
MODELS_DIR = PROJECT_ROOT / "models"
REPORTS_DIR = PROJECT_ROOT / "reports"
FIGURES_DIR = REPORTS_DIR / "figures"


def print_section(title):
    """Print a readable section title for beginner-friendly terminal output."""
    line = "=" * 50
    print("\n{}".format(line))
    print(title)
    print("{}".format(line))


def ensure_output_directories():
    """Create output folders if they do not exist yet."""
    MODELS_DIR.mkdir(parents=True, exist_ok=True)
    REPORTS_DIR.mkdir(parents=True, exist_ok=True)
    FIGURES_DIR.mkdir(parents=True, exist_ok=True)


def load_processed_dataset(input_path):
    """Load a processed CSV and validate that the target column exists."""
    csv_path = Path(input_path)

    if not csv_path.exists():
        raise FileNotFoundError(
            "Input file not found: {}\n".format(csv_path) +
            "Tip: run preprocessing first, then use a CSV from data\\processed\\."
        )

    df = pd.read_csv(csv_path)
    df.columns = df.columns.str.strip()

    # Requirement: detect target column named "label".
    # Stage 1 may produce "Label_Binary", so this fallback keeps the project
    # friendly while still normalizing the final target name to "label".
    if "label" not in df.columns:
        if "Label_Binary" in df.columns:
            df = df.rename(columns={"Label_Binary": "label"})
        else:
            raise ValueError(
                "Target column named 'label' was not found.\n"
                "Fix: make sure the processed CSV contains a binary target column named 'label'."
            )

    return df


def split_features_and_target(df):
    """Separate feature columns from the binary target column."""
    y = pd.to_numeric(df["label"], errors="coerce")
    X = df.drop(columns=["label"])

    # Remove original text labels if they accidentally remain in the processed file.
    for text_label_column in ["Label", "label_text", "Label_Text"]:
        if text_label_column in X.columns:
            X = X.drop(columns=[text_label_column])

    # Keep only numeric feature columns because these models expect numbers.
    X = X.apply(pd.to_numeric, errors="coerce")
    X = X.dropna(axis=1, how="all")
    X = X.fillna(X.median(numeric_only=True)).fillna(0)
    y = y.fillna(0).astype(int)

    if X.empty:
        raise ValueError(
            "No numeric feature columns were found.\n"
            "Fix: check the preprocessing output and keep numeric CICIDS2017 features."
        )

    return X, y


def get_models():
    """Define the three required models."""
    return {
        "Logistic Regression": Pipeline(
            steps=[
                ("scaler", StandardScaler()),
                (
                    "model",
                    LogisticRegression(max_iter=1000, random_state=42),
                ),
            ]
        ),
        "Decision Tree": DecisionTreeClassifier(random_state=42),
        "Random Forest": RandomForestClassifier(
            n_estimators=100,
            random_state=42,
        ),
    }


def calculate_metrics(y_true, y_pred):
    """Calculate classification metrics for binary anomaly detection."""
    return {
        "accuracy": accuracy_score(y_true, y_pred),
        "precision": precision_score(y_true, y_pred, zero_division=0),
        "recall": recall_score(y_true, y_pred, zero_division=0),
        "f1_score": f1_score(y_true, y_pred, zero_division=0),
        "confusion_matrix": confusion_matrix(y_true, y_pred, labels=[0, 1]).tolist(),
    }


def select_best_model(results):
    """Choose best model by F1-score, then Recall, then Accuracy."""
    return max(
        results,
        key=lambda item: (
            item["metrics"]["f1_score"],
            item["metrics"]["recall"],
            item["metrics"]["accuracy"],
        ),
    )


def save_confusion_matrix_image(matrix, output_path):
    """Save a simple confusion matrix image for research documentation."""
    plt.figure(figsize=(5, 4))
    plt.imshow(matrix, interpolation="nearest", cmap="Blues")
    plt.title("Confusion Matrix - Best Model")
    plt.colorbar()

    labels = ["Normal", "Anomaly"]
    tick_marks = range(len(labels))
    plt.xticks(tick_marks, labels)
    plt.yticks(tick_marks, labels)
    plt.xlabel("Predicted Label")
    plt.ylabel("Actual Label")

    for row_index, row in enumerate(matrix):
        for col_index, value in enumerate(row):
            plt.text(col_index, row_index, value, ha="center", va="center")

    plt.tight_layout()
    plt.savefig(output_path)
    plt.close()


def build_dataset_summary(df, y):
    """Create dataset summary values used by the Flask dashboard."""
    total_records = int(len(df))
    normal_records = int((y == 0).sum())
    anomaly_records = int((y == 1).sum())
    anomaly_ratio = anomaly_records / total_records if total_records else 0

    return {
        "total_records": total_records,
        "normal_records": normal_records,
        "anomaly_records": anomaly_records,
        "anomaly_ratio": anomaly_ratio,
    }


def save_reports(results, best_result, dataset_summary):
    """Save model metrics, comparison table, and confusion matrix image."""
    metrics_output = REPORTS_DIR / "metrics.json"
    comparison_output = REPORTS_DIR / "model_comparison.csv"
    matrix_output = FIGURES_DIR / "confusion_matrix.png"

    metrics_payload = {
        "best_model": best_result["model_name"],
        "best_model_accuracy": best_result["metrics"]["accuracy"],
        "selection_rule": "F1-score, then Recall, then Accuracy",
        "dataset_summary": dataset_summary,
        "models": {
            result["model_name"]: result["metrics"]
            for result in results
        },
    }

    with metrics_output.open("w", encoding="utf-8") as file:
        json.dump(metrics_payload, file, indent=4)

    comparison_rows = []
    for result in results:
        metrics = result["metrics"]
        comparison_rows.append(
            {
                "model": result["model_name"],
                "accuracy": metrics["accuracy"],
                "precision": metrics["precision"],
                "recall": metrics["recall"],
                "f1_score": metrics["f1_score"],
            }
        )

    pd.DataFrame(comparison_rows).to_csv(comparison_output, index=False)
    save_confusion_matrix_image(best_result["metrics"]["confusion_matrix"], matrix_output)


def train_models(input_path):
    """Main training workflow."""
    ensure_output_directories()

    print_section("NETGUARD AI - MODEL TRAINING")
    print("Input file: {}".format(input_path))

    df = load_processed_dataset(input_path)

    if len(df) < 30:
        print(
            "\nFriendly warning: this dataset is very small. "
            "The code will still run, but metrics may not represent real performance."
        )

    X, y = split_features_and_target(df)

    if y.nunique() < 2:
        raise ValueError(
            "The target column must contain both classes: 0=Normal and 1=Anomaly.\n"
            "Fix: use a processed dataset with at least one normal and one anomaly record."
        )

    stratify_target = y if y.value_counts().min() >= 2 else None
    if stratify_target is None:
        print(
            "\nFriendly warning: one class has fewer than 2 records. "
            "Train-test split will run without stratification."
        )

    X_train, X_test, y_train, y_test = train_test_split(
        X,
        y,
        test_size=0.2,
        random_state=42,
        stratify=stratify_target,
    )

    print("Total records: {}".format(len(df)))
    print("Training records: {}".format(len(X_train)))
    print("Testing records: {}".format(len(X_test)))

    results = []
    for model_name, model in get_models().items():
        print("\nTraining: {}".format(model_name))
        model.fit(X_train, y_train)
        predictions = model.predict(X_test)
        metrics = calculate_metrics(y_test, predictions)

        results.append(
            {
                "model_name": model_name,
                "model": model,
                "metrics": metrics,
            }
        )

        print("Accuracy : {:.4f}".format(metrics["accuracy"]))
        print("Precision: {:.4f}".format(metrics["precision"]))
        print("Recall   : {:.4f}".format(metrics["recall"]))
        print("F1-score : {:.4f}".format(metrics["f1_score"]))

    best_result = select_best_model(results)
    best_model_path = MODELS_DIR / "netguard_best_model.pkl"
    joblib.dump(best_result["model"], best_model_path)
    dataset_summary = build_dataset_summary(df, y)
    save_reports(results, best_result, dataset_summary)

    print_section("TRAINING COMPLETE")
    print("Best model: {}".format(best_result["model_name"]))
    print("Saved model: {}".format(best_model_path))
    print("Saved metrics: {}".format(REPORTS_DIR / "metrics.json"))
    print("Saved comparison: {}".format(REPORTS_DIR / "model_comparison.csv"))
    print("Saved confusion matrix: {}".format(FIGURES_DIR / "confusion_matrix.png"))


def parse_args():
    parser = argparse.ArgumentParser(
        description="Train NetGuard AI anomaly detection models."
    )
    parser.add_argument(
        "--input",
        default="data\\processed\\sample_cicids2017_processed.csv",
        help="Path to processed CSV, default: data\\processed\\sample_cicids2017_processed.csv",
    )
    return parser.parse_args()


if __name__ == "__main__":
    args = parse_args()
    train_models(args.input)
