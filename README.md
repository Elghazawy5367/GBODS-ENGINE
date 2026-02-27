<div align="center">

# ⬠ GBODS ENGINE V5 PRO

### Gold-Based Opportunity Discovery System

**Find unnamed, unserved pain at the mathematical intersection of niche vectors.**

[![License: MIT](https://img.shields.io/badge/License-MIT-gold.svg)](LICENSE)
[![Version](https://img.shields.io/badge/version-5.0.0-blue.svg)](CHANGELOG.md)
[![Zero Dependencies](https://img.shields.io/badge/dependencies-0-green.svg)](#tech-stack)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

[Live Demo](https://gbods.app) · [Documentation](docs/ARCHITECTURE.md) · [Report Bug](.github/ISSUE_TEMPLATE/bug_report.md) · [Request Feature](.github/ISSUE_TEMPLATE/feature_request.md)

---

</div>

## What is GBODS?

GBODS Engine discovers **blue ocean business opportunities** invisible to single-domain
experts by analyzing the mathematical intersection of niche vectors through an 8-stage
analytical framework combining **Blue Ocean Strategy**, **TRIZ innovation theory**, and
**Jobs-to-be-Done** methodology.

```
V1: "ADHD freelance designers"
  ×
V2: "Etsy digital product sellers experiencing fee trauma"
  =
💎 Unnamed pain only visible at the intersection
```

## Key Features

| Feature | Description |
|---------|-------------|
| 🧠 **8-Stage Analysis** | LOCATE → DIAGNOSE → SPECIFY → EXPAND → EXCAVATE → ARCHITECT → TIME → LEVERAGE |
| 🔍 **Smart Lens Scout** | AI pre-analyzes your intersection and suggests optimal analysis lenses |
| 🎯 **Pain Scout** | Discovers candidate unnamed pains before full analysis |
| 📡 **Web Whispers** | Injects real-time trend signals into Stage 7 (Window Urgency) |
| 📊 **Radar Visualization** | Pure SVG radar charts per opportunity — zero dependencies |
| 💰 **Token Cost Estimator** | Real-time cost preview per model before running |
| ⚡ **Streaming Analysis** | Watch the AI think in real-time with stage progression |
| 🛑 **Abort Controller** | Cancel mid-stream if needed |
| 🔄 **Retry with Backoff** | Auto-retry on rate limits with exponential backoff |
| 📦 **Multi-Format Export** | JSON + Markdown with full stage data |
| 📜 **Analysis History** | LocalStorage persistence with 20-item history |
| ⌨️ **Keyboard Shortcuts** | `S` settings · `H` history · `Esc` close |
| ⚠️ **Constraint Validator** | Real-time warnings when profile conflicts detected |
| 🎨 **Professional UI** | Dark mode, CSS custom properties, responsive design |

## Quick Start

### Option A: Direct Use (No Build Required)

```bash
git clone https://github.com/yourusername/gbods-engine-v5-pro.git
cd gbods-engine-v5-pro
# Open index.html in your browser
open index.html
```

### Option B: Local Dev Server

```bash
git clone https://github.com/yourusername/gbods-engine-v5-pro.git
cd gbods-engine-v5-pro
npx serve .
# → http://localhost:3000
```

### Option C: One-Click Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/yourusername/gbods-engine-v5-pro)
[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/gbods-engine-v5-pro&project-name=gbods-engine)

## Setup

1. Get an API key from [OpenRouter](https://openrouter.ai/keys)
2. Open the app → Click ⚙ Settings
3. Paste your API key
4. Select your preferred model
5. Start analyzing intersections

## Supported Models

| Model | Speed | Quality | Cost | Best For |
|-------|-------|---------|------|----------|
| DeepSeek V3 | ⚡⚡⚡ | ★★★★ | $0.0003/1k | Default — best value |
| Claude Sonnet 4.5 | ⚡⚡ | ★★★★★ | $0.003/1k | Deep paradigm analysis |
| GPT-4o | ⚡⚡ | ★★★★ | $0.0025/1k | Balanced output |
| DeepSeek R1 | ⚡ | ★★★★★ | $0.0005/1k | TRIZ reasoning depth |
| Gemini 2.5 Flash | ⚡⚡⚡ | ★★★ | $0.0001/1k | Fast iteration |
| Llama 3.3 70B | ⚡⚡ | ★★★ | FREE | Privacy-first |

## Tech Stack

- **Zero dependencies** — pure HTML/CSS/JS
- **No build step** — open and run
- **No framework** — vanilla JS, ~2000 LOC
- **No backend** — client-side only, API key never leaves browser
- **CSS Custom Properties** — full theming via `:root` tokens
- **Pure SVG** — radar charts with zero library overhead

## The 8 GBODS Stages

```
┌─────────────────────────────────────────────────┐
│ 1. LOCATE    — Find the unnamed intersection pain│
│ 2. DIAGNOSE  — Identify TRIZ contradiction       │
│ 3. SPECIFY   — Map Jobs-to-be-Done               │
│ 4. EXPAND    — Borrow from adjacent industries    │
│ 5. EXCAVATE  — Dissolve blocking assumptions      │
│ 6. ARCHITECT — Reroute broken value flows         │
│ 7. TIME      — Assess window urgency signals      │
│ 8. LEVERAGE  — Craft paradigm-shifting statement  │
└─────────────────────────────────────────────────┘
```

## GBODS Scoring Formula

```
GBODS Score = (Solo Viability × 0.40)
            + (Effort/Income Ratio × 0.30)
            + (Window Urgency × 10 × 0.30)
```

## Project Structure

```
├── index.html          # Entry point — loads all modules
├── css/
│   └── engine.css      # Complete design token system + components
├── js/
│   ├── data.js         # Lenses, models, stages, enrichments config
│   ├── app.js          # State management + initialization + keyboard
│   ├── engine.js       # API calls, streaming, prompt builder, parsing
│   ├── ui.js           # DOM rendering, screen management, components
│   ├── radar.js        # Pure SVG radar chart generator
│   ├── export.js       # JSON + Markdown export functions
│   ├── history.js      # LocalStorage history management
│   └── utils.js        # Escaping, clamping, toast, shared helpers
└── assets/
    └── favicon.svg     # Gem icon
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License

MIT — see [LICENSE](LICENSE) for details.

---

<div align="center">
  <sub>Built with precision by humans augmented by AI.</sub>
</div>
