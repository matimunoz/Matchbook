// ══════════════════════════════════════════════════════════════════════
//  NUESTRA PLAYLIST
//
//  Cada canción con el porqué es tan nuestra. Solo aparecen acá las que
//  ya tienen su historia escrita; la playlist completa se escucha igual
//  desde el reproductor del final.
//
//  ── Para sumar una canción ──────────────────────────────────────────
//  1. En Spotify, sobre la canción: Compartir → Copiar enlace
//  2. Pegá el enlace completo en "spotify". Da lo mismo si trae cosas
//     después del "?", la página se queda solo con lo que necesita.
//  3. Escribí el porqué en "texto".
//  4. La portada es opcional: si la dejás vacía, la tarjeta se arma igual
//     con un disquito en su lugar. Si la querés, pedímela y la busco.
// ══════════════════════════════════════════════════════════════════════
const PLAYLIST = '09jhufHqoHOyqOtX8wdmef';   // "Us 💚"

const CANCIONES = [
  {
    titulo:  `Mirrors`,
    portada: `https://image-cdn-ak.spotifycdn.com/image/ab67616d0000b27356d5fb0cc9cec001d8ae0c8c`,
    artista: `Justin Timberlake`,
    spotify: `https://open.spotify.com/track/4rHZZAmHpZrA3iH5zx8frV`,
    texto:   `Nuestra canción, la que sonará el día que nos unamos para siempre ante Dios. Porque realmente describe cómo se siente estar juntos. Nos reflejamos el uno en el otro, con cada una de nuestras cualidades, que al estar juntos aumentan y nos hacen invencibles.`
  },
  {
    titulo:  `Y sólo se me ocurre amarte`,
    portada: `https://image-cdn-ak.spotifycdn.com/image/ab67616d0000b2730eb3e415c8a372c1441e1d32`,
    artista: `Alejandro Sanz`,
    spotify: `https://open.spotify.com/track/05Zcw1sWmSu3wfbaLTeosp`,
    texto:   `Un domingo 18 de octubre decidiste que al despertar sonara esta canción. Fue muy lindo escucharla mientras regaloneábamos un ratito antes de comenzar el día. Para hacerlo más especial, luego averigüé bien el significado de esta y nos sorprendió lo linda que es, aún más lindo coincidir en querer que se haga realidad.`
  },
  {
    titulo:  `Die For You`,
    portada: `https://image-cdn-ak.spotifycdn.com/image/ab67616d0000b2734718e2b124f79258be7bc452`,
    artista: `The Weeknd`,
    spotify: `https://open.spotify.com/track/2Ch7LmS7r2Gy2kc64wv3Bz`,
    texto:   `Sonaba mientras nos besábamos muy enamorados y apasionados en mi terraza. Hasta ese momento no había puesto atención a su letra, pero luego cuando me la enviaste, me sorprendió que representa mucho como nos sentimos.`
  },
  {
    titulo:  `Waiting for a girl like you`,
    portada: `https://image-cdn-ak.spotifycdn.com/image/ab67616d0000b2733cd67ccf241ae843f6da62f3`,
    artista: `Foreigner`,
    spotify: `https://open.spotify.com/track/2OgVsp77En2nju8pnCieVU`,
    texto:   `Un 22 de septiembre me enviaste esta canción diciendo “me representa”. Me encantó, porque es una hermosa canción y qué lindo saber que sientes que soy lo que esperabas. Me siento igual, eres eso y más.`
  },
  {
    titulo:  `Eres mi religión`,
    portada: `https://image-cdn-ak.spotifycdn.com/image/ab67616d0000b27314ba3e999835ddf8012772de`,
    artista: `Maná`,
    spotify: `https://open.spotify.com/track/3NTaEHQg5iVrRRNWlnK4RY`,
    texto:   `Jueves 22 de octubre te dediqué esta canción. Realmente me siento muy identificada. Así como creo en Dios y mi vida es más bella gracias a la fe, creo y confío plenamente en ti, siento tu amor incondicional presente cada día y siento que te amo de una forma inmensa, “eres luz, eres mi todo”.`
  },
  {
    titulo:  `Antes de ti`,
    portada: `https://image-cdn-ak.spotifycdn.com/image/ab67616d0000b273975e12fc086abfb47848169b`,
    artista: `Mon Laferte`,
    spotify: `https://open.spotify.com/track/5IkOnAKGDJT5M8KpFIHzsd`,
    texto:   `Representa muy bien el cambio y el impacto que tuvo tu presencia en mi vida. Se siente realmente como un antes y un después. Me has enseñado mucho, he crecido en muchos aspectos gracias a ti, gracias a que ahora somos nosotros. Todo lo que haya pasado antes ha valido la pena porque hoy estamos juntos. “Antes de ti, yo no conocía el amor”, más bien, no sabía que el amor podía ser tan lindo y transformador, hacerme sentir tan tranquila y capaz de todo solo por tener a mi lado a una persona maravillosa que me acompaña incondicionalmente.`
  },

  // ── Las que faltan por contar ───────────────────────────────────────
  // La playlist tiene 22 canciones y acá hay 6. Las otras ya se escuchan
  // en el reproductor del final; cuando escribas el porqué de alguna,
  // copiá un bloque de arriba y sumala. Las que esperan:
  //
  //   El Hombre Que Yo Amo      · Myriam Hernández
  //   Así Fue                   · Juan Gabriel
  //   Hasta Que Te Conocí       · Juan Gabriel
  //   La Incondicional          · Luis Miguel
  //   Sabor a Mí                · Luis Miguel
  //   Abrázame Muy Fuerte       · Juan Gabriel
  //   Si tú te atreves          · Luis Miguel
  //   Es Por Ti                 · Juanes
  //   Experiencia Religiosa     · Enrique Iglesias
  //   Entrégate                 · Luis Miguel
  //   Lento                     · Julieta Venegas
  //   Somos Novios              · Luis Miguel
  //   I Want to Know What Love Is · Foreigner
  //   All My Love               · Led Zeppelin
  //   Bendita Tu Luz            · Maná y Juan Luis Guerra
];
