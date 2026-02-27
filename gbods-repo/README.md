# GBODS Engine v4

**Goldmine Blue Ocean Discovery System**

8-stage intersection methodology for finding unnamed, unserved pain at the collision of niches —
applied through TRIZ, JTBD, Six Paths, Constraint Theory, Value Network, Emergence, Systems Thinking, and Paradigm Shift.

Private personal tool. Not a SaaS.

---

## Stack

- **React 18** + **TypeScript** + **Vite 5**
- **Vercel Serverless Function** — API proxy (keeps key server-side)
- **Zero UI dependencies** — inline styles only, nothing to conflict with future merge targets

---

## Project Structure

```
gbods-engine/
├── api/
│   └── analyze.ts              ← Vercel serverless function (API proxy)
├── src/
│   ├── features/
│   │   └── gbods/
│   │       ├── index.ts        ← barrel export
│   │       ├── types.ts        ← TypeScript interfaces
│   │       ├── constants.ts    ← lenses, stage config
│   │       ├── prompt.ts       ← buildGBODSPrompt() + extractJSON()
│   │       ├── useGBODS.ts     ← custom hook: all state + API logic
│   │       └── GBODSEngine.tsx ← complete UI, all screens
│   ├── App.tsx
│   └── main.tsx
├── public/
│   └── favicon.svg
├── .env.example
├── vercel.json
├── firebase.json
└── vite.config.ts
```

---

## Option A — Deploy to Vercel (Recommended, 3 minutes)

### 1. Push repo to GitHub

```bash
git init
git add .
git commit -m "GBODS Engine v4 — initial"
git remote add origin https://github.com/YOUR_USERNAME/gbods-engine.git
git push -u origin main
```

### 2. Import to Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your GitHub repo
3. Framework: **Vite** (auto-detected)
4. Build command: `npm run build`
5. Output directory: `dist`

### 3. Add your API key

In Vercel dashboard → **Project → Settings → Environment Variables**:

| Name | Value |
|------|-------|
| `ANTHROPIC_API_KEY` | `sk-ant-api03-...` |

Set for: **Production**, **Preview**, **Development**

### 4. Deploy

Click **Deploy**. Your GBODS instance is live at `https://your-project.vercel.app`

---

## Option B — Google IDX

1. Go to [idx.google.com](https://idx.google.com)
2. Create workspace from GitHub URL
3. IDX auto-runs `npm install` and `npm run dev` via `.idx/dev.nix`
4. Add `ANTHROPIC_API_KEY` in workspace secrets
5. Use the Preview panel to open the running app

> For IDX local dev, the Vite proxy in `vite.config.ts` forwards `/api/*` to port 3000.
> Run `vercel dev` in a second terminal to serve the API function locally.

---

## Option C — Firebase Studio

### Deploy frontend only (no serverless function)

If using Firebase Hosting without Cloud Functions, you need to handle the API call differently.
See the "Firebase without serverless" section below.

### With Firebase + Cloud Functions (full parity with Vercel)

```bash
npm install -g firebase-tools
firebase login
firebase init hosting functions
npm run build
firebase deploy
```

Configure the Cloud Function equivalent of `api/analyze.ts` using the Firebase Functions SDK.

### Firebase Hosting only (simpler, less secure)

If you don't want Cloud Functions, remove the proxy pattern and call Anthropic directly from the browser.
This exposes your API key in network requests — acceptable for a private personal tool on a secured URL.

In `src/features/gbods/useGBODS.ts`, change the fetch call:

```ts
// Replace:
const response = await fetch('/api/analyze', { ... body: JSON.stringify({ prompt }) });

// With direct browser call (only for personal/private use):
const response = await fetch('https://api.anthropic.com/v1/messages', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 4000,
    messages: [{ role: 'user', content: buildGBODSPrompt(profile, niches, selectedLenses) }],
  }),
});
```

---

## Local Development

```bash
# Clone
git clone https://github.com/YOUR_USERNAME/gbods-engine.git
cd gbods-engine

# Install
npm install

# Set up env
cp .env.example .env.local
# Edit .env.local and add your ANTHROPIC_API_KEY

# Start (requires Vercel CLI for the API function)
npm install -g vercel
vercel dev

# OR — Vite only (API calls will 404 without the proxy)
npm run dev
```

---

## GBODS 8-Stage Methodology

| Stage | Name | What it finds |
|-------|------|---------------|
| 1 | **LOCATE** | Unnamed compounding pain only at the intersection |
| 2 | **DIAGNOSE** | TRIZ contradiction — what every solution improves that makes pain worse |
| 3 | **SPECIFY** | Real job-to-be-done — max importance, min current satisfaction |
| 4 | **EXPAND** | Six Paths — adjacent industry mechanic to borrow |
| 5 | **EXCAVATE** | Single blocking assumption to dissolve |
| 6 | **ARCHITECT** | Current broken flow vs rerouted flow with this product |
| 7 | **TIME** | Converging signals + window urgency 1-10 |
| 8 | **LEVERAGE** | Paradigm statement making generic competition irrelevant |

---

## Merging into Council-Git-V9

When ready:

1. Copy `src/features/gbods/` → Council's `src/features/gbods/`
2. In Council's router, add: `<Route path="/gbods" element={<GBODSEngine />} />`
3. Move `api/analyze.ts` → Council's `api/analyze.ts` (or merge if one exists)
4. Add nav link in Council's sidebar
5. Wire Council's Scout signal outputs as GBODS niche pre-fills (optional future step)

The feature is fully self-contained — no Council code needs to change.

---

## Iteration Roadmap

Track iterations in this repo before merging:

- [ ] V4.1 — Pre-fill niches from URL params (`?v1=ADHD+freelancers&v2=Etsy+sellers`)
- [ ] V4.2 — Compare two analyses side-by-side
- [ ] V4.3 — Editable opportunity cards (annotate results)
- [ ] V4.4 — Signal input from Council's Scout/Mining Drill outputs
- [ ] V4.5 — Batch mode (run 3 niche combinations sequentially)
