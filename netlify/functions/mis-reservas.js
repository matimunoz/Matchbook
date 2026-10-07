// Devuelve el historial de reservas de la persona autenticada.
//
// El correo SIEMPRE sale del token verificado por Netlify Identity, nunca de
// la petición. Así nadie puede pedir el historial de otra persona.
//
// Variables de entorno necesarias (Netlify → Site settings → Environment variables):
//   APPS_SCRIPT_URL    la misma URL /exec que usa index.html
//   APPS_SCRIPT_SECRET el mismo valor guardado en las propiedades del Apps Script

exports.handler = async (event, context) => {
  const json = (statusCode, body) => ({
    statusCode,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
    body: JSON.stringify(body)
  });

  const user = context.clientContext && context.clientContext.user;
  if (!user || !user.email) {
    return json(401, { error: "Necesitas iniciar sesión." });
  }

  const { APPS_SCRIPT_URL, APPS_SCRIPT_SECRET } = process.env;
  if (!APPS_SCRIPT_URL || !APPS_SCRIPT_SECRET) {
    console.error("Faltan APPS_SCRIPT_URL o APPS_SCRIPT_SECRET");
    return json(500, { error: "El historial no está configurado todavía." });
  }

  const url = APPS_SCRIPT_URL
    + "?action=misreservas"
    + "&secret=" + encodeURIComponent(APPS_SCRIPT_SECRET)
    + "&email=" + encodeURIComponent(user.email.trim().toLowerCase());

  try {
    const r = await fetch(url, { redirect: "follow" });
    if (!r.ok) throw new Error("Apps Script respondió " + r.status);

    const data = await r.json();
    if (data.error) throw new Error(data.error);

    return json(200, { reservas: data.reservas || [] });
  } catch (err) {
    console.error("mis-reservas:", err.message);
    return json(502, { error: "No pudimos leer tu historial en este momento." });
  }
};
