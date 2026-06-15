# Metode Penelitian

## Judul Penelitian

**NetGuard AI: Deteksi Anomali Trafik Jaringan Menggunakan Machine Learning Berbasis Dataset CICIDS2017**

## Jenis Penelitian

Penelitian ini merupakan penelitian eksperimen terapan di bidang machine learning dan jaringan komputer. Eksperimen dilakukan dengan melatih beberapa algoritma klasifikasi untuk membedakan trafik normal dan trafik anomali pada dataset CICIDS2017.

## Objek Penelitian

Objek penelitian adalah data trafik jaringan berbasis flow yang memiliki label normal dan anomali. Dataset utama yang digunakan adalah CICIDS2017 dalam format CSV.

> Instruksi: Ganti dengan detail file nyata, misalnya `Friday-WorkingHours-Afternoon-DDos.pcap_ISCX.csv` jika file tersebut digunakan.

## Alat Dan Bahan

### Perangkat Keras

- Laptop atau PC standar.
- RAM minimal 4 GB, disarankan 8 GB.
- Tidak membutuhkan GPU.

### Perangkat Lunak

- Python 3.
- Pandas.
- NumPy.
- Scikit-learn.
- Joblib.
- Flask.
- Matplotlib.
- Bootstrap 5.
- Chart.js.

## Dataset CICIDS2017

CICIDS2017 digunakan karena menyediakan trafik jaringan realistis yang mencakup trafik benign dan beberapa jenis serangan. Pada penelitian ini, label `BENIGN` dikonversi menjadi kelas Normal, sedangkan label serangan dikonversi menjadi kelas Anomaly.

Detail dataset yang harus dilaporkan:

| Komponen | Nilai |
|---|---|
| Nama file dataset | [GANTI] |
| Jumlah record awal | [GANTI] |
| Jumlah record setelah preprocessing | [GANTI] |
| Jumlah fitur | [GANTI] |
| Jumlah trafik normal | [GANTI] |
| Jumlah trafik anomali | [GANTI] |

## Alur Penelitian

1. Mengunduh atau menyiapkan dataset CICIDS2017 dalam format CSV.
2. Menjalankan preprocessing data.
3. Membagi data menjadi data latih dan data uji.
4. Melatih Logistic Regression, Decision Tree, dan Random Forest.
5. Mengevaluasi model menggunakan metrik klasifikasi.
6. Memilih model terbaik berdasarkan F1-score, kemudian Recall, kemudian Accuracy.
7. Menyimpan model terbaik dalam format `.pkl`.
8. Melakukan prediksi pada CSV baru.
9. Menampilkan hasil melalui dashboard.
10. Mengekspor artefak penelitian.

## Tahapan Preprocessing

Preprocessing dilakukan untuk meningkatkan kualitas data sebelum masuk ke model machine learning. Tahapannya adalah:

1. Membersihkan whitespace pada nama kolom.
2. Memastikan kolom `Label` tersedia.
3. Mengubah label teks menjadi label biner.
4. Mengganti nilai infinite menjadi missing value.
5. Mengubah fitur ke format numerik.
6. Mengisi missing value menggunakan nilai median.
7. Menghapus data duplikat.
8. Menyimpan hasil preprocessing ke `data/processed/`.

## Algoritma Yang Digunakan

### Logistic Regression

Logistic Regression digunakan sebagai baseline karena memiliki proses pelatihan yang ringan dan interpretasi yang relatif sederhana.

### Decision Tree

Decision Tree digunakan karena mampu membentuk aturan keputusan berdasarkan fitur trafik jaringan.

### Random Forest

Random Forest digunakan karena menggabungkan banyak pohon keputusan sehingga dapat meningkatkan stabilitas model pada data tabular.

## Skenario Eksperimen

Data dibagi menjadi data latih dan data uji dengan rasio 80:20. Parameter yang digunakan adalah:

- `test_size = 0.2`
- `random_state = 42`

> Instruksi: Jika parameter diubah, sesuaikan bagian ini dengan konfigurasi eksperimen nyata.

## Metrik Evaluasi

Evaluasi model dilakukan menggunakan:

1. Accuracy.
2. Precision.
3. Recall.
4. F1-score.
5. Confusion Matrix.

Model terbaik dipilih berdasarkan prioritas:

1. F1-score tertinggi.
2. Recall tertinggi jika F1-score sama.
3. Accuracy tertinggi jika F1-score dan Recall sama.

## Implementasi Dashboard

Dashboard dibangun menggunakan Flask, Bootstrap 5, dan Chart.js. Dashboard menampilkan jumlah total data, trafik normal, trafik anomali, akurasi model terbaik, skor risiko, level risiko, rekomendasi tindakan, grafik perbandingan model, dan confusion matrix.

## Hasil Eksperimen Placeholder

| Model | Accuracy | Precision | Recall | F1-score |
|---|---:|---:|---:|---:|
| Logistic Regression | [GANTI] | [GANTI] | [GANTI] | [GANTI] |
| Decision Tree | [GANTI] | [GANTI] | [GANTI] | [GANTI] |
| Random Forest | [GANTI] | [GANTI] | [GANTI] | [GANTI] |

> Instruksi: Ganti nilai tabel dengan hasil dari `reports/model_comparison.csv`.

## Validasi Artefak

Artefak yang harus dibuktikan:

- File preprocessing berjalan.
- File training berjalan.
- Model `.pkl` tersimpan.
- Metrik evaluasi tersimpan.
- Confusion matrix tersimpan.
- Dashboard dapat dibuka.
- Prediksi CSV baru berjalan.
- Laporan ringkasan penelitian dapat diekspor.
