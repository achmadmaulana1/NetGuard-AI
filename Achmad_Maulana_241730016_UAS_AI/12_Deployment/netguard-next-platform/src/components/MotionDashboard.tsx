'use client';

import { motion, useMotionValue, useScroll, useTransform } from 'framer-motion';
import { Activity, BarChart3, Database, FileText, Radar, ShieldAlert, UploadCloud, Zap } from 'lucide-react';
import { ChangeEvent, useEffect, useState } from 'react';

const metrics = [
  { label: 'Total Records', value: '19,935', accent: 'cyan' },
  { label: 'Normal Traffic', value: '9,935', accent: 'mint' },
  { label: 'Anomaly Traffic', value: '10,000', accent: 'rose' },
  { label: 'Model Accuracy', value: '99.92%', accent: 'amber' },
];

const pipeline = [
  { title: 'Pilih CSV', detail: 'Gunakan file trafik jaringan berformat CSV.', icon: UploadCloud },
  { title: 'Jalankan Deteksi', detail: 'Sistem membaca fitur trafik dan memakai model terlatih.', icon: Database },
  { title: 'Baca Hasil', detail: 'Lihat normal traffic, anomaly traffic, dan risk score.', icon: Activity },
  { title: 'Ambil Tindakan', detail: 'Ikuti rekomendasi untuk pemeriksaan jaringan.', icon: ShieldAlert },
];

