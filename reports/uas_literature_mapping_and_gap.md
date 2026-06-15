# UAS AI - Literature Mapping, Comparison Matrix, dan Gap Analysis

## 1. Identitas Topik Penelitian

- Topik: AI-based Network Anomaly Detection and Predictive Network Monitoring
- Bidang: Cyber Security / Artificial Intelligence
- Studi kasus: NetGuard AI - Predictive Network Failure & Anomaly Monitoring
- Dataset utama: CICIDS2017
- Implementasi: Python, Scikit-Learn, Flask, Bootstrap, Chart.js
- Target luaran: implementasi model AI, dashboard web, artikel IEEE, artefak reproducible

## 2. Deskripsi Topik

Deteksi anomali jaringan merupakan bidang penelitian yang memanfaatkan AI untuk mengenali pola trafik yang berbeda dari kondisi normal. Pada konteks jaringan sekolah, kampus, laboratorium, dan UMKM, gangguan jaringan sering diketahui setelah layanan terganggu. Sistem monitoring konvensional biasanya hanya menampilkan status saat ini, sedangkan pendekatan AI dapat membantu mengklasifikasikan trafik menjadi normal atau anomali berdasarkan pola historis dari dataset publik.

NetGuard AI diposisikan sebagai prototipe edukatif yang menggabungkan machine learning anomaly detection dengan dashboard monitoring ringan. Sistem ini tidak hanya menghasilkan metrik evaluasi model, tetapi juga menampilkan risk score dan rekomendasi tindakan untuk administrator jaringan pemula.

## 3. Permasalahan Penelitian

1. Banyak penelitian IDS hanya berfokus pada peningkatan akurasi model.
2. Belum semua penelitian menyediakan artefak dashboard yang mudah dipahami pengguna non-ahli.
3. Dataset CICIDS2017 sering digunakan, tetapi masih terdapat risiko faulty use, data leakage, dan evaluasi yang tidak konsisten.
4. Mahasiswa membutuhkan implementasi low-budget yang dapat direproduksi di laptop biasa.
5. Hasil prediksi model perlu diterjemahkan menjadi informasi operasional, seperti risk level dan recommended action.

## 4. Literature Mapping 10 Artikel Utama 2021-2026

Catatan akademik: tabel ini memakai artikel yang ditemukan dari sumber publisher atau indeks terbuka. Kolom DOI, quartile, dan metrik yang belum terlihat dari halaman sumber wajib diverifikasi dari PDF/jurnal asli sebelum dikumpulkan. Jangan mengarang data yang tidak tersedia.

