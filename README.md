# NetGuard AI

NetGuard AI is a low-budget student research project for predictive network failure and anomaly monitoring. The first version focuses on CICIDS2017-style CSV traffic data, trains machine learning models, and shows the results in a simple Flask dashboard.

The project is designed for normal student laptops. It does not require a paid API, GPU, cloud server, or expensive hardware.

## Current Stage

Implemented:

- Stage 1: project initialization and CICIDS2017 preprocessing.
- Stage 2: model training and evaluation.
- Stage 3: Flask dashboard.
- Stage 4: prediction system and research report export.
- UAS AI package: research gap, novelty, research method, experiment design, IEEE draft, and Google Drive artifact structure.

## Folder Structure

```text
NetGuard-AI/
+-- app/
|   +-- preprocessing.py
|   +-- utils.py
|   +-- train.py
|   +-- evaluate.py
|   +-- test.py
|   +-- predictor.py
|   +-- predict.py
|   +-- main.py
+-- data/
|   +-- raw/
|   +-- sample/
|   +-- processed/
+-- models/
+-- reports/
|   +-- figures/
+-- static/
|   +-- css/
|   +-- js/
+-- templates/
+-- Achmad_Maulana_241730016_UAS_AI/
+-- requirements.txt
+-- README.md
```

## Why CICIDS2017 First?

CICIDS2017 is useful for academic network-security research because it contains realistic network-flow features and labeled traffic. For this beginner version, the system uses CSV flow data instead of raw PCAP files so it can run on a normal laptop.

UNSW-NB15 can be added later as an optional extension after the CICIDS2017 pipeline is stable.

## Windows CMD Setup

Run commands from the project root:

```cmd
cd C:\Users\Asus_\OneDrive\Documents\NetGuard-AI
py -3 -m venv venv
venv\Scripts\activate
py -3 -m pip install -r requirements.txt
```

If `python` points to Python 3 on your laptop, this also works:

```cmd
python -m pip install -r requirements.txt
```

## Stage 1: Run Preprocessing

Use the small sample CSV first:

```cmd
py -3 app\preprocessing.py
```

Expected processed file:

```cmd
data\processed\sample_cicids2017_processed.csv
```

## Stage 2: Train Models

```cmd
py -3 app\train.py
py -3 app\test.py
```

Outputs:

- `models\netguard_best_model.pkl`
- `reports\metrics.json`
- `reports\model_comparison.csv`
- `reports\figures\confusion_matrix.png`

## Stage 3: Run Dashboard

```cmd
py -3 app\main.py
```

If your `python` command points to Python 3, you can also run:

```cmd
python app\main.py
```

Open the URL printed in the terminal, usually:

```text
http://127.0.0.1:5000
```

If port 5000 is busy, the app automatically tries 5001 or 5002.

## Stage 4: Predict New Data

Run prediction from Windows CMD:

```cmd
py -3 app\predictor.py --input data\sample\sample_cicids2017.csv
```

Or use the UAS-compatible wrapper:

```cmd
py -3 app\predict.py
```

Outputs:

- `reports\prediction_result.csv`
- `reports\research_summary.json`

You can also open the dashboard and use:

```text
Predict New Data
View Research Report
```

## Common Errors

`ModuleNotFoundError`

Run:

```cmd
py -3 -m pip install -r requirements.txt
```

`Input file not found`

Check that you are running the command from the project root.

`Label column not found`

Use a CICIDS2017-style CSV with a `Label` column.

Very high accuracy on sample data

The sample CSV is only for testing the pipeline. Real research results must use a larger CICIDS2017 subset.

## UAS AI Research Package

The updated UAS requirement asks for literature review, research gap, novelty, implementation, experiment analysis, IEEE draft, Turnitin readiness, and Google Drive artifacts. The project now includes:

- `reports\uas_literature_mapping_and_gap.md`
- `reports\uas_implementation_experiment_plan.md`
- `reports\uas_ieee_draft.md`
- `reports\uas_artifact_drive_structure.md`
- `reports\uas_submission_checklist_and_rubric.md`
- `Achmad_Maulana_241730016_UAS_AI\`

Final-submission note:

- The final package folder is `Achmad_Maulana_241730016_UAS_AI`.
- The literature mapping, comparison matrix, research gap, novelty, IEEE draft, presentation, source code, model, metrics, and deployment source are already prepared.
- The included sample CICIDS2017-style CSV is for smoke testing on a normal Windows laptop.
- For final academic scoring, rerun the same pipeline using the official CICIDS2017 CSV subset from UNB and replace the smoke-test metrics with the larger-dataset metrics.
- Attach the official Turnitin report with maximum 15% similarity after checking the generated IEEE draft through the campus/account Turnitin system.
- Upload all artifacts to Google Drive with "Anyone with the link can view".

## Recommended Full UAS Command Flow

```cmd
cd C:\Users\Asus_\OneDrive\Documents\NetGuard-AI
py -3 -m pip install -r requirements.txt
py -3 app\preprocessing.py
py -3 app\train.py
py -3 app\test.py
py -3 app\predict.py
py -3 app\main.py
```

If `python` points to Python 3 on your laptop, these commands also work:

```cmd
python app\preprocessing.py
python app\train.py
python app\test.py
python app\predict.py
python app\main.py
```
