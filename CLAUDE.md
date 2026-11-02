# Matchbook — contexto para Claude

Sitio de Matchbook (clubes de lectura en Santiago, Viña y Valparaíso), publicado en **www.matchbook.cl**. El mismo repositorio aloja además algunas páginas personales de Matías.

- Repositorio: https://github.com/matimunoz/Matchbook (rama `main`)
- Hosting: Netlify, con deploy automático en cada push a `main`. El sitio es estático, sin paso de build; las funciones viven en `netlify/functions`.
- Commits: firmar como `Matías <contacto@matchbook.cl>`. Mensajes cortos, en español y en imperativo (por ejemplo "Futuros: quitar la línea de cómo leerlo").
- Vista previa local: `npx -y serve -l 4178 .` y abrir http://localhost:4178

## Estructura

### Sitio público de Matchbook
- `index.html`: home con clubes, fechas, cupos, moderadores, testimonios y preguntas frecuentes. Los cupos se leen en vivo desde Google Sheets mediante un Apps Script.
- `content/datos.json`: contenido editable del sitio. Se edita desde el panel `/admin` (Decap CMS + Netlify Identity + Git Gateway); ver `GUIA-ADMIN.md`.
- `portadas/`, `moderadores/`, `logos/`, `registros/`: imágenes (portadas de libros, fotos de moderadores, logos de aliados, fotos de los encuentros).
- `netlify/functions/`: `mis-reservas.js` y `exportar-usuarios.js`.
- `matias.html` (perfil del cofundador), `bases-sorteo.html`, `privacidad.html`, `sitemap.xml`, `robots.txt`, `og-image.jpg`.

### Páginas personales (todas con `noindex`)
- `alyn/`: hub instalable como app (PWA) que enlaza las páginas de abajo. `alyn/volver.js` agrega el botón para volver al hub; cada página nueva lo incluye con `<script src="/alyn/volver.js"></script>`.
- `carta/`, `futuro/`, `futuros/`, `linea/`, `lista/`, `momentos/`, `razones/`, `playlist/`, `lectoravip/`: páginas que cuelgan del hub. `lista/` usa Apps Script (`lista/apps-script.gs`) como backend; `momentos/admin` y `razones/admin` son sus paneles de edición.
- `fichas/`: fichas de compromiso para Global Shapers Valparaíso.

## Convenciones
- Paleta verde suave (`#EBF5ED` de fondo); las páginas personales fuerzan modo claro.
- Textos en español de Chile, tuteando (no voseando).
- Optimizar las imágenes antes de subirlas (JPG o WebP livianos; nunca PNG de varios MB).
- No subir PDF pesados al repositorio. "Resultados y resumen marca gráfica Matchbook.pdf" (~100 MB) está en `.gitignore` y no viaja con Git.

## Cómo se agrega una página al hub

Todas siguen el mismo molde, así que conviene copiar una que ya exista (`playlist/` o `futuros/` son las más limpias):

1. **Carpeta nueva** con `index.html` y un archivo de datos aparte (`canciones.js`, `escenarios.js`, `preguntas.js`…). El contenido nunca va dentro del HTML: así se edita sin tocar la página.
2. En el `<head>`: `<meta name="robots" content="noindex">` y la paleta de `:root` copiada de otra página.
3. Antes de `</body>`: `<script src="/alyn/volver.js"></script>`, que pone el botón de Inicio. Sin eso queda encerrada, porque en modo app no hay botón de atrás.
4. Al final del contenido: `<div class="foot-amor">te amo 💚</div>`.
5. **Tarjeta en el hub** (`alyn/index.html`), al final de `.grid`, con `animation-delay` 0.07s más que la anterior.
   - Mientras se trabaja: `<div class="tile bloqueado">` con subtítulo "Próximamente" y `🔒`, sin enlace.
   - Al publicarla: pasa a `<a class="tile" href="/loquesea/" data-nuevo="loquesea">` con `<span class="tile-nuevo">Nuevo</span>`. El sello se apaga solo la primera vez que ella entra.
   - Las bloqueadas van siempre al final de la lista.
6. Para revisarla antes de mostrársela: carpeta con nombre impredecible (`revision-<hex>`) y la tarjeta bloqueada. Al aprobarla, `git mv` a su nombre definitivo.

## Trampas conocidas

- **El admin escribe directo a GitHub.** `momentos/admin` y `razones/admin` hacen commit por la API, así que el remoto puede adelantarse mientras se trabaja en local. Si `git push` es rechazado: revisar qué cambió arriba, `git pull --rebase`, verificar que no se perdió nada y recién ahí subir.
- **Nunca `git add -A`.** Matías suele tener cambios propios sin commitear. Agregar solo los archivos tocados. (Ya pasó una vez: se publicaron cambios suyos del sitio público sin que él lo decidiera.)
- **Lo que escribe Alyn llega por Netlify Forms, no al repositorio.** El formulario `sugerencias` queda en el panel de Netlify; para que aparezca en la línea de tiempo hay que copiarlo a mano a `linea/de-alyn.js`. No hay forma de leerlo desde el sitio.
- **El repositorio es público.** Todo lo que ella escribió es legible en GitHub aunque las páginas tengan `noindex`.
- **Netlify Forms tiene cupo mensual** (100 envíos en el plan gratuito). `racha-diaria` ya gasta uno por día. Pensar dos veces antes de agregar registros automáticos.
- **`localStorage` es por navegador y por origen.** El progreso de Alyn vive en su teléfono; cambiar de navegador lo pierde. Por eso `momentos/index.html` tiene un bloque de siembra. Esa siembra corre la primera vez que ella abre en un navegador nuevo, *no* el día que se escribe: nunca fechar nada como "hoy" ahí.
- **El panel de vista previa bloquea iframes de terceros.** Los reproductores de Spotify se ven vacíos en `localhost` y funcionan bien en el sitio publicado. Verificarlos ahí.

## Pendientes

- **`momentos/momentos.js` tiene 43 de 100 escritos.** Alyn abre uno por día; cuando se acaben ve "Pronto habrá más momentos". Es lo más urgente.
- **Premios de los días 50 y 100** en `momentos/index.html`: todavía dicen "Escribe aquí el premio del día 50".
- **`RACHA_AL_MIGRAR`** quedó en 2, el valor del 17 de octubre de 2026. Solo importa si ella estrena navegador.
- **`lista/` no tiene backend.** Falta crear un Sheet nuevo (nunca el de reservas), pegar `lista/apps-script.gs`, publicarlo como app web y poner la URL `/exec` en `API_URL`. Hasta entonces la tarjeta sigue bloqueada.
- **`Nuestras lecturas`** está anunciada como próximamente y todavía no existe.

## Historial
Este proyecto se trabajó en tres hilos de Claude Code en el computador Windows de Aurys: "Matchbook" (el sitio), "Aplicación móvil de gatos con geolocalización" y "Alyn <3" (el hub personal). Las sesiones no se migraron al Mac, pero el estado completo del proyecto está en el historial de Git (`git log`).
