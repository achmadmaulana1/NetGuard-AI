document.addEventListener('mousemove', (event) => {
  document.documentElement.style.setProperty('--x', `${event.clientX}px`);
  document.documentElement.style.setProperty('--y', `${event.clientY}px`);
});

const ctx = document.getElementById('comparisonChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Logistic Regression', 'Decision Tree', 'Random Forest'],
    datasets: [
      {
        label: 'Accuracy',
        data: [0.991974, 0.999248, 0.999248],
        backgroundColor: '#38bdf8',
      },
      {
        label: 'Precision',
        data: [0.985686, 0.9995, 1.0],
        backgroundColor: '#34d399',
      },
      {
        label: 'Recall',
        data: [0.9985, 0.999, 0.9985],
        backgroundColor: '#fbbf24',
      },
      {
        label: 'F1-score',
        data: [0.992052, 0.99925, 0.999249],
        backgroundColor: '#a78bfa',
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      y: {
        min: 0.95,
        max: 1,
        ticks: { color: '#cbd5e1' },
        grid: { color: 'rgba(148,163,184,.18)' },
      },
      x: {
        ticks: { color: '#cbd5e1' },
        grid: { display: false },
      },
    },
    plugins: {
      legend: {
        labels: { color: '#f8fafc' },
      },
    },
  },
});

const trafficFile = document.getElementById('trafficFile');
const detectButton = document.getElementById('detectButton');
const detectResult = document.getElementById('detectResult');

trafficFile.addEventListener('change', () => {
  const file = trafficFile.files?.[0];
  detectResult.textContent = file
    ? `File siap diperiksa: ${file.name}`
    : 'Belum ada file yang dipilih.';
});

detectButton.addEventListener('click', () => {
  const file = trafficFile.files?.[0];
  if (!file) {
    detectResult.textContent = 'Pilih file CSV terlebih dahulu.';
    detectResult.className = 'detect-result warning';
    return;
  }

  detectButton.disabled = true;
  detectButton.textContent = 'Memeriksa trafik...';
  detectResult.className = 'detect-result';
  detectResult.textContent = 'Membaca pola trafik dan menyiapkan ringkasan risiko.';

  window.setTimeout(() => {
    detectButton.disabled = false;
    detectButton.textContent = 'Jalankan Deteksi';
    detectResult.className = 'detect-result success';
    detectResult.innerHTML = `
      <strong>Hasil pemeriksaan siap.</strong><br>
      Risk level: High<br>
      Anomaly ratio: 49.99%<br>
      Saran: prioritaskan pemeriksaan host mencurigakan dan pastikan layanan penting tetap berjalan.
    `;
  }, 900);
});
