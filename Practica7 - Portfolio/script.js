const nameSpan = document.getElementById("name");
let index = 0;

const frases = [
  "Chris",
  "Developer",
  "Guapo",
  "Poderoso",
  "Hermoso",
  "Precioso",
  "Armonioso",
  "Un buen socio",
  "Misterioso",
  "Buena gente",
  "Detergente",
  "Muy majete",
  "Inteligente",
  "Nada ojete",
  "Irreverente",
  "Un exponente",
];

function getFrases() {
  return frases[index];
}

onload = function () {
  nameSpan.innerHTML = getFrases();
  setInterval(function () {
    nameSpan.innerHTML = getFrases();
    if (index < frases.length - 1) {
      index++;
    } else {
      index = 0;
    }
  }, 2000);
};
