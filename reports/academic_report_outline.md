# Outline Laporan Akademik

## Judul Penelitian

**NetGuard AI: Deteksi Anomali Trafik Jaringan Menggunakan Machine Learning Berbasis Dataset CICIDS2017**

> Instruksi: Judul dapat disesuaikan dengan format kampus/sekolah. Jika fokus laporan adalah dashboard, tambahkan frasa "dan Visualisasi Dashboard Monitoring".

## Abstrak

Perkembangan jaringan komputer menuntut sistem monitoring yang mampu mendeteksi gangguan dan anomali trafik secara lebih cepat. Penelitian ini mengembangkan NetGuard AI, yaitu sistem deteksi anomali jaringan berbasis machine learning yang menggunakan dataset CICIDS2017. Tahapan penelitian meliputi pengumpulan data, preprocessing, konversi label biner, pelatihan model, evaluasi performa, serta visualisasi hasil melalui dashboard berbasis Flask. Algoritma yang dibandingkan adalah Logistic Regression, Decision Tree, dan Random Forest. Evaluasi dilakukan menggunakan metrik Accuracy, Precision, Recall, F1-score, dan Confusion Matrix. Hasil eksperimen menunjukkan bahwa model terbaik berdasarkan F1-score adalah **[GANTI SESUAI HASIL EKSPERIMEN NYATA]** dengan akurasi **[GANTI]**, precision **[GANTI]**, recall **[GANTI]**, dan F1-score **[GANTI]**. Sistem juga menghasilkan skor risiko dan rekomendasi tindakan untuk membantu administrator jaringan dalam mengidentifikasi potensi gangguan. Penelitian ini menunjukkan bahwa pendekatan machine learning sederhana dapat diterapkan secara low-budget pada laptop biasa untuk mendukung pembelajaran dan monitoring jaringan skala kecil.

> Instruksi: Abstrak maksimal 250 kata. Ganti semua bagian `[GANTI]` setelah eksperimen menggunakan subset CICIDS2017 nyata, bukan hanya sample CSV.

## Kata Kunci

Machine Learning, Anomali Jaringan, CICIDS2017, Random Forest, Dashboard Monitoring

> Instruksi: Maksimal 5 kata kunci. Sesuaikan jika algoritma terbaik bukan Random Forest.

## 1. Pendahuluan

Jaringan komputer merupakan infrastruktur penting bagi sekolah, kampus, UMKM, dan organisasi kecil. Gangguan jaringan dapat menyebabkan penurunan kualitas layanan, keterlambatan akses informasi, serta potensi risiko keamanan. Pada praktik umum, administrator jaringan sering mengetahui masalah setelah layanan melambat atau tidak dapat diakses. Oleh karena itu, dibutuhkan sistem yang mampu membantu mendeteksi anomali trafik secara lebih dini.

Machine learning dapat digunakan untuk mempelajari pola trafik normal dan membedakannya dari trafik anomali. Dataset publik seperti CICIDS2017 menyediakan data trafik jaringan berlabel yang dapat digunakan untuk eksperimen akademik. Penelitian ini mengusulkan NetGuard AI sebagai sistem sederhana dan low-budget yang menggabungkan model machine learning dengan dashboard monitoring.

> Instruksi: Tambahkan konteks lokal, misalnya jaringan sekolah, laboratorium komputer, atau UMKM jika diperlukan.

## 2. Rumusan Masalah

1. Bagaimana membangun sistem deteksi anomali trafik jaringan berbasis machine learning menggunakan dataset CICIDS2017?
2. Bagaimana performa Logistic Regression, Decision Tree, dan Random Forest dalam mengklasifikasikan trafik normal dan anomali?
3. Bagaimana hasil deteksi anomali dapat divisualisasikan dalam dashboard monitoring yang mudah dipahami?

## 3. Tujuan Penelitian

