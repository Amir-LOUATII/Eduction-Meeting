// global import
import "./toggleMenu.js";
import "./stickyNav.js";
import "./footer.js";
// specific import
import { getElement, setLocalStorage } from "./utils.js";
import { events } from "./data.js";
import { displayMeetings } from "./displayMeetings.js";
// select item
const upcomming = getElement("#upcomming-meeting");
// window content loaded
window.addEventListener("DOMContentLoaded", function () {
  setLocalStorage("events", events);
  const myEvent = events.filter((item) => item.upcomming);
  displayMeetings(myEvent, upcomming, true);
});

// start scrolling
const header = getElement("header");
const headerHeight = header.getBoundingClientRect().height;
const menuItem = header.querySelectorAll("Li a");
const sections = document.querySelectorAll("section");
menuItem.forEach((a) => {
  a.addEventListener("click", function (e) {
    const sectionName = a.getAttribute("href");
    if (sectionName.startsWith("#")) {
      e.preventDefault();
      const sectName = sectionName.slice(1);
      sections.forEach((section) => {
        const id = section.getAttribute("id");
        if (sectName === id) {
          const sectionStart = section.getBoundingClientRect().top;
          window.scrollTo(0, sectionStart - headerHeight / 2);
        }
      });
    }
  });
});
// end scrolling
// start apply
// select item
const apply = getElement(".apply");
const theTitle = apply.querySelectorAll("h3");
const chevronRight = apply.querySelectorAll(".fa-chevron-right");
const chevronDown = apply.querySelectorAll(".fa-chevron-down");
const cont = apply.querySelectorAll(".cont");
const title = apply.querySelectorAll(".title");

// text
title.forEach((element) => {
  element.addEventListener("click", function (e) {
    // add clicked class to h3
    theTitle.forEach((title) => {
      if (title.parentElement === e.currentTarget) {
        title.classList.toggle("clicked");
      } else {
        title.classList.remove("clicked");
      }
    });
    // display chevron down
    chevronRight.forEach((i) => {
      if (i.parentElement === e.currentTarget) {
        i.classList.toggle("hide");
      } else {
        i.classList.add("hide");
      }
    });
    // hide chevrondown
    chevronDown.forEach((i) => {
      if (i.parentElement === e.currentTarget) {
        i.classList.toggle("hide");
      } else {
        i.classList.remove("hide");
      }
    });
    // display content
    cont.forEach((content) => {
      if (content.parentElement == e.currentTarget.parentElement) {
        content.classList.toggle("overflow-visible");
      } else {
        content.classList.remove("overflow-visible");
      }
    });
  });
});

// end apply

// start facts

const facts = getElement("#facts");
const values = document.querySelectorAll(".value");
const pourcentage = document.querySelector(".pourcentage");
let started = false;

window.onscroll = function () {
  if (window.scrollY >= facts.offsetTop - 200) {
    if (!started) {
      pourcentage.style.cssText = "display:inline-block";
      values.forEach((div) => countFacts(div));
      started = true;
    }
  }
};

function countFacts(e) {
  const goal = e.dataset.goal;
  let counter = setInterval(() => {
    e.textContent++;
    if (e.textContent == goal) {
      clearInterval(counter);
    }
  }, 2000 / goal);
}

// end facts

// start contact

const userName = getElement("#name");
const subject = getElement("#subject");
const subjectText = getElement("textarea");
const msg = getElement("#msg");

// username validation
userName.addEventListener("input", function () {
  msg.classList.remove("visible");
  if (!userName.value.includes(" ")) {
    msg.classList.add("visible");
  } else {
    msg.classList.remove("visible");
  }
});

document.forms[0].onsubmit = function (e) {
  let nameValidation = false;
  let subjectValidation = false;
  let textValidation = false;
  // name validation
  msg.classList.remove("visible");
  if (userName.value.includes(" ") != true && userName.value != "") {
    nameValidation = true;
  }

  // subject validation
  if (subject.value != "" && subject != " ") {
    subjectValidation = true;
  }
  // subject text validation
  if (
    subjectText.value.length < 200 &&
    subjectText.value.length > 1 &&
    subjectText.value != " "
  ) {
    textValidation = true;
  }

  if (
    nameValidation == false ||
    subjectValidation == false ||
    textValidation == false
  ) {
    e.preventDefault();
  }
};
