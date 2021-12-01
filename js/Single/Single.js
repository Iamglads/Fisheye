class Single {
  constructor() {
    this.params = new URLSearchParams(window.location.search);
    this.id = this.params.get("id");
    this.photographerApi = new PhotographerApi("../data.json");
    this.displayPhotographer = document.querySelector(".hero__wrappe");
    this.displayMedias = document.querySelector(".galery__images--wrappe");
    this.sortMedias = document.querySelector("#sort");
  }

  async getPhotographerById() {
    const Api = await this.photographerApi.getPhotographer();
    const photographers = Api.photographers;

    photographers.filter((photographer) => {
      //console.log(photographer.id);
      if (this.id == photographer.id) {
        const { name, portrait, city, country, tagline, tags } = photographer;
        //console.log(photographer);
        this.displayPhotographer.innerHTML = `
			<div class="hero__wrappe--information">
					<h1> ${name}</h1>
					<address>${city} ${country}</address>
					<p>${tagline}</p>
					<ul>
					${tags.map((tag) => `<li class="tag">#${tag}<li/>`)}
					</ul>
				</div>
				<div class="hero__wrappe--btn">
					<button class="btn open-modal-form">Contactez-nous</button>
				</div>
				<div class="hero__wrappe--img">
					<img src="../images/photographers/${portrait}" alt="${name}">
				</div> 
			</div>
			`;
      }
    });
  }

  async getMedias() {
    const Api = await this.photographerApi.getPhotographer();
    const medias = Api.media;
    medias.filter((media) => {
      if (this.id == media.photographerId) {
        let Card = new MediaCard(media);
        this.displayMedias.appendChild(Card.createCard());
      }
    });
  }

  sortMediasMethod(medias) {
    this.sortMedias.addEventListener("click", () => {
      let choice = this.sortMedias.value;
      if (choice === "popularity") {
        //console.log("popularity");
        medias.media.sort((a, b) => {
          const sortPopularity = b.likes - a.likes;
          console.log(sortPopularity);
          return sortPopularity;
        });
      } else if (choice === "date") {
        console.log("date");
      } else if (choice === "title") {
        console.log("title");
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const displayPhotographer = new Single();
  displayPhotographer.getPhotographerById();

  const displayMedias = new Single();
  displayMedias.getMedias();
});
