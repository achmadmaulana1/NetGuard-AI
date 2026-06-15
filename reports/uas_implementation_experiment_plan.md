# UAS AI - Implementasi Metode AI, Baseline, Experimental Setup, dan Analisis Hasil

## 1. Proposed Method

Metode usulan pada penelitian ini adalah **NetGuard AI Dashboard-Based Network Anomaly Detection**, yaitu sistem yang menggabungkan:

1. Preprocessing dataset CICIDS2017.
2. Klasifikasi biner Normal vs Anomaly.
3. Perbandingan model baseline dan proposed model.
4. Export metrik eksperimen.
5. Dashboard monitoring berbasis Flask.
6. Risk score dan recommended action.

## 2. Baseline dan Proposed Method

| Komponen | Metode | Peran | Alasan Dipilih | Kelebihan | Kekurangan |
|---|---|---|---|---|---|
| Baseline 1 | Logistic Regression | Baseline linear | Sederhana, cepat, explainable | Ringan untuk laptop | Kurang kuat untuk pola non-linear |
| Baseline 2 | Decision Tree | Baseline tree | Mudah dijelaskan sebagai aturan keputusan | Interpretasi mudah | Rentan overfitting |
| Proposed | Random Forest | Model usulan utama | Ensemble tree lebih stabil untuk data tabular | Performa dan robustness lebih baik | Kurang transparan dibanding single tree |

Catatan: Jika hasil eksperimen nyata menunjukkan Logistic Regression atau Decision Tree lebih baik, model terbaik tetap dipilih berdasarkan F1-score. Namun, posisi metode usulan dapat dijelaskan sebagai **proposed comparative framework**, bukan klaim bahwa Random Forest pasti unggul.

## 3. Pipeline Implementasi AI

```text
Dataset CICIDS2017 CSV
↓
Column cleaning
↓
Missing/infinite value handling
↓
Binary label conversion
↓
Feature selection numeric
↓
Train/test split
↓
Model training
↓
Evaluation
↓
Best model selection
↓
Prediction system
↓
Risk classification
↓
Flask dashboard
↓
Research artifact export
```

## 4. Library dan Framework

| Library/Framework | Fungsi |
|---|---|
| Python | Bahasa utama implementasi |
| Pandas | Membaca dan memproses CSV |
| NumPy | Penanganan nilai numerik, NaN, infinity |
| Scikit-Learn | Training model dan evaluasi |
| Joblib | Menyimpan model `.pkl` |
| Matplotlib | Membuat confusion matrix image |
| Flask | Dashboard web |
| Bootstrap | UI responsive |
| Chart.js | Grafik model comparison dan confusion matrix |

## 5. Experimental Setup

| Komponen | Konfigurasi |
|---|---|
| Hardware | Laptop standar, RAM minimal 4 GB, disarankan 8 GB |
| OS | Windows 10/11 |
| Python | Python 3.8+ |
| Dataset | CICIDS2017 CSV |
| Data split | 80% train, 20% test |
| Random seed | 42 |
| Validation strategy | Hold-out split; disarankan tambah 5-fold cross-validation |
| Epoch | Tidak digunakan karena model Scikit-Learn klasik |
| Batch size | Tidak digunakan |
| Optimizer | Tidak digunakan eksplisit |
| Loss function | Internal model Scikit-Learn |
| Metrics | Accuracy, Precision, Recall, F1-score, Confusion Matrix |

## 6. Hyperparameter Tuning Plan

| Model | Parameter | Range | Default Saat Ini | Best Candidate | Alasan |
|---|---|---|---|---|---|
| Logistic Regression | C | 0.01, 0.1, 1, 10 | 1.0 | [ISI HASIL GRID SEARCH] | Mengontrol regularisasi |
| Logistic Regression | max_iter | 500, 1000, 2000 | 1000 | 1000/2000 | Mencegah gagal konvergensi |
| Decision Tree | max_depth | 5, 10, 20, None | None | [ISI] | Mengurangi overfitting |
| Decision Tree | min_samples_split | 2, 5, 10 | 2 | [ISI] | Mengontrol pemecahan node |
| Random Forest | n_estimators | 100, 200, 300 | 100 | [ISI] | Stabilitas ensemble |
| Random Forest | max_depth | 10, 20, None | None | [ISI] | Mengurangi overfitting |
| Random Forest | class_weight | None, balanced | None | [ISI] | Mengatasi imbalance |

Rekomendasi UAS: jika waktu terbatas, lakukan GridSearchCV untuk Random Forest saja dan bandingkan dengan baseline default.

## 7. Evaluation Metrics

| Metrik | Fungsi | Alasan |
|---|---|---|
| Accuracy | Mengukur prediksi benar keseluruhan | Mudah dipahami |
| Precision | Mengukur ketepatan prediksi anomali | Mengurangi false alarm |
| Recall | Mengukur anomali yang berhasil ditemukan | Penting untuk cyber security |
| F1-score | Menyeimbangkan precision dan recall | Dipakai untuk memilih model terbaik |
| Confusion Matrix | Menampilkan TN, FP, FN, TP | Membantu interpretasi kesalahan |

## 8. Template Hasil Eksperimen

| Model | Accuracy | Precision | Recall | F1-score | AUC | Training Time | Inference Time |
|---|---:|---:|---:|---:|---:|---:|---:|
| Logistic Regression | [GANTI] | [GANTI] | [GANTI] | [GANTI] | [OPSIONAL] | [GANTI] | [GANTI] |
| Decision Tree | [GANTI] | [GANTI] | [GANTI] | [GANTI] | [OPSIONAL] | [GANTI] | [GANTI] |
| Random Forest | [GANTI] | [GANTI] | [GANTI] | [GANTI] | [OPSIONAL] | [GANTI] | [GANTI] |
| Random Forest + Tuning | [OPSIONAL] | [OPSIONAL] | [OPSIONAL] | [OPSIONAL] | [OPSIONAL] | [OPSIONAL] | [OPSIONAL] |

## 9. Analisis Hasil Wajib Ditulis

1. Apakah Random Forest lebih baik dibanding baseline?
2. Jika lebih baik, apakah karena ensemble mampu menangkap pola non-linear?
3. Jika tidak lebih baik, apakah karena dataset terlalu kecil, imbalance, atau overfitting?
4. Bagaimana perbandingan false positive dan false negative?
5. Apakah nilai Recall cukup baik untuk konteks cyber security?
6. Apakah dashboard membantu interpretasi hasil?
7. Apakah risk score benar-benar mendukung pengambilan keputusan?

## 10. Ancaman Validitas

1. Sample CSV tidak dapat digunakan sebagai hasil final.
2. CICIDS2017 memiliki risiko faulty use jika preprocessing tidak hati-hati.
3. Hasil pada satu dataset belum membuktikan generalisasi.
4. Dashboard belum real-time.
5. Prediksi masih berbasis batch CSV.
6. Hyperparameter tuning belum sistematis pada versi awal.

## 11. Perintah Eksperimen Windows CMD

```cmd
cd C:\Users\Asus_\OneDrive\Documents\NetGuard-AI
py -3 -m pip install -r requirements.txt
py -3 app\preprocessing.py
py -3 app\train.py
py -3 app\test.py
py -3 app\predict.py
py -3 app\main.py
```

Jika `python` pada laptop sudah mengarah ke Python 3, perintah berikut juga dapat digunakan:

```cmd
python app\preprocessing.py
python app\train.py
python app\test.py
python app\predict.py
python app\main.py
```
