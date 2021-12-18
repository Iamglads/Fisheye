export class Lightbox {
  /**
   *
   * @param {Array} mediasPhotographer // Tableau des média d'un photographe
   */
  constructor(mediasPhotographer) {
    this.mediasPhotographer = mediasPhotographer;
    console.log(this.mediasPhotographer);
  }

  display() {
    const cards = document.querySelectorAll(".card-img, .card-video");
    for (let i = 0; i < cards.length; i++) {
      cards[i].addEventListener("click", () => {
        // console.log(cards[i]);
        //let imgSRC = cards[i].getAttribute("src");
        /*  let index = 1;
        if (this.mediasPhotographer.findIndex() == index) {
          console.log("True");
        } else {
          console.log("False");
        } */
        // console.log(imgSRC);
        this.displayContentLightbox(this.mediasPhotographer);

        this._left();
        this._right();
        this._closeLightbox();
      });
    }
  }

  /**
   *
   * @param {Array} mediasPhotographer
   */

  currentMedia(mediasPhotographer) {
    // obtenir l'index du media
    // le comparer au tableau des medias
    // Afficher les informations liées à ce média
  }

  /**
   *
   * @param {Object} media
   */
  displayContentLightbox(media) {
    const lightbox = document.querySelector(".lightbox__container ");
    const contentLightbox = document.querySelector(
      ".lightbox__container--media"
    );
    lightbox.style.display = "flex";
    contentLightbox.innerHTML = `
      <img src="../images/${media.image}" alt="">
      <div class="title">
          <p>${media.title}</p>
      </div>`;
  }

  _right() {
    const next = document.querySelector(".fa-chevron-right");
    next.addEventListener("click", (e) => {
      e.preventDefault();
      this.nextMethod();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") {
        this.nextMethod();
      }
    });
  }

  _left() {
    const prev = document.querySelector(".fa-chevron-left");
    prev.addEventListener("click", (e) => {
      this.prevMethod();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") {
        this.prevMethod();
      }
    });
  }

  _closeLightbox() {
    const lightbox = document.querySelector(".lightbox__container ");
    const close = document.querySelector(".close");
    close.addEventListener("click", () => {
      lightbox.style.display = "none";
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        lightbox.style.display = "none";
      }
    });
  }

  nextMethod() {
    console.log("Rigth");
  }

  prevMethod() {
    console.log("Left");
  }
}
