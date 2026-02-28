// ═══════════════════════════════════════════════════════
// GBODS ENGINE V5 PRO — UI Rendering & DOM Management
// ═══════════════════════════════════════════════════════

// ─── BUILD UI COMPONENTS ────────────────────────────

function buildLenses() {
  $('lensGrid').innerHTML = LENSES.map(l => `
    <label class="lens-chip" id="lc-${l.id}" onclick="toggleLens(event,'${l.id}')">
      <input type="checkbox" class="lens-cb" id="lcb-${l.id}">
      <div>
        <span class="lens-name">${l.name}</span>
        <span class="lens-sub">${l.sub}</span>
        <span class="lens-reason" id="lr-${l.id}" style="display:none"></span>
      </div>
    </label>`).join('');
}

function buildEnrichments() {
  $('enrichGrid').innerHTML = ENRICHMENTS.map(e => `
    <label class="enrich-chip" id="ec-${e.id}" onclick="toggleEnrich(event,'${e.id}')">
      <input type="checkbox" class="enrich-cb" id="ecb-${e.id}">
      <div>
        <div class="enrich-label">${e.label}</div>
        <div class="enrich-desc">${e.desc}</div>
      </div>
    </label>`).join('');
}

function buildModels() {
  $('modelGrid').innerHTML = MODELS.map(m => `
    <div class="model-option ${m.id === S.currentModel ? 'selected' : ''}" onclick="selectModel('${m.id}')">
      <input type="radio" class="model-radio" name="model" ${m.id === S.currentModel ? 'checked' : ''}>
      <div style="flex:1">
        <div class="model-name">${m.name}</div>
        <div class="model-tag">${m.tag}</div>
        <div class="model-cost">~$${m.costPer1k}/1k tokens</div>
      </div>
      ${m.badge ? `<span class="model-badge" style="background:${m.badgeColor}22;color:${m.badgeColor};border:1px solid ${m.badgeColor}44">${m.badge}</span>` : ''}
    </div>`).join('');

  $('modelSelect').innerHTML = MODELS.map(m =>
    `<option value="${m.id}" ${m.id === S.currentModel ? 'selected' : ''}>${m.name} — ${m.tag.split('·')[0].trim()}</option>`
  ).join('');
}

function buildStageList() {
  $('stageList').innerHTML = STAGES.map(s => `
    <div class="stage-row" id="sr-${s.num}">
      <div class="stage-dot" id="sd-${s.num}"></div>
      <div class="stage-row-label">${s.name}</div>
      <div class="stage-row-num">${s.num}</div>
    </div>`).join('');
}

// ─── INTERACTIONS ───────────────────────────────────

function toggleLens(e, id) {
  e.preventDefault();
  const el = $('lc-' + id);
  const cb = $('lcb-' + id);
  const idx = S.selectedLenses.indexOf(id);
  if (idx > -1) {
    S.selectedLenses.splice(idx, 1);
    el.classList.remove('selected');
    cb.checked = false;
  } else if (S.selectedLenses.length < 3) {
    S.selectedLenses.push(id);
    el.classList.add('selected');
    cb.checked = true;
  } else {
    showToast('Max 3 lenses — deselect one first', 'error');
  }
  updateTokenEst();
}

function toggleEnrich(e, id) {
  e.preventDefault();
  const el = $('ec-' + id);
  const cb = $('ecb-' + id);
  const idx = S.enrichments.indexOf(id);
  if (idx > -1) { S.enrichments.splice(idx, 1); el.classList.remove('on'); cb.checked = false; }
  else { S.enrichments.push(id); el.classList.add('on'); cb.checked = true; }
  updateTokenEst();
}

function toggleWhispers() {
  S.whisperOn = !S.whisperOn;
  $('whisperToggle').classList.toggle('on', S.whisperOn);
  $('whispersBody').classList.toggle('open', S.whisperOn);
  updateTokenEst();
}

function selectPain(idx, pain) {
  document.querySelectorAll('.pain-pill').forEach(el => el.classList.remove('selected'));
  if (S.selectedPain === pain) {
    S.selectedPain = null;
  } else {
    S.selectedPain = pain;
    $('pp-' + idx)?.classList.add('selected');
  }
}