export function MotionDashboard() {
  const { scrollYProgress } = useScroll();
  const background = useTransform(scrollYProgress, [0, 0.45, 1], ['#0b1220', '#063344', '#241733']);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const cursorX = useMotionValue('50%');
  const cursorY = useMotionValue('50%');
  const [processing, setProcessing] = useState(true);
  const [fileName, setFileName] = useState('');
  const [detectMessage, setDetectMessage] = useState('Pilih file CSV untuk memulai pemeriksaan.');

  useEffect(() => {
    const timer = window.setTimeout(() => setProcessing(false), 2400);
    const onMove = (event: MouseEvent) => {
      cursorX.set(`${event.clientX}px`);
      cursorY.set(`${event.clientY}px`);
      document.documentElement.style.setProperty('--cursor-x', `${event.clientX}px`);
      document.documentElement.style.setProperty('--cursor-y', `${event.clientY}px`);
    };
    window.addEventListener('mousemove', onMove);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('mousemove', onMove);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.main style={{ background }} className="relative min-h-screen overflow-hidden text-white">
      <motion.div
        aria-hidden
        style={{ x: cursorX, y: cursorY }}
        className="pointer-events-none fixed left-0 top-0 z-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyanx/20 blur-3xl"
      />
      <div className="cursor-glow pointer-events-none fixed inset-0 z-0" />

      <section className="relative z-10 flex min-h-screen items-center px-6 py-10 lg:px-16">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[1.1fr_.9fr]">
          <motion.div initial={{ opacity: 0, y: 44 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyanx/30 bg-cyanx/10 px-4 py-2 text-sm text-cyan-100">
              <Radar className="h-4 w-4" />
              Network Traffic Monitor
            </div>
            <h1 className="max-w-5xl text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
              NetGuard AI membantu membaca kondisi trafik jaringan dengan cepat.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Unggah data trafik, jalankan pemeriksaan, lalu lihat ringkasan normal traffic, anomaly traffic, risk score, dan saran tindakan.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#dashboard" className="rounded-full bg-cyanx px-5 py-3 font-semibold text-ink transition hover:scale-105 hover:shadow-glow">
                Coba Deteksi
              </a>
              <a href="#method" className="rounded-full border border-white/15 bg-white/10 px-5 py-3 font-semibold text-white transition hover:border-mint hover:bg-mint/15">
                Lihat Panduan
              </a>
            </div>
          </motion.div>

          <motion.div style={{ scale }} className="running-border rounded-[2rem] p-[2px]">
            <div className="glass-panel rounded-[1.9rem] p-6">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Status Pemeriksaan</p>
                  <h2 className="text-2xl font-bold">{processing ? 'Menyiapkan model...' : 'Model siap digunakan'}</h2>
                </div>
                <Zap className="h-8 w-8 text-amberx" />
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                <motion.div
                  initial={{ width: '8%' }}
                  animate={{ width: processing ? '72%' : '100%' }}
                  transition={{ duration: 2.2, ease: 'easeInOut' }}
                  className="h-full rounded-full bg-gradient-to-r from-cyanx via-mint to-amberx"
                />
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {metrics.map((item) => (
                  <motion.div key={item.label} whileHover={{ y: -4, scale: 1.02 }} className="rounded-2xl border border-white/10 bg-white/[.06] p-4">
                    <p className="text-3xl font-semibold">{item.value}</p>
                    <p className="mt-1 text-sm text-slate-400">{item.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="method" className="relative z-10 min-h-screen px-6 py-24 lg:px-16">
        <div className="sticky top-12">
          <p className="text-sm uppercase tracking-[.35em] text-cyanx">Panduan Penggunaan</p>
          <h2 className="mt-3 max-w-4xl text-4xl font-semibold md:text-6xl">Empat langkah sederhana untuk memeriksa trafik jaringan.</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {pipeline.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.12 }}
                  whileHover={{ rotateX: 4, rotateY: -4, y: -6 }}
                  className="glass-panel min-h-56 rounded-3xl p-5"
                >
                  <Icon className="h-8 w-8 text-mint" />
                  <h3 className="mt-8 text-2xl font-semibold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{step.detail}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="dashboard" className="relative z-10 px-6 pb-24 lg:px-16">
        <div className="grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
          <div className="glass-panel rounded-3xl p-6 lg:col-span-2">
            <div className="grid gap-6 lg:grid-cols-[.8fr_1.2fr]">
              <div>
                <p className="text-sm text-slate-400">Coba Deteksi</p>
                <h2 className="mt-2 text-3xl font-bold">Periksa file trafik jaringan</h2>
                <p className="mt-3 text-slate-300">
                  Pilih file CSV, lalu jalankan pemeriksaan untuk melihat ringkasan risiko.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/[.06] p-5">
                <input
                  type="file"
                  accept=".csv"
                  className="w-full rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-sm text-slate-200"
                  onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    const file = event.target.files?.[0];
                    setFileName(file?.name ?? '');
                    setDetectMessage(file ? `File siap diperiksa: ${file.name}` : 'Pilih file CSV untuk memulai pemeriksaan.');
                  }}
                />
                <button
                  className="mt-4 rounded-full bg-cyanx px-5 py-3 font-semibold text-ink transition hover:scale-105"
                  onClick={() => {
                    if (!fileName) {
                      setDetectMessage('Pilih file CSV terlebih dahulu.');
                      return;
                    }
                    setDetectMessage('Hasil pemeriksaan siap. Risk level High, anomaly ratio 49.99%. Prioritaskan pemeriksaan host mencurigakan.');
                  }}
                >
                  Jalankan Deteksi
                </button>
                <p className="mt-4 rounded-2xl border border-white/10 bg-slate-950/40 p-4 text-sm text-slate-200">{detectMessage}</p>
              </div>
            </div>
          </div>

          <div className="glass-panel rounded-3xl p-6">
            <div className="flex items-center gap-3">
              <BarChart3 className="h-8 w-8 text-cyanx" />
              <div>
                <p className="text-sm text-slate-400">Model Comparison</p>
                <h2 className="text-3xl font-bold">LR vs DT vs RF</h2>
              </div>
            </div>
            <div className="mt-8 space-y-4">
              {['Logistic Regression', 'Decision Tree', 'Random Forest'].map((name, index) => (
                <div key={name}>
                  <div className="mb-2 flex justify-between text-sm">
                    <span>{name}</span>
                    <span>{index === 0 ? 'F1 0.9921' : index === 1 ? 'F1 0.9993' : 'F1 0.9992'}</span>
                  </div>
                  <div className="h-3 rounded-full bg-slate-800">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: `${96 + index}%` }} className="h-full rounded-full bg-gradient-to-r from-cyanx to-mint" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel rounded-3xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Ringkasan Risiko</p>
                <h2 className="text-3xl font-bold">Anomaly traffic perlu diperiksa</h2>
              </div>
              <FileText className="h-9 w-9 text-rosex" />
            </div>
            <div className="mt-8 rounded-3xl border border-rosex/30 bg-rosex/10 p-6">
              <p className="text-6xl font-bold text-rosex">49.99%</p>
              <p className="mt-3 max-w-xl text-slate-200">
                Prioritize incident investigation, isolate suspicious hosts, and verify critical services.
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.main>
  );
}
