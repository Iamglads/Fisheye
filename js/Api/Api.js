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
    return await this.get();
  }
}

/* const data = "../../data";

export async function fetchPhotographers() {
  try {
    const response = await fetch(data);
    const responseData = await response.json();
    console.log(responseData.photographers);
    return responseData;
  } catch (error) {
    console.log(error);
    // in case return a empty array
    return [];
  }
}

export async function fetchPhotographersById() {
  try {
    let params = new URLSearchParams(window.location.search);
    let id = params.get("id");
    console.log(id);

    let response = await fetch(data + "/photographers/" + id);
    let photographerId = await response.json();
    return photographerId.photographers;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchMediasByPhortographers() {} */
