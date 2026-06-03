// ════════════════════════════════════════════════════
//  NÓMINA PRO — app.js
// ════════════════════════════════════════════════════

// ── AGENCIAS POR DEFECTO ──────────────────────────────
const DEFAULT_AGENCIES = [
  { id:'AMIX',             color:'#C2185B', ger_pct:.40, as_pct:.25, bono_pct:.10, is_amix:true,
    members:['AMIX','RAPUNSEL','JANE','TIA TURBINA','ROJO','PANDA','MIMI','HOPPER'] },
  { id:'BAMBINO',          color:'#212121', ger_pct:.30, as_pct:.25, bono_pct:.05, is_amix:false,
    members:['BAMBINO','MAPACHE','POLI'] },
  { id:'BATMAN',           color:'#4E342E', ger_pct:.30, as_pct:.25, bono_pct:.05, is_amix:false,
    members:['BATMAN','HARLEY','SABITO','URSULA','MCLOVIN','COME GALLETAS','NENA'] },
  { id:'LA CASA DE PAPEL', color:'#546E7A', ger_pct:.30, as_pct:.25, bono_pct:.05, is_amix:false,
    members:['PROFESOR TISHA','DENVER','BERLIN','TOKIO','NAIROBI'] },
  { id:'OLIMPUS',          color:'#607D8B', ger_pct:.30, as_pct:.25, bono_pct:.05, is_amix:false,
    members:['OLIMPUS','ATENEA','ZEUS','POSEIDON','ARTEMISA','CRONNOS','AFRODITA'] },
  { id:'FENIX',            color:'#6A1B9A', ger_pct:.30, as_pct:.25, bono_pct:.05, is_amix:false,
    members:['FENIX','PANTHER','DONATO','BLESSED','BLUE','FRIO','CHUCKY'] },
  { id:'MARVEL',           color:'#E65100', ger_pct:.30, as_pct:.25, bono_pct:.05, is_amix:false,
    members:['JEAN GREY','GROOT','DEADPOL','SCARLET WISH','CAPITANA MARVEL','MANTIS','BLACK WIDOW','WOLVERINE','BLACK PANTHER','CAPITAN AMERICA'] },
  { id:'MARCELINE',        color:'#0D47A1', ger_pct:.30, as_pct:.25, bono_pct:.05, is_amix:false,
    members:['MARCELINE','FLAME KING','GRUMOSA','BEEMO','FINN','MENTITA'] },
  { id:'WUERO',            color:'#F9A825', ger_pct:.30, as_pct:.25, bono_pct:.05, is_amix:false,
    members:['WUERO','VIUDA NEGRA','LA BARBIE','EL CHAPO'] },
];

const DAYS       = ['Sábado','Lunes','Martes','Miércoles','Jueves','Viernes'];
const DAYS_SHORT = ['Sáb','Lun','Mar','Mié','Jue','Vie'];

