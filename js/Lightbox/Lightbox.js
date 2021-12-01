class Lightbox {
  constructor() {
    this.card = document.querySelectorAll("article");
  }

  display() {
    for (let i = 0; i < this.card.length; i++) {
      this.card[i].addEventListener("click", () => {
        console.log("click");
      });
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const box = new Lightbox();
  box.display();
});
