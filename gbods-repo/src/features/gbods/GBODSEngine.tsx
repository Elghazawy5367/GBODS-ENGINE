// ─────────────────────────────────────────────────────────────────────────────
// GBODS Engine v4 — Main Component
// src/features/gbods/GBODSEngine.tsx
//
// Drop-in isolated feature for Council-Git-V9.
// Zero external dependencies beyond React.
// Uses inline styles throughout so it never conflicts with Council's
// Tailwind/shadcn styles.
// ─────────────────────────────────────────────────────────────────────────────

import React, { CSSProperties, FC, ReactNode } from 'react';
import { useGBODS } from './useGBODS';
import {
  GBODS_LENSES,
  STAGE_MESSAGES,
  STAGE_PILL_LABELS,
  NICHE_PLACEHOLDERS,
  MAX_NICHES,
  MIN_NICHES,
} from './constants';
import type { GBODSOpportunity, GBODSProfile, GBODSResult, HistoryEntry } from './types';

// ─────────────────────────────────────────────────────────────────────────────
// DESIGN TOKENS  (isolated from Council's theme)
// ─────────────────────────────────────────────────────────────────────────────

const T = {
  bg:     '#0a0a0f',
  s1:     '#12121a',
  s2:     '#1a1a25',
  b1:     '#1e1e2e',
  b2:     '#2a2a3a',
  b3:     '#3a3a50',
  tx:     '#e2e8f0',
  m:      '#94a3b8',
  dim:    '#64748b',
  gold:   '#f5a623',
  green:  '#10b981',
  blue:   '#3b82f6',
  purple: '#8b5cf6',
  red:    '#ef4444',
  // alpha helpers
  ga: (a: number) => `rgba(245,166,35,${a})`,
  gr: (a: number) => `rgba(16,185,129,${a})`,
  re: (a: number) => `rgba(239,68,68,${a})`,
} as const;

const FONT = "'JetBrains Mono','Fira Code','Courier New',monospace";

function scoreColor(v: number): string {
  if (v >= 80) return T.gold;
  if (v >= 60) return T.green;
  return T.dim;
}

// ─────────────────────────────────────────────────────────────────────────────
// PRIMITIVE COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────

const css = (style: CSSProperties): CSSProperties => style;

const GLabel: FC<{ children: ReactNode; color?: string }> = ({ children, color }) => (
  <div style={css({
    fontSize: 8, letterSpacing: '0.18em', textTransform: 'uppercase',
    color: color ?? T.gold, marginBottom: 5,
  })}>
    {children}
  </div>
);

const GRule: FC<{ label: string }> = ({ label }) => (
  <div style={css({ display: 'flex', alignItems: 'center', gap: 10, margin: '22px 0 14px' })}>
    <span style={{ fontSize: 8, color: T.gold, letterSpacing: '0.2em', textTransform: 'uppercase', whiteSpace: 'nowrap', flexShrink: 0 }}>
      {label}
    </span>
    <div style={{ flex: 1, height: 1, background: `linear-gradient(to right,${T.b2},transparent)` }} />
  </div>
);

interface GInputProps {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: 'text' | 'number';
  style?: CSSProperties;
}
const GInput: FC<GInputProps> = ({ value, onChange, placeholder, type = 'text', style }) => (
  <input
    type={type}
    value={value}
    onChange={(e) => onChange(e.target.value)}
    placeholder={placeholder ?? ''}
    style={css({
      width: '100%', background: T.s2, border: `1px solid ${T.b2}`,
      borderRadius: 6, padding: '9px 13px', color: T.tx,
      fontSize: 12, fontFamily: FONT, outline: 'none',
      boxSizing: 'border-box', ...style,
    })}
    onFocus={(e) => { e.target.style.borderColor = T.gold; }}
    onBlur={(e)  => { e.target.style.borderColor = T.b2;   }}
  />
);

interface GBtnProps {
  children: ReactNode;
  onClick: () => void;
  variant?: 'gold' | 'ghost' | 'danger';
  size?: 'sm' | 'md';
  style?: CSSProperties;
}
const GBtn: FC<GBtnProps> = ({ children, onClick, variant = 'gold', size = 'md', style }) => {
  const base: CSSProperties = {
    display: 'inline-flex', alignItems: 'center', gap: 6,
    border: 'none', borderRadius: 6,
    fontFamily: FONT, cursor: 'pointer',
    transition: 'opacity 0.15s', whiteSpace: 'nowrap',
  };
  const variants: Record<string, CSSProperties> = {
    gold:  { background: `linear-gradient(135deg,${T.gold},#d97706)`, color: '#000', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' },
    ghost: { background: 'none', border: `1px solid ${T.b2}`, color: T.dim, fontWeight: 600 },
    danger:{ background: T.red, color: '#fff', fontWeight: 700 },
  };
  const sizes: Record<string, CSSProperties> = {
    sm: { fontSize: 10, padding: '6px 14px' },
    md: { fontSize: 11, padding: '10px 22px' },
  };
  return (
    <button
      onClick={onClick}
      style={{ ...base, ...variants[variant], ...sizes[size], ...style }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.opacity = '0.72'; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.opacity = '1'; }}
    >
      {children}
    </button>
  );
};

