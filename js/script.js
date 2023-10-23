"use strict";

window.onload = function () {
  /*Burger Menu*/
  const nav_burger_btn = document.querySelector(".nav__burger-btn");
  const nav_list = document.querySelector(".nav__list");

  nav_burger_btn.addEventListener("click", function () {
    nav_burger_btn.classList.toggle("nav__burger-btn--is-active");
    nav_list.classList.toggle("nav__list--is-active");
  });

  /*Slider*/

  const faq_item = document.querySelectorAll(".faq__item");

  faq_item.forEach(function (button) {
    //show li info
    button.addEventListener("click", function () {
      this.classList.toggle("faq__item--is-active");

      // close other li info while one is open
      if (button.classList.contains("faq__item--is-active")) {
        faq_item.forEach(function (button) {
          button.classList.remove("faq__item--is-active");
        });
        button.classList.toggle("faq__item--is-active");
      }
    });
  });
};
