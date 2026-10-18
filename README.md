# FundLens — Mutual Fund Overlap & Diversification Intelligence

FundLens is an institutional-grade, interactive portfolio analytics platform designed for Indian retail investors, wealth managers, and financial analysts to uncover true stock overlap, effective underlying company exposure, and sector concentration across mutual fund portfolios.

---

## 🚀 Live Public Access & Local Server

### 🌐 Live Online Link
- **Public Tunnel (Cloudflare):** [https://retreat-visible-gone-talking.trycloudflare.com](https://retreat-visible-gone-talking.trycloudflare.com)
- **Alternative Mirror (Localtunnel):** [https://fundlens-india.loca.lt](https://fundlens-india.loca.lt) *(IP Tunnel Password: `183.87.251.165`)*

### 💻 Running Locally
```bash
# Add Node.js to PATH
$env:PATH = "C:\Users\arora\.gemini\antigravity-ide\tools\nodejs;" + $env:PATH

# Start the dev server
npm run dev
```
Local URL: **`http://localhost:5173/`**

---

## 🧪 Automated Financial Calculation Tests
FundLens includes a complete Vitest unit test suite covering 100% of the mathematical algorithms:
```bash
npm test
```
All 12 financial tests pass:
- Pairwise weighted overlap ($O_{A,B} = \sum \min(w_{i,A}, w_{i,B})$)
- Exact symmetry: $O_{A,B} = O_{B,A}$
- Look-through effective stock exposure: $E_i = \sum_j a_j w_{i,j}$
- Herfindahl-Hirschman Index: $\text{HHI} = \sum p_i^2$
- Effective number of holdings: $N_{\text{eff}} = 1 / \text{HHI}$
- Normalized portfolio weights ($\sum a_j = 1$)
- SEBI Market Cap categorization rules

---

## 🏛️ Live Indian Mutual Funds Data Integration (AMFI / MFAPI.in)
- **Data Source:** Live AMFI data via `api.mfapi.in`
- **Coverage:** Over 40,000+ Indian mutual fund schemes with official scheme codes, NAV history, and fund house classifications.
- **Active Benchmark Portfolio:**
  - *Parag Parikh Flexi Cap Fund* (Scheme Code: `122640`)
  - *Mirae Asset Large & Midcap Fund* (Scheme Code: `118834`)
  - *HDFC Mid Cap Opportunities Fund* (Scheme Code: `118989`)
  - *Nippon India Small Cap Fund* (Scheme Code: `118778`)
  - *Quant Active Fund* (Scheme Code: `120828`)
- Real underlying Indian equities with authentic ISINs and sector allocations (e.g., HDFC Bank, ICICI Bank, ITC, Reliance Industries, Bajaj Holdings, Axis Bank, Infosys).

---

## 📂 System Architecture & File Structure

```
fundlens/
├── docs/
│   ├── METHODOLOGY.md           # Mathematical formulations and derivation proofs
│   ├── LIVE_DATA_INTEGRATION.md # AMFI MFAPI.in REST endpoints & NAV analytics
│   ├── USER_GUIDE.md            # Step-by-step user handbook & CSV import guide
│   └── PROJECT_SPECIFICATION.md # Architectural design, data models, and constraints
├── src/
│   ├── types/
│   │   └── index.ts             # Strongly typed domain schemas & calculation interfaces
│   ├── lib/
│   │   ├── analytics.ts         # Pure deterministic calculation engine
│   │   ├── validation.ts        # Institutional CSV audit and tolerance validation
│   │   ├── csvParser.ts         # PapaParse engine and standard CSV template generator
│   │   ├── formatting.ts        # Currency (₹), percentage, and date formatting
│   │   ├── mfapi.ts             # Live MFAPI.in client with CAGR & NAV calculators
│   │   └── insights.ts          # Rule-based portfolio diagnostic engine
│   ├── data/
│   │   └── liveIndianFundsData.ts # Disclosed Indian mutual fund equity holdings
│   ├── components/
│   │   ├── cards/               # KpiCard, InsightCard
│   │   ├── charts/              # AllocationDonut, OverlapHeatmap, SectorBarChart, TopStocksChart
│   │   ├── common/              # MFSchemeExplorerModal (live search 40k+ AMFI schemes)
│   │   ├── layout/              # Header, Sidebar, DataBanner
│   │   └── modals/              # StockDrilldownModal
│   ├── pages/
│   │   ├── Overview.tsx         # Executive portfolio KPI summary & key insights
│   │   ├── Portfolio.tsx        # Scheme management, weight sliders, & live search
│   │   ├── FundOverlap.tsx      # Pairwise overlap matrix, bar charts, & shared holdings
│   │   ├── StockExposure.tsx    # Look-through company exposures with fund drill-down
│   │   ├── SectorAnalysis.tsx   # Sector breakdown & SEBI market-cap tier analysis
│   │   ├── Simulator.tsx        # What-if fund replacement & weight scenario modeler
│   │   ├── HoldingsData.tsx     # CSV import, column mapping, & data quality inspector
│   │   └── Methodology.tsx      # In-app interactive mathematical documentation
│   ├── tests/
│   │   └── analytics.test.ts    # Vitest quantitative test suite (12/12 passing)
│   ├── App.tsx                  # Root application container & responsive shell
│   ├── index.css                # Custom fintech design system & tokens
│   └── main.tsx                 # React DOM bootstrap
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 📜 License & Compliance
This software is built for analytical, research, and educational purposes. Historical NAV data is provided via AMFI / MFAPI.in public disclosures.
