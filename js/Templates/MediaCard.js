export class MediaCard {
  /**
   *
   * @param {object} media
   */
  constructor(media) {
    //console.log(media);
    this.media = media;
  }

  createCard() {
    const wrapperMedias = document.createElement("article");
    wrapperMedias.classList.add("card");
    const photographerMedias = ` 
			${this.getSourceType()}
			<div class="title">
				<h3>${this.media.title}</h3>
				<div aria-label="conteneur bouton like">
					<span class="likes">${this.media.likes}</span>
					<i class="far fa-heart iconLike" tabindex="1" dataLike="false"></i>
				</div>
			</div>`;
    wrapperMedias.innerHTML = photographerMedias;
    return wrapperMedias;
  }

  getSourceType() {
    return this.media.image
      ? `<img class="card-img" src="../assets/images/${this.media.image}" alt="${this.media.title}" tabindex="1"></img>`
      : `<video class="card-video" width="300" height="380" tabindex="1">
			<source src="../assets/videos/${this.media.video}" type="video/mp4" controls>
			</video>`;
  }
}
