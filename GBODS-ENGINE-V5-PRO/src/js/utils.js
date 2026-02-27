// ═══════════════════════════════════════════════════════
// GBODS ENGINE V5 PRO — Shared Utilities
// ═══════════════════════════════════════════════════════

function esc(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;');
}

function clamp(val, min, max) {
  const n = parseFloat(val) || 0;
  return Math.max(min, Math.min(max, n));
}

function showToast(msg, type) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className = 'toast show' + (type ? ' ' + type : '');
  setTimeout(() => t.className = 'toast', 3000);
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function $(id) {
  return document.getElementById(id);
}

function val(id) {
  const el = $(id);
  return el ? el.value.trim() : '';
}
