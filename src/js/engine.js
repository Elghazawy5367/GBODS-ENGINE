// ═══════════════════════════════════════════════════════
// GBODS ENGINE V5 PRO — Core Analysis Engine
// API calls, streaming, prompt building, result parsing
// ═══════════════════════════════════════════════════════

// ─── API CALL ───────────────────────────────────────

async function callAPI(messages, maxTokens, stream, signal) {
  const key = getApiKey();
  return fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    signal,
    headers: {
      'Authorization': 'Bearer ' + key,
      'Content-Type': 'application/json',
      'HTTP-Referer': 'https://gbods.app',
      'X-Title': 'GBODS Engine V5 PRO',
    },
    body: JSON.stringify({
      model: S.currentModel,
      messages,
      max_tokens: maxTokens,
      temperature: stream ? 0.72 : 0.5,
      stream,
    })
  });
}

// ─── VECTOR MICRO-NICHE SUGGESTIONS ─────────────────

const NICHE_SEEDS = {
  adhd:         ['ADHD freelance coaches', 'ADHD productivity system sellers', 'ADHD remote workers', 'ADHD content creators', 'ADHD parent entrepreneurs', 'ADHD college students online', 'ADHD women solopreneurs'],
  freelance:    ['Freelance designers on Fiverr', 'Freelance writers niche blogs', 'Freelance devs no-code pivot', 'Freelance burnt-out consultants', 'Freelance moms part-time', 'Freelance tax-confused creators', 'Freelance pricing struggle'],
  fitness:      ['Home fitness over 40', 'Fitness creators on YouTube', 'Fitness for desk workers', 'Postpartum fitness coaching', 'Fitness meal-prep sellers', 'Fitness wearable data nerds', 'Fitness accountability groups'],
  creator:      ['Creator economy burnout', 'Creators under 1K followers', 'Creators licensing digital art', 'Creators selling templates', 'Creators pivoting to courses', 'Creators monetizing newsletters', 'Creators with niche podcasts'],
  ecommerce:    ['Etsy digital product sellers', 'Shopify one-product stores', 'Print-on-demand niche merch', 'Amazon KDP low-content books', 'Ecommerce micro-brand builders', 'Ecommerce subscription boxes', 'Ecommerce dropship alternatives'],
  health:       ['Gut health meal planners', 'Mental health journaling tools', 'Health-anxious self-trackers', 'Chronic pain remote workers', 'Health coaches on Instagram', 'Sleep optimization seekers', 'Burnout recovery programs'],
  education:    ['Online tutors niche subjects', 'Education course creators', 'Homeschool curriculum sellers', 'Education micro-credential builders', 'Language learning community', 'Education accessibility tools', 'STEM bootcamp alternatives'],
  finance:      ['Finance for freelancers', 'Crypto-curious beginners', 'Budget-anxious millennials', 'Finance content creators', 'Debt-free journey community', 'Finance automation tools', 'Side-income passive seekers'],
  parenting:    ['Parenting neurodivergent kids', 'Single parent side hustles', 'Parenting toddler sleep help', 'Parenting digital safety tools', 'Parenting homeschool community', 'Parenting meal planning', 'New parent overwhelm support'],
  technology:   ['No-code app builders', 'AI prompt engineers', 'Tech-adjacent career switchers', 'Technology accessibility advocates', 'Tech-overwhelmed small biz', 'Low-code automation sellers', 'AI content tool reviewers'],
  gaming:       ['Indie game devs marketing', 'Gaming content micro-niches', 'Retro gaming collectors', 'Gaming accessibility advocates', 'Mobile game monetization', 'Gaming community builders', 'Esports coaching services'],
  pet:          ['Pet nutrition consultants', 'Dog training online courses', 'Pet anxiety product sellers', 'Exotic pet community builders', 'Pet content creators', 'Senior pet care guides', 'Pet subscription box curators'],
  food:         ['Meal prep for busy parents', 'Food allergy recipe creators', 'Sourdough micro-bakers online', 'Food photography educators', 'Ethnic cuisine niche blogs', 'Food truck business guides', 'Plant-based meal planners'],
  beauty:       ['Clean beauty micro-brands', 'Beauty over 50 creators', 'Skincare for sensitive skin', 'Beauty on a budget guides', 'DIY beauty recipe sellers', 'Beauty tech tool reviewers', 'Inclusive beauty educators'],
  travel:       ['Budget solo travel guides', 'Van life content creators', 'Travel for remote workers', 'Accessible travel planners', 'Travel micro-niche bloggers', 'Weekend trip itinerary sellers', 'Travel reward point optimizers'],
  productivity: ['Notion template creators', 'Productivity for ADHD brains', 'Digital minimalism coaches', 'Productivity journal sellers', 'Time-blocking system builders', 'Productivity podcast niche', 'Automation workflow sellers'],
  community:    ['Paid community builders', 'Niche Discord moderators', 'Community-led growth coaches', 'Membership site creators', 'Community event organizers', 'Slack community monetizers', 'Local meetup platform builders'],
  coaching:     ['Life coaching niche pivots', 'Career coaching for introverts', 'Coaching for new managers', 'Health coaching certification', 'Coaching package designers', 'Group coaching facilitators', 'Executive coaching solopreneurs'],
  writing:      ['Newsletter monetization niche', 'Self-publishing low-content', 'Copywriting for SaaS landing', 'Ghostwriting for founders', 'Technical writing freelancers', 'Writing accountability groups', 'Journaling prompt sellers'],
  design:       ['Canva template sellers', 'UX for no-code builders', 'Brand identity micro-agencies', 'Design system freelancers', 'Social media template shops', 'Presentation design niche', 'Icon and illustration licensing'],
};

