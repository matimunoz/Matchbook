// ══════════════════════════════════════════════════════════════════════
//  CONVERSEMOS DEL FUTURO — temas y preguntas
//  Cada tema tiene tres niveles: ligera, media y profunda.
//  Para agregar una pregunta, basta sumarla al nivel que corresponda.
// ══════════════════════════════════════════════════════════════════════
const TEMAS = [
  {
    id: 'crianza', nombre: 'Crianza', emoji: '👶',
    ligera: [
      `¿Cuántos hijos te imaginas que tendríamos?`,
      `¿Qué cosa de tu infancia te gustaría repetir con ellos?`,
      `¿Cómo te imaginas un domingo cualquiera con niños en la casa?`,
    ],
    media: [
      `¿Qué parte de criar te da más miedo?`,
      `¿En qué crees que yo sería el blando y en qué lo serías tú?`,
      `¿Qué haríamos si uno quiere un hijo más y el otro no?`,
    ],
    profunda: [
      `¿Qué cosa de cómo te criaron no quieres repetir nunca?`,
      `Si no pudiéramos tener hijos biológicos, ¿qué te gustaría que hiciéramos?`,
      `¿Qué vas a necesitar de mí ese primer año, cuando todo sea cansancio?`,
    ],
  },
  {
    id: 'convivencia', nombre: 'Convivencia', emoji: '🏡',
    ligera: [
      `¿Qué desorden mío podrías aguantar toda la vida y cuál no?`,
      `¿Cómo te imaginas nuestra casa: llena de gente o tranquila?`,
      `¿Quién cocina, quién ordena, quién elige qué vemos?`,
    ],
    media: [
      `¿Cuánto tiempo a solas necesitas para estar bien?`,
      `¿Qué costumbre mía te gustaría que mantenga cuando vivamos juntos?`,
      `¿Qué harías si yo trabajara mucho más de lo que esperabas?`,
    ],
    profunda: [
      `¿Qué te haría sentir que la casa es tuya, y no solo donde vives?`,
      `¿Qué necesitas de mí los días en que no quieres hablar con nadie?`,
      `¿Qué parte de tu vida de ahora te daría pena perder al vivir conmigo?`,
    ],
  },
  {
    id: 'proyectos', nombre: 'Proyectos', emoji: '✈️',
    ligera: [
      `¿Qué viaje quieres que hagamos primero?`,
      `¿Dónde te gustaría que estemos viviendo en cinco años?`,
      `¿Qué te gustaría que aprendiéramos juntos?`,
    ],
    media: [
      `¿Qué proyecto tuyo te gustaría que yo empujara más?`,
      `¿Prefieres una vida estable o una con más riesgo?`,
      `¿Qué estarías dispuesto a dejar por un sueño del otro?`,
    ],
    profunda: [
      `¿Qué sueño tuyo todavía no me has contado?`,
      `¿Qué te daría más pena no haber hecho, a los setenta?`,
      `Si yo tuviera que irme un año por trabajo, ¿qué pasaría con nosotros?`,
    ],
  },
  {
    id: 'intimidad', nombre: 'Intimidad', emoji: '🔥',
    ligera: [
      `¿Qué gesto mío te gusta sin que yo me dé cuenta?`,
      `¿Prefieres que te busque yo o buscarme tú?`,
      `¿Qué momento nuestro te gustaría repetir tal cual?`,
    ],
    media: [
      `¿Hay algo que te gustaría probar y no has dicho?`,
      `¿Cómo prefieres que te avise que tengo ganas?`,
      `¿Qué te hace sentir más deseado: lo que digo o lo que hago?`,
    ],
    profunda: [
      `¿Hay algo que te incomode y no me hayas dicho por no herirme?`,
      `¿Cómo te imaginas nuestra intimidad en diez años?`,
      `¿Qué necesitas de mí cuando no tienes ganas?`,
    ],
  },
  {
    id: 'fe', nombre: 'Fe', emoji: '🕊️',
    ligera: [
      `¿Qué parte de la fe te hace bien hoy?`,
      `¿Te gustaría que tuviéramos alguna costumbre espiritual juntos?`,
      `¿Rezas por mí? ¿Qué pides?`,
    ],
    media: [
      `¿Qué te gustaría enseñarle a nuestros hijos sobre Dios?`,
      `¿Qué haríamos si uno de los dos se alejara de la fe?`,
      `¿Dónde has sentido a Dios en lo nuestro?`,
    ],
    profunda: [
      `Si supieras que te lo va a conceder, ¿qué le pedirías a Dios para nosotros?`,
      `¿Qué parte de tu fe te cuesta sostener?`,
      `¿Qué significaría para ti casarte por la iglesia?`,
    ],
  },
  {
    id: 'dinero', nombre: 'Dinero', emoji: '💸',
    ligera: [
      `¿En qué te gusta gastar sin sentir culpa?`,
      `¿Prefieres ahorrar para algo grande o darte gustos chicos seguido?`,
      `¿Cuánto crees que gastamos al mes saliendo?`,
    ],
    media: [
      `¿Cómo manejaríamos la plata: todo junto, todo separado, o mixto?`,
      `¿Qué pasaría si uno ganara mucho más que el otro?`,
      `¿Te incomoda hablar de plata conmigo? ¿Por qué?`,
    ],
    profunda: [
      `¿Qué aprendiste sobre la plata viendo a tus papás?`,
      `¿Cuánto necesitas tener guardado para dormir tranquilo?`,
      `¿Le prestarías plata a tu familia sin consultarme?`,
    ],
  },
  {
    id: 'conflicto', nombre: 'Conflicto', emoji: '⚡',
    ligera: [
      `¿Prefieres resolver al tiro o necesitas tiempo?`,
      `¿Qué hago yo cuando discutimos que te saca más de quicio?`,
      `¿Cómo sabes que ya estamos bien?`,
    ],
    media: [
      `¿Qué necesitas escuchar de mí cuando te fallo?`,
      `¿Hay algo de alguna discusión nuestra que te quedó dando vueltas?`,
      `¿Qué es para ti una pelea que se pasó de la raya?`,
    ],
    profunda: [
      `¿Qué cosa no me perdonarías?`,
      `¿Alguna vez te quedaste callado para evitar un conflicto conmigo?`,
      `¿Qué haríamos si llegáramos a un punto en que ya no nos entendemos?`,
    ],
  },
  {
    id: 'familias', nombre: 'Familias', emoji: '👪',
    ligera: [
      `¿Qué tradición de tu familia quieres que sea nuestra también?`,
      `¿Dónde pasamos la Navidad?`,
      `¿Qué es lo que más te gusta de mi familia?`,
    ],
    media: [
      `¿Qué límite necesitas que yo ponga con mi familia?`,
      `¿Cuánto te gustaría que nuestros papás estén en la vida de nuestros hijos?`,
      `¿Qué harías si mi familia y tú no se llevaran?`,
    ],
    profunda: [
      `¿Qué de tu familia te da miedo repetir?`,
      `¿Qué necesitas de mí cuando tu familia te hace mal?`,
      `¿Qué le dirías hoy a tus papás si no hubiera consecuencias?`,
    ],
  },
];
