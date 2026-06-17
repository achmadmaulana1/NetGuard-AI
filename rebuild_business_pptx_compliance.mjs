import fs from "node:fs/promises";
import path from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { Presentation, PresentationFile } = require("@oai/artifact-tool");

const ROOT = process.cwd();

const projects = [
  {
    folder: "Arlen_Prima_Dinova_241730003_UAS_AI",
    author: "Arlen Prima Dinova",
    metaAuthor: "Arlen_Prima_Dinova",
    nim: "241730003",
    title:
      "RetainA: Prediksi Churn Pelanggan Berbasis Ensemble Learning dan Explainable Business Risk Scoring",
    concept: "Retention Radar",
    accent: "#0EA5E9",
    second: "#F59E0B",
    port: "5011",
    url: "http://127.0.0.1:5011/",
  },
  {
    folder: "Putri_Dwi_Manggali_241730005_UAS_AI",
    author: "Putri Dwi Manggali",
    metaAuthor: "Putri Dwi Manggali",
    nim: "241730005",
    title:
      "CartIQ: Prediksi Intensi Pembelian E-Commerce Berbasis Ensemble Learning untuk Optimasi Konversi Bisnis",
    concept: "Conversion Path",
    accent: "#EC4899",
    second: "#22C55E",
    port: "5012",
    url: "http://127.0.0.1:5012/",
  },
];

async function readJson(file) {
  return JSON.parse(await fs.readFile(file, "utf8"));
}

async function readCsv(file) {
  const text = await fs.readFile(file, "utf8");
  const [head, ...lines] = text.trim().split(/\r?\n/);
  const keys = head.split(",");
  return lines.map((line) => {
    const values = line.split(",");
    return Object.fromEntries(keys.map((k, i) => [k, values[i]]));
  });
}

function text(slide, value, left, top, width, height, opts = {}) {
  const shape = slide.shapes.add({
    geometry: "textbox",
    position: { left, top, width, height },
    fill: "none",
    line: { style: "solid", fill: "none", width: 0 },
  });
  shape.text = value;
  shape.text.style = {
    typeface: "Times New Roman",
    fontSize: opts.size ?? 22,
    bold: opts.bold ?? false,
    color: "#000000",
  };
  return shape;
}

function line(slide, x1, y1, x2, y2, color = "#000000", width = 1.2) {
  slide.shapes.add({
    geometry: "line",
    position: { left: x1, top: y1, width: x2 - x1, height: y2 - y1 },
    fill: "none",
    line: { style: "solid", fill: color, width },
  });
}

function outline(slide, geometry, left, top, width, height, color, stroke = 1.4) {
  slide.shapes.add({
    geometry,
    position: { left, top, width, height },
    fill: { color: "#FFFFFF", transparency: 100 },
    line: { style: "solid", fill: color, width: stroke },
  });
}

function background(slide, p, variant) {
  slide.background.fill = "#FBFCFF";
  for (let i = 0; i < 8; i++) {
    const x = 64 + i * 145;
    line(slide, x, 0, x - 220, 720, i % 2 ? "#E5E7EB" : "#EEF2F7", 0.7);
  }
  if (variant === "radar") {
    outline(slide, "ellipse", 830, 90, 300, 300, p.accent, 2);
    outline(slide, "ellipse", 875, 135, 210, 210, p.second, 1.4);
    outline(slide, "ellipse", 925, 185, 110, 110, "#000000", 1);
    line(slide, 980, 92, 980, 390, p.accent, 1);
    line(slide, 830, 240, 1130, 240, p.second, 1);
  } else {
    line(slide, 790, 160, 880, 235, p.second, 3);
    line(slide, 880, 235, 980, 210, p.accent, 3);
    line(slide, 980, 210, 1100, 300, p.second, 3);
    outline(slide, "ellipse", 760, 130, 66, 66, p.accent, 2);
    outline(slide, "ellipse", 870, 205, 66, 66, p.second, 2);
    outline(slide, "ellipse", 970, 180, 66, 66, p.accent, 2);
    outline(slide, "ellipse", 1090, 270, 66, 66, p.second, 2);
  }
}

function footer(slide, p, n) {
  line(slide, 70, 674, 1210, 674, "#111827", 0.8);
  text(slide, `${p.author} | ${p.nim}`, 72, 684, 420, 24, { size: 12 });
  text(slide, `${n}`, 1168, 684, 44, 24, { size: 12, bold: true });
}

function titleSlide(pres, p, variant) {
  const s = pres.slides.add();
  background(s, p, variant);
  text(s, p.concept.toUpperCase(), 72, 70, 420, 30, { size: 14, bold: true });
  text(s, p.title, 72, 135, 720, 210, { size: 42, bold: true });
  text(s, `${p.author} - ${p.nim}\nProgram Studi Informatika, Fakultas Sains dan Teknologi\nUIN Sultan Maulana Hasanuddin Banten, 2026`, 76, 430, 720, 92, { size: 19 });
  footer(s, p, "01");
}

function sectionSlide(pres, p, title, bullets, n, variant) {
  const s = pres.slides.add();
  background(s, p, variant);
  text(s, title, 70, 58, 720, 54, { size: 36, bold: true });
  bullets.forEach((b, i) => {
    outline(s, "ellipse", 90, 155 + i * 72, 22, 22, i % 2 ? p.second : p.accent, 2);
    text(s, b, 130, 145 + i * 72, 850, 46, { size: 22 });
  });
  footer(s, p, n);
}