1. Mengembangkan pipeline preprocessing data trafik jaringan berbasis CICIDS2017.
2. Melatih dan membandingkan model Logistic Regression, Decision Tree, dan Random Forest.
3. Mengevaluasi model menggunakan Accuracy, Precision, Recall, F1-score, dan Confusion Matrix.
4. Membangun dashboard sederhana untuk menampilkan status trafik, skor risiko, hasil prediksi, dan rekomendasi tindakan.

## 4. Tinjauan Pustaka Ringkas

Deteksi anomali jaringan adalah proses identifikasi pola trafik yang berbeda dari kondisi normal. Pendekatan ini banyak digunakan dalam intrusion detection system untuk membantu mengenali potensi serangan atau gangguan. Machine learning menyediakan metode klasifikasi yang dapat mempelajari hubungan antara fitur trafik dan label serangan.

Logistic Regression merupakan algoritma linear yang cocok sebagai baseline karena sederhana dan mudah dijelaskan. Decision Tree mampu membentuk aturan keputusan berdasarkan fitur data. Random Forest menggabungkan banyak pohon keputusan sehingga umumnya lebih stabil terhadap variasi data. Dataset CICIDS2017 sering digunakan dalam penelitian keamanan jaringan karena menyediakan trafik benign dan beberapa jenis serangan dalam format flow-based CSV.

> Instruksi: Tambahkan sitasi jurnal, prosiding, atau sumber resmi dataset sesuai aturan institusi.

## 5. Gap Penelitian

Banyak penelitian deteksi anomali jaringan berfokus pada pencapaian akurasi model, tetapi tidak selalu menyediakan artefak dashboard yang mudah dipahami oleh administrator jaringan pemula. Selain itu, sebagian implementasi membutuhkan komputasi besar atau konfigurasi kompleks. Penelitian ini mengisi gap tersebut dengan membangun sistem sederhana, low-budget, dan reproducible yang tidak hanya mengevaluasi model, tetapi juga menampilkan hasil monitoring, skor risiko, dan rekomendasi tindakan.

## 6. Metode Penelitian

Metode penelitian yang digunakan adalah eksperimen machine learning berbasis dataset publik. Alur penelitian meliputi:

1. Pengumpulan dataset CICIDS2017 dalam format CSV.
2. Preprocessing data, termasuk pembersihan nama kolom, missing value, infinite value, duplikasi, dan konversi label.
3. Pemisahan data menjadi data latih dan data uji.
4. Pelatihan model Logistic Regression, Decision Tree, dan Random Forest.
5. Evaluasi model menggunakan metrik klasifikasi.
6. Pemilihan model terbaik berdasarkan F1-score, kemudian Recall, kemudian Accuracy.
7. Implementasi dashboard Flask untuk visualisasi hasil.

## 7. Dataset CICIDS2017

Dataset CICIDS2017 berisi trafik jaringan normal dan trafik serangan yang direkam dalam lingkungan jaringan realistis. Pada penelitian ini digunakan data dalam format CSV flow agar dapat diproses pada laptop biasa. Label `BENIGN` dikonversi menjadi kelas `0` atau Normal, sedangkan label serangan seperti DDoS, PortScan, Bot, dan lainnya dikonversi menjadi kelas `1` atau Anomaly.

> Instruksi: Ganti bagian ini dengan detail file CICIDS2017 nyata yang digunakan, misalnya nama file, jumlah record, jumlah fitur, jumlah normal, dan jumlah anomali.

## 8. Tahapan Preprocessing

Tahapan preprocessing meliputi:

1. Menghapus whitespace pada nama kolom.
2. Memvalidasi keberadaan kolom `Label`.
3. Mengubah label teks menjadi label biner.
4. Mengganti nilai infinite menjadi missing value.
5. Mengubah fitur numerik ke tipe data numerik.
6. Mengisi missing value menggunakan median fitur.
7. Menghapus data duplikat.
8. Menyimpan hasil preprocessing ke folder `data/processed/`.

## 9. Algoritma Machine Learning

### Logistic Regression

Logistic Regression digunakan sebagai model baseline karena sederhana, cepat, dan mudah dijelaskan. Model ini cocok untuk melihat performa dasar klasifikasi biner.

