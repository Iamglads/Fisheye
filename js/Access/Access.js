const btn = document.querySelector(".open-form");
const firstname = document.querySelector(".firstname");
const focusableElements =
  'button, input, textarea, [tabindex]:not([tabindex="-1"])';
const modal = document.querySelector(".modal");

const firstElement = modal.querySelectorAll(focusableElements)[0];
const focusableContent = modal.querySelectorAll(focusableElements);
const lastElement = focusableContent[focusableContent.length - 1];

document.addEventListener("keydown", (e) => {
  let isTabPressed = e.key === "Tab";

  if (!isTabPressed) {
    return;
  }

  if (e.shiftKey) {
    if (document.activeElement === firstElement) {
      lastElement.focus();
      e.preventDefault();
    }
  } else {
    if (document.activeElement === lastElement) {
      firstElement.focus();
      e.preventDefault();
    }
  }
});
