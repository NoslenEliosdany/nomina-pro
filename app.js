// ════════════════════════════════════════════════════
//  NÓMINA PRO — Lógica principal
// ════════════════════════════════════════════════════

// ── DATOS POR DEFECTO ────────────────────────────────
const DEFAULT_AGENCIES = [
  {
    id: 'AMIX', color: '#C2185B',
    ger_pct: 0.40, as_pct: 0.25, bono_pct: 0.10, is_amix: true,
    members: ['AMIX','RAPUNSEL','JANE','TIA TURBINA','ROJO','PANDA','MIMI','HOPPER']
  },
  {
    id: 'BAMBINO', color: '#212121',
    ger_pct: 0.30, as_pct: 0.25, bono_pct: 0.05, is_amix: false,
    members: ['BAMBINO','MAPACHE','POLI']
  },
  {
    id: 'TISHA', color: '#546E7A',
    ger_pct: 0.30, as_pct: 0.25, bono_pct: 0.05, is_amix: false,
    members: ['TISHA','MOANA','HARLEY','SABITO','URSULA','MCLOVIN','COME GALLETAS','NENA','BATMAN']
  },
  {
    id: 'BANELOPE', color: '#6A1B9A',
    ger_pct: 0.30, as_pct: 0.25, bono_pct: 0.05, is_amix: false,
    members: ['BANELOPE','ATENEA','ZEUS','POSEIDON','ARTEMISA','CRONNOS','AFRODITA']
  },
  {
    id: 'BATMAN', color: '#4E342E',
    ger_pct: 0.30, as_pct: 0.25, bono_pct: 0.05, is_amix: false,
    members: ['BATMAN','PANTHER','DONATO','BLESSED','VANELLOPE','BLUE','FRIO','CHUCKY']
  },
  {
    id: 'GROOT', color: '#E65100',
    ger_pct: 0.30, as_pct: 0.25, bono_pct: 0.05, is_amix: false,
    members: ['GROOT','DEADPOL','SCARLET WISH','CAPITANA MARVEL','MANTIS','BLACK WIDOW','WOLVERINE','BLACK PANTHER','JEAN GREY','CAPITAN AMERICA']
  },
  {
    id: 'MARVEL', color: '#B71C1C',
    ger_pct: 0.30, as_pct: 0.25, bono_pct: 0.05, is_amix: false,
    members: ['MARVEL','FLAME KING','MENTITA','GRUMOSA','MARCELINNE','BEEMO','FINN']
  },
  {
    id: 'MARCELINE', color: '#0D47A1',
    ger_pct: 0.30, as_pct: 0.25, bono_pct: 0.05, is_amix: false,
    members: ['MARCELINE','VIUDA NEGRA','LA BARBIE','EL CHAPO']
  },
];

