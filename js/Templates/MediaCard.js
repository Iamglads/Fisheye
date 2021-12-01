class MediaCard {
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
              <span class="likes">${this.media.likes}</span>
              <i class="fas fa-heart"></i>
          </div>
      </div>
    `;
    this.incrementeLike();
    wrapperMedias.innerHTML = photographerMedias;
    return wrapperMedias;
  }

  getSourceType() {
    return this.media.image
      ? `<img src="../images/${this.media.image}" alt="${this.media.title}"></img>`
      : `<video width="300" height="300" controls>
      <source src="../images/${this.media.video}" type="video/mp4">
      </video>`;
  }

  incrementeLike() {
    let sumLikes = "";
    let likes = document.querySelector(".likes");
    for (let i = 0; i < this.iconLike.length; i++) {
      this.iconLike[i].addEventListener("click", () => {
        sumLikes = this.media.likes++;
        likes.innerHTML = sumLikes;
      });
    }
  }
}
