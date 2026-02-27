// ═══════════════════════════════════════════════════════
// GBODS ENGINE V5 PRO — Static Configuration Data
// ═══════════════════════════════════════════════════════

const LENSES = [
  { id:'financial',    name:'Financial',       sub:'Profit automation, fee-trauma' },
  { id:'healthcare',   name:'Healthcare',      sub:'Burnout, somatic regulation' },
  { id:'legal',        name:'Legal',           sub:'IP protection, compliance' },
  { id:'technology',   name:'Technology',      sub:'No-code, AI augmentation' },
  { id:'education',    name:'Education',       sub:'Frameworks, curriculum design' },
  { id:'creator',      name:'Creator Economy', sub:'Content systems, licensing' },
  { id:'community',    name:'Community',       sub:'Network effects, belonging' },
  { id:'ai',           name:'AI/Automation',   sub:'Intelligent workflows' },
  { id:'productivity', name:'Productivity',    sub:'EF support, time blindness' },
  { id:'entertainment',name:'Entertainment',   sub:'Gamification, dopamine design' },
];

const ENRICHMENTS = [
  { id:'competitor', label:'🗡 Competitor Displacement', desc:'Make status quo indefensible' },
  { id:'pricing',    label:'💰 Pricing Psychology',      desc:'Pain-anchor + transformation price' },
  { id:'72h',        label:'⚡ First 72 Hours Plan',     desc:'Hour-by-hour Day 1/2/3 sprint' },
  { id:'json',       label:'{ } Structured JSON',        desc:'Machine-readable output included' },
];

const MODELS = [
  { id:'deepseek/deepseek-chat',            name:'DeepSeek V3',      tag:'Fast · Cheap · Strong JSON', badge:'RECOMMENDED', badgeColor:'var(--gold)', costPer1k: 0.0003 },
  { id:'anthropic/claude-sonnet-4-5',       name:'Claude Sonnet 4.5',tag:'Deep paradigms · Best prose', badge:'PREMIUM', badgeColor:'var(--purple)', costPer1k: 0.003 },
  { id:'openai/gpt-4o',                     name:'GPT-4o',           tag:'Balanced · Good tables', badge:'', badgeColor:'', costPer1k: 0.0025 },
  { id:'deepseek/deepseek-r1',              name:'DeepSeek R1',      tag:'Best reasoning · TRIZ depth', badge:'REASONING', badgeColor:'var(--cyan)', costPer1k: 0.0005 },
  { id:'google/gemini-2.5-flash-preview',   name:'Gemini 2.5 Flash', tag:'Fast · Trend-aware', badge:'FAST', badgeColor:'var(--green)', costPer1k: 0.0001 },
  { id:'meta-llama/llama-3.3-70b-instruct', name:'Llama 3.3 70B',   tag:'Free · Private · Capable', badge:'FREE', badgeColor:'var(--green)', costPer1k: 0 },
];

const STAGES = [
  { num:'1', name:'LOCATE',    desc:'Named intersection pain' },
  { num:'2', name:'DIAGNOSE',  desc:'TRIZ contradiction' },
  { num:'3', name:'SPECIFY',   desc:'Jobs-to-be-Done' },
  { num:'4', name:'EXPAND',    desc:'Six paths borrow' },
  { num:'5', name:'EXCAVATE',  desc:'Blocking assumption' },
  { num:'6', name:'ARCHITECT', desc:'Value flow reroute' },
  { num:'7', name:'TIME',      desc:'Window urgency' },
  { num:'8', name:'LEVERAGE',  desc:'Paradigm shift' },
];