// ── DIRECTORIO ────────────────────────────────────────
const DIRECTORIO = {
  // AMIX
  'AMIX':           { nombres:['ADOLGO GABRIEL PINEDA GOMEZ'], lab:['5551730400'], per:['5621658793'], ag:'AMIX' },
  'RAPUNSEL':       { nombres:['BRENDA ZARRAGA NARZAES','REYNA SUSANA ESTRADA ROSAS'], lab:['5554604358'], per:['5565288744'], ag:'AMIX' },
  'JANE':           { nombres:['BRENDA VILLAFAÑA ROJAS','ALISON GRISEY PEREZ JUARES'], lab:['5554604193','5529486694'], per:['5612589780'], ag:'AMIX' },
  'TIA TURBINA':    { nombres:['LORENA VARGAS HERNANDEZ'], lab:['5522694255','5550763299'], per:['5529687234'], ag:'AMIX' },
  'ROJO':           { nombres:['CRISTIAN GEOBANI AGUIÑLA GUERRERO','ABRAM TORREZ MAGAÑA'], lab:['5511969022'], per:['5630707343'], ag:'AMIX' },
  'PANDA':          { nombres:['SALVADOR ACUÑA NOLASQUEZ'], lab:['7288245391'], per:['5568979690'], ag:'AMIX' },
  'MIMI':           { nombres:['ADELA CAMARILLO RUIZ'], lab:['5575021413'], per:['5550555315'], ag:'AMIX' },
  'HOPPER':         { nombres:['ABIGAIL MICHELL GONZALES MORENO','MONICA HERNANDEZ CORONA'], lab:['5552753063','5554606902'], per:['5523069698'], ag:'AMIX' },
  // BAMBINO
  'BAMBINO':        { nombres:['ABRAHAM TORRES MAGANA','ANGEL HECTOR MARTINEZ ALVAREZ'], lab:['5529485920','5517817509'], per:['5625065681'], ag:'BAMBINO' },
  'MAPACHE':        { nombres:['ADRIAN AVALOS SALAZAR','PATRICIA ROSALINDA TRUJILLO MARIEL'], lab:['5529484147','5550765482'], per:['5523400511'], ag:'BAMBINO' },
  'POLI':           { nombres:['AMERICA SOTO REYES','AMERICA SOTO GONZALEZ'], lab:['5552749762','5511873728'], per:['5572734228'], ag:'BAMBINO' },
  // BATMAN
  'BATMAN':         { nombres:['JESUS CUETO'], lab:[], per:[], ag:'BATMAN' },
  'HARLEY':         { nombres:['ELDA JAZMIN CORTAZAR MORAN','ADRIANA GUTIERREZ ALBERTO'], lab:['5519350892','5656513905'], per:['5549182965'], ag:'BATMAN' },
  'SABITO':         { nombres:['ALEJANDRA MENDOZA DE LA GUARDIA','NORMA EDITH CATALAN SERRANO'], lab:['5664446643','5530508094'], per:['6691444565'], ag:'BATMAN' },
  'URSULA':         { nombres:['GUADALUPE ARACELI GARCIA MARQUEZ','ADRIANA SALOME PERDOMO FLORES'], lab:['5552749225','5656513913'], per:['5616842161'], ag:'BATMAN' },
  'MCLOVIN':        { nombres:['CRISTIAN FRANCISCO ROJAS ANAYA','SERGIO VICTORIA RAMIREZ'], lab:['5551585850','5656513912'], per:['5578402921'], ag:'BATMAN' },
  'COME GALLETAS':  { nombres:['PERLA AMORENE ANAYA DIAZ','ANDREA PINEDA HERNANDEZ'], lab:['5561884961','5630950170'], per:['5525621681'], ag:'BATMAN' },
  'NENA':           { nombres:['ELIZABETH MERCADO SALGADO','RAQUE BUENROSRO SANCHEZ'], lab:['5528917968','5664446627'], per:['7991410159'], ag:'BATMAN' },
  // LA CASA DE PAPEL
  'PROFESOR TISHA': { nombres:['MELISSA PALOMA'], lab:[], per:[], ag:'LA CASA DE PAPEL' },
  'DENVER':         { nombres:['DENVER'], lab:[], per:[], ag:'LA CASA DE PAPEL' },
  'BERLIN':         { nombres:['BERLIN'], lab:[], per:[], ag:'LA CASA DE PAPEL' },
  'TOKIO':          { nombres:['TOKIO'], lab:[], per:[], ag:'LA CASA DE PAPEL' },
  'NAIROBI':        { nombres:['NAIROBI'], lab:[], per:[], ag:'LA CASA DE PAPEL' },
  // OLIMPUS
  'OLIMPUS':        { nombres:['OLIMPUS'], lab:[], per:[], ag:'OLIMPUS' },
  'ATENEA':         { nombres:['ROSA CHRISTINA CHAVEZ NAVA','YANELLI CAROLINA QUESADA GARCIA'], lab:['5574997840'], per:[], ag:'OLIMPUS' },
  'ZEUS':           { nombres:['RODRIGO DURAN RODRIGUEZ','OLIVER VERGARA URBINA'], lab:['5550764613'], per:[], ag:'OLIMPUS' },
  'POSEIDON':       { nombres:['JOSE ANTONIO SANCHEZ ORTIZ','VICTOR HUGO LOPEZ PEREZ'], lab:['5551599549'], per:[], ag:'OLIMPUS' },
  'ARTEMISA':       { nombres:['ADRIANA OVALLE DE LA ROSA','SANDRA DIAS FFERNANDES'], lab:['5522980373','5522693742'], per:[], ag:'OLIMPUS' },
  'CRONNOS':        { nombres:['GERMAN VARELA GARCIA'], lab:['5611705147'], per:[], ag:'OLIMPUS' },
  'AFRODITA':       { nombres:['ZULEMA BETZAI CHARMICHART ALMANZA'], lab:['5618520259'], per:[], ag:'OLIMPUS' },
  // FENIX
  'FENIX':          { nombres:['FENIX'], lab:[], per:[], ag:'FENIX' },
  'PANTHER':        { nombres:['ALEJANDRO ENCINAS NAJERA','GUILLERMO ISRAEL ALMORES MEDINA'], lab:['5535517393','5535020314'], per:['5582263437'], ag:'FENIX' },
  'DONATO':         { nombres:['RUBEN DONATO BARRON GARCIA','ABRAHAM TORRES MAGAÑA'], lab:['5551731315','5561885020'], per:['5615183872'], ag:'FENIX' },
  'BLESSED':        { nombres:['JESUS ANDRES ORTIZ GOMEZ','RAFAEL MONTES PONCE','ABELARDO LEYVA RODRIGUEZ'], lab:['5638032077','5511990458','5656024111'], per:['5560063089'], ag:'FENIX' },
  'BLUE':           { nombres:['EDUARDO REYES GOMEZ'], lab:['5518707844'], per:['5515697933'], ag:'FENIX' },
  'FRIO':           { nombres:['SAMUEL RAZO MORALES'], lab:['5554604021','5645926339'], per:['7442083048'], ag:'FENIX' },
  'CHUCKY':         { nombres:['DEBORA PALAFOX ISLAS','ABIGAIL RODRIGUEZ ZAPATA'], lab:['5662667230','5549429848'], per:['5611376584'], ag:'FENIX' },
  // MARVEL
  'JEAN GREY':      { nombres:['MARTHA ADRIANA RUIZ ALVARADO','HAYDEE SANCHEZ VARGAS'], lab:['5522689270','5534951821'], per:['5619278400'], ag:'MARVEL' },
  'GROOT':          { nombres:['CARLOS PATTERSON OLIVAS','JORGE ADRIAN GOMEZ'], lab:['5522641318'], per:['5510744003'], ag:'MARVEL' },
  'DEADPOL':        { nombres:['ABEL EMILIO CASTORENA'], lab:['5527524080'], per:['7221655529'], ag:'MARVEL' },
  'SCARLET WISH':   { nombres:['PILAR HERNANDEZ TRINIDAD'], lab:['5561493116'], per:['5530847902'], ag:'MARVEL' },
  'CAPITANA MARVEL':{ nombres:['LAURA LETICIA JUAREZ JIMENEZ'], lab:['5551561031'], per:['5610289129'], ag:'MARVEL' },
  'MANTIS':         { nombres:['PERLA AMORENE DIAZ ANAYA'], lab:['5514961745'], per:['5632834929'], ag:'MARVEL' },
  'BLACK WIDOW':    { nombres:['YADIRA JASMIN VERGARA','DANIELA MIRAMONTES RAMIREZ'], lab:['5519318959'], per:['5548862369'], ag:'MARVEL' },
  'WOLVERINE':      { nombres:['BENIGNO GONZALEZ','ABRAM TORRES MAGAÑA'], lab:['5529484808'], per:['5620923288'], ag:'MARVEL' },
  'BLACK PANTHER':  { nombres:['ANTONIO MOISES CAMPOS GOMEZ'], lab:['5626847060'], per:[], ag:'MARVEL' },
  'CAPITAN AMERICA':{ nombres:['MARCO ANTONIO HERNANDEZ MARTINEZ'], lab:['5514926718'], per:['5521911935'], ag:'MARVEL' },
  // MARCELINE
  'MARCELINE':      { nombres:['MARCELINE'], lab:[], per:[], ag:'MARCELINE' },
  'FLAME KING':     { nombres:['ANA LESSLY MONTERO','ADRIANA SALAZAR MONDRAGON'], lab:['5575015142'], per:['5647419043'], ag:'MARCELINE' },
  'MENTITA':        { nombres:['ADRIAN TAPIA MARTINEZ','ALEJANDRO VERGUEZ HERNANDEZ'], lab:['5554606574'], per:['7774974770'], ag:'MARCELINE' },
  'GRUMOSA':        { nombres:['ALEJANDRA VERGARA PEREZ','HAYDEE VARGAS SANCHEZ'], lab:['5534952498'], per:['5553205960'], ag:'MARCELINE' },
  'BEEMO':          { nombres:['ADRIAN ENRIQUE SANTILLAN'], lab:['5549169156','5548718635'], per:['5615044254'], ag:'MARCELINE' },
  'FINN':           { nombres:['CARLOS PATTERSON','ARMANDO MEXICANO'], lab:['5548949466','5538976200'], per:['5567610239'], ag:'MARCELINE' },
  // WUERO
  'WUERO':          { nombres:['ALEJANDRA CAROLINA GARCIA RAMOS'], lab:['5517958269'], per:[], ag:'WUERO' },
  'VIUDA NEGRA':    { nombres:['ALEJANDRA CAROLINA GARCIA RAMOS','MARIA MAGDALENA'], lab:['5527529308'], per:['5517958269'], ag:'WUERO' },
  'LA BARBIE':      { nombres:['HECTOR GARCIA ROMERO','JUAN CARLOS ELIZALDE REYES VAZQUEZ'], lab:['5519333569'], per:['5583375354'], ag:'WUERO' },
  'EL CHAPO':       { nombres:['KELLY OLVERA','ARTURO SALINAS'], lab:['5534956967'], per:['4242562046'], ag:'WUERO' },
};

// ── ESTADO GLOBAL ─────────────────────────────────────
let AGENCIES    = [];
let state       = {};
let curAgency   = 'AMIX';
// Semana: Sáb=0, Lun=1, Mar=2, Mié=3, Jue=4, Vie=5
const _wd = new Date().getDay(); // 0=dom,1=lun...6=sáb
const _dayMap = {6:0, 1:1, 2:2, 3:3, 4:4, 5:5, 0:5}; // dom -> viernes (cierre)
let curDay = _dayMap[_wd] !== undefined ? _dayMap[_wd] : 1;
let openMembers = {};
let quickDays   = {};
let weekOffset  = 0; // 0 = semana actual, -1 = semana pasada, etc.

