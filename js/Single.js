class Single {
  constructor() {
    this.params = new URLSearchParams(window.location.search);
    this.id = this.params.get("id");
    this.photographerApi = new PhotographerApi("../data.json");
    this.displayPhotographer = document.querySelector(".hero__wrappe");
    this.displayMedias = document.querySelector(".galery__images--wrappe");
  }

  async getPhotographerById() {
    const photographer = await this.photographerApi.getPhotographer();
    //console.log(this.id);

    photographer.photographers.filter((photographer) => {
      console.log(photographer.id);
      if (this.id == photographer.id) {
        const { name, portrait, city, country, tagline } = photographer;
        console.log(photographer);
        this.displayPhotographer.innerHTML = `
        <div class="hero__wrappe--information">
                <h1> ${name}</h1>
                <address>${city} ${country}</address>
                <p>${tagline}</p>
                <ul>
                    <li class="tag">#Portrait</li>
                    <li class="tag">#Art</li>
                    <li class="tag">#Fashion</li>
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

  async getMediasByPhotographer() {
    const medias = await this.photographerApi.getPhotographer();
    medias.media.filter((media) => {
      if (this.id == media.photographerId) {
        const template = new MediaCard(media);
        this.displayMedias.appendChild(template.createMediaCard());
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const displayPhotographer = new Single();
  displayPhotographer.getPhotographerById();

  const displayMedias = new Single();
  displayMedias.getMediasByPhotographer();
});
