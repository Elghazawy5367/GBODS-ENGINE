

# GBODS ENGINE V5 PRO — GitHub Repository

## Complete Repository Structure

```
GBODS-ENGINE-V5-PRO/
├── .github/
│   ├── workflows/
│   │   └── deploy.yml
│   └── ISSUE_TEMPLATE/
│       ├── bug_report.md
│       └── feature_request.md
├── docs/
│   ├── ARCHITECTURE.md
│   ├── API_GUIDE.md
│   ├── METHODOLOGY.md
│   └── screenshots/
│       └── .gitkeep
├── src/
│   ├── index.html
│   ├── css/
│   │   └── engine.css
│   ├── js/
│   │   ├── app.js
│   │   ├── data.js
│   │   ├── engine.js
│   │   ├── ui.js
│   │   ├── radar.js
│   │   ├── export.js
│   │   ├── history.js
│   │   └── utils.js
│   └── assets/
│       ├── favicon.svg
│       └── og-image.png
├── .gitignore
├── LICENSE
├── README.md
├── CHANGELOG.md
├── CONTRIBUTING.md
└── package.json
```

---

## File 1: `README.md`

```markdown
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
# Open src/index.html in your browser
open src/index.html
```

### Option B: Local Dev Server

```bash
git clone https://github.com/yourusername/gbods-engine-v5-pro.git
cd gbods-engine-v5-pro
npx serve src
# → http://localhost:3000
```

### Option C: One-Click Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/yourusername/gbods-engine-v5-pro)
[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/gbods-engine-v5-pro&project-name=gbods-engine&root-directory=src)

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
src/
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
```

---

## File 2: `LICENSE`

```
MIT License

Copyright (c) 2025 GBODS Engine Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## File 3: `CHANGELOG.md`

```markdown
# Changelog

All notable changes to GBODS Engine are documented here.

## [5.0.0] — 2025-07-12

### 🚀 Major Release — V5 PRO

#### Added
- **AI-Powered Lens Scout** — pre-analyzes intersection to suggest optimal lenses
- **Pain Scout** — discovers candidate unnamed pains before full analysis
- **Web Whispers** — trend signal injection for Stage 7 Window Urgency
- **Radar Chart Visualization** — pure SVG, zero dependencies
- **Token Cost Estimator** — real-time cost preview per model
- **Abort Controller** — cancel streaming mid-analysis
- **Retry with Exponential Backoff** — auto-retry on 429/connection errors
- **Constraint Validator** — real-time warnings on profile conflicts
- **Keyboard Shortcuts** — S (settings), H (history), Esc (close)
- **Enhanced Markdown Export** — full table formatting with all 8 stages
- **Model cost tracking** — per-1k-token pricing in settings
- **History model tracking** — stores which model was used per analysis
- **20-item history** — increased from 15

#### Changed
- Combined lens scout + pain scout into single API call (50% fewer pre-calls)
- Improved text fallback parser with better regex patterns
- Enhanced system prompt with explicit stage marker format
- Streamlined prompt builder — removed duplicate JSON schemas
- Better score clamping and validation

#### Architecture
- Modularized into 7 focused JS files
- CSS extracted to dedicated file with full token system
- GitHub-ready repository structure with CI/CD
- Comprehensive documentation

### Previous Versions
- V4: Unified prompt builder with 8 variants + 3 chains
- V3: Multi-stage analysis framework
- V2: Basic intersection analysis
- V1: Concept prototype
```

---

## File 4: `CONTRIBUTING.md`

```markdown
# Contributing to GBODS Engine V5 PRO

Thank you for your interest in contributing!

## Development Setup

1. Fork and clone the repository
2. Open `src/index.html` in your browser — no build step needed
3. Edit files in `src/js/` and `src/css/`
4. Refresh browser to see changes

## Code Style

- **No frameworks** — vanilla JS only
- **No build tools** — keep it zero-dependency
- **CSS Custom Properties** — use tokens from `:root`, never hardcode colors
- **Functions** — keep functions under 50 lines where possible
- **Naming** — `camelCase` for JS, `kebab-case` for CSS classes
- **Comments** — use section headers with `═══` separators

## Pull Request Process

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make your changes
3. Test in Chrome, Firefox, and Safari
4. Test mobile responsiveness
5. Ensure no console errors
6. Submit PR with clear description

## Areas for Contribution

- [ ] Additional analysis lenses
- [ ] New export formats (PDF, CSV, Notion)
- [ ] PWA/offline support
- [ ] Accessibility improvements
- [ ] Internationalization
- [ ] Additional AI model support
- [ ] Comparison mode for side-by-side analysis
- [ ] Visual theme customization

## Reporting Issues

Use the GitHub issue templates for:
- **Bug reports** — include browser, OS, steps to reproduce
- **Feature requests** — describe the use case and expected behavior
```

---

## File 5: `.github/workflows/deploy.yml`

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Pages
        uses: actions/configure-pages@v5

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: 'src'

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

---

## File 6: `.github/ISSUE_TEMPLATE/bug_report.md`

```markdown
---
name: Bug Report
about: Report a bug in GBODS Engine V5
title: '[BUG] '
labels: bug
assignees: ''
---

**Describe the bug**
A clear description of the bug.

**To Reproduce**
1. Go to '...'
2. Click on '...'
3. See error

**Expected behavior**
What you expected to happen.

**Environment**
- Browser: [e.g., Chrome 126]
- OS: [e.g., macOS 15]
- Model used: [e.g., DeepSeek V3]

**Screenshots**
If applicable, add screenshots.

**Console errors**
Paste any browser console errors.
```

---

## File 7: `.github/ISSUE_TEMPLATE/feature_request.md`

```markdown
---
name: Feature Request
about: Suggest a feature for GBODS Engine V5
title: '[FEATURE] '
labels: enhancement
assignees: ''
---

**Problem this solves**
Describe the problem or limitation.

**Proposed solution**
Describe what you'd like.

**Alternatives considered**
Other approaches you've thought about.

**Additional context**
Any mockups, examples, or references.
```

---

## File 8: `.gitignore`

```gitignore
# OS
.DS_Store
Thumbs.db
desktop.ini

# Editors
.vscode/
.idea/
*.swp
*.swo
*~

# Node (for local dev server only)
node_modules/
package-lock.json

# Build artifacts
dist/
*.log

# Environment
.env
.env.local
```

---

## File 9: `package.json`

```json
{
  "name": "gbods-engine-v5-pro",
  "version": "5.0.0",
  "description": "Gold-Based Opportunity Discovery System — Find unnamed pain at niche intersections",
  "main": "src/index.html",
  "scripts": {
    "dev": "npx serve src -p 3000",
    "start": "npx serve src"
  },
  "keywords": [
    "blue-ocean",
    "business-strategy",
    "triz",
    "opportunity-discovery",
    "niche-analysis",
    "ai-tools"
  ],
  "author": "GBODS Contributors",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/yourusername/gbods-engine-v5-pro.git"
  },
  "homepage": "https://gbods.app"
}
```

---

## File 10: `docs/ARCHITECTURE.md`

```markdown
# GBODS Engine V5 PRO — Architecture

## 3-Layer System Design

```
┌─────────────────────────────────────────────────────────┐
│  LAYER 1: AI ASSISTANT (Intelligent Augmentation)       │
│  • Smart lens suggestions based on V1×V2 intersection   │
│  • Pain scout — candidate unnamed pains pre-analysis    │
│  • Web whispers — trend signal injection                │
│  • Constraint validation — real-time violation warnings  │
│  • Token cost estimation — per-model pricing             │
└─────────────────────────────────────────────────────────┘
                           │
┌─────────────────────────────────────────────────────────┐
│  LAYER 2: PROMPT ENGINE (8-Stage GBODS Methodology)     │
│  • System prompt with scoring formula                    │
│  • Dynamic prompt builder from user inputs               │
│  • Enrichment injection (competitor, pricing, 72h)       │
│  • Streaming SSE parser with stage detection             │
│  • Dual-mode result parser (JSON + text fallback)        │
└─────────────────────────────────────────────────────────┘
                           │
┌─────────────────────────────────────────────────────────┐
│  LAYER 3: OUTPUT STUDIO (Professional Presentation)     │
│  • Score ring animations (SVG stroke-dashoffset)         │
│  • Radar chart visualization (pure SVG)                  │
│  • Expandable opportunity cards with all 8 stages        │
│  • Multi-format export (JSON, Markdown)                  │
│  • Analysis history with localStorage                    │
└─────────────────────────────────────────────────────────┘
```

## Data Flow

```
User Input → Constraint Validation → Lens Scout (AI) → Pain Scout (AI)
     ↓
Prompt Builder → System Prompt + User Prompt + Enrichments
     ↓
OpenRouter API (Streaming SSE) → Stage Detection → Stream Rendering
     ↓
Result Parser (JSON primary, text fallback) → Score Clamping
     ↓
Results Screen (Cards + Radar + Rings + 72h Plan)
     ↓
History Save → Export Options
```

## Module Responsibilities

| Module | Purpose | LOC |
|--------|---------|-----|
| `data.js` | Static configuration — lenses, models, stages, enrichments | ~60 |
| `app.js` | State management, init, keyboard, navigation, settings | ~200 |
| `engine.js` | API calls, streaming, prompt building, result parsing | ~500 |
| `ui.js` | DOM rendering, screen management, opportunity cards | ~400 |
| `radar.js` | Pure SVG radar chart generation | ~50 |
| `export.js` | JSON and Markdown export functions | ~80 |
| `history.js` | LocalStorage history CRUD | ~80 |
| `utils.js` | Shared helpers — escape, clamp, toast | ~30 |

## Key Design Decisions

1. **Zero dependencies** — no React, no Chart.js, no build tools
2. **Single HTML entry** — all modules loaded via script tags
3. **CSS Custom Properties** — full theming without preprocessors
4. **Client-side only** — API key never touches a server
5. **Combined scout calls** — lens + pain in one API call for efficiency
6. **AbortController** — user can cancel mid-stream
7. **Exponential backoff** — auto-retry on rate limits (up to 3 attempts)
8. **Dual parser** — JSON extraction primary, regex text fallback
```

---

## File 11: `docs/API_GUIDE.md`

```markdown
# API Integration Guide

## OpenRouter Setup

GBODS Engine uses [OpenRouter](https://openrouter.ai) as the AI gateway.

### Getting Your API Key

1. Visit [openrouter.ai/keys](https://openrouter.ai/keys)
2. Create an account or sign in
3. Generate a new API key
4. Copy the key (starts with `sk-or-v1-...`)
5. Paste into GBODS Settings panel

### Security

- Your API key is stored **only** in `localStorage`
- It is sent **only** to `openrouter.ai/api/v1/chat/completions`
- It **never** touches any GBODS server
- Clear it anytime from Settings

## API Calls Made

### 1. Lens + Pain Scout (Pre-Analysis)
- **When:** User clicks "Scout Intersection →"
- **Tokens:** ~400 max
- **Purpose:** Suggest 3 lenses + 3 candidate pains
- **Model:** Same as selected analysis model

### 2. Main Analysis (Streaming)
- **When:** User clicks "Run GBODS Analysis"
- **Tokens:** ~6000 max output
- **Purpose:** Full 8-stage analysis for N opportunities
- **Streaming:** Server-Sent Events (SSE)

## Rate Limit Handling

```javascript
// Automatic retry with exponential backoff
Attempt 1: Immediate
Attempt 2: Wait 2 seconds
Attempt 3: Wait 4 seconds
// After 3 failures: show error to user
```

## Cost Estimation

The token estimator calculates:
```
Input tokens ≈ 1200 + (depth × 800) + (enrichments × 300) + (whispers × 400)
Output tokens ≈ depth × 1200
Total cost = total_tokens × model_cost_per_1k / 1000
```
```

---

## File 12: `docs/METHODOLOGY.md`

```markdown
# GBODS Methodology — The 8-Stage Framework

## Core Principle

> Pain that exists at the **intersection** of two or more niches is invisible to
> any expert working inside a single domain. This is where blue oceans form.

## Stage Breakdown

### Stage 1: LOCATE — Named Intersection Pain
Coin a precise 2-4 word label for pain that only exists at V1 × V2.
**Example:** "Fee-Trauma Paralysis" (ADHD × Etsy sellers)

### Stage 2: DIAGNOSE — TRIZ Contradiction
Identify the structural contradiction: improving X necessarily worsens Y.
Apply one of TRIZ's 40 inventive principles to resolve it.

### Stage 3: SPECIFY — Jobs-to-be-Done
Map the real job: "When I [situation], help me [motivation] so I can [outcome]"
Identify why all current solutions score minimum satisfaction.

### Stage 4: EXPAND — Six Paths Borrow
Find an adjacent industry that partially solves this problem.
Import a specific mechanic from that industry.

### Stage 5: EXCAVATE — Blocking Assumption
Identify the single false belief preventing solutions from existing.
Describe what becomes possible when you assume the opposite.

### Stage 6: ARCHITECT — Value Flow Reroute
Map the current broken value flow in one sentence.
Design the fixed flow with the proposed product.

### Stage 7: TIME — Window Urgency
Surface 3 converging signals creating urgency RIGHT NOW.
Rate window 1-10 with specific justification.

### Stage 8: LEVERAGE — Paradigm Shift
Craft a frame-shifting statement that makes competition irrelevant.
This is the "aha" that redefines the category.

## Scoring Formula

```
GBODS Score = (Solo Viability × 0.40)
            + (Effort/Income Ratio × 0.30)
            + (Window Urgency × 10 × 0.30)

Solo Viability: 0-100 — Can one person execute this?
Effort/Income:  0-100 — Revenue per hour of effort
Window Urgency: 1-10  — How time-sensitive is this opportunity?
```

## Constraint Profile

Every opportunity must pass the user's hard constraints:
- Role limitations (non-technical, solo, etc.)
- Budget ceiling
- Time-to-revenue requirement
- Skill restrictions
- Format restrictions (no SaaS, no services, etc.)

Opportunities violating ANY constraint are rejected.
```

