"""NetGuard AI - Test/Evaluation wrapper.

This file is provided for UAS artifact compliance. It calls the existing
evaluation summary script so the Google Drive source-code folder can include a
clear `test.py` entry.

Windows CMD:
    py -3 app\\test.py
"""

from evaluate import show_evaluation_summary


if __name__ == "__main__":
    show_evaluation_summary()
