const shortcutsData = [
  // 🧰 Esenciales
  { title: "Deshacer", desc: "Revierte la última acción realizada.", cat: "bas", win: "Ctrl + Z", mac: "Cmd + Z", kw: "revertir atras cancel" },
  { title: "Rehacer", desc: "Repite la última acción deshecha.", cat: "bas", win: "Ctrl + Y (o Ctrl + Shift + Z)", mac: "Cmd + Shift + Z", kw: "repetir adelante" },
  { title: "Copiar", desc: "Copia el contenido de la celda o rango seleccionado.", cat: "bas", win: "Ctrl + C", mac: "Cmd + C", kw: "duplicar portapapeles" },
  { title: "Cortar", desc: "Mueve el contenido de la celda o rango seleccionado.", cat: "bas", win: "Ctrl + X", mac: "Cmd + X", kw: "mover relocalizar" },
  { title: "Pegar", desc: "Inserta lo que tienes en el portapapeles.", cat: "bas", win: "Ctrl + V", mac: "Cmd + V", kw: "insertar portapapeles" },
  { title: "Imprimir", desc: "Abre el menú contextual de impresión y vista previa.", cat: "bas", win: "Ctrl + P", mac: "Cmd + P", kw: "impresora papel pdf vista previa" },
  { title: "Guardar como", desc: "Abre el cuadro de diálogo para guardar el archivo con otro nombre.", cat: "bas", win: "F12", mac: "Cmd + Shift + S", kw: "save as exportar duplicar" },
  { title: "Hipervínculo", desc: "Inserta un enlace dentro de la celda seleccionada.", cat: "bas", win: "Ctrl + K", mac: "Cmd + K", kw: "link enlace url web" },
  { title: "Revisar Ortografía", desc: "Revisa el texto del libro en busca de errores.", cat: "bas", win: "F7", mac: "Fn + F7", kw: "gramatica texto corregir" },
  { title: "Mostrar / Ocultar Cinta", desc: "Expande o contrae la cinta de opciones para ganar espacio.", cat: "bas", win: "Ctrl + F1", mac: "Cmd + Option + R", kw: "menu barra ribbon" },
  
  // Navegación
  { title: "Salto al Límite de Datos", desc: "Mueve el cursor instantáneamente hasta el extremo del bloque con datos contiguos.", cat: "nav", win: "Ctrl + Flechas", mac: "Cmd + Flechas", kw: "saltar mover fin frontera" },
  { title: "Extender Selección", desc: "Selecciona todas las celdas desde la posición actual hasta el límite de datos.", cat: "nav", win: "Ctrl + Shift + Flechas", mac: "Cmd + Shift + Flechas", kw: "resaltar rango conjunto" },
  { title: "Ir a Celda Inicial A1", desc: "Traslada el cursor a la primera celda del lienzo (A1) desde cualquier lugar.", cat: "nav", win: "Ctrl + Inicio", mac: "Cmd + Fn + Flecha Izquierda", kw: "arriba principio inicio" },
  { title: "Ir a Última Celda Activa", desc: "Salta a la última celda utilizada dentro de la hoja de cálculo.", cat: "nav", win: "Ctrl + Fin", mac: "Cmd + Fn + Flecha Derecha", kw: "final abajo fondo" },
  { title: "Seleccionar Fila Completa", desc: "Resalta de extremo a extremo la fila donde se ubica la celda activa.", cat: "nav", win: "Shift + Espacio", mac: "Shift + Espacio", kw: "horizontal linea" },
  { title: "Seleccionar Columna Completa", desc: "Resalta verticalmente toda la columna de la celda activa.", cat: "nav", win: "Ctrl + Espacio", mac: "Ctrl + Espacio", kw: "vertical campo" },
  { title: "Seleccionar Solo Celdas Visibles", desc: "Ignora celdas u ocultaciones por filtro al copiar.", cat: "nav", win: "Alt + ;", mac: "Cmd + Shift + Z", kw: "filtro ocultas descarte" },
  { title: "Ir a Especial (Celdas en blanco/fórmulas)", desc: "Abre el menú para aislar celdas en blanco, constantes o fórmulas.", cat: "nav", win: "F5 (luego Alt + E)", mac: "F5", kw: "vacios constantes errores" },
  { title: "Cambiar de Hoja", desc: "Navega secuencialmente entre las diferentes pestañas del libro.", cat: "nav", win: "Ctrl + AvPág / RePág", mac: "Fn + Ctrl + Abajo / Arriba", kw: "pestana libro navegar" },
  
  // Edición
  { title: "Editar Celda Activa", desc: "Entra en modo de edición situando el cursor al final del contenido existente.", cat: "edit", win: "F2", mac: "Ctrl + U (o Fn + F2)", kw: "modificar escribir texto" },
  { title: "Fijar Referencia ($)", desc: "Alterna entre referencias absolutas, relativas y mixtas ($A$1, A$1, $A1).", cat: "edit", win: "F4", mac: "Cmd + T", kw: "dolar fijar candado formula" },
  { title: "Insertar Fecha Estática", desc: "Estampa la fecha actual del sistema dentro de la celda.", cat: "edit", win: "Ctrl + ;", mac: "Ctrl + ;", kw: "dia hoy calendario" },
  { title: "Insertar Hora Estática", desc: "Estampa la hora exacta actual dentro de la celda.", cat: "edit", win: "Ctrl + Shift + :", mac: "Cmd + ;", kw: "tiempo reloj minuto" },
  { title: "Salto de Línea en Celda", desc: "Permite escribir en una segunda línea dentro de la misma celda.", cat: "edit", win: "Alt + Enter", mac: "Ctrl + Option + Enter", kw: "parrafo multilinea enter" },
  { title: "Rellenar Hacia Abajo", desc: "Copia la celda superior en todas las celdas seleccionadas abajo.", cat: "edit", win: "Ctrl + J (Español) / Ctrl + D (Inglés)", mac: "Cmd + D", kw: "duplicar abajo copiar" },
  { title: "Rellenar a la Derecha", desc: "Copia la celda de la izquierda en el rango seleccionado hacia la derecha.", cat: "edit", win: "Ctrl + D (Español) / Ctrl + R (Inglés)", mac: "Cmd + R", kw: "duplicar derecha copiar" },
  { title: "Relleno Rápido (Flash Fill)", desc: "Extrae o concatena datos detectando patrones automáticamente.", cat: "edit", win: "Ctrl + E", mac: "Cmd + E", kw: "patron separar extraer nombres" },
  { title: "Pegado Especial", desc: "Abre el menú para pegar únicamente Valores, Formatos o Fórmulas.", cat: "edit", win: "Ctrl + Alt + V", mac: "Cmd + Ctrl + V", kw: "valores transparente solo fórmulas" },
  { title: "Entrada Multicelular Simultánea", desc: "Llena todo el rango seleccionado con la fórmula o valor ingresado.", cat: "edit", win: "Ctrl + Enter", mac: "Ctrl + Return", kw: "llenar lote masivo" },
  
  // Formato
  { title: "Menú Formato de Celdas", desc: "Despliega el panel completo para fuentes, bordes, alineación y números.", cat: "fmt", win: "Ctrl + 1", mac: "Cmd + 1", kw: "propiedades bordes color estilo" },
  { title: "Formato Moneda ($)", desc: "Aplica formato monetario con dos posiciones decimales inmediatamente.", cat: "fmt", win: "Ctrl + Shift + $", mac: "Ctrl + Shift + $", kw: "dinero peso dolar euro" },
  { title: "Formato Porcentaje (%)", desc: "Convierte el valor numérico en porcentaje sin decimales.", cat: "fmt", win: "Ctrl + Shift + %", mac: "Ctrl + Shift + %", kw: "porcentual tasa ratio" },
  { title: "Formato Fecha (DD-MM-AA)", desc: "Aplica el formato estándar de fecha al número seleccionado.", cat: "fmt", win: "Ctrl + Shift + #", mac: "Ctrl + Shift + #", kw: "dia mes ano" },
  { title: "Insertar Filas / Columnas", desc: "Abre el cuadro para insertar celdas o agrega la estructura seleccionada.", cat: "fmt", win: "Ctrl + +", mac: "Cmd + Shift + +", kw: "agregar sumar nueva" },
  { title: "Eliminar Filas / Columnas", desc: "Elimina las celdas, filas o columnas previamente resaltadas.", cat: "fmt", win: "Ctrl + -", mac: "Cmd + -", kw: "quitar borrar remover" },
  { title: "Ocultar Filas", desc: "Oculta temporalmente la visibilidad de las filas seleccionadas.", cat: "fmt", win: "Ctrl + 9", mac: "Cmd + (", kw: "invisibilizar esconder" },
  { title: "Ocultar Columnas", desc: "Oculta temporalmente la visibilidad de las columnas seleccionadas.", cat: "fmt", win: "Ctrl + 0", mac: "Cmd + )", kw: "invisibilizar esconder" },
  
  // Fórmulas y Análisis
  { title: "AutoSuma Instantánea", desc: "Inserta automáticamente la función SUMA detectando el rango adyacente.", cat: "fx", win: "Alt + =", mac: "Cmd + Shift + T", kw: "sumar adicion total" },
  { title: "Insertar Gráfico Instantáneo", desc: "Genera un gráfico a partir del rango activo.", cat: "fx", win: "Alt + F1", mac: "F11", kw: "barras lineas chart visual" },
  { title: "Alternar Mostrar Fórmulas", desc: "Muestra las fórmulas subyacentes en las celdas en lugar de los resultados.", cat: "fx", win: "Ctrl + `", mac: "Ctrl + `", kw: "ver codigo sintaxis" },
  { title: "Convertir en Tabla Estructurada", desc: "Transforma un rango de datos en una Tabla oficial con diseño y filtros.", cat: "fx", win: "Ctrl + T", mac: "Cmd + T", kw: "tabla oficial diseno matriz" },
  { title: "Activar / Desactivar Filtros", desc: "Añade o remueve las flechas de filtrado en la fila de encabezados.", cat: "fx", win: "Ctrl + Shift + L", mac: "Cmd + Shift + F", kw: "ordenar filtrar embudo" },
  { title: "Desplegar Menú de Filtro", desc: "Estando en el encabezado, abre las opciones de ordenación y filtro.", cat: "fx", win: "Alt + Flecha Abajo", mac: "Option + Flecha Abajo", kw: "desplegar lista filtro" },
  { title: "Menú Análisis Rápido", desc: "Acceso instantáneo a formato condicional, gráficos y totales.", cat: "fx", win: "Ctrl + Q", mac: "N/A", kw: "herramientas express totales" },
  { title: "Actualizar Todo (Tablas Dinámicas)", desc: "Fuerza el recálculo y actualización de datos de todas las fuentes.", cat: "fx", win: "Ctrl + Alt + F5", mac: "Cmd + Option + L", kw: "refresh recargar dinamica" },
  
  // Archivos
  { title: "Guardar Libro", desc: "Guarda los cambios realizados en el archivo activo.", cat: "file", win: "Ctrl + G (Español) / Ctrl + S (Inglés)", mac: "Cmd + S", kw: "save respaldar" },
  { title: "Abrir Libro", desc: "Despliega el menú para abrir un archivo preexistente.", cat: "file", win: "Ctrl + A (Español) / Ctrl + O (Inglés)", mac: "Cmd + O", kw: "open archivo carpetas" },
  { title: "Nuevo Libro", desc: "Crea una nueva instancia de libro de trabajo en blanco.", cat: "file", win: "Ctrl + U (Español) / Ctrl + N (Inglés)", mac: "Cmd + N", kw: "new blanco crear" },
  { title: "Buscar Dato", desc: "Despliega la ventana de búsqueda dentro del libro.", cat: "file", win: "Ctrl + B (Español) / Ctrl + F (Inglés)", mac: "Cmd + F", kw: "find localizar palabras" },
  { title: "Reemplazar Dato", desc: "Abre la herramienta para buscar y sustituir valores de forma masiva.", cat: "file", win: "Ctrl + L (Español) / Ctrl + H (Inglés)", mac: "Cmd + H", kw: "sustituir cambiar masivo" }
];