const GCard: FC<{ children: ReactNode; style?: CSSProperties }> = ({ children, style }) => (
  <div style={css({
    background: T.s1, border: `1px solid ${T.b2}`,
    borderRadius: 10, padding: 20, marginBottom: 10, ...style,
  })}>
    {children}
  </div>
);

const GNavRow: FC<{
  onBack?: () => void;
  onNext: () => void;
  nextLabel: string;
}> = ({ onBack, onNext, nextLabel }) => (
  <div style={css({
    display: 'flex',
    justifyContent: onBack ? 'space-between' : 'flex-end',
    alignItems: 'center',
    marginTop: 26, paddingTop: 18,
    borderTop: `1px solid ${T.b1}`,
  })}>
    {onBack && <GBtn onClick={onBack} variant="ghost">← Back</GBtn>}
    <GBtn onClick={onNext}>{nextLabel}</GBtn>
  </div>
);

// ── SVG Score Ring (ported from V3K concept) ─────────────────────────────────

interface ScoreRingProps {
  score: number;
  label: string;
  size?: number;
}
const ScoreRing: FC<ScoreRingProps> = ({ score, label, size = 48 }) => {
  const sw = 3;
  const r  = (size - sw) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (score / 100) * circ;
  const col = scoreColor(score);

  return (
    <div style={css({ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 })}>
      <div style={{ position: 'relative', width: size, height: size, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg
          width={size} height={size}
          style={{ position: 'absolute', top: 0, left: 0, transform: 'rotate(-90deg)' }}
        >
          <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={T.b2} strokeWidth={sw} />
          <circle
            cx={size/2} cy={size/2} r={r} fill="none"
            stroke={col} strokeWidth={sw}
            strokeDasharray={circ.toFixed(2)}
            strokeDashoffset={offset.toFixed(2)}
            strokeLinecap="round"
            style={{ transition: 'stroke-dashoffset 0.5s ease' }}
          />
        </svg>
        <span style={{ fontSize: size >= 48 ? 13 : 11, fontWeight: 900, color: col, fontFamily: FONT }}>
          {score}
        </span>
      </div>
      <span style={{ fontSize: 7, color: T.dim, letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: FONT }}>
        {label}
      </span>
    </div>
  );
};

// ── Badge ──────────────────────────────────────────────────────────────────

const Badge: FC<{
  text: string;
  color: string;
  bg: string;
  border: string;
}> = ({ text, color, bg, border }) => (
  <span style={css({
    fontSize: 10, padding: '2px 8px', borderRadius: 3,
    whiteSpace: 'nowrap', color, background: bg, border: `1px solid ${border}`,
    fontFamily: FONT,
  })}>
    {text}
  </span>
);

// ── Field (for detail grids) ──────────────────────────────────────────────────

const GField: FC<{ label: string; value?: string | null; accent?: string }> = ({
  label, value, accent,
}) => (
  <div>
    <GLabel>{label}</GLabel>
    <div style={{ fontSize: 12, color: accent ?? T.m, lineHeight: 1.75 }}>
      {value || '—'}
    </div>
  </div>
);

// ── Urgency bar ───────────────────────────────────────────────────────────────

const UrgencyBar: FC<{ value: number }> = ({ value }) => {
  const pct = value * 10;
  const bg = value >= 8
    ? `linear-gradient(to right,${T.gold},#d97706)`
    : value >= 5 ? T.green : T.dim;
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
        <div style={{ fontSize: 8, color: T.dim, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Window Urgency</div>
        <div style={{ fontSize: 12, fontWeight: 700, color: value >= 8 ? T.gold : T.m, fontFamily: FONT }}>{value}/10</div>
      </div>
      <div style={{ background: '#080810', borderRadius: 3, height: 4, overflow: 'hidden' }}>
        <div style={{ width: `${pct}%`, height: '100%', borderRadius: 3, background: bg, transition: 'width 0.5s' }} />
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// SCREENS
// ─────────────────────────────────────────────────────────────────────────────

const WRAP: CSSProperties = { maxWidth: 840, margin: '0 auto', padding: '32px 18px 80px' };
const WRAP_SM: CSSProperties = { maxWidth: 660, margin: '0 auto', padding: '32px 18px 80px' };

// ── Welcome ───────────────────────────────────────────────────────────────────

const ScreenWelcome: FC<{
  onStart: () => void;
  onHistory: () => void;
  historyCount: number;
}> = ({ onStart, onHistory, historyCount }) => (
  <div style={css({ textAlign: 'center', minHeight: '88vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 20px' })}>
    <div style={css({
      width: 80, height: 80,
      background: `linear-gradient(135deg,${T.gold},#d97706)`,
      borderRadius: 18, display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: 38, fontWeight: 900, color: '#000',
      boxShadow: `0 0 60px ${T.ga(0.25)}`, marginBottom: 28,
    })}>G</div>

    <h1 style={{ fontSize: 36, fontWeight: 800, letterSpacing: '-0.03em', color: T.tx, marginBottom: 14, fontFamily: FONT }}>
      GBODS ENGINE
    </h1>
    <p style={{ fontSize: 14, color: T.dim, maxWidth: 560, lineHeight: 1.85, marginBottom: 36, fontFamily: FONT }}>
      Goldmine Blue Ocean Discovery System. Mathematical intersection methodology that
      finds <em style={{ color: T.m }}>unnamed, unserved pain</em> at the collision of niches —
      applied through 8 deep analytical stages.
    </p>

    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
      <GBtn onClick={onStart} style={{ fontSize: 13, padding: '13px 30px' }}>⚡ New Analysis</GBtn>
      <GBtn onClick={onHistory} variant="ghost" style={{ fontSize: 12, padding: '12px 24px' }}>
        📂 History ({historyCount})
      </GBtn>
    </div>

    <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginTop: 48 }}>
      {([
        { icon: '🎯', title: '8-Stage GBODS', desc: 'LOCATE · DIAGNOSE · SPECIFY · EXPAND · EXCAVATE · ARCHITECT · TIME · LEVERAGE' },
        { icon: '🔀', title: 'Intersection Math', desc: 'V₁ × V₂ × V₃ + Lens — pain that only exists at the collision' },
        { icon: '🛡️', title: 'Profile Filtering', desc: 'Solo, non-technical, passive delivery — every result is actually executable' },
        { icon: '📤', title: 'Export Results', desc: 'Download analysis as JSON or full Markdown report' },
      ] as const).map((f) => (
        <div key={f.title} style={css({
          padding: '14px 18px', background: T.s1, border: `1px solid ${T.b2}`,
          borderRadius: 9, textAlign: 'left', maxWidth: 200,
        })}>
          <div style={{ fontSize: 18, marginBottom: 8 }}>{f.icon}</div>
          <div style={{ fontSize: 12, fontWeight: 600, color: T.tx, marginBottom: 3, fontFamily: FONT }}>{f.title}</div>
          <div style={{ fontSize: 11, color: T.dim, lineHeight: 1.65, fontFamily: FONT }}>{f.desc}</div>
        </div>
      ))}
    </div>
  </div>
);

// ── Profile ───────────────────────────────────────────────────────────────────

const ScreenProfile: FC<{
  profile: GBODSProfile;
  onUpdate: (k: keyof GBODSProfile, v: string) => void;
  onBack: () => void;
  onNext: () => void;
}> = ({ profile, onUpdate, onBack, onNext }) => (
  <div style={WRAP_SM}>
    <GBtn onClick={onBack} variant="ghost" size="sm" style={{ marginBottom: 20 }}>← Home</GBtn>
    <h2 style={{ fontSize: 18, fontWeight: 700, color: T.tx, marginBottom: 8, fontFamily: FONT }}>① Profile & Constraints</h2>
    <p style={{ fontSize: 12, color: T.dim, lineHeight: 1.9, marginBottom: 24, fontFamily: FONT }}>
      GBODS filters every opportunity through your real constraints.
      Specific inputs produce specific, executable results.
    </p>

    <GRule label="Identity" />
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 16px' }}>
      {([
        ['role',        'Your Role',           'e.g. Solo non-technical founder'],
        ['incomeGoal',  'Monthly Income Goal', 'e.g. $2,000–$5,000/month'],
      ] as [keyof GBODSProfile, string, string][]).map(([k, label, ph]) => (
        <div key={k}>
          <GLabel>{label}</GLabel>
          <GInput value={profile[k]} onChange={(v) => onUpdate(k, v)} placeholder={ph} />
        </div>
      ))}
    </div>

    <GRule label="Execution Reality" />
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 16px' }}>
      {([
        ['timeline',       'Days to First Revenue', '7',             'number'],
        ['weeklyHours',    'Hours / Week',           '20',            'number'],
        ['budget',         'Budget',                 '$0–$100',       'text'],
        ['technicalSkills','Technical Skills',       'None — no coding','text'],
      ] as [keyof GBODSProfile, string, string, 'text' | 'number'][]).map(([k, label, ph, type]) => (
        <div key={k}>
          <GLabel>{label}</GLabel>
          <GInput value={profile[k]} onChange={(v) => onUpdate(k, v)} placeholder={ph} type={type} />
        </div>
      ))}
    </div>

    <GLabel>Hard Constraints (what you cannot or will not do)</GLabel>
    <GInput
      value={profile.constraints}
      onChange={(v) => onUpdate('constraints', v)}
      placeholder="No team, no SaaS builds, passive digital delivery only"
    />

    <GNavRow onNext={onNext} nextLabel="Next: Define Niches →" />
  </div>
);

// ── Niches ────────────────────────────────────────────────────────────────────

const ScreenNiches: FC<{
  niches: string[];
  onAdd: () => void;
  onRemove: (i: number) => void;
  onUpdate: (i: number, v: string) => void;
  onBack: () => void;
  onNext: () => void;
}> = ({ niches, onAdd, onRemove, onUpdate, onBack, onNext }) => (
  <div style={WRAP_SM}>
    <GBtn onClick={onBack} variant="ghost" size="sm" style={{ marginBottom: 20 }}>← Back</GBtn>
    <h2 style={{ fontSize: 18, fontWeight: 700, color: T.tx, marginBottom: 8, fontFamily: FONT }}>② Niche Intersection Matrix</h2>
    <p style={{ fontSize: 12, color: T.dim, lineHeight: 1.9, marginBottom: 24, fontFamily: FONT }}>
      Enter 2–5 niches. GBODS finds where they <em style={{ color: T.m }}>collide</em> —
      compounding unnamed pain that no single-domain expert currently serves. Specificity is everything.
    </p>

    {niches.map((n, i) => (
      <div key={i} style={css({ display: 'flex', gap: 9, alignItems: 'center', marginBottom: 8 })}>
        <span style={{ fontSize: 10, color: T.gold, width: 24, textAlign: 'right', flexShrink: 0, fontFamily: FONT }}>
          V{i + 1}
        </span>
        <GInput
          value={n}
          onChange={(v) => onUpdate(i, v)}
          placeholder={NICHE_PLACEHOLDERS[i] ?? 'Another niche…'}
          style={{ flex: 1 }}
        />
        {niches.length > MIN_NICHES && (
          <button
            onClick={() => onRemove(i)}
            style={css({
              background: 'none', border: `1px solid ${T.b2}`, borderRadius: 4,
              width: 27, height: 27, color: T.dim, cursor: 'pointer',
              fontSize: 16, display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            })}
          >×</button>
        )}
      </div>
    ))}

    {niches.length < MAX_NICHES && (
      <GBtn onClick={onAdd} variant="ghost" size="sm" style={{ marginTop: 6 }}>＋ Add Vector</GBtn>
    )}

    <div style={css({
      background: T.ga(0.05), border: `1px solid ${T.ga(0.15)}`,
      borderRadius: 6, padding: '12px 14px', marginTop: 18,
    })}>
      <GLabel>◈ Intersection Principle</GLabel>
      <div style={{ fontSize: 12, color: T.m, lineHeight: 1.85, fontFamily: FONT }}>
        The goldmine is <strong style={{ color: T.tx }}>not inside</strong> any single niche.
        It lives at the collision. Pain at the intersection has no existing language, no solutions,
        and zero competition because no single-domain expert sees the full pattern.
      </div>
    </div>

    <GNavRow onBack={onBack} onNext={onNext} nextLabel="Next: Select Lenses →" />
  </div>
);

// ── Lenses ────────────────────────────────────────────────────────────────────

const ScreenLenses: FC<{
  selectedLenses: string[];
  niches: string[];
  profile: GBODSProfile;
  onToggle: (id: string) => void;
  onBack: () => void;
  onRun: () => void;
}> = ({ selectedLenses, niches, profile, onToggle, onBack, onRun }) => {
  const validNiches = niches.filter((n) => n.trim());

  return (
    <div style={WRAP_SM}>
      <GBtn onClick={onBack} variant="ghost" size="sm" style={{ marginBottom: 20 }}>← Back</GBtn>
      <h2 style={{ fontSize: 18, fontWeight: 700, color: T.tx, marginBottom: 8, fontFamily: FONT }}>③ Enrichment Lenses</h2>
      <p style={{ fontSize: 12, color: T.dim, lineHeight: 1.9, marginBottom: 24, fontFamily: FONT }}>
        <em style={{ color: T.m }}>"What does this person already spend money on when in this pain?"</em>
        <br />Lenses amplify intersections commercially. Optional — leave empty for pure niche intersections.
      </p>

      <GLabel>Select 1–3 Lenses</GLabel>
      <div style={css({ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: 12 })}>
        {GBODS_LENSES.map((l) => {
          const on = selectedLenses.includes(l.id);
          return (
            <div
              key={l.id}
              title={l.description}
              onClick={() => onToggle(l.id)}
              style={css({
                padding: '6px 14px', borderRadius: 20, fontSize: 11,
                cursor: 'pointer', userSelect: 'none', transition: 'all 0.15s',
                border: `1px solid ${on ? T.gold : T.b2}`,
                background: on ? T.ga(0.08) : 'transparent',
                color: on ? T.gold : T.dim,
                fontFamily: FONT,
              })}
            >
              {l.name}
            </div>
          );
        })}
      </div>

      {selectedLenses.length > 0 && (
        <div style={{ fontSize: 11, color: T.dim, marginBottom: 6, fontFamily: FONT }}>
          Active:{' '}
          {selectedLenses.map((id) => {
            const l = GBODS_LENSES.find((x) => x.id === id);
            return (
              <span key={id} style={{ color: T.gold, marginRight: 8 }}>{l?.name ?? id}</span>
            );
          })}
        </div>
      )}

      <GRule label="Mission Summary — review before running" />
      <GCard>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '7px 18px', marginBottom: 12 }}>
          {([
            ['Role',       profile.role],
            ['Goal',       profile.incomeGoal],
            ['Revenue in', `${profile.timeline} days`],
            ['Hours/wk',   `${profile.weeklyHours}h`],
            ['Budget',     profile.budget],
            ['Skills',     profile.technicalSkills],
          ] as [string, string][]).map(([k, v]) => (
            <div key={k}>
              <div style={{ fontSize: 8, color: T.dim, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 2, fontFamily: FONT }}>{k}</div>
              <div style={{ fontSize: 11, color: T.m, fontFamily: FONT }}>{v || '—'}</div>
            </div>
          ))}
        </div>
        <div style={{ borderTop: `1px solid ${T.b1}`, paddingTop: 10 }}>
          {validNiches.map((n, i) => (
            <div key={i} style={{ fontSize: 11, color: T.gold, marginBottom: 2, fontFamily: FONT }}>V{i + 1} → {n}</div>
          ))}
          {selectedLenses.length > 0 && (
            <div style={{ fontSize: 11, color: T.blue, marginTop: 6, fontFamily: FONT }}>
              Lenses → {selectedLenses.map((id) => GBODS_LENSES.find((l) => l.id === id)?.name ?? id).join(', ')}
            </div>
          )}
        </div>
      </GCard>

      <GNavRow onBack={onBack} onNext={onRun} nextLabel="⚡ Run GBODS Analysis" />
    </div>
  );
};

// ── Loading ───────────────────────────────────────────────────────────────────

const ScreenLoading: FC<{ stageIndex: number; onCancel: () => void }> = ({
  stageIndex, onCancel,
}) => (
  <div style={css({ textAlign: 'center', padding: '70px 20px', maxWidth: 700, margin: '0 auto' })}>
    <style>{`@keyframes gbods-spin{to{transform:rotate(360deg)}}`}</style>
    <div style={css({
      width: 48, height: 48, borderRadius: '50%',
      border: `2px solid ${T.b2}`, borderTopColor: T.gold,
      margin: '0 auto 24px', animation: 'gbods-spin 1s linear infinite',
    })} />
    <div style={{ fontSize: 12, color: T.gold, letterSpacing: '0.15em', marginBottom: 7, minHeight: 20, fontFamily: FONT }}>
      {STAGE_MESSAGES[stageIndex] ?? STAGE_MESSAGES[0]}
    </div>
    <div style={{ fontSize: 11, color: T.dim, marginBottom: 4, fontFamily: FONT }}>Running full 8-stage analysis…</div>
    <div style={css({ display: 'flex', gap: 6, justifyContent: 'center', flexWrap: 'wrap', margin: '18px 0 28px' })}>
      {STAGE_PILL_LABELS.map((label, i) => (
        <div key={label} style={css({
          padding: '4px 10px', borderRadius: 3, fontSize: 9, letterSpacing: '0.08em',
          transition: 'all 0.3s', fontFamily: FONT,
          border: `1px solid ${stageIndex > i ? 'rgba(245,166,35,0.35)' : T.b2}`,
          background: stageIndex > i ? 'rgba(245,166,35,0.1)' : 'transparent',
          color: stageIndex > i ? T.gold : T.dim,
        })}>
          {label}
        </div>
      ))}
    </div>
    <GBtn onClick={onCancel} variant="ghost" size="sm">← Cancel</GBtn>
  </div>
);

// ── Error ─────────────────────────────────────────────────────────────────────

const ScreenError: FC<{
  message: string;
  onBack: () => void;
  onRetry: () => void;
}> = ({ message, onBack, onRetry }) => (
  <div style={css({ maxWidth: 520, margin: '0 auto', padding: '60px 20px', textAlign: 'center' })}>
    <div style={css({
      width: 72, height: 72, background: `rgba(239,68,68,0.1)`, borderRadius: '50%',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: 32, margin: '0 auto 20px',
    })}>⚠</div>
    <h2 style={{ fontSize: 20, fontWeight: 700, color: T.red, marginBottom: 8, fontFamily: FONT }}>Analysis Failed</h2>
    <p style={{ fontSize: 13, color: T.dim, lineHeight: 1.8, marginBottom: 28, fontFamily: FONT }}>{message}</p>
    <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
      <GBtn onClick={onBack} variant="ghost">← Back to Inputs</GBtn>
      <GBtn onClick={onRetry}>↺ Retry</GBtn>
    </div>
  </div>
);

// ── Opportunity Card ──────────────────────────────────────────────────────────

// ⚡ Bolt: Memoize OpportunityCard and use stable onToggle reference to prevent
// unnecessary list re-renders. When toggling one card, other cards in the list
// will no longer re-render. (Expected impact: ~80% fewer re-renders on toggle)
const OpportunityCard: FC<{
  opp: GBODSOpportunity;
  index: number;
  isExpanded: boolean;
  onToggle: (i: number) => void;
}> = React.memo(({ opp, index, isExpanded, onToggle }) => {
  const isTop = opp.rank === 1;
  const gs = opp.gbodsScore;
  const sv = opp.soloViabilityScore;
  const ei = opp.effortToIncomeScore;
  const wu = opp.windowUrgency;

  return (
    <div style={css({
      border: `1px solid ${isTop ? 'rgba(245,166,35,0.25)' : T.b2}`,
      background: isTop ? 'rgba(245,166,35,0.025)' : T.s1,
      borderRadius: 9, marginBottom: 9, overflow: 'hidden',
      boxShadow: isExpanded ? '0 6px 32px rgba(0,0,0,0.55)' : 'none',
      transition: 'box-shadow 0.2s',
    })}>

      {/* Header row */}
      <div onClick={() => onToggle(index)} style={css({
        padding: '14px 16px', cursor: 'pointer',
        display: 'flex', gap: 12, alignItems: 'flex-start',
      })}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={css({ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4, flexWrap: 'wrap' })}>
            <span style={{ fontSize: 20, fontWeight: 900, color: scoreColor(gs), lineHeight: 1, flexShrink: 0, fontFamily: FONT }}>
              #{opp.rank ?? index + 1}
            </span>
            <span style={{ fontSize: 13, fontWeight: 700, color: T.tx, wordBreak: 'break-word', fontFamily: FONT }}>
              {opp.title ?? 'Untitled'}
            </span>
            {opp.quickWinFlag && (
              <span style={css({
                fontSize: 8, padding: '2px 7px', borderRadius: 3, flexShrink: 0,
                background: 'rgba(245,166,35,0.12)', border: '1px solid rgba(245,166,35,0.3)',
                color: T.gold, letterSpacing: '0.12em', fontWeight: 700, fontFamily: FONT,
              })}>QUICK WIN</span>
            )}
          </div>
          <div style={{ fontSize: 12, color: T.dim, lineHeight: 1.55, marginBottom: 8, fontFamily: FONT }}>
            {opp.tagline}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
            {opp.priceRange && <Badge text={opp.priceRange}     color={T.green}  bg="rgba(16,185,129,.08)"  border="rgba(16,185,129,.22)"  />}
            {opp.daysToFirstDollar && <Badge text={`Day ${opp.daysToFirstDollar} rev`} color={T.blue}   bg="rgba(59,130,246,.08)"  border="rgba(59,130,246,.22)"  />}
            {opp.format && <Badge text={opp.format}         color={T.purple} bg="rgba(139,92,246,.08)" border="rgba(139,92,246,.22)" />}
            {opp.buildTimeHours && <Badge text={`${opp.buildTimeHours}h build`} color={T.gold}   bg="rgba(245,166,35,.07)"  border="rgba(245,166,35,.2)"   />}
          </div>
        </div>

        <div style={css({ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 8 })}>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <ScoreRing score={gs} label="GBODS" size={48} />
            <ScoreRing score={sv} label="SOLO"  size={36} />
            <ScoreRing score={ei} label="ROI"   size={36} />
          </div>
          <span style={{
            fontSize: 9, color: T.dim, fontFamily: FONT,
            transform: isExpanded ? 'rotate(180deg)' : 'none',
            transition: 'transform 0.2s', display: 'inline-block',
          }}>▼</span>
        </div>
      </div>

      {/* Expanded body */}
      {isExpanded && (
        <div style={css({
          borderTop: `1px solid ${T.b1}`,
          padding: '10px 16px 22px',
          animation: 'gbods-fadeup 0.2s ease',
        })}>
          <style>{`@keyframes gbods-fadeup{from{opacity:0;transform:translateY(5px)}to{opacity:1;transform:none}}`}</style>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px 22px', marginTop: 14 }}>
            <GField label="Named Pain"          value={`"${opp.namedPain ?? '—'}"`} accent={T.gold}  />
            <GField label="Target Identity"     value={opp.identity}                                 />
            <GField label="TRIZ Contradiction"  value={opp.contradiction}                            />
            <GField label="Real Job (JTBD)"     value={opp.realJob}                                  />
            <GField label="Blocking Assumption" value={opp.blockingAssumption}                       />
            <GField label="Why Enter Now"       value={opp.whyNowReason}               accent={T.green}/>
            <GField label="Current Broken Flow" value={opp.currentFlow}                              />
            <GField label="Rerouted Flow"       value={opp.reroutedFlow}               accent={T.green}/>
            <GField label="Adjacent Borrow"     value={opp.adjacentBorrow}                           />
            <GField label="Converging Signals"  value={opp.convergingSignals}                        />
          </div>

          <div style={{ marginTop: 14 }}>
            <GLabel>Product</GLabel>
            <div style={css({
              background: '#080810', border: `1px solid ${T.b1}`,
              borderRadius: 5, padding: '12px 14px',
              fontSize: 12, color: T.m, lineHeight: 1.85, fontFamily: FONT,
            })}>
              {opp.productDescription ?? '—'}
            </div>
          </div>

          <div style={css({
            background: 'rgba(245,166,35,0.04)', border: `1px solid rgba(245,166,35,0.18)`,
            borderRadius: 6, padding: '13px 16px', marginTop: 12,
          })}>
            <GLabel>◈ Paradigm Statement</GLabel>
            <div style={{ fontSize: 13, color: '#fcd34d', fontStyle: 'italic', lineHeight: 1.8, fontFamily: FONT }}>
              "{opp.paradigmStatement ?? '—'}"
            </div>
          </div>

          {Array.isArray(opp.distributionChannels) && opp.distributionChannels.length > 0 && (
            <div style={{ marginTop: 12 }}>
              <GLabel>Distribution Channels</GLabel>
              {opp.distributionChannels.map((ch, ci) => (
                <div key={ci} style={css({ display: 'flex', alignItems: 'center', gap: 7, fontSize: 12, color: T.blue, marginBottom: 5, fontFamily: FONT })}>
                  <span style={{ color: T.b3 }}>→</span>{ch}
                </div>
              ))}
            </div>
          )}

          <div style={{ marginTop: 14 }}>
            <UrgencyBar value={wu} />
          </div>
        </div>
      )}
    </div>
  );
});

// ── Results ───────────────────────────────────────────────────────────────────

const ScreenResults: FC<{
  result: GBODSResult;
  expandedCard: number | null;
  onToggleCard: (i: number) => void;
  onExportJSON: () => void;
  onExportMD: () => void;
  onRefine: () => void;
  onNew: () => void;
}> = ({ result, expandedCard, onToggleCard, onExportJSON, onExportMD, onRefine, onNew }) => (
  <div style={WRAP}>
    <div style={css({ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 8, flexWrap: 'wrap', gap: 10 })}>
      <div>
        <h2 style={{ fontSize: 18, fontWeight: 700, color: T.tx, marginBottom: 3, fontFamily: FONT }}>
          {result.opportunities.length} Goldmine Opportunities
        </h2>
        <div style={{ fontSize: 11, color: T.dim, fontFamily: FONT }}>
          Ranked by GBODS score · filtered to your constraints · click any card to expand
        </div>
      </div>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <GBtn onClick={onRefine} variant="ghost" size="sm">← Refine</GBtn>
        <GBtn onClick={onNew}    variant="ghost" size="sm">↺ New</GBtn>
      </div>
    </div>

    {/* Export bar */}
    <div style={css({ display: 'flex', gap: 8, justifyContent: 'flex-end', marginBottom: 14 })}>
      <GBtn onClick={onExportJSON} variant="ghost" size="sm">⬇ JSON</GBtn>
      <GBtn onClick={onExportMD}   variant="ghost" size="sm">⬇ Markdown Report</GBtn>
    </div>

    {/* System insight */}
    {result.systemInsight && (
      <div style={css({
        background: 'rgba(245,166,35,0.05)', border: `1px solid rgba(245,166,35,0.18)`,
        borderRadius: 8, padding: '14px 18px', marginBottom: 12,
      })}>
        <GLabel>◈ System Insight</GLabel>
        <div style={{ fontSize: 13, color: T.m, lineHeight: 1.8, fontFamily: FONT }}>{result.systemInsight}</div>
      </div>
    )}

    {/* Top recommendation */}
    {result.topRecommendation && (
      <div style={css({
        background: 'rgba(16,185,129,0.05)', border: `1px solid rgba(16,185,129,0.2)`,
        borderRadius: 8, padding: '14px 18px', marginBottom: 22,
      })}>
        <GLabel color={T.green}>✦ Top Recommendation</GLabel>
        <div style={{ fontSize: 13, color: '#a7f3d0', lineHeight: 1.8, fontFamily: FONT }}>{result.topRecommendation}</div>
      </div>
    )}

    {/* Opportunity cards */}
    {result.opportunities.map((opp, i) => (
      <OpportunityCard
        key={i}
        opp={opp}
        index={i}
        isExpanded={expandedCard === i}
        onToggle={onToggleCard}
      />
    ))}

    <div style={css({ display: 'flex', gap: 9, justifyContent: 'center', marginTop: 24, paddingTop: 18, borderTop: `1px solid ${T.b1}`, flexWrap: 'wrap' })}>
      <GBtn onClick={onRefine} variant="ghost">← Refine</GBtn>
      <GBtn onClick={onNew}>↺ New Analysis</GBtn>
    </div>
  </div>
);

// ── History ───────────────────────────────────────────────────────────────────

const ScreenHistory: FC<{
  history: HistoryEntry[];
  onLoad: (entry: HistoryEntry) => void;
  onClear: () => void;
  onBack: () => void;
}> = ({ history, onLoad, onClear, onBack }) => (
  <div style={WRAP_SM}>
    <GBtn onClick={onBack} variant="ghost" size="sm" style={{ marginBottom: 20 }}>← Home</GBtn>
    <div style={css({ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 })}>
      <h2 style={{ fontSize: 18, fontWeight: 700, color: T.tx, fontFamily: FONT }}>Analysis History</h2>
      {history.length > 0 && (
        <GBtn onClick={onClear} variant="danger" size="sm">Clear All</GBtn>
      )}
    </div>
    <p style={{ fontSize: 12, color: T.dim, lineHeight: 1.9, marginBottom: 24, fontFamily: FONT }}>
      Persisted to localStorage · up to 15 entries.
    </p>

    {history.length === 0 ? (
      <GCard style={{ textAlign: 'center', color: T.dim, padding: '32px 20px' }}>
        <div style={{ fontSize: 12, fontFamily: FONT }}>No analyses yet. Run your first analysis to see it here.</div>
      </GCard>
    ) : (
      history.map((entry) => (
        <div key={entry.id} style={css({
          background: T.s1, border: `1px solid ${T.b2}`, borderRadius: 8,
          padding: '13px 16px', marginBottom: 8,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: 8,
        })}>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: T.tx, marginBottom: 3, fontFamily: FONT }}>
              {entry.nichesSummary}
            </div>
            <div style={{ fontSize: 11, color: T.dim, fontFamily: FONT }}>
              {entry.timestamp}
              {entry.lensesSummary && ` · ${entry.lensesSummary}`}
              {' · '}{entry.opportunityCount} opportunities
              {' · '}Top GBODS: <span style={{ color: T.gold }}>{entry.topScore}</span>
            </div>
          </div>
          <GBtn onClick={() => onLoad(entry)} variant="ghost" size="sm">View →</GBtn>
        </div>
      ))
    )}
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
// ROOT COMPONENT — the single export
// ─────────────────────────────────────────────────────────────────────────────