const DAYS       = ['Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];
const DAYS_SHORT = ['Lun','Mar','Mié','Jue','Vie','Sáb'];

// ── DIRECTORIO DE CONTACTOS ───────────────────────────
// apodo -> { nombres: [], telLaboral: [], telPersonal: [], agencia }
const DIRECTORIO = {
  // ── AMIX ──
  'AMIX':        { nombres: ['ADOLGO GABRIEL PINEDA GOMEZ'], telLaboral: ['5551730400'], telPersonal: ['5621658793'], agencia: 'AMIX' },
  'RAPUNSEL':    { nombres: ['BRENDA ZARRAGA NARZAES','REYNA SUSANA ESTRADA ROSAS'], telLaboral: ['5554604358'], telPersonal: ['5565288744'], agencia: 'AMIX' },
  'JANE':        { nombres: ['BRENDA VILLAFAÑA ROJAS','ALISON GRISEY PEREZ JUARES'], telLaboral: ['5554604193','5529486694'], telPersonal: ['5612589780'], agencia: 'AMIX' },
  'TIA TURBINA': { nombres: ['LORENA VARGAS HERNANDEZ'], telLaboral: ['5522694255','5550763299'], telPersonal: ['5529687234'], agencia: 'AMIX' },
  'ROJO':        { nombres: ['CRISTIAN GEOBANI AGUIÑLA GUERRERO','ABRAM TORREZ MAGAÑA'], telLaboral: ['5511969022'], telPersonal: ['5630707343'], agencia: 'AMIX' },
  'PANDA':       { nombres: ['SALVADOR ACUÑA NOLASQUEZ'], telLaboral: ['7288245391'], telPersonal: ['5568979690'], agencia: 'AMIX' },
  'MIMI':        { nombres: ['ADELA CAMARILLO RUIZ'], telLaboral: ['5575021413'], telPersonal: ['5550555315'], agencia: 'AMIX' },
  'HOPPER':      { nombres: ['ABIGAIL MICHELL GONZALES MORENO','MONICA HERNANDEZ CORONA'], telLaboral: ['5552753063','5554606902'], telPersonal: ['5523069698'], agencia: 'AMIX' },
  // ── BAMBINO ──
  'BAMBINO':     { nombres: ['ABRAHAM TORRES MAGANA','ANGEL HECTOR MARTINEZ ALVAREZ'], telLaboral: ['5529485920','5517817509'], telPersonal: ['5625065681'], agencia: 'BAMBINO' },
  'MAPACHE':     { nombres: ['ADRIAN AVALOS SALAZAR','PATRICIA ROSALINDA TRUJILLO MARIEL'], telLaboral: ['5529484147','5550765482'], telPersonal: ['5523400511'], agencia: 'BAMBINO' },
  'POLI':        { nombres: ['AMERICA SOTO REYES','AMERICA SOTO GONZALEZ'], telLaboral: ['5552749762','5511873728'], telPersonal: ['5572734228'], agencia: 'BAMBINO' },
  // ── TISHA ──
  'TISHA':       { nombres: ['MELISSA PALOMA'], telLaboral: ['5586172706'], telPersonal: [], agencia: 'TISHA' },
  'MOANA':       { nombres: ['ESTEFANIA GUADALUPE ROJAS LEYVA','KARLA ANDREA LOPEZ ROMERO'], telLaboral: ['5568938190','5664446668'], telPersonal: ['5586172706'], agencia: 'TISHA' },
  'HARLEY':      { nombres: ['ELDA JAZMIN CORTAZAR MORAN','ADRIANA GUTIERREZ ALBERTO'], telLaboral: ['5519350892','5656513905'], telPersonal: ['5549182965'], agencia: 'TISHA' },
  'SABITO':      { nombres: ['ALEJANDRA MENDOZA DE LA GUARDIA','NORMA EDITH CATALAN SERRANO'], telLaboral: ['5664446643','5530508094'], telPersonal: ['6691444565'], agencia: 'TISHA' },
  'URSULA':      { nombres: ['GUADALUPE ARACELI GARCIA MARQUEZ','ADRIANA SALOME PERDOMO FLORES'], telLaboral: ['5552749225','5656513913'], telPersonal: ['5616842161'], agencia: 'TISHA' },
  'MCLOVIN':     { nombres: ['CRISTIAN FRANCISCO ROJAS ANAYA','SERGIO VICTORIA RAMIREZ'], telLaboral: ['5551585850','5656513912'], telPersonal: ['5578402921'], agencia: 'TISHA' },
  'COME GALLETAS':{ nombres: ['PERLA AMORENE ANAYA DIAZ','ANDREA PINEDA HERNANDEZ'], telLaboral: ['5561884961','5630950170'], telPersonal: ['5525621681'], agencia: 'TISHA' },
  'NENA':        { nombres: ['ELIZABETH MERCADO SALGADO','RAQUE BUENROSRO SANCHEZ'], telLaboral: ['5528917968','5664446627'], telPersonal: ['7991410159'], agencia: 'TISHA' },
  // ── BANELOPE ──
  'BANELOPE':    { nombres: ['BANELOPE'], telLaboral: [], telPersonal: [], agencia: 'BANELOPE' },
  'ATENEA':      { nombres: ['ROSA CHRISTINA CHAVEZ NAVA','YANELLI CAROLINA QUESADA GARCIA'], telLaboral: ['5574997840'], telPersonal: [], agencia: 'BANELOPE' },
  'ZEUS':        { nombres: ['RODRIGO DURAN RODRIGUEZ','OLIVER VERGARA URBINA'], telLaboral: ['5550764613'], telPersonal: [], agencia: 'BANELOPE' },
  'POSEIDON':    { nombres: ['JOSE ANTONIO SANCHEZ ORTIZ','VICTOR HUGO LOPEZ PEREZ'], telLaboral: ['5551599549'], telPersonal: [], agencia: 'BANELOPE' },
  'ARTEMISA':    { nombres: ['ADRIANA OVALLE DE LA ROSA','SANDRA DIAS FFERNANDES'], telLaboral: ['5522980373','5522693742'], telPersonal: [], agencia: 'BANELOPE' },
  'CRONNOS':     { nombres: ['GERMAN VARELA GARCIA'], telLaboral: ['5611705147'], telPersonal: [], agencia: 'BANELOPE' },
  'AFRODITA':    { nombres: ['ZULEMA BETZAI CHARMICHART ALMANZA'], telLaboral: ['5618520259'], telPersonal: [], agencia: 'BANELOPE' },
  // ── BATMAN ──
  'BATMAN':      { nombres: ['JESUS CUETO'], telLaboral: [], telPersonal: [], agencia: 'BATMAN' },
  'PANTHER':     { nombres: ['ALEJANDRO ENCINAS NAJERA','GUILLERMO ISRAEL ALMORES MEDINA'], telLaboral: ['5535517393','5535020314'], telPersonal: ['5582263437'], agencia: 'BATMAN' },
  'DONATO':      { nombres: ['RUBEN DONATO BARRON GARCIA','ABRAHAM TORRES MAGAÑA'], telLaboral: ['5551731315','5561885020'], telPersonal: ['5615183872'], agencia: 'BATMAN' },
  'BLESSED':     { nombres: ['JESUS ANDRES ORTIZ GOMEZ','RAFAEL MONTES PONCE','ABELARDO LEYVA RODRIGUEZ'], telLaboral: ['5638032077','5511990458','5656024111'], telPersonal: ['5560063089'], agencia: 'BATMAN' },
  'VANELLOPE':   { nombres: ['ANA CRISTINA ROSALES HERRERA','LAURA LETICIA JUAREZ JIMENEZ','LIZBETH RODRIGUEZ'], telLaboral: ['5573444688','5552749217','5527523754'], telPersonal: ['5619501734'], agencia: 'BATMAN' },
  'BLUE':        { nombres: ['EDUARDO REYES GOMEZ'], telLaboral: ['5518707844'], telPersonal: ['5515697933'], agencia: 'BATMAN' },
  'FRIO':        { nombres: ['SAMUEL RAZO MORALES'], telLaboral: ['5554604021','5645926339'], telPersonal: ['7442083048'], agencia: 'BATMAN' },
  'CHUCKY':      { nombres: ['DEBORA PALAFOX ISLAS','ABIGAIL RODRIGUEZ ZAPATA'], telLaboral: ['5662667230','5549429848'], telPersonal: ['5611376584'], agencia: 'BATMAN' },
  // ── GROOT ──
  'GROOT':       { nombres: ['CARLOS PATTERSON OLIVAS','JORGE ADRIAN GOMEZ'], telLaboral: ['5522641318'], telPersonal: ['5510744003'], agencia: 'GROOT' },
  'DEADPOL':          { nombres: ['ABEL EMILIO CASTORENA'], telLaboral: ['5527524080'], telPersonal: ['7221655529'], agencia: 'GROOT' },
  'SCARLET WISH':     { nombres: ['PILAR HERNANDEZ TRINIDAD'], telLaboral: ['5561493116'], telPersonal: ['5530847902'], agencia: 'GROOT' },
  'CAPITANA MARVEL':  { nombres: ['LAURA LETICIA JUAREZ JIMENEZ'], telLaboral: ['5551561031'], telPersonal: ['5610289129'], agencia: 'GROOT' },
  'MANTIS':           { nombres: ['PERLA AMORENE DIAZ ANAYA'], telLaboral: ['5514961745'], telPersonal: ['5632834929'], agencia: 'GROOT' },
  'BLACK WIDOW':      { nombres: ['YADIRA JASMIN VERGARA','DANIELA MIRAMONTES RAMIREZ'], telLaboral: ['5519318959'], telPersonal: ['5548862369'], agencia: 'GROOT' },
  'WOLVERINE':        { nombres: ['BENIGNO GONZALEZ','ABRAM TORRES MAGAÑA'], telLaboral: ['5529484808'], telPersonal: ['5620923288'], agencia: 'GROOT' },
  'BLACK PANTHER':    { nombres: ['ANTONIO MOISES CAMPOS GOMEZ'], telLaboral: ['5626847060'], telPersonal: [], agencia: 'GROOT' },
  'JEAN GREY':        { nombres: ['MARTHA ADRIANA RUIZ ALVARADO','HAYDEE SANCHEZ VARGAS'], telLaboral: ['5522689270','5534951821'], telPersonal: ['5619278400'], agencia: 'GROOT' },
  'CAPITAN AMERICA':  { nombres: ['MARCO ANTONIO HERNANDEZ MARTINEZ'], telLaboral: ['5514926718'], telPersonal: ['5521911935'], agencia: 'GROOT' },
  // ── MARVEL ──
  'MARVEL':      { nombres: ['MARVEL'], telLaboral: [], telPersonal: [], agencia: 'MARVEL' },
  'FLAME KING':  { nombres: ['ANA LESSLY MONTERO','ADRIANA SALAZAR MONDRAGON'], telLaboral: ['5575015142'], telPersonal: ['5647419043'], agencia: 'MARVEL' },
  'MENTITA':     { nombres: ['ADRIAN TAPIA MARTINEZ','ALEJANDRO VERGUEZ HERNANDEZ'], telLaboral: ['5554606574'], telPersonal: ['7774974770'], agencia: 'MARVEL' },
  'GRUMOSA':     { nombres: ['ALEJANDRA VERGARA PEREZ','HAYDEE VARGAS SANCHEZ'], telLaboral: ['5534952498'], telPersonal: ['5553205960'], agencia: 'MARVEL' },
  'MARCELINNE':  { nombres: ['VIRIDIANA SANCHEZ GAMBOA','VERONICA VALENCIA SANCHEZ','DIANA SANCHEZ CRUZ'], telLaboral: ['5522590829','5517800417','5521797804'], telPersonal: ['5576125675'], agencia: 'MARVEL' },
  'BEEMO':       { nombres: ['ADRIAN ENRIQUE SANTILLAN'], telLaboral: ['5549169156','5548718635'], telPersonal: ['5615044254'], agencia: 'MARVEL' },
  'FINN':        { nombres: ['CARLOS PATTERSON','ARMANDO MEXICANO'], telLaboral: ['5548949466','5538976200'], telPersonal: ['5567610239'], agencia: 'MARVEL' },
  // ── MARCELINE ──
  'MARCELINE':   { nombres: ['WUERO / ALEJANDRA CAROLINA GARCIA RAMOS'], telLaboral: ['5517958269'], telPersonal: [], agencia: 'MARCELINE' },
  'VIUDA NEGRA': { nombres: ['ALEJANDRA CAROLINA GARCIA RAMOS','MARIA MAGDALENA'], telLaboral: ['5527529308'], telPersonal: ['5517958269'], agencia: 'MARCELINE' },
  'LA BARBIE':   { nombres: ['HECTOR GARCIA ROMERO','JUAN CARLOS ELIZALDE ARMANDO REYES VAZQUEZ'], telLaboral: ['5519333569'], telPersonal: ['5583375354'], agencia: 'MARCELINE' },
  'EL CHAPO':    { nombres: ['KELLY OLVERA','ARTURO SALINAS'], telLaboral: ['5534956967'], telPersonal: ['4242562046'], agencia: 'MARCELINE' },
};

// ── ESTADO GLOBAL ─────────────────────────────────────
let AGENCIES    = [];
let state       = {};
let curAgency   = 'AMIX';
let curDay      = new Date().getDay();
if (curDay === 0) curDay = 6; else curDay = Math.min(curDay - 1, 5);
let openMembers = {};
let quickDays   = {};

// ── UTILIDADES ────────────────────────────────────────
function getWeekKey() {
  const d = new Date(), day = d.getDay() || 7, mon = new Date(d);
  mon.setDate(d.getDate() - day + 1);
  return mon.toISOString().slice(0, 10);
}
function fmt(n) { return '$' + Math.round(n).toLocaleString('es-MX'); }
function fmtDate(wk) {
  const d = new Date(wk + 'T12:00:00');
  return d.toLocaleDateString('es-MX', { day: 'numeric', month: 'short', year: 'numeric' });
}
function memberKey(agId, m) { return agId + '::' + m; }

// ── PERSISTENCIA ──────────────────────────────────────
function loadAgencies() {
  const s = localStorage.getItem('nomina_agencies');
  AGENCIES = s ? JSON.parse(s) : JSON.parse(JSON.stringify(DEFAULT_AGENCIES));
}
function saveAgencies() { localStorage.setItem('nomina_agencies', JSON.stringify(AGENCIES)); }

function emptyMember() { return { days: DAYS.map(() => ({ manual: 0, pays: [] })) }; }

function loadState() {
  const wk  = getWeekKey();
  const raw = localStorage.getItem('nomina_' + wk);
  state = raw ? JSON.parse(raw) : { week: wk };
  AGENCIES.forEach(ag => {
    if (!state[ag.id]) state[ag.id] = {};
    ag.members.forEach(m => {
      if (!state[ag.id][m]) state[ag.id][m] = emptyMember();
      if (!state[ag.id][m].days) state[ag.id][m].days = DAYS.map(() => ({ manual: 0, pays: [] }));
      while (state[ag.id][m].days.length < DAYS.length) state[ag.id][m].days.push({ manual: 0, pays: [] });
    });
  });
}
function saveState() { localStorage.setItem('nomina_' + getWeekKey(), JSON.stringify(state)); }

// ── CÁLCULOS ──────────────────────────────────────────
function getDayData(agId, m, di) { return state[agId]?.[m]?.days?.[di] || { manual: 0, pays: [] }; }

function setDayData(agId, m, di, data) {
  if (!state[agId]) state[agId] = {};
  if (!state[agId][m]) state[agId][m] = emptyMember();
  state[agId][m].days[di] = data;
}

function getDayTotal(agId, m, di) {
  const d  = getDayData(agId, m, di);
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
  AGENCIES.forEach(ag => {
    ag.members.forEach((m, mi) => {
      res.push({ agId: ag.id, color: ag.color, name: m, isGer: mi === 0, ag, mi });
    });
  });
  return res;
}

function renderSearch() {
  document.getElementById('wl-search').textContent = 'Semana ' + getWeekKey();
  const q        = (document.getElementById('search-input').value || '').toLowerCase().trim();
  const members  = allMembers();
  const filtered = q ? members.filter(r => r.name.toLowerCase().includes(q) || r.agId.toLowerCase().includes(q)) : members;

  if (filtered.length === 0) {
    document.getElementById('search-results').innerHTML =
      '<div class="search-empty"><i class="ti ti-user-off" style="font-size:32px;display:block;margin-bottom:8px" aria-hidden="true"></i>No se encontró ningún asesor</div>';
    return;
  }

  document.getElementById('search-results').innerHTML = filtered.map(r => {
    const wt       = getWeekTotal(r.agId, r.name);
    const pct      = r.isGer ? r.ag.ger_pct : r.ag.as_pct;
    const nom      = wt * pct;
    const initials = r.name.split(' ').map(w => w[0] || '').join('').slice(0, 2).toUpperCase();
    const mk       = memberKey(r.agId, r.name);
    const selDay   = quickDays[mk] !== undefined ? quickDays[mk] : curDay;
    const dayData  = getDayData(r.agId, r.name, selDay);
    const isOpen   = openMembers[mk];
    const dir      = DIRECTORIO[r.name];

    const dayBtns = DAYS_SHORT.map((d, di) => `
      <button class="day-sel-btn${di === selDay ? ' active' : ''}"
        style="${di === selDay ? 'background:' + r.color + ';color:#fff;border-color:' + r.color : ''}"
        onclick="qSelDay('${r.agId}','${r.name}',${di})">${d}</button>`).join('');

    const paysHtml = dayData.pays.map((p, pi) => `
      <div class="quick-pay-row">
        <span class="day-badge" style="background:${r.color}">${DAYS_SHORT[selDay]}</span>
        <input type="number" value="${p}" min="0" placeholder="$0"
          onchange="qUpdatePay('${r.agId}','${r.name}',${selDay},${pi},this.value)">
        <button class="del-btn" onclick="qDelPay('${r.agId}','${r.name}',${selDay},${pi})">×</button>
      </div>`).join('');

    const dayTot = getDayTotal(r.agId, r.name, selDay);

    // Mini directorio en la card
    const dirHtml = dir ? `
      <div class="dir-mini">
        ${dir.nombres.map(n => `<div class="dir-mini-nombre">${n}</div>`).join('')}
        <div class="dir-mini-tels">
          ${dir.telLaboral.map(t => `<a href="tel:${t}" class="dir-tel-badge lab">📞 ${t}</a>`).join('')}
          ${dir.telPersonal.map(t => `<a href="tel:${t}" class="dir-tel-badge per">📱 ${t}</a>`).join('')}
        </div>
      </div>` : '';

    return `<div class="quick-card">
      <div class="quick-card-hdr" onclick="toggleQuick('${r.agId}','${r.name}')">
        <div class="quick-avatar" style="background:${r.color}">${initials}</div>
        <div class="quick-info">
          <div class="quick-name">${r.name}${r.isGer ? ' ★' : ''}</div>
          <div class="quick-meta">${r.agId} · ${r.isGer ? 'Gerente' : 'Asesor'}</div>
        </div>
        <div class="quick-chips">
          <span class="chip">Sem: ${fmt(wt)}</span>
          <span class="chip nom" style="background:${r.color}">Nóm: ${fmt(nom)}</span>
        </div>
      </div>
      <div class="quick-body${isOpen ? ' open' : ''}">
        ${dirHtml}
        <div class="day-selector">${dayBtns}</div>
        <div class="quick-input-row">
          <input type="number" placeholder="Monto del pago" id="qinput-${r.agId}-${r.mi}" min="0"
            ${dayData.pays.length > 0 ? 'disabled style="opacity:.4"' : ''}>
          <button class="add-quick-btn" style="background:${r.color}"
            onclick="qAddPay('${r.agId}','${r.name}',${r.mi})">+ Agregar</button>
        </div>
        ${dayTot > 0 ? `<div style="font-size:12px;color:var(--color-text-secondary);margin-bottom:6px">Hoy (${DAYS_SHORT[selDay]}): <strong>${fmt(dayTot)}</strong></div>` : ''}
        ${dayData.pays.length > 0 ? `<div class="quick-pays-list">${paysHtml}</div>` : ''}
        ${dayData.pays.length === 0 && (parseFloat(dayData.manual) || 0) > 0
          ? `<div style="font-size:11px;color:var(--color-text-secondary);margin-top:4px">Total hoy: ${fmt(dayData.manual)}</div>`
          : ''}
        <div class="week-summary-row">
          ${DAYS_SHORT.map((d, di) => `<div class="wsumm">
            <div class="wsumm-lbl">${d}</div>
            <div class="wsumm-val" style="color:${getDayTotal(r.agId, r.name, di) > 0 ? r.color : 'var(--color-text-secondary)'}">
              ${getDayTotal(r.agId, r.name, di) > 0 ? fmt(getDayTotal(r.agId, r.name, di)) : '-'}
            </div>
          </div>`).join('')}
        </div>
      </div>
    </div>`;
  }).join('');
}

function toggleQuick(agId, m) {
  const mk = memberKey(agId, m);
  openMembers[mk] = !openMembers[mk];
  renderSearch();
}
function qSelDay(agId, m, di) {
  quickDays[memberKey(agId, m)] = di;
  openMembers[memberKey(agId, m)] = true;
  renderSearch();
}
function qAddPay(agId, m, mi) {
  const selDay = quickDays[memberKey(agId, m)] !== undefined ? quickDays[memberKey(agId, m)] : curDay;
  const input  = document.getElementById('qinput-' + agId + '-' + mi);
  const val    = parseFloat(input?.value) || 0;
  if (val <= 0) { input && input.focus(); return; }
  const d = getDayData(agId, m, selDay);
  d.pays.push(val);
  d.manual = 0;
  setDayData(agId, m, selDay, d);
  saveState();
  openMembers[memberKey(agId, m)] = true;
  renderSearch();
  renderCaptura();
}
function qUpdatePay(agId, m, di, pi, val) {
  const d = getDayData(agId, m, di);
  d.pays[pi] = parseFloat(val) || 0;
  setDayData(agId, m, di, d);
  saveState(); renderSearch();
}
function qDelPay(agId, m, di, pi) {
  const d = getDayData(agId, m, di);
  d.pays.splice(pi, 1);
  setDayData(agId, m, di, d);
  saveState(); renderSearch();
}

// ── CAPTURA ───────────────────────────────────────────
function renderCaptura() {
  document.getElementById('wl-cap').textContent = 'Semana ' + getWeekKey();
  const ag = AGENCIES.find(a => a.id === curAgency);

  document.getElementById('ag-tabs').innerHTML = AGENCIES.map(a => `
    <button class="ag-tab${a.id === curAgency ? ' active' : ''}" style="background:${a.color}"
      onclick="switchAg('${a.id}')">${a.id}</button>`).join('');

  document.getElementById('day-tabs').innerHTML = DAYS.map((d, di) => `
    <button class="day-tab${di === curDay ? ' active' : ''}"
      style="${di === curDay ? 'background:' + ag.color + ';color:#fff;border-color:' + ag.color : ''}"
      onclick="switchDay(${di})">${d}</button>`).join('');

  document.getElementById('members-view').innerHTML = ag.members.map((m, mi) => {
    const isGer  = mi === 0;
    const dd     = getDayData(ag.id, m, curDay);
    const dayAmt = getDayTotal(ag.id, m, curDay);
    const wt     = getWeekTotal(ag.id, m);
    const pct    = isGer ? ag.ger_pct : ag.as_pct;
    const isOpen = openMembers[ag.id + m];

    const paysHtml = dd.pays.map((p, pi) => `
      <div class="pay-item">
        <input type="number" value="${p}" min="0"
          onchange="capUpdatePay('${ag.id}','${m}',${curDay},${pi},this.value)">
        <button class="del-btn" onclick="capDelPay('${ag.id}','${m}',${curDay},${pi})">×</button>
      </div>`).join('');

    return `<div class="member-row">
      <div class="member-hdr" onclick="toggleMember('${ag.id}','${m}')"
        style="${isGer ? 'background:' + ag.color + ';color:#fff' : ''}">
        <div class="member-name">${isGer ? `<span class="ger-badge">GERENTE</span>` : ''}<span>${m}</span></div>
        <div class="chips">
          <span class="chip">Hoy: ${fmt(dayAmt)}</span>
          <span class="chip">Sem: ${fmt(wt)}</span>
          <span class="chip nom" style="background:${ag.color}">Nóm: ${fmt(wt * pct)}</span>
        </div>
      </div>
      <div class="member-body${isOpen ? ' open' : ''}">
        <div class="input-main">
          <input type="number" value="${dd.pays.length === 0 ? (dd.manual || '') : ''}"
            placeholder="Total del día" min="0"
            onchange="capSetManual('${ag.id}','${m}',${curDay},this.value)"
            ${dd.pays.length > 0 ? 'disabled style="opacity:.4"' : ''}>
        </div>
        <span class="desglose-toggle" onclick="toggleDs('ds-${ag.id}-${mi}')">
          ${dd.pays.length > 0 ? '▾' : '▸'} Desglosar pagos (${dd.pays.length})
        </span>
        <div class="desglose-area${dd.pays.length > 0 ? ' open' : ''}" id="ds-${ag.id}-${mi}">
          <div>${paysHtml}</div>
          <button class="add-pay-btn" onclick="capAddPay('${ag.id}','${m}',${curDay})">+ Agregar pago</button>
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

function switchAg(id) { curAgency = id; openMembers = {}; renderCaptura(); }
function switchDay(di) { curDay = di; renderCaptura(); }
function toggleMember(agId, m) { openMembers[agId + m] = !openMembers[agId + m]; renderCaptura(); }
function toggleDs(id) { const el = document.getElementById(id); if (el) el.classList.toggle('open'); }

function capSetManual(agId, m, di, val) {
  const d = getDayData(agId, m, di); d.manual = parseFloat(val) || 0;
  setDayData(agId, m, di, d); saveState(); renderCaptura();
}
function capAddPay(agId, m, di) {
  const d = getDayData(agId, m, di); d.pays.push(0); d.manual = 0;
  setDayData(agId, m, di, d); saveState(); renderCaptura();
}
function capDelPay(agId, m, di, pi) {
  const d = getDayData(agId, m, di); d.pays.splice(pi, 1);
  setDayData(agId, m, di, d); saveState(); renderCaptura();
}
function capUpdatePay(agId, m, di, pi, val) {
  const d = getDayData(agId, m, di); d.pays[pi] = parseFloat(val) || 0;
  setDayData(agId, m, di, d); saveState(); renderCaptura();
}
function resetWeek() {
  if (!confirm('¿Iniciar nueva semana? Los datos se guardarán en historial.')) return;
  localStorage.removeItem('nomina_' + getWeekKey());
  loadState(); renderAll();
}

// ── DASHBOARD ─────────────────────────────────────────
function renderDash() {
  document.getElementById('wl-dash').textContent = 'Semana ' + getWeekKey();
  const totProd = AGENCIES.reduce((s, ag) => s + getAgencyProd(ag.id), 0);
  const totNom  = AGENCIES.reduce((s, ag) => s + getGerentePay(ag) + getEquipoPay(ag), 0);
  const maxProd = Math.max(...AGENCIES.map(ag => getAgencyProd(ag.id)), 1);

  document.getElementById('dash-metrics').innerHTML = `
    <div class="metric-card"><div class="metric-lbl">Producción total</div><div class="metric-val">${fmt(totProd)}</div></div>
    <div class="metric-card"><div class="metric-lbl">Total nóminas</div><div class="metric-val" style="color:#C2185B">${fmt(totNom)}</div></div>
    <div class="metric-card"><div class="metric-lbl">Agencias activas</div><div class="metric-val">${AGENCIES.filter(ag => getAgencyProd(ag.id) > 0).length}/${AGENCIES.length}</div></div>
    <div class="metric-card"><div class="metric-lbl">Día seleccionado</div><div class="metric-val" style="font-size:15px">${DAYS[curDay]}</div></div>`;

  document.getElementById('dash-bars').innerHTML = AGENCIES.map(ag => {
    const prod = getAgencyProd(ag.id);
    return `<div class="bar-row">
      <div class="bar-name">${ag.id}</div>
      <div class="bar-track"><div class="bar-fill" style="width:${Math.round(prod / maxProd * 100)}%;background:${ag.color}"></div></div>
      <div class="bar-val">${fmt(prod)}</div>
    </div>`;
  }).join('');

  const canvas = document.getElementById('pie-canvas');
  const ctx    = canvas.getContext('2d');
  ctx.clearRect(0, 0, 120, 120);
  const vals  = AGENCIES.map(ag => getAgencyProd(ag.id));
  const total = vals.reduce((s, v) => s + v, 0) || 1;
  let angle   = -Math.PI / 2;
  vals.forEach((v, i) => {
    const slice = v / total * Math.PI * 2;
    ctx.beginPath(); ctx.moveTo(60, 60); ctx.arc(60, 60, 54, angle, angle + slice);
    ctx.closePath(); ctx.fillStyle = AGENCIES[i].color; ctx.fill(); angle += slice;
  });
  ctx.beginPath(); ctx.arc(60, 60, 28, 0, Math.PI * 2); ctx.fillStyle = 'var(--color-background-primary)'; ctx.fill();

  document.getElementById('pie-legend').innerHTML = AGENCIES.map((ag, i) => `
    <div class="leg-item"><div class="leg-dot" style="background:${ag.color}"></div>
    <span>${ag.id}: ${Math.round(vals[i] / total * 100)}%</span></div>`).join('');

  const all = [];
  AGENCIES.forEach(ag => ag.members.forEach((m, mi) => {
    const wt = getWeekTotal(ag.id, m);
    if (wt > 0) all.push({ name: m, color: ag.color, total: wt, nom: wt * (mi === 0 ? ag.ger_pct : ag.as_pct) });
  }));
  all.sort((a, b) => b.total - a.total);
  const maxR = all[0]?.total || 1;
  document.getElementById('dash-ranking').innerHTML = all.slice(0, 10).map((r, i) => `
    <div class="bar-row">
      <div class="bar-name" style="font-size:10px">${i + 1}. ${r.name}</div>
      <div class="bar-track"><div class="bar-fill" style="width:${Math.round(r.total / maxR * 100)}%;background:${r.color}"></div></div>
      <div class="bar-val" style="font-size:10px">${fmt(r.total)}</div>
    </div>`).join('') || '<p style="color:var(--color-text-secondary);font-size:12px">Sin producción esta semana</p>';
}

// ── HISTORIAL ─────────────────────────────────────────
function renderHist() {
  const keys = [];
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (k && k.startsWith('nomina_2')) keys.push(k);
  }
  keys.sort().reverse();

  if (!keys.length) {
    document.getElementById('hist-content').innerHTML = '<p style="padding:20px 0;color:var(--color-text-secondary)">No hay semanas anteriores guardadas.</p>';
    return;
  }

  document.getElementById('hist-content').innerHTML = keys.map(k => {
    const wk = k.replace('nomina_', '');
    let dat; try { dat = JSON.parse(localStorage.getItem(k)); } catch { return ''; }
    let totP = 0;
    const rows = AGENCIES.map(ag => {
      const prod = ag.members.reduce((s, m) => {
        const days = dat[ag.id]?.[m]?.days || [];
        return s + days.reduce((ds, d) => {
          const ps = (d.pays || []).reduce((pp, p) => pp + (parseFloat(p) || 0), 0);
          return ds + (ps > 0 ? ps : (parseFloat(d.manual) || 0));
        }, 0);
      }, 0);
      totP += prod;
      return `<tr><td><span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${ag.color};margin-right:4px"></span>${ag.id}</td><td style="text-align:right">${fmt(prod)}</td></tr>`;
    }).join('');
    return `<div class="hist-card"><div class="hist-week">Semana del ${fmtDate(wk)}</div>
      <table class="hist-table">${rows}<tr style="font-weight:700"><td>TOTAL</td><td style="text-align:right">${fmt(totP)}</td></tr></table></div>`;
  }).join('');
}

