"""NetGuard AI - Prediction wrapper.

This file is provided for UAS artifact compliance. It calls the existing
prediction system using the sample CICIDS2017-style CSV by default.

Windows CMD:
    py -3 app\\predict.py
"""

import argparse

from predictor import print_prediction_summary, run_prediction


def parse_args():
    parser = argparse.ArgumentParser(description="Predict network anomaly data.")
    parser.add_argument(
        "--input",
        default="data\\sample\\sample_cicids2017.csv",
        help="Input CSV path, default: data\\sample\\sample_cicids2017.csv",
    )
    return parser.parse_args()


if __name__ == "__main__":
    args = parse_args()
    result = run_prediction(args.input)
    print_prediction_summary(result)