function updateMath() {
  const v1 = val('v1') || 'V₁';
  const v2 = val('v2') || 'V₂';
  const v3 = val('v3');
  const el = $('mathEq');
  if (!el) return;
  let eq = `${v1} × ${v2}`;
  if (v3) eq += ` × ${v3}`;
  el.textContent = eq + ' = Blue Ocean';
  el.classList.toggle('active', !!(v1 !== 'V₁' && v2 !== 'V₂'));
}

// ─── ANALYSIS SIDEBAR ───────────────────────────────

function setupAnalysisSidebar(v1, v2) {
  const v3 = val('v3');
  let inter = `${v1}\n× ${v2}`;
  if (v3) inter += `\n× ${v3}`;
  $('analysisIntersection').textContent = inter;
  $('analysisProfile').innerHTML =
    `<span>Goal:</span> ${val('income')}<br>` +
    `<span>Timeline:</span> ${val('timeline')}d<br>` +
    `<span>Hours/wk:</span> ${val('hours')}h<br>` +
    `<span>Budget:</span> ${val('budget')}`;
  $('analysisStatusText').textContent = 'Running 8-stage analysis…';
  buildStageList();
}

function setStatusThinking(label, sub) {
  $('thinkingBox').style.display = 'flex';
  $('streamBox').style.display = 'none';
  $('thinkingLabel').textContent = label;
  $('thinkingSub').textContent = sub;
}

// ─── RESULTS DISPLAY ────────────────────────────────

function showResults(data) {
  showScreen('screenResults');
  $('historyFab').style.display = 'flex';

  const v1 = val('v1'), v2 = val('v2'), v3 = val('v3');
  let inter = `${v1} × ${v2}${v3 ? ' × ' + v3 : ''}`;
  const lensLabels = S.selectedLenses.map(id => LENSES.find(l => l.id === id)?.name).filter(Boolean);

  $('resultsMeta').innerHTML = `
    <div class="results-intersection mono">${inter}</div>
    ${lensLabels.map(l => `<span class="results-badge badge-cyan">${l}</span>`).join('')}
    <span class="results-badge badge-gold">${data.opportunities?.length || 0} opportunities</span>
    <span class="results-badge badge-green">${new Date().toLocaleDateString()}</span>`;

  if (data.topRecommendation || data.topTitle) {
    $('topRecCard').style.display = 'block';
    $('topRecTitle').textContent = data.topTitle || (data.opportunities?.[0]?.title || '');
    $('topRecReason').textContent = data.topRecommendation || '';
  }

  if (data.systemInsight) {
    $('systemInsightCard').style.display = 'block';
    $('systemInsightText').textContent = data.systemInsight;
  }

  $('oppGrid').innerHTML = (data.opportunities || []).map((o, i) => renderOppCard(o, i)).join('');

  setTimeout(() => {
    (data.opportunities || []).forEach((o, i) =>
      animateRing('ring-' + i, o.gbodsScore, getScoreColor(o.gbodsScore))
    );
  }, 100);

  if (data.firstDay1 || data.firstDay2 || data.firstDay3) {
    $('h72Card').style.display = 'block';
    $('hoursPlan').innerHTML = `
      <div class="hours-day"><div class="hours-day-label">DAY 1 — VALIDATE</div><div class="hours-day-text">${data.firstDay1 || '—'}</div></div>
      <div class="hours-day"><div class="hours-day-label">DAY 2 — BUILD</div><div class="hours-day-text">${data.firstDay2 || '—'}</div></div>
      <div class="hours-day"><div class="hours-day-label">DAY 3 — LAUNCH</div><div class="hours-day-text">${data.firstDay3 || '—'}</div></div>`;
  }
}

