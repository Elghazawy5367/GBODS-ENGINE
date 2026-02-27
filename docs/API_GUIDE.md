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
