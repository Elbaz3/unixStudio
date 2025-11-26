const list = document.querySelector(".nav__wrapper__list");
const menuIcon = document.querySelector(".header__menu");
const scrollUp = document.querySelector(".scroll-top");
const footer = document.querySelector(".footer");

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

window.addEventListener("scroll", () => {
  if (window.scrollY > 400 && window.scrollY < footer.offsetTop) {
    scrollUp.classList.add("fixed-scroll");
  } else {
    scrollUp.classList.remove("fixed-scroll");
  }
});