---

## File 13: `src/assets/favicon.svg`

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <polygon points="50,5 95,38 82,95 18,95 5,38" fill="url(#g)" stroke="#c9952a" stroke-width="2"/>
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#e8b84b"/>
      <stop offset="100%" style="stop-color:#c9952a"/>
    </linearGradient>
  </defs>
</svg>
```

---

## File 14: `src/css/engine.css`

```css
/* ═══════════════════════════════════════════════════════
   GBODS ENGINE V5 PRO — Design Token System
   ═══════════════════════════════════════════════════════ */

:root {
  --bg: #080b0f;
  --bg1: #0c1018;
  --bg2: #121820;
  --bg3: #181f29;
  --bg4: #1e2733;
  --line: #1e2a38;
  --line2: #253244;
  --txt: #d4dce8;
  --txt2: #7a8fa8;
  --txt3: #3d5268;
  --gold: #e8b84b;
  --gold2: #c9952a;
  --gold-d: rgba(232,184,75,0.10);
  --gold-dd: rgba(232,184,75,0.04);
  --cyan: #38bdf8;
  --cyan-d: rgba(56,189,248,0.10);
  --red: #f87171;
  --red-d: rgba(248,113,113,0.10);
  --green: #4ade80;
  --green-d: rgba(74,222,128,0.10);
  --purple: #a78bfa;
  --purple-d: rgba(167,139,250,0.10);
  --orange: #fb923c;
  --orange-d: rgba(251,146,60,0.10);
  --r: 10px;
  --r2: 6px;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { font-size: 15px; scroll-behavior: smooth; }

body {
  font-family: 'Outfit', sans-serif;
  background: var(--bg);
  color: var(--txt);
  min-height: 100vh;
  overflow-x: hidden;
}

body::before {
  content: '';
  position: fixed; inset: 0;
  background-image:
    linear-gradient(rgba(30,42,56,0.3) 1px, transparent 1px),
    linear-gradient(90deg, rgba(30,42,56,0.3) 1px, transparent 1px);
  background-size: 40px 40px;
  pointer-events: none; z-index: 0;
}

/* ═══════════════════════════════ LAYOUT */
.app { position: relative; z-index: 1; min-height: 100vh; }
.screen { display: none; min-height: 100vh; }
.screen.active { display: flex; flex-direction: column; }

/* ═══════════════════════════════ TOPBAR */
.topbar {
  display: flex; align-items: center; gap: 16px;
  padding: 0 24px; height: 54px;
  border-bottom: 1px solid var(--line);
  background: rgba(8,11,15,0.9);
  backdrop-filter: blur(12px);
  position: sticky; top: 0; z-index: 50;
  flex-shrink: 0;
}
.topbar-logo { display: flex; align-items: center; gap: 10px; }
.logo-gem {
  width: 30px; height: 30px;
  background: linear-gradient(135deg, var(--gold), var(--gold2));
  clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
  flex-shrink: 0;
}
.logo-text {
  font-size: 13px; font-weight: 700; letter-spacing: 0.08em;
  color: var(--txt); font-family: 'JetBrains Mono', monospace;
}
.logo-version {
  font-size: 9px; font-weight: 600; letter-spacing: 0.1em;
  color: var(--gold); background: var(--gold-d);
  border: 1px solid rgba(232,184,75,0.25);
  padding: 1px 6px; border-radius: 3px;
  font-family: 'JetBrains Mono', monospace;
}
.topbar-spacer { flex: 1; }
.topbar-status {
  font-size: 11px; color: var(--txt3);
  font-family: 'JetBrains Mono', monospace;
  display: flex; align-items: center; gap: 6px;
}
.status-dot {
  width: 6px; height: 6px; border-radius: 50%;
  background: var(--txt3);
}
.status-dot.live { background: var(--green); box-shadow: 0 0 6px var(--green); animation: pulse 2s infinite; }
.status-dot.thinking { background: var(--gold); box-shadow: 0 0 6px var(--gold); animation: pulse 1s infinite; }
@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }

.btn-topbar {
  width: 32px; height: 32px;
  background: var(--bg2); border: 1px solid var(--line2);
  border-radius: var(--r2); color: var(--txt2); font-size: 15px;
  cursor: pointer; display: flex; align-items: center; justify-content: center;
  transition: all 0.15s;
}
.btn-topbar:hover { border-color: var(--gold); color: var(--gold); }

/* ═══════════════════════════════ STEPS NAV */
.steps-nav {
  display: flex; align-items: center; gap: 0;
  padding: 16px 24px;
  border-bottom: 1px solid var(--line);
  background: var(--bg1);
}
.step-item {
  display: flex; align-items: center; gap: 8px;
  font-size: 12px; font-weight: 500; color: var(--txt3);
  padding: 0 16px; position: relative; cursor: pointer;
}
.step-item:first-child { padding-left: 0; }
.step-num {
  width: 22px; height: 22px; border-radius: 50%;
  border: 1px solid var(--line2);
  display: flex; align-items: center; justify-content: center;
  font-size: 10px; font-weight: 700;
  font-family: 'JetBrains Mono', monospace;
  flex-shrink: 0; transition: all 0.2s;
}
.step-item.done .step-num { background: var(--gold-d); border-color: var(--gold); color: var(--gold); }
.step-item.active .step-num { background: var(--gold); border-color: var(--gold); color: #000; }
.step-item.active { color: var(--txt); }
.step-item.done { color: var(--txt2); }
.step-sep { width: 32px; height: 1px; background: var(--line2); flex-shrink: 0; }

/* ═══════════════════════════════ PAGE */
.page { flex: 1; padding: 28px 24px; max-width: 820px; width: 100%; margin: 0 auto; }

/* ═══════════════════════════════ CARDS */
.card {
  background: var(--bg1); border: 1px solid var(--line);
  border-radius: var(--r); padding: 20px 22px; margin-bottom: 16px;
}
.card-title {
  font-size: 10px; font-weight: 700; letter-spacing: 0.12em;
  text-transform: uppercase; color: var(--gold);
  font-family: 'JetBrains Mono', monospace;
  display: flex; align-items: center; gap: 8px;
  margin-bottom: 16px;
}
.card-title-icon { font-size: 14px; }
.card-title-sub {
  font-weight: 400; color: var(--txt3);
  font-family: 'Outfit', sans-serif;
  text-transform: none; letter-spacing: 0; font-size: 10px;
}

/* ═══════════════════════════════ FIELDS */
.field { margin-bottom: 14px; }
.field:last-child { margin-bottom: 0; }
.field-label {
  display: block; font-size: 11px; font-weight: 600;
  letter-spacing: 0.06em; text-transform: uppercase;
  color: var(--txt2); margin-bottom: 6px;
}
.field-hint { font-size: 11px; color: var(--txt3); margin-top: 4px; }
.field-req { color: var(--red); }

input[type=text], input[type=number], input[type=password], select, textarea {
  width: 100%; background: var(--bg2);
  border: 1px solid var(--line2); border-radius: var(--r2);
  padding: 9px 13px; color: var(--txt);
  font-family: 'Outfit', sans-serif;
  font-size: 14px; font-weight: 400;
  transition: border-color 0.15s, box-shadow 0.15s;
  outline: none;
}
input:focus, select:focus, textarea:focus {
  border-color: var(--gold);
  box-shadow: 0 0 0 3px rgba(232,184,75,0.08);
}
textarea { resize: vertical; min-height: 68px; line-height: 1.6; }
select {
  cursor: pointer; appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%237a8fa8'/%3E%3C/svg%3E");
  background-repeat: no-repeat; background-position: right 12px center;
  padding-right: 32px;
}
.grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
.grid3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; }

/* ═══════════════════════════════ CONSTRAINT WARNINGS */
.constraint-warn {
  display: flex; align-items: center; gap: 8px;
  padding: 8px 12px; margin-top: 8px;
  background: var(--red-d); border: 1px solid rgba(248,113,113,0.25);
  border-radius: var(--r2);
  font-size: 11px; color: var(--red);
  animation: fadeIn 0.3s ease;
}
@keyframes fadeIn { from{opacity:0;transform:translateY(-4px)} to{opacity:1;transform:translateY(0)} }

/* ═══════════════════════════════ MATH DISPLAY */
.math-display {
  background: var(--gold-dd);
  border: 1px solid rgba(232,184,75,0.2);
  border-radius: var(--r2);
  padding: 12px 16px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px; color: var(--gold);
  text-align: center; margin-bottom: 16px;
  min-height: 42px; transition: all 0.3s;
  letter-spacing: 0.02em;
}
.math-display.active {
  border-color: var(--gold);
  box-shadow: 0 0 20px rgba(232,184,75,0.06);
}

/* ═══════════════════════════════ LENSES */
.lenses-wrap { display: grid; grid-template-columns: repeat(auto-fill, minmax(170px, 1fr)); gap: 8px; }
.lens-chip {
  display: flex; align-items: flex-start; gap: 9px;
  padding: 9px 11px;
  background: var(--bg2); border: 1px solid var(--line2);
  border-radius: var(--r2); cursor: pointer;
  transition: all 0.15s; position: relative;
}
.lens-chip:hover { border-color: var(--line2); background: var(--bg3); }
.lens-chip.selected { background: var(--gold-d); border-color: var(--gold); }
.lens-chip.ai-suggested { border-color: rgba(56,189,248,0.4); }
.lens-chip.ai-suggested::after {
  content: '✦'; position: absolute; top: 4px; right: 6px;
  font-size: 8px; color: var(--cyan); opacity: 0.8;
}
.lens-chip.ai-suggested.selected::after { color: var(--gold); }
.lens-cb { width: 13px; height: 13px; accent-color: var(--gold); margin-top: 2px; flex-shrink: 0; }
.lens-name { font-size: 12px; font-weight: 600; display: block; }
.lens-sub { font-size: 10px; color: var(--txt3); display: block; margin-top: 1px; }
.lens-reason { font-size: 10px; color: var(--cyan); display: block; margin-top: 3px; font-style: italic; }

.lenses-ai-banner {
  display: flex; align-items: center; gap: 8px;
  padding: 8px 12px; margin-bottom: 12px;
  background: var(--cyan-d); border: 1px solid rgba(56,189,248,0.25);
  border-radius: var(--r2); font-size: 11px; color: var(--cyan);
}

/* ═══════════════════════════════ WEB WHISPERS */
.whispers-card {
  background: var(--bg1); border: 1px solid var(--line);
  border-radius: var(--r); overflow: hidden; margin-bottom: 16px;
}
.whispers-header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 14px 20px; border-bottom: 1px solid var(--line); cursor: pointer;
}
.whispers-title {
  font-size: 10px; font-weight: 700; letter-spacing: 0.12em;
  text-transform: uppercase; color: var(--cyan);
  font-family: 'JetBrains Mono', monospace;
  display: flex; align-items: center; gap: 8px;
}
.whisper-toggle {
  position: relative; width: 38px; height: 20px;
  background: var(--bg3); border-radius: 10px; transition: background 0.2s;
}
.whisper-toggle::after {
  content: ''; position: absolute; top: 3px; left: 3px;
  width: 14px; height: 14px; border-radius: 50%;
  background: var(--txt3); transition: all 0.2s;
}
.whisper-toggle.on { background: rgba(56,189,248,0.3); }
.whisper-toggle.on::after { left: 21px; background: var(--cyan); }
.whispers-body { padding: 14px 20px; display: none; }
.whispers-body.open { display: block; }
.whisper-desc { font-size: 12px; color: var(--txt2); line-height: 1.7; margin-bottom: 10px; }

/* ═══════════════════════════════ ENRICHMENTS */
.enrich-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
.enrich-chip {
  display: flex; align-items: center; gap: 9px;
  padding: 9px 12px;
  background: var(--bg2); border: 1px solid var(--line2);
  border-radius: var(--r2); cursor: pointer; transition: all 0.15s;
}
.enrich-chip:hover { background: var(--bg3); }
.enrich-chip.on { background: var(--purple-d); border-color: rgba(167,139,250,0.4); }
.enrich-cb { width: 13px; height: 13px; accent-color: var(--purple); flex-shrink: 0; }
.enrich-label { font-size: 12px; font-weight: 600; }
.enrich-desc { font-size: 10px; color: var(--txt3); margin-top: 1px; }

