# Possible Examiner Questions And Ideal Answers

## AI And Machine Learning

### 1. Apa perbedaan AI dan Machine Learning pada penelitian ini?

AI adalah bidang luas yang bertujuan membuat sistem mampu melakukan tugas cerdas. Machine Learning adalah bagian dari AI yang memungkinkan sistem belajar dari data. Pada penelitian ini, machine learning digunakan untuk mempelajari pola trafik normal dan anomali dari dataset CICIDS2017.

### 2. Mengapa penelitian ini menggunakan machine learning?

Karena pola anomali jaringan dapat dipelajari dari data trafik berlabel. Machine learning memungkinkan sistem melakukan klasifikasi secara otomatis berdasarkan fitur trafik, sehingga dapat membantu administrator jaringan mengenali kondisi normal dan anomali.

### 3. Mengapa memilih algoritma Logistic Regression, Decision Tree, dan Random Forest?

Ketiganya dipilih karena cocok untuk pembelajaran mahasiswa dan data tabular. Logistic Regression menjadi baseline sederhana, Decision Tree mudah diinterpretasikan, sedangkan Random Forest memberikan model ensemble yang umumnya lebih stabil.

### 4. Mengapa tidak menggunakan deep learning?

Penelitian ini berfokus pada implementasi low-budget dan beginner-friendly. Deep learning membutuhkan data, tuning, dan resource komputasi yang lebih besar. Untuk tahap awal, model klasik lebih mudah dijelaskan dan cukup relevan untuk dataset tabular.

### 5. Bagaimana cara memilih model terbaik?

Model terbaik dipilih berdasarkan F1-score tertinggi. Jika F1-score sama, digunakan Recall sebagai prioritas kedua, kemudian Accuracy sebagai prioritas ketiga.

## Dataset

### 6. Mengapa menggunakan CICIDS2017?

CICIDS2017 menyediakan trafik jaringan realistis dengan label normal dan serangan. Dataset ini sering digunakan dalam penelitian intrusion detection dan network anomaly detection, sehingga cocok untuk eksperimen akademik.

### 7. Apa arti label Normal dan Anomaly?

Normal adalah trafik benign atau trafik wajar. Anomaly adalah trafik yang berasal dari label serangan atau aktivitas tidak normal, seperti DDoS, PortScan, Bot, atau jenis serangan lain pada CICIDS2017.

### 8. Apakah sample CSV cukup untuk hasil penelitian?

Tidak. Sample CSV hanya digunakan untuk memastikan pipeline berjalan di laptop biasa. Hasil penelitian final harus menggunakan subset CICIDS2017 nyata yang lebih besar dan representatif.

### 9. Bagaimana jika dataset tidak seimbang?

Jika dataset tidak seimbang, Accuracy saja tidak cukup. Oleh karena itu penelitian juga menggunakan Precision, Recall, F1-score, dan Confusion Matrix. Untuk pengembangan lanjut, balancing dapat dilakukan dengan undersampling, oversampling, atau SMOTE.

### 10. Apa preprocessing yang dilakukan?

Preprocessing meliputi pembersihan whitespace pada nama kolom, validasi kolom Label, konversi label biner, penanganan missing value, infinite value, duplikasi, dan konversi fitur numerik.

## Network Anomaly Detection

### 11. Apa itu network anomaly detection?

Network anomaly detection adalah proses mengidentifikasi pola trafik jaringan yang menyimpang dari kondisi normal. Anomali dapat menunjukkan gangguan, kesalahan konfigurasi, atau potensi serangan.

### 12. Apakah sistem ini mendeteksi jenis serangan spesifik?

Versi ini melakukan klasifikasi biner, yaitu Normal atau Anomaly. Sistem belum melakukan klasifikasi multi-class untuk jenis serangan spesifik.

### 13. Mengapa output dibuat biner?

Output biner lebih sederhana dan sesuai untuk tahap awal penelitian. Administrator jaringan pemula biasanya membutuhkan indikasi cepat apakah trafik aman atau mencurigakan.

