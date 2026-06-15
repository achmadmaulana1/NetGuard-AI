# Live Demo Script

## Tujuan Demo

Menunjukkan bahwa NetGuard AI dapat melakukan preprocessing, training, evaluasi, prediksi, dan visualisasi dashboard tanpa database dan tanpa layanan berbayar.

## Persiapan Sebelum Demo

Pastikan berada di root project:

```cmd
cd C:\Users\Asus_\OneDrive\Documents\NetGuard-AI
```

Pastikan dependency tersedia:

```cmd
py -3 -m pip install -r requirements.txt
```

## Demo 1: Preprocessing Dataset

Command:

```cmd
py -3 app\preprocessing.py --input data\sample\sample_cicids2017.csv --output data\processed\sample_cicids2017_processed.csv
```

Yang dijelaskan:

- Sistem membaca CSV CICIDS2017-style.
- Kolom `Label` dikonversi menjadi `label`.
- `BENIGN` menjadi `0 = Normal`.
- Label serangan menjadi `1 = Anomaly`.
- Missing value, infinite value, dan duplikasi ditangani.

Output yang ditunjukkan:

- Original records.
- Processed records.
- Normal traffic.
- Anomaly traffic.

## Demo 2: Training Model

Command:

```cmd
py -3 app\train.py --input data\processed\sample_cicids2017_processed.csv
```

Yang dijelaskan:

- Sistem melatih Logistic Regression, Decision Tree, dan Random Forest.
- Model dievaluasi menggunakan Accuracy, Precision, Recall, F1-score, dan Confusion Matrix.
- Model terbaik disimpan ke `models\netguard_best_model.pkl`.

Output yang ditunjukkan:

- Tabel metrik terminal.
- Best model.
- File output metrics dan model.

## Demo 3: Evaluation Summary

Command:

```cmd
py -3 app\evaluate.py
```

Yang dijelaskan:

- File `reports\metrics.json` dibaca ulang.
- File `reports\model_comparison.csv` menjadi bukti perbandingan model.
- Confusion Matrix tersimpan sebagai gambar.

## Demo 4: Prediction System

Command:

```cmd
py -3 app\predictor.py --input data\sample\sample_cicids2017.csv
```

Yang dijelaskan:

- Sistem memuat model `.pkl`.
- CSV baru dibersihkan agar sesuai dengan fitur model.
- Output prediksi disimpan ke `reports\prediction_result.csv`.
- Ringkasan riset disimpan ke `reports\research_summary.json`.

Output yang ditunjukkan:

- Total data diprediksi.
- Jumlah Normal.
- Jumlah Anomaly.
- Risk level.
- Recommended action.

## Demo 5: Dashboard

Command:

```cmd
py -3 app\main.py
```

Buka URL yang muncul di terminal, misalnya:

```text
http://127.0.0.1:5000
```

Jika port 5000 sibuk, gunakan port yang dicetak terminal, misalnya `5001`.

Halaman yang ditunjukkan:

1. `/` Dashboard utama.
2. `/predict` Predict New Data.
3. `/report` Research Report.
4. `/api/summary` JSON data dashboard.

## Script Narasi Demo Singkat

"Pertama, saya menjalankan preprocessing untuk membersihkan dataset dan mengubah label menjadi biner. Kedua, saya melatih tiga model machine learning dan membandingkan metrik evaluasinya. Ketiga, saya menjalankan prediksi pada CSV baru. Terakhir, saya membuka dashboard untuk menampilkan jumlah trafik normal, trafik anomali, akurasi model, risk score, dan rekomendasi tindakan."

## Jika Demo Live Bermasalah

Gunakan backup artefak berikut:

- Screenshot terminal preprocessing.
- Screenshot terminal training.
- Screenshot confusion matrix.
- Screenshot dashboard.
- `reports\metrics.json`.
- `reports\model_comparison.csv`.
- `reports\prediction_result.csv`.
- `reports\research_summary.json`.

## Catatan Penting

Hasil sample CSV hanya untuk membuktikan pipeline berjalan. Untuk sidang atau publikasi, tampilkan hasil dari subset CICIDS2017 nyata.