const CATS = [
  { id: "all", label: "📋 Todos" },
  { id: "bas", label: "🧰 Esenciales" },
  { id: "nav", label: "🧭 Navegación y Selección" },
  { id: "edit", label: "✏️ Edición y Captura" },
  { id: "fmt", label: "🎨 Formato de Celdas" },
  { id: "fx", label: "➗ Fórmulas y Análisis" },
  { id: "file", label: "📁 Gestión de Archivos" }
];

const $ = id => document.getElementById(id);
const grid = $('shortcutsGrid');
const searchInput = $('searchInput');
const toast = $('toast');

let currentCategory = 'all';
let currentPlatform = 'both';
let favsOnly = false;
let recents = [];

/* ---------- Utilidades ---------- */
function esc(s){ return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
function norm(s){ return s ? s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'') : ''; }
function load(key, def){ try{ const v = localStorage.getItem(key); return v ? JSON.parse(v) : def; }catch(e){ return def; } }
function save(key, val){ try{ localStorage.setItem(key, JSON.stringify(val)); }catch(e){} }
function copyText(text, ok){
  const done = () => ok && ok();
  if(navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(text).then(done).catch(() => fallbackCopy(text, done));
  } else {
    fallbackCopy(text, done);
  }
}
function fallbackCopy(text, done){
  const ta = document.createElement('textarea');
  ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
  document.body.appendChild(ta); ta.select();
  try{ document.execCommand('copy'); }catch(e){}
  ta.remove(); done && done();
}
let toastTimer = null;
function showToast(msg){
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 1900);
}
function highlight(text, q){
  if(!q) return esc(text);
  const idx = norm(text).indexOf(norm(q));
  if(idx === -1) return esc(text);
  return esc(text.slice(0, idx)) + '<mark>' + esc(text.slice(idx, idx + q.length)) + '</mark>' + esc(text.slice(idx + q.length));
}
function renderCombo(combo, q){
  if(combo === 'N/A') return '<span class="key-chip na-chip">N/A</span>';
  if(/ \/ |\(luego|\(Español|\(Inglés|\(o Fn/.test(combo)){
    return '<span class="key-chip combo-wide">' + highlight(combo, q) + '</span>';
  }
  return combo.split(' + ').map((p, i) =>
    (i ? '<span class="key-plus">+</span>' : '') + '<span class="key-chip">' + highlight(p.trim(), q) + '</span>'
  ).join('');
}

/* ---------- Favoritos y Recientes ---------- */
let favs = load('atajoFavs', []);
function isFav(title){ return favs.indexOf(title) !== -1; }
function toggleFav(title, btn){
  const i = favs.indexOf(title);
  if(i === -1){ favs.push(title); } else { favs.splice(i, 1); }
  save('atajoFavs', favs);
  if(btn) btn.classList.toggle('on', isFav(title));
  updateStats();
  render();
}
function addRecent(title, combo){
  recents = recents.filter(r => r.combo !== combo);
  recents.unshift({ title, combo });
  if(recents.length > 8) recents.pop();
  save('atajoRecents', recents);
  paintRecents();
}
function paintRecents(){
  const box = $('recentsBox');
  if(!recents.length){ box.style.display = 'none'; return; }
  box.style.display = 'block';
  $('recentList').innerHTML = recents.map(r =>
    '<span class="recent-chip" data-combo="' + esc(r.combo) + '" title="Copiar: ' + esc(r.combo) + '">' +
    '<span class="k">' + esc(r.combo) + '</span>' +
    '<button class="x" data-del="' + esc(r.combo) + '" title="Quitar" aria-label="Quitar">✕</button></span>'
  ).join('');
}
$('recentList').addEventListener('click', e => {
  const del = e.target.closest('.x');
  if(del){
    e.stopPropagation();
    recents = recents.filter(r => r.combo !== del.dataset.del);
    save('atajoRecents', recents);
    paintRecents();
    return;
  }
  const chip = e.target.closest('.recent-chip');
  if(chip) doCopy(chip.dataset.combo);
});

/* ---------- Copiar ---------- */
function doCopy(text, item){
  if(text === 'N/A') return;
  copyText(text, () => {
    showToast('📋 Copiado: ' + text);
    if(item){
      item.classList.add('copied');
      setTimeout(() => item.classList.remove('copied'), 900);
    }
  });
}

/* ---------- Render ---------- */
function filteredList(){
  const q = norm(searchInput.value.trim());
  let list = shortcutsData.filter(item => {
    if(currentCategory !== 'all' && item.cat !== currentCategory) return false;
    if(favsOnly && !isFav(item.title)) return false;
    if(!q) return true;
    return norm(item.title).includes(q) || norm(item.desc).includes(q) ||
           norm(item.win).includes(q) || norm(item.mac).includes(q) ||
           norm(item.kw).includes(q);
  });
  const sort = $('sortSel').value;
  if(sort === 'az') list = list.slice().sort((a,b) => a.title.localeCompare(b.title));
  if(sort === 'za') list = list.slice().sort((a,b) => b.title.localeCompare(a.title));
  return list;
}
function render(){
  const list = filteredList();
  const q = searchInput.value.trim();
  $('resultLine').innerHTML =
    '<span>Mostrando <b>' + list.length + '</b> de <b>' + shortcutsData.length + '</b> atajos' + (favsOnly ? ' ⭐' : '') + '</span>' +
    '<span>🏷️ ' + (CATS.find(c => c.id === currentCategory) || {}).label + '</span>';

  if(!list.length){
    grid.innerHTML = '<div class="empty"><span class="big">🔎💔</span>No se encontraron atajos que coincidan.<br>Prueba con otra palabra o limpia los filtros.</div>';
    return;
  }
  grid.innerHTML = '';
  list.forEach((item, idx) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.setProperty('--d', Math.min(idx, 11) * 45 + 'ms');
    const rows = [
      { plat: 'win', tag: 'Win', cls: 'tag-win', combo: item.win },
      { plat: 'mac', tag: 'Mac', cls: 'tag-mac', combo: item.mac }
    ].filter(r => currentPlatform === 'both' || r.plat === currentPlatform);
    const rowHtml = rows.map(r => {
      const na = r.combo === 'N/A';
      return '<div class="shortcut-item' + (na ? ' na' : '') + '" data-combo="' + esc(r.combo) + '" title="' + (na ? 'No disponible' : 'Clic para copiar') + '">' +
        '<span class="platform-tag ' + r.cls + '">' + r.tag + '</span>' +
        '<span class="keys">' + renderCombo(r.combo, q) + '</span>' +
        (na ? '' : '<button class="copy-btn" title="Copiar" aria-label="Copiar">📋</button>') +
        '<span class="ok">✔ Copiado</span></div>';
    }).join('');
    card.innerHTML =
      '<button class="fav' + (isFav(item.title) ? ' on' : '') + '" data-fav="' + esc(item.title) + '" title="Favorito" aria-label="Favorito">⭐</button>' +
      '<div class="card-title">' + highlight(item.title, q) + '</div>' +
      '<div class="card-desc">' + highlight(item.desc, q) + '</div>' +
      '<div class="shortcuts-group">' + rowHtml + '</div>' +
      '<div class="card-foot">' +
        '<button class="copy-all" data-all="' + esc(item.win) + '|' + esc(item.mac) + '">📥 Copiar ambos</button>' +
        '<span class="tag">' + (CATS.find(c => c.id === item.cat) || {}).label + '</span>' +
      '</div>';
    grid.appendChild(card);
  });
}
grid.addEventListener('click', e => {
  const favBtn = e.target.closest('.fav');
  if(favBtn){ e.stopPropagation(); toggleFav(favBtn.dataset.fav, favBtn); return; }
  const allBtn = e.target.closest('.copy-all');
  if(allBtn){
    const parts = allBtn.dataset.all.split('|');
    const texts = [];
    if(parts[0] && parts[0] !== 'N/A') texts.push('Windows: ' + parts[0]);
    if(parts[1] && parts[1] !== 'N/A') texts.push('Mac: ' + parts[1]);
    copyText(texts.join('  ·  '), () => showToast('📥 Copiados ambos atajos'));
    return;
  }
  const item = e.target.closest('.shortcut-item');
  if(item && !item.classList.contains('na')){
    const combo = item.dataset.combo;
    const card = item.closest('.card');
    const title = card ? card.querySelector('.card-title').textContent : '';
    addRecent(title, combo);
    doCopy(combo, item);
  }
});

/* ---------- Categorías ---------- */
const catCounts = {};
shortcutsData.forEach(it => { catCounts[it.cat] = (catCounts[it.cat] || 0) + 1; });
$('cats').innerHTML = CATS.map(c =>
  '<button class="cat-btn' + (c.id === currentCategory ? ' active' : '') + '" data-cat="' + c.id + '">' +
  c.label + '<span class="n">' + (c.id === 'all' ? shortcutsData.length : (catCounts[c.id] || 0)) + '</span></button>'
).join('');
$('cats').addEventListener('click', e => {
  const btn = e.target.closest('.cat-btn');
  if(!btn) return;
  currentCategory = btn.dataset.cat;
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.toggle('active', b === btn));
  render();
});

/* ---------- Buscador ---------- */
let debTimer = null;
searchInput.addEventListener('input', () => {
  $('searchWrap').classList.toggle('has-text', !!searchInput.value);
  clearTimeout(debTimer);
  debTimer = setTimeout(render, 90);
});
$('clearBtn').addEventListener('click', () => {
  searchInput.value = '';
  $('searchWrap').classList.remove('has-text');
  render();
  searchInput.focus();
});
document.addEventListener('keydown', e => {
  if(e.key === '/' && document.activeElement !== searchInput){
    e.preventDefault(); searchInput.focus(); searchInput.select();
  }
  if((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k'){
    e.preventDefault(); searchInput.focus(); searchInput.select();
  }
  if(e.key === 'Escape' && document.activeElement === searchInput){
    searchInput.blur();
  }
});

/* ---------- Plataforma ---------- */
$('platformSeg').addEventListener('click', e => {
  const btn = e.target.closest('button');
  if(!btn) return;
  currentPlatform = btn.dataset.plat;
  $('platformSeg').querySelectorAll('button').forEach(b => b.classList.toggle('active', b === btn));
  render();
});

/* ---------- Favoritos / Orden / Tema ---------- */
$('favBtn').addEventListener('click', () => {
  favsOnly = !favsOnly;
  $('favBtn').classList.toggle('active', favsOnly);
  render();
});
$('sortSel').addEventListener('change', render);
$('themeBtn').addEventListener('click', () => {
  const dark = !document.body.classList.contains('dark');
  document.body.classList.toggle('dark', dark);
  $('themeBtn').textContent = dark ? '☀️' : '🌙';
  save('atajoTheme', dark);
});

/* ---------- Atajo del Día ---------- */
function daySeed(){
  const now = new Date();
  return Math.floor((now.getFullYear() * 372 + (now.getMonth() + 1) * 31 + now.getDate()) % shortcutsData.length);
}
function paintDaily(){
  const it = shortcutsData[daySeed()];
  $('dailyBox').innerHTML =
    '<div><div class="lbl">⚡ Atajo del día</div><div class="name">' + esc(it.title) + '</div></div>' +
    '<span class="combo">' + esc(it.win) + '</span>' +
    '<button class="dice" id="diceBtn" title="Otro atajo aleatorio" aria-label="Atajo aleatorio">🎲</button>' +
    '<button id="copyDaily">Copiar</button>';
  $('copyDaily').addEventListener('click', () => {
    addRecent(it.title, it.win);
    doCopy(it.win);
  });
  $('diceBtn').addEventListener('click', () => {
    const it2 = shortcutsData[Math.floor(Math.random() * shortcutsData.length)];
    $('dailyBox').innerHTML =
      '<div><div class="lbl">⚡ Atajo aleatorio</div><div class="name">' + esc(it2.title) + '</div></div>' +
      '<span class="combo">' + esc(it2.win) + '</span>' +
      '<button class="dice" id="diceBtn" aria-label="Atajo aleatorio">🎲</button>' +
      '<button id="copyDaily">Copiar</button>';
    $('copyDaily').addEventListener('click', () => { addRecent(it2.title, it2.win); doCopy(it2.win); });
    $('diceBtn').addEventListener('click', paintDaily);
  });
}

/* ---------- Stats ---------- */
function updateStats(){
  $('heroStats').innerHTML =
    '<span class="stat-chip">📊 <b>' + shortcutsData.length + '</b> atajos</span>' +
    '<span class="stat-chip">🗂️ <b>' + (CATS.length - 1) + '</b> categorías</span>' +
    '<span class="stat-chip">⭐ <b id="favCount">' + favs.length + '</b> favoritos</span>';
}

/* ---------- Init ---------- */
recents = load('atajoRecents', []);
const darkTheme = load('atajoTheme', false);
document.body.classList.toggle('dark', darkTheme);
$('themeBtn').textContent = darkTheme ? '☀️' : '🌙';
updateStats();
paintRecents();
paintDaily();
render();

