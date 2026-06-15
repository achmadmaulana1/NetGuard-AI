# UAS AI Final Package - NetGuard AI

## Identitas

- Nama Mahasiswa: Achmad Maulana
- NIM: 241730016
- Program Studi: Program Studi Informatika
- Fakultas: Fakultas Sains dan Teknologi
- Universitas: Universitas Islam Negeri Sultan Maulana Hasanuddin Banten
- Tahun: 2026

## Judul Penelitian

NetGuard AI: Predictive Network Failure and Anomaly Monitoring Berbasis Machine Learning pada Dataset CICIDS2017

## Research Gap

Belum banyak penelitian deteksi anomali jaringan berbasis CICIDS2017 yang mengintegrasikan model machine learning sederhana, dashboard monitoring ringan, klasifikasi risiko otomatis, rekomendasi tindakan, dan dokumentasi reproducible untuk konteks pendidikan low-budget.

## Novelty

Integrasi machine learning anomaly detection dengan lightweight educational network monitoring dashboard, automated risk classification, dan actionable recommendations untuk administrator jaringan pemula.

## Research Method

RM1: Implementasi NetGuard AI Dashboard-Based ML Anomaly Detection.

RM2: Perbandingan baseline Logistic Regression dan Decision Tree dengan proposed Random Forest pada dataset CICIDS2017.

## Command Reproduksi

```cmd
py -3 -m pip install -r requirements.txt
py -3 app\preprocessing.py
py -3 app\train.py
py -3 app\test.py
py -3 app\predict.py
py -3 app\main.py
```

## Struktur Folder

Folder ini mengikuti ketentuan Google Drive UAS:

01_Paper, 02_Literature_Mapping, 03_Gap_Analysis, 04_Dataset, 05_Source_Code, 06_Model, 07_Hasil_Eksperimen, 08_Visualisasi, 09_Draft_IEEE, 10_Presentasi, 11_Turnitin, 12_Deployment.

## Catatan Kejujuran Akademik

Sample CSV hanya digunakan untuk smoke test. Untuk final submission, jalankan dataset CICIDS2017 nyata atau subset representatif, lalu perbarui metrik, confusion matrix, narasi hasil, dan artikel IEEE.

## Update Artefak Tambahan

Paket ini sudah ditambahkan artefak lanjutan:

- Notebook Jupyter di `05_Source_Code/Notebook`.
- Versi Word untuk literature mapping, gap analysis, experiment log, narasi presentasi, dokumentasi deployment, dan README paket.
- Lampiran visual data eksperimen dalam bentuk `.png` dan `.docx`.
- PPT enhanced dengan 14 slide, variasi layout, grafik, tabel, tombol navigasi internal, dan transisi slide.
