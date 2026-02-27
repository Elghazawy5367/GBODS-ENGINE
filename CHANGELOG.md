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