// ── UTILIDADES ────────────────────────────────────────
function getWeekKey(offset) {
  const off = offset !== undefined ? offset : weekOffset;
  const d = new Date();
  d.setDate(d.getDate() + off * 7);
  // Semana empieza el sábado (día 6)
  const day = d.getDay(); // 0=dom ... 6=sáb
  const diff = day === 6 ? 0 : day + 1; // días desde el sábado anterior
  const sat = new Date(d);
  sat.setDate(d.getDate() - diff);
  return sat.toISOString().slice(0, 10);
}
function weekLabel() {
  if (weekOffset === 0) return 'Semana actual';
  if (weekOffset === -1) return 'Semana pasada';
  return 'Semana ' + getWeekKey();
}
function fmt(n) { return '$' + Math.round(n).toLocaleString('es-MX'); }
function fmtDate(wk) {
  const d = new Date(wk + 'T12:00:00');
  return d.toLocaleDateString('es-MX', { day:'numeric', month:'short', year:'numeric' });
}
function memberKey(agId, m) { return agId + '::' + m; }

// ── PERSISTENCIA (Local + Firebase sync) ─────────────
const DB_URL = 'https://nomina-pro-12291-default-rtdb.firebaseio.com';

async function fbGet(path) {
  try {
    const r = await fetch(`${DB_URL}/${path}.json`);
    return await r.json();
  } catch(e) { return null; }
}
async function fbSet(path, data) {
  try {
    await fetch(`${DB_URL}/${path}.json`, {
      method: 'PUT',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(data)
    });
    showToast('✅ Guardado en la nube');
  } catch(e) { showToast('⚠️ Sin conexión, guardado local'); }
}

function showToast(msg) {
  let t = document.getElementById('toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'toast';
    t.style.cssText = 'position:fixed;bottom:70px;left:50%;transform:translateX(-50%);background:#323232;color:#fff;padding:8px 16px;border-radius:20px;font-size:12px;z-index:999;opacity:0;transition:opacity .3s;white-space:nowrap';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.style.opacity = '1';
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.style.opacity = '0', 2000);
}

async function loadAgencies() {
  const local = localStorage.getItem('nomina_agencies');
  AGENCIES = local ? JSON.parse(local) : JSON.parse(JSON.stringify(DEFAULT_AGENCIES));
  try {
    const remote = await fbGet('agencies');
    if (remote) {
      AGENCIES = remote;
      localStorage.setItem('nomina_agencies', JSON.stringify(AGENCIES));
    }
  } catch(e) {}
}

async function saveAgencies() {
  localStorage.setItem('nomina_agencies', JSON.stringify(AGENCIES));
  fbSet('agencies', AGENCIES);
}

function emptyMember() { return { days: DAYS.map(() => ({ manual:0, pays:[] })) }; }

function initStateMembers() {
  AGENCIES.forEach(ag => {
    if (!state[ag.id]) state[ag.id] = {};
    ag.members.forEach(m => {
      if (!state[ag.id][m]) state[ag.id][m] = emptyMember();
      if (!state[ag.id][m].days) state[ag.id][m].days = DAYS.map(() => ({ manual:0, pays:[] }));
      while (state[ag.id][m].days.length < DAYS.length) state[ag.id][m].days.push({ manual:0, pays:[] });
    });
  });
}

async function loadState() {
  const wk  = getWeekKey();
  const key = 'nomina_' + wk;
  const local = localStorage.getItem(key);
  state = local ? JSON.parse(local) : { week:wk };
  try {
    const remote = await fbGet('weeks/' + wk.replace(/-/g,'_'));
    if (remote) {
      state = remote;
      localStorage.setItem(key, JSON.stringify(state));
    }
  } catch(e) {}
  initStateMembers();
}

async function saveState() {
  const wk = getWeekKey();
  localStorage.setItem('nomina_' + wk, JSON.stringify(state));
  fbSet('weeks/' + wk.replace(/-/g,'_'), state);
}

async function switchWeek(dir) {
  weekOffset += dir;
  await loadState();
  renderAll();
}

// ── CÁLCULOS ──────────────────────────────────────────

// Devuelve las fechas reales de cada día de la semana actual
function getWeekDates() {
  const dates = [];
  const wk  = getWeekKey();
  const sat = new Date(wk + 'T12:00:00');
  // Sáb=+0, Lun=+2, Mar=+3, Mié=+4, Jue=+5, Vie=+6
  [0, 2, 3, 4, 5, 6].forEach(o => {
    const d = new Date(sat);
    d.setDate(sat.getDate() + o);
    dates.push(d);
  });
  return dates;
}
function fmtDayBtn(di) {
  const dates = getWeekDates();
  const d = dates[di];
  const today = new Date();
  const isToday = d.toDateString() === today.toDateString();
  const isPast = d < today && !isToday;
  const day = d.getDate();
  const mon = d.toLocaleDateString('es-MX', { month:'short' });
  return { label: `${DAYS_SHORT[di]} ${day} ${mon}`, isToday, isPast };
}

function getDayData(agId, m, di) { return state[agId]?.[m]?.days?.[di] || { manual:0, pays:[] }; }
function setDayData(agId, m, di, data) {
  if (!state[agId]) state[agId] = {};
  if (!state[agId][m]) state[agId][m] = emptyMember();
  state[agId][m].days[di] = data;
}
function getDayTotal(agId, m, di) {
  const d = getDayData(agId, m, di);
  const ps = d.pays.reduce((s, p) => s + (parseFloat(p) || 0), 0);
  return ps > 0 ? ps : (parseFloat(d.manual) || 0);
}
function getWeekTotal(agId, m) { return DAYS.reduce((s, _, di) => s + getDayTotal(agId, m, di), 0); }
function getAgencyProd(agId) {
  const ag = AGENCIES.find(a => a.id === agId);
  return ag ? ag.members.reduce((s, m) => s + getWeekTotal(agId, m), 0) : 0;
}
function getGerentePay(ag) {
  const gp = getWeekTotal(ag.id, ag.members[0]);
  const agProd = getAgencyProd(ag.id);
  if (agProd === 0) return 0;
  if (ag.is_amix) {
    const op = AGENCIES.filter(a => !a.is_amix).reduce((s, a) => s + getAgencyProd(a.id), 0);
    return gp * ag.ger_pct + op * ag.bono_pct;
  }
  const ap = ag.members.slice(1).reduce((s, m) => s + getWeekTotal(ag.id, m), 0);
  return gp * ag.ger_pct + ap * ag.bono_pct;
}
function getBono(ag) {
  if (ag.is_amix) return AGENCIES.filter(a => !a.is_amix).reduce((s, a) => s + getAgencyProd(a.id), 0) * ag.bono_pct;
  return ag.members.slice(1).reduce((s, m) => s + getWeekTotal(ag.id, m), 0) * ag.bono_pct;
}
function getEquipoPay(ag) { return ag.members.slice(1).reduce((s, m) => s + getWeekTotal(ag.id, m) * ag.as_pct, 0); }

