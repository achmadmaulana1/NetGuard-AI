# Template Gap Analysis Penelitian

## Judul Penelitian

**NetGuard AI: Deteksi Anomali Trafik Jaringan Menggunakan Machine Learning Berbasis Dataset CICIDS2017**

## Latar Belakang Gap

Deteksi anomali jaringan telah banyak diteliti menggunakan berbagai algoritma machine learning. Namun, tidak semua penelitian menghasilkan artefak sistem yang mudah digunakan oleh administrator jaringan pemula. Beberapa penelitian hanya menampilkan hasil akurasi model tanpa visualisasi dashboard, rekomendasi tindakan, atau dokumentasi implementasi yang reproducible.

## Ringkasan Penelitian Terdahulu

| No | Peneliti/Tahun | Dataset | Algoritma | Fokus | Keterbatasan |
|---:|---|---|---|---|---|
| 1 | [GANTI] | CICIDS2017 | [GANTI] | Deteksi intrusi | [GANTI] |
| 2 | [GANTI] | [GANTI] | [GANTI] | Klasifikasi serangan | [GANTI] |
| 3 | [GANTI] | [GANTI] | [GANTI] | Perbandingan model | [GANTI] |

> Instruksi: Isi tabel menggunakan minimal 3 referensi jurnal/prosiding yang relevan. Gunakan format sitasi sesuai pedoman kampus.

## Gap Penelitian

Gap yang diidentifikasi dalam penelitian ini adalah:

1. Banyak penelitian hanya berfokus pada performa model, tetapi belum menyediakan dashboard monitoring sederhana.
2. Sebagian sistem belum memberikan rekomendasi tindakan yang mudah dipahami administrator jaringan.
3. Implementasi sering tidak dijelaskan secara praktis sehingga sulit direproduksi oleh mahasiswa atau pengguna pemula.
4. Belum banyak penelitian yang menekankan pendekatan low-budget untuk konteks sekolah, kampus kecil, atau UMKM.

## Posisi Penelitian Ini

Penelitian NetGuard AI berupaya mengisi gap tersebut dengan:

1. Membangun pipeline preprocessing CICIDS2017 yang sederhana.
2. Membandingkan Logistic Regression, Decision Tree, dan Random Forest.
3. Menyediakan dashboard Flask untuk menampilkan ringkasan monitoring.
4. Menghasilkan risk score dan recommended action.
5. Menyediakan artefak penelitian yang dapat diperiksa ulang.

## Novelty Aman

Novelty penelitian ini adalah integrasi model machine learning sederhana dengan dashboard monitoring berbasis web yang menampilkan skor risiko dan rekomendasi tindakan untuk membantu administrator jaringan pemula.

> Instruksi: Gunakan kata "integrasi" dan "artefak dashboard" sebagai novelty yang aman. Hindari klaim terlalu besar seperti "metode baru" jika algoritma yang digunakan adalah algoritma umum.

## Pernyataan Gap Final

Berdasarkan kajian pustaka, masih terdapat kebutuhan terhadap sistem deteksi anomali jaringan yang tidak hanya mengevaluasi model machine learning, tetapi juga menyediakan visualisasi dashboard, skor risiko, rekomendasi tindakan, dan dokumentasi reproducible. Oleh karena itu, penelitian ini mengembangkan NetGuard AI sebagai sistem low-budget berbasis CICIDS2017 untuk mendukung pembelajaran dan monitoring jaringan.

## Bagian Yang Harus Diganti

Ganti bagian berikut setelah melakukan kajian pustaka nyata:

- Nama peneliti dan tahun pada tabel.
- Dataset dan algoritma penelitian terdahulu.
- Keterbatasan setiap penelitian terdahulu.
- Pernyataan gap jika dosen pembimbing mengarahkan fokus berbeda.
- Novelty jika ada pengembangan tambahan pada dashboard atau metode evaluasi.