function getLocalSuggestions(input, vectorId) {
  var q = input.toLowerCase();
  var matched = [];

  var keys = Object.keys(NICHE_SEEDS);
  for (var i = 0; i < keys.length; i++) {
    if (q.indexOf(keys[i]) !== -1 || keys[i].indexOf(q) !== -1) {
      matched = matched.concat(NICHE_SEEDS[keys[i]]);
    }
  }

  if (matched.length === 0) {
    var words = q.split(/\s+/);
    for (var w = 0; w < words.length; w++) {
      if (words[w].length < 3) continue;
      for (var k = 0; k < keys.length; k++) {
        var seeds = NICHE_SEEDS[keys[k]];
        for (var s = 0; s < seeds.length; s++) {
          if (seeds[s].toLowerCase().indexOf(words[w]) !== -1) {
            matched.push(seeds[s]);
          }
        }
      }
    }
  }

  if (matched.length === 0) {
    matched = [
      input + ' for beginners',
      input + ' passive income',
      input + ' micro-community',
      input + ' digital products',
      input + ' underserved pain'
    ];
  }

  var unique = [];
  var seen = {};
  for (var u = 0; u < matched.length; u++) {
    var lower = matched[u].toLowerCase();
    if (!seen[lower] && lower !== q) {
      seen[lower] = true;
      unique.push(matched[u]);
    }
  }

  // Shuffle for variety on refresh
  for (var j = unique.length - 1; j > 0; j--) {
    var r = Math.floor(Math.random() * (j + 1));
    var tmp = unique[j];
    unique[j] = unique[r];
    unique[r] = tmp;
  }

  return unique.slice(0, 5);
}

