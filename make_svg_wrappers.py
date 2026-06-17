from pathlib import Path
import base64

for project in ["Arlen_Prima_Dinova_241730003_UAS_AI", "Putri_Dwi_Manggali_241730005_UAS_AI"]:
    vis = Path(project) / "08_Visualisasi"
    for stem in ["confusion_matrix", "roc_curve", "model_comparison_chart"]:
        png = vis / f"{stem}.png"
        svg = vis / f"{stem}.svg"
        if png.exists():
            data = base64.b64encode(png.read_bytes()).decode("ascii")
            svg.write_text(
                f'<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">'
                f'<image href="data:image/png;base64,{data}" x="0" y="0" width="1200" height="800" preserveAspectRatio="xMidYMid meet"/>'
                f"</svg>",
                encoding="utf-8",
            )
            print(svg)
