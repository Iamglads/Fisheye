document.querySelector(".toHide").addEventListener("click", () => {
  document.querySelector(".toHide").style.display = "none";
  document.querySelector(".toShow").style.display = "block";
});

document.querySelector(".fa-chevron-up").addEventListener("click", () => {
  document.querySelector(".toShow").style.display = "none";
  document.querySelector(".toHide").style.display = "flex";
});

document.querySelector(".toHide").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    document.querySelector(".toHide").style.display = "none";
    document.querySelector(".toShow").style.display = "block";
  }
});

document.querySelector(".fa-chevron-up").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    document.querySelector(".toShow").style.display = "none";
    document.querySelector(".toHide").style.display = "flex";
  }
});