async function fetchVectorSuggestions(vectorId) {
  if (S.suggestionLoading[vectorId]) return;

  var currentVal = val(vectorId);
  if (!currentVal || currentVal.length < 4) return;

  if (!getApiKey()) {
    var local = getLocalSuggestions(currentVal, vectorId);
    S.microSuggestions[vectorId] = local;
    renderSuggestionChips(vectorId, local);
    return;
  }

  S.suggestionLoading[vectorId] = true;
  showSuggestionLoading(vectorId);

  var v1Val = val('v1');
  var v2Val = val('v2');
  var v3Val = val('v3');

  var contextBlock = '';
  if (vectorId === 'v1') {
    contextBlock = 'You are helping define the BASE niche for a blue ocean opportunity system.\nCurrent V1 input: "' + currentVal + '"';
  } else if (vectorId === 'v2') {
    contextBlock = 'V1 (base niche) is already set to: "' + v1Val + '"\nYou are narrowing the INTERSECTION niche (V2).\nCurrent V2 input: "' + currentVal + '"';
  } else {
    contextBlock = 'V1 = "' + v1Val + '", V2 = "' + v2Val + '"\nYou are deepening with a sub-community (V3).\nCurrent V3 input: "' + currentVal + '"';
  }

  var prompt = contextBlock + '\n\nGenerate exactly 5 micro/sub-niche refinements for this vector. Each must be:\n- More specific than the user\'s input (add a qualifier, platform, behavior, or pain context)\n- 3-6 words maximum\n- Commercially interesting — implies a real unserved pain\n- Distinct from each other (no near-duplicates)\n\nReturn ONLY a raw JSON array, no markdown, no preamble:\n["suggestion one","suggestion two","suggestion three","suggestion four","suggestion five"]';

  try {
    var res = await callAPI(
      [{ role: 'user', content: prompt }],
      200,
      false,
      null
    );
    var data = await res.json();
    var text = data.choices?.[0]?.message?.content || '';
    var match = text.match(/\[[\s\S]*?\]/);
    if (match) {
      var suggestions = JSON.parse(match[0]).slice(0, 5);
      S.microSuggestions[vectorId] = suggestions;
      renderSuggestionChips(vectorId, suggestions);

      if (val('v1') && val('v2')) {
        softAlignLenses();
      }
    } else {
      var fallback = getLocalSuggestions(currentVal, vectorId);
      S.microSuggestions[vectorId] = fallback;
      renderSuggestionChips(vectorId, fallback);
    }
  } catch (e) {
    var fallback = getLocalSuggestions(currentVal, vectorId);
    S.microSuggestions[vectorId] = fallback;
    renderSuggestionChips(vectorId, fallback);
  } finally {
    S.suggestionLoading[vectorId] = false;
  }
}

async function softAlignLenses() {
  if (S.selectedLenses.length >= 2) return;

  const v1Val = val('v1'), v2Val = val('v2'), v3Val = val('v3');
  const lensIds = LENSES.map(l => l.id).join(', ');

  const prompt = 'Given this emerging niche intersection:\nV1: "' + v1Val + '"\nV2: "' + v2Val + '"' + (v3Val ? '\nV3: "' + v3Val + '"' : '') + '\n\nFrom this lens list: ' + lensIds + '\n\nReturn ONLY a raw JSON array of the 2 lens IDs that would most amplify commercial opportunity at this intersection. No markdown:\n["lens_id_1","lens_id_2"]';

  try {
    const res = await callAPI([{ role: 'user', content: prompt }], 80, false, null);
    const data = await res.json();
    const text = data.choices?.[0]?.message?.content || '';
    const match = text.match(/\[[\s\S]*?\]/);
    if (match) {
      const aligned = JSON.parse(match[0]);
      highlightAlignedLenses(aligned);
    }
  } catch (e) { /* silent fail */ }
}

// ─── LENS + PAIN SCOUT (combined) ───────────────────