| No | Tahun | Penulis | Judul | Publisher/Jurnal | Kategori | Dataset | Metode | Hasil Utama | Kelebihan | Kekurangan |
|---:|---:|---|---|---|---|---|---|---|---|---|
| 1 | 2021 | Maseer et al. | Benchmarking of Machine Learning for Anomaly-Based Intrusion Detection Systems in the CICIDS2017 Dataset | IEEE Access | IEEE / Scopus placeholder | CICIDS2017 | ML benchmarking | Membandingkan beberapa model ML pada CICIDS2017 | Menjadi baseline penting untuk studi ML-IDS | Belum fokus pada dashboard monitoring edukatif |
| 2 | 2023 | Engelen et al. | Faulty Use of the CIC-IDS-2017 Dataset in Information Security Research | Springer | Scopus placeholder | CICIDS2017 | Dataset validity analysis | Menunjukkan risiko penggunaan CICIDS2017 yang tidak tepat | Sangat penting untuk validitas metodologi | Bukan implementasi dashboard atau sistem monitoring |
| 3 | 2024 | Ali et al. | Enhancing Intrusion Detection: A Hybrid Machine and Deep Learning Approach | Journal of Cloud Computing, Springer | Scopus placeholder | CICIDS2017, UNSW-NB15, NSL-KDD, WSN-DS | XGBoost, CNN, LSTM, CNN-LSTM | CICIDS2017 binary accuracy dilaporkan sampai sekitar 97.90%-98.40% pada bagian hasil | Menguji beberapa dataset dan hybrid model | Kompleksitas lebih tinggi, kurang cocok untuk low-budget beginner deployment |
| 4 | 2024 | Sarker et al. / verify | Enhancing Network Threat Detection with Random Forest-Based NIDS and Permutation Feature Importance | Journal of Network and Systems Management, Springer | Scopus placeholder | CICIDS2017 | Random Forest, permutation feature importance | Weighted F1 sekitar 99.8% dan macro F1 sekitar 93.31% menurut abstrak/snippet publisher | Ada feature importance dan pembahasan imbalance | Validasi hanya pada CICIDS2017; risiko generalisasi |
| 5 | 2024 | Verify authors | Machine Learning-Based Network Intrusion Detection for Big and Imbalanced Data | Journal of Big Data, Springer | Scopus placeholder | UNSW-NB15, CICIDS2017, CICIDS2018 | DT, RF, ET, feature extraction/oversampling | CICIDS2017 dilaporkan mencapai akurasi sangat tinggi pada beberapa tree-based models | Membahas big and imbalanced data | Sistem implementasi web edukatif tidak menjadi fokus |
| 6 | 2024 | Verify authors | Network Intrusion Detection Based on Deep Belief Network and Broad Learning System | Electronics, MDPI | MDPI / Scopus placeholder | CICIDS2017 | DBN, Broad Learning | Memanfaatkan CICIDS2017 dengan banyak fitur | Menggunakan deep learning architecture | Lebih kompleks dari kebutuhan UAS low-budget |
| 7 | 2024 | Verify authors | Enhancing Intrusion Detection Systems Using a Deep Learning and Machine Learning Approach | Systems, MDPI | MDPI / Scopus placeholder | Augmented CIC-IDS-2017 | ML/DL comparison | Akurasi sampai sekitar 91% pada augmented CIC-IDS-2017 menurut halaman sumber | Membahas augmentasi dan perbandingan pendekatan | Belum menekankan deployment dashboard ringan |
| 8 | 2024 | Verify authors | Learn-IDS: Bridging Gaps between Datasets and Learning-Based IDS | Electronics, MDPI | MDPI / Scopus placeholder | Multiple IDS datasets | Learning-based IDS framework | Membahas gap dataset dan learning-based IDS | Relevan untuk gap dataset/generalization | Perlu verifikasi detail metrik dari paper asli |
| 9 | 2025 | Xu and Liu | Robust Anomaly Detection in Network Traffic: Evaluating Machine Learning Models on CICIDS2017 | arXiv | Preprint / not Scopus until verified | CICIDS2017 | MLP, CNN, OCSVM, LOF | Supervised model kuat pada known attack tetapi recall turun pada unseen threat | Menyoroti generalisasi terhadap serangan baru | Preprint; perlu status publikasi formal |
| 10 | 2025 | Verify authors | Adaptive Network Anomaly Detection Using Machine Learning | Springer | Scopus placeholder | CICIDS2017 | Hybrid multi-layered stacking | Menggunakan accuracy, precision, recall, F1-score dan feature importance | Relevan untuk adaptive IDS | Perlu cek detail implementasi dashboard/deployment |

## 5. Comparison Matrix

