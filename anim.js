// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Dejame tomarte de la mano,<br> dejame mirarte a los ojos.", time: 17 },
  { text: "Dejame a travez de mi mirada<br> darte todo mi esplendor.", time: 25 },
  { text: "Dejame quedarme aqui, dejame besarte ahi.", time:33},
  { text: "Donde guardas tus secretos,<br> los mas oscuros<br> y los mas bellos.", time: 39 },
  { text: "Te regalo mis piernas,<br> recuesta tu cabeza en ellas.", time: 48 },
  { text: "Te regalo mis fuerzas,<br> usalas cada que no tengas.", time: 56 },
  { text: "Te regalo las piezas que a mi alma conforman.<br>Que nunca nada...", time: 64 },
  { text: "...te haga falta a ti.<br> Te voy a amar hasta morir.", time: 70 },
  { text: "Te voy a amar hasta morir.", time: 78 },
  { text: "Dejame jugar contigo,<br>dejame hacerte sonreir.", time: 96 },
  { text: "Dejame darte de mi dulzura,<br>pa que sientas lo que senti.", time: 104 },
  { text: "Dejame cuidarte, dejame abrazarte.", time: 111 },
  { text: "Dejame enseñarte todo lo que tengo pa hacerte muy feliz.", time: 116 },
  { text: "Te regalo mis piernas,<br> recuesta tu cabeza en ellas.", time: 127 },
  { text: "Te regalo mis fuerzas,<br> usalas cada que no tengas.", time: 135 },
  { text: "Te regalo las piezas que a mi alma conforman.<br>Que nunca nada...", time: 143 },
  { text: "...te haga falta a ti.<br> Te voy a amar hasta morir.", time: 149 },
  { text: "Te regalo mis piernas,<br> recuesta tu cabeza en ellas.", time: 158 },
  { text: "Te regalo mis fuerzas,<br> usalas cada que no tengas.", time: 166 },
  { text: "Te regalo las piezas que a mi alma conforman.<br>Que nunca nada...", time: 174 },
  { text: "...te haga falta a ti.<br> Te voy a amar hasta morir.", time: 181 },
  { text: "Te voy a amar hasta morir.", time: 189 },
  { text: "Te voy a amar hasta morir.", time: 196 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 7
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);