async function runLensScout() {
  const key = getApiKey();
  if (!key) {
    $('lensAiBanner').style.display = 'none';
    return;
  }
  const v1 = val('v1'), v2 = val('v2'), v3 = val('v3');

  $('lensAiBanner').style.display = 'flex';
  $('lensAiText').textContent = '✦ Scanning intersection for best lenses…';

  const lensIds = LENSES.map(l => l.id).join(', ');
  const prompt = `You are a GBODS analyst. Given this niche intersection: V1="${v1}", V2="${v2}"${v3 ? `, V3="${v3}"` : ''}

From this list: ${lensIds}

Return ONLY a JSON object — no other text:
{"suggested":[{"id":"<lens_id>","reason":"<12 word max reason>"},{"id":"...","reason":"..."},{"id":"...","reason":"..."}],"pains":["2-4 word coined label","2-4 word coined label","2-4 word coined label"]}

Pick the 3 lenses that most amplify commercial opportunity. Also identify 3 unnamed compounding pains ONLY visible at this intersection.`;

  try {
    const res = await callAPI([{ role: 'user', content: prompt }], 400, false);
    const data = await res.json();
    const text = data.choices?.[0]?.message?.content || '';
    const match = text.match(/\{[\s\S]*\}/);
    if (match) {
      const parsed = JSON.parse(match[0]);

      // Lens suggestions
      if (parsed.suggested?.length) {
        S.suggestedLenses = parsed.suggested.map(s => s.id);
        parsed.suggested.forEach(s => {
          const chip = $('lc-' + s.id);
          if (chip) {
            chip.classList.add('ai-suggested');
            const reasonEl = $('lr-' + s.id);
            if (reasonEl) { reasonEl.textContent = s.reason; reasonEl.style.display = 'block'; }
          }
        });
        $('lensAiText').textContent = `✦ AI-suggested lenses for ${v1} × ${v2} — marked with ✦`;

        // Auto-select if none selected
        if (S.selectedLenses.length === 0) {
          parsed.suggested.slice(0, 3).forEach(s => {
            if (S.selectedLenses.length < 3) {
              S.selectedLenses.push(s.id);
              const chip = $('lc-' + s.id);
              const cb = $('lcb-' + s.id);
              if (chip) chip.classList.add('selected');
              if (cb) cb.checked = true;
            }
          });
        }
      }

      // Pain scout (combined in same call)
      if (parsed.pains?.length) {
        $('painScoutArea').style.display = 'block';
        $('painPills').innerHTML = parsed.pains.map((p, i) => `
          <div class="pain-pill" id="pp-${i}" onclick="selectPain(${i},'${p.replace(/'/g, "\\'")}')">${p}</div>
        `).join('');
      }
    }
  } catch (e) {
    $('lensAiBanner').style.display = 'none';
  }
}

// ─── MAIN ANALYSIS ──────────────────────────────────

async function runAnalysis() {
  const key = getApiKey();
  if (!key) { toggleSettings(); showToast('Please enter your OpenRouter API key', 'error'); return; }
  const v1 = val('v1'), v2 = val('v2');
  if (!v1 || !v2) { showToast('V1 and V2 are required', 'error'); return; }

  showScreen('screenAnalysis');
  setupAnalysisSidebar(v1, v2);
  setStatusThinking('Analyzing intersection…', 'Stages running in parallel');
  $('btnAbort').style.display = 'inline-flex';

  const prompt = buildV5Prompt();
  const sysPrompt = buildSystemPrompt();

  try {
    await streamAnalysis(sysPrompt, [{ role: 'user', content: prompt }]);
  } catch (err) {
    if (err.name === 'AbortError') {
      showToast('Analysis aborted', 'error');
    } else {
      showToast('Analysis failed: ' + (err.message || 'Check API key + model'), 'error');
    }
    showScreen('screenSetup');
    goStepDirect(3);
  } finally {
    $('btnAbort').style.display = 'none';
    S.abortController = null;
  }
}

function abortAnalysis() {
  if (S.abortController) {
    S.abortController.abort();
    S.streaming = false;
  }
}

// ─── STREAMING ──────────────────────────────────────

