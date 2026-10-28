# Full Stack Starter — instrucciones para agentes

- Leer README.md y los manifiestos antes de modificar el proyecto. Conservar frontend/ y backend/ y sus lockfiles de pnpm.
- Next.js maneja UI y BFF HTTP. NestJS es la autoridad de identidad, permisos, negocio y persistencia. No importar Prisma ni conectar la base desde el frontend.
- Mantener cookies HttpOnly, validación de origen, sesiones revocables, rate limits y autorización en servicios. No almacenar tokens en localStorage.
- Roles iniciales: ADMIN y VENDEDOR. El alta de cuentas es administrativa. Cambiar estos roles requiere revisar contratos, seed y pruebas.
- Definir el dominio y las reglas del nuevo proyecto explícitamente. Cada recurso privado requiere autorización por registro en lecturas, escrituras, búsquedas, conteos y exportaciones.
- Demos: solo desarrollo, bandera ENABLE_STARTER_DEMOS=true y ADMIN. Nunca usar mocks como datos de producción.
- No publicar secretos, registros personales, archivos .env locales ni procesar datos mediante terceros sin autorización.
- No actualizar Prisma de versión mayor, destruir volúmenes ni aplicar migraciones en producción sin aprobación.
- Usar los scripts existentes para formato, lint, typecheck, tests y build; informar resultados reales y verificaciones pendientes.
- Conservar licencias y atribuciones de los starters originales. No instalar skills ni dependencias sin necesidad justificada.