### 14. Apakah sistem ini real-time?

Belum. Sistem saat ini berbasis CSV batch processing. Pengembangan selanjutnya dapat diarahkan ke real-time monitoring dengan integrasi log, NetFlow, atau packet capture.

### 15. Apa manfaat sistem ini bagi administrator jaringan?

Sistem membantu memberikan indikasi awal jumlah trafik normal, jumlah anomali, skor risiko, dan rekomendasi tindakan sehingga administrator dapat melakukan investigasi lebih cepat.

## Research Gap And Novelty

### 16. Apa gap penelitian yang diangkat?

Gap penelitian ini adalah banyak studi deteksi anomali jaringan berfokus pada performa model, tetapi belum selalu menyediakan dashboard monitoring ringan, risk classification, dan actionable recommendation untuk pengguna pemula.

### 17. Apa novelty utama penelitian ini?

Novelty utama adalah integrasi machine learning anomaly detection dengan lightweight educational network monitoring dashboard.

### 18. Apa novelty sekunder penelitian ini?

Novelty sekunder adalah automated risk classification dan actionable recommendations untuk beginner network administrators.

### 19. Apakah algoritmanya baru?

Tidak. Penelitian ini tidak mengklaim algoritma baru. Kebaruan berada pada integrasi sistem, konteks pendidikan, dashboard ringan, klasifikasi risiko, dan rekomendasi tindakan.

### 20. Mengapa konteks pendidikan penting?

Karena sekolah, kampus, dan laboratorium sering memiliki keterbatasan biaya dan SDM. Sistem low-budget membantu mahasiswa dan administrator pemula memahami penerapan AI pada masalah jaringan nyata.

## Deployment

### 21. Mengapa menggunakan Flask?

Flask ringan, mudah dipelajari, dan cukup untuk membangun dashboard demo. Flask cocok untuk prototipe akademik yang tidak membutuhkan arsitektur kompleks.

### 22. Mengapa tidak menggunakan database?

Versi ini tidak menggunakan database agar sederhana, low-budget, dan mudah direproduksi. Data dibaca dari CSV dan hasil disimpan sebagai JSON/CSV.

### 23. Apakah sistem bisa dijalankan di laptop biasa?

Bisa. Sistem menggunakan Python dan library umum seperti Pandas, Scikit-learn, Flask, dan Matplotlib. Tidak membutuhkan GPU atau layanan cloud berbayar.

### 24. Bagaimana sistem menyimpan model?

Model terbaik disimpan dalam format PKL menggunakan Joblib pada file `models/netguard_best_model.pkl`.

### 25. Bagaimana jika model belum dilatih?

Sistem menampilkan pesan ramah "Model belum dilatih." Pengguna harus menjalankan training terlebih dahulu sebelum prediksi.

## Evaluation Metrics

### 26. Mengapa menggunakan Accuracy?

Accuracy memberikan gambaran umum proporsi prediksi benar. Namun, Accuracy tidak cukup jika dataset tidak seimbang.

### 27. Mengapa Precision penting?

Precision penting untuk mengetahui seberapa akurat prediksi Anomaly. Precision rendah berarti banyak false alarm.

### 28. Mengapa Recall penting?

Recall penting karena menunjukkan kemampuan model mendeteksi anomali yang benar-benar terjadi. Dalam keamanan jaringan, false negative dapat berisiko tinggi.

### 29. Mengapa F1-score dijadikan metrik utama?

F1-score menyeimbangkan Precision dan Recall. Karena deteksi anomali membutuhkan keseimbangan antara false alarm dan kemampuan mendeteksi serangan, F1-score cocok sebagai dasar pemilihan model.

### 30. Bagaimana membaca Confusion Matrix?

Confusion Matrix menunjukkan TN, FP, FN, dan TP. TN berarti normal diprediksi normal, FP berarti normal diprediksi anomali, FN berarti anomali diprediksi normal, dan TP berarti anomali diprediksi anomali.
