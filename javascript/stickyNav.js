import { getElement } from "./utils.js";
// select item
const header = getElement("header");
const headerHeight = header.getBoundingClientRect().height;
const logo = getElement("#logo");
const menuItem = header.querySelectorAll("Li a");

window.addEventListener("scroll", function () {
  if (window.scrollY > headerHeight) {
    header.classList.add("header-sticky");
    logo.classList.add("logo-sticky");
    menuItem.forEach((element) => {
      element.classList.add("sticky-nav");
    });
  } else {
    header.classList.remove("header-sticky");
    logo.classList.remove("logo-sticky");
    menuItem.forEach((element) => {
      element.classList.remove("sticky-nav");
    });
  }
});