// ── DIRECTORIO ────────────────────────────────────────
function renderDirectorio() {
  const q = (document.getElementById('dir-search').value || '').toLowerCase().trim();
  const entries = Object.entries(DIRECTORIO);
  const filtered = q
    ? entries.filter(([apodo, d]) =>
        apodo.toLowerCase().includes(q) ||
        d.agencia.toLowerCase().includes(q) ||
        d.nombres.some(n => n.toLowerCase().includes(q)) ||
        d.telLaboral.some(t => t.includes(q)) ||
        d.telPersonal.some(t => t.includes(q))
      )
    : entries;

  if (filtered.length === 0) {
    document.getElementById('dir-results').innerHTML = '<div class="search-empty">No se encontró ningún resultado</div>';
    return;
  }

  // Agrupar por agencia
  const byAgency = {};
  filtered.forEach(([apodo, d]) => {
    if (!byAgency[d.agencia]) byAgency[d.agencia] = [];
    byAgency[d.agencia].push([apodo, d]);
  });

  const agOrder = AGENCIES.map(a => a.id);
  document.getElementById('dir-results').innerHTML = agOrder
    .filter(ag => byAgency[ag])
    .map(ag => {
      const agData = AGENCIES.find(a => a.id === ag);
      const cards  = byAgency[ag].map(([apodo, d]) => {
        const isGer = AGENCIES.find(a => a.id === ag)?.members[0] === apodo;
        return `<div class="dir-card">
          <div class="dir-card-hdr">
            <div class="dir-avatar" style="background:${agData.color}">${apodo.slice(0,2)}</div>
            <div>
              <div class="dir-apodo">${apodo}${isGer ? ' ★' : ''}</div>
              <div class="dir-ag" style="color:${agData.color}">${ag}</div>
            </div>
          </div>
          <div class="dir-nombres">${d.nombres.map(n => `<div>👤 ${n}</div>`).join('')}</div>
          <div class="dir-tels">
            ${d.telLaboral.map(t => `<a href="tel:${t}" class="dir-tel-badge lab">📞 ${t}</a>`).join('')}
            ${d.telPersonal.map(t => `<a href="tel:${t}" class="dir-tel-badge per">📱 ${t}</a>`).join('')}
          </div>
        </div>`;
      }).join('');
      return `<div class="dir-group">
        <div class="dir-group-title" style="color:${agData.color}">● ${ag}</div>
        <div class="dir-cards">${cards}</div>
      </div>`;
    }).join('');
}

