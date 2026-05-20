"""
Build the PNG figures consumed by the Quarto report.

Reads:   analysis/coded_data/freq_<category>.csv
         analysis/coded_data/crosstab_code_by_sector.csv
Writes:  analysis/figures/top_<category>.png   (6 bar charts)
         analysis/figures/heatmap_<category>.png (5 heatmaps)

Run after build_frequencies.py whenever the coded data changes.

    python3 scripts/build_figures.py
"""
from __future__ import annotations
import os
import pandas as pd
import matplotlib.pyplot as plt
import matplotlib as mpl

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_DIR = os.path.join(ROOT, "analysis", "coded_data")
FIG_DIR = os.path.join(ROOT, "analysis", "figures")
os.makedirs(FIG_DIR, exist_ok=True)

# Consistent style
mpl.rcParams.update({
    "font.size": 10,
    "axes.titlesize": 12,
    "axes.labelsize": 10,
    "xtick.labelsize": 9,
    "ytick.labelsize": 9,
    "axes.spines.top": False,
    "axes.spines.right": False,
    "figure.dpi": 120,
})

# Sector display order (left to right on heatmaps)
SECTOR_ORDER = [
    "Coal - Surface",
    "Coal - Underground",
    "Minerals - Surface",
    "Minerals - Underground",
    "Quarry",
]

CATEGORIES = [
    ("duty", "Duties", "freq_duty.csv", "top_duty.png", "heatmap_duty.png"),
    ("disposition", "Dispositions", "freq_disposition.csv", "top_disposition.png", "heatmap_disposition.png"),
    ("qualifications", "Qualifications", "freq_qualifications.csv", "top_qualifications.png", "heatmap_qualifications.png"),
    ("knowledge", "Knowledge", "freq_knowledge.csv", "top_knowledge.png", "heatmap_knowledge.png"),
    ("experience", "Experience", "freq_experience.csv", "top_experience.png", "heatmap_experience.png"),
    ("statutory_position", "Statutory positions", "freq_statutory_position.csv", "top_statutory_position.png", None),
]


def total_jds() -> int:
    df = pd.read_csv(os.path.join(DATA_DIR, "coded_jds.csv"))
    return df["jd_filename"].nunique()


N = total_jds()


def build_top_chart(category: str, title: str, freq_csv: str, out: str, top_n: int = 12):
    df = pd.read_csv(os.path.join(DATA_DIR, freq_csv)).sort_values("n_jds", ascending=False)
    df = df.head(top_n)
    if df.empty:
        return
    fig, ax = plt.subplots(figsize=(8, max(3, 0.42 * len(df) + 1)))
    labels = [f"{row['code']}: {row['label']}" for _, row in df.iterrows()]
    ax.barh(labels[::-1], df["n_jds"][::-1], color="#2b6cb0")
    ax.set_xlabel(f"Number of JDs (out of {N})")
    ax.set_title(f"{title}: top {len(df)} codes by JD coverage")
    ax.set_xlim(0, max(df["n_jds"].max() + 2, N))
    for i, v in enumerate(df["n_jds"][::-1]):
        ax.text(v + 0.3, i, f"{v}", va="center", fontsize=8)
    fig.tight_layout()
    fig.savefig(os.path.join(FIG_DIR, out))
    plt.close(fig)
    print(f"  wrote {out}")


def build_heatmap(category_label: str, code_prefix: str, out: str):
    """Heatmap of code × sector showing % of JDs in each sector."""
    ct = pd.read_csv(os.path.join(DATA_DIR, "crosstab_code_by_sector.csv"))
    # Filter to this category's codes by prefix
    ct = ct[ct["code"].str.startswith(code_prefix)].copy()
    if ct.empty:
        return
    # Compute % of JDs in each sector (denominator = JDs in that sector)
    sample = pd.read_csv(os.path.join(DATA_DIR, "coded_jds.csv")).drop_duplicates("jd_filename")
    sector_n = sample["sector"].value_counts().to_dict()
    sectors = [s for s in SECTOR_ORDER if s in ct.columns]
    pct = ct.copy()
    for s in sectors:
        if sector_n.get(s, 0):
            pct[s] = (ct[s] / sector_n[s] * 100).round(0)
        else:
            pct[s] = 0
    # Sort codes by total appearance (descending)
    pct["total"] = ct[sectors].sum(axis=1)
    pct = pct.sort_values("total", ascending=False).reset_index(drop=True)
    pct = pct.drop(columns=["total"])

    labels = [f"{row['code']}: {row['label']}" for _, row in pct.iterrows()]
    matrix = pct[sectors].values

    fig, ax = plt.subplots(figsize=(8, max(3.5, 0.42 * len(pct) + 1)))
    im = ax.imshow(matrix, cmap="Blues", aspect="auto", vmin=0, vmax=100)
    ax.set_xticks(range(len(sectors)))
    ax.set_xticklabels([s.replace(" - ", "\n") for s in sectors], fontsize=9)
    ax.set_yticks(range(len(labels)))
    ax.set_yticklabels(labels, fontsize=9)
    ax.set_title(f"{category_label} by sector (% of JDs in each sector)")
    # Annotate cells
    for i in range(matrix.shape[0]):
        for j in range(matrix.shape[1]):
            v = int(matrix[i, j])
            color = "white" if v >= 50 else "#1a202c"
            ax.text(j, i, f"{v}", ha="center", va="center", color=color, fontsize=8)
    cbar = fig.colorbar(im, ax=ax, fraction=0.04, pad=0.02)
    cbar.set_label("% of JDs in sector")
    fig.tight_layout()
    fig.savefig(os.path.join(FIG_DIR, out))
    plt.close(fig)
    print(f"  wrote {out}")


