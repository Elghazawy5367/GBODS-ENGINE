// ═══════════════════════════════════════════════════════
// GBODS ENGINE V5 PRO — Export Functions
// ═══════════════════════════════════════════════════════

function exportJSON() {
  if (!S.analysisResult) return;
  const blob = new Blob([JSON.stringify(S.analysisResult, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `gbods-${Date.now()}.json`;
  a.click();
  showToast('JSON exported', 'success');
}

function exportMarkdown() {
  if (!S.analysisResult) return;
  const data = S.analysisResult;
  let md = `# GBODS V5 PRO Analysis\n\n`;
  md += `**Intersection:** ${val('v1')} × ${val('v2')}\n`;
  md += `**Date:** ${new Date().toLocaleDateString()}\n`;
  md += `**Model:** ${S.currentModel}\n\n`;

  if (data.topRecommendation) {
    md += `## ◆ Top Recommendation\n**${data.topTitle}**\n${data.topRecommendation}\n\n`;
  }
  if (data.systemInsight) {
    md += `## ◈ System Insight\n${data.systemInsight}\n\n`;
  }

  (data.opportunities || []).forEach(o => {
    md += `## #${o.rank} — ${o.title} (GBODS: ${o.gbodsScore})\n\n`;
    md += `**Tagline:** ${o.tagline}\n\n`;
    md += `| Metric | Value |\n|--------|-------|\n`;
    md += `| Named Pain | ${o.namedPain} |\n`;
    md += `| Format | ${o.format} |\n`;
    md += `| Price | ${o.price} |\n`;
    md += `| Build Time | ${o.buildHours}h |\n`;
    md += `| Days to Revenue | ${o.daysToRevenue} |\n`;
    md += `| Solo Viability | ${o.soloViability}/100 |\n`;
    md += `| Effort/Income | ${o.effortIncome}/100 |\n`;
    md += `| Window Urgency | ${o.windowUrgency}/10 |\n\n`;

    if (o.contradiction) md += `### Stage 2: TRIZ Contradiction\n${o.contradiction}\n\n`;
    if (o.realJob) md += `### Stage 3: Real Job (JTBD)\n${o.realJob}\n\n`;
    if (o.adjacentBorrow) md += `### Stage 4: Adjacent Borrow\n${o.adjacentBorrow}\n\n`;
    if (o.blockingAssumption) md += `### Stage 5: Blocking Assumption\n${o.blockingAssumption}\n\n`;
    if (o.brokenFlow) md += `### Stage 6: Value Flow\n**Broken:** ${o.brokenFlow}\n`;
    if (o.reroutedFlow) md += `**Fixed:** ${o.reroutedFlow}\n\n`;
    if (o.signals?.length) md += `### Stage 7: Signals\n${o.signals.map(s => `- ${s}`).join('\n')}\n\n`;
    if (o.paradigm) md += `### Stage 8: Paradigm\n> "${o.paradigm}"\n\n`;
    if (o.distribution?.length) md += `**Distribution:** ${o.distribution.join(' · ')}\n\n`;
    md += `---\n\n`;
  });

  if (data.firstDay1) {
    md += `## ⚡ First 72 Hours\n`;
    md += `- **Day 1 — Validate:** ${data.firstDay1}\n`;
    md += `- **Day 2 — Build:** ${data.firstDay2}\n`;
    md += `- **Day 3 — Launch:** ${data.firstDay3}\n`;
  }

  const blob = new Blob([md], { type: 'text/markdown' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `gbods-${Date.now()}.md`;
  a.click();
  showToast('Markdown exported', 'success');
}
