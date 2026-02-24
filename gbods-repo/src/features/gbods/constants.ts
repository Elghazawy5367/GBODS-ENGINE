// ─────────────────────────────────────────────────────────────────────────────
// GBODS Engine — Constants
// src/features/gbods/constants.ts
// ─────────────────────────────────────────────────────────────────────────────

import type { GBODSLens } from './types';

export const GBODS_LENSES: GBODSLens[] = [
  { id: 'financial',     name: 'Financial',       description: 'Profit automation, fee-trauma, financial time blindness' },
  { id: 'healthcare',    name: 'Healthcare',       description: 'Trauma-informed systems, somatic regulation' },
  { id: 'legal',         name: 'Legal',            description: 'IP protection, copycat defense, compliance' },
  { id: 'technology',    name: 'Technology',       description: 'No-code automation, AI augmentation' },
  { id: 'education',     name: 'Education',        description: 'Pedagogical frameworks, curriculum design' },
  { id: 'creator',       name: 'Creator Economy',  description: 'Content systems, audience building, licensing' },
  { id: 'community',     name: 'Community',        description: 'Network effects, peer accountability' },
  { id: 'ai',            name: 'AI / Automation',  description: 'Intelligent workflows, prompt engineering' },
  { id: 'productivity',  name: 'Productivity',     description: 'Executive function support, energy management' },
  { id: 'entertainment', name: 'Entertainment',    description: 'Gamification, engagement mechanics' },
];

export const STAGE_MESSAGES: string[] = [
  'Stage 1 · Locating intersection cells…',
  'Stage 2 · Mapping TRIZ contradictions…',
  'Stage 3 · Specifying jobs-to-be-done…',
  'Stage 4 · Expanding via Six Paths…',
  'Stage 5 · Excavating blocking assumptions…',
  'Stage 6 · Architecting value flows…',
  'Stage 7 · Timing convergence windows…',
  'Stage 8 · Finding leverage points…',
  'Scoring and ranking opportunities…',
];

export const STAGE_PILL_LABELS: string[] = [
  'LOCATE', 'DIAGNOSE', 'SPECIFY', 'EXPAND',
  'EXCAVATE', 'ARCHITECT', 'TIME', 'LEVERAGE',
];

export const NICHE_PLACEHOLDERS: string[] = [
  'e.g. ADHD freelance designers on Upwork/Fiverr',
  'e.g. Etsy digital template sellers',
  'e.g. Online course creators under 500 students',
  'e.g. Solo Shopify store owners',
  'e.g. Burnout recovery coaches or therapists',
];

export const PRODUCT_FORMATS: string[] = [
  'PDF Guide', 'Notion System', 'Script Library', 'Prompt Pack',
  'Worksheet Bundle', 'Email Course', 'Template Pack', 'Checklist System',
];

export const HISTORY_STORAGE_KEY = 'gbods_v4_history';
export const MAX_HISTORY_ENTRIES = 15;
export const STAGE_INTERVAL_MS = 2200;
export const MAX_NICHES = 5;
export const MIN_NICHES = 2;