def main():
    print(f"Building figures from {N}-JD corpus...")
    prefix_map = {
        "duty": "D",
        "disposition": "DP",
        "qualifications": "Q",
        "knowledge": "K",
        "experience": "E",
        "statutory_position": "SP",
    }
    for cat, title, freq_csv, top_png, heat_png in CATEGORIES:
        build_top_chart(cat, title, freq_csv, top_png)
        if heat_png is not None:
            # Use SP prefix only for SP codes
            prefix = prefix_map[cat]
            # For "duty" prefix is "D" but DP also starts with D — handle carefully
            # We rebuild from the prefix list of actual codes per category
            ct = pd.read_csv(os.path.join(DATA_DIR, "crosstab_code_by_sector.csv"))
            if cat == "duty":
                ct = ct[ct["code"].str.match(r"^D\d")]
            elif cat == "disposition":
                ct = ct[ct["code"].str.match(r"^DP\d")]
            elif cat == "qualifications":
                ct = ct[ct["code"].str.match(r"^Q\d")]
            elif cat == "knowledge":
                ct = ct[ct["code"].str.match(r"^K\d")]
            elif cat == "experience":
                ct = ct[ct["code"].str.match(r"^E\d")]
            # Save filtered crosstab for the heatmap function to read
            tmp = ct.copy()
            tmp.to_csv(os.path.join(DATA_DIR, "_crosstab_tmp.csv"), index=False)
            _build_heatmap_from(tmp, title, heat_png)
    # Clean up temp
    tmp_path = os.path.join(DATA_DIR, "_crosstab_tmp.csv")
    if os.path.exists(tmp_path):
        os.remove(tmp_path)


def _build_heatmap_from(ct: pd.DataFrame, category_label: str, out: str):
    if ct.empty:
        return
    sample = pd.read_csv(os.path.join(DATA_DIR, "coded_jds.csv")).drop_duplicates("jd_filename")
    sector_n = sample["sector"].value_counts().to_dict()
    sectors = [s for s in SECTOR_ORDER if s in ct.columns]
    pct = ct.copy()
    for s in sectors:
        pct[s] = (ct[s] / sector_n.get(s, 1) * 100).round(0) if sector_n.get(s, 0) else 0
    pct["total"] = ct[sectors].sum(axis=1)
    pct = pct.sort_values("total", ascending=False).reset_index(drop=True).drop(columns=["total"])

    labels = [f"{row['code']}: {row['label']}" for _, row in pct.iterrows()]
    matrix = pct[sectors].values

    fig, ax = plt.subplots(figsize=(8, max(3.5, 0.42 * len(pct) + 1)))
    im = ax.imshow(matrix, cmap="Blues", aspect="auto", vmin=0, vmax=100)
    ax.set_xticks(range(len(sectors)))
    ax.set_xticklabels([s.replace(" - ", "\n") for s in sectors], fontsize=9)
    ax.set_yticks(range(len(labels)))
    ax.set_yticklabels(labels, fontsize=9)
    ax.set_title(f"{category_label} by sector (% of JDs in each sector)")
    for i in range(matrix.shape[0]):
        for j in range(matrix.shape[1]):
            v = int(matrix[i, j])
            color = "white" if v >= 50 else "#1a202c"
            ax.text(j, i, f"{v}", ha="center", va="center", color=color, fontsize=8)
    cbar = fig.colorbar(im, ax=ax, fraction=0.04, pad=0.02)
    cbar.set_label("% of JDs in sector")
    fig.tight_layout()
    fig.savefig(os.path.join(FIG_DIR, out))
    plt.close(fig)
    print(f"  wrote {out}")


if __name__ == "__main__":
    main()
