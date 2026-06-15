# Experiment Plan

## Judul Eksperimen

**Perbandingan Logistic Regression, Decision Tree, dan Random Forest untuk Deteksi Anomali Trafik Jaringan Berbasis CICIDS2017**

## Tujuan Eksperimen

Eksperimen ini bertujuan untuk membandingkan performa tiga algoritma machine learning dalam mengklasifikasikan trafik jaringan menjadi dua kelas:

- `0 = Normal`
- `1 = Anomaly`

Hasil eksperimen digunakan untuk memilih model terbaik yang akan disimpan sebagai `models/netguard_best_model.pkl` dan divisualisasikan pada dashboard NetGuard AI.

## Dataset

Dataset utama yang digunakan adalah CICIDS2017 dalam format CSV flow. Pada tahap awal, sistem diuji menggunakan `data/sample/sample_cicids2017.csv` agar pipeline dapat berjalan pada laptop biasa. Untuk hasil penelitian nyata, eksperimen harus dijalankan menggunakan subset CICIDS2017 yang lebih besar.

> Instruksi: Ganti bagian ini dengan nama file CICIDS2017 nyata, jumlah record, jumlah fitur, jumlah normal, dan jumlah anomali.

## Skenario Eksperimen

### Skenario 1: Logistic Regression

Logistic Regression digunakan sebagai baseline model karena sederhana, cepat, dan mudah dijelaskan. Model ini menggunakan StandardScaler karena Logistic Regression sensitif terhadap skala fitur numerik.

Konfigurasi:

- Model: Logistic Regression
- Scaling: StandardScaler
- `max_iter = 1000`
- `random_state = 42`

### Skenario 2: Decision Tree

Decision Tree digunakan untuk membentuk aturan keputusan berdasarkan fitur trafik jaringan. Model ini mudah diinterpretasikan, tetapi berisiko overfitting jika data tidak cukup representatif.

Konfigurasi:

- Model: Decision Tree Classifier
- `random_state = 42`

### Skenario 3: Random Forest

Random Forest digunakan sebagai ensemble dari banyak Decision Tree. Model ini umumnya lebih stabil pada data tabular dan sering digunakan pada penelitian deteksi anomali jaringan.

Konfigurasi:

- Model: Random Forest Classifier
- `n_estimators = 100`
- `random_state = 42`

## Metodologi Perbandingan

Semua model dilatih menggunakan dataset yang sama, hasil preprocessing yang sama, rasio train/test yang sama, dan random seed yang sama. Model dibandingkan menggunakan metrik Accuracy, Precision, Recall, F1-score, dan Confusion Matrix.

Pemilihan model terbaik dilakukan berdasarkan prioritas:

1. F1-score tertinggi.
2. Recall tertinggi jika F1-score sama.
3. Accuracy tertinggi jika F1-score dan Recall sama.

Alasan penggunaan F1-score sebagai prioritas utama adalah karena deteksi anomali membutuhkan keseimbangan antara precision dan recall. Recall juga penting karena kegagalan mendeteksi trafik anomali dapat meningkatkan risiko gangguan jaringan.

## Train/Test Split

Konfigurasi split data:

- Data latih: 80%
- Data uji: 20%
- `test_size = 0.2`
- `random_state = 42`

Jika jumlah data pada salah satu kelas terlalu kecil, stratifikasi dapat tidak digunakan agar proses tetap berjalan pada sample kecil. Untuk eksperimen nyata, stratifikasi disarankan agar distribusi kelas train/test tetap seimbang.

## Random Seed

Random seed yang digunakan adalah:

```text
42
```

Random seed digunakan untuk menjaga hasil eksperimen tetap reproducible.

## Dataset Balancing Strategy

Pada versi awal, balancing tidak dilakukan secara agresif agar eksperimen tetap sederhana dan mudah dipahami. Strategi yang digunakan:

1. Melaporkan distribusi kelas normal dan anomali.
2. Menggunakan metrik Precision, Recall, dan F1-score agar evaluasi tidak hanya bergantung pada Accuracy.
3. Menggunakan stratified split jika jumlah data setiap kelas mencukupi.

Untuk eksperimen lanjutan, balancing dapat dilakukan menggunakan undersampling, oversampling, atau SMOTE. Namun, metode tersebut harus dijelaskan secara eksplisit jika digunakan.

> Instruksi: Jika menggunakan teknik balancing tambahan, tulis nama teknik, alasan pemilihan, dan dampaknya terhadap distribusi kelas.

## Missing Value Handling

Missing value ditangani pada tahap preprocessing dengan langkah:

1. Mengubah nilai non-numerik pada fitur menjadi missing value.
2. Mengganti nilai infinite menjadi missing value.
3. Mengisi missing value numerik menggunakan median setiap fitur.
4. Jika masih terdapat missing value setelah median, nilai diisi dengan `0`.

Median dipilih karena lebih tahan terhadap nilai ekstrem dibandingkan mean.

## Outlier Handling

Pada versi awal, outlier tidak dihapus secara agresif karena beberapa nilai ekstrem pada trafik jaringan dapat merepresentasikan anomali yang penting. Strategi yang digunakan:

1. Mengganti nilai infinite agar tidak merusak proses training.
2. Mempertahankan nilai numerik ekstrem agar model dapat mempelajari pola anomali.
3. Menggunakan model berbasis tree seperti Decision Tree dan Random Forest yang relatif lebih toleran terhadap outlier.

Untuk penelitian lanjutan, outlier dapat dianalisis menggunakan IQR, z-score, atau visualisasi distribusi fitur.

## Output Eksperimen

Eksperimen menghasilkan:

- `models/netguard_best_model.pkl`
- `reports/metrics.json`
- `reports/model_comparison.csv`
- `reports/figures/confusion_matrix.png`

## Catatan Untuk Eksperimen Nyata

Jangan menyimpulkan performa akhir dari sample CSV kecil. Sample hanya digunakan untuk memastikan pipeline berjalan. Hasil akademik harus menggunakan subset CICIDS2017 nyata yang lebih representatif.
