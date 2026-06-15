# Reproducibility Checklist

## Tujuan

Checklist ini digunakan untuk memastikan eksperimen NetGuard AI dapat dijalankan ulang oleh peneliti lain, dosen pembimbing, atau penguji dengan hasil yang dapat ditelusuri.

## Environment Checklist

- [ ] Sistem operasi dicatat.
- [ ] Python version dicatat.
- [ ] Pandas version dicatat.
- [ ] NumPy version dicatat.
- [ ] Scikit-learn version dicatat.
- [ ] Joblib version dicatat.
- [ ] Flask version dicatat.
- [ ] Matplotlib version dicatat.
- [ ] File `requirements.txt` tersedia.

Perintah Windows CMD:

```cmd
py -3 --version
py -3 -m pip freeze
```

## Dataset Version Checklist

- [ ] Nama dataset dicatat: CICIDS2017.
- [ ] Sumber dataset dicatat.
- [ ] Nama file CSV dicatat.
- [ ] Ukuran file dicatat.
- [ ] Jumlah record awal dicatat.
- [ ] Jumlah record setelah preprocessing dicatat.
- [ ] Jumlah fitur dicatat.
- [ ] Jumlah kelas Normal dicatat.
- [ ] Jumlah kelas Anomaly dicatat.
- [ ] Jika menggunakan subset, aturan subset dijelaskan.

## Random Seed Checklist

- [ ] Random seed dicatat.
- [ ] Nilai random seed: `42`.
- [ ] `train_test_split` menggunakan `random_state = 42`.
- [ ] Logistic Regression menggunakan `random_state = 42`.
- [ ] Decision Tree menggunakan `random_state = 42`.
- [ ] Random Forest menggunakan `random_state = 42`.

## Model Configuration Checklist

### Logistic Regression

- [ ] `max_iter = 1000`
- [ ] `random_state = 42`
- [ ] Menggunakan StandardScaler.

### Decision Tree

- [ ] `random_state = 42`
- [ ] Parameter tambahan dicatat jika ada perubahan.

### Random Forest

- [ ] `n_estimators = 100`
- [ ] `random_state = 42`
- [ ] Parameter tambahan dicatat jika ada perubahan.

## Preprocessing Checklist

- [ ] Whitespace pada nama kolom dibersihkan.
- [ ] Kolom `Label` tervalidasi.
- [ ] Label `BENIGN` dikonversi menjadi `0`.
- [ ] Label serangan dikonversi menjadi `1`.
- [ ] Infinite value diganti menjadi missing value.
- [ ] Missing value diisi dengan median fitur.
- [ ] Data duplikat dihapus.
- [ ] Output preprocessing disimpan di `data/processed/`.

## Evaluation Checklist

- [ ] Train/Test split menggunakan `test_size = 0.2`.
- [ ] Accuracy dihitung.
- [ ] Precision dihitung.
- [ ] Recall dihitung.
- [ ] F1-score dihitung.
- [ ] Confusion Matrix dihitung.
- [ ] Model terbaik dipilih berdasarkan F1-score, Recall, lalu Accuracy.

## Artifact Collection Checklist

- [ ] Training screenshot.
- [ ] Evaluation summary screenshot.
- [ ] Confusion matrix screenshot.
- [ ] Dashboard screenshot.
- [ ] Prediction screenshot.
- [ ] Research report screenshot.
- [ ] `reports/metrics.json`.
- [ ] `reports/model_comparison.csv`.
- [ ] `reports/figures/confusion_matrix.png`.
- [ ] `reports/prediction_result.csv`.
- [ ] `reports/research_summary.json`.
- [ ] `models/netguard_best_model.pkl`.

## Command Reproducibility Checklist

Jalankan perintah berikut dari root project:

```cmd
cd C:\Users\Asus_\OneDrive\Documents\NetGuard-AI
py -3 -m pip install -r requirements.txt
py -3 app\preprocessing.py --input data\sample\sample_cicids2017.csv --output data\processed\sample_cicids2017_processed.csv
py -3 app\train.py --input data\processed\sample_cicids2017_processed.csv
py -3 app\evaluate.py
py -3 app\predictor.py --input data\sample\sample_cicids2017.csv
py -3 app\main.py
```

## Bagian Yang Harus Diganti Untuk Eksperimen Nyata

- [ ] Path dataset real CICIDS2017.
- [ ] Jumlah record dan fitur.
- [ ] Distribusi kelas.
- [ ] Hasil metrik model.
- [ ] Interpretasi Confusion Matrix.
- [ ] Screenshot dari eksperimen nyata.
- [ ] Catatan jika ada perubahan model configuration.
- [ ] Catatan jika ada teknik balancing tambahan.