// ── BÚSQUEDA RÁPIDA ───────────────────────────────────
function allMembers() {
  const res = [];
  AGENCIES.forEach(ag => ag.members.forEach((m, mi) => res.push({ agId:ag.id, color:ag.color, name:m, isGer:mi===0, ag, mi })));
  return res;
}

function renderSearch() {
  document.getElementById('wl-search').textContent = 'Semana ' + getWeekKey();
  const q = (document.getElementById('search-input').value || '').toLowerCase().trim();
  const members = allMembers();
  const filtered = q ? members.filter(r => r.name.toLowerCase().includes(q) || r.agId.toLowerCase().includes(q)) : members;
  if (!filtered.length) { document.getElementById('search-results').innerHTML = '<div class="search-empty">No se encontró ningún asesor</div>'; return; }
  document.getElementById('search-results').innerHTML = filtered.map(r => {
    const wt  = getWeekTotal(r.agId, r.name);
    const pct = r.isGer ? r.ag.ger_pct : r.ag.as_pct;
    const nom = wt * pct;
    const initials = r.name.split(' ').map(w => w[0]||'').join('').slice(0,2).toUpperCase();
    const mk     = memberKey(r.agId, r.name);
    const selDay = quickDays[mk] !== undefined ? quickDays[mk] : curDay;
    const dayData = getDayData(r.agId, r.name, selDay);
    const isOpen  = openMembers[mk];
    const dir     = DIRECTORIO[r.name];
    const dayTot  = getDayTotal(r.agId, r.name, selDay);
    const inputId = 'qinput-' + r.agId.replace(/\s+/g,'_') + '-' + r.mi;

    // Botones de día con fecha real
    const dayBtns = DAYS_SHORT.map((d, di) => {
      const { label, isToday, isPast } = fmtDayBtn(di);
      const isSel = di === selDay;
      const st = isSel
        ? `background:${r.color};color:#fff;border-color:${r.color};font-weight:500`
        : isToday
          ? `border-color:${r.color};color:${r.color};font-weight:500`
          : `color:var(--color-text-secondary);${isPast?'opacity:.6':''}`;
      return `<button class="day-sel-btn${isSel?' active':''}" style="${st}"
        onclick="qSelDay('${r.agId}','${r.name.replace(/'/g,"\\'")}',${di})">${label}${isToday?' •':''}</button>`;
    }).join('');

    // Lista de pagos del día
    const paysHtml = dayData.pays.length > 0 ? `
      <div style="display:flex;flex-direction:column;gap:6px;margin-bottom:10px">
        ${dayData.pays.map((p, pi) => `
          <div style="display:flex;align-items:center;gap:8px;background:var(--color-background-primary);border-radius:8px;padding:7px 10px;border:0.5px solid var(--color-border-tertiary)">
            <span style="font-size:10px;padding:2px 7px;border-radius:6px;background:${r.color};color:#fff">Pago ${pi+1}</span>
            <input type="number" value="${p}" min="0"
              style="flex:1;border:none;background:transparent;font-size:13px;font-weight:500;color:var(--color-text-primary);outline:none;min-width:0"
              onchange="qUpdatePay('${r.agId}','${r.name.replace(/'/g,"\\'")}',${selDay},${pi},this.value)">
            <button onclick="qDelPay('${r.agId}','${r.name.replace(/'/g,"\\'")}',${selDay},${pi})"
              style="background:none;border:none;cursor:pointer;color:var(--color-text-secondary);font-size:18px;line-height:1;padding:0 2px">×</button>
          </div>`).join('')}
      </div>` : '';

    // Pseudónimos y teléfonos
    const dirHtml = dir ? `
      <div style="padding:10px 14px;border-bottom:0.5px solid var(--color-border-tertiary)">
        <div style="font-size:10px;color:var(--color-text-secondary);margin-bottom:5px;text-transform:uppercase;letter-spacing:.5px">Pseudónimos</div>
        ${dir.nombres.map(n => `<div style="font-size:12px;color:var(--color-text-primary);margin-bottom:2px"><i class="ti ti-user" style="font-size:12px;margin-right:4px" aria-hidden="true"></i>${n}</div>`).join('')}
        <div style="display:flex;flex-wrap:wrap;gap:5px;margin-top:7px">
          ${dir.lab.map(t => `<a href="tel:${t}" style="font-size:11px;padding:4px 9px;border-radius:20px;background:rgba(27,94,32,.1);color:#1B5E20;border:0.5px solid rgba(27,94,32,.25);text-decoration:none;display:inline-flex;align-items:center;gap:4px"><i class="ti ti-phone" style="font-size:12px" aria-hidden="true"></i>${t}</a>`).join('')}
          ${dir.per.map(t => `<a href="tel:${t}" style="font-size:11px;padding:4px 9px;border-radius:20px;background:rgba(13,71,161,.1);color:#0D47A1;border:0.5px solid rgba(13,71,161,.25);text-decoration:none;display:inline-flex;align-items:center;gap:4px"><i class="ti ti-device-mobile" style="font-size:12px" aria-hidden="true"></i>${t}</a>`).join('')}
        </div>
      </div>` : '';

    // Barras de semana
    const maxDay = Math.max(...DAYS.map((_,di) => getDayTotal(r.agId,r.name,di)), 1);
    const barsHtml = `
      <div style="padding:10px 14px">
        <div style="font-size:10px;color:var(--color-text-secondary);margin-bottom:8px;text-transform:uppercase;letter-spacing:.5px">Resumen semana</div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin-bottom:10px">
          <div style="background:var(--color-background-secondary);border-radius:8px;padding:7px;text-align:center">
            <div style="font-size:9px;color:var(--color-text-secondary)">Producción</div>
            <div style="font-size:13px;font-weight:500;color:var(--color-text-primary)">${fmt(wt)}</div>
          </div>
          <div style="background:var(--color-background-secondary);border-radius:8px;padding:7px;text-align:center">
            <div style="font-size:9px;color:var(--color-text-secondary)">Nómina</div>
            <div style="font-size:13px;font-weight:500;color:${r.color}">${fmt(nom)}</div>
          </div>
          <div style="background:var(--color-background-secondary);border-radius:8px;padding:7px;text-align:center">
            <div style="font-size:9px;color:var(--color-text-secondary)">Días activos</div>
            <div style="font-size:13px;font-weight:500;color:var(--color-text-primary)">${DAYS.filter((_,di)=>getDayTotal(r.agId,r.name,di)>0).length}/6</div>
          </div>
        </div>
        <div style="display:flex;gap:4px">
          ${DAYS_SHORT.map((d,di) => {
            const dt = getDayTotal(r.agId,r.name,di);
            const h  = dt > 0 ? Math.max(Math.round(dt/maxDay*32), 4) : 0;
            const isSel = di === selDay;
            return `<div style="flex:1;text-align:center;cursor:pointer" onclick="qSelDay('${r.agId}','${r.name.replace(/'/g,"\\'")}',${di})">
              <div style="font-size:9px;color:${isSel?r.color:'var(--color-text-secondary)'};font-weight:${isSel?'500':'400'};margin-bottom:3px">${d}</div>
              <div style="height:32px;background:var(--color-background-secondary);border-radius:4px;position:relative;overflow:hidden">
                ${dt>0?`<div style="position:absolute;bottom:0;width:100%;height:${h}px;background:${r.color};opacity:${isSel?1:.6};border-radius:4px"></div>`:''}
              </div>
              <div style="font-size:9px;color:${dt>0?r.color:'var(--color-text-secondary)'};margin-top:2px;font-weight:${dt>0?'500':'400'}">${dt>0?fmt(dt):'-'}</div>
            </div>`;
          }).join('')}
        </div>
      </div>`;

    return `<div class="quick-card" style="border-radius:14px;overflow:hidden">
      <div style="background:${r.color};padding:12px 14px;display:flex;align-items:center;gap:10px;cursor:pointer" onclick="toggleQuick('${r.agId}','${r.name.replace(/'/g,"\\'")}')">
        <div style="width:40px;height:40px;border-radius:50%;background:rgba(255,255,255,.2);display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:500;color:#fff;flex-shrink:0">${initials}</div>
        <div style="flex:1">
          <div style="font-size:14px;font-weight:500;color:#fff">${r.name}${r.isGer?' ★':''}</div>
          <div style="font-size:11px;color:rgba(255,255,255,.8)">${r.agId} · ${r.isGer?'Gerente':'Asesor'}</div>
        </div>
        <div style="text-align:right">
          <div style="font-size:10px;color:rgba(255,255,255,.7)">Semana</div>
          <div style="font-size:15px;font-weight:500;color:#fff">${fmt(wt)}</div>
          <div style="font-size:10px;color:rgba(255,255,255,.8)">Nóm: ${fmt(nom)}</div>
        </div>
      </div>
      <div style="display:${isOpen?'block':'none'}">
        ${dirHtml}
        <div style="padding:10px 14px;border-bottom:0.5px solid var(--color-border-tertiary)">
          <div style="font-size:10px;color:var(--color-text-secondary);margin-bottom:7px;text-transform:uppercase;letter-spacing:.5px">Día del pago</div>
          <div style="display:flex;gap:4px;flex-wrap:wrap">${dayBtns}</div>
        </div>
        <div style="padding:10px 14px;border-bottom:0.5px solid var(--color-border-tertiary)">
          <div style="font-size:10px;color:var(--color-text-secondary);margin-bottom:7px;text-transform:uppercase;letter-spacing:.5px">
            Pagos — ${fmtDayBtn(selDay).label}
            ${dayTot>0?`<span style="color:${r.color};font-weight:500;margin-left:6px">${fmt(dayTot)}</span>`:''}
          </div>
          ${paysHtml}
          <div style="display:flex;gap:8px;align-items:center">
            <input type="number" id="${inputId}" placeholder="Nuevo pago..." min="0"
              style="flex:1;padding:8px 12px;border-radius:8px;border:1px solid var(--color-border-tertiary);font-size:13px;background:var(--color-background-primary);color:var(--color-text-primary)">
            <button onclick="qAddPay('${r.agId}','${r.name.replace(/'/g,"\\'")}',${r.mi})"
              style="padding:8px 14px;border-radius:8px;border:none;background:${r.color};color:#fff;font-size:13px;font-weight:500;cursor:pointer;white-space:nowrap">+ Agregar</button>
          </div>
        </div>
        ${barsHtml}
      </div>
    </div>`;
  }).join('');
}

