# Abia Impact Dashboard 2025–2026

A static, single-page dashboard for the Abia State Government showcasing project portfolio, budget performance, citizen impact, and SDG alignment.

## Files
- `index.html` — markup + CDN imports
- `styles.css` — design system, layout, responsive + dark mode
- `script.js` — data, filters, charts, exports

No build step. All dependencies (Chart.js, jsPDF, html2canvas, SheetJS) load from CDN.

## Run locally
Just open `index.html` in a browser, or serve the folder:
```bash
python3 -m http.server 8000
```

## Host on GitHub Pages
1. Create a new GitHub repository (e.g. `abia-impact-dashboard`).
2. Upload `index.html`, `styles.css`, `script.js`, `README.md` to the repo root.
3. Go to **Settings → Pages**.
4. Under "Build and deployment", set **Source = Deploy from a branch**, **Branch = main / (root)**.
5. Save. Your site goes live at `https://<username>.github.io/<repo>/` within ~1 minute.

## Features
- 5 pages: Overview, Project Portfolio, Citizen Impact, SDG Alignment, Financial Performance
- Cross-filtering (Cluster, LGA, Year, Status, Priority, SDG, search) applied to all views
- 150-project synthetic dataset (seeded — reproducible)
- Sortable data table with project detail modal
- Charts: bar, doughnut, treemap, radar, scatter, stacked horizontal bar
- Dark / light mode toggle
- Exports: CSV, Excel (.xlsx), PNG image, PDF
- Print-friendly layout
- Fully responsive (collapsible sidebar on mobile)

## Customising data
Replace the `genProject` / `PROJECTS` block in `script.js` with your real dataset. Each project needs the fields: `id, name, budget, spend, utilisation, year, cluster, mda, lga, priority, progress, status, sdg, directPeople, indirectPeople, totalImpacted, jobsCreated, womenPct, youthPct`.
