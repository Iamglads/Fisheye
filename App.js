class DisplayPhotographers {
  constructor() {
    this.displayPhotographers = document.querySelector(
      ".display__photographers"
    );
    this.photographersApi = new PhotographerApi("./data.json");
    this.datatag = document.querySelectorAll(".tag");
  }

  async main() {
    const photographers = await this.photographersApi.getPhotographer();
    photographers.photographers.forEach((photographer) => {
      //console.log(photographer);
      const template = new PhotographerCard(photographer);
      this.displayPhotographers.appendChild(template.createPhotographerCard());
    });

    this.filterByTags(photographers);
  }

  //filter by tags
  filterByTags(photographers) {
    for (let i = 0; i < this.datatag.length; i++) {
      //console.log(this.datatag[i].dataset);
      this.datatag[i].addEventListener("click", () => {
        let datavalue = this.datatag[i].dataset.tag;
        const filterTags = photographers.photographers.filter((photographer) =>
          photographer.tags.includes(datavalue)
        );
        if (filterTags) {
          this.displayPhotographers.innerHTML = "";
          filterTags.forEach((photographerTag) => {
            const template = new PhotographerCard(photographerTag);
            this.displayPhotographers.appendChild(
              template.createPhotographerCard()
            );
          });
        }
        console.log(filterTags);
        return filterTags;
      });
    }
  }
}

// Execute when Dom loaded
document.addEventListener("DOMContentLoaded", () => {
  const app = new DisplayPhotographers();
  app.main();
});
