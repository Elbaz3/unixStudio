const list = document.querySelector(".nav__wrapper__list");
const menuIcon = document.querySelector(".header__menu");
const scrollUp = document.querySelector(".scroll-top");

menuIcon.addEventListener("click", () => {
  list.classList.toggle("toggle-open");
  menuIcon.classList.toggle("rotate-icon");
});

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
