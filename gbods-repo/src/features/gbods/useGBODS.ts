// ─────────────────────────────────────────────────────────────────────────────
// GBODS Engine — Custom Hook (all state + logic, zero UI)
// src/features/gbods/useGBODS.ts
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useRef, useCallback, useEffect } from 'react';
import type {
  GBODSView,
  GBODSProfile,
  GBODSResult,
  GBODSState,
  HistoryEntry,
} from './types';
import { DEFAULT_PROFILE } from './types';
import {
  STAGE_MESSAGES,
  HISTORY_STORAGE_KEY,
  MAX_HISTORY_ENTRIES,
  STAGE_INTERVAL_MS,
  MAX_NICHES,
  MIN_NICHES,
  GBODS_LENSES,
} from './constants';
import { buildGBODSPrompt, extractJSON } from './prompt';

// ── History persistence ───────────────────────────────────────────────────────

function loadHistory(): HistoryEntry[] {
  try {
    const raw = localStorage.getItem(HISTORY_STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as HistoryEntry[];
  } catch {
    return [];
  }
}

function persistHistory(entries: HistoryEntry[]): void {
  try {
    localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(entries));
  } catch {
    // storage full or unavailable — fail silently
  }
}

// ── Utilities ─────────────────────────────────────────────────────────────────

function clamp(value: unknown, lo: number, hi: number): number {
  const n = Number(value);
  if (isNaN(n)) return lo;
  return Math.min(hi, Math.max(lo, n));
}

