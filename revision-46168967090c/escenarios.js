// ══════════════════════════════════════════════════════════════════════
//  FUTUROS POSIBLES
//
//  Cuatro maneras en que esto puede terminar siendo. Ninguna es una
//  predicción: la gracia del ejercicio es que verlas todas es lo que
//  deja elegir.
//
//  Los títulos empiezan todos en "nos" a propósito: a ninguno de estos
//  futuros se llega de a uno.
//
//  Los años van de más lejos a más cerca, y eso también dice algo:
//  mientras mejor el futuro, más lejos queda.
//
//  Cada futuro se cuenta con dos cartas escritas desde adentro, una de
//  cada uno. Son las que acompañarían esa foto de la carta de los dos
//  meses: "nuestras versiones desde el futuro".
//
//  Los días de la semana de cada carta están verificados contra el
//  calendario real. Si cambias una fecha, revisa que el día calce.
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
    mia:    `Amor, te escribo desde la mesa un 13 de agosto de 2036, diez años justos desde que te pedí pololeo en la tranquilidad de la pieza. Duermen todos todavía. Nos hicimos expertos en café, de esos insoportables que opinan del origen del grano. Tus platos todavía me sorprenden después de diez años, y eso me parece casi injusto. Llevamos tantos libros leídos que perdí la cuenta y tantos países que ya no sé cuál contarte primero. Y ahora además están ellos, que es la parte que no me esperaba: todos los días les descubro algo nuevo. Me da una ternura rara reconocernos ahí. Nuestro hijo es capaz de pasar el día entero en la misma esquina, jugando y leyendo, sin pedirle nada a nadie. Nuestra hija necesita bailar y correr, no para un segundo, y basta mirarla cinco minutos para saber de quién sacó esa inquietud. Anoche me contaste algo tuyo que yo todavía no sabía, y eso después de diez años. En retrospectiva creo que lo que nos salvó no fue ninguna decisión grande, fue la costumbre chica de preguntar en vez de suponer. A este paso nos va a faltar vida.`,
    suya:   `Miércoles 13 de agosto de 2036. Hoy desperté antes que todos, cosa rarísima, y me quedé un rato mirándote dormir como hacía al principio. Pensé en todo lo que hemos hecho: los países, los libros que nos hemos recomendado, lo ridículos que nos pusimos con el café. Y pensé en ellos, que son lo más lindo de todo. Me encanta descubrirlos cada día y encontrarnos ahí. Nuestro hijo es igual a ti: se queda horas en el mismo rincón leyendo o jugando solo, tranquilo, sin necesitar nada de nadie. Nuestra hija en cambio no para, necesita bailar, correr, estar moviéndose todo el día. Esa inquietud me la sacó a mí y ya le pedí perdón un par de veces. Ayer en la once te conté algo que nunca te había contado y pusiste esa cara tuya de querer entender antes que opinar, me encanta eso de ti. Yo pensé que esto se gastaba, que en algún momento uno se sabe al otro de memoria y listo. No nos pasó, ni contigo ni con ellos. Siento que nos amamos tanto que no nos va a alcanzar la vida. Te amo infinito 💚.`,
    acerca: `Preguntamos en vez de suponer. La noche de mi cumpleaños te dije que en pareja uno no puede asumir que el otro piensa como uno, y tú lo guardaste como enseñanza. Eso, repetido mil veces, es este futuro.`,
    protege:`Se aleja el día que creemos saber de antemano lo que el otro va a contestar, y dejamos de preguntar por eso mismo.`
  },
  {
    emoji:  `🏠`,
    titulo: `Nos acostumbramos`,
    desde:  `2034`,
    mia:    `Amor, te escribo un domingo 21 de mayo de 2034, mientras los niños ven monos en la otra pieza, que es el único rato tranquilo del día. Los dos entendemos lo que pasó: la vida adulta se nos vino encima de golpe, la rutina, la crianza, y nos fuimos acomodando a eso. No es que estemos mal. Nos seguimos acompañando, que no es poco. Pero extraño hacer el amor sin estar pendientes de si alguien despierta, y extraño los panoramas que eran solo para los dos, sin tener que coordinar nada con nadie. No te lo escribo como reclamo. Te lo escribo porque quiero que sepas que me acuerdo, y porque espero que cuando estén más grandes podamos retomarlo.`,
    suya:   `Martes 9 de mayo de 2034. Hoy hiciste la once y conversamos de las cuentas, del colegio y de quién lleva a quién el sábado. Después cada uno cayó muerto en el sillón. Nada de eso está mal, los dos hemos estado con mil cosas y la crianza no da tregua. Pero me quedé con una sensación rara que recién ahora sé nombrar: te extraño y estás acá, a dos metros. Me acordé de cuando me llevaste por primera vez al Pasaje un miércoles cualquiera, sin motivo, solo porque sí. Hace años que no hacemos nada sin motivo. Sé que vamos a volver a tener tiempo, solo quería decirte que lo echo de menos. Te amo igual, siempre 💚.`,
    acerca: `Dejamos que la semana decida por nosotros y nos vemos solo cuando sobra tiempo. Tú ya lo escribiste una vez: siempre ha costado un poco vernos los días de semana.`,
    protege:`Nos protege seguir inventando. Un día del lector que nadie celebra, un café entre libros un miércoles cualquiera, una presentación hecha a mano para que te veas mejor. Nada de eso era necesario, y por eso valía.`
  },
  {
    emoji:  `🚪`,
    titulo: `Nos distanciamos`,
    desde:  `2032`,
    mia:    `Amor, te escribo un martes 14 de septiembre de 2032, desde la oficina. Me quedé hasta las nueve sin tener nada que hacer y es la tercera vez esta semana. Creo que los dos estamos intentando estar lo menos posible en la casa. Ya no quieres ver mis series, ya no lees conmigo, y lo que más me duele es llegar sabiendo que va a haber alguna discusión, o que te vas a molestar conmigo porque dejé algo desordenado. Cosas chicas que antes no eran nada y que ahora son la conversación entera. No quiero terminar esto, de verdad que no, por todo lo que vivimos. Pero me da una tristeza enorme haber llegado acá sin que ninguno de los dos lo haya decidido.`,
    suya:   `Jueves 16 de septiembre de 2032. Hoy llegué y estaba todo igual que en la mañana: los platos, tu ropa en la silla, la mesa llena de cosas. Me dio una rabia tonta, porque sé perfectamente que no es por los platos. Me quedé diez minutos sentada en el auto antes de subir, solo para no entrar todavía. Después discutimos otra vez por algo que ya ni me acuerdo y terminamos cada uno en una pieza distinta, como ya es costumbre. Lo que más me asusta no es que peleemos. Es que después de pelear ninguno de los dos va a buscar al otro. Antes tú venías. Te sigo queriendo, es solo que hace mucho que no me gusta cómo vivimos.`,
    acerca: `Dejamos pasar las discusiones sin cerrarlas. Cada una se suma a la anterior y la casa se va llenando de cosas sin decir, hasta que termina molestando hasta el desorden.`,
    protege:`Nos protege ir a buscar al otro. Un 15 de julio me fui en mitad de la noche y volví; en octubre fuiste tú la que se disculpó en persona. Las dos veces alguien fue. Este futuro es el que llega el día en que ya no va nadie.`
  },
  {
    emoji:  `🕊️`,
    titulo: `Nos despedimos`,
    desde:  `2029`,
    mia:    `Alyn, te escribo un 13 de agosto de 2029. Hoy habríamos cumplido tres años. Te escribo sin pena, que es lo que más me sorprende de todo esto. El amor se fue desvaneciendo de a poco, sin que pasara nada grave, y lo que mejor hicimos fue irnos a tiempo: nos dijimos la verdad cuando todavía servía de algo, en vez de quedarnos años fingiendo. Supe que estás con alguien y me alegré de verdad, sin que me apretara nada por dentro. Yo también. En estos tres años me hiciste mejor ingeniero y mejor tipo, y eso no se deshace porque lo nuestro se haya terminado. Ojalá te vaya precioso.`,
    suya:   `Lunes 13 de agosto de 2029. Hoy habría sido nuestro tercer aniversario y me acordé toda la mañana, no con rabia sino más bien con cariño. Nos quisimos bien, de verdad bien, y después nos dejamos ir sin hacernos daño, que es muchísimo más difícil de lo que parece. Supe que estás con alguien y me puse contenta por ti; yo también estoy con alguien y estoy tranquila. Te debo haber vuelto a leer, haberme sentido capaz, y tres años en que me sentí muy acompañada. Nos hicimos mejores personas el uno al otro, y eso me lo llevo. No me arrepiento de nada. Que te vaya muy bien 💚.`,
    acerca: `Dejamos de elegirnos y seguimos igual por costumbre, hasta que la costumbre es lo único que queda.`,
    protege:`Nos protege decirnos la verdad temprano, aunque sea la incómoda. Es el futuro que menos quiero y el que no podía dejar afuera: si ninguno de estos cuatro contemplara que esto puede terminar, no serían futuros posibles, sería una lista de deseos.`
  },
];
