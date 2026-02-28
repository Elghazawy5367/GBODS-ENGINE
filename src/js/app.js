// ═══════════════════════════════════════════════════════
// GBODS ENGINE V5 PRO — Application Controller
// State, init, navigation, settings, keyboard
// ═══════════════════════════════════════════════════════

// ─── STATE ──────────────────────────────────────────

const S = {
  step: 1,
  selectedLenses: [],
  suggestedLenses: [],
  enrichments: [],
  whisperOn: false,
  selectedPain: null,
  analysisResult: null,
  currentModel: 'deepseek/deepseek-chat',
  streaming: false,
  abortController: null,
  rawText: '',
  microSuggestions: { v1: [], v2: [], v3: [] },
  suggestionLoading: { v1: false, v2: false, v3: false },
  debounceTimers: { v1: null, v2: null, v3: null },
};

// ─── INIT ───────────────────────────────────────────

function init() {
  buildLenses();
  buildEnrichments();
  buildModels();
  loadSettings();
  loadHistory();
  updateTokenEst();
  setupKeyboard();
  setupConstraintListeners();
  checkConstraints();
  setupVectorSuggestions();
}

// ─── KEYBOARD ───────────────────────────────────────

function setupKeyboard() {
  document.addEventListener('keydown', e => {
    if (['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) return;
    if (e.key === 's' || e.key === 'S') { e.preventDefault(); toggleSettings(); }
    if (e.key === 'h' || e.key === 'H') { e.preventDefault(); toggleHistory(); }
    if (e.key === 'Escape') {
      if ($('settingsOverlay').classList.contains('open')) toggleSettings();
      else if ($('historyDrawer').classList.contains('open')) toggleHistory();
    }
  });
}

// ─── CONSTRAINT VALIDATOR ───────────────────────────

function setupConstraintListeners() {
  ['role', 'income', 'timeline', 'hours', 'budget', 'skills', 'constraints'].forEach(id => {
    const el = $(id);
    if (el) el.addEventListener('input', checkConstraints);
  });
}

function checkConstraints() {
  const warns = [];
  const skills = val('skills').toLowerCase();
  const cons = val('constraints').toLowerCase();
  const budget = val('budget').toLowerCase();

  if (skills.includes('none') || skills.includes('no cod')) {
    warns.push('No coding — SaaS/software opportunities will be auto-rejected');
  }
  if (budget.includes('$0') || budget.includes('zero')) {
    warns.push('Zero budget — paid advertising channels excluded');
  }
  if (cons.includes('no team')) {
    warns.push('Solo constraint — all opportunities single-person executable');
  }

  const el = $('constraintWarnings');
  if (el) {
    el.innerHTML = warns.map(w => `<div class="constraint-warn">⚠ ${w}</div>`).join('');
  }
}

// ─── VECTOR SUGGESTIONS ─────────────────────────────

function setupVectorSuggestions() {
  ['v1', 'v2', 'v3'].forEach(id => {
    const el = $(id);
    if (!el) return;

    el.addEventListener('input', () => {
      clearTimeout(S.debounceTimers[id]);
      const v = el.value.trim();
      if (v.length < 4) {
        hideSuggestions(id);
        return;
      }
      S.debounceTimers[id] = setTimeout(() => {
        fetchVectorSuggestions(id);
      }, 600);
    });

    el.addEventListener('blur', () => {
      // Delay hide so chip mousedown events register before container is hidden
      setTimeout(() => hideSuggestions(id), 200);
    });
  });
}

// ─── NAVIGATION ─────────────────────────────────────

function goStep(n) {
  if (n === 3) return; // Only via Scout button
  S.step = n;
  ['step1', 'step2', 'step3'].forEach((id, i) => {
    $(id).style.display = (i + 1 === n) ? 'block' : 'none';
  });
  [1, 2, 3].forEach(i => {
    const el = $('stepNav' + i);
    el.className = 'step-item' + (i < n ? ' done' : i === n ? ' active' : '');
  });
  updateMath();
}

function goStepDirect(n) {
  S.step = n;
  ['step1', 'step2', 'step3'].forEach((id, i) => {
    $(id).style.display = (i + 1 === n) ? 'block' : 'none';
  });
  [1, 2, 3].forEach(i => {
    const el = $('stepNav' + i);
    el.className = 'step-item' + (i < n ? ' done' : i === n ? ' active' : '');
  });
}

async function goToIntelligence() {
  const v1 = val('v1'), v2 = val('v2');
  if (!v1 || !v2) { showToast('Please enter V1 and V2 niches', 'error'); return; }
  goStepDirect(3);
  await runLensScout();
}

// ─── MODEL SELECTION ────────────────────────────────

function selectModel(id) {
  S.currentModel = id;
  buildModels();
  saveSettings();
  updateTokenEst();
}

function setModelFromSelect() {
  S.currentModel = $('modelSelect').value;
  buildModels();
  saveSettings();
  updateTokenEst();
}

// ─── TOKEN COST ESTIMATOR ───────────────────────────

function updateTokenEst() {
  const depth = parseInt(val('depth') || '5');
  const baseTokens = 1200 + (depth * 800) + (S.enrichments.length * 300) + (S.whisperOn ? 400 : 0);
  const outputTokens = depth * 1200;
  const totalTokens = baseTokens + outputTokens;
  const model = MODELS.find(m => m.id === S.currentModel);
  const cost = model ? (totalTokens * model.costPer1k / 1000) : 0;

  const countEl = $('tokenCount');
  const costEl = $('tokenCost');
  if (countEl) countEl.textContent = `~${Math.round(totalTokens / 100) * 100} tokens`;
  if (costEl) costEl.textContent = cost === 0 ? 'FREE' : `~$${cost.toFixed(3)}`;
}

// ─── SETTINGS ───────────────────────────────────────

function getApiKey() {
  return $('apiKey')?.value.trim() || localStorage.getItem('gbods_key') || '';
}

function saveSettings() {
  const key = $('apiKey')?.value.trim();
  if (key) localStorage.setItem('gbods_key', key);
  localStorage.setItem('gbods_model', S.currentModel);
}

function loadSettings() {
  const key = localStorage.getItem('gbods_key');
  if (key && $('apiKey')) $('apiKey').value = key;
  const model = localStorage.getItem('gbods_model');
  if (model && MODELS.find(m => m.id === model)) {
    S.currentModel = model;
    buildModels();
  }
}

function toggleSettings() {
  $('settingsOverlay').classList.toggle('open');
}

// ─── NEW ANALYSIS ───────────────────────────────────

function newAnalysis() {
  showScreen('screenSetup');
  goStepDirect(1);
  S.selectedLenses = [];
  S.enrichments = [];
  S.whisperOn = false;
  S.selectedPain = null;
  S.rawText = '';
  $('historyFab').style.display = 'none';
  document.querySelectorAll('.lens-chip').forEach(el => el.classList.remove('selected', 'ai-suggested', 'soft-aligned'));
  document.querySelectorAll('.lens-cb').forEach(el => el.checked = false);
  document.querySelectorAll('.lens-reason').forEach(el => el.style.display = 'none');
  document.querySelectorAll('.enrich-chip').forEach(el => el.classList.remove('on'));
  document.querySelectorAll('.enrich-cb').forEach(el => el.checked = false);
  $('whisperToggle').classList.remove('on');
  $('whispersBody').classList.remove('open');
  $('lensAiBanner').style.display = 'none';
  $('painScoutArea').style.display = 'none';
  $('topRecCard').style.display = 'none';
  $('systemInsightCard').style.display = 'none';
  $('h72Card').style.display = 'none';
  S.microSuggestions = { v1: [], v2: [], v3: [] };
  hideSuggestions('v1');
  hideSuggestions('v2');
  hideSuggestions('v3');
}

// ─── BOOT ───────────────────────────────────────────

init();

if (!getApiKey()) {
  setTimeout(() => {
    $('settingsOverlay').classList.add('open');
  }, 600);
}
