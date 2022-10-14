export class Infos {
  /**
   *
   * @param {Object} infoPhotographer
   * @param {Number} totalLikes
   */
  constructor(infoPhotographer, totalLikes) {
    this.price = infoPhotographer.price;
    this.totalLikes = totalLikes;
  }

  display() {
    const element = document.createElement("div");
    element.classList.add("fixed-card");
    element.innerHTML = `<div class="fixed-card-wrappe">
                <div> 
                    <span class="totalLikes">${this.totalLikes}</span>
                    <i class="fas fa-heart"></i>
                </div>
                <div>
                    <span> ${this.price}€/jour</span>
                </div>
            </div>`;

    document.body.appendChild(element);
  }
}
