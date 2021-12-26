// specific import
import { getElement } from "./utils.js";
// select item
const toggle = getElement(".fa-bars");
const menu = getElement(".menu");
toggle.addEventListener("click", function () {
  menu.classList.toggle("visible");
});

const pages = getElement("#pages");
const hiddenLi = document.querySelectorAll(".hidden");
pages.addEventListener("click", function () {
  hiddenLi.forEach((li) => li.classList.toggle("hidden"));
});

window.addEventListener("scroll", function () {
  const menuHeight = menu.getBoundingClientRect().height;
  const headerHeight = getElement("header").getBoundingClientRect().height;
  if (window.scrollY > menuHeight + headerHeight) {
    menu.classList.remove("visible");
  }
});
