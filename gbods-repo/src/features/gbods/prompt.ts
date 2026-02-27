// ─────────────────────────────────────────────────────────────────────────────
// GBODS Engine — Prompt Builder
// src/features/gbods/prompt.ts
// ─────────────────────────────────────────────────────────────────────────────

import type { GBODSProfile } from './types';
import { GBODS_LENSES } from './constants';

export function buildGBODSPrompt(
  profile: GBODSProfile,
  niches: string[],
  selectedLensIds: string[],
): string {
  const validNiches = niches.filter((n) => n.trim());

  const lensNames = selectedLensIds
    .map((id) => GBODS_LENSES.find((l) => l.id === id)?.name ?? id)
    .join(', ');

  const nicheBlock = validNiches
    .map((n, i) => `V${i + 1}: ${n}`)
    .join('\n');

  return [
    'You are a GBODS analyst. Generate exactly 5 blue ocean product opportunities',
    'by applying all 8 GBODS stages to the niche intersections below.',
    'Filter every result strictly through the user profile —',
    'no coding required, no team, no SaaS, no budget beyond stated, solo-executable, passive digital delivery.',
    '',
    '═══ USER PROFILE ═══',
    `Role: ${profile.role}`,
    `Income Goal: ${profile.incomeGoal}`,
    `Days to Revenue: ${profile.timeline}`,
    `Weekly Hours: ${profile.weeklyHours}h`,
    `Budget: ${profile.budget}`,
    `Technical Skills: ${profile.technicalSkills}`,
    `Hard Constraints: ${profile.constraints}`,
    '',
    '═══ NICHE VECTORS ═══',
    nicheBlock,
    `LENSES: ${lensNames || 'None'}`,
    '',
    '═══ GBODS 8 STAGES — apply all 8 to every opportunity ═══',
    '1 LOCATE       — unnamed compounding pain ONLY visible at the niche intersection; invisible to any single-domain expert',
    '2 DIAGNOSE     — (TRIZ) what every existing solution improves that simultaneously makes the core pain WORSE',
    '3 SPECIFY      — (JTBD) the actual job: maximum importance + minimum current satisfaction',
    '4 EXPAND       — (Six Paths) adjacent industry that partially solves this + specific mechanic to borrow',
    '5 EXCAVATE     — (Constraint Theory) single blocking assumption that, when dissolved, unlocks the entire space',
    '6 ARCHITECT    — (Value Network) current broken flow vs rerouted flow with this product — one sentence each',
    '7 TIME         — (Emergence) 2-3 specific convergences happening RIGHT NOW; window urgency score 1-10',
    '8 LEVERAGE     — (Systems Thinking) paradigm statement that makes generic competition completely irrelevant',
    '',
    'Respond with ONLY a valid JSON object.',
    'Begin your response with { and end with }.',
    'No markdown fences, no explanation text, nothing outside the JSON.',
    '',
    `{
  "opportunities": [
    {
      "rank": 1,
      "title": "product name",
      "tagline": "one sentence the target person immediately says YES to",
      "identity": "hyper-specific person experiencing this exact pain",
      "intersection": "V1 x V2 + Lens",
      "namedPain": "coined 2-4 word label for this pain",
      "contradiction": "better X makes Y worse — why every solution structurally fails",
      "realJob": "what they actually need to accomplish, not what they say they want",
      "blockingAssumption": "the single false belief that, dissolved, unlocks the space",
      "currentFlow": "current broken value flow — one sentence",
      "reroutedFlow": "rerouted value flow with this product — one sentence",
      "adjacentBorrow": "adjacent industry name + specific mechanic to borrow",
      "convergingSignals": "2-3 specific signals converging right now",
      "paradigmStatement": "frame-shifting sentence that makes generic competition irrelevant",
      "productDescription": "exactly what it contains and does — 2-3 specific sentences",
      "format": "PDF Guide",
      "priceRange": "$47-$67",
      "buildTimeHours": 5,
      "daysToFirstDollar": 7,
      "distributionChannels": ["channel 1", "channel 2", "channel 3"],
      "soloViabilityScore": 85,
      "effortToIncomeScore": 78,
      "windowUrgency": 8,
      "gbodsScore": 84,
      "quickWinFlag": true,
      "whyNowReason": "specific convergence making this urgent right now, not generic urgency"
    }
  ],
  "topRecommendation": "Execute X first because Y",
  "systemInsight": "meta-pattern connecting all 5 opportunities in 2 sentences"
}`,
    '',
    'Rules:',
    '- Exactly 5 opportunities ordered by gbodsScore descending',
    '- gbodsScore, soloViabilityScore, effortToIncomeScore are integers 0-100',
    '- windowUrgency is integer 1-10',
    '- buildTimeHours and daysToFirstDollar are plain integers',
    '- format must be one of: PDF Guide | Notion System | Script Library | Prompt Pack | Worksheet Bundle | Email Course | Template Pack | Checklist System',
    '- distributionChannels is always an array of exactly 3 strings',
    '- quickWinFlag is boolean (true if daysToFirstDollar ≤ 7)',
  ].join('\n');
}

// ── JSON extraction with repair pass ─────────────────────────────────────────

export function extractJSON(raw: string): unknown {
  const start = raw.indexOf('{');
  const end = raw.lastIndexOf('}');

  if (start < 0 || end <= start) {
    throw new Error(
      `No JSON object found in response. Preview: "${raw.slice(0, 120)}"`
    );
  }

  const str = raw.slice(start, end + 1);

  try {
    return JSON.parse(str);
  } catch {
    // Repair pass: trailing commas
    const repaired = str.replace(/,(\s*[}\]])/g, '$1');
    try {
      return JSON.parse(repaired);
    } catch (e2) {
      throw new Error(
        `JSON parse failed after repair attempt: ${(e2 as Error).message}`
      );
    }
  }
}
