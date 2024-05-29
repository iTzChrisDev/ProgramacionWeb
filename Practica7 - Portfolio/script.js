const nameSpan = document.getElementById("name");
let index = 0;

const frases = [
  "Christopher.",
  "ingeniero en proceso.",
  "programador.",
  "curioso.",
  "colaborador.",
  "proactivo."
];

function typePhrase(phrase, callback) {
  let i = 0;
  nameSpan.innerHTML = ""; 
  const interval = setInterval(() => {
    if (i < phrase.length) {
      nameSpan.innerHTML += phrase.charAt(i);
      i++;
    } else {
      clearInterval(interval);
      if (callback) callback();
    }
  }, 100); 
}

function startTyping() {
  typePhrase(frases[index], function () {
    setTimeout(function () {
      if (index < frases.length - 1) {
        index++;
      } else {
        index = 0;
      }
      startTyping();
    }, 1000); 
  });
}

onload = function () {
  startTyping();
};
