# Evaluation Protocol

## Tujuan Evaluasi

Evaluasi dilakukan untuk mengukur kemampuan model dalam membedakan trafik normal dan trafik anomali. Protokol ini digunakan agar hasil eksperimen Logistic Regression, Decision Tree, dan Random Forest dapat dibandingkan secara adil.

## Model Yang Dievaluasi

1. Logistic Regression.
2. Decision Tree.
3. Random Forest.

Semua model menggunakan data hasil preprocessing yang sama dan konfigurasi train/test split yang sama.

## Data Evaluasi

Data dibagi menjadi:

- Data latih: 80%
- Data uji: 20%

Konfigurasi:

```text
test_size = 0.2
random_state = 42
```

Data uji tidak digunakan saat training. Data uji hanya digunakan untuk menghitung metrik evaluasi.

## Metrik Evaluasi

### Accuracy

Accuracy mengukur proporsi prediksi yang benar dari seluruh data uji.

Rumus:

```text
Accuracy = (TP + TN) / (TP + TN + FP + FN)
```

Accuracy mudah dipahami, tetapi dapat menyesatkan jika dataset tidak seimbang.

### Precision

Precision mengukur seberapa banyak prediksi Anomaly yang benar-benar Anomaly.

Rumus:

```text
Precision = TP / (TP + FP)
```

Precision penting untuk mengurangi false alarm.

### Recall

Recall mengukur seberapa banyak data Anomaly yang berhasil terdeteksi.

Rumus:

```text
Recall = TP / (TP + FN)
```

Recall penting dalam keamanan jaringan karena anomali yang tidak terdeteksi dapat menjadi risiko serius.

### F1-score

F1-score adalah rata-rata harmonik antara Precision dan Recall.

Rumus:

```text
F1-score = 2 * (Precision * Recall) / (Precision + Recall)
```

F1-score digunakan sebagai metrik utama untuk memilih model terbaik karena mempertimbangkan keseimbangan Precision dan Recall.

### Confusion Matrix

Confusion Matrix menunjukkan hubungan antara label aktual dan label prediksi.

Format:

| | Predicted Normal | Predicted Anomaly |
|---|---:|---:|
| Actual Normal | TN | FP |
| Actual Anomaly | FN | TP |

Interpretasi:

- TN: trafik normal diprediksi normal.
- FP: trafik normal diprediksi anomali.
- FN: trafik anomali diprediksi normal.
- TP: trafik anomali diprediksi anomali.

## Metode Pemilihan Model Terbaik

Model terbaik dipilih menggunakan urutan berikut:

1. F1-score tertinggi.
2. Recall tertinggi jika F1-score sama.
3. Accuracy tertinggi jika F1-score dan Recall sama.

Jika semua metrik sama pada sample kecil, hasil tersebut harus dianggap sebagai validasi pipeline, bukan bukti performa final.

## Prosedur Evaluasi

1. Jalankan preprocessing pada dataset.
2. Jalankan training model.
3. Simpan hasil evaluasi ke `reports/metrics.json`.
4. Simpan tabel perbandingan ke `reports/model_comparison.csv`.
5. Simpan Confusion Matrix ke `reports/figures/confusion_matrix.png`.
6. Jalankan `app/evaluate.py` untuk menampilkan ringkasan terminal.
7. Dokumentasikan screenshot dan file output sebagai artefak penelitian.

## Perintah Windows CMD

```cmd
cd C:\Users\Asus_\OneDrive\Documents\NetGuard-AI
py -3 app\preprocessing.py --input data\sample\sample_cicids2017.csv --output data\processed\sample_cicids2017_processed.csv
py -3 app\train.py --input data\processed\sample_cicids2017_processed.csv
py -3 app\evaluate.py
```

## Template Hasil Evaluasi

| Model | Accuracy | Precision | Recall | F1-score | Catatan |
|---|---:|---:|---:|---:|---|
| Logistic Regression | [GANTI] | [GANTI] | [GANTI] | [GANTI] | [GANTI] |
| Decision Tree | [GANTI] | [GANTI] | [GANTI] | [GANTI] | [GANTI] |
| Random Forest | [GANTI] | [GANTI] | [GANTI] | [GANTI] | [GANTI] |

## Instruksi Validasi

1. Gunakan hasil dari `reports/model_comparison.csv`.
2. Jangan menyalin hasil sample kecil sebagai hasil final penelitian.
3. Jelaskan jika dataset tidak seimbang.
4. Jelaskan trade-off antara Precision dan Recall.
5. Gunakan Confusion Matrix untuk menjelaskan kesalahan model.
6. Simpan semua artifact evaluasi sebagai bukti eksperimen.