function renderOppCard(o, i) {
  const rank = o.rank || (i + 1);
  const circ = 2 * Math.PI * 22;
  const scoreColor = getScoreColor(o.gbodsScore);

  return `
  <div class="opp-card ${rank === 1 ? 'rank-1' : ''}" id="ocard-${i}">
    <div class="opp-header" onclick="toggleOpp(${i})">
      <div class="opp-rank ${rank === 1 ? 'r1' : rank === 2 ? 'r2' : ''}">${rank}</div>
      <div class="opp-info">
        <div class="opp-title">${esc(o.title)}</div>
        <div class="opp-tagline">${esc(o.tagline)}</div>
        <div class="opp-chips">
          ${o.namedPain ? `<span class="chip chip-pain">${esc(o.namedPain)}</span>` : ''}
          ${o.quickWin ? `<span class="chip chip-win">⚡ QUICK WIN</span>` : ''}
          ${o.format ? `<span class="chip chip-format">${esc(o.format)}</span>` : ''}
          ${o.price ? `<span class="chip chip-price">${esc(o.price)}</span>` : ''}
        </div>
      </div>
      <div class="opp-scores">
        <div class="score-ring-wrap">
          <div class="score-ring" id="ring-${i}">
            <svg width="52" height="52" viewBox="0 0 52 52">
              <circle class="score-ring-track" cx="26" cy="26" r="22"/>
              <circle class="score-ring-fill" cx="26" cy="26" r="22" id="rf-${i}"
                stroke="${scoreColor}" stroke-dasharray="${circ}" stroke-dashoffset="${circ}"/>
            </svg>
            <div class="score-val" style="color:${scoreColor}">${o.gbodsScore}</div>
          </div>
          <div class="score-label">GBODS</div>
        </div>
        <div class="opp-expand-icon" id="ei-${i}">›</div>
      </div>
    </div>
    <div class="opp-body" id="ob-${i}">
      <div class="radar-wrap">${renderRadar(o)}</div>
      <div class="opp-meta-grid">
        <div class="opp-meta-item"><div class="opp-meta-val">${o.buildHours}h</div><div class="opp-meta-key">Build</div></div>
        <div class="opp-meta-item"><div class="opp-meta-val">${o.daysToRevenue}d</div><div class="opp-meta-key">To Revenue</div></div>
        <div class="opp-meta-item"><div class="opp-meta-val">${o.soloViability}</div><div class="opp-meta-key">Solo Fit</div></div>
        <div class="opp-meta-item"><div class="opp-meta-val">${o.windowUrgency}/10</div><div class="opp-meta-key">Window</div></div>
      </div>
      ${o.namedPain ? `<div class="stage-block"><div class="stage-block-title cyan">STAGE 1 · Named Pain</div><div class="stage-block-content"><strong>${esc(o.namedPain)}</strong></div></div>` : ''}
      ${o.contradiction ? `<div class="stage-block"><div class="stage-block-title gold">STAGE 2 · TRIZ Contradiction</div><div class="stage-block-content">${esc(o.contradiction)}</div></div>` : ''}
      ${o.realJob ? `<div class="stage-block"><div class="stage-block-title cyan">STAGE 3 · Real Job (JTBD)</div><div class="stage-block-content">${esc(o.realJob)}</div></div>` : ''}
      ${o.adjacentBorrow ? `<div class="stage-block"><div class="stage-block-title">STAGE 4 · Adjacent Borrow</div><div class="stage-block-content">${esc(o.adjacentBorrow)}</div></div>` : ''}
      ${o.blockingAssumption ? `<div class="stage-block"><div class="stage-block-title">STAGE 5 · Blocking Assumption</div><div class="stage-block-content">${esc(o.blockingAssumption)}</div></div>` : ''}
      ${(o.brokenFlow || o.reroutedFlow) ? `<div class="stage-block"><div class="stage-block-title green">STAGE 6 · Value Flow</div>
        <div class="flow-box">
          ${o.brokenFlow ? `<div class="flow-row"><span class="flow-label">BROKEN</span><div class="flow-content broken">${esc(o.brokenFlow)}</div></div>` : ''}
          ${o.reroutedFlow ? `<div class="flow-row"><span class="flow-label">FIXED</span><div class="flow-content fixed">${esc(o.reroutedFlow)}</div></div>` : ''}
        </div></div>` : ''}
      ${o.signals?.length ? `<div class="stage-block"><div class="stage-block-title cyan">STAGE 7 · Converging Signals</div>
        <div class="signal-chips">${o.signals.map(s => `<span class="signal-chip">${esc(s)}</span>`).join('')}</div></div>` : ''}
      ${o.paradigm ? `<div class="stage-block"><div class="stage-block-title purple">STAGE 8 · Paradigm</div><div class="paradigm-box">"${esc(o.paradigm)}"</div></div>` : ''}
      ${o.distribution?.length ? `<div class="stage-block"><div class="stage-block-title">Distribution</div>
        <div class="dist-list">${o.distribution.map(d => `<span class="dist-chip">${esc(d)}</span>`).join('')}</div></div>` : ''}
    </div>
  </div>`;
}

