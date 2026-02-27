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
