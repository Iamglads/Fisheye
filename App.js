class DisplayPhotographers {
  constructor() {
    this.displayPhotographers = document.querySelector(
      ".display__photographers"
    );
    this.photographersApi = new PhotographerApi("./data.json");
  }

  async main() {
    const photographers = await this.photographersApi.getPhotographer();

    photographers.photographers.forEach((photographer) => {
      console.log(photographer);
      const template = new PhotographerCard(photographer);
      this.displayPhotographers.appendChild(template.createPhotographerCard());
    });
  }

  /*   displayPhotographers(photographers) {
    photographers.photographers.map((ph) => {
      let tagHTML = "";
      ph.tags.forEach((tag) => {
        console.log(tag);
        tagHTML += `<span class="tag"> ${tag}<span/>`;
      });

      displayPhotographers.innerHTML += ;
    });
  } */
}

// Execute when Dom loaded
document.addEventListener("DOMContentLoaded", () => {
  const app = new DisplayPhotographers();
  app.main();
});
