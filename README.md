# BLUM CRM

Pipeline comercial de BLUM (Baum App): clientes directos, vendedores y partners.

## Acceso

https://baumappadm.github.io/CRM-BaumApp/

Solo entran usuarios creados por el administrador (correo y contraseña).
Para agregar a alguien: Firebase console → proyecto **BLUM CRM** → Authentication → Usuarios → Agregar usuario.

## Datos

- Base de datos en línea: Firebase Firestore (proyecto `blum-crm`, Santiago). Todos ven los cambios al instante.
- Solo usuarios con sesión iniciada pueden leer o escribir.
- Respaldo: en el CRM, Ajustes → Respaldo completo → Descargar respaldo.

## Archivos

- `index.html`: el CRM completo (un solo archivo), con pestañas de clientes activos, pipeline y embudo de cierre.
- `prueba.html`: copia para probar cambios antes de pasarlos a `index.html`.
- `antiguo/`: versiones anteriores del CRM, guardadas como referencia (`index-2026-11-13.html` es la versión previa a las pestañas nuevas).
