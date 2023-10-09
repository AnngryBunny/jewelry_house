window.onload = function () {
  const nav_burger_btn = document.querySelector(".nav__burger-btn");
  const nav_list = document.querySelector(".nav__list");

  nav_burger_btn.addEventListener("click", function () {
    nav_burger_btn.classList.toggle("nav__burger-btn--is-active");
    nav_list.classList.toggle("nav__list--is-active");
  });
};
