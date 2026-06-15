# Checklist Kepatuhan UAS AI dan Rubrik Penilaian

## 1. Checklist Luaran

| No | Luaran | Status Saat Ini | Tindakan Wajib |
|---:|---|---|---|
| 1 | Draft Artikel IEEE `.docx` | Ada dokumen jurnal, perlu verifikasi template IEEE | Sesuaikan dengan template IEEE |
| 2 | Draft Artikel IEEE `.pdf` | Ada PDF jurnal, perlu verifikasi template IEEE | Export ulang setelah format IEEE |
| 3 | Turnitin Report `.pdf` | Belum ada | Upload setelah artikel final |
| 4 | Literature Mapping | Ada versi markdown | Lengkapi 10 paper aktual |
| 5 | Gap Analysis | Ada | Pastikan didukung 10 paper |
| 6 | Dataset | Ada sample, belum dataset real | Unduh CICIDS2017 real/subset |
| 7 | Source Code | Ada | Tambahkan notebook jika diminta |
| 8 | Model | Ada `.pkl` dari sample | Train ulang dengan dataset real |
| 9 | Hasil Eksperimen | Ada sample result | Ganti dengan hasil real |
| 10 | Visualisasi | Ada confusion matrix dan dashboard | Tambahkan screenshot lengkap |
| 11 | Slide Presentasi | Outline ada, file PPT belum ada | Buat PPTX/PDF |
| 12 | Link Google Drive | Belum ada | Upload dan set akses publik |

## 2. Rubrik Penilaian

| Komponen | Bobot | Kondisi Saat Ini | Estimasi Skor | Perbaikan Agar Maksimal |
|---|---:|---|---:|---|
| Studi Literatur | 10% | Framework ada, paper perlu diverifikasi | 6/10 | Unduh 10 PDF 2021-2026 dan isi DOI/quartile |
| Literature Mapping | 10% | Tabel awal ada | 7/10 | Lengkapi semua metrik dari paper |
| Research Gap | 15% | Gap jelas tetapi perlu bukti paper | 10/15 | Kaitkan tiap gap ke artikel spesifik |
| Novelty | 15% | Novelty realistis dan implementatif | 11/15 | Perkuat dengan comparison matrix |
| Research Method | 10% | RM1/RM2 jelas | 8/10 | Tambahkan framework diagram final |
| Implementasi | 15% | Code dan dashboard berjalan | 13/15 | Tambah real dataset run dan test script log |
| Hasil Eksperimen | 10% | Masih sample | 4/10 | Jalankan CICIDS2017 real/subset |
| Draft IEEE | 10% | Draft markdown ada, docx/pdf perlu IEEE | 5/10 | Format dengan template IEEE 6-12 halaman |
| Artefak Dokumentasi | 5% | Banyak dokumen ada | 4/5 | Kumpulkan screenshot dan Drive final |

Estimasi saat ini: **68/100** jika dikumpulkan apa adanya.

Target realistis setelah perbaikan wajib: **85-90/100**.

## 3. Perbaikan Wajib Sebelum Submit

1. Jalankan eksperimen pada subset CICIDS2017 nyata.
2. Isi minimal 10 artikel utama dengan data bibliografi lengkap.
3. Verifikasi quartile/SINTA/Scopus dari sumber resmi.
4. Ganti seluruh placeholder `[GANTI]`, `[ISI]`, dan `[Verify Authors]`.
5. Buat Draft IEEE `.docx` dan `.pdf`.
6. Buat slide presentasi `.pptx` dan `.pdf`.
7. Lampirkan Turnitin Report.
8. Kumpulkan screenshot preprocessing, training, dashboard, prediction, report.
9. Upload semua ke Google Drive dengan akses "Anyone with the link can view".

## 4. Bonus Nilai Yang Sudah Dimiliki

- Flask dashboard deployment lokal.
- Source code modular.
- GitHub-ready folder.
- Lebih dari satu baseline model.
- Dokumentasi akademik lengkap.

## 5. Bonus Yang Masih Bisa Ditambahkan

1. Hyperparameter tuning Random Forest.
2. Cross-validation.
3. Feature importance.
4. Dataset validasi tambahan UNSW-NB15.
5. Deployment online, misalnya Render, Railway, Hugging Face Spaces, atau VPS.
