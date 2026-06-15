# Deployment Documentation NetGuard AI

## Identitas

- Nama: Achmad Maulana
- NIM: 241730016
- Program Studi: Informatika
- Judul: NetGuard AI - Predictive Network Failure and Anomaly Monitoring

## Strategi Deployment

NetGuard AI memiliki dua jalur deployment:

1. **Demo utama low-budget:** Flask dashboard lokal untuk menjalankan model `.pkl`, membaca `metrics.json`, menampilkan prediksi, dan membuat laporan penelitian.
2. **Konsep deployment premium:** Next.js, Tailwind CSS, Framer Motion, API route, dan PostgreSQL/Prisma untuk tampilan web modern yang siap dikembangkan.

## Stack Deployment Premium

| Komponen | Teknologi | Fungsi |
|---|---|---|
| Frontend | Next.js App Router, React | Membuat UI dashboard modern dan responsif. |
| Styling | Tailwind CSS | Membuat tampilan cepat, rapi, dan mudah dipelihara. |
| Animation | Framer Motion, CSS transition | Page transition, scroll morphing, loading state, dan micro-interaction. |
| API | Next.js Route Handler | Endpoint `/api/summary` dan `/api/predict`. |
| Validation | Zod | Validasi payload API. |
| Database Future | PostgreSQL, Prisma | Penyimpanan dataset, model run, prediction result, dan audit log. |
| Deployment | Vercel, Railway, Render | Hosting frontend, backend, database, dan model API. |

## API yang Disiapkan

| Endpoint | Method | Fungsi |
|---|---|---|
| `/api/summary` | GET | Mengambil ringkasan total record, anomaly, risk level, dan model terbaik. |
| `/api/predict` | POST | Menerima `totalRecords` dan `anomalyTraffic`, lalu mengembalikan risk score dan rekomendasi. |

## Langkah Run Lokal

```cmd
cd C:\Users\Asus_\OneDrive\Documents\NetGuard-AI\Achmad_Maulana_241730016_UAS_AI\12_Deployment\netguard-next-platform
npm.cmd install
npm.cmd run dev
```

Buka:

```text
http://localhost:3000
```

Jika instalasi Next.js terlalu lama pada laptop low-budget, gunakan fallback static dashboard:

```cmd
cd C:\Users\Asus_\OneDrive\Documents\NetGuard-AI\Achmad_Maulana_241730016_UAS_AI\12_Deployment\netguard-static-dashboard
py -3 -m http.server 8088
```

Buka:

```text
http://127.0.0.1:8088
```

## Langkah Deploy ke Vercel

1. Upload source code ke GitHub.
2. Login ke Vercel.
3. Pilih **Add New Project**.
4. Import repository GitHub.
5. Framework preset: Next.js.
6. Build command: `npm run build`.
7. Output directory: default Next.js.
8. Klik **Deploy**.
9. Simpan URL aplikasi sebagai bukti deployment.

## Deploy Domain dengan Cloudflare dan VPS

Rekomendasi paling stabil untuk domain pribadi adalah:

1. Beli VPS murah.
2. Arahkan DNS domain di Cloudflare ke IP VPS.
3. Install Nginx di VPS.
4. Deploy static dashboard sebagai frontend.
5. Deploy Flask API sebagai service `systemd` agar tetap hidup walaupun laptop mati.
6. Gunakan SSL Cloudflare atau Certbot.

Cloudflare Tunnel cocok jika server berada di rumah/laptop/lab dan tidak punya IP publik. Namun tunnel tetap membutuhkan mesin yang selalu menyala. Untuk proyek UAS atau demo publik, VPS lebih rapi karena tidak bergantung pada laptop.

## Langkah Integrasi Backend Model

1. Deploy Flask API ke Render/Railway.
2. Buat endpoint backend untuk menerima CSV atau feature JSON.
3. Backend load `models/netguard_best_model.pkl`.
4. Backend mengembalikan hasil prediksi ke Next.js.
5. Next.js menampilkan risk score dan recommended action.

## Bukti Deployment

Artefak yang perlu dikumpulkan:

- URL aplikasi.
- Screenshot landing dashboard.
- Screenshot processing animation.
- Screenshot model comparison.
- Screenshot risk decision.
- Screenshot endpoint `/api/summary`.
- Screenshot endpoint `/api/predict`.
- Link GitHub repository.
- Log deployment Vercel/Render/Railway.

## Catatan Batasan

URL deployment publik tidak dapat dibuat otomatis tanpa akun Vercel, Render, Railway, atau VPS milik mahasiswa. Source deployment sudah disiapkan agar mahasiswa cukup menghubungkan repository GitHub ke platform deployment.
