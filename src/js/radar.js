// ═══════════════════════════════════════════════════════
// GBODS ENGINE V5 PRO — Pure SVG Radar Chart
// ═══════════════════════════════════════════════════════

function renderRadar(o) {
  const dims = [
    { label: 'Solo',   val: (o.soloViability || 0) / 100 },
    { label: 'E/I',    val: (o.effortIncome || 0) / 100 },
    { label: 'Window', val: (o.windowUrgency || 0) / 10 },
    { label: 'GBODS',  val: (o.gbodsScore || 0) / 100 },
  ];
  const cx = 70, cy = 70, r = 50;
  const n = dims.length;
  const angleStep = (2 * Math.PI) / n;
  const gridLevels = [0.25, 0.5, 0.75, 1.0];

  let svg = `<svg width="140" height="140" viewBox="0 0 140 140">`;

  // Grid polygons
  gridLevels.forEach(lv => {
    const pts = dims.map((_, i) => {
      const angle = i * angleStep - Math.PI / 2;
      return `${cx + r * lv * Math.cos(angle)},${cy + r * lv * Math.sin(angle)}`;
    }).join(' ');
    svg += `<polygon class="radar-grid" points="${pts}"/>`;
  });

  // Axis lines
  dims.forEach((_, i) => {
    const angle = i * angleStep - Math.PI / 2;
    svg += `<line x1="${cx}" y1="${cy}" x2="${cx + r * Math.cos(angle)}" y2="${cy + r * Math.sin(angle)}" stroke="var(--line)" stroke-width="0.5"/>`;
  });

  // Data fill polygon
  const fillPts = dims.map((d, i) => {
    const angle = i * angleStep - Math.PI / 2;
    return `${cx + r * d.val * Math.cos(angle)},${cy + r * d.val * Math.sin(angle)}`;
  }).join(' ');
  svg += `<polygon class="radar-fill" points="${fillPts}"/>`;

  // Data dots + labels
  dims.forEach((d, i) => {
    const angle = i * angleStep - Math.PI / 2;
    const dx = cx + r * d.val * Math.cos(angle);
    const dy = cy + r * d.val * Math.sin(angle);
    svg += `<circle class="radar-dot" cx="${dx}" cy="${dy}" r="3"/>`;
    const lx = cx + (r + 14) * Math.cos(angle);
    const ly = cy + (r + 14) * Math.sin(angle);
    svg += `<text x="${lx}" y="${ly}" text-anchor="middle" dominant-baseline="middle">${d.label}</text>`;
  });

  svg += `</svg>`;
  return svg;
}
