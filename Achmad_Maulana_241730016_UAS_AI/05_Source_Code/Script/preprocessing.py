"""NetGuard AI - CICIDS2017 preprocessing.

This script cleans a CICIDS2017-style CSV and creates a processed CSV that is
ready for machine learning.

Windows CMD example:
    py -3 app\\preprocessing.py --input data\\sample\\sample_cicids2017.csv --output data\\processed\\sample_cicids2017_processed.csv
"""

import sys
if sys.version_info < (3, 8):
    raise RuntimeError(
        "NetGuard AI membutuhkan Python 3.8 atau lebih baru. "
        "Di Windows gunakan: py -3 app\\preprocessing.py"
    )

import argparse
from pathlib import Path

import numpy as np
import pandas as pd

from utils import print_section, safe_read_csv, save_csv


def normalize_column_names(df):
    """Remove whitespace around column names."""
    df = df.copy()
    df.columns = df.columns.str.strip()
    return df


def validate_label_column(df):
    """Make sure the CICIDS2017 Label column exists."""
    if "Label" not in df.columns:
        raise ValueError(
            "Label column not found.\n"
            "Fix: use a CICIDS2017-style CSV that contains a column named 'Label'."
        )


def convert_labels(df):
    """Convert CICIDS2017 text labels into binary ML labels."""
    df = df.copy()
    label_text = df["Label"].astype(str).str.strip()

    # CICIDS2017 uses BENIGN for normal traffic. Some datasets use Normal.
    normal_mask = label_text.str.lower().isin(["benign", "normal"])
    df["label"] = np.where(normal_mask, 0, 1)
    df["label_text"] = label_text
    return df


def clean_features(df):
    """Clean numeric feature columns and keep the binary label."""
    df = df.copy()

    # Replace common infinity strings and numeric infinity values with NaN.
    df = df.replace(["Infinity", "inf", "Inf", "-Infinity", "-inf", "-Inf"], np.nan)
    df = df.replace([np.inf, -np.inf], np.nan)

    feature_columns = [column for column in df.columns if column not in ["Label", "label", "label_text"]]

    for column in feature_columns:
        df[column] = pd.to_numeric(df[column], errors="coerce")

    numeric_medians = df[feature_columns].median(numeric_only=True)
    df[feature_columns] = df[feature_columns].fillna(numeric_medians).fillna(0)

    # Keep label_text for student explanation and label for model training.
    final_columns = feature_columns + ["label", "label_text"]
    return df[final_columns]


def preprocess_cicids2017(input_path, output_path):
    """Run the full preprocessing workflow."""
    print_section("NETGUARD AI - PREPROCESSING")
    print("Input file: {}".format(input_path))
    print("Output file: {}".format(output_path))

    raw_df = safe_read_csv(input_path)
    original_records = len(raw_df)

    df = normalize_column_names(raw_df)
    validate_label_column(df)
    df = convert_labels(df)
    df = clean_features(df)
    df = df.drop_duplicates()

    processed_records = len(df)
    normal_traffic = int((df["label"] == 0).sum())
    anomaly_traffic = int((df["label"] == 1).sum())

    saved_path = save_csv(df, Path(output_path))

    print("\nOriginal records: {}".format(original_records))
    print("Processed records: {}".format(processed_records))
    print("Normal traffic: {}".format(normal_traffic))
    print("Anomaly traffic: {}".format(anomaly_traffic))
    print("\nFinal columns:")
    for column in df.columns:
        print("- {}".format(column))
    print("\nProcessed dataset saved successfully: {}".format(saved_path))

    return df


def parse_args():
    parser = argparse.ArgumentParser(description="Preprocess a CICIDS2017-style CSV file.")
    parser.add_argument(
        "--input",
        default="data\\sample\\sample_cicids2017.csv",
        help="Input CSV path, default: data\\sample\\sample_cicids2017.csv",
    )
    parser.add_argument(
        "--output",
        default="data\\processed\\sample_cicids2017_processed.csv",
        help="Output CSV path, default: data\\processed\\sample_cicids2017_processed.csv",
    )
    return parser.parse_args()


if __name__ == "__main__":
    args = parse_args()
    preprocess_cicids2017(args.input, args.output)
