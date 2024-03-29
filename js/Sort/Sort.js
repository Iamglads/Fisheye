import { MediaCard } from "../Templates/MediaCard.js";
import { Lightbox } from "../Lightbox/Lightbox.js";

export class Sort {
  constructor(mediasToSort) {
    this.mediasToSort = mediasToSort;
    this.displayMedias = document.querySelector(".galery__images--wrappe");
  }
  /**
   * sort array and display new array sorted
   * @param {Array} mediasToSort
   */
  init() {
    const title = document.querySelector("#select-option-title");
    const popularity = document.querySelector("#select-option-popularity");
    const date = document.querySelector("#select-option-date");

    title.addEventListener("click", () => {
      //console.log("title");
      this.mediasToSort.sort((a, b) => {
        return a.title.localeCompare(b.title);
      });
      this.displayMediasMethod();
    });

    title.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        this.mediasToSort.sort((a, b) => {
          return a.title.localeCompare(b.title);
        });
        this.displayMediasMethod();
      }
    });

    popularity.addEventListener("click", () => {
      //console.log("popularity");
      this.mediasToSort.sort((a, b) => {
        return b.likes - a.likes;
      });
      this.displayMediasMethod();
    });

    popularity.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        this.mediasToSort.sort((a, b) => {
          return b.likes - a.likes;
        });
        this.displayMediasMethod();
      }
    });

    date.addEventListener("click", () => {
      //console.log("date");
      this.mediasToSort.sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
      });
      this.displayMediasMethod();
    });

    date.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        this.mediasToSort.sort((a, b) => {
          return new Date(a.date) - new Date(b.date);
        });
        this.displayMediasMethod();
      }
    });
  }

  displayMediasMethod() {
    this.displayMedias.innerHTML = "";
    this.mediasToSort.forEach((media) => {
      let Card = new MediaCard(media);
      this.displayMedias.appendChild(Card.createCard());
      const ligthbox = new Lightbox(this.mediasToSort);
      ligthbox.display();
    });
  }
}
