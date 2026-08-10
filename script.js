const shortcutsData = [
  // 🧰 BÁSICOS Y ESENCIALES
  { title: "Deshacer", desc: "Revierte la última acción realizada.", cat: "bas", win: "Ctrl + Z", mac: "Cmd + Z", kw: "revertir atras cancel" },
  { title: "Rehacer", desc: "Repite la última acción deshecha.", cat: "bas", win: "Ctrl + Y (o Ctrl + Shift + Z)", mac: "Cmd + Shift + Z", kw: "repetir adelante" },
  { title: "Copiar", desc: "Copia el contenido de la celda o rango.", cat: "bas", win: "Ctrl + C", mac: "Cmd + C", kw: "duplicar portapapeles" },
  { title: "Cortar", desc: "Mueve el contenido de la celda o rango.", cat: "bas", win: "Ctrl + X", mac: "Cmd + X", kw: "mover relocalizar" },
  { title: "Pegar", desc: "Inserta lo que tienes en el portapapeles.", cat: "bas", win: "Ctrl + V", mac: "Cmd + V", kw: "insertar portapapeles" },
  { title: "Imprimir", desc: "Abre el menú de impresión y vista previa.", cat: "bas", win: "Ctrl + P", mac: "Cmd + P", kw: "impresora papel pdf" },
  { title: "Guardar como", desc: "Abre el cuadro para guardar con otro nombre.", cat: "bas", win: "F12", mac: "Cmd + Shift + S", kw: "save as exportar duplicar" },
  { title: "Hipervínculo", desc: "Inserta un enlace web o de documento.", cat: "bas", win: "Ctrl + K", mac: "Cmd + K", kw: "link enlace url web" },
  { title: "Revisar Ortografía", desc: "Revisa errores ortográficos en la hoja.", cat: "bas", win: "F7", mac: "F7", kw: "gramatica texto corregir abc" },
  { title: "Mostrar / Ocultar Cinta", desc: "Expande o contrae la cinta de opciones.", cat: "bas", win: "Ctrl + F1", mac: "Cmd + Option + R", kw: "menu barra ribbon" },
  { title: "Ayuda de Excel", desc: "Abre el panel de ayuda de Microsoft.", cat: "bas", win: "F1", mac: "Cmd + ?", kw: "soporte manual f1" },
  { title: "Búsqueda Inteligente", desc: "Abre el panel de búsqueda general (Tell Me).", cat: "bas", win: "Alt + Q", mac: "N/A", kw: "bombillo buscar accion" },
  { title: "Pegado Especial", desc: "Abre el menú avanzado para pegar valores o formatos.", cat: "bas", win: "Ctrl + Alt + V", mac: "Cmd + Ctrl + V", kw: "valores transparente formatos especiales" },
  { title: "Pegar como Valores", desc: "Pega directamente sin formatos ni fórmulas (Excel 365).", cat: "bas", win: "Ctrl + Shift + V", mac: "Cmd + Shift + V", kw: "solo texto plano valor" },
  
  // 🧭 NAVEGACIÓN Y SELECCIÓN
  { title: "Salto al Límite", desc: "Mueve el cursor hasta el extremo del bloque de datos.", cat: "nav", win: "Ctrl + Flechas", mac: "Cmd + Flechas", kw: "saltar mover fin frontera" },
  { title: "Extender Selección", desc: "Selecciona celdas hasta el límite de datos.", cat: "nav", win: "Ctrl + Shift + Flechas", mac: "Cmd + Shift + Flechas", kw: "resaltar rango conjunto" },
  { title: "Ir a A1 (Inicio)", desc: "Traslada el cursor a la primera celda (A1).", cat: "nav", win: "Ctrl + Inicio", mac: "Cmd + Fn + Flecha Izquierda", kw: "arriba principio inicio" },
  { title: "Ir a Última Celda", desc: "Salta a la última celda utilizada de la hoja.", cat: "nav", win: "Ctrl + Fin", mac: "Cmd + Fn + Flecha Derecha", kw: "final abajo fondo" },
  { title: "Seleccionar Fila Completa", desc: "Resalta la fila entera de la celda activa.", cat: "nav", win: "Shift + Espacio", mac: "Shift + Espacio", kw: "horizontal linea" },
  { title: "Seleccionar Columna Completa", desc: "Resalta verticalmente toda la columna.", cat: "nav", win: "Ctrl + Espacio", mac: "Ctrl + Espacio", kw: "vertical campo" },
  { title: "Seleccionar Toda la Hoja", desc: "Resalta todas las celdas del documento.", cat: "nav", win: "Ctrl + E (Español) / Ctrl + A (Inglés)", mac: "Cmd + A", kw: "todo global completo" },
  { title: "Seleccionar Región Actual", desc: "Selecciona el bloque contiguo de datos completo.", cat: "nav", win: "Ctrl + * (Asterisco)", mac: "Cmd + Shift + *", kw: "bloque matriz datos" },
  { title: "Solo Celdas Visibles", desc: "Selecciona ignorando las celdas ocultas.", cat: "nav", win: "Alt + ;", mac: "Cmd + Shift + Z", kw: "filtro ocultas descarte" },
  { title: "Ir a...", desc: "Abre el menú para saltar a una celda específica.", cat: "nav", win: "F5 (o Ctrl + I)", mac: "F5 (o Fn + F5)", kw: "saltar especial buscar" },
  { title: "Ir a Especial", desc: "Aislar celdas en blanco, errores o fórmulas.", cat: "nav", win: "F5 (luego Alt + E)", mac: "F5 (luego Alt + E)", kw: "vacios constantes aislar" },
  { title: "Cambiar a Hoja Siguiente", desc: "Navega a la pestaña de la derecha.", cat: "nav", win: "Ctrl + AvPág", mac: "Fn + Ctrl + Abajo", kw: "pestana libro navegar derecha" },
  { title: "Cambiar a Hoja Anterior", desc: "Navega a la pestaña de la izquierda.", cat: "nav", win: "Ctrl + RePág", mac: "Fn + Ctrl + Arriba", kw: "pestana libro navegar izquierda" },
  { title: "Volver a Celda Activa", desc: "Centra la vista en la celda seleccionada actualmente.", cat: "nav", win: "Ctrl + Retroceso", mac: "Cmd + Delete", kw: "centrar volver enfocar" },
  { title: "Siguiente Borde de Rango", desc: "Navega por las esquinas del rango seleccionado.", cat: "nav", win: "Ctrl + . (Punto)", mac: "Ctrl + .", kw: "esquinas bordes rotar" },
  { title: "Desplazarse una Pantalla Arriba/Abajo", desc: "Mueve la vista una página completa.", cat: "nav", win: "RePág / AvPág", mac: "Fn + Arriba / Abajo", kw: "scroll página salto" },
  { title: "Desplazarse una Pantalla Izq/Der", desc: "Mueve la vista horizontalmente.", cat: "nav", win: "Alt + AvPág / RePág", mac: "Fn + Option + Abajo / Arriba", kw: "scroll horizontal lado" },
  
  // ✏️ EDICIÓN Y CAPTURA
  { title: "Editar Celda", desc: "Entra en modo de edición.", cat: "edit", win: "F2", mac: "Ctrl + U (o Fn + F2)", kw: "modificar escribir texto" },
  { title: "Fijar Referencia ($)", desc: "Alterna referencias absolutas ($A$1) y relativas.", cat: "edit", win: "F4", mac: "Cmd + T", kw: "dolar fijar candado formula" },
  { title: "Insertar Fecha Estática", desc: "Estampa la fecha actual en la celda.", cat: "edit", win: "Ctrl + ;", mac: "Ctrl + ;", kw: "dia hoy calendario" },
  { title: "Insertar Hora Estática", desc: "Estampa la hora exacta actual.", cat: "edit", win: "Ctrl + Shift + :", mac: "Cmd + ;", kw: "tiempo reloj minuto" },
  { title: "Salto de Línea en Celda", desc: "Escribe en una segunda línea dentro de la celda.", cat: "edit", win: "Alt + Enter", mac: "Ctrl + Option + Enter", kw: "parrafo multilinea enter" },
  { title: "Rellenar Hacia Abajo", desc: "Copia la celda superior hacia abajo.", cat: "edit", win: "Ctrl + J (Español) / Ctrl + D (Inglés)", mac: "Cmd + D", kw: "duplicar abajo copiar" },
  { title: "Rellenar a la Derecha", desc: "Copia la celda de la izquierda a la derecha.", cat: "edit", win: "Ctrl + D (Español) / Ctrl + R (Inglés)", mac: "Cmd + R", kw: "duplicar derecha copiar" },
  { title: "Relleno Rápido (Flash Fill)", desc: "Extrae o concatena datos detectando patrones.", cat: "edit", win: "Ctrl + E", mac: "Cmd + E", kw: "patron separar extraer nombres ia" },
  { title: "Llenado Multicelular", desc: "Llena todo el rango con el mismo valor/fórmula.", cat: "edit", win: "Ctrl + Enter", mac: "Ctrl + Return", kw: "llenar lote masivo simultaneo" },
  { title: "Insertar Nota (Comentario)", desc: "Abre una nota clásica en la celda.", cat: "edit", win: "Shift + F2", mac: "Shift + F2", kw: "apunte revisar postit" },
  { title: "Eliminar Celda (Retroceso)", desc: "Borra el contenido de la celda activa.", cat: "edit", win: "Supr (Delete)", mac: "Delete", kw: "borrar vaciar limpiar" },
  { title: "Borrar Formato y Todo", desc: "No tiene atajo directo, abre el menú de borrado.", cat: "edit", win: "Alt + O + B + T (Secuencia)", mac: "N/A", kw: "limpiar absoluto reset" },
  { title: "Autocompletar de Columna", desc: "Muestra lista desplegable con valores de la columna.", cat: "edit", win: "Alt + Flecha Abajo", mac: "Option + Flecha Abajo", kw: "desplegable sugerencias historial" },
  { title: "Copiar Fórmula Superior", desc: "Copia la fórmula exacta de arriba sin calcular.", cat: "edit", win: "Ctrl + ' (Comilla)", mac: "Ctrl + '", kw: "clon formula exacto" },
  { title: "Copiar Valor Superior", desc: "Copia el valor (resultado) de la celda de arriba.", cat: "edit", win: "Ctrl + Shift + \"", mac: "Ctrl + Shift + \"", kw: "clon resultado literal" },
  
  // 🎨 FORMATO DE CELDAS
  { title: "Menú Formato de Celdas", desc: "Panel completo para fuentes, bordes y números.", cat: "fmt", win: "Ctrl + 1", mac: "Cmd + 1", kw: "propiedades bordes color estilo" },
  { title: "Formato Moneda ($)", desc: "Aplica formato de dinero con decimales.", cat: "fmt", win: "Ctrl + Shift + $", mac: "Ctrl + Shift + $", kw: "dinero peso dolar euro" },
  { title: "Formato Porcentaje (%)", desc: "Convierte a porcentaje sin decimales.", cat: "fmt", win: "Ctrl + Shift + %", mac: "Ctrl + Shift + %", kw: "porcentual tasa ratio" },
  { title: "Formato Número General", desc: "Restaura la celda a formato general (sin formato).", cat: "fmt", win: "Ctrl + Shift + ~", mac: "Ctrl + Shift + ~", kw: "reset normalizar basico" },
  { title: "Formato Fecha (DD-MMM-AA)", desc: "Aplica formato estándar de fecha.", cat: "fmt", win: "Ctrl + Shift + #", mac: "Ctrl + Shift + #", kw: "dia mes ano" },
  { title: "Formato Hora", desc: "Aplica formato de hora con AM/PM.", cat: "fmt", win: "Ctrl + Shift + @", mac: "Ctrl + Shift + @", kw: "reloj minutos am pm" },
  { title: "Formato Número (2 decimales)", desc: "Aplica formato numérico con separador de miles.", cat: "fmt", win: "Ctrl + Shift + ! (Admiración)", mac: "Ctrl + Shift + !", kw: "miles comas decimales" },
  { title: "Insertar Celdas/Filas", desc: "Cuadro para agregar columnas o filas.", cat: "fmt", win: "Ctrl + +", mac: "Cmd + Shift + +", kw: "agregar sumar nueva" },
  { title: "Eliminar Celdas/Filas", desc: "Elimina las celdas o estructura seleccionada.", cat: "fmt", win: "Ctrl + -", mac: "Cmd + -", kw: "quitar borrar remover" },
  { title: "Ocultar Filas", desc: "Oculta temporalmente la fila activa.", cat: "fmt", win: "Ctrl + 9", mac: "Cmd + 9", kw: "invisibilizar esconder" },
  { title: "Mostrar Filas Ocultas", desc: "Desoculta las filas del rango seleccionado.", cat: "fmt", win: "Ctrl + Shift + (", mac: "Cmd + Shift + (", kw: "revelar ver aparecer" },
  { title: "Ocultar Columnas", desc: "Oculta temporalmente la columna activa.", cat: "fmt", win: "Ctrl + 0", mac: "Cmd + 0", kw: "invisibilizar esconder" },
  { title: "Mostrar Columnas Ocultas", desc: "Desoculta las columnas del rango seleccionado.", cat: "fmt", win: "Ctrl + Shift + )", mac: "Cmd + Shift + )", kw: "revelar ver aparecer" },
  { title: "Negrita", desc: "Aplica o quita el formato de negrita.", cat: "fmt", win: "Ctrl + N (Español) / Ctrl + B", mac: "Cmd + B", kw: "bold grueso destacar" },
  { title: "Cursiva", desc: "Aplica o quita formato de letra cursiva.", cat: "fmt", win: "Ctrl + K (Español) / Ctrl + I", mac: "Cmd + I", kw: "italic inclinada" },
  { title: "Subrayado", desc: "Aplica subrayado al texto.", cat: "fmt", win: "Ctrl + S (Español) / Ctrl + U", mac: "Cmd + U", kw: "linea abajo underline" },
  { title: "Tachado", desc: "Aplica una línea tachando el texto de la celda.", cat: "fmt", win: "Ctrl + 5", mac: "Cmd + Shift + X", kw: "cancelado linea cruzado" },
  { title: "Añadir Borde Exterior", desc: "Aplica un marco negro simple al rango.", cat: "fmt", win: "Ctrl + Shift + &", mac: "Cmd + Option + 0", kw: "cuadro marco lineas" },
  { title: "Quitar Todos los Bordes", desc: "Elimina cualquier borde en las celdas.", cat: "fmt", win: "Ctrl + Shift + _ (Guión bajo)", mac: "Cmd + Option + -", kw: "limpiar sin marcos blanco" },
  
  // ➗ FÓRMULAS Y ANÁLISIS
  { title: "AutoSuma Instantánea", desc: "Inserta la función SUMA detectando el rango.", cat: "fx", win: "Alt + =", mac: "Cmd + Shift + T", kw: "sumar adicion total" },
  { title: "Insertar Gráfico (Misma Hoja)", desc: "Genera un gráfico a partir del rango activo.", cat: "fx", win: "Alt + F1", mac: "Fn + Alt + F1", kw: "barras lineas chart visual" },
  { title: "Insertar Gráfico (Hoja Nueva)", desc: "Genera el gráfico en una pestaña independiente.", cat: "fx", win: "F11", mac: "F11", kw: "grafica full gigante" },
  { title: "Mostrar/Ocultar Fórmulas", desc: "Visualiza la sintaxis en vez del resultado.", cat: "fx", win: "Ctrl + ` (Acento grave)", mac: "Ctrl + `", kw: "ver codigo sintaxis auditoria" },
  { title: "Convertir en Tabla Oficial", desc: "Transforma el rango en Tabla con diseño.", cat: "fx", win: "Ctrl + T (o Ctrl+Q)", mac: "Cmd + T", kw: "diseno matriz formato" },
  { title: "Análisis Rápido", desc: "Menú instantáneo para totales, formatos y minigráficos.", cat: "fx", win: "Ctrl + Q", mac: "N/A", kw: "herramientas express totales popup" },
  { title: "Expandir Barra de Fórmulas", desc: "Da más espacio si la fórmula es muy larga.", cat: "fx", win: "Ctrl + Shift + U", mac: "Ctrl + Shift + U", kw: "crecer agrandar texto" },
  { title: "Cuadro Insertar Función", desc: "Abre el asistente de búsqueda de funciones.", cat: "fx", win: "Shift + F3", mac: "Fn + Shift + F3", kw: "fx buscar matematica" },
  { title: "Administrador de Nombres", desc: "Abre el panel para variables y rangos nombrados.", cat: "fx", win: "Ctrl + F3", mac: "Cmd + F3", kw: "nombres etiquetas variables" },
  { title: "Crear Nombres desde Selección", desc: "Nombra rangos basándose en los encabezados.", cat: "fx", win: "Ctrl + Shift + F3", mac: "Cmd + Shift + F3", kw: "etiquetas automaticas nombres" },
  { title: "Calcular Todo el Libro", desc: "Fuerza el recálculo de fórmulas si está en Manual.", cat: "fx", win: "F9", mac: "Fn + F9", kw: "procesar refrescar update" },
  { title: "Calcular Hoja Activa", desc: "Recalcula solo la pestaña en la que estás.", cat: "fx", win: "Shift + F9", mac: "Fn + Shift + F9", kw: "procesar local update" },
  { title: "Evaluar Parte de Fórmula", desc: "Calcula solo el fragmento sombreado (en modo edición).", cat: "fx", win: "F9 (en edición)", mac: "Fn + F9", kw: "test prueba fragmento" },
  { title: "Argumentos de Función", desc: "Abre la ayuda de variables de la función actual.", cat: "fx", win: "Ctrl + A (tras escribir función)", mac: "Ctrl + A", kw: "ayuda variables parametros" },
  
  // 📊 DATOS, FILTROS Y TABLAS
  { title: "Filtros (Activar/Desactivar)", desc: "Añade o remueve embudos en los encabezados.", cat: "data", win: "Ctrl + Shift + L", mac: "Cmd + Shift + F", kw: "ordenar embudo limpieza" },
  { title: "Desplegar Filtro/Lista", desc: "Abre el menú desplegable en un encabezado.", cat: "data", win: "Alt + Flecha Abajo", mac: "Option + Flecha Abajo", kw: "menu ordenar sorting" },
  { title: "Agrupar Filas/Columnas", desc: "Crea grupos colapsables de celdas.", cat: "data", win: "Shift + Alt + Flecha Der.", mac: "Cmd + Shift + K", kw: "esquema colapsar esquema" },
  { title: "Desagrupar Filas/Columnas", desc: "Rompe un grupo de celdas existente.", cat: "data", win: "Shift + Alt + Flecha Izq.", mac: "Cmd + Shift + J", kw: "romper esquema separar" },
  { title: "Actualizar Tablas Dinámicas", desc: "Refresca la caché de las dinámicas actuales.", cat: "data", win: "Alt + F5", mac: "Option + F5", kw: "refresh recargar pivot" },
  { title: "Actualizar Todo (Libro)", desc: "Refresca todas las consultas, conexiones y TD.", cat: "data", win: "Ctrl + Alt + F5", mac: "Cmd + Option + R", kw: "refresh global power query" },
  { title: "Mostrar Detalles (Dinámica)", desc: "Doble clic (o atajo) para ver origen de un dato (Drill-down).", cat: "data", win: "Doble Clic / Enter", mac: "Doble Clic", kw: "desglose origen drill down" },
  
  // 👁️ VISTA Y VENTANAS
  { title: "Nueva Ventana", desc: "Abre una segunda vista del mismo archivo.", cat: "view", win: "Alt + V + N (Secuencia)", mac: "N/A", kw: "clonar monitor doble" },
  { title: "Cambiar entre Libros", desc: "Salta al siguiente archivo de Excel abierto.", cat: "view", win: "Ctrl + Tab", mac: "Cmd + `", kw: "ventanas multitarea" },
  { title: "Libro Anterior", desc: "Salta al archivo de Excel abierto anteriormente.", cat: "view", win: "Ctrl + Shift + Tab", mac: "Cmd + Shift + `", kw: "ventanas multitarea previo" },
  { title: "Maximizar Ventana", desc: "Maximiza la ventana de la hoja de cálculo.", cat: "view", win: "Ctrl + F10", mac: "N/A", kw: "pantalla completa grande" },
  { title: "Restaurar Ventana", desc: "Devuelve la ventana a su tamaño original.", cat: "view", win: "Ctrl + F5", mac: "N/A", kw: "achicar reducir" },
  { title: "Zoom Acercar/Alejar", desc: "Rueda el ratón para hacer zoom rápido.", cat: "view", win: "Ctrl + Rueda Ratón", mac: "Cmd + Option + Rueda", kw: "lupa grande pequeno" },
  { title: "Ocultar Ventana Actual", desc: "Oculta el libro completo de la vista.", cat: "view", win: "Ctrl + 9 (a nivel ventana no estándar, usa menú)", mac: "Cmd + H", kw: "esconder archivo panic" },
  
  // 📁 ARCHIVOS Y SISTEMA
  { title: "Guardar Libro", desc: "Guarda los cambios rápidamente.", cat: "file", win: "Ctrl + G (Español) / Ctrl + S", mac: "Cmd + S", kw: "save respaldar disco" },
  { title: "Abrir Archivo", desc: "Menú para abrir un archivo preexistente.", cat: "file", win: "Ctrl + A (Español) / Ctrl + O", mac: "Cmd + O", kw: "open carpetas buscar" },
  { title: "Nuevo Libro en Blanco", desc: "Crea un archivo nuevo vacío al instante.", cat: "file", win: "Ctrl + U (Español) / Ctrl + N", mac: "Cmd + N", kw: "new crear cero" },
  { title: "Cerrar Libro (Archivo)", desc: "Cierra el archivo actual sin salir de Excel.", cat: "file", win: "Ctrl + R (Español) / Ctrl + W", mac: "Cmd + W", kw: "salir apagar close" },
  { title: "Cerrar Todo Excel", desc: "Cierra la aplicación por completo.", cat: "file", win: "Alt + F4", mac: "Cmd + Q", kw: "quit kill salir" },
  { title: "Buscar Texto", desc: "Abre el cuadro para localizar valores.", cat: "file", win: "Ctrl + B (Español) / Ctrl + F", mac: "Cmd + F", kw: "find localizar lupa palabra" },
  { title: "Reemplazar Texto", desc: "Buscar y sustituir de forma masiva.", cat: "file", win: "Ctrl + L (Español) / Ctrl + H", mac: "Cmd + H", kw: "sustituir cambiar masivo swap" },
  { title: "Buscar Siguiente", desc: "Va al siguiente resultado de tu búsqueda.", cat: "file", win: "Shift + F4", mac: "Cmd + G", kw: "next repeticion saltar" },
  { title: "Buscar Anterior", desc: "Retrocede al resultado previo de búsqueda.", cat: "file", win: "Ctrl + Shift + F4", mac: "Cmd + Shift + G", kw: "previo back" },
  
  // 🤖 MACROS Y DESARROLLADOR
  { title: "Editor de Visual Basic (VBA)", desc: "Abre el entorno de programación de Excel.", cat: "macro", win: "Alt + F11", mac: "Fn + Option + F11", kw: "codigo vba script programar" },
  { title: "Cuadro de Macros", desc: "Lista de macros para ejecutar, editar o borrar.", cat: "macro", win: "Alt + F8", mac: "Fn + Option + F8", kw: "lista rutinas automatizar" },
  { title: "Ejecutar Código Paso a Paso", desc: "Dentro de VBA, depura línea por línea.", cat: "macro", win: "F8 (En VBA)", mac: "Cmd + Shift + I", kw: "debug depurar pruebas" },
  { title: "Ver Examinador de Objetos", desc: "Dentro de VBA, abre la biblioteca de objetos.", cat: "macro", win: "F2 (En VBA)", mac: "Cmd + Shift + B", kw: "libreria f2 clases" },
  { title: "Ventana Inmediato", desc: "Dentro de VBA, abre la consola para código rápido.", cat: "macro", win: "Ctrl + G (En VBA)", mac: "Cmd + G", kw: "consola debug print" },
  { title: "Cerrar VBA y Volver", desc: "Cierra el editor y regresa a la hoja de cálculo.", cat: "macro", win: "Alt + Q", mac: "Cmd + Q", kw: "regresar salir codigo" }
];

const CATS = [
  { id: "all", label: "📋 Todos" },
  { id: "bas", label: "🧰 Esenciales" },
  { id: "nav", label: "🧭 Navegación" },
  { id: "edit", label: "✏️ Edición" },
  { id: "fmt", label: "🎨 Formato" },
  { id: "fx", label: "➗ Fórmulas" },
  { id: "data", label: "📊 Datos y Filtros" },
  { id: "view", label: "👁️ Vista" },
  { id: "file", label: "📁 Archivos" },
  { id: "macro", label: "🤖 Macros (VBA)" }
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
  if(/ \/ |\(luego|\(Español|\(Inglés|\(o Fn|\(En|\(a nivel|\(Secuencia/.test(combo)){
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