/* ═══════════════════════════════ BUTTONS */
.btn {
  display: inline-flex; align-items: center; gap: 7px;
  padding: 10px 20px; border: none; border-radius: var(--r2);
  font-family: 'Outfit', sans-serif; font-size: 13px; font-weight: 600;
  cursor: pointer; transition: all 0.15s; text-decoration: none;
}
.btn:disabled { opacity: 0.4; cursor: not-allowed; }
.btn-gold { background: linear-gradient(135deg, var(--gold), var(--gold2)); color: #000; }
.btn-gold:hover:not(:disabled) { opacity: 0.9; transform: translateY(-1px); box-shadow: 0 4px 16px rgba(232,184,75,0.2); }
.btn-outline { background: transparent; border: 1px solid var(--line2); color: var(--txt2); }
.btn-outline:hover { border-color: var(--gold); color: var(--gold); }
.btn-ghost { background: var(--bg2); border: 1px solid var(--line2); color: var(--txt2); }
.btn-ghost:hover { border-color: var(--line2); color: var(--txt); background: var(--bg3); }
.btn-cyan { background: var(--cyan-d); border: 1px solid rgba(56,189,248,0.3); color: var(--cyan); }
.btn-cyan:hover { background: rgba(56,189,248,0.15); }
.btn-red { background: var(--red-d); border: 1px solid rgba(248,113,113,0.3); color: var(--red); }
.btn-red:hover { background: rgba(248,113,113,0.15); }
.btn-sm { padding: 6px 12px; font-size: 11px; }
.btn-row { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 16px; }
.btn-row.right { justify-content: flex-end; }
.btn-row.center { justify-content: center; }
.btn-icon { font-size: 14px; }

/* ═══════════════════════════════ PAIN SCOUT */
.pain-scout-pills { display: flex; flex-wrap: wrap; gap: 8px; }
.pain-pill {
  padding: 7px 12px;
  background: var(--bg2); border: 1px solid var(--line2);
  border-radius: 20px; font-size: 12px; cursor: pointer;
  transition: all 0.15s; font-weight: 500;
}
.pain-pill:hover { border-color: var(--cyan); color: var(--cyan); }
.pain-pill.selected { background: var(--cyan-d); border-color: var(--cyan); color: var(--cyan); }

/* ═══════════════════════════════ TOKEN ESTIMATOR */
.token-est {
  display: flex; align-items: center; gap: 6px;
  font-size: 10px; color: var(--txt3);
  font-family: 'JetBrains Mono', monospace;
  margin-top: 8px; padding: 6px 10px;
  background: var(--bg2); border-radius: var(--r2);
}
.token-est .cost { color: var(--gold); font-weight: 600; }

/* ═══════════════════════════════ ANALYSIS SCREEN */
.analysis-wrap {
  display: flex; gap: 20px; flex: 1; padding: 24px;
  max-width: 1100px; margin: 0 auto; width: 100%;
}
.analysis-sidebar {
  width: 220px; flex-shrink: 0;
  display: flex; flex-direction: column; gap: 12px;
}
.analysis-main { flex: 1; min-width: 0; }

.stage-indicator {
  background: var(--bg1); border: 1px solid var(--line);
  border-radius: var(--r); padding: 16px; overflow: hidden;
}
.stage-indicator-title {
  font-size: 9px; font-weight: 700; letter-spacing: 0.12em;
  text-transform: uppercase; color: var(--txt3);
  font-family: 'JetBrains Mono', monospace; margin-bottom: 12px;
}
.stage-row {
  display: flex; align-items: center; gap: 10px;
  padding: 5px 0; border-bottom: 1px solid rgba(30,42,56,0.5);
}
.stage-row:last-child { border-bottom: none; }
.stage-dot {
  width: 8px; height: 8px; border-radius: 50%;
  background: var(--bg3); border: 1px solid var(--line2);
  flex-shrink: 0; transition: all 0.3s;
}
.stage-dot.running { background: var(--gold); border-color: var(--gold); box-shadow: 0 0 8px var(--gold); animation: pulse 0.8s infinite; }
.stage-dot.done { background: var(--green); border-color: var(--green); }
.stage-row-label { font-size: 11px; font-weight: 500; color: var(--txt3); transition: color 0.3s; }
.stage-row.running .stage-row-label { color: var(--txt); }
.stage-row.done .stage-row-label { color: var(--txt2); }
.stage-row-num { font-size: 9px; font-family: 'JetBrains Mono', monospace; color: var(--txt3); margin-left: auto; }

.analysis-profile-card {
  background: var(--bg1); border: 1px solid var(--line);
  border-radius: var(--r); padding: 14px;
}
.apc-title {
  font-size: 9px; font-weight: 700; letter-spacing: 0.12em;
  text-transform: uppercase; color: var(--txt3);
  font-family: 'JetBrains Mono', monospace; margin-bottom: 8px;
}
.apc-row { font-size: 11px; color: var(--txt2); line-height: 1.8; }
.apc-row span { color: var(--txt); font-weight: 500; }

.stream-box {
  background: var(--bg1); border: 1px solid var(--line);
  border-radius: var(--r); padding: 20px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px; line-height: 1.9; color: var(--txt2);
  min-height: 400px; max-height: 70vh;
  overflow-y: auto; white-space: pre-wrap; position: relative;
}
.stream-box .cursor {
  display: inline-block; width: 7px; height: 13px;
  background: var(--gold); vertical-align: middle;
  animation: blink 0.8s infinite;
}
@keyframes blink { 0%,49%{opacity:1} 50%,100%{opacity:0} }
.stream-box .stage-marker { color: var(--gold); font-weight: 600; }
.stream-box .pain-marker { color: var(--cyan); }
.stream-box .paradigm-marker { color: var(--purple); font-style: italic; }

.analysis-thinking {
  display: flex; flex-direction: column; align-items: center;
  justify-content: center; padding: 60px 24px; gap: 16px;
}
.thinking-spinner {
  width: 44px; height: 44px;
  border: 2px solid var(--line2); border-top-color: var(--gold);
  border-radius: 50%; animation: spin 0.8s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }
.thinking-label { font-size: 13px; color: var(--txt2); font-family: 'JetBrains Mono', monospace; }
.thinking-sub { font-size: 11px; color: var(--txt3); text-align: center; }

/* ═══════════════════════════════ RESULTS */
.results-header {
  padding: 20px 24px 0; max-width: 1100px; margin: 0 auto; width: 100%;
}
.results-meta {
  display: flex; align-items: center; gap: 12px; margin-bottom: 20px; flex-wrap: wrap;
}
.results-intersection {
  font-size: 13px; color: var(--txt); font-family: 'JetBrains Mono', monospace;
}
.results-badge {
  font-size: 10px; font-weight: 600; padding: 3px 8px;
  border-radius: 20px; font-family: 'JetBrains Mono', monospace;
}
.badge-gold { background: var(--gold-d); border: 1px solid rgba(232,184,75,0.3); color: var(--gold); }
.badge-cyan { background: var(--cyan-d); border: 1px solid rgba(56,189,248,0.3); color: var(--cyan); }
.badge-green { background: var(--green-d); border: 1px solid rgba(74,222,128,0.3); color: var(--green); }

.results-body { padding: 0 24px 24px; max-width: 1100px; margin: 0 auto; width: 100%; }

.top-rec {
  background: linear-gradient(135deg, rgba(232,184,75,0.08), rgba(232,184,75,0.03));
  border: 1px solid rgba(232,184,75,0.3);
  border-radius: var(--r); padding: 18px 20px; margin-bottom: 20px;
}
.top-rec-label {
  font-size: 9px; font-weight: 700; letter-spacing: 0.12em;
  text-transform: uppercase; color: var(--gold);
  font-family: 'JetBrains Mono', monospace; margin-bottom: 8px;
}
.top-rec-title { font-size: 17px; font-weight: 700; margin-bottom: 6px; }
.top-rec-reason { font-size: 13px; color: var(--txt2); line-height: 1.65; }

.insight-card {
  background: linear-gradient(135deg, rgba(232,184,75,0.06), rgba(232,184,75,0.02));
  border: 1px solid rgba(232,184,75,0.2);
  border-radius: var(--r); padding: 20px; margin-bottom: 20px;
}
.insight-label {
  font-size: 9px; font-weight: 700; letter-spacing: 0.12em;
  text-transform: uppercase; color: var(--gold);
  font-family: 'JetBrains Mono', monospace; margin-bottom: 10px;
}
.insight-text { font-size: 14px; color: var(--txt2); line-height: 1.75; }

/* ═══════════════════════════════ OPP CARDS */
.opp-grid { display: grid; gap: 14px; }
.opp-card {
  background: var(--bg1); border: 1px solid var(--line);
  border-radius: var(--r); overflow: hidden; transition: border-color 0.15s;
}
.opp-card:hover { border-color: var(--line2); }
.opp-card.rank-1 { border-color: rgba(232,184,75,0.25); }

.opp-header {
  display: flex; align-items: stretch;
  cursor: pointer; padding: 16px 18px; gap: 16px;
}
.opp-rank {
  font-family: 'JetBrains Mono', monospace;
  font-size: 28px; font-weight: 700;
  color: var(--line2); flex-shrink: 0;
  width: 28px; display: flex; align-items: center; line-height: 1;
}
.opp-rank.r1 { color: var(--gold); }
.opp-rank.r2 { color: var(--txt3); }
.opp-info { flex: 1; }
.opp-title { font-size: 15px; font-weight: 700; margin-bottom: 4px; }
.opp-tagline { font-size: 12px; color: var(--txt2); line-height: 1.5; margin-bottom: 8px; }

.opp-chips { display: flex; gap: 6px; flex-wrap: wrap; }
.chip {
  font-size: 10px; font-weight: 600; padding: 2px 7px; border-radius: 3px;
  font-family: 'JetBrains Mono', monospace; letter-spacing: 0.04em;
}
.chip-pain { background: var(--red-d); color: var(--red); border: 1px solid rgba(248,113,113,0.25); }
.chip-win { background: var(--green-d); color: var(--green); border: 1px solid rgba(74,222,128,0.25); }
.chip-format { background: var(--bg2); color: var(--txt2); border: 1px solid var(--line2); }
.chip-price { background: var(--gold-d); color: var(--gold); border: 1px solid rgba(232,184,75,0.25); }

.opp-scores {
  display: flex; flex-direction: column; gap: 8px;
  flex-shrink: 0; align-items: flex-end;
}
.score-ring-wrap { display: flex; flex-direction: column; align-items: center; gap: 2px; }
.score-ring { position: relative; width: 52px; height: 52px; }
.score-ring svg { transform: rotate(-90deg); }
.score-ring-track { fill: none; stroke: var(--bg3); stroke-width: 3.5; }
.score-ring-fill { fill: none; stroke-width: 3.5; stroke-linecap: round; transition: stroke-dashoffset 0.8s ease; }
.score-val {
  position: absolute; inset: 0;
  display: flex; align-items: center; justify-content: center;
  font-size: 13px; font-weight: 700; font-family: 'JetBrains Mono', monospace;
}
.score-label {
  font-size: 9px; color: var(--txt3); letter-spacing: 0.04em;
  font-family: 'JetBrains Mono', monospace;
}
.opp-expand-icon { font-size: 12px; color: var(--txt3); margin-left: 4px; transition: transform 0.2s; }

.opp-body { display: none; border-top: 1px solid var(--line); padding: 18px; }
.opp-body.open { display: block; }

/* Radar */
.radar-wrap { display: flex; justify-content: center; margin-bottom: 16px; }
.radar-wrap svg text { font-family: 'JetBrains Mono', monospace; font-size: 9px; fill: var(--txt3); }
.radar-wrap svg .radar-grid { fill: none; stroke: var(--line); stroke-width: 0.5; }
.radar-wrap svg .radar-fill { fill: rgba(232,184,75,0.12); stroke: var(--gold); stroke-width: 1.5; }
.radar-wrap svg .radar-dot { fill: var(--gold); }

.opp-meta-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 10px; margin-bottom: 16px; }
.opp-meta-item { background: var(--bg2); border-radius: var(--r2); padding: 10px; text-align: center; }
.opp-meta-val { font-size: 17px; font-weight: 700; font-family: 'JetBrains Mono', monospace; color: var(--txt); }
.opp-meta-key { font-size: 9px; color: var(--txt3); text-transform: uppercase; letter-spacing: 0.06em; margin-top: 2px; }

/* Stage blocks */
.stage-block { margin-bottom: 16px; }
.stage-block:last-child { margin-bottom: 0; }
.stage-block-title {
  font-size: 9px; font-weight: 700; letter-spacing: 0.1em;
  text-transform: uppercase; color: var(--txt3);
  font-family: 'JetBrains Mono', monospace;
  margin-bottom: 6px; padding-bottom: 4px;
  border-bottom: 1px solid var(--line);
}
.stage-block-title.gold { color: var(--gold); }
.stage-block-title.cyan { color: var(--cyan); }
.stage-block-title.purple { color: var(--purple); }
.stage-block-title.green { color: var(--green); }
.stage-block-content { font-size: 13px; color: var(--txt2); line-height: 1.7; }
.stage-block-content strong { color: var(--txt); font-weight: 600; }

.paradigm-box {
  background: linear-gradient(135deg, rgba(167,139,250,0.07), rgba(167,139,250,0.02));
  border: 1px solid rgba(167,139,250,0.25);
  border-radius: var(--r2); padding: 12px 14px;
  font-size: 13px; font-style: italic; color: var(--purple);
  line-height: 1.65; margin-top: 6px;
}
.flow-box { display: flex; flex-direction: column; gap: 6px; margin-top: 6px; }
.flow-row { display: flex; align-items: center; gap: 8px; font-size: 12px; font-family: 'JetBrains Mono', monospace; }
.flow-label { font-size: 9px; color: var(--txt3); width: 52px; flex-shrink: 0; text-transform: uppercase; letter-spacing: 0.06em; }
.flow-content { color: var(--txt2); padding: 5px 10px; background: var(--bg2); border-radius: var(--r2); flex: 1; font-size: 11.5px; }
.flow-content.broken { border-left: 2px solid var(--red); }
.flow-content.fixed { border-left: 2px solid var(--green); }

.signal-chips { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 6px; }
.signal-chip {
  display: flex; align-items: center; gap: 5px;
  font-size: 11px; padding: 4px 9px;
  background: var(--cyan-d); border: 1px solid rgba(56,189,248,0.2);
  border-radius: 20px; color: var(--cyan);
}
.signal-chip::before { content: '↑'; font-size: 10px; }
.dist-list { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 6px; }
.dist-chip { font-size: 11px; padding: 3px 8px; background: var(--bg2); border: 1px solid var(--line2); border-radius: 3px; color: var(--txt2); }

/* ═══════════════════════════════ 72H PLAN */
.hours-plan { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; margin-top: 10px; }
.hours-day { background: var(--bg2); border-radius: var(--r2); padding: 12px; }
.hours-day-label { font-size: 10px; font-weight: 700; color: var(--gold); font-family: 'JetBrains Mono', monospace; margin-bottom: 6px; letter-spacing: 0.06em; }
.hours-day-text { font-size: 12px; color: var(--txt2); line-height: 1.65; }

/* ═══════════════════════════════ HISTORY */
.history-btn {
  position: fixed; bottom: 20px; right: 20px;
  width: 44px; height: 44px;
  background: var(--bg2); border: 1px solid var(--line2);
  border-radius: 50%; color: var(--txt2);
  font-size: 18px; cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 4px 20px rgba(0,0,0,0.4);
  transition: all 0.15s; z-index: 40;
}
.history-btn:hover { border-color: var(--gold); color: var(--gold); }

