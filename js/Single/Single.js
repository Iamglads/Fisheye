import { Form } from "../Form/Form.js";
import { Lightbox } from "../Lightbox/Lightbox.js";

class Single {
  constructor() {
    this.params = new URLSearchParams(window.location.search);
    this.id = this.params.get("id");
    this.photographerApi = new PhotographerApi("../data.json");
    this.displayPhotographer = document.querySelector(".hero__wrappe");
    this.displayMedias = document.querySelector(".galery__images--wrappe");
    this.sortSelect = document.querySelector("#sort");
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
            <button class="btn">Contactez-nous</button>
          </div>
          <div class="hero__wrappe--img">
            <img src="../images/photographers/${portrait}" alt="${name}">
          </div> 
        </div>
        
			`;
        this.displayInfosPhotographer(photographer);
      }

      return photographer;
    });
    // init contact form
    const form = new Form();
    form.init();
  }

  async getMedias() {
    const Api = await this.photographerApi.getPhotographer();
    const medias = Api.media;
    const mediasByPhotographer = [];
    medias.filter((media) => {
      if (this.id == media.photographerId) {
        let Card = new MediaCard(media);
        this.displayMedias.appendChild(Card.createCard());
        mediasByPhotographer.push(media);
      }

      this.sortSelect.addEventListener("change", () => {
        this.sortMediasMethod(mediasByPhotographer);
      });
    });

    const lightbox = new Lightbox();
    lightbox.display();
  }

  /**
   * sort array and display new array sorted
   * @param {Array} mediasToSort
   */
  sortMediasMethod(mediasToSort) {
    let selectOption = this.sortSelect.value;
    if (selectOption === "popularity") {
      //console.log("popularity");
      mediasToSort.sort((a, b) => {
        return b.likes - a.likes;
      });
    } else if (selectOption === "date") {
      //console.log("Date");
      mediasToSort.sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
      });
    } else if (selectOption === "title") {
      //console.log("Ttile");
      mediasToSort.sort((a, b) => {
        return a.title.localeCompare(b.title);
      });
    }
    this.displayMedias.innerHTML = "";
    mediasToSort.map((media) => {
      let Card = new MediaCard(media);
      this.displayMedias.appendChild(Card.createCard());
    });
  }

  /**
   *
   * @param {Array} mediasByPhotographer
   */

  displayInfosPhotographer(photographer) {
    let price = photographer.price;

    const element = document.createElement("div");
    element.classList.add("fixed-card");
    element.innerHTML = `<div class="fixed-card-wrappe">
                <div> 
                    <span class="likes">81</span>
                    <i class="fas fa-heart"></i>
                </div>
                <div>
                    <span> ${price}€/jour</span>
                </div>
            </div>`;

    document.body.appendChild(element);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const displayPhotographer = new Single();
  displayPhotographer.getPhotographerById();

  const displayMedias = new Single();
  displayMedias.getMedias();
});
