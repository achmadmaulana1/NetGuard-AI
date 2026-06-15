// NetGuard AI dashboard charts.
// This file uses the Chart.js library loaded from the dashboard template.

async function loadSummary() {
    const response = await fetch("/api/summary");
    return response.json();
}

function metricColor(metric) {
    const colors = {
        accuracy: "#38bdf8",
        precision: "#22c55e",
        recall: "#facc15",
        f1_score: "#fb7185"
    };
    return colors[metric] || "#91a1bd";
}

function renderModelComparison(rows) {
    const canvas = document.getElementById("modelComparisonChart");
    if (!canvas) {
        return;
    }

    const labels = rows.map((row) => row.model);
    const metrics = ["accuracy", "precision", "recall", "f1_score"];

    new Chart(canvas, {
        type: "bar",
        data: {
            labels: labels,
            datasets: metrics.map((metric) => ({
                label: metric.replace("_", " ").toUpperCase(),
                data: rows.map((row) => Number(row[metric] || 0)),
                backgroundColor: metricColor(metric)
            }))
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 1,
                    ticks: { color: "#91a1bd" },
                    grid: { color: "#26344f" }
                },
                x: {
                    ticks: { color: "#91a1bd" },
                    grid: { color: "#26344f" }
                }
            },
            plugins: {
                legend: {
                    labels: { color: "#eef4ff" }
                }
            }
        }
    });
}

function renderConfusionMatrix(matrix) {
    const canvas = document.getElementById("confusionMatrixChart");
    if (!canvas) {
        return;
    }

    const safeMatrix = matrix || [[0, 0], [0, 0]];
    const labels = ["TN", "FP", "FN", "TP"];
    const values = [
        safeMatrix[0][0],
        safeMatrix[0][1],
        safeMatrix[1][0],
        safeMatrix[1][1]
    ];

    new Chart(canvas, {
        type: "bar",
        data: {
            labels: labels,
            datasets: [{
                label: "Confusion Matrix Count",
                data: values,
                backgroundColor: ["#22c55e", "#facc15", "#fb7185", "#38bdf8"]
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { color: "#91a1bd", precision: 0 },
                    grid: { color: "#26344f" }
                },
                x: {
                    ticks: { color: "#91a1bd" },
                    grid: { color: "#26344f" }
                }
            },
            plugins: {
                legend: {
                    labels: { color: "#eef4ff" }
                }
            }
        }
    });
}

loadSummary()
    .then((summary) => {
        renderModelComparison(summary.comparison || []);
        renderConfusionMatrix(summary.confusion_matrix || [[0, 0], [0, 0]]);
    })
    .catch(() => {
        renderModelComparison([]);
        renderConfusionMatrix([[0, 0], [0, 0]]);
    });