.history-drawer {
  position: fixed; right: -360px; top: 0; bottom: 0;
  width: 340px; background: var(--bg1);
  border-left: 1px solid var(--line);
  transition: right 0.3s ease;
  z-index: 100; overflow-y: auto;
  display: flex; flex-direction: column;
}
.history-drawer.open { right: 0; }
.history-drawer-header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 16px 18px; border-bottom: 1px solid var(--line);
  position: sticky; top: 0; background: var(--bg1);
}
.history-drawer-title { font-size: 12px; font-weight: 700; color: var(--txt); font-family: 'JetBrains Mono', monospace; letter-spacing: 0.06em; }
.history-close { background: none; border: none; color: var(--txt2); font-size: 18px; cursor: pointer; }
.history-list { flex: 1; padding: 12px; display: flex; flex-direction: column; gap: 8px; }
.history-item {
  background: var(--bg2); border: 1px solid var(--line);
  border-radius: var(--r2); padding: 12px; cursor: pointer; transition: border-color 0.15s;
}
.history-item:hover { border-color: var(--line2); }
.history-item-title { font-size: 12px; font-weight: 600; margin-bottom: 4px; }
.history-item-meta { font-size: 10px; color: var(--txt3); font-family: 'JetBrains Mono', monospace; }
.history-empty { padding: 32px 18px; text-align: center; color: var(--txt3); font-size: 13px; }

/* ═══════════════════════════════ SETTINGS */
.settings-overlay {
  position: fixed; inset: 0;
  background: rgba(8,11,15,0.85);
  backdrop-filter: blur(8px);
  z-index: 200; display: none;
  align-items: center; justify-content: center;
}
.settings-overlay.open { display: flex; }
.settings-panel {
  background: var(--bg1); border: 1px solid var(--line2);
  border-radius: var(--r); width: 520px; max-width: 95vw;
  max-height: 90vh; overflow-y: auto; padding: 24px;
}
.settings-title { font-size: 14px; font-weight: 700; margin-bottom: 20px; display: flex; align-items: center; justify-content: space-between; }
.settings-close { background: none; border: none; color: var(--txt2); font-size: 18px; cursor: pointer; }

.model-grid { display: grid; gap: 8px; margin-top: 8px; }
.model-option {
  display: flex; align-items: center; gap: 10px;
  padding: 10px 12px;
  background: var(--bg2); border: 1px solid var(--line2);
  border-radius: var(--r2); cursor: pointer; transition: all 0.15s;
}
.model-option:hover { border-color: var(--line2); background: var(--bg3); }
.model-option.selected { border-color: var(--gold); background: var(--gold-d); }
.model-radio { width: 13px; height: 13px; accent-color: var(--gold); }
.model-name { font-size: 13px; font-weight: 600; }
.model-tag { font-size: 10px; color: var(--txt3); font-family: 'JetBrains Mono', monospace; }
.model-badge { font-size: 9px; padding: 1px 6px; border-radius: 10px; margin-left: auto; }
.model-cost { font-size: 9px; color: var(--txt3); font-family: 'JetBrains Mono', monospace; margin-top: 2px; }

/* ═══════════════════════════════ KEYBOARD + TOAST */
.kbd-hint {
  position: fixed; bottom: 20px; left: 20px;
  font-size: 10px; color: var(--txt3);
  font-family: 'JetBrains Mono', monospace;
  z-index: 40; opacity: 0.6;
}
.kbd { padding: 1px 5px; background: var(--bg3); border: 1px solid var(--line2); border-radius: 3px; font-size: 9px; }

.toast {
  position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%) translateY(8px);
  background: var(--bg2); border: 1px solid var(--line2); color: var(--txt);
  font-size: 12px; font-weight: 500; padding: 9px 16px; border-radius: 6px;
  opacity: 0; transition: all 0.2s; z-index: 1000; pointer-events: none;
  font-family: 'JetBrains Mono', monospace;
}
.toast.show { opacity: 1; transform: translateX(-50%) translateY(0); }
.toast.success { border-color: rgba(74,222,128,0.4); color: var(--green); }
.toast.error { border-color: rgba(248,113,113,0.4); color: var(--red); }

/* ═══════════════════════════════ RESPONSIVE */
@media (max-width: 700px) {
  .analysis-wrap { flex-direction: column; }
  .analysis-sidebar { width: 100%; }
  .grid2, .grid3, .opp-meta-grid, .hours-plan, .enrich-grid { grid-template-columns: 1fr; }
  .kbd-hint { display: none; }
}

::-webkit-scrollbar { width: 5px; }
::-webkit-scrollbar-track { background: var(--bg); }
::-webkit-scrollbar-thumb { background: var(--line2); border-radius: 3px; }
```

---

## File 15: `src/js/data.js`

```javascript
// ═══════════════════════════════════════════════════════
// GBODS ENGINE V5 PRO — Static Configuration Data
// ═══════════════════════════════════════════════════════

const LENSES = [
  { id:'financial',    name:'Financial',       sub:'Profit automation, fee-trauma' },
  { id:'healthcare',   name:'Healthcare',      sub:'Burnout, somatic regulation' },
  { id:'legal',        name:'Legal',           sub:'IP protection, compliance' },
  { id:'technology',   name:'Technology',      sub:'No-code, AI augmentation' },
  { id:'education',    name:'Education',       sub:'Frameworks, curriculum design' },
  { id:'creator',      name:'Creator Economy', sub:'Content systems, licensing' },
  { id:'community',    name:'Community',       sub:'Network effects, belonging' },
  { id:'ai',           name:'AI/Automation',   sub:'Intelligent workflows' },
  { id:'productivity', name:'Productivity',    sub:'EF support, time blindness' },
  { id:'entertainment',name:'Entertainment',   sub:'Gamification, dopamine design' },
];

const ENRICHMENTS = [
  { id:'competitor', label:'🗡 Competitor Displacement', desc:'Make status quo indefensible' },
  { id:'pricing',    label:'💰 Pricing Psychology',      desc:'Pain-anchor + transformation price' },
  { id:'72h',        label:'⚡ First 72 Hours Plan',     desc:'Hour-by-hour Day 1/2/3 sprint' },
  { id:'json',       label:'{ } Structured JSON',        desc:'Machine-readable output included' },
];

const MODELS = [
  { id:'deepseek/deepseek-chat',            name:'DeepSeek V3',      tag:'Fast · Cheap · Strong JSON', badge:'RECOMMENDED', badgeColor:'var(--gold)', costPer1k: 0.0003 },
  { id:'anthropic/claude-sonnet-4-5',       name:'Claude Sonnet 4.5',tag:'Deep paradigms · Best prose', badge:'PREMIUM', badgeColor:'var(--purple)', costPer1k: 0.003 },
  { id:'openai/gpt-4o',                     name:'GPT-4o',           tag:'Balanced · Good tables', badge:'', badgeColor:'', costPer1k: 0.0025 },
  { id:'deepseek/deepseek-r1',              name:'DeepSeek R1',      tag:'Best reasoning · TRIZ depth', badge:'REASONING', badgeColor:'var(--cyan)', costPer1k: 0.0005 },
  { id:'google/gemini-2.5-flash-preview',   name:'Gemini 2.5 Flash', tag:'Fast · Trend-aware', badge:'FAST', badgeColor:'var(--green)', costPer1k: 0.0001 },
  { id:'meta-llama/llama-3.3-70b-instruct', name:'Llama 3.3 70B',   tag:'Free · Private · Capable', badge:'FREE', badgeColor:'var(--green)', costPer1k: 0 },
];

const STAGES = [
  { num:'1', name:'LOCATE',    desc:'Named intersection pain' },
  { num:'2', name:'DIAGNOSE',  desc:'TRIZ contradiction' },
  { num:'3', name:'SPECIFY',   desc:'Jobs-to-be-Done' },
  { num:'4', name:'EXPAND',    desc:'Six paths borrow' },
  { num:'5', name:'EXCAVATE',  desc:'Blocking assumption' },
  { num:'6', name:'ARCHITECT', desc:'Value flow reroute' },
  { num:'7', name:'TIME',      desc:'Window urgency' },
  { num:'8', name:'LEVERAGE',  desc:'Paradigm shift' },
];
```

---

## File 16: `src/js/utils.js`

```javascript
// ═══════════════════════════════════════════════════════
// GBODS ENGINE V5 PRO — Shared Utilities
// ═══════════════════════════════════════════════════════

function esc(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;');
}

function clamp(val, min, max) {
  const n = parseFloat(val) || 0;
  return Math.max(min, Math.min(max, n));
}

function showToast(msg, type) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className = 'toast show' + (type ? ' ' + type : '');
  setTimeout(() => t.className = 'toast', 3000);
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function $(id) {
  return document.getElementById(id);
}

function val(id) {
  const el = $(id);
  return el ? el.value.trim() : '';
}
```

---

## File 17: `src/js/radar.js`

```javascript
// ═══════════════════════════════════════════════════════
// GBODS ENGINE V5 PRO — Pure SVG Radar Chart
// ═══════════════════════════════════════════════════════

function renderRadar(o) {
  const dims = [
    { label: 'Solo',   val: (o.soloViability || 0) / 100 },
    { label: 'E/I',    val: (o.effortIncome || 0) / 100 },
    { label: 'Window', val: (o.windowUrgency || 0) / 10 },
    { label: 'GBODS',  val: (o.gbodsScore || 0) / 100 },
  ];
  const cx = 70, cy = 70, r = 50;
  const n = dims.length;
  const angleStep = (2 * Math.PI) / n;
  const gridLevels = [0.25, 0.5, 0.75, 1.0];

  let svg = `<svg width="140" height="140" viewBox="0 0 140 140">`;

  // Grid polygons
  gridLevels.forEach(lv => {
    const pts = dims.map((_, i) => {
      const angle = i * angleStep - Math.PI / 2;
      return `${cx + r * lv * Math.cos(angle)},${cy + r * lv * Math.sin(angle)}`;
    }).join(' ');
    svg += `<polygon class="radar-grid" points="${pts}"/>`;
  });

  // Axis lines
  dims.forEach((_, i) => {
    const angle = i * angleStep - Math.PI / 2;
    svg += `<line x1="${cx}" y1="${cy}" x2="${cx + r * Math.cos(angle)}" y2="${cy + r * Math.sin(angle)}" stroke="var(--line)" stroke-width="0.5"/>`;
  });

  // Data fill polygon
  const fillPts = dims.map((d, i) => {
    const angle = i * angleStep - Math.PI / 2;
    return `${cx + r * d.val * Math.cos(angle)},${cy + r * d.val * Math.sin(angle)}`;
  }).join(' ');
  svg += `<polygon class="radar-fill" points="${fillPts}"/>`;

  // Data dots + labels
  dims.forEach((d, i) => {
    const angle = i * angleStep - Math.PI / 2;
    const dx = cx + r * d.val * Math.cos(angle);
    const dy = cy + r * d.val * Math.sin(angle);
    svg += `<circle class="radar-dot" cx="${dx}" cy="${dy}" r="3"/>`;
    const lx = cx + (r + 14) * Math.cos(angle);
    const ly = cy + (r + 14) * Math.sin(angle);
    svg += `<text x="${lx}" y="${ly}" text-anchor="middle" dominant-baseline="middle">${d.label}</text>`;
  });

  svg += `</svg>`;
  return svg;
}
```

---

## File 18: `src/js/history.js`

```javascript
// ═══════════════════════════════════════════════════════
// GBODS ENGINE V5 PRO — History Management
// ═══════════════════════════════════════════════════════

const HISTORY_KEY = 'gbods_v5_history';
const HISTORY_MAX = 20;

function saveToHistory(data) {
  const history = JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');
  const v1 = val('v1');
  const v2 = val('v2');
  history.unshift({
    id: Date.now(),
    intersection: `${v1} × ${v2}`,
    count: data.opportunities?.length || 0,
    topScore: data.opportunities?.[0]?.gbodsScore || 0,
    topTitle: data.opportunities?.[0]?.title || '',
    date: new Date().toLocaleDateString(),
    model: S.currentModel,
    data,
  });
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history.slice(0, HISTORY_MAX)));
  loadHistory();
}

function loadHistory() {
  const history = JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');
  const list = $('historyList');
  if (!list) return;
  if (!history.length) {
    list.innerHTML = '<div class="history-empty">No analyses yet</div>';
    return;
  }
  list.innerHTML = history.map(h => `
    <div class="history-item" onclick="loadHistoryItem(${h.id})">
      <div class="history-item-title">${esc(h.topTitle || h.intersection)}</div>
      <div class="history-item-meta">${esc(h.intersection)} · Score ${h.topScore} · ${h.date}</div>
    </div>`).join('');
}

function loadHistoryItem(id) {
  const history = JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');
  const item = history.find(h => h.id === id);
  if (item?.data) {
    S.analysisResult = item.data;
    showResults(item.data);
    toggleHistory();
  }
}

function toggleHistory() {
  $('historyDrawer').classList.toggle('open');
}
```

---

## File 19: `src/js/export.js`

```javascript
// ═══════════════════════════════════════════════════════
// GBODS ENGINE V5 PRO — Export Functions
// ═══════════════════════════════════════════════════════