function toggleQuick(agId, m) { const mk=memberKey(agId,m); openMembers[mk]=!openMembers[mk]; renderSearch(); }
function qSelDay(agId, m, di) { quickDays[memberKey(agId,m)]=di; openMembers[memberKey(agId,m)]=true; renderSearch(); }
function qAddPay(agId, m, mi) {
  const selDay = quickDays[memberKey(agId,m)]!==undefined ? quickDays[memberKey(agId,m)] : curDay;
  const inputId = 'qinput-'+agId.replace(/\s+/g,'_')+'-'+mi;
  const input = document.getElementById(inputId);
  const val = parseFloat(input?.value)||0;
  if (val<=0) { input&&input.focus(); return; }
  const d = getDayData(agId,m,selDay); d.pays.push(val); d.manual=0;
  setDayData(agId,m,selDay,d); saveState();
  if(input) input.value = '';
  openMembers[memberKey(agId,m)]=true; renderSearch(); renderCaptura();
}
function qUpdatePay(agId,m,di,pi,val) { const d=getDayData(agId,m,di); d.pays[pi]=parseFloat(val)||0; setDayData(agId,m,di,d); saveState(); renderSearch(); }
function qDelPay(agId,m,di,pi) { const d=getDayData(agId,m,di); d.pays.splice(pi,1); setDayData(agId,m,di,d); saveState(); renderSearch(); }

