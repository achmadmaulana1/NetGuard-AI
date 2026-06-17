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
    nim: "241730003",
    title:
      "RetainA: Prediksi Churn Pelanggan Berbasis Ensemble Learning dan Explainable Business Risk Scoring",
    subtitle:
      "Sistem pendukung keputusan retensi pelanggan berbasis AI bisnis",
    accent: "#0EA5E9",
    signal: "#F59E0B",
    dark: "#0F172A",
  },
  {
    folder: "Putri_Dwi_Manggali_241730005_UAS_AI",
    author: "Putri Dwi Manggali",
    nim: "241730005",
    title:
      "CartIQ: Prediksi Intensi Pembelian E-Commerce Berbasis Ensemble Learning untuk Optimasi Konversi Bisnis",
    subtitle:
      "Dashboard prediksi peluang pembelian dan rekomendasi aksi pemasaran",
    accent: "#EC4899",
    signal: "#22C55E",
    dark: "#111827",
  },
];

async function readJson(file) {
  return JSON.parse(await fs.readFile(file, "utf8"));
}

function addText(slide, text, x, y, w, h, style = {}) {
  const box = slide.shapes.add({
    geometry: "textbox",
    position: { left: x, top: y, width: w, height: h },
    fill: "none",
    line: { style: "solid", fill: "none", width: 0 },
  });
  box.text = text;
  box.text.style = {
    typeface: style.typeface || "Aptos",
    fontSize: style.fontSize || 22,
    color: style.color || "#0F172A",
    bold: !!style.bold,
  };
  return box;
}

function addPill(slide, text, x, y, w, color) {
  const pill = slide.shapes.add({
    geometry: "roundRect",
    position: { left: x, top: y, width: w, height: 32 },
    fill: color,
    line: { style: "solid", fill: color, width: 1 },
    borderRadius: "rounded-xl",
  });
  pill.text = text;
  pill.text.style = { typeface: "Aptos", fontSize: 13, color: "#FFFFFF", bold: true };
}

function metricSlide(pres, p, metrics) {
  const slide = pres.slides.add();
  slide.background.fill = "#F8FAFC";
  addText(slide, "Hasil Eksperimen", 60, 44, 600, 48, { fontSize: 38, bold: true, color: p.dark });
  addText(slide, "Metode usulan dibandingkan dengan baseline dan model pembanding.", 64, 94, 760, 40, { fontSize: 18, color: "#475569" });
  const vals = [
    ["Accuracy", metrics.accuracy],
    ["Precision", metrics.precision],
    ["Recall", metrics.recall],
    ["F1-score", metrics.f1],
    ["AUC", metrics.auc],
  ];
  vals.forEach(([label, value], i) => {
    const x = 66 + i * 232;
    const card = slide.shapes.add({
      geometry: "roundRect",
      position: { left: x, top: 170, width: 200, height: 145 },
      fill: "#FFFFFF",
      line: { style: "solid", fill: "#E2E8F0", width: 1 },
      borderRadius: "rounded-lg",
      shadow: "shadow-sm",
    });
    addText(slide, label, x + 18, 190, 150, 28, { fontSize: 16, bold: true, color: "#475569" });
    addText(slide, Number(value).toFixed(3), x + 18, 232, 150, 60, { fontSize: 42, bold: true, color: i === 3 ? p.signal : p.accent });
  });
  slide.charts.add("bar", {
    position: { left: 110, top: 380, width: 1060, height: 250 },
    categories: ["Accuracy", "Precision", "Recall", "F1", "AUC"],
    series: [{ name: "Score", values: vals.map((v) => Number(v[1])), fill: p.accent }],
    hasLegend: false,
    dataLabels: { showValue: true, position: "outEnd" },
    yAxis: { min: 0, max: 1, majorGridlines: { style: "solid", fill: "#E2E8F0", width: 1 } },
  });
}