function exportJSON() {
  if (!S.analysisResult) return;
  const blob = new Blob([JSON.stringify(S.analysisResult, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `gbods-${Date.now()}.json`;
  a.click();
  showToast('JSON exported', 'success');
}

function exportMarkdown() {
  if (!S.analysisResult) return;
  const data = S.analysisResult;
  let md = `# GBODS V5 PRO Analysis\n\n`;
  md += `**Intersection:** ${val('v1')} × ${val('v2')}\n`;
  md += `**Date:** ${new Date().toLocaleDateString()}\n`;
  md += `**Model:** ${S.currentModel}\n\n`;

  if (data.topRecommendation) {
    md += `## ◆ Top Recommendation\n**${data.topTitle}**\n${data.topRecommendation}\n\n`;
  }
  if (data.systemInsight) {
    md += `## ◈ System Insight\n${data.systemInsight}\n\n`;
  }

  (data.opportunities || []).forEach(o => {
    md += `## #${o.rank} — ${o.title} (GBODS: ${o.gbodsScore})\n\n`;
    md += `**Tagline:** ${o.tagline}\n\n`;
    md += `| Metric | Value |\n|--------|-------|\n`;
    md += `| Named Pain | ${o.namedPain} |\n`;
    md += `| Format | ${o.format} |\n`;
    md += `| Price | ${o.price} |\n`;
    md += `| Build Time | ${o.buildHours}h |\n`;
    md += `| Days to Revenue | ${o.daysToRevenue} |\n`;
    md += `| Solo Viability | ${o.soloViability}/100 |\n`;
    md += `| Effort/Income | ${o.effortIncome}/100 |\n`;
    md += `| Window Urgency | ${o.windowUrgency}/10 |\n\n`;

    if (o.contradiction) md += `### Stage 2: TRIZ Contradiction\n${o.contradiction}\n\n`;
    if (o.realJob) md += `### Stage 3: Real Job (JTBD)\n${o.realJob}\n\n`;
    if (o.adjacentBorrow) md += `### Stage 4: Adjacent Borrow\n${o.adjacentBorrow}\n\n`;
    if (o.blockingAssumption) md += `### Stage 5: Blocking Assumption\n${o.blockingAssumption}\n\n`;
    if (o.brokenFlow) md += `### Stage 6: Value Flow\n**Broken:** ${o.brokenFlow}\n`;
    if (o.reroutedFlow) md += `**Fixed:** ${o.reroutedFlow}\n\n`;
    if (o.signals?.length) md += `### Stage 7: Signals\n${o.signals.map(s => `- ${s}`).join('\n')}\n\n`;
    if (o.paradigm) md += `### Stage 8: Paradigm\n> "${o.paradigm}"\n\n`;
    if (o.distribution?.length) md += `**Distribution:** ${o.distribution.join(' · ')}\n\n`;
    md += `---\n\n`;
  });

  if (data.firstDay1) {
    md += `## ⚡ First 72 Hours\n`;
    md += `- **Day 1 — Validate:** ${data.firstDay1}\n`;
    md += `- **Day 2 — Build:** ${data.firstDay2}\n`;
    md += `- **Day 3 — Launch:** ${data.firstDay3}\n`;
  }

  const blob = new Blob([md], { type: 'text/markdown' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `gbods-${Date.now()}.md`;
  a.click();
  showToast('Markdown exported', 'success');
}
```

---

## File 20: `src/js/engine.js`

```javascript
// ═══════════════════════════════════════════════════════
// GBODS ENGINE V5 PRO — Core Analysis Engine
// API calls, streaming, prompt building, result parsing
// ═══════════════════════════════════════════════════════

// ─── API CALL ───────────────────────────────────────

async function callAPI(messages, maxTokens, stream, signal) {
  const key = getApiKey();
  return fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    signal,
    headers: {
      'Authorization': 'Bearer ' + key,
      'Content-Type': 'application/json',
      'HTTP-Referer': 'https://gbods.app',
      'X-Title': 'GBODS Engine V5 PRO',
    },
    body: JSON.stringify({
      model: S.currentModel,
      messages,
      max_tokens: maxTokens,
      temperature: stream ? 0.72 : 0.5,
      stream,
    })
  });
}

// ─── LENS + PAIN SCOUT (combined) ───────────────────

async function runLensScout() {
  const key = getApiKey();
  if (!key) {
    $('lensAiBanner').style.display = 'none';
    return;
  }
  const v1 = val('v1'), v2 = val('v2'), v3 = val('v3');

  $('lensAiBanner').style.display = 'flex';
  $('lensAiText').textContent = '✦ Scanning intersection for best lenses…';

  const lensIds = LENSES.map(l => l.id).join(', ');
  const prompt = `You are a GBODS analyst. Given this niche intersection: V1="${v1}", V2="${v2}"${v3 ? `, V3="${v3}"` : ''}

From this list: ${lensIds}

Return ONLY a JSON object — no other text:
{"suggested":[{"id":"<lens_id>","reason":"<12 word max reason>"},{"id":"...","reason":"..."},{"id":"...","reason":"..."}],"pains":["2-4 word coined label","2-4 word coined label","2-4 word coined label"]}

Pick the 3 lenses that most amplify commercial opportunity. Also identify 3 unnamed compounding pains ONLY visible at this intersection.`;

  try {
    const res = await callAPI([{ role: 'user', content: prompt }], 400, false);
    const data = await res.json();
    const text = data.choices?.[0]?.message?.content || '';
    const match = text.match(/\{[\s\S]*\}/);
    if (match) {
      const parsed = JSON.parse(match[0]);

      // Lens suggestions
      if (parsed.suggested?.length) {
        S.suggestedLenses = parsed.suggested.map(s => s.id);
        parsed.suggested.forEach(s => {
          const chip = $('lc-' + s.id);
          if (chip) {
            chip.classList.add('ai-suggested');
            const reasonEl = $('lr-' + s.id);
            if (reasonEl) { reasonEl.textContent = s.reason; reasonEl.style.display = 'block'; }
          }
        });
        $('lensAiText').textContent = `✦ AI-suggested lenses for ${v1} × ${v2} — marked with ✦`;

        // Auto-select if none selected
        if (S.selectedLenses.length === 0) {
          parsed.suggested.slice(0, 3).forEach(s => {
            if (S.selectedLenses.length < 3) {
              S.selectedLenses.push(s.id);
              const chip = $('lc-' + s.id);
              const cb = $('lcb-' + s.id);
              if (chip) chip.classList.add('selected');
              if (cb) cb.checked = true;
            }
          });
        }
      }

      // Pain scout (combined in same call)
      if (parsed.pains?.length) {
        $('painScoutArea').style.display = 'block';
        $('painPills').innerHTML = parsed.pains.map((p, i) => `
          <div class="pain-pill" id="pp-${i}" onclick="selectPain(${i},'${p.replace(/'/g, "\\'")}')">${p}</div>
        `).join('');
      }
    }
  } catch (e) {
    $('lensAiBanner').style.display = 'none';
  }
}

// ─── MAIN ANALYSIS ──────────────────────────────────

async function runAnalysis() {
  const key = getApiKey();
  if (!key) { toggleSettings(); showToast('Please enter your OpenRouter API key', 'error'); return; }
  const v1 = val('v1'), v2 = val('v2');
  if (!v1 || !v2) { showToast('V1 and V2 are required', 'error'); return; }

  showScreen('screenAnalysis');
  setupAnalysisSidebar(v1, v2);
  setStatusThinking('Analyzing intersection…', 'Stages running in parallel');
  $('btnAbort').style.display = 'inline-flex';

  const prompt = buildV5Prompt();
  const sysPrompt = buildSystemPrompt();

  try {
    await streamAnalysis(sysPrompt, [{ role: 'user', content: prompt }]);
  } catch (err) {
    if (err.name === 'AbortError') {
      showToast('Analysis aborted', 'error');
    } else {
      showToast('Analysis failed: ' + (err.message || 'Check API key + model'), 'error');
    }
    showScreen('screenSetup');
    goStepDirect(3);
  } finally {
    $('btnAbort').style.display = 'none';
    S.abortController = null;
  }
}

function abortAnalysis() {
  if (S.abortController) {
    S.abortController.abort();
    S.streaming = false;
  }
}

// ─── STREAMING ──────────────────────────────────────

async function streamAnalysis(sysPrompt, messages, retryCount = 0) {
  const key = getApiKey();
  S.abortController = new AbortController();

  $('thinkingBox').style.display = 'none';
  const streamBox = $('streamBox');
  streamBox.style.display = 'block';
  streamBox.innerHTML = '';

  let cursor = document.createElement('span');
  cursor.className = 'cursor';
  streamBox.appendChild(cursor);

  let fullText = '';
  let currentStage = 0;
  S.streaming = true;

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      signal: S.abortController.signal,
      headers: {
        'Authorization': 'Bearer ' + key,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://gbods.app',
        'X-Title': 'GBODS Engine V5 PRO',
      },
      body: JSON.stringify({
        model: S.currentModel,
        messages: [{ role: 'system', content: sysPrompt }, ...messages],
        stream: true,
        max_tokens: 6000,
        temperature: 0.72,
      })
    });

    if (!response.ok) {
      const err = await response.text();
      if (response.status === 429 && retryCount < 3) {
        const delay = Math.pow(2, retryCount) * 1000;
        showToast(`Rate limited — retrying in ${delay / 1000}s…`, 'error');
        await new Promise(r => setTimeout(r, delay));
        return streamAnalysis(sysPrompt, messages, retryCount + 1);
      }
      throw new Error(`API ${response.status}: ${err}`);
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      const chunk = decoder.decode(value);
      const lines = chunk.split('\n');
      for (const line of lines) {
        if (!line.startsWith('data: ')) continue;
        const data = line.slice(6);
        if (data === '[DONE]') break;
        try {
          const json = JSON.parse(data);
          const delta = json.choices?.[0]?.delta?.content || '';
          if (delta) {
            fullText += delta;
            renderStreamChunk(streamBox, cursor, delta, fullText);
            const stageMatch = fullText.match(/STAGE\s+(\d+)/gi);
            if (stageMatch) {
              const latest = parseInt(stageMatch[stageMatch.length - 1].match(/\d+/)[0]);
              if (latest > currentStage) {
                markStage(currentStage, 'done');
                currentStage = latest;
                markStage(currentStage, 'running');
                $('analysisStatusText').textContent = `Stage ${currentStage}/8 — ${STAGES[currentStage - 1]?.name}`;
              }
            }
          }
        } catch (e) {}
      }
    }
  } catch (e) {
    if (e.name === 'AbortError') throw e;
    if (retryCount < 2) {
      const delay = Math.pow(2, retryCount) * 1500;
      showToast(`Connection error — retrying in ${delay / 1000}s…`, 'error');
      await new Promise(r => setTimeout(r, delay));
      return streamAnalysis(sysPrompt, messages, retryCount + 1);
    }
    throw e;
  }

  S.streaming = false;
  STAGES.forEach(s => markStage(parseInt(s.num), 'done'));
  cursor.remove();
  S.rawText = fullText;
  parseAndShowResults(fullText);
}

function renderStreamChunk(box, cursor, delta, full) {
  cursor.remove();
  const span = document.createElement('span');
  span.textContent = delta;
  if (/STAGE\s+\d+/i.test(full.slice(-80))) span.className = 'stage-marker';
  if (/NAMED PAIN:|PAIN COIN:/i.test(full.slice(-60))) span.className = 'pain-marker';
  if (/PARADIGM:/i.test(full.slice(-60))) span.className = 'paradigm-marker';
  box.appendChild(span);
  box.appendChild(cursor);
  box.scrollTop = box.scrollHeight;
}

function markStage(num, state) {
  if (num < 1 || num > 8) return;
  const dot = $('sd-' + num);
  const row = $('sr-' + num);
  if (dot) dot.className = 'stage-dot' + (state ? ' ' + state : '');
  if (row) row.className = 'stage-row' + (state ? ' ' + state : '');
}

// ─── PROMPT BUILDER ─────────────────────────────────

function buildSystemPrompt() {
  return `You are GBODS Engine V5 PRO — a precision blue ocean opportunity discovery system.

MISSION: Find unnamed, unserved pain at the mathematical intersection of niche vectors. This pain is INVISIBLE to any expert working inside a single domain.

OUTPUT RULES:
- Apply all 8 GBODS stages to every opportunity
- Be hyper-specific. Never give generic advice
- Coin precise 2-4 word labels for unnamed pains
- All opportunities must pass the constraint profile — REJECT anything that violates it
- GBODS Score = (Solo Viability × 0.40) + (Effort/Income × 0.30) + (Window Urgency × 10 × 0.30)
- Format output with clear stage markers: "── STAGE N NAME ──"
- Output MUST end with a valid JSON block wrapped in \`\`\`json ... \`\`\``;
}