// ── CONFIGURACIÓN ─────────────────────────────────────
function renderCfg() {
  document.getElementById('cfg-agencies').innerHTML = AGENCIES.map((ag, ai) => `
    <div class="ag-cfg">
      <div class="ag-cfg-hdr">
        <div class="ag-color-dot" style="background:${ag.color}"></div>
        <div class="ag-cfg-name">${ag.id}</div>
        <small style="color:var(--color-text-secondary);font-size:10px;margin-left:auto">
          Ger: ${Math.round(ag.ger_pct * 100)}% · As: ${Math.round(ag.as_pct * 100)}% · Bono: ${Math.round(ag.bono_pct * 100)}%
        </small>
      </div>
      <div id="mcfg-${ai}">
        ${ag.members.map((m, mi) => `
          <div class="member-cfg-row">
            <input value="${m}" onchange="AGENCIES[${ai}].members[${mi}]=this.value" ${mi === 0 ? 'style="font-weight:700"' : ''}>
            ${mi > 0 ? `<button class="del-btn" onclick="rmMember(${ai},${mi})">×</button>` : ''}
          </div>`).join('')}
      </div>
      <button class="add-member-btn" onclick="addMember(${ai})">+ Agregar asesor</button>
    </div>`).join('');
}

function rmMember(ai, mi) { AGENCIES[ai].members.splice(mi, 1); renderCfg(); }
function addMember(ai) { AGENCIES[ai].members.push('Nuevo asesor'); renderCfg(); }
function saveConfig() { saveAgencies(); loadState(); renderAll(); alert('¡Guardado!'); }