async function buildProject(p) {
  const base = path.join(ROOT, p.folder);
  const metrics = await readJson(path.join(base, "07_Hasil_Eksperimen", "metrics.json"));
  const pres = Presentation.create({ slideSize: { width: 1280, height: 720 } });

  let slide = pres.slides.add();
  slide.background.fill = "#FFFFFF";
  slide.shapes.add({
    geometry: "rect",
    position: { left: 0, top: 0, width: 1280, height: 720 },
    fill: p.dark,
    line: { style: "solid", fill: p.dark, width: 0 },
  });
  slide.shapes.add({
    geometry: "arc",
    position: { left: 760, top: 60, width: 430, height: 430 },
    fill: p.accent,
    line: { style: "solid", fill: p.accent, width: 0 },
  });
  addPill(slide, "UAS AI 2026", 72, 72, 132, p.accent);
  addText(slide, p.title, 72, 150, 760, 210, { fontSize: 46, bold: true, color: "#FFFFFF" });
  addText(slide, p.subtitle, 76, 382, 650, 58, { fontSize: 22, color: "#CBD5E1" });
  addText(slide, `${p.author} - ${p.nim}\nProgram Studi Informatika, FST UIN SMH Banten`, 76, 558, 720, 72, { fontSize: 18, color: "#E2E8F0" });

  slide = pres.slides.add();
  slide.background.fill = "#F8FAFC";
  addText(slide, "Masalah, Gap, dan Novelty", 60, 54, 800, 50, { fontSize: 38, bold: true, color: p.dark });
  const boxes = [
    ["Masalah", metrics.dataset_rows + " data publik digunakan untuk memodelkan risiko keputusan bisnis."],
    ["Research Gap", "Banyak studi belum menyatukan model tuned, baseline, artefak reproducible, dan demo web."],
    ["Novelty", "Pipeline ensemble + threshold bisnis + dashboard prediksi lokal yang siap diuji."],
  ];
  boxes.forEach(([h, b], i) => {
    const x = 70 + i * 390;
    slide.shapes.add({
      geometry: "roundRect",
      position: { left: x, top: 170, width: 340, height: 340 },
      fill: "#FFFFFF",
      line: { style: "solid", fill: "#E2E8F0", width: 1 },
      borderRadius: "rounded-lg",
      shadow: "shadow-sm",
    });
    addText(slide, h, x + 26, 205, 280, 36, { fontSize: 26, bold: true, color: i === 2 ? p.signal : p.accent });
    addText(slide, b, x + 28, 270, 280, 160, { fontSize: 20, color: "#334155" });
  });

  slide = pres.slides.add();
  slide.background.fill = "#FFFFFF";
  addText(slide, "Alur Metode", 60, 50, 620, 48, { fontSize: 38, bold: true, color: p.dark });
  const steps = ["Dataset", "Preprocessing", "Baseline", "Tuning", "Ensemble", "Web Demo"];
  steps.forEach((s, i) => {
    const x = 70 + i * 195;
    slide.shapes.add({
      geometry: "roundRect",
      position: { left: x, top: 255, width: 150, height: 88 },
      fill: i === 4 ? p.signal : p.accent,
      line: { style: "solid", fill: "#FFFFFF", width: 1 },
      borderRadius: "rounded-lg",
    });
    addText(slide, s, x + 15, 282, 120, 28, { fontSize: 18, bold: true, color: "#FFFFFF" });
    if (i < steps.length - 1) addText(slide, ">", x + 158, 283, 34, 34, { fontSize: 28, bold: true, color: "#64748B" });
  });
  addText(slide, "Evaluasi: accuracy, precision, recall, F1-score, confusion matrix, ROC-AUC, dan analisis hasil.", 90, 430, 1040, 70, { fontSize: 23, color: "#334155" });

  metricSlide(pres, p, metrics.metrics);

  slide = pres.slides.add();
  slide.background.fill = "#F8FAFC";
  addText(slide, "Demo Web dan Deployment", 60, 50, 760, 48, { fontSize: 38, bold: true, color: p.dark });
  const bullets = [
    "Dashboard lokal menampilkan metrik eksperimen dan model terbaik.",
    "Form prediksi memakai contoh data nyata dari dataset publik.",
    "Dokumentasi run local tersedia di folder 05_Source_Code dan 12_Deployment.",
    p.folder.includes("Putri") ? "Panduan domain + VPS tersedia khusus untuk deployment production." : "Bukti deployment lokal berisi source code, dokumentasi, dan screenshot.",
  ];
  bullets.forEach((b, i) => addText(slide, `${i + 1}. ${b}`, 90, 145 + i * 70, 960, 48, { fontSize: 24, color: "#1F2937" }));
  addPill(slide, "Siap diuji lokal", 90, 535, 160, p.signal);

  slide = pres.slides.add();
  slide.background.fill = p.dark;
  addText(slide, "Kesimpulan", 70, 66, 620, 62, { fontSize: 46, bold: true, color: "#FFFFFF" });
  addText(slide, `Model menghasilkan F1 ${Number(metrics.metrics.f1).toFixed(3)} dan AUC ${Number(metrics.metrics.auc).toFixed(3)}. Artefak lengkap meliputi dataset, source code, model, eksperimen, visualisasi, draft IEEE, PPT, dan web.`, 78, 180, 940, 150, { fontSize: 28, color: "#E2E8F0" });
  addText(slide, "Terima kasih", 80, 520, 520, 70, { fontSize: 44, bold: true, color: p.signal });

  const out = path.join(base, "10_Presentasi", "Slide_Presentasi.pptx");
  const pptx = await PresentationFile.exportPptx(pres);
  await pptx.save(out);
  const montage = await pres.export({ format: "webp", montage: true, scale: 1 });
  await fs.writeFile(path.join(base, "10_Presentasi", "Slide_Montage_QA.webp"), new Uint8Array(await montage.arrayBuffer()));
  console.log(`PPTX ${out}`);
}

for (const p of projects) {
  await buildProject(p);
}
