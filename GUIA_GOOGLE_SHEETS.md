# Guía: Conectar el CRM con Google Sheets

Sigue estos pasos una sola vez. Después, cada vez que guardes un cliente, los datos se respaldan automáticamente en Google Sheets.

---

## Paso 1 — Crear el Google Sheet

1. Ve a [sheets.google.com](https://sheets.google.com) y crea una hoja nueva.
2. Nómbrala **"BaumApp CRM Data"** (o como quieras).
3. Déjala abierta.

---

## Paso 2 — Agregar el Apps Script

1. Dentro del Sheet, ve al menú **Extensiones → Apps Script**.
2. Borra todo el código que aparece por defecto.
3. Abre el archivo `Code.gs` que está en esta carpeta `github-deploy`.
4. Copia todo su contenido y pégalo en el editor de Apps Script.
5. Guarda con **Ctrl + S** (o el ícono de disquete).

---

## Paso 3 — Desplegar como Web App

1. Haz clic en el botón azul **"Implementar"** → **"Nueva implementación"**.
2. En el tipo, selecciona **"Aplicación web"**.
3. Configura así:
   - **Ejecutar como:** Yo (tu cuenta de Google)
   - **Quién puede acceder:** Cualquier persona
4. Haz clic en **"Implementar"**.
5. Acepta los permisos que pida Google.
6. **Copia la URL** que aparece (empieza con `https://script.google.com/macros/s/...`).

---

## Paso 4 — Pegar la URL en el CRM

1. Abre el archivo `index.html` con un editor de texto (o desde VS Code).
2. Busca la línea:
   ```
   const SHEETS_API_URL = '';
   ```
3. Pega la URL entre las comillas:
   ```
   const SHEETS_API_URL = 'https://script.google.com/macros/s/TU_URL_AQUI/exec';
   ```
4. Guarda el archivo y vuelve a subirlo a GitHub (reemplaza el `index.html` anterior).

---

## ¿Cómo funciona después de configurarlo?

- **Al abrir el CRM:** carga los datos desde Google Sheets automáticamente.
- **Al guardar cualquier cliente:** guarda en el navegador Y sincroniza con Sheets.
- **Indicador visual:** aparece un badge "☁ Guardado" en la barra superior cuando la sincronización es exitosa.
- **Log de cambios:** en tu Google Sheet habrá una pestaña `sync_log` con el historial de cada guardado.

---

## ¿Qué pasa si pierdo el navegador o limpio el caché?

Al abrir el CRM en cualquier navegador o dispositivo, si la URL de Sheets está configurada, recupera todos los datos automáticamente desde Google Sheets.

---

## Seguridad

- Los datos se guardan en **tu propia cuenta de Google**, en un Sheet solo tuyo.
- Nadie más puede acceder a ellos a menos que compartas el Sheet o el Apps Script.
- El CRM en GitHub Pages es público (cualquiera puede verlo), pero los datos están protegidos por la autenticación del login del CRM.

---

*Generado automáticamente — BaumApp CRM v2026*
