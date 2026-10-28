// ══════════════════════════════════════════════════════════════════════
//  FUTUROS POSIBLES
//
//  Seis maneras en que esto puede terminar siendo. Ninguna es una
//  predicción: la gracia del ejercicio es que verlos todos es lo que
//  deja elegir.
//
//  Cada futuro se cuenta con dos cartas escritas desde adentro de ese
//  futuro, una de cada uno. Son las que acompañarían a esa foto de la
//  carta de los dos meses: "nuestras versiones desde el futuro".
//
//  ⚠ Las cartas de ella las escribí imitando su manera de escribir, a
//    partir de lo que mandó por el formulario. Leelas con cuidado y
//    corregí lo que no suene a ella: es su voz, no la mía.
// ══════════════════════════════════════════════════════════════════════
const FUTUROS = [
  {
    emoji:  `🌱`,
    titulo: `Seguir conociéndonos`,
    desde:  `2036`,
    mia:    `Un 13 de agosto de 2036, diez años justos desde que te pedí pololeo en la tranquilidad de la pieza. Te escribo desde la mesa del comedor mientras duermes. Anoche me contaste algo tuyo que yo no sabía, y me quedé un rato pensando en lo raro y lo bueno que es eso: llevamos una vida juntos y todavía me faltan pedazos tuyos por conocer. En retrospectiva, creo que lo que nos salvó no fue ninguna decisión grande. Fue la costumbre chica de preguntar en vez de suponer. Seguimos teniendo lo nuestro, tú con tus pacientes y yo con mis libros y mis ideas, y seguimos trayéndolo a la mesa. Me sigue sorprendiendo tener tanto que decirte.`,
    suya:   `Jueves 13 de agosto de 2036. Hoy desperté antes que tú, cosa rarísima, y me quedé un rato mirándote dormir como hacía al principio. Ayer en la once te conté algo que nunca te había contado y pusiste esa cara tuya de querer entender antes que opinar, me encanta eso de ti. Han pasado diez años y seguimos conversando como si todavía nos faltara tiempo. Yo pensé que esto se gastaba, que en algún momento uno se sabe al otro de memoria y listo. No nos pasó, y creo que es porque nunca dejaste de preguntarme. Gracias por eso, de verdad. Te amo infinito 💚.`,
    acerca: `Preguntamos en vez de suponer. La noche de mi cumpleaños te dije que en pareja uno no puede asumir que el otro piensa como uno, y tú lo guardaste como enseñanza. Eso, repetido mil veces, es este futuro.`,
    protege:`Se aleja el día que creemos saber de antemano lo que el otro va a contestar, y dejamos de preguntar por eso mismo.`
  },
  {
    emoji:  `🏠`,
    titulo: `La casa tranquila`,
    desde:  `2034`,
    mia:    `Un domingo de mayo de 2034. Te escribo esto y no sé bien para qué, porque no pasa nada, y ese es exactamente el punto. Tenemos una casa que funciona, una rutina que funciona, y hace como dos años que no tenemos una conversación que no sea logística. No peleamos. No nos falta nada. Pero hoy estaba ordenando y encontré la cartita verde del día del lector, y me senté en el suelo un rato largo. En retrospectiva creo que nunca decidimos esto: se fue acomodando solo, un miércoles tras otro en que era más fácil no vernos. Te quiero, de verdad. Solo que hace mucho que no te lo digo de una manera que signifique algo.`,
    suya:   `Jueves 4 de mayo de 2034. Hoy hiciste la once y conversamos de las cuentas, del auto y de si vamos o no donde tu mamá el domingo. Después cada uno con su teléfono. Nada de eso está mal, pero me quedé con una sensación rara que recién ahora sé nombrar: te extraño y estás acá, a dos metros. Me acordé de cuando me llevaste por primera vez al Pasaje un miércoles cualquiera, sin motivo, solo porque sí. Hace años que no hacemos nada sin motivo, y no sé en qué momento dejamos de hacerlo. Te amo igual, pero necesitaba decírtelo 💚.`,
    acerca: `Dejamos que la semana decida por nosotros y nos vemos solo cuando sobra tiempo. Tú ya lo escribiste una vez: siempre ha costado un poco vernos los días de semana.`,
    protege:`Nos protege seguir inventando. Un día del lector que nadie celebra, un café entre libros un miércoles cualquiera, una presentación hecha a mano para que te veas mejor. Nada de eso era necesario, y por eso valía.`
  },
  {
    emoji:  `🛤️`,
    titulo: `Dos caminos`,
    desde:  `2033`,
    mia:    `Un 20 de diciembre de 2033, trece años desde aquella primera cita. Me invitaron a presentar lo que estoy haciendo y, armando las láminas, me di cuenta de que ya no sé cómo explicarte de qué se trata sin aburrirte. Y que tú hace rato que no me cuentas de tus pacientes, supongo que por lo mismo. A los dos nos fue bien, cada uno por su lado. No hay nadie a quien echarle la culpa y eso es justamente lo que más me incomoda. Me acordé de cuando te armé una presentación entera solo para que te vieras mejor. Esa persona tenía tiempo. No sé en qué momento lo dejé de tener.`,
    suya:   `Martes 20 de diciembre de 2033. Terminé un proceso largo con una paciente, de esos que te marcan. Salí de la consulta con ganas de contarlo y me di cuenta de que pensé en contárselo al Miguel antes que a ti. Eso me dolió, no porque esté mal, sino porque antes el primero eras tú siempre. Supongo que fue de a poco: dejé de contarte lo chico porque estabas ocupado, y después dejé de contarte lo grande porque ya no tenías el contexto. Te sigo queriendo mucho. Es solo que hace tiempo que no te sé explicar mi día 💚.`,
    acerca: `Cada uno se guarda lo suyo porque supone que al otro no le interesa o no lo va a entender.`,
    protege:`Nos protege meternos en el mundo del otro aunque no nos toque. Tú volviste a leer por mí; yo aprendí a mirar la fe de otra manera por ti. Ninguna de las dos cosas era nuestra y las dos terminaron siéndolo.`
  },
  {
    emoji:  `⚓`,
    titulo: `Lo que nos tocó cargar`,
    desde:  `2030`,
    mia:    `Un 2 de julio de 2030. Elijo esta fecha porque hoy se cumplen cuatro años de aquella noche en que llegué al bar casi a las diez, muerto, y me quedé contigo. Estos años se han parecido bastante a esa noche: llegar cansado y quedarse igual. No nos tocó fácil. Hubo meses enteros en que esto no se trató de nosotros, se trató de aguantar. Y sin embargo acá estamos. En retrospectiva creo que lo que nos sostuvo fue no esconderlo: tú me viste quebrado y yo te vi quebrada, y ninguno de los dos salió corriendo. No es la historia bonita que me hubiese gustado escribirte. Es la verdadera, y te amo más por eso.`,
    suya:   `Martes 2 de julio de 2030. Estos años han sido difíciles y no quiero adornarlo. Hubo noches en que me acosté sin tener nada lindo que decirte, solo cansancio. Pero hoy me acordé de algo: aquella vez de la audiencia, cuando yo ya me estaba poniendo muy pesimista y tú decidiste llegar igual al bar, agotado, solo para estar. No arreglaste nada esa noche, no tenías cómo. Pero estuviste, y eso lo has hecho cada vez desde entonces. Yo creo que el amor es mucho más eso que lo otro. Gracias por no dejarme sola en nada de esto. Te amo mucho 💚.`,
    acerca: `No depende de nosotros. La vida decide y pasa.`,
    protege:`Nos protege cargarlo a la vista del otro en vez de cada uno por su lado. Un 2 de julio te escribí desde la vuelta de Santiago y llegué al bar casi a las diez, muerto, porque no quería que estuvieras sola con eso. No arreglé nada esa noche. Pero estuve.`
  },
  {
    emoji:  `🌅`,
    titulo: `Volver a empezar`,
    desde:  `2031`,
    mia:    `Un 15 de julio de 2031, y elijo la fecha a propósito. Hace cinco años, un 15 de julio, me fui de tu departamento en mitad de la noche pensando que no volvía. Después hubo otra vez peor, y esa sí nos separó de verdad: meses en que no supe de ti y en que aprendí cosas de mí que no tenía ganas de aprender. Volvimos. No volvimos a lo mismo, y eso es lo importante. Lo que armamos después es más lento, menos deslumbrante y mucho más cierto. Ya no te prometo que no nos vamos a romper. Te prometo que no me voy a ir sin avisar.`,
    suya:   `Martes 15 de julio de 2031. Hoy pensé en el tiempo en que no estuvimos. No me gusta acordarme, pero tampoco quiero borrarlo, porque sin eso no estaríamos como estamos ahora. Yo aprendí en ese tiempo a estar sola sin sentir que me faltaba algo, y creo que por eso hoy estoy contigo de otra manera: porque quiero, no porque necesite. Tú también volviste distinto, más tranquilo. Me costó confiar de nuevo y no me apuraste ni una sola vez, eso lo valoro muchísimo. Esto segundo es más chiquito y más firme. Me gusta más 💚.`,
    acerca: `Nos rompemos y ninguno de los dos se va del todo.`,
    protege:`De esto ya tenemos práctica. Un 15 de julio me fui en mitad de la noche pensando que no volvía. En octubre fuiste tú la que se disculpó en persona. Las dos veces volvimos, y las dos veces volvimos sabiendo algo nuevo.`
  },
  {
    emoji:  `🕊️`,
    titulo: `Nos quisimos bien y hasta acá`,
    desde:  `2038`,
    mia:    `Un 13 de agosto de 2038. Hoy habríamos cumplido doce años. Te escribo desde lejos y sin pena, que es lo que más me sorprende de todo esto. Nos separamos hace tiempo y no fue por una traición ni por un desastre: fue que la vida nos llevó a lugares distintos y los dos lo supimos un rato antes de decirlo. Lo hicimos bien, creo. Nos dijimos la verdad cuando todavía servía de algo. Supe que te está yendo bien y me alegré de verdad, sin que me apretara nada por dentro. Fuiste la persona que me hizo mejor ingeniero y mejor tipo. Eso no se deshace porque esto se haya terminado.`,
    suya:   `Viernes 13 de agosto de 2038. Hoy alguien me preguntó por ti y me di cuenta de que puedo hablar de ti sin que se me cambie la cara. Creo que es lo mejor que nos pudo pasar, dentro de todo. Nos quisimos bien, de verdad bien, y después nos dejamos ir sin hacernos daño, que es muchísimo más difícil de lo que parece. Te debo haber vuelto a leer, haberme sentido capaz, y un par de años en que me sentí más acompañada que nunca en mi vida. No me arrepiento de nada. Ojalá estés muy bien 💚.`,
    acerca: `Dejamos de elegirnos y seguimos igual por costumbre, hasta que la costumbre es lo único que queda.`,
    protege:`Nos protege decirnos la verdad temprano, aunque sea la incómoda. Es el futuro que menos quiero y el que no podía dejar afuera: si ninguno de estos seis contemplara que esto puede terminar, no serían futuros posibles, sería una lista de deseos.`
  },
];
