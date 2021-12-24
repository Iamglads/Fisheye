export class MediaCard {
  /**
   *
   * @param {object} media
   */
  constructor(media) {
    this.media = media;
    this.iconLike = document.querySelectorAll(".fa-heart");
    this.isLiked = false;
  }

  createCard() {
    const wrapperMedias = document.createElement("article");
    wrapperMedias.classList.add("card");
    const photographerMedias = ` 
    ${this.getSourceType()}
      <div class="title">
          <h3>${this.media.title}</h3>
          <div aria-label="conteneur bouton like">
            <span class="likes" data="false">${this.media.likes}</span>
            ${
              this.isLiked
                ? `<i class="fas fa-heart" aria-label="like"></i>`
                : `<i class="far fa-heart" aria-label="Not like"></i>`
            }
            
          </div>
      </div>
    `;
    this.updateLikes();

    wrapperMedias.innerHTML = photographerMedias;
    return wrapperMedias;
  }

  getSourceType() {
    return this.media.image
      ? `<img class="card-img" src="../assets/images/${this.media.image}" alt="${this.media.title}" tabindex="0"></img>`
      : `<video class="card-video" width="300" height="380" tabindex="0">
      <source src="../assets/videos/${this.media.video}" type="video/mp4" controls>
      </video>`;
  }

  updateLikes() {
    document.querySelectorAll(".fa-heart").forEach((icon) => {
      icon.addEventListener("click", () => {
        console.log(this);
        this.isLiked = true;
        this.media.likes++;
      });
    });
  }
}