async function streamAnalysis(sysPrompt, messages, retryCount = 0) {
  const key = getApiKey();
  S.abortController = new AbortController();

  $('thinkingBox').style.display = 'none';
  const streamBox = $('streamBox');
  streamBox.style.display = 'block';
  streamBox.innerHTML = '';

  let cursor = document.createElement('span');
  cursor.className = 'cursor';
  streamBox.appendChild(cursor);

  let fullText = '';
  let currentStage = 0;
  S.streaming = true;

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      signal: S.abortController.signal,
      headers: {
        'Authorization': 'Bearer ' + key,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://gbods.app',
        'X-Title': 'GBODS Engine V5 PRO',
      },
      body: JSON.stringify({
        model: S.currentModel,
        messages: [{ role: 'system', content: sysPrompt }, ...messages],
        stream: true,
        max_tokens: 6000,
        temperature: 0.72,
      })
    });

    if (!response.ok) {
      const err = await response.text();
      if (response.status === 429 && retryCount < 3) {
        const delay = Math.pow(2, retryCount) * 1000;
        showToast(`Rate limited — retrying in ${delay / 1000}s…`, 'error');
        await new Promise(r => setTimeout(r, delay));
        return streamAnalysis(sysPrompt, messages, retryCount + 1);
      }
      throw new Error(`API ${response.status}: ${err}`);
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      const chunk = decoder.decode(value);
      const lines = chunk.split('\n');
      for (const line of lines) {
        if (!line.startsWith('data: ')) continue;
        const data = line.slice(6);
        if (data === '[DONE]') break;
        try {
          const json = JSON.parse(data);
          const delta = json.choices?.[0]?.delta?.content || '';
          if (delta) {
            fullText += delta;
            renderStreamChunk(streamBox, cursor, delta, fullText);
            const stageMatch = fullText.match(/STAGE\s+(\d+)/gi);
            if (stageMatch) {
              const latest = parseInt(stageMatch[stageMatch.length - 1].match(/\d+/)[0]);
              if (latest > currentStage) {
                markStage(currentStage, 'done');
                currentStage = latest;
                markStage(currentStage, 'running');
                $('analysisStatusText').textContent = `Stage ${currentStage}/8 — ${STAGES[currentStage - 1]?.name}`;
              }
            }
          }
        } catch (e) {}
      }
    }
  } catch (e) {
    if (e.name === 'AbortError') throw e;
    if (retryCount < 2) {
      const delay = Math.pow(2, retryCount) * 1500;
      showToast(`Connection error — retrying in ${delay / 1000}s…`, 'error');
      await new Promise(r => setTimeout(r, delay));
      return streamAnalysis(sysPrompt, messages, retryCount + 1);
    }
    throw e;
  }

  S.streaming = false;
  STAGES.forEach(s => markStage(parseInt(s.num), 'done'));
  cursor.remove();
  S.rawText = fullText;
  parseAndShowResults(fullText);
}

function renderStreamChunk(box, cursor, delta, full) {
  cursor.remove();
  const span = document.createElement('span');
  span.textContent = delta;
  if (/STAGE\s+\d+/i.test(full.slice(-80))) span.className = 'stage-marker';
  if (/NAMED PAIN:|PAIN COIN:/i.test(full.slice(-60))) span.className = 'pain-marker';
  if (/PARADIGM:/i.test(full.slice(-60))) span.className = 'paradigm-marker';
  box.appendChild(span);
  box.appendChild(cursor);
  box.scrollTop = box.scrollHeight;
}

function markStage(num, state) {
  if (num < 1 || num > 8) return;
  const dot = $('sd-' + num);
  const row = $('sr-' + num);
  if (dot) dot.className = 'stage-dot' + (state ? ' ' + state : '');
  if (row) row.className = 'stage-row' + (state ? ' ' + state : '');
}

// ─── PROMPT BUILDER ─────────────────────────────────

function buildSystemPrompt() {
  return `You are GBODS Engine V5 PRO — a precision blue ocean opportunity discovery system.

MISSION: Find unnamed, unserved pain at the mathematical intersection of niche vectors. This pain is INVISIBLE to any expert working inside a single domain.

OUTPUT RULES:
- Apply all 8 GBODS stages to every opportunity
- Be hyper-specific. Never give generic advice
- Coin precise 2-4 word labels for unnamed pains
- All opportunities must pass the constraint profile — REJECT anything that violates it
- GBODS Score = (Solo Viability × 0.40) + (Effort/Income × 0.30) + (Window Urgency × 10 × 0.30)
- Format output with clear stage markers: "── STAGE N NAME ──"
- Output MUST end with a valid JSON block wrapped in \`\`\`json ... \`\`\``;
}

