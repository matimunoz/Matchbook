// Devuelve la lista completa de cuentas de Netlify Identity, en TSV listo
// para pegar en la pestaña "Cuentas" de la planilla.
//
// Por qué una función y no el navegador: la API de administración de Identity
// no acepta el token de un usuario, ni siquiera de uno con rol admin. Exige un
// token de servicio que Netlify entrega únicamente aquí dentro, en
// context.clientContext.identity. Desde la consola del navegador siempre da 401.
//
// Solo responde a quien tenga el rol "admin": esta lista son los datos
// personales de toda la comunidad, no un dato público.

exports.handler = async (event, context) => {
  const json = (statusCode, body) => ({
    statusCode,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
    body: JSON.stringify(body)
  });

  const ctx = context.clientContext || {};
  const user = ctx.user;

  if (!user) return json(401, { error: "Necesitas iniciar sesión." });

  const roles = (user.app_metadata && user.app_metadata.roles) || [];
  if (roles.indexOf("admin") === -1) {
    return json(403, { error: "Solo las cuentas con rol admin pueden exportar." });
  }

  const identity = ctx.identity;
  if (!identity || !identity.url || !identity.token) {
    console.error("Sin credenciales de Identity en el contexto");
    return json(500, { error: "Identity no está disponible en esta función." });
  }

  try {
    // La API pagina de a 100. Se recorre hasta que una página venga incompleta.
    const todos = [];
    for (let pagina = 1; pagina <= 30; pagina++) {
      const r = await fetch(
        identity.url + "/admin/users?per_page=100&page=" + pagina,
        { headers: { Authorization: "Bearer " + identity.token } }
      );
      if (!r.ok) throw new Error("Identity respondió " + r.status);

      const data = await r.json();
      const lote = data.users || [];
      todos.push(...lote);
      if (lote.length < 100) break;
    }

    // Del más antiguo al más reciente, que es como se lee una planilla
    todos.sort((a, b) => String(a.created_at || "").localeCompare(String(b.created_at || "")));

    const cabecera = ["Registro", "Correo", "Nombre", "Teléfono", "Último acceso"];
    const filas = todos.map(u => {
      const md = u.user_metadata || {};
      return [
        String(u.created_at || "").slice(0, 10),
        String(u.email || "").trim().toLowerCase(),
        (md.full_name || "").trim(),
        (md.telefono || "").trim(),
        String(u.last_login_at || "").slice(0, 10)
      ].join("\t");
    });

    return json(200, {
      total: todos.length,
      conTelefono: todos.filter(u => (u.user_metadata || {}).telefono).length,
      tsv: [cabecera.join("\t"), ...filas].join("\n")
    });
  } catch (err) {
    console.error("exportar-usuarios:", err.message);
    return json(502, { error: "No pudimos leer la lista de cuentas: " + err.message });
  }
};
