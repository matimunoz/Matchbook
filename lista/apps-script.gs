/* ══════════════════════════════════════════════════════════════════════
   LISTA COMPARTIDA — backend en Google Apps Script

   Este archivo vive en el repositorio a propósito: el script de reservas
   solo existe en el editor y eso ya costó un bug caro. Si editas allá,
   pega el cambio acá también.

   CÓMO MONTARLO
   1. Crea un Google Sheet NUEVO (no uses el de reservas: ese tiene datos
      personales y debe seguir restringido).
   2. Extensiones → Apps Script. Borra lo que haya y pega este archivo.
   3. Cambia TOKEN por una frase cualquiera, larga y sin espacios.
   4. Implementar → Nueva implementación → Aplicación web.
         Ejecutar como:  Yo
         Quién accede:   Cualquier persona
   5. Copia la URL que termina en /exec y pégala en index.html (API_URL),
      junto con el mismo TOKEN.

   La pestaña se crea sola la primera vez.
   ══════════════════════════════════════════════════════════════════════ */

const HOJA  = 'Lista';
const TOKEN = 'CAMBIA_ESTA_FRASE_POR_UNA_TUYA';

/* Siempre por nombre, nunca por posición: getSheets()[0] es posicional y
   deja de apuntar a la hoja correcta si alguien reordena las pestañas. */
function hojaLista_(ss) {
  let h = ss.getSheetByName(HOJA);
  if (!h) {
    h = ss.insertSheet(HOJA);
    h.appendRow(['id', 'texto', 'categoria', 'quien', 'creado', 'hecho', 'hechoPor']);
  }
  return h;
}

function doGet(e) {
  const p  = (e && e.parameter) || {};
  const cb = p.cb || 'callback';
  let salida;

  try {
    if (p.token !== TOKEN) throw new Error('No autorizado');

    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const h  = hojaLista_(ss);

    if (p.accion && p.accion !== 'listar') {
      const lock = LockService.getScriptLock();
      lock.waitLock(20000);
      try {
        if (p.accion === 'agregar')  agregar_(h, p);
        if (p.accion === 'alternar') alternar_(h, p);
        if (p.accion === 'borrar')   borrar_(h, p);
        SpreadsheetApp.flush();
      } finally {
        lock.releaseLock();
      }
    }

    salida = { ok: true, items: leer_(h) };
  } catch (err) {
    salida = { ok: false, error: String((err && err.message) || err) };
  }

  return ContentService
    .createTextOutput(cb + '(' + JSON.stringify(salida) + ')')
    .setMimeType(ContentService.MimeType.JAVASCRIPT);
}

function leer_(h) {
  const filas = h.getDataRange().getValues();
  filas.shift();                      // cabecera
  return filas
    .filter(f => String(f[0]).length)
    .map(f => ({
      id:        String(f[0]),
      texto:     String(f[1]),
      categoria: String(f[2]),
      quien:     String(f[3]),
      hecho:     f[5] ? String(f[5]) : '',
      hechoPor:  f[6] ? String(f[6]) : ''
    }));
}

function agregar_(h, p) {
  const texto = String(p.texto || '').trim();
  if (!texto) throw new Error('Texto vacío');
  h.appendRow([
    'i' + Date.now(),
    texto.slice(0, 200),
    String(p.categoria || 'Otros'),
    String(p.quien || ''),
    new Date(),
    '',
    ''
  ]);
}

function alternar_(h, p) {
  const fila = buscarFila_(h, p.id);
  const yaEstaba = h.getRange(fila, 6).getValue();
  if (yaEstaba) {
    h.getRange(fila, 6).setValue('');
    h.getRange(fila, 7).setValue('');
  } else {
    h.getRange(fila, 6).setValue(String(p.fecha || ''));
    h.getRange(fila, 7).setValue(String(p.quien || ''));
  }
}

function borrar_(h, p) {
  h.deleteRow(buscarFila_(h, p.id));
}

function buscarFila_(h, id) {
  const ids = h.getRange(1, 1, h.getLastRow(), 1).getValues();
  for (let i = 1; i < ids.length; i++) {
    if (String(ids[i][0]) === String(id)) return i + 1;
  }
  throw new Error('No encontrado: ' + id);
}
