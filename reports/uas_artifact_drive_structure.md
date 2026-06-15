# Struktur Artefak Google Drive UAS AI

Folder utama:

```text
Nama_NIM_UAS_AI/
```

Ganti `Nama_NIM` dengan nama dan NIM asli.

## 01_Paper

Isi wajib:

- Minimal 10 artikel utama bereputasi dalam PDF.
- Artikel terbit tahun 2021-2026.
- Tema sama: AI-based Network Anomaly Detection / IDS.
- Sumber diutamakan Scopus Q1-Q4, IEEE, Springer, Elsevier, ACM, MDPI, SINTA 1, SINTA 2.

Checklist:

- [ ] 10 PDF paper tersedia.
- [ ] Nama file paper rapi: `01_Author_Year_Title.pdf`.
- [ ] Tidak ada file kosong.

## 02_Literature_Mapping

Isi wajib:

- Literature Mapping.
- Comparison Matrix.
- Ringkasan Literatur.

File yang dapat dimasukkan:

- `reports/uas_literature_mapping_and_gap.md`
- `reports/literature_review.md`
- `reports/gap_matrix.xlsx.md`

## 03_Gap_Analysis

Isi wajib:

- Research Gap.
- Novelty Statement.
- Research Method.
- Framework Penelitian.

File yang dapat dimasukkan:

- `reports/uas_literature_mapping_and_gap.md`
- `reports/novelty_statement.md`
- `reports/research_positioning.md`

## 04_Dataset

Struktur:

```text
04_Dataset/
+-- Raw_Dataset/
+-- Processed_Dataset/
+-- Dataset_Source.txt
```

Isi `Dataset_Source.txt`:

- Nama dataset: CICIDS2017
- Sumber: Canadian Institute for Cybersecurity, University of New Brunswick
- Link: https://www.unb.ca/cic/datasets/ids-2017.html
- Tanggal akses: [ISI TANGGAL AKSES]
- File yang digunakan: [ISI NAMA FILE CSV CICIDS2017]
- Jumlah data: [ISI]
- Jumlah kelas: 2 untuk eksperimen biner, Normal dan Anomaly

## 05_Source_Code

Struktur:

```text
05_Source_Code/
+-- Notebook/
+-- Script/
+-- README.md
```

Script minimal:

- `app/preprocessing.py`
- `app/train.py`
- `app/test.py`
- `app/predict.py`
- `app/main.py`
- `app/predictor.py`
- `app/evaluate.py`

Notebook disarankan:

- `preprocessing.ipynb`
- `training.ipynb`
- `evaluation.ipynb`

Jika notebook belum dibuat, lampirkan script Python dan jelaskan bahwa eksperimen dilakukan berbasis script.

## 06_Model

Isi wajib:

- `models/netguard_best_model.pkl`
- model configuration.

Tambahkan file konfigurasi:

- nama model terbaik.
- parameter model.
- random seed.
- dataset yang digunakan.
- tanggal training.

## 07_Hasil_Eksperimen

Isi wajib:

- Evaluation Result.
- Classification Report.
- Accuracy Result.
- Comparison Result.
- Experiment Log.

File dari repo:

- `reports/metrics.json`
- `reports/model_comparison.csv`
- `reports/research_summary.json`

## 08_Visualisasi

Isi wajib:

- Framework Diagram.
- Research Flowchart.
- Dataset Distribution.
- Confusion Matrix.
- Accuracy Graph.
- Loss Graph jika memakai deep learning.
- Comparison Graph.

File dari repo:

- `reports/figures/confusion_matrix.png`
- screenshot dashboard.
- screenshot prediction.
- screenshot report page.

## 09_Draft_IEEE

Isi wajib:

- `Draft_Artikel_IEEE.docx`
- `Draft_Artikel_IEEE.pdf`

File yang sudah ada:

- `Jurnal_ADPL_NetGuard_AI.docx`
- `Jurnal_ADPL_NetGuard_AI.pdf`

Catatan: pastikan format sudah sesuai template IEEE, bukan hanya format jurnal umum.

## 10_Presentasi

Isi wajib:

- `Slide_Presentasi.pptx`
- `Slide_Presentasi.pdf`

Referensi isi:

- `reports/presentation_outline.md`
- `reports/demo_script.md`
- `reports/possible_examiner_questions.md`

## 11_Turnitin

Isi wajib:

- `Turnitin_Report.pdf`

Ketentuan:

- Similarity maksimal 15%.
- Single source maksimal 3%.
- Daftar pustaka tidak dihitung.

## README.md Folder Utama

Minimal memuat:

- Nama Mahasiswa.
- NIM.
- Judul Penelitian.
- Research Gap.
- Novelty.
- Research Method.
- Ringkasan Hasil.
- Struktur Folder.
- Link GitHub.
- Link aplikasi jika ada.

## Checklist Akses Google Drive

- [ ] Anyone with the link can view.
- [ ] Tidak perlu request access.
- [ ] Semua file dapat diunduh.
- [ ] Folder sesuai struktur.
- [ ] Tidak ada file kosong.
- [ ] Semua placeholder sudah diganti.