function toggleOpp(i) {
  const body = $('ob-' + i);
  const icon = $('ei-' + i);
  const open = body.classList.toggle('open');
  icon.style.transform = open ? 'rotate(90deg)' : '';
  if (open) {
    const o = S.analysisResult?.opportunities?.[i];
    if (o) animateRing('ring-' + i, o.gbodsScore, getScoreColor(o.gbodsScore));
  }
}

function animateRing(id, score, color) {
  const el = $('rf-' + id.split('-')[1]);
  if (!el) return;
  const circ = 2 * Math.PI * 22;
  const offset = circ - (score / 100) * circ;
  el.style.strokeDashoffset = offset;
  el.setAttribute('stroke', color);
}

function getScoreColor(score) {
  if (score >= 80) return 'var(--green)';
  if (score >= 70) return 'var(--gold)';
  if (score >= 60) return 'var(--cyan)';
  return 'var(--red)';
}

// ─── MICRO-NICHE SUGGESTION CHIPS ───────────────────

function showSuggestionLoading(vectorId) {
  var container = $('sug-' + vectorId);
  if (!container) return;
  container.innerHTML =
    '<div class="sug-loading">' +
    '<span class="sug-spinner"></span>' +
    '<span class="sug-loading-text">Finding micro-niches\u2026</span>' +
    '</div>';
  container.style.display = 'flex';
}

function renderSuggestionChips(vectorId, suggestions) {
  var container = $('sug-' + vectorId);
  if (!container) return;

  container.innerHTML =
    '<div class="sug-row">' +
    '<span class="sug-label">Narrow to \u2192</span>' +
    suggestions.map(function(s, i) {
      return '<button class="sug-chip" data-vid="' + vectorId + '" data-idx="' + i + '" title="' + esc(s) + '">' + esc(s) + '</button>';
    }).join('') +
    '<button class="sug-refresh" data-vid="' + vectorId + '" title="Refresh suggestions">\u21BB</button>' +
    '</div>';

  container.querySelectorAll('.sug-chip').forEach(function(btn) {
    btn.addEventListener('mousedown', function(e) {
      var idx = parseInt(btn.getAttribute('data-idx'));
      applySuggestion(e, vectorId, suggestions[idx]);
    });
  });
  container.querySelector('.sug-refresh').addEventListener('mousedown', function(e) {
    refreshSuggestions(e, vectorId);
  });

  container.style.display = 'flex';
}

function hideSuggestions(vectorId) {
  var container = $('sug-' + vectorId);
  if (container) {
    container.style.display = 'none';
    container.innerHTML = '';
  }
}

function applySuggestion(e, vectorId, suggestion) {
  e.preventDefault();
  var input = $(vectorId);
  if (!input) return;
  input.value = suggestion;
  input.dispatchEvent(new Event('input', { bubbles: true }));
  updateMath();
  hideSuggestions(vectorId);

  if (S.step === 3 && val('v1') && val('v2')) {
    softAlignLenses();
  }

  showToast('Applied: "' + suggestion + '"', 'success');
}

function refreshSuggestions(e, vectorId) {
  e.preventDefault();
  S.microSuggestions[vectorId] = [];
  fetchVectorSuggestions(vectorId);
}

// ─── LENS SOFT HIGHLIGHT ────────────────────────────

function highlightAlignedLenses(lensIds) {
  document.querySelectorAll('.lens-chip.soft-aligned').forEach(function(el) {
    el.classList.remove('soft-aligned');
  });

  lensIds.forEach(function(id) {
    var chip = $('lc-' + id);
    if (chip && !chip.classList.contains('selected')) {
      chip.classList.add('soft-aligned');
    }
  });
}
