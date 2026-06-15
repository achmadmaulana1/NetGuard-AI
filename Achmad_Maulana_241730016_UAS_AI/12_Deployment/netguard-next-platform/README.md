# NetGuard AI Next.js Deployment Source

This folder contains the premium UI deployment concept for NetGuard AI.

## Tech Stack

- Frontend: Next.js App Router, React, Tailwind CSS
- Animation: Framer Motion, CSS running border, scroll morphing, cursor glow
- Icons: Lucide React
- API: Next.js Route Handlers
- Validation: Zod
- Database blueprint: PostgreSQL with Prisma

## Local Run

```cmd
cd C:\Users\Asus_\OneDrive\Documents\NetGuard-AI\Achmad_Maulana_241730016_UAS_AI\12_Deployment\netguard-next-platform
npm.cmd install
npm.cmd run dev
```

Open:

```text
http://localhost:3000
```

## API Test

```cmd
curl http://localhost:3000/api/summary
curl -X POST http://localhost:3000/api/predict -H "Content-Type: application/json" -d "{\"totalRecords\":100,\"anomalyTraffic\":35}"
```

If `npm install` is too slow on a low-budget laptop, use the static fallback:

```cmd
cd C:\Users\Asus_\OneDrive\Documents\NetGuard-AI\Achmad_Maulana_241730016_UAS_AI\12_Deployment\netguard-static-dashboard
py -3 -m http.server 8088
```

Open:

```text
http://127.0.0.1:8088
```

## Deployment Plan

1. Push source code to GitHub.
2. Import repository to Vercel.
3. Set build command: `npm run build`.
4. Set output framework: Next.js.
5. For database version, create PostgreSQL on Supabase/Railway and set `DATABASE_URL`.
6. Deploy Flask ML API separately on Render/Railway if the Python model must run online.

## Research Proof

Take screenshots of:

- Landing dashboard.
- Processing animation state.
- Model comparison section.
- Risk decision card.
- Vercel deployment URL page.