// ── EXPORTACIÓN ───────────────────────────────────────
function copyWA() {
  const wk = getWeekKey();
  let txt  = `*NÓMINAS — Semana ${wk}*\n\n`;
  AGENCIES.forEach(ag => {
    const prod = getAgencyProd(ag.id); if (!prod) return;
    txt += `*${ag.id}*\n  Producción: ${fmt(prod)}\n  Gerente: ${fmt(getGerentePay(ag))}\n`;
    ag.members.forEach((m, mi) => {
      const wt = getWeekTotal(ag.id, m);
      if (wt > 0) txt += `  • ${m}: ${fmt(wt)} → ${fmt(wt * (mi === 0 ? ag.ger_pct : ag.as_pct))}\n`;
    });
    txt += '\n';
  });
  const totP = AGENCIES.reduce((s, ag) => s + getAgencyProd(ag.id), 0);
  const totN = AGENCIES.reduce((s, ag) => s + getGerentePay(ag) + getEquipoPay(ag), 0);
  txt += `*TOTAL GENERAL*\nProducción: ${fmt(totP)}\nNóminas: ${fmt(totN)}`;
  navigator.clipboard.writeText(txt).then(() => alert('¡Copiado para WhatsApp!'));
}

function exportXLSX() {
  const wb = XLSX.utils.book_new();
  AGENCIES.forEach(ag => {
    const rows = [['', 'LUNES', 'MARTES', 'MIÉRCOLES', 'JUEVES', 'VIERNES', 'SÁBADO', 'TOTAL', 'NÓMINA']];
    ag.members.forEach((m, mi) => {
      const dt = DAYS.map((_, di) => getDayTotal(ag.id, m, di));
      const wk = dt.reduce((s, v) => s + v, 0);
      rows.push([m, ...dt, wk, wk * (mi === 0 ? ag.ger_pct : ag.as_pct)]);
    });
    rows.push([], [`PRODUCCIÓN`, '', '', '', '', '', '', getAgencyProd(ag.id)], [`NÓM. GERENTE`, '', '', '', '', '', '', getGerentePay(ag)]);
    XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet(rows), ag.id.slice(0, 31));
  });
  const res = [['AGENCIA', 'PRODUCCIÓN', 'NÓM. GERENTE', 'BONO', 'NÓM. EQUIPO']];
  AGENCIES.forEach(ag => res.push([ag.id, getAgencyProd(ag.id), getGerentePay(ag), getBono(ag), getEquipoPay(ag)]));
  XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet(res), 'RESUMEN');
  XLSX.writeFile(wb, `Nomina_${getWeekKey()}.xlsx`);
}

// ── NAVEGACIÓN ────────────────────────────────────────
function showPage(name, btn) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('page-' + name).classList.add('active');
  btn.classList.add('active');
  if (name === 'search')    renderSearch();
  if (name === 'dash')      renderDash();
  if (name === 'hist')      renderHist();
  if (name === 'cfg')       renderCfg();
  if (name === 'directorio') renderDirectorio();
}

function renderAll() { renderSearch(); renderCaptura(); }

// ── INIT ──────────────────────────────────────────────
loadAgencies();
loadState();
renderAll();
