# Guía: activar el panel de administración de Matchbook

El panel vive en **www.matchbook.cl/admin** y permite editar clubes, libros,
fechas, cupos, textos, testimonios y preguntas frecuentes — sin tocar código.

Para activarlo hay que hacer esto **una sola vez**:

## 1. Crear cuenta y repositorio en GitHub
1. Crea una cuenta gratis en https://github.com
2. Crea un repositorio nuevo (botón **New**). Nombre sugerido: `matchbook`.
   Puede ser **Private**. No marques "Add a README".

## 2. Subir el código a GitHub (con GitHub Desktop, lo más fácil)
1. Descarga **GitHub Desktop**: https://desktop.github.com
2. Inicia sesión con tu cuenta de GitHub.
3. Menú **File → Add local repository** → elige la carpeta `Matchbook`.
4. Clic en **Publish repository** → selecciona el repo `matchbook` → Publish.

## 3. Conectar Netlify al repositorio
1. Entra a tu sitio en https://app.netlify.com
2. **Site configuration → Build & deploy → Continuous deployment**
3. Clic en **Link repository** → GitHub → elige `matchbook`.
4. Configuración de build:
   - **Branch:** `main`
   - **Build command:** (déjalo vacío)
   - **Publish directory:** `.` (un punto, o déjalo vacío)
5. Clic en **Deploy**.

## 4. Activar el login (Netlify Identity + Git Gateway)
1. En el sitio: **Integrations / Identity** → **Enable Identity**.
2. En **Identity → Registration**, elige **Invite only**
   (así nadie más puede registrarse).
3. En **Identity → Services → Git Gateway** → **Enable Git Gateway**.

## 5. Invitarte como administrador
1. **Identity → Invite users** → escribe `contacto@matchbook.cl` → Invite.
2. Revisa tu correo → acepta la invitación → crea una contraseña.
3. Entra a **www.matchbook.cl/admin** → inicia sesión → ¡a editar!

---

## Cómo se edita después
- Entra a **www.matchbook.cl/admin** con tu correo y contraseña.
- Cambia lo que quieras y haz clic en **Publish**.
- En 1–2 minutos los cambios aparecen solos en la página. No hay que subir archivos.

## Dónde está cada cosa
- **content/datos.json** — todo el contenido editable (lo maneja el panel).
- **admin/config.yml** — define qué campos aparecen en el panel.
- **portadas/** — imágenes de los libros.
- **index.html** — la página (no necesitas tocarla).
