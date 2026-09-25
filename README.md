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

- `index.html`: el CRM completo (un solo archivo).
- `antiguo/`: el CRM anterior, guardado como referencia.