export const GBODSEngine: FC = () => {
  const g = useGBODS();

  return (
    <div style={css({
      minHeight: '100vh',
      background: T.bg,
      color: T.tx,
      fontFamily: FONT,
    })}>

      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <header style={css({
        position: 'sticky', top: 0, zIndex: 30,
        background: 'rgba(10,10,15,0.92)',
        backdropFilter: 'blur(10px)',
        borderBottom: `1px solid ${T.b1}`,
        padding: '10px 22px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      })}>
        <div
          onClick={() => g.setView('welcome')}
          style={css({ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' })}
        >
          <div style={css({
            width: 30, height: 30,
            background: `linear-gradient(135deg,${T.gold},#d97706)`,
            borderRadius: 7, display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 14, fontWeight: 900, color: '#000',
          })}>G</div>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.22em', color: T.gold, fontFamily: FONT }}>GBODS</div>
            <div style={{ fontSize: 7, color: T.dim, letterSpacing: '0.1em', fontFamily: FONT }}>GOLDMINE BLUE OCEAN DISCOVERY · V4</div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          {/* Step indicator when in flow */}
          {['profile','niches','lenses','loading','results'].includes(g.view) && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              {(['profile','niches','lenses','results'] as const).map((step, i) => {
                const stepIdx = ['profile','niches','lenses','results'].indexOf(g.view === 'loading' ? 'lenses' : g.view);
                const done    = i < stepIdx;
                const active  = i === stepIdx;
                return (
                  <React.Fragment key={step}>
                    {i > 0 && <div style={{ width: 14, height: 1, background: done ? T.gold : T.b2, transition: 'background 0.3s' }} />}
                    <div style={css({
                      width: 20, height: 20, borderRadius: '50%',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 8, fontWeight: 700, fontFamily: FONT,
                      border: `1px solid ${active || done ? T.gold : T.b2}`,
                      background: done ? T.gold : 'transparent',
                      color: done ? '#000' : active ? T.gold : T.dim,
                    })}>
                      {done ? '✓' : i + 1}
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          )}
          <GBtn onClick={() => g.setView('history')} variant="ghost" size="sm">
            History ({g.history.length})
          </GBtn>
        </div>
      </header>

      {/* ── Screen Router ───────────────────────────────────────────────────── */}
      {g.view === 'welcome' && (
        <ScreenWelcome
          onStart={() => g.setView('profile')}
          onHistory={() => g.setView('history')}
          historyCount={g.history.length}
        />
      )}

      {g.view === 'profile' && (
        <ScreenProfile
          profile={g.profile}
          onUpdate={g.updateProfile}
          onBack={() => g.setView('welcome')}
          onNext={() => g.setView('niches')}
        />
      )}

      {g.view === 'niches' && (
        <ScreenNiches
          niches={g.niches}
          onAdd={g.addNiche}
          onRemove={g.removeNiche}
          onUpdate={g.updateNiche}
          onBack={() => g.setView('profile')}
          onNext={() => {
            if (g.validNiches.length < MIN_NICHES) {
              alert('Please fill in at least 2 niche vectors before continuing.');
              return;
            }
            g.setView('lenses');
          }}
        />
      )}

      {g.view === 'lenses' && (
        <ScreenLenses
          selectedLenses={g.selectedLenses}
          niches={g.niches}
          profile={g.profile}
          onToggle={g.toggleLens}
          onBack={() => g.setView('niches')}
          onRun={g.runAnalysis}
        />
      )}

      {g.view === 'loading' && (
        <ScreenLoading stageIndex={g.stageIndex} onCancel={g.cancelAnalysis} />
      )}

      {g.view === 'error' && (
        <ScreenError
          message={g.errorMessage}
          onBack={() => g.setView('lenses')}
          onRetry={g.runAnalysis}
        />
      )}

      {g.view === 'results' && g.result && (
        <ScreenResults
          result={g.result}
          expandedCard={g.expandedCard}
          onToggleCard={g.toggleCard}
          onExportJSON={g.exportJSON}
          onExportMD={g.exportMarkdown}
          onRefine={() => g.setView('lenses')}
          onNew={g.reset}
        />
      )}

      {g.view === 'history' && (
        <ScreenHistory
          history={g.history}
          onLoad={g.loadFromHistory}
          onClear={g.clearHistory}
          onBack={() => g.setView('welcome')}
        />
      )}
    </div>
  );
};

export default GBODSEngine;
