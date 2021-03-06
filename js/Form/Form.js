export class Form {
  /**
   *
   * @param {Object} photographer
   */
  constructor(photographer) {
    this.photographer = photographer.name;
    this.modal = document.querySelector(".form");
    this.submitForm = document.querySelector(".form-submit");
  }

  init() {
    const closeForm = document.querySelectorAll(".close");
    const openForm = document.querySelector(".open-form");
    this.displayName(this.photographer);
    this.submitForm.addEventListener("submit", (e) => {
      e.preventDefault();
      console.log(this.sendData());
    });

    closeForm.forEach((close) =>
      close.addEventListener("click", () => {
        this._closeForm();
      })
    );

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this._closeForm();
      }
    });

    openForm.addEventListener("click", () => {
      this._openForm();
    });
  }

  displayName(name) {
    const formName = document.querySelector(".form-name");
    formName.textContent = name;
  }

  _openForm() {
    this.modal.style.display = "flex";
  }

  _closeForm() {
    this.modal.style.display = "none";
  }

  sendData() {
    const datas = {
      Nom: this.submitForm.firstname.value,
      Prénom: this.submitForm.lastname.value,
      Email: this.submitForm.email.value,
      Message: this.submitForm.message.value,
    };

    return datas;
  }
}
