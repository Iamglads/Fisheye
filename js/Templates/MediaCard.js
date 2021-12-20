export class MediaCard {
  /**
   *
   * @param {object} media
   */
  constructor(media) {
    this.media = media;
    this.iconLike = document.querySelectorAll(".fa-heart");
  }

  createCard() {
    const wrapperMedias = document.createElement("article");
    wrapperMedias.classList.add("card");
    const photographerMedias = ` 
    ${this.getSourceType()}
      <div class="title">
          <h3>${this.media.title}</h3>
          <div>
            <span class="likes" data="false">${this.media.likes}</span>
            <i class="fas fa-heart" aria-label="likes"></i>
          </div>
      </div>
    `;
    //console.log("test medias card");
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
    let likes = document.querySelector(".likes");
    this.iconLike.forEach((like) =>
      like.addEventListener("click", () => {
        likes = this.media.likes++;
        likes.innerHTML = parseInt(this.media.likes);
      })
    );
  }
}
