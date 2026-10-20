// ══════════════════════════════════════════════════════════════════════
//  LOS MOMENTOS QUE ESCRIBIÓ ALYN
//
//  Llegan por el formulario de sugerencias de /momentos, y quedan en
//  Netlify Forms. Como el sitio no puede leer ese panel por su cuenta,
//  se copian acá a mano: entra a Forms → sugerencias → Download as CSV
//  y pega el texto tal cual lo escribió.
//
//  Mismo formato que los tuyos: la fecha va dentro del texto
//  ("Sábado 12 de septiembre, ..."), y de ahí la toma la línea.
//
//  Si lo que escribió no nombra ningún día, ponle "fecha" a mano con el
//  día en que lo mandó, que Netlify muestra al lado de cada envío.
//
//  Van en orden para poder leerlos acá; la línea igual los ordena sola.
// ══════════════════════════════════════════════════════════════════════
const DE_ALYN = [
  {
    emoji:   `☕`,
    titulo:  `La primera vez en El Pasaje`,
    resumen: `Un café después del trabajo, y una frase tuya que volvió nuestro ese lugar.`,
    texto:   `Miércoles 10 de junio, salí del trabajo y te escribí para juntarnos un ratito a tomar un café y conversar, como ya lo habíamos hecho un par de veces antes dado que siempre ha costado un poco vernos los días de semana. Nos juntamos en libertad y me llevaste por primera vez a "El pasaje". Me encantó el lugar, como siempre la conversa fue muy amena y luego nos despedimos para ir a dormir cada uno a su depa, pero con la felicidad de haber compartido un buen ratito. Conversamos por whatsapp y me dijiste "hay que romantizar tomarnos un café/té juntos, entre libros". Desde entonces siento especial ir a ese lugar juntos.`
  },
  {
    emoji:   `🌃`,
    titulo:  `La noche que llegaste al Garden`,
    resumen: `El día de la audiencia. Llegaste igual, agotado, y eso marcó un antes y un después.`,
    texto:   `Un día jueves 2 de julio, tuve que asistir a la audiencia del caso del Alexis en donde se tomó la decisión de su ingreso a la residencia. Quedé muy mal ese día y te lo comenté, me transmitiste tu apoyo por chat pero llegabas muy tarde de Santiago ese día. Yo me junté con Miguel en Garden a tomar algo y contarle toda la situación, tú me escribiste cuando venías de vuelta y finalmente decidiste llegar al bar para conversar en persona porque ya me estaba poniendo muy pesimista. Llegaste casi a las 10.00 a pesar de lo agotador que había sido tu día y compartiste conmigo un buen rato, donde me dejaste más que claro que no me ibas a dejar sola en este proceso y que solo querías ser un apoyo, fue muy lindo y siento que marcó un antes y después en nuestro vínculo. 💚`
  },
  {
    emoji:   `🏠`,
    titulo:  `Al fin conociste a Miguel y Natalia`,
    resumen: `Mis personas importantes, en mi depa, riéndonos harto.`,
    texto:   `Viernes 31 de julio, me junté con mis mejores amigos, Miguel y Natalia en mi depa en la noche, tú habías tenido una reunión de empresas B y luego estabas libre pero te pedí que llegaras un poco después que ellos. Cuando llegaste fue bacan poder presentarte al fin a esas personas tan importantes para mí, y lo pasamos súper bien, nos reímos harto y me encantó como siempre tu compañía 💚`
  },
  {
    emoji:   `🫖`,
    titulo:  `Tu mamá, tus abuelos y el Fidelio`,
    resumen: `Llegué nerviosa a conocer a tu familia, y al otro día te llevé a mi cafetería.`,
    texto:   `Domingo 2 de agosto, después de ir a dejar al Alexis a placeres, me pediste un uber hacia la casa de tu mamá para conocerla a ella y a tus abuelos, estaba media nerviosa por la situación pero fue todo super ameno y me encantó conocer a tu familia y el lugar donde viviste. Luego de la once y de compartir un ratito, nos fuimos a mi depa, llegamos a acostarnos y al día siguiente fuimos a tomar desayuno al Fidelio, la cafetería que queda abajo de mi consulta y que me encanta, fue muy especial para mí ese desayuno porque suelo ir sola a ese lugar, y me encantó ir contigo 💚.`
  },
  {
    emoji:   `📊`,
    titulo:  `La presentación de Bojack`,
    resumen: `Pensé que era broma. Resultó que eres una persona de palabra.`,
    texto:   `Domingo 9 de agosto, yo venía de unos días un poco complejos en mi situación con el Alexis y un poco desanimada con cómo iba el rumbo de mi año 2026, por lo que me dijiste que me harías una presentación para mostrarme que no estaba en lo correcto al creer eso, yo al principio pensé que era broma y no concretarías, pero (obviamente), eres una persona de palabra y ese día, después de que yo dejé al Alexis en placeres, nos juntamos y me presentaste un resumen de mi año, con temática de Bojack, arrojando datos de cosas muy positivas que he logrado. Fue muy lindo gesto. Lamentablemente ese día no podíamos dormir juntos así que nos separamos el viña cuando tú te bajaste de la micro, pero luego antes de dormirte me dejaste un mensaje diciendo que accedías a compartirnos ubicación, cosa que yo había propuesto previamente y habías manifestado no estar de acuerdo. Me encantó que transaras y que además fueras sincero al decir que tenías cierto sesgo con el tema, pero que en realidad entre nosotros no habían motivos para pensar que podía prestarse para algo negativo. Y ahora, después de casi un mes, solo nos ha servido 💚.`
  },
  {
    emoji:   `🌷`,
    titulo:  `Papitas fritas y flores de lego`,
    resumen: `La cotidianidad se nos da bien, y eso me encanta de nosotros.`,
    texto:   `Domingo 16 de agosto: Nos juntamos en el mall, fuimos a mi depa, primero pasamos a comprar algunas cositas. Te hice papitas fritas en cubos y zapallo italiano, conversamos mucho, armamos las flores de lego que me regalaste, lo pasamos increíble, nos reímos mucho, regaloneamos. No pudimos dormir juntos y ambos quedamos con las ganas pero fue muy lindo estar juntos y re afirmar que la cotidianidad se nos da muy bien, al igual que las salidas, y eso me encanta de nosotros 💚`
  },
  {
    // Lo mandó dos veces el mismo día; esta es la segunda, la más larga.
    // El "id" lo usa un hito de la línea para mostrar este mismo recuerdo.
    id:      `dia-del-lector`,
    emoji:   `📕`,
    titulo:  `El día del lector`,
    resumen: `El libro de la suerte, una cartita verde, y un "te amo" dicho despacito al oído.`,
    texto:   `Un lunes 24 de agosto se celebraba el día del lector. La verdad nunca antes había escuchado de tal día conmemorativo, pero me pareció una buena instancia para celebrarnos y hacerte un regalito, porque se relaciona con cómo inició toda nuestra historia y estoy muy agradecida que me hayas impulsado a retomar mi gusto por la lectura. Varios días antes había estado pensando en qué regalarte y tenía claro que quería algo muy simbólico y con sentido, así que finalmente me decidí por el libro de la "suerte" y aproveché de escribirte una cartita, me esforcé en que todo fuera verde y que se viera muy lindo, ya que quería que notaras que le puse mucho amorcito. El día fue hermoso, ambos nos teníamos regalitos, y al igual que cada momento juntos, regaloneamos mucho y lo pasamos increíble. Recuerdo que en ese momento ya no daba más de amor, hace un par de días venía sintiendo que no era suficiente decirte "te quiero", así que cuando nos acostamos, en un momento estábamos en silencio y me sentía nerviosa porque creía que era un buen momento para decírtelo pero creí que ya te estabas quedando dormido, que se me había ido la oportunidad, y justo me dijiste "buenas noches" y para mi fue la señal perfecta, así que me acerqué a tu oído y te dije despacito "te amo". Fue hermoso que me lo dijeras inmediatamente de vuelta y que después de eso nos calentamos de puro enamoramiento y estuvo increíble todo. Definitivamente serán mucho más días del lector que celebraremos de aquí en adelante, te amo.`
  },
  {
    emoji:   `👨‍👩‍👧`,
    titulo:  `Te presenté a los míos`,
    resumen: `Mi momshower, tu compañía todo el rato, y nuestro primer mes.`,
    texto:   `Sábado 12 de septiembre, te presenté a casi toda mi familia y mi círculo de amistades. Primero por parte paterna y luego materna, me encantó poder hacerlo y sentir que salió todo bien, que lograste conversar y hacer notar lo bacan que eres. En mi celebración “mom shower” me sentí muy tranquila de ser yo misma y verte acompañándome todo el rato y compartiendo con mi gente, lo valoro muchísimo. Además fue muy lindo habernos dicho feliz primer cumple mes justito cuando pasó a ser 13; nuestro día de conmemorar cuando me proclamaste tu polola. Otro recuerdo lindo contigo, te amo mucho.`
  },
];