// ── GERENCIA (CAPTURA) ────────────────────────────────
function renderCaptura() {
  const wkLabel = weekLabel();
  const isCurrentWeek = weekOffset === 0;
  document.getElementById('wl-cap').textContent = getWeekKey();
  document.getElementById('week-nav').innerHTML = `
    <button onclick="switchWeek(-1)" style="background:none;border:none;cursor:pointer;font-size:20px;color:var(--color-text-secondary);padding:0 6px">‹</button>
    <span style="font-size:11px;font-weight:700;color:${isCurrentWeek?'#C2185B':'var(--color-text-secondary)'}">${wkLabel}</span>
    <button onclick="switchWeek(1)" style="background:none;border:none;cursor:pointer;font-size:20px;padding:0 6px;color:${weekOffset>=0?'#ccc':'var(--color-text-secondary)'}" ${weekOffset>=0?'disabled':''}>›</button>
  `;
  const ag = AGENCIES.find(a => a.id === curAgency);
  document.getElementById('ag-tabs').innerHTML = AGENCIES.map(a =>
    `<button class="ag-tab${a.id===curAgency?' active':''}" style="background:${a.color}" onclick="switchAg('${a.id}')">${a.id}</button>`).join('');
  document.getElementById('day-tabs').innerHTML = DAYS.map((d,di) =>
    `<button class="day-tab${di===curDay?' active':''}" style="${di===curDay?'background:'+ag.color+';color:#fff;border-color:'+ag.color:''}" onclick="switchDay(${di})">${d}</button>`).join('');
  document.getElementById('members-view').innerHTML = ag.members.map((m,mi) => {
    const isGer=mi===0, dd=getDayData(ag.id,m,curDay), dayAmt=getDayTotal(ag.id,m,curDay), wt=getWeekTotal(ag.id,m), pct=isGer?ag.ger_pct:ag.as_pct, isOpen=openMembers[ag.id+m];
    const paysHtml = dd.pays.map((p,pi) => `
      <div class="pay-item">
        <input type="number" value="${p}" min="0" onchange="capUpdatePay('${ag.id}','${m.replace(/'/g,"\\'")}',${curDay},${pi},this.value)">
        <button class="del-btn" onclick="capDelPay('${ag.id}','${m.replace(/'/g,"\\'")}',${curDay},${pi})">×</button>
      </div>`).join('');
    return `<div class="member-row">
      <div class="member-hdr" onclick="toggleMember('${ag.id}','${m.replace(/'/g,"\\'")}' )" style="${isGer?'background:'+ag.color+';color:#fff':''}">
        <div class="member-name">${isGer?'<span class="ger-badge">GERENTE</span>':''}<span>${m}</span></div>
        <div class="chips">
          <span class="chip">Hoy: ${fmt(dayAmt)}</span>
          <span class="chip">Sem: ${fmt(wt)}</span>
          <span class="chip nom" style="background:${ag.color}">Nóm: ${fmt(wt*pct)}</span>
        </div>
      </div>
      <div class="member-body${isOpen?' open':''}">
        <div class="input-main">
          <input type="number" value="${dd.pays.length===0?(dd.manual||''):''}" placeholder="Total del día" min="0"
            onchange="capSetManual('${ag.id}','${m.replace(/'/g,"\\'")}',${curDay},this.value)" ${dd.pays.length>0?'disabled style="opacity:.4"':''}>
        </div>
        <span class="desglose-toggle" onclick="toggleDs('ds-${ag.id}-${mi}')">${dd.pays.length>0?'▾':'▸'} Pagos del día (${dd.pays.length})</span>
        <div class="desglose-area${dd.pays.length>0?' open':''}" id="ds-${ag.id}-${mi}">
          <div>${paysHtml}</div>
          <button class="add-pay-btn" onclick="capAddPay('${ag.id}','${m.replace(/'/g,"\\'")}',${curDay})">+ Agregar pago</button>
        </div>
      </div>
    </div>`;
  }).join('');
  const agProd = getAgencyProd(ag.id);
  document.getElementById('ag-totals').innerHTML = `
    <div class="tot-card"><div class="tot-lbl">Producción semana</div><div class="tot-val">${fmt(agProd)}</div></div>
    <div class="tot-card"><div class="tot-lbl">Nómina gerente</div><div class="tot-val" style="color:${ag.color}">${fmt(getGerentePay(ag))}</div></div>
    <div class="tot-card"><div class="tot-lbl">Nómina equipo</div><div class="tot-val">${fmt(getEquipoPay(ag))}</div></div>`;
}
function switchAg(id){curAgency=id;openMembers={};renderCaptura();}
function switchDay(di){curDay=di;renderCaptura();}
function toggleMember(agId,m){openMembers[agId+m]=!openMembers[agId+m];renderCaptura();}
function toggleDs(id){const el=document.getElementById(id);if(el)el.classList.toggle('open');}
function capSetManual(agId,m,di,val){const d=getDayData(agId,m,di);d.manual=parseFloat(val)||0;setDayData(agId,m,di,d);saveState();renderCaptura();}
function capAddPay(agId,m,di){const d=getDayData(agId,m,di);d.pays.push(0);d.manual=0;setDayData(agId,m,di,d);saveState();renderCaptura();}
function capDelPay(agId,m,di,pi){const d=getDayData(agId,m,di);d.pays.splice(pi,1);setDayData(agId,m,di,d);saveState();renderCaptura();}
function capUpdatePay(agId,m,di,pi,val){const d=getDayData(agId,m,di);d.pays[pi]=parseFloat(val)||0;setDayData(agId,m,di,d);saveState();renderCaptura();}
async function resetWeek(){if(!confirm('¿Iniciar nueva semana? Los datos se guardarán en historial.'))return;await fbSet('weeks/'+getWeekKey().replace(/-/g,'_'),null);await loadState();renderAll();}

// ── DASHBOARD ─────────────────────────────────────────
function renderDash() {
  document.getElementById('wl-dash').textContent = 'Semana ' + getWeekKey();
  const totProd=AGENCIES.reduce((s,ag)=>s+getAgencyProd(ag.id),0);
  const totNom=AGENCIES.reduce((s,ag)=>s+getGerentePay(ag)+getEquipoPay(ag),0);
  const maxProd=Math.max(...AGENCIES.map(ag=>getAgencyProd(ag.id)),1);
  const bestAg = AGENCIES.reduce((a,b) => getAgencyProd(a.id) > getAgencyProd(b.id) ? a : b);
  document.getElementById('dash-metrics').innerHTML=`
    <div class="metric-card"><div class="metric-lbl">Total semana</div><div class="metric-val">${fmt(totProd)}</div></div>
    <div class="metric-card"><div class="metric-lbl">Total nóminas</div><div class="metric-val" style="color:#C2185B">${fmt(totNom)}</div></div>
    <div class="metric-card"><div class="metric-lbl">Gerencias activas</div><div class="metric-val">${AGENCIES.filter(ag=>getAgencyProd(ag.id)>0).length}/${AGENCIES.length}</div></div>
    <div class="metric-card"><div class="metric-lbl">Mejor gerencia</div><div class="metric-val" style="font-size:14px;color:${bestAg.color}">${bestAg.id}</div></div>`;
  document.getElementById('dash-bars').innerHTML=AGENCIES.map(ag=>{
    const prod=getAgencyProd(ag.id);
    return `<div class="bar-row"><div class="bar-name">${ag.id}</div><div class="bar-track"><div class="bar-fill" style="width:${Math.round(prod/maxProd*100)}%;background:${ag.color}"></div></div><div class="bar-val">${fmt(prod)}</div></div>`;
  }).join('');
  const canvas=document.getElementById('pie-canvas'),ctx=canvas.getContext('2d');
  ctx.clearRect(0,0,120,120);
  const vals=AGENCIES.map(ag=>getAgencyProd(ag.id)),total=vals.reduce((s,v)=>s+v,0)||1;
  let angle=-Math.PI/2;
  vals.forEach((v,i)=>{const slice=v/total*Math.PI*2;ctx.beginPath();ctx.moveTo(60,60);ctx.arc(60,60,54,angle,angle+slice);ctx.closePath();ctx.fillStyle=AGENCIES[i].color;ctx.fill();angle+=slice;});
  ctx.beginPath();ctx.arc(60,60,28,0,Math.PI*2);ctx.fillStyle='var(--color-background-primary)';ctx.fill();
  document.getElementById('pie-legend').innerHTML=AGENCIES.map((ag,i)=>`<div class="leg-item"><div class="leg-dot" style="background:${ag.color}"></div><span>${ag.id}: ${Math.round(vals[i]/total*100)}%</span></div>`).join('');
  const all=[];
  AGENCIES.forEach(ag=>ag.members.forEach((m,mi)=>{const wt=getWeekTotal(ag.id,m);if(wt>0)all.push({name:m,color:ag.color,total:wt});}));
  all.sort((a,b)=>b.total-a.total);
  const maxR=all[0]?.total||1;
  document.getElementById('dash-ranking').innerHTML=all.slice(0,10).map((r,i)=>`
    <div class="bar-row"><div class="bar-name" style="font-size:10px">${i+1}. ${r.name}</div><div class="bar-track"><div class="bar-fill" style="width:${Math.round(r.total/maxR*100)}%;background:${r.color}"></div></div><div class="bar-val" style="font-size:10px">${fmt(r.total)}</div></div>`).join('')||'<p style="color:var(--color-text-secondary);font-size:12px">Sin producción esta semana</p>';
}

