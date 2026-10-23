// ══════════════════════════════════════════════════════════════════════
//  TUS 100 MOMENTOS
//  Cada uno tiene título, un resumen breve y el recuerdo completo.
//  Lo usan /momentos y /linea. El admin edita este archivo.
//  Deja null los que todavía no quieras escribir.
// ══════════════════════════════════════════════════════════════════════
const MOMENTOS = [
  {
    emoji:   `📚`,
    titulo:  `El Pasaje`,
    resumen: `Libros, risas y un reencuentro en Valparaíso.`,
    texto:   `Un 5 de agosto, después de una travesía para reunirnos en Valparaíso, fuimos en compensación a disfrutar en El Pasaje. Entre libros y risas sentí reconectar contigo, porque me encanta verte sonriente, sobre todo después de haberte dedicado los artículos e incisos más pasionales de código penal. Además, el cierre con ese libro de frases icónicas estuvo buenísimo, qué mejor que comer rico y leer contigo.`
  },
  {
    emoji:   `🥂`,
    titulo:  `Miguel y Natalia`,
    resumen: `El día que me presentaste a tus amigos de siempre.`,
    texto:   `Un 31 de julio, me invitabas a conocer a tus mejores amigos de la infancia. Debo decir que lo valoré un montón, y me agradó todo. Sentir tus ganas de mostrarme, tus besos en la entrada, mi mano en tu pierna mientras conversábamos, lo rico de un Aperol y la grata compañía con Miguel y Natalia. Recuerdo haberme ido con ganas tremendas de haber terminado ese día durmiendo contigo.`
  },
  {
    emoji:   `🎉`,
    titulo:  `La Fiesta de Lectura`,
    resumen: `Tu calma antes del evento, y el día que se me ocurrió hacerte esta aplicación.`,
    texto:   `Un 25 de julio, me sentía ansioso por la Fiesta de Lectura y no olvidaré nunca la calma y amor que me transmitiste. Recuerdo decías sentirte fea y cuando te vi, solo pensé en lo preciosa que te veías. Me costó tanto despedirme de tus besos en la entrada, sin embargo, me llenaba el corazón que hubieses estado ahí aunque sea un momento y que después me propusieras llegar a dormir a mi departamento sin importar la hora que fuese. Además, fue el día que apliqué la idea de construirte una aplicación solo para ti, para que se sintiese especial cada vez que nos viéramos y así poderte sacar una sonrisa.`
  },
  {
    emoji:   `⚽`,
    titulo:  `La final del Mundial`,
    resumen: `Sushi, siesta y las michipillas. Ahí pensé: me encanta esta cotidianidad.`,
    texto:   `Un 19 de julio, veíamos la final del Mundial tras unos días lluviosos en conjunto. Comimos unos sushi, nos tomamos una siesta y después dijimos ¿y si salimos a comprar antes que vuelva a llover? Así fue como salieron las michipillas y mientras trabajaba un poco en paralelo, pensaba "me encanta esta cotidianidad junto a ella".`
  },
  {
    emoji:   `💒`,
    titulo:  `El matrimonio de la Cata`,
    resumen: `Terminamos en el grupo VIP, con acceso al cumpleaños de doña Marta.`,
    texto:   `Un 18 de julio, como panorama random me acompañabas al matrimonio de la Cata y terminábamos siendo parte del grupo VIP, con acceso directo previo al cumpleaños de doña Marta jajaja Lo pasé tan bien a tu lado ese día, sentí mostrarte lo mucho que disfruto cuando la vida se pone en modo aleatorio.`
  },
  {
    emoji:   `🍌`,
    titulo:  `El banana bread`,
    resumen: `Unos plátanos maduros en la cocina, y una tarde que terminó importando mucho más.`,
    texto:   `Un 8 de julio, tras ver un par de plátanos maduros en la cocina me dices "¿y si hago un banana bread?". La respuesta claro que fue un sí y de ahí tras compartir un rato en la cocina, comer y acostarnos. Te dije lo que pensaba ya desde hace días: te quiero. Siento literal me lo venía aguantando con tal de hallar un momento idóneo, porque después de ya haberte deseado, respetado, admirado, era inevitable empezar a quererte, tal cual eres.`
  },
  {
    emoji:   `🎸`,
    titulo:  `Pink Floyd y el MUT`,
    resumen: `Corrimos contra el reloj, llegamos, y celebramos con pizzas.`,
    texto:   `Un 27 de junio, mientras comíamos tranquilamente en el living, nos dábamos cuenta que llegaríamos tarde al show en Santiago de Pink Floyd. Ante ello, corrimos lo más que pudimos, y sí, lo logramos contra todo pronóstico. Así que modo celebración nos fuimos después al MUT, a cumplir tu sueño y comernos unas ricas pizzas. Fue un día soñado.`
  },
  {
    emoji:   `🍷`,
    titulo:  `La noche del vino`,
    resumen: `Conversamos horas, nos miramos, y todo cambió.`,
    texto:   `Un 12 de febrero, te comentaba que había llegado al departamento y me decías que después te costaba mucho volver. Ante eso, te respondí "¿Y no te tinca venir a tomarte algo?" a lo cual me dijiste que en ese caso valía la pena devolverse más tarde en Uber. Cambié el sillón de posición, abrí el vino, llegaste y no paramos de conversar en horas. Hasta que llegó el momento en que nos miramos y nos besamos intensamente. Recuerdo sacarte la polera, sentir lo suave de tu piel y tener unas ganas inmensas de ser uno contigo.`
  },
  {
    emoji:   `🚌`,
    titulo:  `De vuelta de Santiago`,
    resumen: `En un día totalmente normal, aparecías a cumplir mis deseos.`,
    texto:   `Un 9 de abril, venía de vuelta de Santiago como si fuese un día normal. Entre coqueteo y coqueteo respecto a que me encantaría tener tu boquita recorriendo mi cuerpo, me explicitaste estar dispuesta a venir a solo cumplirme ese deseo y efectivamente, te pedí el uber al llegar al terminal y viniste de inmediato. Llegaste, te puse de rodillas y te tragaste todo con tantas ganas. De solo recordarlo, me prendo.`
  },
  {
    emoji:   `😂`,
    titulo:  `Chistín, el comediante serial`,
    resumen: `Me mandabas cada capítulo al segundo. Ahí supe que compartíamos el humor.`,
    texto:   `Varios días en Marzo, estuvimos muy pendientes de la trama de "Chistín, el comediante serial". Recuerdo que literal me enviabas cada capítulo casi al segundo y nos reíamos un montón. Ahí comenzaba a pensar que me gustaba compartir ese tipo de humor contigo.`
  },
  {
    emoji:   `🎂`,
    titulo:  `La torta completa`,
    resumen: `Estabas mal por el Alexis, así que resolví sin preguntar de más.`,
    texto:   `Un jueves 25 de junio, te sentías sumamente mal por el tema del Alexis, dado que se iría al hogar en cualquier momento. Ante ello, te dije que pidieras lo que quisieras del jumbo y que te regalonearía en mi departamento. A falta de un trozo de torta, te compré una torta completa. No quería invadirte en preguntas cuando sabía que estabas mal así que solo resolví y me preocupé de que te sintieras acogida en mi hogar.`
  },
  {
    emoji:   `💆`,
    titulo:  `La sorpresa del masaje`,
    resumen: `Dijiste que no te gustaban las sorpresas. Igual te la hice.`,
    texto:   `Un viernes 19 de junio, te tuve una sorpresa a pesar de que dijiste que no te gustaban. Se supone que habíamos fallado en encontrarnos, pero después de que tomé la micro, nos dimos cuenta que íbamos al lado del otro. Fue chistoso. Después de ello, llegamos a lado sorpresa: un masaje. Era mi forma de entregarte un momento de calma entre tanto movimiento, porque también nos merecemos descansar. De ahí me regalaste una barrita nueva de proteína que no había probado, me gustó un montón.`
  },
  {
    emoji:   `📝`,
    titulo:  `ESI en 100 palabras`,
    resumen: `Te insistí en que postularas. Terminaste ganando el concurso.`,
    texto:   `Un domingo 31 de mayo, te instaba a postular a ESI en 100 palabras porque si bien no te había leído en textos largos, me daba la impresión que por tus lecturas y tus conversaciones, podías tener un talento oculto por ahí para entregar. Quién diría que después serías la ganadora absoluta del concurso`
  },
  {
    emoji:   `🧭`,
    titulo:  `El día que marcó el rumbo`,
    resumen: `Te vi llegar y supe que ya no podía evitar sentir cosas por ti.`,
    texto:   `Un 26 de abril fue de esos días que marcó el rumbo para mí respecto a no poder evitar empezar a sentir cosas por ti. Ese día pretendía moderar y después llegar de inmediato al departamento a avanzar pendientes del trabajo, sin embargo, cuando llegaste te veías pero es que tan hermosa que encontraba imposible dejarte ir así sin antes tocarte, besarte, desvestirte y disfrutarte. Antes de eso, fue que te invité a almorzar, ahí además me comentaste que habías quedado sin el Mac, te admiré mucho por enfrentarte a los conflictos con calma, por más que obviamente era un gran problema la situación. Lo pasamos muy bien, llegamos al departamento, nos disfrutamos y después me fue inevitable prestarte mi computador porque sentía que te merecías realmente todo`
  },
  {
    emoji:   `🎬`,
    titulo:  `Sentimental Value`,
    resumen: `La película no nos gustó, pero esa noche te dije que quería estar contigo.`,
    texto:   `Un 24 de mayo te invitaba a mi departamento a ver la película Sentimental Value en el living con una tablita. Si bien la película no nos gustó tanto, nos dio paso a conversar a profundizar de nosotros mismos y de cómo éramos cuando nos gustaba alguien, nos fuimos a la pieza y ahí te fue cuando te dije: me gustas, quiero estar contigo. Afortunado fui de que me dijiste que era mutuo.`
  },
  {
    emoji:   `🔖`,
    titulo:  `Nuestro primer día del lector`,
    resumen: `La suerte, los libros y las palabras. Y tu mirada diciéndome te amo.`,
    texto:   `Un 24 de agosto, celebramos nuestro primer día del lector y me encanta que romanticemos nuestra historia, nuestras fechas y el poder de nuestros símbolos. Pienso que tantas personas le atribuyen tanto significado a símbolos externos, los cuales en la práctica, ¿qué tanto afectan nuestras vidas? No puedo entender la pasión por un artista, o por un equipo de fútbol, sin la existencia de una pasión por quienes en verdad tenemos a nuestro lado o a las ideas que nosotros mismos hemos formado. En ese sentido, valoro demasiado este día porque cada uno puso sus símbolos en la mesa con demasiado amor. La suerte, los libros y las palabras, fueron la combinación perfecta para sellar nuestra noche en tu mirada diciéndome: te amo. No me lo esperaba, pero a la vez tiene sentido, pues he visto como te has transformado. Le agregaste un corazón a mi nombre, comenzaste a sentirte una romántica y hasta una carta me escribiste. Alyn Gabellini... realmente, te amo`
  },
  {
    emoji:   `🌆`,
    titulo:  `Un rato en Placeres`,
    resumen: `Te llevé la polera que te había comprado. Después vino la noche.`,
    texto:   `Un viernes 21 de agosto, inesperadamente nos vimos un ratito en Placeres, pues ya pensaba que te iba a extrañar por todos los días que estaríamos sin vernos. Además, me hacía mucha gracias entregarte la polera que te había comprado, porque estaba seguro que te sacaría una sonrisa. Te veías demasiado linda y valió cada segundo habernos visto. Lo mejor de todo, es que después te vería de nuevo. Llegué un poco tarde pero no fue impedimento para nada. Conversamos, nos reímos, nos calentamos y hasta te terminé poniendo contra el ventanal del balcón. Fue una de esas noches en que pensaba: qué afortunado soy.

PD: Quiero destacar que al día siguiente te dediqué "Waiting for a girl like you - Foreigner"`
  },
  {
    emoji:   `🛡️`,
    titulo:  `El Caballero de la Armadura Oxidada`,
    resumen: `Buscamos dónde empezó todo y terminamos viendo fotos antiguas.`,
    texto:   `Un 18 de agosto nos poníamos a ver los inicios de nuestro historial y descubríamos que todo partió al parecer por el libro del Caballero de la Armadura Oxidada. Además, también hace un año me las daba de jote y te decía que vinieras al after en mi casa, un patuo jajaja. Claramente, no era el momento. Después llegaste a quedarte conmigo y tras acostarnos vimos fotos antiguas. Debo decir que me encantó verte en cada foto y video, te veías tan linda en cada lugar, con cada outfit y en cada pose. Después de eso, vino la parte chistosa: tu foto del wanderers jajaja y las fotos pixeladas de mi padre. Recuerdazo.`
  },
  {
    emoji:   `✨`,
    titulo:  `Nuestra primera cita`,
    resumen: `El mall, Valparaíso, y una frase tuya que me quedó dando vueltas.`,
    texto:   `Un sábado 20 de diciembre, tuvimos nuestra primera cita. Recuerdo juntarnos por el mall y encontrarte sumamente bonita, además, me pareciste re agradable mientras conversábamos en el trayecto hacia Valparaíso. La verdad, pensé que el panorama iba a ser mucho más elaborado, pero resulta que éramos los únicos en el bar jaja sin embargo, no te noté en ningún momento incómoda, sino que al contrario. Conversamos un montón, nos reímos, degustamos y aún recuerdo la frase que me quedó dando vuelta ese día. "A veces uno termina entrando a relaciones que en verdad no quiere". Fue ahí donde pensé chuta, la encontré bonita, me cayó bien, pero no quiero ser parte de esa frase y quizá si coqueteamos más llegaremos a eso... Así que después calabaza, cada uno hacia su casa y llegué a los días a comentarle a mi psicóloga que pensé harto sobre lo que dijiste. No quería estar vez caer de nuevo en una relación solamente por intereses superficiales e iniciales.`
  },
  {
    emoji:   `🎭`,
    titulo:  `The Drama`,
    resumen: `El funko de Eren, y después unos días difíciles que no supe nombrar.`,
    texto:   `Un miércoles 29 de abril, nos juntamos para ir a ver The Drama, y me quedó dando vuelta mucho al frase de "Do you wanna start over?" tanto al inicio como al final de la película. Y es que ambos protagonistas fueron víctimas de su entorno, de los juicios de terceros y de los errores del pasados, pero no de una maldad en las acciones del uno al otro. Sentí que en eso nos justamente nos parecíamos, no juzgamos. En fin, llegamos a mi departamento y te comenté que te tenía un regalo por tu cumpleaños, el funko de Eren. Te pusiste contenta y al acostarnos te subiste arriba mío para sentirnos antes de dormirnos. Después de esa noche, debo admitir que lo pasé mal. Sentía que ya me gustabas mucho, sentía ganas de estar contigo en tu cumpleaños, sentí celos a los días viendo que otro te comentaba las historias y sentí también tu distancia en cada uno de los mensajes que siguieron. Sin embargo, ¿cómo iba a juzgarte? si fui yo quien al inicio te dijo no querer nada serio y quien de una u otra forma empezó a dar señales ambiguas.`
  },
  {
    emoji:   `🎯`,
    titulo:  `Directo al grano`,
    resumen: `Llegaste sin alcanzar a decir nada.`,
    texto:   `Un 23 de marzo me decías que no dabas más con la ovulación y llegabas a mi departamento directo al grano. Te abrí la puerta, nos vinimos a la pieza y sin alcanzar a decir nada te puse contra la pared de inmediato y recuerdo haberte dicho que tenía unas ganas pero es que infinitas de haberme podido ir adentro tuyo en esa instancia. Después de eso, te pedí el uber, te fuiste y tuvimos esta conversación:

- Qué bueno que viniste, justo y necesario como diría el santo padre
- Lo necesitaba, gracias x tirar tan bien
- Gracias por sacarme todo, me tenías tan caliente que ni alcancé a echarte todo en la boca, perdón
- Pa la próxima que no se desperdicie nada xfa`
  },
  {
    emoji:   `🎤`,
    titulo:  `El club y Juan Gabriel`,
    resumen: `Fuimos solo tres. Después, la noche en que lo nombramos distinto.`,
    texto:   `Un domingo 30 de agosto, nos reunimos antes del club para llegar juntos. Ahí, solo fuimos tres personas, nosotros dos y el Seba. A pesar de la falta de quorum, la calidad de la sesión no se quedó atrás, hubieron risas, reflexiones y harta intimidad. Después de ello, recuerdo estar con sensación de mucho cansancio, pero al pasar del tiempo me fuiste recargando. Comimos una rica pizza, fuimos después al cine a presenciar a tu ídolo Juan Gabriel, y aunque dicen los rumores que dormí unos segundos. El resto del tiempo lo aprecié mucho. Finalmente, ya nos fuimos a tu casa y ahí me quedo con que explicitamos cómo pasamos de tener sexo a hacer realmente el amor.`
  },
  {
    emoji:   `🌧️`,
    titulo:  `Nuestro gran conflicto`,
    resumen: `La noche en que casi me fui. También se aprende de lo malo.`,
    texto:   `Un 15 de julio, teníamos una cita en tu departamento tras mi reunión con las Empresas B. Ahora bien, se nos sumó la Vivi por un momento para hacer la hora y nos enseñaste tu oficina, fue lindo haber conocido un espacio más de tu vida. Ahora bien, lo que parecía ser una cita prometedora en la cual compramos cosas ricas para tomar y tú tenías cosas ricas para comer, terminó siendo nuestro gran conflicto. Escribo de esto porque no solo vivimos de lo bueno, sino que también se aprende de lo malo.

Esa noche sentí que querías que cumpliera un molde y que además, querías que las cosas se dieran a tu forma. No bastaba con minimizar mis intereses sino que también con instarme a terminarte, pero antes, tener sexo de despedida, porque así lo querías. No te miento que en algún momento en mi pensamiento pensé acceder, pero después reflexioné, no pienso vivir dinámicas así nuevamente y en medio de la noche, me fui y pensaba que sin volver. 

No pensé aquello te haría daño, sino que te sería indiferente, pues me daba la impresión que mientras yo cultivaba sentimientos por ti, quizá tú solo no sabías salir de todo esto, como me habías dicho que lo habías vivido en otras relaciones.

Afortunadamente, ni yo me fui realmente, ni a ti te fue indiferente la situación. Me quedo con que todo nos permitió tomarle el peso a que si queremos compartir nuestras vidas, es indispensable el cuidado, de las palabras y las acciones.`
  },
  {
    emoji:   `🍪`,
    titulo:  `Las galletas dubai`,
    resumen: `Tu carta en la víspera de mi cumpleaños, y Demian The Rat.`,
    texto:   `Un 2 de septiembre, me recibías con una carta y unas galletas dubai para celebrar la víspera de mi cumpleaños, fue un gesto demasiado lindo. Después de ello, nos fuimos a ver a Demian The Rat y a pesar de estar ambos sumamente cansados, nos reímos un montón. Menos mal no quedamos adelante pues hubiésemos sido víctimas de la rutina. Finalmente, llegamos a casi puro dormir, pues se supone a eso nos dirigíamos cuando dijiste querer besarnos, lo que se transformó en hacer el amor para terminar durmiendo profundamente.`
  },
  {
    emoji:   `🌄`,
    titulo:  `El mirador en Placeres`,
    resumen: `Te llevé la presentación. Andaba con el anillo, pero no era el día.`,
    texto:   `Un 9 de agosto, te había prometido una presentación con las razones de porqué tu año no era malo, pues venías repitiéndolo de alguna u otra forma reiteradamente y aquello me apenaba, porque de una u otra forma, yo también estaba siendo parte de ese año. Quería mostrar un poco de lo que hago en mi día a día laboralmente, pero de manera lúdica y entretenida, demostrarte con hechos de que en verdad habían hartas cosas que valorar y agradecer. Fue así como te llevé a un mirador en Placeres para que pudiésemos compartir un ratito juntos. Ese día andaba con el anillo pues pensaba podría ser un buen día para pedirte pololeo, pero surgió una pequeña discusión en la cual me dijiste que quizá no teníamos futuro por tener pensamientos distintos. Quedamos de bajarle un cambio a la conversación, entendí que no era el momento y esperé unos días a que las cosas anduvieran mejor para pedirte pololeo.`
  },
  {
    emoji:   `🥐`,
    titulo:  `Desayuno en Concón`,
    resumen: `Un día soleado, con regalos de los dos.`,
    texto:   `Un 6 de septiembre, nos reuníamos a tomar desayuno en Concón y nos teníamos ambos regalos, aquello fue muy lindo. Fue un día soleado y bien regaloneado a pesar de no poder tocar tanto nuestros labios. Si bien supe después tuviste un día difícil, espero que sirva mi granito de arena de aportarte con una instancia de relajación.`
  },
  {
    emoji:   `🌙`,
    titulo:  `La primera noche con el Alexis`,
    resumen: `Intenté ganármelo con Pokémon y la Switch. Salió bien.`,
    texto:   `Un 8 de septiembre me iba a quedar por primera vez oficialmente con el alexis en el departamento. Intenté ganármelo con Pókemon y con la Switch porque me era relevante que todo se de a través de la mejor forma. Al parecer, salió bien y pudimos dormir juntos, me entristecía esperar hasta el sábado para recién verte. Si bien ambos estábamos cansados, alcanzamos a regalonear y después lo hicimos como nunca en la ducha, debo admitir que se vio espectacular todo, tanto darte contra la pared como después irme en el borde de tu boca. Después, omitimos la lectura y nos fuimos directo a dormir.`
  },
  {
    emoji:   `🍺`,
    titulo:  `En el bar de la esquina`,
    resumen: `Me gustó que supieras que eres linda, y que lo dijeras en voz alta.`,
    texto:   `No se que día fue este, pero tengo el recuerdo de haberte invitado a tomar algo al bar de la esquina y que mientras conversábamos a partir de una historia que te comenté, me dijiste "es que bueno, uno no siempre es linda desde pequeña" (o algo así), haciendo referencia a que antes no te considerabas atractiva pero que después de que terminaste y te operaste, empezaste a ver cómo llamabas la atención cuando salías. Me recuerdo de eso porque me gustó que supieras que eres linda, que lo afirmaras.`
  },
  {
    emoji:   `🎧`,
    titulo:  `You & Me`,
    resumen: `Videos de música toda la tarde. Me hizo pensar que así se sentían nuestros besos.`,
    texto:   `No se que día fue este, pero el gran panorama fue ver videos en youtube de nuestros gustos musicales. Me encantó hacer eso y no lo había hecho nunca antes. De ahí saqué canciones para la playlist y me quedé varios días pegado con You & Me. Me hizo pensar que así se sentían nuestros besos.`
  },
  {
    emoji:   `🎈`,
    titulo:  `Tu momshower`,
    resumen: `Le puse cara a todos los nombres. Y celebramos nuestro primer mes.`,
    texto:   `Un 12 de septiembre, conocí a todos tus amigos y familiares de una jajaja cambios de escenarios y de tiempos me hicieron al fin ponerle cara a tantos nombres que me has comentado. Me dio alegría verte en tu momshower disfrutando y también responder a cuándo me preguntaron qué sentí cuando me contaste lo del Alexis, a lo cual respondí, que sentía admiración. Por otro lado, fue lindo que se diera nuevamente de solo coincidencia compartir un 13 juntos y poder celebrarnos, feliz primer mes de muchos, te amo.`
  },
  {
    emoji:   `☀️`,
    titulo:  `Despertar después del carrete`,
    resumen: `Lo difícil no fue levantarse temprano, fue salir de la cama.`,
    texto:   `Un 13 de septiembre nos despertábamos juntos después del carrete, y la verdad es que pensé que sería más difícil porque estaría muerto de sueño, pero no. Lo realmente difícil fue salirnos de la cama después de hacer el amor una y otra vez, pues nos calentó el hecho de querer todo con el otro y firmamos mentalmente un contrato de que con esas mismas ganas de hacerlo así sin nada en un futuro lo haríamos para realmente traer al mundo al elegido. Después de eso, salimos a comer y nos echamos un ratito al sol en el paso, estuvo rico.`
  },
  {
    emoji:   `🫂`,
    titulo:  `Cargada de emociones`,
    resumen: `Llegaste abrumada. Entendimos que una relación es para apoyarse.`,
    texto:   `Un 15 de septiembre, llegabas cargada de emociones y con ganas de irte a la soledad. Ahora bien, el regalo que te entregué siento de partida te ablandó un poco el corazón. Llegando a echarnos, te desahogaste y te veías bastante abrumada con todo, por malestar físico, miedos, frustración y tristeza. Sin embargo, entre meditación, regaloneo y palabras con amor fuiste cediendo a comprender que si estamos en una relación, es para apoyarnos y cuidarnos. Agradezco después el almuerzo que tuvimos y todo lo que dormimos.`
  },
  {
    emoji:   `🤝`,
    titulo:  `Cuando no quise ser espectador`,
    resumen: `Te vi superada y preferí estar, en vez de mirar.`,
    texto:   `Un 8 de octubre, tras la mala noche que tuvimos y lo que conversamos en la mañana, me quedé pensando en que tampoco quería ser espectador de las situaciones que pasaban, pues obviamente te veía afectada, deprimida y superada. Ante ello, te realicé una ofrenda de 100k para aminorar al menos las preocupaciones monetarias y si bien costó, te abriste a recibirlas. Una vez terminada la jornada laboral, me dijiste sobre hacer la hora antes de ver a tu ex suegra, a lo cual te ofrecí pasar al departamento. Ahí recuerdo tu mirada con tristeza diciendo no querer mostrarte vulnerable, pero, si estamos juntos ¿cómo no serlo? a mi parecer es fundamental poder apoyarnos y saber realmente qué está pasando el otro. Después de conversar nos tomamos una pequeña siesta como hace tiempo no lo hacíamos, con el cielo anocheciendo en el ventanal y después a tu departamento me fui a quedar y tuvimos una noche mucho mejor que la anterior.`
  },
  {
    emoji:   `📸`,
    titulo:  `Cafeyna y nuestras fotos`,
    resumen: `La Lore dijo que nos veíamos muy enamorados. Sonaba Mirrors.`,
    texto:   `Un 4 de octubre, nos despertamos para ir de shopping y actualizar un poco mis outfits (lo necesitaba). Quedé bastante conforme con el resultado y agradecido por tu ayuda, así que estrené altiro la nueva chaqueta, polera y pantalones como niño después de su cumpleaños, para que nos fuésemos a Cafeyna. Si bien ninguno es fanático de los panoramas multitudinarios, fue lindo tener un momento diferente entre los dos y que también pudieses aunque fuese compartir un ratito con mi amiga la Lore. Además, llevamos la cámara y nos sacamos un montón de fotos, la Lore después me dijo que nos veíamos muy enamorados. Si bien fue triste despedirnos, fue demasiado bonito pensar en lo feliz que fuimos en ese rato y en cómo después me llenaste de palabras de amor diciéndome que era todo lo que querías, que nunca pensaste sentir algo así mientras sonaba Mirror de fondo. La escuché una y mil veces pensando en lo mucho que te amo.`
  },
  {
    emoji:   `🍊`,
    titulo:  `La Naranja Mecánica`,
    resumen: `Club de lectura, machas a la parmesana, vino y lego.`,
    texto:   `Un 3 de octubre, tras vivir una situación que parecía de no retorno con el Alexis, pudimos darle vuelta al día a partir del Club de Lectura de La Naranja Mecánica. Intenté seguir tus consejos y mejorar como mediador, lo cual me sirvió un montón. Fue un club super entretenido y fue bacán que nuestros amigos pudiesen también compartir en un mismo espacio. Después nos fuimos y decidimos comprar unas machas para hacer a la parmesana vía delivery para tener un momento de relajo antes de comenzar al panorama de celebración por mi ascenso. Fue ahí en la cama que te luciste y reclamaste tu trono perpetuo de la goat del sexo oral sacándome cada gota que tenía acumulada. Una vez realizado el acto amatorio jajaja me cocinaste las machas, nos tomamos un vino y armamos el lego, fue un panorama pretencioso de aquellos que disfruté mucho. Por tu compañía, por la buena comida, por tus conversaciones y por tu amor.`
  },
  {
    emoji:   `💍`,
    titulo:  `Las bodas de oro`,
    resumen: `Veníamos de una semana distante. Verte lo despejó todo.`,
    texto:   `Un 2 de octubre, veníamos de una semana distante tras haber conversado sobre el tema de las infidelidades. La verdad me pilló desprevenido, me afectó y me dejó bastante rato con una sensación de desconfianza e incomodidad. ¿Será una advertencia? ¿Es algo que no puede controlar? ¿Es algo que hará y nunca me lo comunicará? No es que te idealice pero no quisiera llegarnos así a traicionar. 

En fin, a pesar de todo el ruido mental, seguí pensando en qué panorama hacer el fin de semana y también resolviendo para tenerte a tiempo el regalo que te había comprado. Fue entonces que me dijiste que fuésemos a las bodas de oros de tu abuelos, así que nos reunimos y vi tu carita nuevamente, haciendo que aquellas dudas y preocupaciones se alejaran de mi cabeza mientras te mostraba las tazas que te había comprado, uno más al stock de regalos random que me gusta hacerte solo para que sepas que te pienso y que me gusta hacerte sonreir. 

Ahí en el restaurant, lo pasé súper. Comimos rico, me sentí incluido y cómodo, la verdad es que fue 10/10 así que fue ya darle vuelta a la página que marcó la semana.`
  },
  {
    emoji:   `✉️`,
    titulo:  `La carta de Pierre Curie`,
    resumen: `En Fausto. Después, puzzle, vino y quesitos.`,
    texto:   `Un 11 de octubre, salimos a tomarnos un cafecito a Fausto, donde te dediqué la carta de Pierre Curie que aborda el seguir nuestra vida juntos hipnotizados por nuestros sueños. Encuentro preciosa la carta y me llena de alegría haber pensado en ti cuando la escuché por primera vez. Aquella cita fue ideal para también decirnos qué sentimos cada uno y me quedaré con lo que me dijiste saliendo: te amo siempre. Después de ello llegamos a casa a nuestra cita pretenciosa de puzzle, vino y quesitos. Me encantó la perseverancia para lograr nuestro cometido en esa noche y después cerrar el día a pesar del cansancio haciendo el amor. Tras hacerlo y quedarnos cuerpo a cuerpo, contigo encima mío, solo pensaba que me faltaban palabras para expresar lo afortunado que me siento por experimentar un amor como este. Y eso que falta aún tanto por hacer, tanto por aprender, tanto por crear.`
  },
  {
    emoji:   `🎁`,
    titulo:  `Mi mejor cumpleaños`,
    resumen: `Mis mundos conociéndose, y tú a mi lado. Una noche perfecta.`,
    texto:   `Un 19 de septiembre, tras comentarle a mi papá un poco de tu historia, se ofreció a facilitarnos la vida pasándote a buscar con el Alexis para irlo a dejar donde su tía. Menos mal fue así pues de esta forma pudimos estar juntos desde el inicio del festejo. En retrospectiva, sigo pensando que fue el mejor cumpleaños de todos, porque sentí mi corazón tranquilo y si bien no hubo muchas palabras que crucé con mis invitados y hasta contigo, creo que a veces los silencios también dicen mucho. Me sentía feliz de ver cómo se conocían personas de mis diferentes mundos, orgulloso de ver cómo me rodeo de tanto talento y también contento de poder vivir todo eso a tu lado. Nos fuimos a dormir y ahí tuvimos la conversación en torno a que me entendieras que realmente quería dormir contigo por sobre todo y menos mal accediste y no te fuiste, eso me hubiese puesto triste. De ahí en más no nos importó nada y lo hicimos sin importar quien estuviese al lado o quien entrase al baño. Fue una noche perfecta.`
  },
  {
    emoji:   `🚶`,
    titulo:  `Un paseito porque sí`,
    resumen: `Jugamos a la aplicación que te hice y nos proyectamos al futuro.`,
    texto:   `Un 17 de octubre, si bien partimos la mañana un poco desafiante porque el Alexis había estado de mal humor, retomamos con todo nuestro día después en el centro de viña. Recorrimos rincones nuevos mientras tomábamos y comíamos rico, sin embargo, lo mejor fue cada conversación. Aprovechamos de jugar en la aplicación que te cree y proyectarnos hacia el futuro, porque se ve tan lindo cuando es contigo a mi lado. Después de ello nos devolvimos al departamento y me encantan las noches así contigo. El silencio de la noche mientras nuestras palabras y nuestras miradas se van encontrando. Te amo tanto.`
  },
  {
    emoji:   `🎶`,
    titulo:  `Y solo se me ocurre amarte`,
    resumen: `Media Luna, mi familia y el cine. Todo en un mismo día.`,
    texto:   `Un 18 de octubre, hacíamos un 3x1 partiendo el día con la canción "Y solo se me ocurre amarte" de Alejandro Sanz. Una mañana por fin cobrando el premio que te debía hace tanto en Media Luna, mientras conversábamos sobre la crianza que le daríamos a nuestros niños en aquel sillón verde. Después de ello, fuimos a visitar a mi familia, porque me gusta que conozcas un poco más de mi mundo, mis escenarios, mis personajes, mi historia. Conversamos, vimos fotos y almorzamos para así a tiempo llegar a nuestra tercera parada. En el cine, tenía la intuición que sería una película especial, y me encantó vivirla contigo mientras nos besamos cada ciertos minutos. Me encanta comentar nuestras percepciones y más aún me encanta leer después de todo tus palabras de emocionada, por nuestro finde, por nuestros panoramas, por nuestro amor. Además, la guinda de la torta fue la publicación que hiciste sobre nosotros que expresan todo lo que somos. Te amo demasiado.`
  },
  {
    emoji:   `🌿`,
    titulo:  `Quiero que seas mi polola`,
    resumen: `WIP Coffee, jazz, y en la tranquilidad de la pieza te lo dije.`,
    texto:   `Un 13 de agosto, había comprado entradas para ir a ver a Antonio Monasterio, pero antes de quería mostrar una cafetería: WIP Coffee. Me gustó un montón compartir ese ratito contigo y después irnos a disfrutar de mi agrupación de jazz favorita, para  que conocieses un poco más de mis gustos. De ahí, nos fuimos caminando hasta una farmacia dado que te había llegado recién la regla. Partimos al departamento, y ahí en la tranquilidad de la habitación te dije "Quiero que seas mi polola". Preferí afirmarlo en vez de netamente consultarlo, pues lo sentía mucho en mi corazón. Vi tu sonrisa, con mis palabras y mis regalos, mientras me decías que si bien no podíamos hacer el amor, afortunadamente tenías una boca para usar, aquello me calentó un montón.`
  },
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
];
