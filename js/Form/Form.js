class handleModal {
  constructor() {
    this.submitForm = document.querySelector(".form-submit");
    this.modal = document.querySelector(".form");
  }

  openModal() {
    this.modal.style.display = "block";
  }

  closeModalForm() {
    this.modal.style.display = "none";
  }

  sendData() {
    const datas = {
      Nom: this.submitForm.firstname.value,
      Prénom: this.submitForm.lastname.value,
      Email: this.submitForm.email.value,
      Message: this.submitForm.message.value,
    };

    console.log(datas);
  }
}

const closeModal = document.querySelector(".fa-times");
const btnOpenModal = document.querySelectorAll(".open-modal-form");
const submitForm = document.querySelector(".form-submit");

document.addEventListener("load", () => {
  const close = document.querySelector(".form");
  close.style.display = "none";
  test();
});

closeModal.addEventListener("click", () => {
  const closeForm = new handleModal();
  closeForm.closeModalForm();
});

submitForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const submit = new handleModal();
  submit.sendData();
});
