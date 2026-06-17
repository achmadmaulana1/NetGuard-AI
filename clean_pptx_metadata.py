from __future__ import annotations

import shutil
import tempfile
import zipfile
import os
from pathlib import Path
from xml.sax.saxutils import escape


FILES = [
    (Path("Arlen_Prima_Dinova_241730003_UAS_AI/10_Presentasi/Slide_Presentasi.pptx"), "Arlen_Prima_Dinova"),
    (Path("Putri_Dwi_Manggali_241730005_UAS_AI/10_Presentasi/Slide_Presentasi.pptx"), "Putri Dwi Manggali"),
]


def patch(path: Path, author: str) -> None:
    fd, tmp_name = tempfile.mkstemp(suffix=".pptx")
    os.close(fd)
    tmp = Path(tmp_name)
    with zipfile.ZipFile(path, "r") as zin, zipfile.ZipFile(tmp, "w", zipfile.ZIP_DEFLATED) as zout:
        for item in zin.infolist():
            data = zin.read(item.filename)
            lower = item.filename.lower()
            if "comment" in lower:
                continue
            if item.filename == "docProps/core.xml":
                text = data.decode("utf-8", errors="ignore")
                for tag in ["dc:creator", "cp:lastModifiedBy"]:
                    start = text.find(f"<{tag}>")
                    end = text.find(f"</{tag}>")
                    if start != -1 and end != -1:
                        text = text[: start + len(tag) + 2] + escape(author) + text[end:]
                data = text.encode("utf-8")
            zout.writestr(item, data)
    shutil.move(tmp, path)


for file, author in FILES:
    patch(file, author)
    print(f"cleaned {file}")
