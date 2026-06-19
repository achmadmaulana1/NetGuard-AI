"""
NetGuard AI - Evaluation Report Viewer

This script reads saved evaluation artifacts and prints a readable summary.

Example for Windows CMD:
    py -3 app\\evaluate.py
"""

import json
import sys
if sys.version_info < (3, 8):
    raise RuntimeError(
        "NetGuard AI membutuhkan Python 3.8 atau lebih baru. "
        "Di Windows gunakan: py -3 app\\test.py"
    )

from pathlib import Path

import pandas as pd


PROJECT_ROOT = Path(__file__).resolve().parents[1]
REPORTS_DIR = PROJECT_ROOT / "reports"
METRICS_PATH = REPORTS_DIR / "metrics.json"
COMPARISON_PATH = REPORTS_DIR / "model_comparison.csv"


def print_section(title):
    """Print a readable section title for terminal output."""
    line = "=" * 50
    print("\n{}".format(line))
    print(title)
    print("{}".format(line))


def load_metrics():
    """Load metrics JSON created by app/train.py."""
    if not METRICS_PATH.exists():
        raise FileNotFoundError(
            "Metrics file not found: {}\n".format(METRICS_PATH) +
            "Fix: run python app\\train.py --input data\\processed\\your_file.csv first."
        )

    with METRICS_PATH.open("r", encoding="utf-8") as file:
        return json.load(file)


def load_model_comparison():
    """Load model comparison CSV created by app/train.py."""
    if not COMPARISON_PATH.exists():
        raise FileNotFoundError(
            "Model comparison file not found: {}\n".format(COMPARISON_PATH) +
            "Fix: run python app\\train.py --input data\\processed\\your_file.csv first."
        )

    return pd.read_csv(COMPARISON_PATH)


def show_evaluation_summary():
    """Print evaluation results for student research documentation."""
    print_section("NETGUARD AI - EVALUATION SUMMARY")

    metrics = load_metrics()
    comparison = load_model_comparison()

    print("Best model: {}".format(metrics.get("best_model", "-")))
    print("Selection rule: {}".format(metrics.get("selection_rule", "-")))

    print_section("MODEL COMPARISON")
    print(comparison.to_string(index=False))

    print_section("CONFUSION MATRICES")
    for model_name, model_metrics in metrics.get("models", {}).items():
        print("\n{}".format(model_name))
        print(model_metrics.get("confusion_matrix", []))

    print_section("RESEARCH ARTIFACTS")
    print("Metrics JSON: {}".format(METRICS_PATH))
    print("Model comparison CSV: {}".format(COMPARISON_PATH))
    print("Confusion matrix image: {}".format(REPORTS_DIR / "figures" / "confusion_matrix.png"))


if __name__ == "__main__":
    show_evaluation_summary()
