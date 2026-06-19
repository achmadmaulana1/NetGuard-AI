"""Utility helpers for NetGuard AI.

These functions keep beginner-facing scripts readable and make file errors
easier to understand for students running the project on Windows.
"""

from pathlib import Path

import pandas as pd


def ensure_directory(path):
    """Create a directory safely if it does not already exist."""
    Path(path).mkdir(parents=True, exist_ok=True)


def print_section(title):
    """Print a clean section header in the terminal."""
    line = "=" * 50
    print("\n{}".format(line))
    print(title)
    print(line)


def safe_read_csv(path):
    """Read a CSV file with friendly beginner error messages."""
    csv_path = Path(path)

    if not csv_path.exists():
        raise FileNotFoundError(
            "Input file not found: {}\n"
            "Fix: check the path and run the command from the project root.".format(csv_path)
        )

    try:
        return pd.read_csv(csv_path)
    except PermissionError:
        raise PermissionError(
            "Cannot read file: {}\n"
            "Fix: close the CSV in Excel or another program, then try again.".format(csv_path)
        )
    except Exception as error:
        raise ValueError(
            "Cannot read CSV file: {}\n"
            "Original error: {}".format(csv_path, error)
        )


def save_csv(df, path):
    """Save a DataFrame to CSV and create the output folder if needed."""
    output_path = Path(path)
    ensure_directory(output_path.parent)

    try:
        df.to_csv(output_path, index=False)
    except PermissionError:
        raise PermissionError(
            "Cannot save file: {}\n"
            "Fix: close the output CSV if it is open in Excel, then try again.".format(output_path)
        )

    return output_path