### Decision Tree

Decision Tree membangun struktur pohon keputusan berdasarkan fitur trafik. Kelebihannya adalah mudah diinterpretasikan, tetapi dapat mengalami overfitting pada data tertentu.

### Random Forest

Random Forest menggunakan banyak Decision Tree dan menggabungkan hasilnya. Algoritma ini sering menghasilkan performa lebih stabil pada data tabular.

## 10. Evaluasi Model

Evaluasi dilakukan menggunakan:

- Accuracy: proporsi prediksi yang benar dari seluruh data uji.
- Precision: proporsi prediksi anomali yang benar-benar anomali.
- Recall: proporsi anomali yang berhasil terdeteksi.
- F1-score: rata-rata harmonik precision dan recall.
- Confusion Matrix: tabel perbandingan antara label aktual dan label prediksi.

## 11. Hasil Eksperimen Placeholder

| Model | Accuracy | Precision | Recall | F1-score |
|---|---:|---:|---:|---:|
| Logistic Regression | [GANTI] | [GANTI] | [GANTI] | [GANTI] |
| Decision Tree | [GANTI] | [GANTI] | [GANTI] | [GANTI] |
| Random Forest | [GANTI] | [GANTI] | [GANTI] | [GANTI] |

Model terbaik berdasarkan F1-score adalah **[GANTI SESUAI HASIL EKSPERIMEN NYATA]**. Confusion Matrix model terbaik menunjukkan **[GANTI DENGAN INTERPRETASI HASIL]**.

> Instruksi: Ambil nilai dari `reports/model_comparison.csv`, `reports/metrics.json`, dan `reports/figures/confusion_matrix.png`.

## 12. Pembahasan

Berdasarkan hasil eksperimen, model **[GANTI]** memperoleh performa terbaik karena mampu menyeimbangkan precision dan recall. Nilai recall penting dalam deteksi anomali jaringan karena kegagalan mendeteksi trafik anomali dapat meningkatkan risiko gangguan atau serangan. Dashboard NetGuard AI membantu menyajikan hasil model dalam bentuk yang lebih mudah dipahami, seperti jumlah trafik normal, jumlah anomali, skor risiko, dan rekomendasi tindakan.

> Instruksi: Jelaskan mengapa model tertentu lebih baik. Hindari menyimpulkan dari sample CSV kecil. Gunakan hasil dataset nyata.

## 13. Kesimpulan

Penelitian ini berhasil mengembangkan sistem NetGuard AI untuk mendeteksi anomali trafik jaringan menggunakan pendekatan machine learning. Sistem mampu melakukan preprocessing data CICIDS2017, melatih beberapa model klasifikasi, mengevaluasi performa model, menyimpan model terbaik, serta menampilkan hasil melalui dashboard monitoring. Implementasi ini bersifat low-budget dan dapat dijalankan pada laptop biasa, sehingga sesuai untuk proyek penelitian mahasiswa.

> Instruksi: Tambahkan angka performa final setelah eksperimen nyata selesai.

## 14. Saran Penelitian Selanjutnya

1. Menggunakan subset CICIDS2017 yang lebih besar dan seimbang.
2. Menambahkan algoritma lain seperti XGBoost atau LightGBM.
3. Menambahkan fitur upload dataset mentah yang lebih lengkap.
4. Mengembangkan dashboard real-time berbasis log jaringan.
5. Melakukan validasi dengan trafik jaringan lokal laboratorium atau sekolah.

## 15. Daftar Artefak Bukti Penelitian

1. Dataset asli atau subset CICIDS2017.
2. File preprocessing dan hasil preprocessing.
3. Screenshot terminal preprocessing.
4. File training model.
5. `models/netguard_best_model.pkl`.
6. `reports/model_comparison.csv`.
7. `reports/metrics.json`.
8. `reports/figures/confusion_matrix.png`.
9. Screenshot dashboard.
10. Screenshot halaman prediksi.
11. `reports/prediction_result.csv`.
12. `reports/research_summary.json`.