function buildV5Prompt() {
  const v1 = val('v1'), v2 = val('v2'), v3 = val('v3');
  const role = val('role'), income = val('income');
  const tl = val('timeline'), hrs = val('hours');
  const budget = val('budget'), skills = val('skills');
  const cons = val('constraints');
  const depth = val('depth');
  const selectedLensNames = S.selectedLenses.map(id => LENSES.find(l => l.id === id)?.name).filter(Boolean);

  let p = `# GBODS V5 PRO ANALYSIS REQUEST
Intersection: ${v1} × ${v2}${v3 ? ' × ' + v3 : ''}${selectedLensNames.length ? ' + [' + selectedLensNames.join(', ') + ']' : ''}

## CONSTRAINT PROFILE
Role: ${role} | Income Goal: ${income} | Days to Revenue: ${tl} | Weekly Hours: ${hrs} | Budget: ${budget} | Skills: ${skills}
Hard Constraints: ${cons}

## HARD REJECTION RULES
✗ Coding/SaaS ✗ Team ✗ Budget>${budget} ✗ Active delivery ✗ ${cons}

## NICHE INTERSECTION MATRIX
V1: ${v1}
V2: ${v2}${v3 ? '\nV3: ' + v3 : ''}
${selectedLensNames.length ? '\n## ACTIVE LENSES\n' + selectedLensNames.join(', ') : ''}
${S.selectedPain ? `\n## PAIN FOCUS\n"${S.selectedPain}" — ensure opportunity #1 addresses this` : ''}`;

  if (S.whisperOn) {
    const focus = val('whisperFocus');
    p += `\n\n## WEB WHISPERS
Surface CURRENT signals in Stage 7: platform changes, community pain discourse, new tools, cultural shifts, emerging niches.
${focus ? 'Focus: ' + focus : ''}
Rate window urgency 1-10 with specific justification.`;
  }

  p += `\n\n## INSTRUCTIONS
Generate exactly ${depth} opportunities ranked by GBODS Score.

For EACH use this EXACT format:

OPPORTUNITY #[N] | GBODS: [score]
TITLE: [name] | TAGLINE: [sentence] | TARGET: [person] | QUICK WIN: [YES/NO]

── STAGE 1 LOCATE ──
NAMED PAIN: [2-4 words] | PAIN: [2-3 sentences]

── STAGE 2 DIAGNOSE ──
CONTRADICTION: [Better X makes Y worse] | TRIZ: [principle]

── STAGE 3 SPECIFY ──
REAL JOB: [When I..., help me... so I can...] | GAP: [why current fails]

── STAGE 4 EXPAND ──
ADJACENT: [industry] | BORROW: [mechanic]

── STAGE 5 EXCAVATE ──
ASSUMPTION: [false belief] | DISSOLVE: [what's possible]

── STAGE 6 ARCHITECT ──
BROKEN: [current flow] | REROUTED: [fixed flow]

── STAGE 7 TIME ──
SIGNAL 1-3: [forces] | WINDOW: [X/10] — [why now]

── STAGE 8 LEVERAGE ──
PARADIGM: "[frame-shifting statement]"

── PRODUCT ──
FORMAT: [type] | PRICE: [$XX] | BUILD: [Xh] | DAYS TO $: [X] | DISTRIBUTION: [channels]

── SCORES ──
GBODS: [0-100] | SOLO VIABILITY: [0-100] | EFFORT-INCOME: [0-100] | WINDOW URGENCY: [1-10]

---

After all: TOP RECOMMENDATION + SYSTEM INSIGHT + FIRST 72 HOURS (DAY 1/2/3)`;

  if (S.enrichments.includes('competitor')) {
    p += `\nAdd per opp: COMPETITOR: [alt] | FAIL: [reason] | DISPLACE: "Unlike [X]..."`;
  }
  if (S.enrichments.includes('pricing')) {
    p += `\nAdd per opp: PAIN ANCHOR: [$] | TRANSFORM VALUE: [$] | ENTRY PRICE: [$]`;
  }

  p += `\n\nEnd with JSON block:
\`\`\`json
{"opportunities":[{"rank":1,"title":"","tagline":"","namedPain":"","contradiction":"","realJob":"","blockingAssumption":"","brokenFlow":"","reroutedFlow":"","adjacentBorrow":"","signals":[],"paradigm":"","format":"","price":"","buildHours":0,"daysToRevenue":0,"gbodsScore":0,"soloViability":0,"effortIncome":0,"windowUrgency":0,"quickWin":false,"distribution":[]}],"topRecommendation":"","topTitle":"","systemInsight":"","firstDay1":"","firstDay2":"","firstDay3":""}
\`\`\``;

  return p;
}

// ─── RESULT PARSING ─────────────────────────────────

function parseAndShowResults(fullText) {
  let result = null;

  const jsonMatch = fullText.match(/```json\s*([\s\S]*?)```/);
  if (jsonMatch) {
    try {
      const cleaned = jsonMatch[1]
        .replace(/,(\s*[}\]])/g, '$1')
        .replace(/[\x00-\x1F\x7F]/g, ' ');
      result = JSON.parse(cleaned);
    } catch (e) {}
  }

  if (!result || !result.opportunities?.length) {
    result = parseFromText(fullText);
  }

  if (result?.opportunities) {
    result.opportunities.forEach(o => {
      o.gbodsScore = clamp(o.gbodsScore, 0, 100);
      o.soloViability = clamp(o.soloViability, 0, 100);
      o.effortIncome = clamp(o.effortIncome, 0, 100);
      o.windowUrgency = clamp(o.windowUrgency, 1, 10);
    });
  }

  S.analysisResult = result;
  saveToHistory(result);
  showResults(result);
}

