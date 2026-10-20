// ══════════════════════════════════════════════════════════════════════
//  SALIDA AL HUB
//
//  Cuando la app está guardada en la pantalla de inicio corre en modo
//  standalone: no hay barra de navegador, y por lo tanto no hay botón
//  de atrás. Sin esto, entrar a cualquier página es quedar encerrada.
//
//  Se pone abajo a la izquierda: no tapa los encabezados, no empuja el
//  contenido al aparecer, y queda a mano del pulgar en el teléfono.
//
//  Para que una página nueva lo tenga, basta con:
//      <script src="/alyn/volver.js"></script>
// ══════════════════════════════════════════════════════════════════════
(function () {
  const HUB = '/alyn/';

  // En el hub mismo no va: es el destino
  if (location.pathname === HUB || location.pathname === '/alyn') return;

  const css = document.createElement('style');
  css.textContent = `
    .volver-hub {
      position: fixed;
      left: 16px;
      bottom: calc(18px + env(safe-area-inset-bottom));
      z-index: 60;
      display: inline-flex; align-items: center; gap: 6px;
      background: rgba(255,255,255,.92);
      -webkit-backdrop-filter: blur(8px); backdrop-filter: blur(8px);
      border: 1.5px solid #C0DECA;
      border-radius: 50px;
      padding: 9px 15px 9px 12px;
      font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
      font-size: .78rem; color: #2A5040; text-decoration: none;
      box-shadow: 0 4px 16px rgba(42,80,64,.16);
      -webkit-tap-highlight-color: transparent;
      transition: border-color .2s, transform .12s;
    }
    .volver-hub:hover  { border-color: #78B896; }
    .volver-hub:active { transform: scale(.96); }
    .volver-hub .flecha { font-size: .95rem; line-height: 1; }

    /* El pie queda con aire suficiente para no esconderse tras el botón */
    .foot { padding-bottom: 46px; }

    /* La despedida, igual en todas */
    .foot-amor {
      margin-top: 32px; text-align: center;
      font-family: Georgia, 'Times New Roman', serif; font-style: italic;
      font-size: .92rem; color: #8AADA0;
      padding-bottom: 46px;
    }
  `;
  document.head.appendChild(css);

  const a = document.createElement('a');
  a.className = 'volver-hub';
  a.href = HUB;
  a.innerHTML = '<span class="flecha">‹</span> Inicio';
  document.body.appendChild(a);
})();
