// NetGuard AI dashboard charts.
// This file uses the Chart.js library loaded from the dashboard template.

async function loadSummary() {
    const response = await fetch("/api/summary");
    return response.json();
}

function metricColor(metric) {
    const colors = {
        accuracy: "#23d3ee",
        precision: "#3ee38f",
        recall: "#f8c34a",
        f1_score: "#ff5f7e"
    };
    return colors[metric] || "#9aa7b8";
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
                    ticks: { color: "#9aa7b8" },
                    grid: { color: "rgba(255,255,255,0.1)" }
                },
                x: {
                    ticks: { color: "#9aa7b8" },
                    grid: { color: "rgba(255,255,255,0.08)" }
                }
            },
            plugins: {
                legend: {
                    labels: { color: "#f5f7fb" }
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
                backgroundColor: ["#3ee38f", "#f8c34a", "#ff5f7e", "#23d3ee"]
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { color: "#9aa7b8", precision: 0 },
                    grid: { color: "rgba(255,255,255,0.1)" }
                },
                x: {
                    ticks: { color: "#9aa7b8" },
                    grid: { color: "rgba(255,255,255,0.08)" }
                }
            },
            plugins: {
                legend: {
                    labels: { color: "#f5f7fb" }
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