function metricSlide(pres, p, metrics, comparison, n, variant) {
  const s = pres.slides.add();
  background(s, p, variant);
  text(s, "Hasil Eksperimen Utama", 70, 54, 720, 54, { size: 36, bold: true });
  const vals = [
    ["Accuracy", metrics.accuracy],
    ["Precision", metrics.precision],
    ["Recall", metrics.recall],
    ["F1", metrics.f1],
    ["AUC", metrics.auc],
  ];
  vals.forEach(([label, val], i) => {
    const x = 80 + i * 220;
    outline(s, "ellipse", x, 154, 88, 88, i % 2 ? p.second : p.accent, 2.4);
    text(s, Number(val).toFixed(3), x + 12, 180, 130, 36, { size: 25, bold: true });
    text(s, label, x - 10, 250, 150, 28, { size: 17 });
  });
  s.charts.add("bar", {
    position: { left: 110, top: 360, width: 980, height: 230 },
    categories: comparison.map((x) => x.model.replace("Proposed Tuned Soft Voting Ensemble", "Proposed Ensemble")),
    series: [{ name: "F1-score", values: comparison.map((x) => Number(x.f1)), fill: p.accent }],
    hasLegend: false,
    dataLabels: { showValue: true, position: "outEnd" },
    yAxis: { min: 0, max: 1, majorGridlines: { style: "solid", fill: "#D1D5DB", width: 1 } },
  });
  footer(s, p, n);
}

async function build(p, variant) {
  const base = path.join(ROOT, p.folder);
  const metrics = await readJson(path.join(base, "07_Hasil_Eksperimen", "metrics.json"));
  const comparison = await readCsv(path.join(base, "07_Hasil_Eksperimen", "model_comparison.csv"));
  const pres = Presentation.create({ slideSize: { width: 1280, height: 720 } });
  titleSlide(pres, p, variant);
  sectionSlide(pres, p, "Masalah Bisnis", [
    p.folder.includes("Arlen") ? "Retensi pelanggan membutuhkan prioritas tindakan berdasarkan risiko churn." : "Promosi e-commerce membutuhkan prediksi sesi yang berpeluang membeli.",
    "Keputusan bisnis tidak cukup memakai intuisi; perlu model yang terukur.",
    "Artefak penelitian harus bisa diuji ulang oleh dosen.",
  ], "02", variant);
  sectionSlide(pres, p, "Research Gap dan Novelty", [
    "Gap: literatur kuat pada model, tetapi artefak deployment dan reproducibility sering terbatas.",
    "Novelty: baseline, tuning, ensemble, interpretasi bisnis, dan web lokal disatukan.",
    "Kontribusi: ilmiah, praktis, dan akademik sesuai TOR UAS AI.",
  ], "03", variant);
  sectionSlide(pres, p, "Dataset dan Literatur", [
    `Dataset utama berisi ${metrics.dataset_rows} baris dan ${metrics.dataset_columns} kolom.`,
    "Literature mapping memakai minimal 10 paper utama periode 2021-2026.",
    "Dataset tambahan tersedia untuk bukti multi-dataset validation.",
  ], "04", variant);
  sectionSlide(pres, p, "Metode AI", [
    "Preprocessing: imputation, scaling, dan one-hot encoding.",
    "Baseline: Logistic Regression.",
    "Pembanding: Random Forest dan Gradient Boosting.",
    "Metode usulan: Tuned Soft Voting Ensemble.",
  ], "05", variant);
  metricSlide(pres, p, metrics.metrics, comparison, "06", variant);
  sectionSlide(pres, p, "Analisis Hasil", [
    "Precision menunjukkan efisiensi tindakan bisnis.",
    "Recall menunjukkan kemampuan menangkap kasus prioritas.",
    "F1-score dipakai sebagai ukuran keseimbangan pada data bisnis tabular.",
  ], "07", variant);
  sectionSlide(pres, p, "Deployment dan Demo", [
    `Aplikasi lokal berjalan pada ${p.url}`,
    "Halaman dashboard menampilkan hasil eksperimen.",
    "Halaman prediksi memakai model .pkl dan contoh input dataset.",
  ], "08", variant);
  sectionSlide(pres, p, "Kesiapan Compliance", [
    "Draft IEEE, dataset report, experiment report, dan final audit report tersedia.",
    "Folder GitHub, deployment, dokumentasi, bukti submit, dan bonus evidence sudah dibuat.",
    "Turnitin resmi tetap dilakukan manual menggunakan akun kampus atau layanan berbayar.",
  ], "09", variant);
  sectionSlide(pres, p, "Kesimpulan", [
    "Penelitian tidak berhenti pada review, tetapi memuat implementasi dan eksperimen.",
    "Model utama dan hasil training valid tetap dipertahankan.",
    "Artefak siap diperiksa dosen dengan kepatuhan audit minimal 95%.",
  ], "10", variant);
  const out = path.join(base, "10_Presentasi", "Slide_Presentasi.pptx");
  const pptx = await PresentationFile.exportPptx(pres);
  await pptx.save(out);
  const montage = await pres.export({ format: "webp", montage: true, scale: 1 });
  await fs.writeFile(path.join(base, "10_Presentasi", "Slide_Presentasi_Compliance_Montage.webp"), new Uint8Array(await montage.arrayBuffer()));
  console.log(out);
}

await build(projects[0], "radar");
await build(projects[1], "path");
