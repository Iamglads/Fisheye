export class Lightbox {
  /**
   *
   * @param {Array} mediasPhotographer // Tableau des média d'un photographe
   */
  constructor(mediasPhotographer) {
    this.mediasPhotographer = mediasPhotographer;
    this.currentIndex = null;
    this.currentMedia = {};
  }

  display() {
    const cards = document.querySelectorAll(".card-img, .card-video");
    for (let i = 0; i < cards.length; i++) {
      cards[i].addEventListener("click", () => {
        this.currentIndex = i;
        this.currentMedia = this.mediasPhotographer[i];
        this.displayContentLightbox(this.currentMedia);
      });
    }
    this._left();
    this._right();
    this._closeLightbox();
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
    contentLightbox.innerHTML = `
			${
        media.image
          ? `<img src="../assets/images/${media.image}" alt="${media.title}">`
          : `<video class="card-video" width="300" height="380" tabindex="0" controls>
				<source src="../assets/videos/${media.video}" type="video/mp4">
				</video>`
      }
			<div class="title">
				<p>${media.title}</p>
			</div>`;
    lightbox.style.display = "flex";
  }

  /**
   *
   * @param {Array} mediasPhotographer
   */
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

  /**
   *
   * @param {Array} mediasPhotographer
   */
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
    this.currentIndex++;
    if (this.currentIndex >= this.mediasPhotographer.length) {
      this.currentIndex = 0;
    }
    this.currentMedia = this.mediasPhotographer[this.currentIndex];
    this.displayContentLightbox(this.currentMedia);
  }

  prevMethod() {
    this.currentIndex--;
    if (this.currentIndex <= 0) {
      this.currentIndex = this.mediasPhotographer.length;
    }
    this.currentMedia = this.mediasPhotographer[this.currentIndex];
    this.displayContentLightbox(this.currentMedia);
  }
}
