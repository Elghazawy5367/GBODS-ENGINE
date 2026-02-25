// ─────────────────────────────────────────────────────────────────────────────
// GBODS API Proxy — Vercel Serverless Function
// api/analyze.ts
//
// This function runs server-side on Vercel.
// The Anthropic API key is stored in Vercel environment variables and
// NEVER sent to the browser.
//
// Called from useGBODS.ts as POST /api/analyze
// ─────────────────────────────────────────────────────────────────────────────

import type { VercelRequest, VercelResponse } from '@vercel/node';

const ANTHROPIC_API = 'https://api.anthropic.com/v1/messages';
const MODEL         = 'claude-sonnet-4-20250514';
const MAX_TOKENS    = 4000;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(500).json({
      error: 'ANTHROPIC_API_KEY environment variable is not set. See README for setup.',
    });
  }

  const { prompt } = req.body as { prompt?: string };
  if (!prompt || typeof prompt !== 'string') {
    return res.status(400).json({ error: 'Missing or invalid prompt in request body.' });
  }

  try {
    const upstream = await fetch(ANTHROPIC_API, {
      method:  'POST',
      headers: {
        'Content-Type':  'application/json',
        'x-api-key':     apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model:      MODEL,
        max_tokens: MAX_TOKENS,
        messages:   [{ role: 'user', content: prompt }],
      }),
    });

    const data = await upstream.json() as { error?: { message?: string }; [key: string]: unknown };

    if (!upstream.ok) {
      return res.status(upstream.status).json({
        error: data?.error?.message ?? `Anthropic API error: ${upstream.status}`,
      });
    }

    return res.status(200).json(data);

  } catch (err) {
    console.error('[GBODS API] Upstream error:', err);
    return res.status(500).json({
      error: `Server error: ${(err as Error).message}`,
    });
  }
}
