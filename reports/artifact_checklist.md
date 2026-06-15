# Checklist Artefak Bukti Penelitian

## Identitas Penelitian

- Judul: NetGuard AI: Deteksi Anomali Trafik Jaringan Menggunakan Machine Learning Berbasis Dataset CICIDS2017
- Dataset utama: CICIDS2017
- Algoritma: Logistic Regression, Decision Tree, Random Forest
- Platform: Python, Flask, Bootstrap, Chart.js

## Checklist Dataset

- [ ] Dataset CICIDS2017 asli atau subset tersimpan.
- [ ] Nama file dataset dicatat.
- [ ] Jumlah record awal dicatat.
- [ ] Jumlah fitur dicatat.
- [ ] Distribusi label normal dan anomali dicatat.
- [ ] Screenshot folder dataset tersedia.

> Instruksi: Jangan mengunggah dataset besar ke GitHub jika ukurannya besar. Cukup dokumentasikan sumber dan subset yang digunakan.

## Checklist Preprocessing

- [ ] File `app/preprocessing.py` tersedia.
- [ ] Sample CSV tersedia di `data/sample/sample_cicids2017.csv`.
- [ ] Hasil preprocessing tersedia di `data/processed/`.
- [ ] Whitespace nama kolom berhasil dibersihkan.
- [ ] Missing value berhasil ditangani.
- [ ] Infinite value berhasil ditangani.
- [ ] Data duplikat berhasil dihapus.
- [ ] Label `BENIGN` dikonversi menjadi `0`.
- [ ] Label serangan dikonversi menjadi `1`.
- [ ] Screenshot terminal preprocessing tersedia.

## Checklist Training Dan Evaluasi

- [ ] File `app/train.py` tersedia.
- [ ] File `app/evaluate.py` tersedia.
- [ ] Logistic Regression berhasil dilatih.
- [ ] Decision Tree berhasil dilatih.
- [ ] Random Forest berhasil dilatih.
- [ ] Model terbaik tersimpan di `models/netguard_best_model.pkl`.
- [ ] `reports/metrics.json` tersedia.
- [ ] `reports/model_comparison.csv` tersedia.
- [ ] `reports/figures/confusion_matrix.png` tersedia.
- [ ] Screenshot terminal training tersedia.
- [ ] Screenshot evaluation summary tersedia.

## Checklist Dashboard

- [ ] File `app/main.py` tersedia.
- [ ] Dashboard dapat dibuka melalui browser.
- [ ] Halaman `/` menampilkan ringkasan monitoring.
- [ ] Halaman `/upload` tersedia.
- [ ] Halaman `/train` tersedia.
- [ ] Halaman `/predict` tersedia.
- [ ] Halaman `/report` tersedia.
- [ ] API `/api/summary` mengembalikan JSON.
- [ ] Grafik model comparison tampil.
- [ ] Grafik confusion matrix tampil.
- [ ] Screenshot dashboard tersedia.

## Checklist Prediction System

- [ ] File `app/predictor.py` tersedia.
- [ ] Model `.pkl` berhasil dimuat.
- [ ] CSV baru dapat diprediksi.
- [ ] Hasil prediksi `0 = Normal` dan `1 = Anomaly` tersedia.
- [ ] `reports/prediction_result.csv` tersedia.
- [ ] Risk score dihitung.
- [ ] Risk level Low, Medium, atau High tampil.
- [ ] Recommended action tampil.
- [ ] Screenshot halaman prediksi tersedia.

## Checklist Research Report

- [ ] `reports/academic_report_outline.md` tersedia.
- [ ] `reports/gap_analysis_template.md` tersedia.
- [ ] `reports/research_methodology.md` tersedia.
- [ ] `reports/research_summary.json` tersedia.
- [ ] Judul penelitian tersedia.
- [ ] Abstrak maksimal 250 kata tersedia.
- [ ] Kata kunci maksimal 5 tersedia.
- [ ] Rumusan masalah tersedia.
- [ ] Tujuan penelitian tersedia.
- [ ] Gap penelitian tersedia.
- [ ] Metode penelitian tersedia.
- [ ] Hasil eksperimen sudah diganti dari placeholder.
- [ ] Pembahasan sudah disesuaikan dengan hasil nyata.
- [ ] Kesimpulan sudah memuat hasil final.

## Bagian Yang Wajib Diganti Setelah Eksperimen Nyata

- [ ] Jumlah record dataset.
- [ ] Jumlah fitur dataset.
- [ ] Jumlah normal dan anomali.
- [ ] Nilai Accuracy.
- [ ] Nilai Precision.
- [ ] Nilai Recall.
- [ ] Nilai F1-score.
- [ ] Model terbaik.
- [ ] Interpretasi confusion matrix.
- [ ] Kesimpulan akhir.
- [ ] Daftar referensi.

## Screenshot Minimum Untuk Sidang/Demo

1. Folder struktur project.
2. Terminal preprocessing berhasil.
3. File hasil preprocessing.
4. Terminal training berhasil.
5. File `model_comparison.csv`.
6. File `metrics.json`.
7. Gambar confusion matrix.
8. Dashboard utama.
9. Halaman prediction.
10. Halaman research report.
11. File `prediction_result.csv`.
12. File `research_summary.json`.