function parseFromText(text) {
  const opps = [];
  const oppBlocks = text.split(/OPPORTUNITY #\d+/i).slice(1);

  oppBlocks.forEach((block, i) => {
    const get = (key) => {
      const m = block.match(new RegExp(key + ':?\\s*(.+?)(?=\\n[A-Z ─]{3,}:|$)', 'is'));
      return m ? m[1].trim() : '';
    };
    const getScore = (key) => {
      const m = block.match(new RegExp(key + ':?\\s*(\\d+)', 'i'));
      return m ? parseInt(m[1]) : 70;
    };

    opps.push({
      rank: i + 1,
      title: get('TITLE') || `Opportunity ${i + 1}`,
      tagline: get('TAGLINE'),
      namedPain: get('NAMED PAIN'),
      contradiction: get('CONTRADICTION'),
      realJob: get('REAL JOB'),
      blockingAssumption: get('ASSUMPTION'),
      brokenFlow: get('BROKEN'),
      reroutedFlow: get('REROUTED'),
      adjacentBorrow: get('ADJACENT') + (get('BORROW') ? ' — ' + get('BORROW') : ''),
      signals: [get('SIGNAL 1'), get('SIGNAL 2'), get('SIGNAL 3')].filter(Boolean),
      paradigm: get('PARADIGM').replace(/^"|"$/g, ''),
      format: get('FORMAT'),
      price: get('PRICE'),
      buildHours: parseInt(get('BUILD')) || 8,
      daysToRevenue: parseInt(get('DAYS TO')) || 7,
      gbodsScore: getScore('GBODS'),
      soloViability: getScore('SOLO VIABILITY'),
      effortIncome: getScore('EFFORT'),
      windowUrgency: getScore('WINDOW'),
      quickWin: /YES/i.test(get('QUICK WIN')),
      distribution: get('DISTRIBUTION').split('·').map(s => s.trim()).filter(Boolean),
    });
  });

  return {
    opportunities: opps,
    topRecommendation: text.match(/TOP RECOMMENDATION:?\s*(.+?)(?:\n|$)/i)?.[1]?.trim() || '',
    topTitle: opps[0]?.title || '',
    systemInsight: text.match(/SYSTEM INSIGHT:?\s*([\s\S]+?)(?:\nFIRST 72|$)/i)?.[1]?.trim() || '',
    firstDay1: text.match(/DAY 1:?\s*(.+?)(?:\n|$)/i)?.[1]?.trim() || '',
    firstDay2: text.match(/DAY 2:?\s*(.+?)(?:\n|$)/i)?.[1]?.trim() || '',
    firstDay3: text.match(/DAY 3:?\s*(.+?)(?:\n|$)/i)?.[1]?.trim() || '',
  };
}
```

---

## File 21: `src/js/ui.js`

```javascript
// ═══════════════════════════════════════════════════════
// GBODS ENGINE V5 PRO — UI Rendering & DOM Management
// ═══════════════════════════════════════════════════════

// ─── BUILD UI COMPONENTS ────────────────────────────

function buildLenses() {
  $('lensGrid').innerHTML = LENSES.map(l => `
    <label class="lens-chip" id="lc-${l.id}" onclick="toggleLens(event,'${l.id}')">
      <input type="checkbox" class="lens-cb" id="lcb-${l.id}">
      <div>
        <span class="lens-name">${l.name}</span>
        <span class="lens-sub">${l.sub}</span>
        <span class="lens-reason" id="lr-${l.id}" style="display:none"></span>
      </div>
    </label>`).join('');
}

function buildEnrichments() {
  $('enrichGrid').innerHTML = ENRICHMENTS.map(e => `
    <label class="enrich-chip" id="ec-${e.id}" onclick="toggleEnrich(event,'${e.id}')">
      <input type="checkbox" class="enrich-cb" id="ecb-${e.id}">
      <div>
        <div class="enrich-label">${e.label}</div>
        <div class="enrich-desc">${e.desc}</div>
      </div>
    </label>`).join('');
}

function buildModels() {
  $('modelGrid').innerHTML = MODELS.map(m => `
    <div class="model-option ${m.id === S.currentModel ? 'selected' : ''}" onclick="selectModel('${m.id}')">
      <input type="radio" class="model-radio" name="model" ${m.id === S.currentModel ? 'checked' : ''}>
      <div style="flex:1">
        <div class="model-name">${m.name}</div>
        <div class="model-tag">${m.tag}</div>
        <div class="model-cost">~$${m.costPer1k}/1k tokens</div>
      </div>
      ${m.badge ? `<span class="model-badge" style="background:${m.badgeColor}22;color:${m.badgeColor};border:1px solid ${m.badgeColor}44">${m.badge}</span>` : ''}
    </div>`).join('');

  $('modelSelect').innerHTML = MODELS.map(m =>
    `<option value="${m.id}" ${m.id === S.currentModel ? 'selected' : ''}>${m.name} — ${m.tag.split('·')[0].trim()}</option>`
  ).join('');
}

function buildStageList() {
  $('stageList').innerHTML = STAGES.map(s => `
    <div class="stage-row" id="sr-${s.num}">
      <div class="stage-dot" id="sd-${s.num}"></div>
      <div class="stage-row-label">${s.name}</div>
      <div class="stage-row-num">${s.num}</div>
    </div>`).join('');
}

// ─── INTERACTIONS ───────────────────────────────────

function toggleLens(e, id) {
  e.preventDefault();
  const el = $('lc-' + id);
  const cb = $('lcb-' + id);
  const idx = S.selectedLenses.indexOf(id);
  if (idx > -1) {
    S.selectedLenses.splice(idx, 1);
    el.classList.remove('selected');
    cb.checked = false;
  } else if (S.selectedLenses.length < 3) {
    S.selectedLenses.push(id);
    el.classList.add('selected');
    cb.checked = true;
  } else {
    showToast('Max 3 lenses — deselect one first', 'error');
  }
  updateTokenEst();
}

function toggleEnrich(e, id) {
  e.preventDefault();
  const el = $('ec-' + id);
  const cb = $('ecb-' + id);
  const idx = S.enrichments.indexOf(id);
  if (idx > -1) { S.enrichments.splice(idx, 1); el.classList.remove('on'); cb.checked = false; }
  else { S.enrichments.push(id); el.classList.add('on'); cb.checked = true; }
  updateTokenEst();
}

function toggleWhispers() {
  S.whisperOn = !S.whisperOn;
  $('whisperToggle').classList.toggle('on', S.whisperOn);
  $('whispersBody').classList.toggle('open', S.whisperOn);
  updateTokenEst();
}

function selectPain(idx, pain) {
  document.querySelectorAll('.pain-pill').forEach(el => el.classList.remove('selected'));
  if (S.selectedPain === pain) {
    S.selectedPain = null;
  } else {
    S.selectedPain = pain;
    $('pp-' + idx)?.classList.add('selected');
  }
}

function updateMath() {
  const v1 = val('v1') || 'V₁';
  const v2 = val('v2') || 'V₂';
  const v3 = val('v3');
  const el = $('mathEq');
  if (!el) return;
  let eq = `${v1} × ${v2}`;
  if (v3) eq += ` × ${v3}`;
  el.textContent = eq + ' = Blue Ocean';
  el.classList.toggle('active', !!(v1 !== 'V₁' && v2 !== 'V₂'));
}

// ─── ANALYSIS SIDEBAR ───────────────────────────────

function setupAnalysisSidebar(v1, v2) {
  const v3 = val('v3');
  let inter = `${v1}\n× ${v2}`;
  if (v3) inter += `\n× ${v3}`;
  $('analysisIntersection').textContent = inter;
  $('analysisProfile').innerHTML =
    `<span>Goal:</span> ${val('income')}<br>` +
    `<span>Timeline:</span> ${val('timeline')}d<br>` +
    `<span>Hours/wk:</span> ${val('hours')}h<br>` +
    `<span>Budget:</span> ${val('budget')}`;
  $('analysisStatusText').textContent = 'Running 8-stage analysis…';
  buildStageList();
}

function setStatusThinking(label, sub) {
  $('thinkingBox').style.display = 'flex';
  $('streamBox').style.display = 'none';
  $('thinkingLabel').textContent = label;
  $('thinkingSub').textContent = sub;
}

// ─── RESULTS DISPLAY ────────────────────────────────

function showResults(data) {
  showScreen('screenResults');
  $('historyFab').style.display = 'flex';

  const v1 = val('v1'), v2 = val('v2'), v3 = val('v3');
  let inter = `${v1} × ${v2}${v3 ? ' × ' + v3 : ''}`;
  const lensLabels = S.selectedLenses.map(id => LENSES.find(l => l.id === id)?.name).filter(Boolean);

  $('resultsMeta').innerHTML = `
    <div class="results-intersection mono">${inter}</div>
    ${lensLabels.map(l => `<span class="results-badge badge-cyan">${l}</span>`).join('')}
    <span class="results-badge badge-gold">${data.opportunities?.length || 0} opportunities</span>
    <span class="results-badge badge-green">${new Date().toLocaleDateString()}</span>`;

  if (data.topRecommendation || data.topTitle) {
    $('topRecCard').style.display = 'block';
    $('topRecTitle').textContent = data.topTitle || (data.opportunities?.[0]?.title || '');
    $('topRecReason').textContent = data.topRecommendation || '';
  }

  if (data.systemInsight) {
    $('systemInsightCard').style.display = 'block';
    $('systemInsightText').textContent = data.systemInsight;
  }

  $('oppGrid').innerHTML = (data.opportunities || []).map((o, i) => renderOppCard(o, i)).join('');

  setTimeout(() => {
    (data.opportunities || []).forEach((o, i) =>
      animateRing('ring-' + i, o.gbodsScore, getScoreColor(o.gbodsScore))
    );
  }, 100);

  if (data.firstDay1 || data.firstDay2 || data.firstDay3) {
    $('h72Card').style.display = 'block';
    $('hoursPlan').innerHTML = `
      <div class="hours-day"><div class="hours-day-label">DAY 1 — VALIDATE</div><div class="hours-day-text">${data.firstDay1 || '—'}</div></div>
      <div class="hours-day"><div class="hours-day-label">DAY 2 — BUILD</div><div class="hours-day-text">${data.firstDay2 || '—'}</div></div>
      <div class="hours-day"><div class="hours-day-label">DAY 3 — LAUNCH</div><div class="hours-day-text">${data.firstDay3 || '—'}</div></div>`;
  }
}

function renderOppCard(o, i) {
  const rank = o.rank || (i + 1);
  const circ = 2 * Math.PI * 22;
  const scoreColor = getScoreColor(o.gbodsScore);

  return `
  <div class="opp-card ${rank === 1 ? 'rank-1' : ''}" id="ocard-${i}">
    <div class="opp-header" onclick="toggleOpp(${i})">
      <div class="opp-rank ${rank === 1 ? 'r1' : rank === 2 ? 'r2' : ''}">${rank}</div>
      <div class="opp-info">
        <div class="opp-title">${esc(o.title)}</div>
        <div class="opp-tagline">${esc(o.tagline)}</div>
        <div class="opp-chips">
          ${o.namedPain ? `<span class="chip chip-pain">${esc(o.namedPain)}</span>` : ''}
          ${o.quickWin ? `<span class="chip chip-win">⚡ QUICK WIN</span>` : ''}
          ${o.format ? `<span class="chip chip-format">${esc(o.format)}</span>` : ''}
          ${o.price ? `<span class="chip chip-price">${esc(o.price)}</span>` : ''}
        </div>
      </div>
      <div class="opp-scores">
        <div class="score-ring-wrap">
          <div class="score-ring" id="ring-${i}">
            <svg width="52" height="52" viewBox="0 0 52 52">
              <circle class="score-ring-track" cx="26" cy="26" r="22"/>
              <circle class="score-ring-fill" cx="26" cy="26" r="22" id="rf-${i}"
                stroke="${scoreColor}" stroke-dasharray="${circ}" stroke-dashoffset="${circ}"/>
            </svg>
            <div class="score-val" style="color:${scoreColor}">${o.gbodsScore}</div>
          </div>
          <div class="score-label">GBODS</div>
        </div>
        <div class="opp-expand-icon" id="ei-${i}">›</div>
      </div>
    </div>
    <div class="opp-body" id="ob-${i}">
      <div class="radar-wrap">${renderRadar(o)}</div>
      <div class="opp-meta-grid">
        <div class="opp-meta-item"><div class="opp-meta-val">${o.buildHours}h</div><div class="opp-meta-key">Build</div></div>
        <div class="opp-meta-item"><div class="opp-meta-val">${o.daysToRevenue}d</div><div class="opp-meta-key">To Revenue</div></div>
        <div class="opp-meta-item"><div class="opp-meta-val">${o.soloViability}</div><div class="opp-meta-key">Solo Fit</div></div>
        <div class="opp-meta-item"><div class="opp-meta-val">${o.windowUrgency}/10</div><div class="opp-meta-key">Window</div></div>
      </div>
      ${o.namedPain ? `<div class="stage-block"><div class="stage-block-title cyan">STAGE 1 · Named Pain</div><div class="stage-block-content"><strong>${esc(o.namedPain)}</strong></div></div>` : ''}
      ${o.contradiction ? `<div class="stage-block"><div class="stage-block-title gold">STAGE 2 · TRIZ Contradiction</div><div class="stage-block-content">${esc(o.contradiction)}</div></div>` : ''}
      ${o.realJob ? `<div class="stage-block"><div class="stage-block-title cyan">STAGE 3 · Real Job (JTBD)</div><div class="stage-block-content">${esc(o.realJob)}</div></div>` : ''}
      ${o.adjacentBorrow ? `<div class="stage-block"><div class="stage-block-title">STAGE 4 · Adjacent Borrow</div><div class="stage-block-content">${esc(o.adjacentBorrow)}</div></div>` : ''}
      ${o.blockingAssumption ? `<div class="stage-block"><div class="stage-block-title">STAGE 5 · Blocking Assumption</div><div class="stage-block-content">${esc(o.blockingAssumption)}</div></div>` : ''}
      ${(o.brokenFlow || o.reroutedFlow) ? `<div class="stage-block"><div class="stage-block-title green">STAGE 6 · Value Flow</div>
        <div class="flow-box">
          ${o.brokenFlow ? `<div class="flow-row"><span class="flow-label">BROKEN</span><div class="flow-content broken">${esc(o.brokenFlow)}</div></div>` : ''}
          ${o.reroutedFlow ? `<div class="flow-row"><span class="flow-label">FIXED</span><div class="flow-content fixed">${esc(o.reroutedFlow)}</div></div>` : ''}
        </div></div>` : ''}
      ${o.signals?.length ? `<div class="stage-block"><div class="stage-block-title cyan">STAGE 7 · Converging Signals</div>
        <div class="signal-chips">${o.signals.map(s => `<span class="signal-chip">${esc(s)}</span>`).join('')}</div></div>` : ''}
      ${o.paradigm ? `<div class="stage-block"><div class="stage-block-title purple">STAGE 8 · Paradigm</div><div class="paradigm-box">"${esc(o.paradigm)}"</div></div>` : ''}
      ${o.distribution?.length ? `<div class="stage-block"><div class="stage-block-title">Distribution</div>
        <div class="dist-list">${o.distribution.map(d => `<span class="dist-chip">${esc(d)}</span>`).join('')}</div></div>` : ''}
    </div>
  </div>`;
}

function toggleOpp(i) {
  const body = $('ob-' + i);
  const icon = $('ei-' + i);
  const open = body.classList.toggle('open');
  icon.style.transform = open ? 'rotate(90deg)' : '';
  if (open) {
    const o = S.analysisResult?.opportunities?.[i];
    if (o) animateRing('ring-' + i, o.gbodsScore, getScoreColor(o.gbodsScore));
  }
}

function animateRing(id, score, color) {
  const el = $('rf-' + id.split('-')[1]);
  if (!el) return;
  const circ = 2 * Math.PI * 22;
  const offset = circ - (score / 100) * circ;
  el.style.strokeDashoffset = offset;
  el.setAttribute('stroke', color);
}

function getScoreColor(score) {
  if (score >= 80) return 'var(--green)';
  if (score >= 70) return 'var(--gold)';
  if (score >= 60) return 'var(--cyan)';
  return 'var(--red)';
}
```

---

## File 22: `src/js/app.js`

```javascript
// ═══════════════════════════════════════════════════════
// GBODS ENGINE V5 PRO — Application Controller
// State, init, navigation, settings, keyboard
// ═══════════════════════════════════════════════════════

// ─── STATE ──────────────────────────────────────────

const S = {
  step: 1,
  selectedLenses: [],
  suggestedLenses: [],
  enrichments: [],
  whisperOn: false,
  selectedPain: null,
  analysisResult: null,
  currentModel: 'deepseek/deepseek-chat',
  streaming: false,
  abortController: null,
  rawText: '',
};

// ─── INIT ───────────────────────────────────────────

function init() {
  buildLenses();
  buildEnrichments();
  buildModels();
  loadSettings();
  loadHistory();
  updateTokenEst();
  setupKeyboard();
  setupConstraintListeners();
  checkConstraints();
}

// ─── KEYBOARD ───────────────────────────────────────

function setupKeyboard() {
  document.addEventListener('keydown', e => {
    if (['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) return;
    if (e.key === 's' || e.key === 'S') { e.preventDefault(); toggleSettings(); }
    if (e.key === 'h' || e.key === 'H') { e.preventDefault(); toggleHistory(); }
    if (e.key === 'Escape') {
      if ($('settingsOverlay').classList.contains('open')) toggleSettings();
      else if ($('historyDrawer').classList.contains('open')) toggleHistory();
    }
  });
}

// ─── CONSTRAINT VALIDATOR ───────────────────────────

function setupConstraintListeners() {
  ['role', 'income', 'timeline', 'hours', 'budget', 'skills', 'constraints'].forEach(id => {
    const el = $(id);
    if (el) el.addEventListener('input', checkConstraints);
  });
}

function checkConstraints() {
  const warns = [];
  const skills = val('skills').toLowerCase();
  const cons = val('constraints').toLowerCase();
  const budget = val('budget').toLowerCase();

  if (skills.includes('none') || skills.includes('no cod')) {
    warns.push('No coding — SaaS/software opportunities will be auto-rejected');
  }
  if (budget.includes('$0') || budget.includes('zero')) {
    warns.push('Zero budget — paid advertising channels excluded');
  }
  if (cons.includes('no team')) {
    warns.push('Solo constraint — all opportunities single-person executable');
  }

  const el = $('constraintWarnings');
  if (el) {
    el.innerHTML = warns.map(w => `<div class="constraint-warn">⚠ ${w}</div>`).join('');
  }
}

// ─── NAVIGATION ─────────────────────────────────────

function goStep(n) {
  if (n === 3) return; // Only via Scout button
  S.step = n;
  ['step1', 'step2', 'step3'].forEach((id, i) => {
    $(id).style.display = (i + 1 === n) ? 'block' : 'none';
  });
  [1, 2, 3].forEach(i => {
    const el = $('stepNav' + i);
    el.className = 'step-item' + (i < n ? ' done' : i === n ? ' active' : '');
  });
  updateMath();
}

function goStepDirect(n) {
  S.step = n;
  ['step1', 'step2', 'step3'].forEach((id, i) => {
    $(id).style.display = (i + 1 === n) ? 'block' : 'none';
  });
  [1, 2, 3].forEach(i => {
    const el = $('stepNav' + i);
    el.className = 'step-item' + (i < n ? ' done' : i === n ? ' active' : '');
  });
}

async function goToIntelligence() {
  const v1 = val('v1'), v2 = val('v2');
  if (!v1 || !v2) { showToast('Please enter V1 and V2 niches', 'error'); return; }
  goStepDirect(3);
  await runLensScout();
}

// ─── MODEL SELECTION ────────────────────────────────

function selectModel(id) {
  S.currentModel = id;
  buildModels();
  saveSettings();
  updateTokenEst();
}

function setModelFromSelect() {
  S.currentModel = $('modelSelect').value;
  buildModels();
  saveSettings();
  updateTokenEst();
}

// ─── TOKEN COST ESTIMATOR ───────────────────────────

function updateTokenEst() {
  const depth = parseInt(val('depth') || '5');
  const baseTokens = 1200 + (depth * 800) + (S.enrichments.length * 300) + (S.whisperOn ? 400 : 0);
  const outputTokens = depth * 1200;
  const totalTokens = baseTokens + outputTokens;
  const model = MODELS.find(m => m.id === S.currentModel);
  const cost = model ? (totalTokens * model.costPer1k / 1000) : 0;

  const countEl = $('tokenCount');
  const costEl = $('tokenCost');
  if (countEl) countEl.textContent = `~${Math.round(totalTokens / 100) * 100} tokens`;
  if (costEl) costEl.textContent = cost === 0 ? 'FREE' : `~$${cost.toFixed(3)}`;
}

// ─── SETTINGS ───────────────────────────────────────

function getApiKey() {
  return $('apiKey')?.value.trim() || localStorage.getItem('gbods_key') || '';
}

function saveSettings() {
  const key = $('apiKey')?.value.trim();
  if (key) localStorage.setItem('gbods_key', key);
  localStorage.setItem('gbods_model', S.currentModel);
}

function loadSettings() {
  const key = localStorage.getItem('gbods_key');
  if (key && $('apiKey')) $('apiKey').value = key;
  const model = localStorage.getItem('gbods_model');
  if (model && MODELS.find(m => m.id === model)) {
    S.currentModel = model;
    buildModels();
  }
}

function toggleSettings() {
  $('settingsOverlay').classList.toggle('open');
}

// ─── NEW ANALYSIS ───────────────────────────────────

function newAnalysis() {
  showScreen('screenSetup');
  goStepDirect(1);
  S.selectedLenses = [];
  S.enrichments = [];
  S.whisperOn = false;
  S.selectedPain = null;
  S.rawText = '';
  $('historyFab').style.display = 'none';
  document.querySelectorAll('.lens-chip').forEach(el => el.classList.remove('selected', 'ai-suggested'));
  document.querySelectorAll('.lens-cb').forEach(el => el.checked = false);
  document.querySelectorAll('.lens-reason').forEach(el => el.style.display = 'none');
  document.querySelectorAll('.enrich-chip').forEach(el => el.classList.remove('on'));
  document.querySelectorAll('.enrich-cb').forEach(el => el.checked = false);
  $('whisperToggle').classList.remove('on');
  $('whispersBody').classList.remove('open');
  $('lensAiBanner').style.display = 'none';
  $('painScoutArea').style.display = 'none';
  $('topRecCard').style.display = 'none';
  $('systemInsightCard').style.display = 'none';
  $('h72Card').style.display = 'none';
}

// ─── BOOT ───────────────────────────────────────────

init();

if (!getApiKey()) {
  setTimeout(() => {
    $('settingsOverlay').classList.add('open');
  }, 600);
}
```

---

## File 23: `src/index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>GBODS ENGINE V5 PRO</title>
  <meta name="description" content="Gold-Based Opportunity Discovery System — Find unnamed pain at niche intersections using AI-powered 8-stage analysis">
  <link rel="icon" href="assets/favicon.svg" type="image/svg+xml">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/engine.css">
</head>
<body>
<div class="app">

  <!-- ═══════════════════ SETTINGS OVERLAY ═══════════════════ -->
  <div class="settings-overlay" id="settingsOverlay">
    <div class="settings-panel">
      <div class="settings-title">
        <span>⚙ Settings</span>
        <button class="settings-close" onclick="toggleSettings()">✕</button>
      </div>
      <div class="field">
        <label class="field-label">OpenRouter API Key</label>
        <input type="password" id="apiKey" placeholder="sk-or-v1-..." oninput="saveSettings()">
        <div class="field-hint">Stored locally only. Get at <span style="color:var(--gold)">openrouter.ai/keys</span></div>
      </div>
      <div class="field" style="margin-top:16px">
        <label class="field-label">Analysis Model</label>
        <div class="model-grid" id="modelGrid"></div>
      </div>
      <div class="btn-row" style="margin-top:20px">
        <a href="https://openrouter.ai/keys" target="_blank" class="btn btn-cyan btn-sm">Get API Key ↗</a>
        <button class="btn btn-ghost btn-sm" onclick="toggleSettings()">Close</button>
      </div>
    </div>
  </div>

  <!-- ═══════════════════ HISTORY DRAWER ═══════════════════ -->
  <div class="history-drawer" id="historyDrawer">
    <div class="history-drawer-header">
      <div class="history-drawer-title">ANALYSIS HISTORY</div>
      <button class="history-close" onclick="toggleHistory()">✕</button>
    </div>
    <div class="history-list" id="historyList"></div>
  </div>

  <!-- ═══════════════════ SCREEN: SETUP ═══════════════════ -->
  <div class="screen active" id="screenSetup">
    <div class="topbar">
      <div class="topbar-logo">
        <div class="logo-gem"></div>
        <div><div class="logo-text">GBODS ENGINE</div></div>
        <div class="logo-version">V5 PRO</div>
      </div>
      <div class="topbar-spacer"></div>
      <div class="topbar-status" id="statusBar">
        <div class="status-dot" id="statusDot"></div>
        <span id="statusText">Configure</span>
      </div>
      <button class="btn-topbar" onclick="toggleSettings()" title="Settings (S)">⚙</button>
    </div>

    <div class="steps-nav">
      <div class="step-item active" id="stepNav1" onclick="goStep(1)"><div class="step-num">1</div><span>Profile</span></div>
      <div class="step-sep"></div>
      <div class="step-item" id="stepNav2" onclick="goStep(2)"><div class="step-num">2</div><span>Intersection</span></div>
      <div class="step-sep"></div>
      <div class="step-item" id="stepNav3"><div class="step-num">3</div><span>Intelligence</span></div>
    </div>

    <!-- STEP 1: PROFILE -->
    <div class="page" id="step1" style="padding-top:24px">
      <div class="card">
        <div class="card-title"><span class="card-title-icon">👤</span> Constraint Profile</div>
        <div class="grid2">
          <div class="field">
            <label class="field-label">Role</label>
            <input type="text" id="role" value="Solo non-technical founder">
          </div>
          <div class="field">
            <label class="field-label">Monthly Income Goal</label>
            <input type="text" id="income" value="$2,000–5,000/month">
          </div>
          <div class="field">
            <label class="field-label">Days to First Revenue</label>
            <input type="number" id="timeline" value="7" min="1" max="90">
          </div>
          <div class="field">
            <label class="field-label">Weekly Hours Available</label>
            <input type="number" id="hours" value="20" min="1" max="80">
          </div>
          <div class="field">
            <label class="field-label">Budget</label>
            <input type="text" id="budget" value="$0–100">
          </div>
          <div class="field">
            <label class="field-label">Technical Skills</label>
            <input type="text" id="skills" value="None — no coding">
          </div>
        </div>
        <div class="field">
          <label class="field-label">Hard Constraints</label>
          <textarea id="constraints">No team, no SaaS, no ongoing client work, passive digital delivery only</textarea>
        </div>
        <div id="constraintWarnings"></div>
      </div>
      <div class="btn-row right">
        <button class="btn btn-gold" onclick="goStep(2)">Next: Set Intersection →</button>
      </div>
    </div>

    <!-- STEP 2: NICHES -->
    <div class="page" id="step2" style="display:none">
      <div class="math-display" id="mathEq">V₁ × V₂ = Blue Ocean Potential</div>
      <div class="card">
        <div class="card-title"><span class="card-title-icon">🎯</span> Niche Vectors</div>
        <div class="field">
          <label class="field-label">V1 — Base Niche <span class="field-req">*</span></label>
          <input type="text" id="v1" placeholder="e.g., ADHD freelance designers" oninput="updateMath()">
          <div class="field-hint">Primary identity group</div>
        </div>
        <div class="field">
          <label class="field-label">V2 — Intersection Niche <span class="field-req">*</span></label>
          <input type="text" id="v2" placeholder="e.g., Etsy digital product sellers" oninput="updateMath()">
          <div class="field-hint">Platform or context where pain occurs</div>
        </div>
        <div class="field">
          <label class="field-label">V3 — Deepening <span style="color:var(--txt3)">(optional)</span></label>
          <input type="text" id="v3" placeholder="e.g., Notion template creators under 500 sales" oninput="updateMath()">
          <div class="field-hint">Sub-community to narrow further</div>
        </div>
      </div>
      <div class="btn-row" style="justify-content:space-between">
        <button class="btn btn-ghost" onclick="goStep(1)">← Back</button>
        <button class="btn btn-gold" onclick="goToIntelligence()" id="btnIntelligence">
          <span class="btn-icon">✦</span> Scout Intersection →
        </button>
      </div>
    </div>

    <!-- STEP 3: INTELLIGENCE -->
    <div class="page" id="step3" style="display:none">
      <div class="card" id="lensCard">
        <div class="card-title"><span class="card-title-icon">🔍</span> Smart Lenses <span class="card-title-sub">select 1–3</span></div>
        <div class="lenses-ai-banner" id="lensAiBanner" style="display:none">
          <span>✦</span> <span id="lensAiText"></span>
        </div>
        <div class="lenses-wrap" id="lensGrid"></div>
      </div>

      <div class="whispers-card">
        <div class="whispers-header" onclick="toggleWhispers()">
          <div class="whispers-title"><span>📡</span> Web Whispers <span style="font-size:10px;font-weight:400;color:var(--txt3);text-transform:none;letter-spacing:0;font-family:'Outfit',sans-serif">— trend signals</span></div>
          <div class="whisper-toggle" id="whisperToggle"></div>
        </div>
        <div class="whispers-body" id="whispersBody">
          <div class="whisper-desc">Instructs AI to surface platform changes, conversations, tool launches, and cultural shifts at your intersection.</div>
          <div class="field">
            <label class="field-label" style="margin-top:8px">Focus Signals <span style="color:var(--txt3)">(optional)</span></label>
            <textarea id="whisperFocus" placeholder="e.g., recent fee changes, burnout discourse, AI adoption..."></textarea>
          </div>
        </div>
      </div>

      <div class="card" id="painScoutArea" style="display:none">
        <div class="card-title"><span class="card-title-icon">🎯</span> Pain Scout <span class="card-title-sub">— click to focus</span></div>
        <div class="pain-scout-pills" id="painPills"></div>
        <div class="field-hint" style="margin-top:10px">Candidate pains at your intersection. Select one to focus analysis.</div>
      </div>

      <div class="card">
        <div class="card-title"><span class="card-title-icon">⚡</span> Enrichments</div>
        <div class="enrich-grid" id="enrichGrid"></div>
      </div>

      <div class="card">
        <div class="card-title"><span class="card-title-icon">⚙</span> Output Config</div>
        <div class="grid2">
          <div class="field">
            <label class="field-label">Opportunities</label>
            <select id="depth" onchange="updateTokenEst()">
              <option value="5">5 — Full Scan</option>
              <option value="3">3 — Focused</option>
              <option value="1">1 — Executive</option>
            </select>
          </div>
          <div class="field">
            <label class="field-label">Model</label>
            <select id="modelSelect" onchange="setModelFromSelect()"></select>
          </div>
        </div>
        <div class="token-est" id="tokenEst">
          <span>≈</span> <span id="tokenCount">~4,500 tokens</span>
          <span>·</span> <span class="cost" id="tokenCost">~$0.01</span>
        </div>
      </div>

      <div class="btn-row" style="justify-content:space-between">
        <button class="btn btn-ghost" onclick="goStep(2)">← Back</button>
        <button class="btn btn-gold" onclick="runAnalysis()" id="btnRun" style="font-size:15px;padding:12px 28px">⚡ Run GBODS Analysis</button>
      </div>
    </div>
  </div>

  <!-- ═══════════════════ SCREEN: ANALYSIS ═══════════════════ -->
  <div class="screen" id="screenAnalysis">
    <div class="topbar">
      <div class="topbar-logo">
        <div class="logo-gem"></div>
        <div class="logo-text">GBODS ENGINE</div>
        <div class="logo-version">V5 PRO</div>
      </div>
      <div class="topbar-spacer"></div>
      <div class="topbar-status">
        <div class="status-dot thinking"></div>
        <span id="analysisStatusText">Initializing…</span>
      </div>
      <button class="btn btn-red btn-sm" id="btnAbort" onclick="abortAnalysis()" style="display:none">✕ Abort</button>
    </div>
    <div class="analysis-wrap">
      <div class="analysis-sidebar">
        <div class="analysis-profile-card">
          <div class="apc-title">INTERSECTION</div>
          <div class="apc-row" id="analysisIntersection" style="font-size:12px;color:var(--txt);font-family:'JetBrains Mono',monospace;line-height:1.7"></div>
        </div>
        <div class="stage-indicator">
          <div class="stage-indicator-title">STAGES</div>
          <div id="stageList"></div>
        </div>
        <div class="analysis-profile-card">
          <div class="apc-title">PROFILE</div>
          <div class="apc-row" id="analysisProfile"></div>
        </div>
      </div>
      <div class="analysis-main">
        <div id="thinkingBox" class="card" style="min-height:200px;display:flex;align-items:center;justify-content:center;">
          <div class="analysis-thinking">
            <div class="thinking-spinner"></div>
            <div class="thinking-label" id="thinkingLabel">Preparing analysis…</div>
            <div class="thinking-sub" id="thinkingSub">Building optimized prompt</div>
          </div>
        </div>
        <div class="stream-box" id="streamBox" style="display:none"></div>
      </div>
    </div>
  </div>

  <!-- ═══════════════════ SCREEN: RESULTS ═══════════════════ -->
  <div class="screen" id="screenResults">
    <div class="topbar">
      <div class="topbar-logo">
        <div class="logo-gem"></div>
        <div class="logo-text">GBODS ENGINE</div>
        <div class="logo-version">V5 PRO</div>
      </div>
      <div class="topbar-spacer"></div>
      <div class="topbar-status">
        <div class="status-dot live"></div>
        <span>Analysis Complete</span>
      </div>
      <button class="btn-topbar" onclick="toggleSettings()">⚙</button>
    </div>
    <div class="results-header">
      <div class="results-meta" id="resultsMeta"></div>
    </div>
    <div class="results-body">
      <div class="insight-card" id="topRecCard" style="display:none">
        <div class="top-rec-label">◆ TOP RECOMMENDATION</div>
        <div class="top-rec-title" id="topRecTitle"></div>
        <div class="top-rec-reason" id="topRecReason"></div>
      </div>
      <div class="insight-card" id="systemInsightCard" style="display:none">
        <div class="insight-label">◈ SYSTEM INSIGHT — Meta-Pattern</div>
        <div class="insight-text" id="systemInsightText"></div>
      </div>
      <div class="opp-grid" id="oppGrid"></div>
      <div class="card" id="h72Card" style="display:none">
        <div class="card-title"><span class="card-title-icon">⚡</span> First 72 Hours</div>
        <div class="hours-plan" id="hoursPlan"></div>
      </div>
      <div class="btn-row center" style="margin-top:24px">
        <button class="btn btn-outline" onclick="exportJSON()">↓ JSON</button>
        <button class="btn btn-outline" onclick="exportMarkdown()">↓ Markdown</button>
        <button class="btn btn-ghost" onclick="newAnalysis()">+ New Analysis</button>
      </div>
    </div>
  </div>

  <button class="history-btn" onclick="toggleHistory()" id="historyFab" style="display:none">⊡</button>
  <div class="kbd-hint"><kbd class="kbd">S</kbd> settings · <kbd class="kbd">H</kbd> history · <kbd class="kbd">Esc</kbd> close</div>
  <div class="toast" id="toast"></div>
</div>

<!-- Module load order matters -->
<script src="js/data.js"></script>
<script src="js/utils.js"></script>
<script src="js/radar.js"></script>
<script src="js/history.js"></script>
<script src="js/export.js"></script>
<script src="js/ui.js"></script>
<script src="js/engine.js"></script>
<script src="js/app.js"></script>
</body>
</html>
```

---

## Summary: Complete File Manifest

| # | File | Purpose | Lines |
|---|------|---------|-------|
| 1 | `README.md` | Project documentation | ~180 |
| 2 | `LICENSE` | MIT License | ~21 |
| 3 | `CHANGELOG.md` | Version history | ~45 |
| 4 | `CONTRIBUTING.md` | Contribution guide | ~45 |
| 5 | `.github/workflows/deploy.yml` | GitHub Pages CI/CD | ~28 |
| 6 | `.github/ISSUE_TEMPLATE/bug_report.md` | Bug template | ~25 |
| 7 | `.github/ISSUE_TEMPLATE/feature_request.md` | Feature template | ~20 |
| 8 | `.gitignore` | Git exclusions | ~18 |
| 9 | `package.json` | Project metadata | ~22 |
| 10 | `docs/ARCHITECTURE.md` | System architecture | ~70 |
| 11 | `docs/API_GUIDE.md` | API integration docs | ~55 |
| 12 | `docs/METHODOLOGY.md` | 8-stage methodology | ~75 |
| 13 | `src/assets/favicon.svg` | Gem icon | ~6 |
| 14 | `src/css/engine.css` | Complete design system | ~650 |
| 15 | `src/js/data.js` | Static configuration | ~55 |
| 16 | `src/js/utils.js` | Shared helpers | ~30 |
| 17 | `src/js/radar.js` | SVG radar chart | ~50 |
| 18 | `src/js/history.js` | LocalStorage history | ~55 |
| 19 | `src/js/export.js` | JSON + Markdown export | ~75 |
| 20 | `src/js/engine.js` | Core analysis engine | ~350 |
| 21 | `src/js/ui.js` | DOM rendering | ~300 |
| 22 | `src/js/app.js` | App controller + state | ~200 |
| 23 | `src/index.html` | Entry point HTML | ~200 |
| | **TOTAL** | | **~2,575** |