| Artikel | Dataset | Metode | Kelebihan | Kekurangan | Research Limitation |
|---|---|---|---|---|---|
| Maseer et al. 2021 | CICIDS2017 | ML benchmarking | Baseline kuat untuk model klasik | Belum fokus deployment | Gap dashboard dan actionable recommendation |
| Faulty Use CICIDS2017 2023 | CICIDS2017 | Dataset validity analysis | Mengingatkan risiko metodologi | Bukan model implementatif | Perlu pipeline yang lebih hati-hati dan transparan |
| Hybrid ML/DL 2024 | Multiple datasets | XGBoost, CNN, LSTM | Performa tinggi | Kompleksitas tinggi | Kurang cocok untuk laptop mahasiswa tanpa GPU |
| RF Feature Importance 2024 | CICIDS2017 | RF + feature importance | Ada interpretabilitas | Generalisasi terbatas | Butuh deployment praktis |
| Big Imbalanced NIDS 2024 | Multiple IDS datasets | Tree-based models | Memperhatikan imbalance | Sistem web bukan fokus | Perlu dashboard edukatif |
| DBN-BLS 2024 | CICIDS2017 | Deep learning | Feature learning kuat | Kompleksitas tinggi | Kurang explainable untuk pemula |
| DL/ML IDS 2024 | CICIDS2017 augmented | DL/ML comparison | Ada augmentasi | Metrik perlu diverifikasi | Implementasi operasional terbatas |
| Learn-IDS 2024 | Multiple datasets | Framework IDS | Fokus gap dataset | Detail eksperimen perlu dicek | Perlu studi kasus implementasi sederhana |
| Xu and Liu 2025 | CICIDS2017 | MLP, CNN, OCSVM, LOF | Bahas unseen threat | Preprint | Perlu validasi publikasi |
| Adaptive NIDS 2025 | CICIDS2017 | Stacking | Adaptive dan feature importance | Perlu verifikasi detail | Deployment edukatif belum jelas |

## 6. Analisis Tren Literatur

### Tren Metode

Penelitian 2021-2026 menunjukkan pergeseran dari model klasik seperti Logistic Regression, Decision Tree, Random Forest, dan SVM menuju deep learning dan hybrid ensemble seperti CNN-LSTM, DBN, broad learning, stacking, dan feature-importance-based NIDS.

### Tren Dataset

CICIDS2017 masih banyak digunakan karena memiliki trafik benign dan serangan yang realistis, lebih dari 80 fitur flow, serta CSV untuk machine learning. Namun, beberapa artikel mulai menekankan validasi lintas dataset seperti UNSW-NB15, CICIDS2018, WSN-DS, dan dataset IoT.

### Tren Evaluasi

Metrik umum meliputi Accuracy, Precision, Recall, F1-score, false positive rate, detection rate, dan Confusion Matrix. Beberapa artikel mulai menambahkan cross-validation, feature importance, dan generalization test.

### Kelemahan Berulang

1. Banyak hasil akurasi sangat tinggi tetapi belum tentu generalizable.
2. Dashboard implementatif jarang menjadi kontribusi utama.
3. Evaluasi sering bergantung pada satu dataset.
4. Risiko data leakage dan faulty use CICIDS2017 masih perlu diperhatikan.
5. Pengguna pemula sulit menafsirkan hasil model tanpa visualisasi dan rekomendasi.

## 7. Research Gap

### A. Dataset Gap

Banyak penelitian menggunakan CICIDS2017 sebagai dataset tunggal. Dampaknya, model dapat terlihat sangat baik pada dataset yang sama tetapi belum tentu kuat pada kondisi jaringan lain.

### B. Method Gap

Metode hybrid dan deep learning sering menghasilkan performa tinggi, tetapi membutuhkan kompleksitas yang lebih besar. Untuk konteks pendidikan dan laptop biasa, model yang sederhana dan explainable masih relevan.

### C. Evaluation Gap

Sebagian penelitian belum menampilkan alur reproducibility yang mudah diikuti mahasiswa, termasuk struktur dataset, command, artifact, dan dashboard.

### D. Deployment Gap

Banyak penelitian berhenti di metrik model. Belum semua menyediakan dashboard web ringan yang bisa dipakai sebagai demo sistem monitoring.

### E. Practical Gap

Hasil prediksi belum selalu diterjemahkan menjadi risk level dan recommended action yang mudah dipahami administrator jaringan pemula.

### F. Primary Research Gap