// ── DIRECTORIO ────────────────────────────────────────
function renderDirectorio() {
  const q = (document.getElementById('dir-search').value || '').toLowerCase().trim();
  const entries = Object.entries(DIRECTORIO);
  const filtered = q
    ? entries.filter(([apodo, d]) =>
        apodo.toLowerCase().includes(q) ||
        d.ag.toLowerCase().includes(q) ||
        d.nombres.some(n => n.toLowerCase().includes(q)) ||
        d.lab.some(t => t.includes(q)) ||
        d.per.some(t => t.includes(q)))
    : entries;
  if (!filtered.length) { document.getElementById('dir-results').innerHTML='<div class="search-empty">Sin resultados</div>'; return; }
  const byAg = {};
  filtered.forEach(([apodo, d]) => { if (!byAg[d.ag]) byAg[d.ag]=[]; byAg[d.ag].push([apodo,d]); });
  document.getElementById('dir-results').innerHTML = AGENCIES.filter(ag=>byAg[ag.id]).map(ag => {
    const cards = byAg[ag.id].map(([apodo, d]) => {
      const isGer = AGENCIES.find(a=>a.id===ag.id)?.members[0]===apodo;
      const labTels = d.lab.map(t=>`<a href="tel:${t}" class="tel-badge lab">📞 ${t}</a>`).join('');
      const perTels = d.per.map(t=>`<a href="tel:${t}" class="tel-badge per">📱 ${t}</a>`).join('');
      return `<div class="dir-card">
        <div class="dir-card-top">
          <div class="dir-avatar" style="background:${ag.color}">${apodo.slice(0,2).toUpperCase()}</div>
          <div class="dir-card-info">
            <div class="dir-apodo">${apodo}${isGer?`<span class="dir-ger-badge" style="background:${ag.color}">GERENTE</span>`:''}</div>
            <div class="dir-agencia" style="color:${ag.color}">${ag.id}</div>
          </div>
        </div>
        <div class="dir-card-body">
          <div class="dir-nombres-list">${d.nombres.map(n=>`<div class="dir-nombre-row">${n}</div>`).join('')}</div>
          <div class="dir-tels">${labTels}${perTels}</div>
        </div>
      </div>`;
    }).join('');
    return `<div class="dir-group">
      <div class="dir-group-header" style="color:${ag.color};border-color:${ag.color}">
        <span>${ag.id}</span><span class="dir-group-count">${byAg[ag.id].length} contactos</span>
      </div>
      <div class="dir-cards-grid">${cards}</div>
    </div>`;
  }).join('');
}

// ── REVISIÓN ──────────────────────────────────────────
let revDay = 0; // índice del día seleccionado en revisión

function renderRevision() {
  document.getElementById('wl-rev').textContent = getWeekKey();
  const dates = getWeekDates();

  // Tabs de días
  document.getElementById('rev-day-tabs').innerHTML = DAYS.map((d, di) => {
    const fecha = dates[di].getDate() + ' ' + dates[di].toLocaleDateString('es-MX',{month:'short'});
    const isSel = di === revDay;
    const hasPays = AGENCIES.some(ag => ag.members.some(m => getDayTotal(ag.id,m,di) > 0));
    return `<button class="day-tab${isSel?' active':''}"
      style="${isSel?'background:#C2185B;color:#fff;border-color:#C2185B':''}"
      onclick="revSelDay(${di})">
      ${d} ${fecha}${hasPays?` <span style="display:inline-block;width:6px;height:6px;border-radius:50%;background:${isSel?'#fff':'#C2185B'};margin-left:3px;vertical-align:middle"></span>`:''}
    </button>`;
  }).join('');

  const q = (document.getElementById('rev-search').value || '').toLowerCase().trim();

  // Recopilar todos los asesores con su total del día
  const rows = [];
  AGENCIES.forEach(ag => {
    ag.members.forEach((m, mi) => {
      const tot = getDayTotal(ag.id, m, revDay);
      const pct = mi === 0 ? ag.ger_pct : ag.as_pct;
      rows.push({ ag, m, mi, tot, nom: tot * pct, isGer: mi === 0 });
    });
  });

  const filtered = q
    ? rows.filter(r =>
        r.m.toLowerCase().includes(q) ||
        r.ag.id.toLowerCase().includes(q) ||
        String(Math.round(r.tot)).includes(q)
      )
    : rows;

  const conPago    = filtered.filter(r => r.tot > 0).sort((a,b) => b.tot - a.tot);
  const sinPago    = filtered.filter(r => r.tot === 0);
  const totalDia   = filtered.reduce((s,r) => s + r.tot, 0);
  const totalNom   = filtered.reduce((s,r) => s + r.nom, 0);
  const fecha      = dates[revDay].toLocaleDateString('es-MX',{weekday:'long',day:'numeric',month:'long'});

  const rowHtml = (r) => `
    <div style="display:flex;align-items:center;gap:10px;padding:8px 12px;border-bottom:0.5px solid var(--color-border-tertiary)">
      <div style="width:32px;height:32px;border-radius:50%;background:${r.ag.color};display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:500;color:#fff;flex-shrink:0">${r.m.slice(0,2).toUpperCase()}</div>
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:500;color:var(--color-text-primary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${r.m}${r.isGer?' ★':''}</div>
        <div style="font-size:10px;color:var(--color-text-secondary)">${r.ag.id}</div>
      </div>
      ${r.tot > 0
        ? `<div style="text-align:right">
            <div style="font-size:13px;font-weight:500;color:var(--color-text-primary)">${fmt(r.tot)}</div>
            <div style="font-size:10px;color:${r.ag.color}">Nóm: ${fmt(r.nom)}</div>
          </div>`
        : `<span style="font-size:11px;color:var(--color-text-secondary);padding:3px 8px;background:var(--color-background-secondary);border-radius:6px">Sin pago</span>`
      }
    </div>`;

  document.getElementById('rev-results').innerHTML = `
    <div style="background:var(--color-background-primary);border:0.5px solid var(--color-border-tertiary);border-radius:12px;overflow:hidden;margin-bottom:12px">
      <div style="padding:10px 14px;border-bottom:0.5px solid var(--color-border-tertiary);background:var(--color-background-secondary)">
        <div style="font-size:12px;font-weight:500;color:var(--color-text-primary);text-transform:capitalize">${fecha}</div>
        <div style="display:flex;gap:12px;margin-top:6px">
          <div><span style="font-size:10px;color:var(--color-text-secondary)">Total día </span><span style="font-size:13px;font-weight:500;color:var(--color-text-primary)">${fmt(totalDia)}</span></div>
          <div><span style="font-size:10px;color:var(--color-text-secondary)">Nóminas </span><span style="font-size:13px;font-weight:500;color:#C2185B">${fmt(totalNom)}</span></div>
          <div><span style="font-size:10px;color:var(--color-text-secondary)">Con pago </span><span style="font-size:13px;font-weight:500;color:var(--color-text-primary)">${conPago.length}/${filtered.length}</span></div>
        </div>
      </div>
      ${conPago.length > 0
        ? `<div style="padding:6px 0">
            <div style="font-size:10px;color:var(--color-text-secondary);padding:4px 12px;text-transform:uppercase;letter-spacing:.5px">Con pago (${conPago.length})</div>
            ${conPago.map(rowHtml).join('')}
          </div>`
        : ''}
      ${sinPago.length > 0
        ? `<div style="padding:6px 0;border-top:0.5px solid var(--color-border-tertiary)">
            <div style="font-size:10px;color:var(--color-text-secondary);padding:4px 12px;text-transform:uppercase;letter-spacing:.5px">Sin pago (${sinPago.length})</div>
            ${sinPago.map(rowHtml).join('')}
          </div>`
        : ''}
    </div>`;
}

