import { PhotographerCard } from "./js/Templates/PhotographerCard.js";
import { PhotographerApi } from "./js/Api/Api.js";

class DisplayPhotographers {
  constructor() {
    this.displayPhotographers = document.querySelector(
      ".display__photographers"
    );
    this.Api = new PhotographerApi("./data.json");
  }

  async main() {
    const datas = await this.Api.getPhotographer();
    const photographers = datas.photographers;

    photographers.forEach((photographer) => {
      const Card = new PhotographerCard(photographer);
      this.displayPhotographers.appendChild(Card.createCard());
    });

    this.filterByTags(photographers);
  }

  /**
   *
   * @param {Array} photographers
   */
  filterByTags(photographers) {
    let datatag = document.querySelectorAll(".tag");
    for (let i = 0; i < datatag.length; i++) {
      datatag[i].addEventListener("click", () => {
        // Check de data type values
        let datavalue = datatag[i].dataset.tag;
        // Check if photographers includes the tag values
        let filterTags = photographers.filter((photographer) =>
          photographer.tags.includes(datavalue)
        );
        // If photographer includes data type value for each protographer who includes this value display this photographe
        if (filterTags) {
          this.displayPhotographers.innerHTML = "";
          filterTags.forEach((photographer) => {
            const Card = new PhotographerCard(photographer);
            this.displayPhotographers.appendChild(Card.createCard());
          });
        }
      });

      datatag[i].addEventListener("keypress", () => {
        let datavalue = datatag[i].dataset.tag;
        let filterTags = photographers.filter((photographer) =>
          photographer.tags.includes(datavalue)
        );
        if (filterTags) {
          this.displayPhotographers.innerHTML = "";
          filterTags.forEach((photographer) => {
            const Card = new PhotographerCard(photographer);
            this.displayPhotographers.appendChild(Card.createCard());
          });
        }
      });
    }
  }
}

// Execute when Dom loaded
document.addEventListener("DOMContentLoaded", () => {
  const app = new DisplayPhotographers();
  app.main();
});
