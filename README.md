# NetGuard AI

NetGuard AI is a Flask-based network anomaly monitoring dashboard for CICIDS2017-style CSV traffic data. The repository is kept as source code only: application code, templates, static assets, dependency files, and deployment configuration.

Research documents, datasets, trained models, PPT, DOCX, PDF, Turnitin reports, and full UAS artifacts are intentionally not stored in this GitHub repository. Keep those files in Google Drive or local storage.

## Features

- Upload processed network traffic CSV files.
- Train three machine learning models: Logistic Regression, Decision Tree, and Random Forest.
- Select the best model using F1-score, recall, and accuracy.
- Predict new traffic CSV files as Normal or Anomaly.
- Display dashboard summary, model comparison, confusion matrix data, risk score, risk level, and recommended action.
- Export training and prediction outputs locally in `reports/`.

## Repository Structure

```text
NetGuard-AI/
├── app/
│   ├── main.py
│   ├── preprocessing.py
│   ├── train.py
│   ├── evaluate.py
│   ├── predictor.py
│   ├── predict.py
│   ├── test.py
│   ├── utils.py
│   └── database.py
├── static/
│   ├── css/
│   └── js/
├── templates/
├── Procfile
├── railway.json
├── runtime.txt
├── requirements.txt
└── README.md
```

## Files Not Stored In GitHub

The following are ignored on purpose:

```text
data/
models/
reports/
*.pkl
*.csv
*.docx
*.pdf
*.pptx
*.xlsx
Achmad_Maulana_241730016_UAS_AI/
```

## Local Setup On Windows

```cmd
cd C:\Users\Asus_\OneDrive\Documents\NetGuard-AI
py -3 -m venv venv
venv\Scripts\activate
py -3 -m pip install --upgrade pip
py -3 -m pip install -r requirements.txt
```

Run the Flask dashboard locally:

```cmd
py -3 app\main.py
```

Open:

```text
http://127.0.0.1:5000
```

If port 5000 is busy, the app tries another local port.

## VPS Deployment

On Ubuntu VPS:

```bash
cd /var/www
sudo git clone https://github.com/achmadmaulana1/NetGuard-AI.git
cd NetGuard-AI
python3 -m venv venv
source venv/bin/activate
pip install --upgrade pip
pip install -r requirements.txt
gunicorn app.main:app --bind 127.0.0.1:8000
```

For production, run Gunicorn with `systemd` and reverse proxy it through Nginx.

## Railway Or Render Start Command

```bash
gunicorn app.main:app --bind 0.0.0.0:$PORT
```

## Domain Example

Current deployment target:

```text
https://netguard.nexusmad.biz.id/
```

## Notes

This repository is only for the runnable web application source code. Research artifacts and large generated files should remain outside GitHub.