function revSelDay(di) { revDay = di; renderRevision(); }
function renderCfg() {
  document.getElementById('cfg-agencies').innerHTML = AGENCIES.map((ag,ai) => `
    <div class="ag-cfg">
      <div class="ag-cfg-hdr">
        <input type="color" value="${ag.color}" title="Color de gerencia"
          style="width:28px;height:28px;border:none;border-radius:50%;cursor:pointer;padding:0;background:none"
          onchange="AGENCIES[${ai}].color=this.value;renderCfg()">
        <input value="${ag.id}"
          style="font-weight:700;font-size:13px;border:none;background:transparent;color:var(--color-text-primary);flex:1;outline:none;border-bottom:1.5px solid ${ag.color};padding:2px 4px"
          onchange="AGENCIES[${ai}].id=this.value">
        <small style="color:var(--color-text-secondary);font-size:10px;margin-left:8px">Ger:${Math.round(ag.ger_pct*100)}% · As:${Math.round(ag.as_pct*100)}%</small>
      </div>
      <div id="mcfg-${ai}">
        ${ag.members.map((m,mi)=>`
          <div class="member-cfg-row">
            <input value="${m}" onchange="AGENCIES[${ai}].members[${mi}]=this.value" ${mi===0?'style="font-weight:700"':''}>
            ${mi>0?`<button class="del-btn" onclick="rmMember(${ai},${mi})">×</button>`:''}
          </div>`).join('')}
      </div>
      <button class="add-member-btn" onclick="addMember(${ai})">+ Agregar asesor</button>
    </div>`).join('');
}
function rmMember(ai,mi){AGENCIES[ai].members.splice(mi,1);renderCfg();}
function addMember(ai){AGENCIES[ai].members.push('Nuevo asesor');renderCfg();}
async function saveConfig(){
  const btn = document.querySelector('.save-btn');
  const orig = btn.textContent;
  btn.textContent = 'Guardando...';
  btn.disabled = true;
  await saveAgencies();
  await loadState();
  renderAll();
  btn.textContent = '✅ Guardado';
  btn.style.background = '#1B5E20';
  setTimeout(() => { btn.textContent = orig; btn.disabled = false; }, 2000);
}
// ── EXPORTACIÓN ───────────────────────────────────────
function copyWA() {
  const wk=getWeekKey(); let txt=`*NÓMINAS — Semana ${wk}*\n\n`;
  AGENCIES.forEach(ag=>{const prod=getAgencyProd(ag.id);if(!prod)return;
    txt+=`*${ag.id}*\n  Producción: ${fmt(prod)}\n  Gerente: ${fmt(getGerentePay(ag))}\n`;
    ag.members.forEach((m,mi)=>{const wt=getWeekTotal(ag.id,m);if(wt>0)txt+=`  • ${m}: ${fmt(wt)} → ${fmt(wt*(mi===0?ag.ger_pct:ag.as_pct))}\n`;});
    txt+='\n';});
  const totP=AGENCIES.reduce((s,ag)=>s+getAgencyProd(ag.id),0);
  const totN=AGENCIES.reduce((s,ag)=>s+getGerentePay(ag)+getEquipoPay(ag),0);
  txt+=`*TOTAL GENERAL*\nProducción: ${fmt(totP)}\nNóminas: ${fmt(totN)}`;
  navigator.clipboard.writeText(txt).then(()=>alert('¡Copiado para WhatsApp!'));
}
function exportXLSX() {
  const wb=XLSX.utils.book_new();
  AGENCIES.forEach(ag=>{
    const rows=[['','LUNES','MARTES','MIÉRCOLES','JUEVES','VIERNES','SÁBADO','TOTAL','NÓMINA']];
    ag.members.forEach((m,mi)=>{const dt=DAYS.map((_,di)=>getDayTotal(ag.id,m,di));const wk=dt.reduce((s,v)=>s+v,0);rows.push([m,...dt,wk,wk*(mi===0?ag.ger_pct:ag.as_pct)]);});
    rows.push([],[`PRODUCCIÓN`,'','','','','','',getAgencyProd(ag.id)],[`NÓM. GERENTE`,'','','','','','',getGerentePay(ag)]);
    XLSX.utils.book_append_sheet(wb,XLSX.utils.aoa_to_sheet(rows),ag.id.slice(0,31));
  });
  const res=[['GERENCIA','PRODUCCIÓN','NÓM. GERENTE','BONO','NÓM. EQUIPO']];
  AGENCIES.forEach(ag=>res.push([ag.id,getAgencyProd(ag.id),getGerentePay(ag),getBono(ag),getEquipoPay(ag)]));
  XLSX.utils.book_append_sheet(wb,XLSX.utils.aoa_to_sheet(res),'RESUMEN');
  XLSX.writeFile(wb,`Nomina_${getWeekKey()}.xlsx`);
}

// ── NAVEGACIÓN ────────────────────────────────────────
function showPage(name, btn) {
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
  document.getElementById('page-'+name).classList.add('active');
  btn.classList.add('active');
  if(name==='search') renderSearch();
  if(name==='dash') renderDash();
  if(name==='hist') renderHist();
  if(name==='cfg') renderCfg();
  if(name==='directorio') renderDirectorio();
  if(name==='revision') renderRevision();}
function renderAll(){renderSearch();renderCaptura();}

// ── HISTORIAL ─────────────────────────────────────────
async function renderHist() {
  document.getElementById('hist-content').innerHTML = '<div class="search-empty">Cargando...</div>';
  const weeks = await fbGet('weeks');
  if (!weeks) { document.getElementById('hist-content').innerHTML='<p style="padding:20px 0;color:var(--color-text-secondary)">No hay semanas anteriores.</p>'; return; }
  const keys = Object.keys(weeks).sort().reverse();
  document.getElementById('hist-content').innerHTML = keys.map(k => {
    const wk  = k.replace(/_/g,'-');
    const dat = weeks[k];
    let totP  = 0;
    const rows = AGENCIES.map(ag => {
      const prod = ag.members.reduce((s,m) => {
        const days = dat[ag.id]?.[m]?.days || [];
        return s + days.reduce((ds,d) => {
          const ps = (d.pays||[]).reduce((pp,p) => pp+(parseFloat(p)||0),0);
          return ds+(ps>0?ps:(parseFloat(d.manual)||0));
        },0);
      },0);
      totP += prod;
      return `<tr><td><span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${ag.color};margin-right:4px"></span>${ag.id}</td><td style="text-align:right">${fmt(prod)}</td></tr>`;
    }).join('');
    return `<div class="hist-card"><div class="hist-week">Semana del ${fmtDate(wk)}</div><table class="hist-table">${rows}<tr style="font-weight:700"><td>TOTAL</td><td style="text-align:right">${fmt(totP)}</td></tr></table></div>`;
  }).join('');
}

// ── INIT ──────────────────────────────────────────────
async function init() {
  await loadAgencies();
  await loadState();
  renderAll();
}
init();
