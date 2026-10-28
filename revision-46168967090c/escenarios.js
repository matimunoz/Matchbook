// ══════════════════════════════════════════════════════════════════════
//  FUTUROS POSIBLES
//
//  Cuatro maneras en que esto puede terminar siendo. Ninguna es una
//  predicción: la gracia del ejercicio es que verlas todas es lo que
//  deja elegir.
//
//  Van de más viva a más terminada, y los títulos comparten forma a
//  propósito: todos empiezan en "nos", porque a ninguno de estos
//  futuros se llega de a uno.
//
//  Cada futuro se cuenta con dos cartas escritas desde adentro, una de
//  cada uno. Son las que acompañarían esa foto de la carta de los dos
//  meses: "nuestras versiones desde el futuro".
//
//  ⚠ Las cartas de ella las escribí imitando su manera de escribir, a
//    partir de lo que mandó por el formulario. Léelas con cuidado y
//    corrige lo que no suene a ella: es su voz, no la mía.
// ══════════════════════════════════════════════════════════════════════
const FUTUROS = [
  {
    emoji:  `🌱`,
    titulo: `Nos faltará vida`,
    desde:  `2036`,
    mia:    `Un 13 de agosto de 2036, diez años justos desde que te pedí pololeo en la tranquilidad de la pieza. Te escribo desde la mesa del comedor mientras duermes. Anoche me contaste algo tuyo que yo no sabía, y me quedé un rato pensando en lo raro y lo bueno que es eso: llevamos una vida juntos y todavía me faltan pedazos tuyos por conocer. En retrospectiva, creo que lo que nos salvó no fue ninguna decisión grande. Fue la costumbre chica de preguntar en vez de suponer. Seguimos teniendo lo nuestro, tú con tus pacientes y yo con mis libros y mis ideas, y seguimos trayéndolo a la mesa. A este paso nos va a faltar vida para todo lo que nos queda por contarnos.`,
    suya:   `Jueves 13 de agosto de 2036. Hoy desperté antes que tú, cosa rarísima, y me quedé un rato mirándote dormir como hacía al principio. Ayer en la once te conté algo que nunca te había contado y pusiste esa cara tuya de querer entender antes que opinar, me encanta eso de ti. Han pasado diez años y seguimos conversando como si todavía nos faltara tiempo. Yo pensé que esto se gastaba, que en algún momento uno se sabe al otro de memoria y listo. No nos pasó, y creo que es porque nunca dejaste de preguntarme. Gracias por eso, de verdad. Te amo infinito 💚.`,
    acerca: `Preguntamos en vez de suponer. La noche de mi cumpleaños te dije que en pareja uno no puede asumir que el otro piensa como uno, y tú lo guardaste como enseñanza. Eso, repetido mil veces, es este futuro.`,
    protege:`Se aleja el día que creemos saber de antemano lo que el otro va a contestar, y dejamos de preguntar por eso mismo.`
  },
  {
    emoji:  `🏠`,
    titulo: `Nos acostumbramos`,
    desde:  `2034`,
    mia:    `Un domingo de mayo de 2034. Te escribo esto y no sé bien para qué, porque no pasa nada, y ese es exactamente el punto. Tenemos una casa que funciona, una rutina que funciona, y hace como dos años que no tenemos una conversación que no sea logística. No peleamos. No nos falta nada. Pero hoy estaba ordenando y encontré la cartita verde del día del lector, y me senté en el suelo un rato largo. En retrospectiva creo que nunca decidimos esto: se fue acomodando solo, un miércoles tras otro en que era más fácil no vernos. Te quiero, de verdad. Solo que hace mucho que no te lo digo de una manera que signifique algo.`,
    suya:   `Jueves 4 de mayo de 2034. Hoy hiciste la once y conversamos de las cuentas, del auto y de si vamos o no donde tu mamá el domingo. Después cada uno con su teléfono. Nada de eso está mal, pero me quedé con una sensación rara que recién ahora sé nombrar: te extraño y estás acá, a dos metros. Me acordé de cuando me llevaste por primera vez al Pasaje un miércoles cualquiera, sin motivo, solo porque sí. Hace años que no hacemos nada sin motivo, y no sé en qué momento dejamos de hacerlo. Te amo igual, pero necesitaba decírtelo 💚.`,
    acerca: `Dejamos que la semana decida por nosotros y nos vemos solo cuando sobra tiempo. Tú ya lo escribiste una vez: siempre ha costado un poco vernos los días de semana.`,
    protege:`Nos protege seguir inventando. Un día del lector que nadie celebra, un café entre libros un miércoles cualquiera, una presentación hecha a mano para que te veas mejor. Nada de eso era necesario, y por eso valía.`
  },
  {
    emoji:  `🚪`,
    titulo: `Nos distanciamos`,
    desde:  `2032`,
    mia:    `Un martes de septiembre de 2032. Hoy me quedé en la oficina hasta las nueve sin tener nada que hacer. Es la tercera vez esta semana. Te lo escribo acá porque no sé cómo decírtelo en voz alta sin que termine en otra discusión. La casa se volvió un lugar donde los dos andamos midiendo: si dejé la taza, si no saqué la basura, si te contesté con ese tono. Cosas chicas que antes no eran nada y que ahora son la conversación entera. En retrospectiva, ninguno de los dos se despertó un día odiando esto. Se fue llenando de pendientes sin resolver, uno encima del otro, hasta que llegar empezó a dar lata. Sé que hace mucho que dejamos de arreglarlo.`,
    suya:   `Jueves 16 de septiembre de 2032. Hoy llegué y estaba todo igual que en la mañana: los platos, tu ropa en la silla, la mesa llena de cosas. Me dio una rabia tonta, porque sé perfectamente que no es por los platos. Me quedé diez minutos sentada en el auto antes de subir, solo para no entrar todavía. Después discutimos otra vez por algo que ya ni me acuerdo, y terminamos cada uno en una pieza distinta, como ya es costumbre. Lo que más me asusta no es que peleemos. Es que después de pelear ninguno de los dos va a buscar al otro. Antes tú venías. Te sigo queriendo, es solo que hace mucho que no me gusta cómo vivimos.`,
    acerca: `Dejamos pasar las discusiones sin cerrarlas. Cada una se suma a la anterior y la casa se va llenando de cosas sin decir, hasta que termina molestando hasta el desorden.`,
    protege:`Nos protege ir a buscar al otro. Un 15 de julio me fui en mitad de la noche y volví; en octubre fuiste tú la que se disculpó en persona. Las dos veces alguien fue. Este futuro es el que llega el día en que ya no va nadie.`
  },
  {
    emoji:  `🕊️`,
    titulo: `Nos despedimos`,
    desde:  `2028`,
    mia:    `Un 13 de agosto de 2028. Hoy habríamos cumplido dos años. Te escribo sin pena, que es lo que más me sorprende de todo esto. Nos separamos a principios de año y no fue por una traición ni por un desastre: fue que la vida nos llevó a lugares distintos y los dos lo supimos un rato antes de decirlo. Lo hicimos bien, creo. Nos dijimos la verdad cuando todavía servía de algo, y eso nos ahorró meses de estar fingiendo. Supe que te está yendo bien y me alegré de verdad, sin que me apretara nada por dentro. En poco más de dos años me hiciste mejor ingeniero y mejor tipo. Eso no se deshace porque esto se haya terminado.`,
    suya:   `Domingo 13 de agosto de 2028. Hoy habría sido nuestro segundo aniversario y me acordé toda la mañana, no con rabia sino más bien con cariño. Hace unas semanas alguien me preguntó por ti y me di cuenta de que puedo hablar de ti sin que se me cambie la cara. Creo que es lo mejor que nos pudo pasar, dentro de todo. Nos quisimos bien, de verdad bien, y después nos dejamos ir sin hacernos daño, que es muchísimo más difícil de lo que parece. Te debo haber vuelto a leer, haberme sentido capaz, y dos años en que me sentí más acompañada que nunca en mi vida. No me arrepiento de nada. Ojalá estés muy bien 💚.`,
    acerca: `Dejamos de elegirnos y seguimos igual por costumbre, hasta que la costumbre es lo único que queda.`,
    protege:`Nos protege decirnos la verdad temprano, aunque sea la incómoda. Es el futuro que menos quiero y el que no podía dejar afuera: si ninguno de estos cuatro contemplara que esto puede terminar, no serían futuros posibles, sería una lista de deseos.`
  },
];
