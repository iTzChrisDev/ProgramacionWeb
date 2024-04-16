const cards = document.getElementsByClassName("card");

function select(cardIndex) {
  cards[cardIndex].classList.add("active");
  for (let i = 0; i < cards.length; i++) {
    if (!(i == cardIndex)) {
      cards[i].classList.remove("active");
    }
  }
}
