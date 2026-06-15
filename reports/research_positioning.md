# Research Positioning

## Kategori Penelitian

**AI-based Network Anomaly Detection and Predictive Network Monitoring**

## Posisi Penelitian NetGuard AI

NetGuard AI diposisikan sebagai penelitian terapan yang menggabungkan deteksi anomali jaringan berbasis machine learning dengan dashboard monitoring ringan. Fokus penelitian bukan hanya membandingkan performa algoritma, tetapi juga menghasilkan artefak sistem yang dapat dipahami dan digunakan oleh administrator jaringan pemula.

## Mengapa NetGuard AI Berbeda

Sebagian penelitian deteksi anomali jaringan berakhir pada evaluasi model, misalnya nilai Accuracy, Precision, Recall, F1-score, dan Confusion Matrix. NetGuard AI menambahkan lapisan implementasi berupa dashboard monitoring yang menampilkan jumlah trafik normal, jumlah trafik anomali, akurasi model terbaik, skor risiko, hasil prediksi, dan rekomendasi tindakan.

Perbedaan utama NetGuard AI adalah:

1. Menggunakan pendekatan machine learning yang sederhana dan explainable.
2. Mengutamakan dataset CICIDS2017 sebagai dataset publik yang relevan untuk keamanan jaringan.
3. Menyediakan dashboard web ringan berbasis Flask.
4. Menampilkan risk score dan recommended action.
5. Dirancang agar dapat dijalankan pada laptop biasa.

## Mengapa Integrasi Dashboard Penting

Dashboard penting karena hasil model machine learning tidak selalu mudah dipahami oleh pengguna non-peneliti. Administrator jaringan membutuhkan informasi yang cepat dibaca, seperti status normal atau anomali, persentase risiko, dan tindakan awal yang perlu dilakukan.

Integrasi dashboard membuat hasil penelitian lebih aplikatif karena:

1. Mempermudah interpretasi hasil prediksi.
2. Menyediakan bukti visual untuk demo akademik.
3. Menghubungkan model AI dengan kebutuhan operasional jaringan.
4. Membantu pengguna memahami dampak prediksi terhadap kondisi jaringan.

## Mengapa Low-Budget Deployment Penting

Tidak semua sekolah, kampus kecil, laboratorium, atau UMKM memiliki server mahal, GPU, atau layanan cloud berbayar. Oleh karena itu, penelitian ini menekankan implementasi yang dapat berjalan secara lokal menggunakan Python, Flask, dan dataset publik.

Low-budget deployment penting karena:

1. Menurunkan hambatan implementasi bagi mahasiswa.
2. Memungkinkan eksperimen dilakukan tanpa biaya API atau cloud.
3. Sesuai untuk pembelajaran mandiri dan tugas akhir.
4. Mudah direplikasi oleh institusi pendidikan dengan sumber daya terbatas.

## Mengapa Konteks Infrastruktur Pendidikan Penting

Infrastruktur pendidikan seperti sekolah, kampus, dan laboratorium komputer membutuhkan jaringan yang stabil untuk mendukung pembelajaran. Namun, monitoring jaringan sering masih dilakukan secara manual atau hanya menggunakan tools dasar.

NetGuard AI relevan untuk konteks pendidikan karena:

1. Menggunakan teknologi yang mudah dipelajari mahasiswa informatika atau jaringan.
2. Mendukung pemahaman lintas bidang antara AI dan networking.
3. Memberikan contoh penerapan machine learning untuk masalah infrastruktur nyata.
4. Dapat dikembangkan sebagai prototipe sistem monitoring jaringan sekolah atau kampus.

## Pernyataan Posisi Penelitian

Berdasarkan gap yang diidentifikasi, NetGuard AI menempati posisi sebagai sistem prototipe low-budget yang mengintegrasikan machine learning anomaly detection, dashboard monitoring, risk classification, dan actionable recommendation untuk mendukung administrator jaringan pemula pada konteks pendidikan.

## Bagian Yang Harus Disesuaikan

Sesuaikan bagian berikut setelah 10 paper dikaji:

1. Tambahkan perbandingan spesifik dengan penelitian yang paling dekat.
2. Sebutkan paper mana yang hanya fokus pada model.
3. Sebutkan paper mana yang sudah menggunakan dashboard, jika ada.
4. Perkuat alasan low-budget jika paper terdahulu membutuhkan resource besar.
5. Hubungkan posisi penelitian dengan kebutuhan kampus/sekolah tempat studi.