function buildV5Prompt() {
  const v1 = val('v1'), v2 = val('v2'), v3 = val('v3');
  const role = val('role'), income = val('income');
  const tl = val('timeline'), hrs = val('hours');
  const budget = val('budget'), skills = val('skills');
  const cons = val('constraints');
  const depth = val('depth');
  const selectedLensNames = S.selectedLenses.map(id => LENSES.find(l => l.id === id)?.name).filter(Boolean);

  let p = `# GBODS V5 PRO ANALYSIS REQUEST
Intersection: ${v1} × ${v2}${v3 ? ' × ' + v3 : ''}${selectedLensNames.length ? ' + [' + selectedLensNames.join(', ') + ']' : ''}

## CONSTRAINT PROFILE
Role: ${role} | Income Goal: ${income} | Days to Revenue: ${tl} | Weekly Hours: ${hrs} | Budget: ${budget} | Skills: ${skills}
Hard Constraints: ${cons}

## HARD REJECTION RULES
✗ Coding/SaaS ✗ Team ✗ Budget>${budget} ✗ Active delivery ✗ ${cons}

## NICHE INTERSECTION MATRIX
V1: ${v1}
V2: ${v2}${v3 ? '\nV3: ' + v3 : ''}
${selectedLensNames.length ? '\n## ACTIVE LENSES\n' + selectedLensNames.join(', ') : ''}
${S.selectedPain ? `\n## PAIN FOCUS\n"${S.selectedPain}" — ensure opportunity #1 addresses this` : ''}`;

  if (S.whisperOn) {
    const focus = val('whisperFocus');
    p += `\n\n## WEB WHISPERS
Surface CURRENT signals in Stage 7: platform changes, community pain discourse, new tools, cultural shifts, emerging niches.
${focus ? 'Focus: ' + focus : ''}
Rate window urgency 1-10 with specific justification.`;
  }

  p += `\n\n## INSTRUCTIONS
Generate exactly ${depth} opportunities ranked by GBODS Score.

For EACH use this EXACT format:

OPPORTUNITY #[N] | GBODS: [score]
TITLE: [name] | TAGLINE: [sentence] | TARGET: [person] | QUICK WIN: [YES/NO]

── STAGE 1 LOCATE ──
NAMED PAIN: [2-4 words] | PAIN: [2-3 sentences]

── STAGE 2 DIAGNOSE ──
CONTRADICTION: [Better X makes Y worse] | TRIZ: [principle]

── STAGE 3 SPECIFY ──
REAL JOB: [When I..., help me... so I can...] | GAP: [why current fails]

── STAGE 4 EXPAND ──
ADJACENT: [industry] | BORROW: [mechanic]

── STAGE 5 EXCAVATE ──
ASSUMPTION: [false belief] | DISSOLVE: [what's possible]

── STAGE 6 ARCHITECT ──
BROKEN: [current flow] | REROUTED: [fixed flow]

── STAGE 7 TIME ──
SIGNAL 1-3: [forces] | WINDOW: [X/10] — [why now]

── STAGE 8 LEVERAGE ──
PARADIGM: "[frame-shifting statement]"

── PRODUCT ──
FORMAT: [type] | PRICE: [$XX] | BUILD: [Xh] | DAYS TO $: [X] | DISTRIBUTION: [channels]

── SCORES ──
GBODS: [0-100] | SOLO VIABILITY: [0-100] | EFFORT-INCOME: [0-100] | WINDOW URGENCY: [1-10]

---

After all: TOP RECOMMENDATION + SYSTEM INSIGHT + FIRST 72 HOURS (DAY 1/2/3)`;

  if (S.enrichments.includes('competitor')) {
    p += `\nAdd per opp: COMPETITOR: [alt] | FAIL: [reason] | DISPLACE: "Unlike [X]..."`;
  }
  if (S.enrichments.includes('pricing')) {
    p += `\nAdd per opp: PAIN ANCHOR: [$] | TRANSFORM VALUE: [$] | ENTRY PRICE: [$]`;
  }

  p += `\n\nEnd with JSON block:
\`\`\`json
{"opportunities":[{"rank":1,"title":"","tagline":"","namedPain":"","contradiction":"","realJob":"","blockingAssumption":"","brokenFlow":"","reroutedFlow":"","adjacentBorrow":"","signals":[],"paradigm":"","format":"","price":"","buildHours":0,"daysToRevenue":0,"gbodsScore":0,"soloViability":0,"effortIncome":0,"windowUrgency":0,"quickWin":false,"distribution":[]}],"topRecommendation":"","topTitle":"","systemInsight":"","firstDay1":"","firstDay2":"","firstDay3":""}
\`\`\``;

  return p;
}

