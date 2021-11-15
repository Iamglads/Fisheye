class MediaCard {
  constructor(media) {
    this.media = media;
  }

  createMediaCard() {
    const wrapperMedias = document.createElement("article");
    wrapperMedias.classList.add("card");

    const photographerMedias = `
        <img src="../images/${this.media.image}" alt="${this.media.title}">
        <div class="title">
            <h3>${this.media.title}</h3>
            <div>
                <span></span>
                <i class="fas fa-heart"></i>
            </div>
        </div>
    `;

    wrapperMedias.innerHTML = photographerMedias;

    return wrapperMedias;
  }
}