**Belum banyak penelitian deteksi anomali jaringan berbasis CICIDS2017 yang mengintegrasikan model machine learning sederhana, dashboard monitoring ringan, klasifikasi risiko otomatis, rekomendasi tindakan, dan dokumentasi reproducible untuk konteks pendidikan low-budget.**

## 8. Novelty

### Novelty Candidate 1

Integrasi model machine learning anomaly detection dengan lightweight educational network monitoring dashboard.

- Keunggulan: realistis, terukur, sudah diimplementasikan dengan Flask.
- Kesulitan: sedang.
- Potensi publikasi: cukup untuk paper student/prosiding lokal.

### Novelty Candidate 2

Automated risk classification dan actionable recommendation untuk administrator jaringan pemula.

- Keunggulan: menambah nilai praktis dari hasil prediksi.
- Kesulitan: rendah-sedang.
- Potensi publikasi: baik jika dikaitkan dengan kebutuhan operasional jaringan pendidikan.

### Novelty Candidate 3

Perbandingan baseline klasik dengan proposed Random Forest optimized pipeline untuk CICIDS2017.

- Keunggulan: sesuai standar eksperimen ML.
- Kesulitan: sedang.
- Potensi publikasi: bergantung pada hasil tuning dan validasi real dataset.

### Novelty Terpilih

**Integrasi machine learning anomaly detection dengan dashboard monitoring ringan, risk classification, dan actionable recommendation untuk konteks infrastruktur pendidikan.**

## 9. Novelty Statement

Penelitian ini mengusulkan NetGuard AI, sebuah prototipe deteksi anomali jaringan berbasis machine learning yang mengintegrasikan pipeline klasifikasi CICIDS2017 dengan dashboard monitoring ringan berbasis Flask. Kebaruan penelitian terletak pada penggabungan model anomaly detection, visualisasi monitoring, klasifikasi risiko otomatis, dan rekomendasi tindakan yang dirancang untuk administrator jaringan pemula pada lingkungan pendidikan low-budget.

## 10. Research Method

### RM1 - Implementasi NetGuard AI Dashboard-Based ML Anomaly Detection

- Tujuan: membangun sistem deteksi anomali jaringan berbasis CICIDS2017.
- Metode: preprocessing, Logistic Regression, Decision Tree, Random Forest, evaluasi metrik, dashboard Flask.
- Dataset: CICIDS2017.
- Output: model `.pkl`, metrics JSON, confusion matrix, dashboard, prediction result.

### RM2 - Baseline vs Proposed Method Comparison

- Tujuan: membandingkan baseline Logistic Regression/Decision Tree dengan proposed Random Forest.
- Metode: train/test split 80:20, random seed 42, metrik Accuracy, Precision, Recall, F1-score.
- Dataset: CICIDS2017.
- Output: tabel perbandingan model dan pemilihan model terbaik.

### RM Terbaik

RM1 dipilih sebagai fokus utama karena paling sesuai dengan ketentuan UAS: terdapat implementasi, eksperimen, evaluasi, deployment bonus, dan artefak yang dapat direproduksi.

## 11. Sumber Dataset

Dataset utama adalah CICIDS2017 dari Canadian Institute for Cybersecurity, University of New Brunswick. Dataset ini berisi benign traffic dan common attacks, tersedia dalam PCAP dan CSV flow, serta memiliki labeled flows dari CICFlowMeter.

Link: https://www.unb.ca/cic/datasets/ids-2017.html

Dataset alternatif:

1. UNSW-NB15.
2. CSE-CIC-IDS2018.
3. NSL-KDD.

## 12. Instruksi Pengisian Manual Wajib

Sebelum dikumpulkan:

1. Unduh minimal 10 artikel utama dalam PDF.
2. Verifikasi penulis, DOI, publisher, quartile/SINTA/Scopus.
3. Isi ulang semua kolom yang masih bertanda "verify".
4. Ganti metrik dari sample CSV dengan hasil eksperimen real CICIDS2017.
5. Tambahkan citation IEEE pada draft artikel.
