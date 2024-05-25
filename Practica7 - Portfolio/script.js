const nameSpan = document.getElementById("name");
let index = 0;

const frases = [
  "Chris.",
  "Developer.",
  "Ingenioso.",
  "Programador."
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
    }, 1500); 
  });
}

onload = function () {
  startTyping();
};
