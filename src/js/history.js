// ═══════════════════════════════════════════════════════
// GBODS ENGINE V5 PRO — History Management
// ═══════════════════════════════════════════════════════

const HISTORY_KEY = 'gbods_v5_history';
const HISTORY_MAX = 20;

function saveToHistory(data) {
  const history = JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');
  const v1 = val('v1');
  const v2 = val('v2');
  history.unshift({
    id: Date.now(),
    intersection: `${v1} × ${v2}`,
    count: data.opportunities?.length || 0,
    topScore: data.opportunities?.[0]?.gbodsScore || 0,
    topTitle: data.opportunities?.[0]?.title || '',
    date: new Date().toLocaleDateString(),
    model: S.currentModel,
    data,
  });
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history.slice(0, HISTORY_MAX)));
  loadHistory();
}

function loadHistory() {
  const history = JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');
  const list = $('historyList');
  if (!list) return;
  if (!history.length) {
    list.innerHTML = '<div class="history-empty">No analyses yet</div>';
    return;
  }
  list.innerHTML = history.map(h => `
    <div class="history-item" onclick="loadHistoryItem(${h.id})">
      <div class="history-item-title">${esc(h.topTitle || h.intersection)}</div>
      <div class="history-item-meta">${esc(h.intersection)} · Score ${h.topScore} · ${h.date}</div>
    </div>`).join('');
}

function loadHistoryItem(id) {
  const history = JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');
  const item = history.find(h => h.id === id);
  if (item?.data) {
    S.analysisResult = item.data;
    showResults(item.data);
    toggleHistory();
  }
}

function toggleHistory() {
  $('historyDrawer').classList.toggle('open');
}
