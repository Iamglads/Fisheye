export class PhotographerCard {
  constructor(photographer) {
    this.photographer = photographer;
  }

  createCard() {
    const wrapper = document.createElement("article");
    wrapper.classList.add("card__photographer");
    const { id, portrait, name, city, country, tagline, price, tags } =
      this.photographer;
    const photographerCard = `
		<div>
			<a href="./pages/photographe.html?id=${id}">
				<div class="portrait">
					<img src="./assets/photographers/${portrait}" alt="${name}">
				</div>
				<h2 class="title">${name}</h2>
			</a>
			<div>
				<address>${city} ${country}</address>
				<p class="tagline">${tagline}</p>
				<p class="tarif"><span class="">${price}</span>$/jour</p>
			</div>
			<div class="tags">
				<ul class="display-tags">
					${tags.map((tag) => `<li class="tag">#${tag}<li/>`)}
				</ul>
			</div>
		</div>`;

    wrapper.innerHTML = photographerCard;
    return wrapper;
  }
}
