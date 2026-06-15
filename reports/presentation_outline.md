# Presentation Outline

## Judul Presentasi

**NetGuard AI: Predictive Network Failure & Anomaly Monitoring Berbasis Machine Learning**

## Durasi

5 menit.

## Struktur Presentasi

### 1. Problem - 45 Detik

Poin utama:

- Gangguan jaringan sering diketahui setelah layanan melambat atau down.
- Monitoring tradisional cenderung menampilkan kondisi saat ini, bukan membantu membaca pola anomali.
- Administrator jaringan pemula membutuhkan alat bantu yang sederhana, murah, dan mudah dipahami.

Narasi singkat:

"Permasalahan yang diangkat dalam penelitian ini adalah bagaimana membantu administrator jaringan mendeteksi potensi anomali trafik secara lebih cepat. Pada banyak lingkungan pendidikan atau UMKM, monitoring jaringan masih terbatas dan belum terintegrasi dengan analisis machine learning."

### 2. Solution - 45 Detik

Poin utama:

- NetGuard AI mendeteksi trafik Normal dan Anomaly.
- Sistem menggunakan dataset CICIDS2017.
- Hasil ditampilkan melalui dashboard Flask.
- Sistem memberikan risk score dan recommended action.

Narasi singkat:

"Solusi yang dikembangkan adalah NetGuard AI, yaitu sistem berbasis Python yang melakukan preprocessing data trafik, melatih model machine learning, melakukan prediksi anomali, dan menampilkan hasilnya melalui dashboard monitoring."

### 3. Method - 60 Detik

Poin utama:

- Dataset: CICIDS2017-style CSV.
- Preprocessing: whitespace column, missing value, infinite value, duplicate row, binary label.
- Model: Logistic Regression, Decision Tree, Random Forest.
- Split: 80% train dan 20% test.
- Random seed: 42.

Narasi singkat:

"Metode penelitian dimulai dari preprocessing dataset CICIDS2017. Label BENIGN dikonversi menjadi Normal, sedangkan label serangan menjadi Anomaly. Setelah itu, data dibagi menjadi train dan test, kemudian tiga algoritma dilatih dan dibandingkan."

### 4. Experiment - 60 Detik

Poin utama:

- Model dibandingkan secara adil dengan data dan split yang sama.
- Metrik evaluasi: Accuracy, Precision, Recall, F1-score, Confusion Matrix.
- Model terbaik dipilih berdasarkan F1-score, Recall, lalu Accuracy.

Narasi singkat:

"Eksperimen dilakukan dengan membandingkan tiga model menggunakan metrik klasifikasi. F1-score dipilih sebagai prioritas karena deteksi anomali memerlukan keseimbangan antara precision dan recall."

### 5. Results - 60 Detik

Poin utama:

- Model terbaik: [GANTI SESUAI HASIL EKSPERIMEN NYATA].
- Accuracy: [GANTI].
- Precision: [GANTI].
- Recall: [GANTI].
- F1-score: [GANTI].
- Dashboard menampilkan total records, normal traffic, anomaly traffic, risk score, dan rekomendasi.

Narasi singkat:

"Berdasarkan hasil eksperimen, model terbaik adalah [GANTI]. Sistem berhasil menyimpan model dalam format PKL dan menampilkan hasil evaluasi serta prediksi melalui dashboard."

> Instruksi: Jangan memakai hasil sample kecil sebagai hasil final sidang. Ganti nilai dengan hasil subset CICIDS2017 nyata.

### 6. Conclusion - 30 Detik

Poin utama:

- NetGuard AI berhasil mengintegrasikan ML dan dashboard monitoring.
- Sistem low-budget dan dapat berjalan di laptop biasa.
- Cocok untuk pembelajaran AI dan jaringan.
- Pengembangan lanjut dapat menuju real-time monitoring.

Narasi singkat:

"Kesimpulannya, NetGuard AI membuktikan bahwa deteksi anomali jaringan berbasis machine learning dapat dibuat secara sederhana, low-budget, dan tetap memiliki nilai akademik melalui integrasi dashboard, risk score, dan rekomendasi tindakan."

## Slide Yang Disarankan

1. Title dan identitas.
2. Problem dan background.
3. Proposed solution.
4. System workflow.
5. Dataset dan preprocessing.
6. Model dan evaluation protocol.
7. Experiment results.
8. Dashboard demo screenshot.
9. Research contribution.
10. Conclusion dan future work.

## Catatan Presentasi

- Fokus pada masalah, metode, hasil, dan kontribusi.
- Jangan terlalu lama menjelaskan kode.
- Siapkan screenshot jika demo live bermasalah.
- Tekankan bahwa sistem ini low-budget dan cocok untuk konteks pendidikan.