function downloadBlob(content: string, filename: string, mime: string): void {
  const blob = new Blob([content], { type: mime });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

function resultToMarkdown(result: GBODSResult): string {
  const ts    = new Date().toLocaleString();
  const lines = [
    '# GBODS Analysis Report',
    '',
    `Generated: ${ts}`,
    '',
  ];

  if (result.systemInsight) {
    lines.push('## System Insight', '', result.systemInsight, '');
  }
  if (result.topRecommendation) {
    lines.push('## ✦ Top Recommendation', '', result.topRecommendation, '');
  }

  lines.push('## Opportunities', '');

  for (const o of result.opportunities) {
    lines.push(
      `### #${o.rank}: ${o.title}`,
      '',
      `**GBODS:** ${o.gbodsScore} | **Solo:** ${o.soloViabilityScore} | **ROI:** ${o.effortToIncomeScore}`,
      `**Price:** ${o.priceRange} | **Build:** ${o.buildTimeHours}h | **Format:** ${o.format}`,
      '',
      `> ${o.tagline}`,
      '',
      `**Named Pain:** "${o.namedPain}"`,
      `**Target:** ${o.identity}`,
      `**TRIZ Contradiction:** ${o.contradiction}`,
      `**Real Job (JTBD):** ${o.realJob}`,
      `**Blocking Assumption:** ${o.blockingAssumption}`,
      `**Current Flow:** ${o.currentFlow}`,
      `**Rerouted Flow:** ${o.reroutedFlow}`,
      `**Adjacent Borrow:** ${o.adjacentBorrow}`,
      `**Converging Signals:** ${o.convergingSignals}`,
      `**Why Now:** ${o.whyNowReason}`,
      '',
      `**Product:** ${o.productDescription}`,
      '',
      `**Paradigm Statement:** *"${o.paradigmStatement}"*`,
      '',
      `**Distribution:** ${(o.distributionChannels ?? []).join(' · ')}`,
      `**Window Urgency:** ${o.windowUrgency}/10`,
      '',
      '---',
      '',
    );
  }

  return lines.join('\n');
}

// ─────────────────────────────────────────────────────────────────────────────
// THE HOOK
// ─────────────────────────────────────────────────────────────────────────────

export function useGBODS(): GBODSState {

  // ── View ──────────────────────────────────────────────────────────────────
  const [view, setView] = useState<GBODSView>('welcome');

  // ── Profile ───────────────────────────────────────────────────────────────
  const [profile, setProfile] = useState<GBODSProfile>({ ...DEFAULT_PROFILE });

  const updateProfile = useCallback(
    (key: keyof GBODSProfile, value: string) =>
      setProfile((prev) => ({ ...prev, [key]: value })),
    [],
  );

  // ── Niches ────────────────────────────────────────────────────────────────
  const [niches, setNiches] = useState<string[]>(['', '']);

  const validNiches = niches.filter((n) => n.trim().length > 0);

  const addNiche = useCallback(() => {
    setNiches((prev) => (prev.length < MAX_NICHES ? [...prev, ''] : prev));
  }, []);

  const removeNiche = useCallback((index: number) => {
    setNiches((prev) =>
      prev.length > MIN_NICHES ? prev.filter((_, i) => i !== index) : prev,
    );
  }, []);

  const updateNiche = useCallback((index: number, value: string) => {
    setNiches((prev) => {
      const next = [...prev];
      next[index] = value;
      return next;
    });
  }, []);

  // ── Lenses ────────────────────────────────────────────────────────────────
  const [selectedLenses, setSelectedLenses] = useState<string[]>([]);

  const toggleLens = useCallback((id: string) => {
    setSelectedLenses((prev) =>
      prev.includes(id) ? prev.filter((l) => l !== id) : [...prev, id],
    );
  }, []);

  // ── Loading animation ─────────────────────────────────────────────────────
  const [stageIndex, setStageIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAnimation = useCallback(() => {
    setStageIndex(0);
    intervalRef.current = setInterval(() => {
      setStageIndex((prev) => (prev + 1) % STAGE_MESSAGES.length);
    }, STAGE_INTERVAL_MS);
  }, []);

  const stopAnimation = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => () => stopAnimation(), [stopAnimation]);

  // ── Results ───────────────────────────────────────────────────────────────
  const [result, setResult]           = useState<GBODSResult | null>(null);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleCard = useCallback((index: number) => {
    setExpandedCard((prev) => (prev === index ? null : index));
  }, []);

  // ── Error ─────────────────────────────────────────────────────────────────
  const [errorMessage, setErrorMessage] = useState('');

  // ── History ───────────────────────────────────────────────────────────────
  const [history, setHistory] = useState<HistoryEntry[]>(loadHistory);

  const saveToHistory = useCallback(
    (data: GBODSResult, currentNiches: string[], currentLenses: string[]) => {
      const nichesSummary = currentNiches
        .filter((n) => n.trim())
        .slice(0, 3)
        .join(' × ');

      const lensesSummary = currentLenses
        .map((id) => GBODS_LENSES.find((l) => l.id === id)?.name ?? id)
        .join(', ');

      const entry: HistoryEntry = {
        id:               Date.now(),
        timestamp:        new Date().toLocaleString(),
        nichesSummary,
        lensesSummary,
        topScore:         data.opportunities[0]?.gbodsScore ?? 0,
        opportunityCount: data.opportunities.length,
        result:           data,
      };

      setHistory((prev) => {
        const next = [entry, ...prev].slice(0, MAX_HISTORY_ENTRIES);
        persistHistory(next);
        return next;
      });
    },
    [],
  );

  const loadFromHistory = useCallback((entry: HistoryEntry) => {
    setResult(entry.result);
    setExpandedCard(null);
    setView('results');
  }, []);

  const clearHistory = useCallback(() => {
    setHistory([]);
    localStorage.removeItem(HISTORY_STORAGE_KEY);
  }, []);

  // ── Run analysis ──────────────────────────────────────────────────────────
  //
  // Calls the Vercel serverless proxy at /api/analyze.
  // The proxy injects the ANTHROPIC_API_KEY from environment variables.
  // The API key is NEVER stored or transmitted client-side.
  //
  const runAnalysis = useCallback(async () => {
    if (validNiches.length < MIN_NICHES) {
      setErrorMessage('Please enter at least 2 niche vectors before running.');
      setView('error');
      return;
    }

    setErrorMessage('');
    setResult(null);
    setExpandedCard(null);
    setView('loading');
    startAnimation();

    try {
      const response = await fetch('/api/analyze', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({
          prompt: buildGBODSPrompt(profile, niches, selectedLenses),
        }),
      });

      const data = await response.json();

      if (!response.ok || data.error) {
        throw new Error(
          data.error ??
          `API error ${response.status}: ${JSON.stringify(data).slice(0, 200)}`
        );
      }

      const rawText: string = (data.content ?? [])
        .filter((c: { type: string }) => c.type === 'text')
        .map((c: { text: string }) => c.text)
        .join('');

      if (!rawText.trim()) {
        throw new Error('Empty response. Please retry.');
      }

      const parsed = extractJSON(rawText) as GBODSResult;

      if (!Array.isArray(parsed?.opportunities) || parsed.opportunities.length === 0) {
        throw new Error('Response contained no opportunities. Try more specific niches.');
      }

      // Clamp all numeric fields for safety
      const safeResult: GBODSResult = {
        ...parsed,
        opportunities: parsed.opportunities.map((o) => ({
          ...o,
          gbodsScore:           clamp(o.gbodsScore, 0, 100),
          soloViabilityScore:   clamp(o.soloViabilityScore, 0, 100),
          effortToIncomeScore:  clamp(o.effortToIncomeScore, 0, 100),
          windowUrgency:        clamp(o.windowUrgency, 0, 10),
          buildTimeHours:       Math.max(1, Math.round(Number(o.buildTimeHours) || 1)),
          daysToFirstDollar:    Math.max(1, Math.round(Number(o.daysToFirstDollar) || 1)),
          distributionChannels: Array.isArray(o.distributionChannels)
            ? o.distributionChannels
            : [],
        })),
      };

      stopAnimation();
      setResult(safeResult);
      saveToHistory(safeResult, niches, selectedLenses);
      setView('results');

    } catch (err) {
      stopAnimation();
      setErrorMessage((err as Error).message ?? String(err));
      setView('error');
    }
  }, [
    profile,
    niches,
    selectedLenses,
    validNiches.length,
    startAnimation,
    stopAnimation,
    saveToHistory,
  ]);

  // ── Cancel ────────────────────────────────────────────────────────────────
  const cancelAnalysis = useCallback(() => {
    stopAnimation();
    setView('lenses');
  }, [stopAnimation]);

  // ── Export ────────────────────────────────────────────────────────────────
  const exportJSON = useCallback(() => {
    if (!result) return;
    downloadBlob(
      JSON.stringify(result, null, 2),
      `gbods-analysis-${Date.now()}.json`,
      'application/json',
    );
  }, [result]);

  const exportMarkdown = useCallback(() => {
    if (!result) return;
    downloadBlob(
      resultToMarkdown(result),
      `gbods-report-${Date.now()}.md`,
      'text/markdown',
    );
  }, [result]);

  // ── Reset ─────────────────────────────────────────────────────────────────
  const reset = useCallback(() => {
    setProfile({ ...DEFAULT_PROFILE });
    setNiches(['', '']);
    setSelectedLenses([]);
    setResult(null);
    setExpandedCard(null);
    setErrorMessage('');
    setView('profile');
  }, []);

  return {
    view, setView,
    profile, updateProfile,
    niches, addNiche, removeNiche, updateNiche, validNiches,
    selectedLenses, toggleLens,
    stageIndex,
    result, expandedCard, toggleCard,
    errorMessage,
    history, loadFromHistory, clearHistory,
    runAnalysis, cancelAnalysis,
    exportJSON, exportMarkdown,
    reset,
  };
}