// ─── RESULT PARSING ─────────────────────────────────

function parseAndShowResults(fullText) {
  let result = null;

  const jsonMatch = fullText.match(/```json\s*([\s\S]*?)```/);
  if (jsonMatch) {
    try {
      const cleaned = jsonMatch[1]
        .replace(/,(\s*[}\]])/g, '$1')
        .replace(/[\x00-\x1F\x7F]/g, ' ');
      result = JSON.parse(cleaned);
    } catch (e) {}
  }

  if (!result || !result.opportunities?.length) {
    result = parseFromText(fullText);
  }

  if (result?.opportunities) {
    result.opportunities.forEach(o => {
      o.gbodsScore = clamp(o.gbodsScore, 0, 100);
      o.soloViability = clamp(o.soloViability, 0, 100);
      o.effortIncome = clamp(o.effortIncome, 0, 100);
      o.windowUrgency = clamp(o.windowUrgency, 1, 10);
    });
  }

  S.analysisResult = result;
  saveToHistory(result);
  showResults(result);
}

function parseFromText(text) {
  const opps = [];
  const oppBlocks = text.split(/OPPORTUNITY #\d+/i).slice(1);

  oppBlocks.forEach((block, i) => {
    const get = (key) => {
      const m = block.match(new RegExp(key + ':?\\s*(.+?)(?=\\n[A-Z ─]{3,}:|$)', 'is'));
      return m ? m[1].trim() : '';
    };
    const getScore = (key) => {
      const m = block.match(new RegExp(key + ':?\\s*(\\d+)', 'i'));
      return m ? parseInt(m[1]) : 70;
    };

    opps.push({
      rank: i + 1,
      title: get('TITLE') || `Opportunity ${i + 1}`,
      tagline: get('TAGLINE'),
      namedPain: get('NAMED PAIN'),
      contradiction: get('CONTRADICTION'),
      realJob: get('REAL JOB'),
      blockingAssumption: get('ASSUMPTION'),
      brokenFlow: get('BROKEN'),
      reroutedFlow: get('REROUTED'),
      adjacentBorrow: get('ADJACENT') + (get('BORROW') ? ' — ' + get('BORROW') : ''),
      signals: [get('SIGNAL 1'), get('SIGNAL 2'), get('SIGNAL 3')].filter(Boolean),
      paradigm: get('PARADIGM').replace(/^"|"$/g, ''),
      format: get('FORMAT'),
      price: get('PRICE'),
      buildHours: parseInt(get('BUILD')) || 8,
      daysToRevenue: parseInt(get('DAYS TO')) || 7,
      gbodsScore: getScore('GBODS'),
      soloViability: getScore('SOLO VIABILITY'),
      effortIncome: getScore('EFFORT'),
      windowUrgency: getScore('WINDOW'),
      quickWin: /YES/i.test(get('QUICK WIN')),
      distribution: get('DISTRIBUTION').split('·').map(s => s.trim()).filter(Boolean),
    });
  });

  return {
    opportunities: opps,
    topRecommendation: text.match(/TOP RECOMMENDATION:?\s*(.+?)(?:\n|$)/i)?.[1]?.trim() || '',
    topTitle: opps[0]?.title || '',
    systemInsight: text.match(/SYSTEM INSIGHT:?\s*([\s\S]+?)(?:\nFIRST 72|$)/i)?.[1]?.trim() || '',
    firstDay1: text.match(/DAY 1:?\s*(.+?)(?:\n|$)/i)?.[1]?.trim() || '',
    firstDay2: text.match(/DAY 2:?\s*(.+?)(?:\n|$)/i)?.[1]?.trim() || '',
    firstDay3: text.match(/DAY 3:?\s*(.+?)(?:\n|$)/i)?.[1]?.trim() || '',
  };
}
