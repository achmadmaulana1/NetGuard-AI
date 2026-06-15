# Executive Summary

## Project Title

**NetGuard AI - Predictive Network Failure & Anomaly Monitoring**

## Ringkasan Untuk Pembimbing

NetGuard AI adalah prototipe sistem deteksi anomali trafik jaringan berbasis machine learning yang dirancang untuk konteks pendidikan dan implementasi low-budget. Sistem ini menggunakan dataset CICIDS2017-style CSV, melakukan preprocessing data, melatih tiga algoritma machine learning, mengevaluasi model, menyimpan model terbaik, melakukan prediksi pada CSV baru, dan menampilkan hasil melalui dashboard Flask.

Fokus utama proyek ini adalah menghubungkan penelitian machine learning dengan artefak sistem yang dapat didemonstrasikan. Oleh karena itu, kontribusi proyek tidak hanya pada perbandingan model, tetapi juga pada dashboard monitoring, risk score, dan rekomendasi tindakan untuk administrator jaringan pemula.

## Masalah Yang Diangkat

Administrator jaringan sering mengetahui gangguan setelah layanan mengalami penurunan kualitas. Pada konteks sekolah, kampus kecil, laboratorium, atau UMKM, sistem monitoring yang canggih sering terkendala biaya, kompleksitas, dan keterbatasan sumber daya. NetGuard AI mencoba menjawab kebutuhan sistem yang sederhana, murah, dan mudah direproduksi.

## Solusi Yang Dikembangkan

NetGuard AI menyediakan:

1. Pipeline preprocessing CICIDS2017.
2. Training Logistic Regression, Decision Tree, dan Random Forest.
3. Evaluasi Accuracy, Precision, Recall, F1-score, dan Confusion Matrix.
4. Penyimpanan model terbaik dalam format `.pkl`.
5. Sistem prediksi CSV baru.
6. Dashboard monitoring berbasis Flask, Bootstrap, dan Chart.js.
7. Export hasil prediksi dan ringkasan penelitian.
8. Paket dokumen akademik untuk laporan dan persiapan sidang.

## Project Maturity Assessment

### Current Level

Saat ini NetGuard AI berada pada level **prototype akademik fungsional**. Sistem sudah dapat berjalan secara lokal, memproses sample dataset, melatih model, menampilkan evaluasi, melakukan prediksi, dan menyajikan hasil melalui dashboard.

Kekuatan saat ini:

- Reproducible pada laptop biasa.
- Tidak membutuhkan API berbayar.
- Struktur kode modular.
- Memiliki dashboard demo.
- Memiliki dokumen akademik pendukung.

Batasan saat ini:

- Belum real-time.
- Masih berbasis CSV batch processing.
- Belum multi-class attack classification.
- Hasil sample CSV tidak boleh dianggap sebagai hasil final.
- Belum ada deployment production.

### Future Development

Pengembangan selanjutnya:

1. Menggunakan subset CICIDS2017 yang lebih besar.
2. Menambahkan balancing data seperti SMOTE atau undersampling.
3. Menambahkan klasifikasi multi-class untuk jenis serangan.
4. Mengintegrasikan data dari NetFlow, firewall log, atau router log.
5. Menambahkan database ringan seperti SQLite.
6. Menambahkan authentication untuk dashboard.
7. Mengembangkan monitoring mendekati real-time.
8. Menambahkan alert berbasis email, Telegram, atau webhook.

### Commercial Potential

Potensi komersial berada pada skala prototipe monitoring ringan untuk sekolah, laboratorium, UMKM, atau pelatihan jaringan. Sistem dapat dikembangkan menjadi produk edukasi atau tool pendamping pembelajaran cyber security dan network administration.

Namun, untuk menjadi produk komersial, sistem masih membutuhkan:

- Pengujian pada data jaringan nyata.
- Validasi performa lebih luas.
- Keamanan aplikasi web.
- Manajemen user.
- Logging dan audit trail.
- Integrasi dengan perangkat jaringan nyata.
- Dokumentasi instalasi production.

### Research Potential

Potensi riset cukup baik karena proyek menggabungkan AI, jaringan komputer, intrusion detection, dashboard monitoring, dan konteks pendidikan. Pengembangan riset dapat diarahkan ke:

1. Perbandingan model machine learning dan deep learning.
2. Feature selection untuk dataset CICIDS2017.
3. Evaluasi imbalance dataset.
4. Explainable AI untuk interpretasi fitur.
5. Real-time anomaly detection.
6. Integrasi model dengan sistem monitoring jaringan pendidikan.

## Nilai Akademik

Nilai akademik proyek ini terletak pada:

- Penggunaan dataset publik.
- Pipeline preprocessing yang dapat dijelaskan.
- Perbandingan beberapa algoritma.
- Evaluasi metrik klasifikasi.
- Artefak dashboard sebagai kontribusi implementatif.
- Novelty integrasi dashboard, risk classification, dan rekomendasi tindakan.

## Kesimpulan Untuk Pembimbing

NetGuard AI layak dijadikan proyek penelitian mahasiswa karena memiliki keseimbangan antara teori machine learning, praktik jaringan komputer, implementasi software, dan dokumentasi akademik. Proyek ini realistis untuk dikerjakan dengan sumber daya rendah, tetapi tetap dapat dikembangkan menjadi penelitian lanjutan yang lebih kuat.
