// ============================================================
// BaumApp CRM — Google Apps Script Backend
// Versión: 1.0 | Mayo 2026
//
// INSTRUCCIONES:
// 1. Crea un Google Sheet nuevo y nómbralo "BaumApp CRM Data"
// 2. Ve a Extensiones → Apps Script
// 3. Borra el código que aparece y pega TODO este archivo
// 4. Guarda (Ctrl+S) y despliega como Web App (ver guía)
// ============================================================

const SHEET_NAME = 'crm_data';
const LOG_SHEET  = 'sync_log';

// ── GET: devuelve el JSON guardado ──────────────────────────
function doGet(e) {
  const ss    = SpreadsheetApp.getActiveSpreadsheet();
  let sheet   = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.getRange('A1').setValue('{}');
  }
  const data = sheet.getRange('A1').getValue() || '{}';
  return ContentService
    .createTextOutput(data)
    .setMimeType(ContentService.MimeType.JSON);
}

// ── POST: guarda el JSON recibido ───────────────────────────
function doPost(e) {
  const ss   = SpreadsheetApp.getActiveSpreadsheet();
  let sheet  = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME);

  const body = e.postData ? e.postData.contents : '{}';

  // Validar que sea JSON válido antes de guardar
  try { JSON.parse(body); } catch(_) {
    return ContentService
      .createTextOutput('{"ok":false,"error":"invalid_json"}')
      .setMimeType(ContentService.MimeType.JSON);
  }

  sheet.getRange('A1').setValue(body);

  // Log de cada guardado (fecha + tamaño)
  let log = ss.getSheetByName(LOG_SHEET);
  if (!log) {
    log = ss.insertSheet(LOG_SHEET);
    log.getRange('A1:C1').setValues([['Fecha', 'Tamaño (KB)', 'Usuario']]);
  }
  const kb   = (body.length / 1024).toFixed(1);
  const user = e.parameter && e.parameter.user ? e.parameter.user : '—';
  log.appendRow([new Date(), kb, user]);

  return ContentService
    .createTextOutput('{"ok":true}')
    .setMimeType(ContentService.MimeType.JSON);
}
