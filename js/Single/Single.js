import { PhotographerApi } from "../Api/Api.js";
import { Form } from "../Form/Form.js";
import { MediaCard } from "../Templates/MediaCard.js";
import { Lightbox } from "../Lightbox/Lightbox.js";
import { Infos } from "../Infos/Infos.js";

class Single {
  constructor() {
    this.params = new URLSearchParams(window.location.search);
    this.id = this.params.get("id");
    this.photographerApi = new PhotographerApi("../data.json");
    this.displayMedias = document.querySelector(".galery__images--wrappe");
    this.sortSelect = document.querySelector("#sort");
    this.metaTitle = document.querySelector("title");
  }

  display() {
    this.getPhotographerById();
    this.getMedias();
  }

  async getPhotographerById() {
    const Api = await this.photographerApi.getPhotographer();
    const photographers = Api.photographers;

    photographers.filter((photographer) => {
      //console.log(photographer.id);
      if (this.id == photographer.id) {
        const { name, portrait, city, country, tagline, tags } = photographer;
        this.displayPhotographerInfos(name, city, country, tagline, tags);
        this.displayPhotographerPortrait(portrait, name);

        // Meta title
        this.metaTitle.textContent = name;
        const medias = Api.media.filter(
          (media) => this.id == media.photographerId
        );

        // init block info at the bottom
        const infos = new Infos(photographer, this.getTotalLikes(medias));
        infos.display();

        // init contact form
        const form = new Form(photographer);
        form.init();
      }
    });
  }

  displayPhotographerInfos(name, city, country, tagline, tags) {
    const heroInfos = document.querySelector(".hero__wrappe--information");
    heroInfos.innerHTML = `
			<div class="hero__wrappe--information">
		<h1> ${name}</h1>
		<address>${city} ${country}</address>
		<p>${tagline}</p>
		<ul>
			${tags.map((tag) => `<li class="tag">#${tag}<li/>`)}
		</ul>
			</div> `;
  }

  displayPhotographerPortrait(portrait, name) {
    const photographerPortrait = document.querySelector(".hero__wrappe--img");
    photographerPortrait.innerHTML = `<img src="../assets/photographers/${portrait}" alt="${name}">`;
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
    const ligthbox = new Lightbox(mediasByPhotographer);
    ligthbox.display();
    this.updateLikes();
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
   * @param {Array} medias
   * @return // total likes
   */
  getTotalLikes(medias) {
    let newArray = [];
    const reducer = (previousValue, currentValue) =>
      previousValue + currentValue;
    medias.forEach((media) => {
      newArray.push(media.likes);
    });
    return newArray.reduce(reducer);
  }

  updateLikes() {
    let iconLike = document.querySelectorAll(".iconLike");

    iconLike.forEach((icon) =>
      icon.addEventListener("click", () => {
        let sumLike = Number(icon.previousElementSibling.textContent);
        let isliked = icon.getAttribute("dataLike");
        let likes = icon.previousElementSibling;
        if (isliked == "false") {
          likes.innerHTML = sumLike + 1;
          icon.classList.add("fas");
          icon.classList.remove("far");
          icon.setAttribute("dataLike", "true");
        } else if (isliked == "true") {
          likes.innerHTML = sumLike - 1;
          icon.classList.remove("fas");
          icon.classList.add("far");
          icon.setAttribute("dataLike", "false");
        }
      })
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const display = new Single();
  display.display();
});
