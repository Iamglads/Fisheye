import { fetchPhotographers } from "./js/fonctions/fonctions.js";
const displayPhotographers = document.querySelector(".display__photographers");

class DisplayPhotographers {
  getData() {
    fetchPhotographers().then((response) => {
      this.displayPhotographers(response);
    });
  }

  displayPhotographers(photographers) {
    photographers.photographers.map((ph) => {
      let tagHTML = "";
      ph.tags.forEach((tag) => {
        console.log(tag);
        tagHTML += `<span class="tag"> ${tag}<span/>`;
      });

      displayPhotographers.innerHTML += `
              <article class="card__photographer">
                <div>
                  <a href="./pages/photographe.html?id=${ph.id}">
                    <div class="portrait">
                      <img src="./images/photographers/${ph.portrait}" alt="${ph.name}">
                    </div>
                    <h2 class="title">${ph.name}</h2>
                  </a>
                <div>
                  <address>${ph.city} ${ph.country}</address>
                  <p class="tagline">${ph.tagline}</p>
                  <p class="tarif"><span class="">${ph.price}</span>$/jour</p>
                      </div>
                      <div class="tags">
                        <div class="display-tags">
                        ${tagHTML}
                        </div>
                      </div>
                  </div>
              </article>
              `;
    });
  }
}

// Execute when Dom loaded
document.addEventListener("DOMContentLoaded", () => {
  const display = new DisplayPhotographers();
  display.getData();
});
