// ─────────────────────────────────────────────────────────────────────────────
// GBODS Engine — Type Definitions
// src/features/gbods/types.ts
// ─────────────────────────────────────────────────────────────────────────────

export type GBODSView =
  | 'welcome'
  | 'profile'
  | 'niches'
  | 'lenses'
  | 'loading'
  | 'results'
  | 'history'
  | 'error';

export type ProductFormat =
  | 'PDF Guide'
  | 'Notion System'
  | 'Script Library'
  | 'Prompt Pack'
  | 'Worksheet Bundle'
  | 'Email Course'
  | 'Template Pack'
  | 'Checklist System';

// ── User Profile ──────────────────────────────────────────────────────────────

export interface GBODSProfile {
  role: string;
  incomeGoal: string;
  timeline: string;
  weeklyHours: string;
  budget: string;
  technicalSkills: string;
  constraints: string;
}

export const DEFAULT_PROFILE: GBODSProfile = {
  role: 'Solo non-technical founder',
  incomeGoal: '$2,000–$5,000/month',
  timeline: '7',
  weeklyHours: '20',
  budget: '$0–$100',
  technicalSkills: 'None — no coding',
  constraints: 'No team, no SaaS builds, passive digital delivery only',
};

// ── Lens ──────────────────────────────────────────────────────────────────────

export interface GBODSLens {
  id: string;
  name: string;
  description: string;
}

// ── Opportunity (single item in results) ─────────────────────────────────────

export interface GBODSOpportunity {
  rank: number;
  title: string;
  tagline: string;
  identity: string;
  intersection: string;
  namedPain: string;
  contradiction: string;
  realJob: string;
  blockingAssumption: string;
  currentFlow: string;
  reroutedFlow: string;
  adjacentBorrow: string;
  convergingSignals: string;
  paradigmStatement: string;
  productDescription: string;
  format: ProductFormat | string;
  priceRange: string;
  buildTimeHours: number;
  daysToFirstDollar: number;
  distributionChannels: string[];
  soloViabilityScore: number;
  effortToIncomeScore: number;
  windowUrgency: number;
  gbodsScore: number;
  quickWinFlag: boolean;
  whyNowReason: string;
}

// ── Full analysis result ──────────────────────────────────────────────────────

export interface GBODSResult {
  opportunities: GBODSOpportunity[];
  topRecommendation: string;
  systemInsight: string;
}

// ── Session history entry ─────────────────────────────────────────────────────

export interface HistoryEntry {
  id: number;
  timestamp: string;
  nichesSummary: string;       // "V1 × V2"
  lensesSummary: string;       // "Financial, Legal"
  topScore: number;
  opportunityCount: number;
  result: GBODSResult;
}

// ── Hook return type ──────────────────────────────────────────────────────────

export interface GBODSState {
  // navigation
  view: GBODSView;
  setView: (v: GBODSView) => void;

  // profile
  profile: GBODSProfile;
  updateProfile: (key: keyof GBODSProfile, value: string) => void;

  // niches
  niches: string[];
  addNiche: () => void;
  removeNiche: (index: number) => void;
  updateNiche: (index: number, value: string) => void;
  validNiches: string[];

  // lenses
  selectedLenses: string[];
  toggleLens: (id: string) => void;

  // loading
  stageIndex: number;

  // results
  result: GBODSResult | null;
  expandedCard: number | null;
  toggleCard: (index: number) => void;

  // error
  errorMessage: string;

  // history
  history: HistoryEntry[];
  loadFromHistory: (entry: HistoryEntry) => void;
  clearHistory: () => void;

  // actions
  runAnalysis: () => void;
  cancelAnalysis: () => void;
  exportJSON: () => void;
  exportMarkdown: () => void;
  reset: () => void;
}
