class PhotographerCard {
  constructor(photographer) {
    this.photographer = photographer;
  }

  createPhotographerCard() {
    const wrapper = document.createElement("article");
    wrapper.classList.add("card__photographer");

    const tagHTML = "";
    const photographerCard = `
        <div>
          <a href="./pages/photographe.html?id=${this.photographer.id}">
            <div class="portrait">
              <img src="./images/photographers/${this.photographer.portrait}" alt="${this.photographer.name}">
            </div>
            <h2 class="title">${this.photographer.name}</h2>
          </a>
        <div>
          <address>${this.photographer.city} ${this.photographer.country}</address>
          <p class="tagline">${this.photographer.tagline}</p>
          <p class="tarif"><span class="">${this.photographer.price}</span>$/jour</p>
              </div>
              <div class="tags">
                <div class="display-tags">
                ${tagHTML}
                </div>
              </div>
          </div>
      `;

    wrapper.innerHTML = photographerCard;
    return wrapper;
  }
}
