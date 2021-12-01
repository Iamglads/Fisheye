class Api {
  /**
   *
   * @param {string} url
   */

  constructor(url) {
    this.url = url;
  }
  async get() {
    return fetch(this.url)
      .then((res) => res.json())
      .catch((err) => console.log("Error: " + err));
  }
}

class PhotographerApi extends Api {
  /**
   *
   * @param {string} url
   */

  constructor(url) {
    super(url);
  }

  async getPhotographer() {
    //console.log(this.get());
    return await this.get();
  }
}
