// golabal import
import "./toggleMenu.js";
import "./stickyNav.js";
import "./footer.js";
// specifci import
import { getElement, getLocalStorage, setLocalStorage } from "./utils.js";
import { displayMeetings } from "./displayMeetings.js";
import { events } from "./data.js";

// select items

const content = getElement(".meetings .content");
window.addEventListener("DOMContentLoaded", function () {
  let events = getLocalStorage("events");
  displayMeetings(
    events.filter((item) => item.category != "none"),
    content
  );

  displayMeet(events);
  function displayMeet(events) {
    //   setup filters btns
    // get all categories
    let categories = events.map((item) => {
      const { category } = item;
      return category;
    });
    categories = categories.filter((item) => item !== "none");
    categories = categories.reduce(
      (acc, curr) => {
        acc.push(...curr);
        return acc;
      },
      ["ALL"]
    );
    categories = Array.from(new Set(categories)).sort();
    // display btns
    const btnContainer = getElement(".select");
    btnContainer.innerHTML = categories
      .map((item, index) => {
        let active = "";
        if (index == 0) {
          active = "active";
        }
        return ` <div class="choice ${active}" data-category="${item}">${item}</div>`;
      })
      .join("");
    //   selelct btn
    const btns = document.querySelectorAll(".choice");
    btns.forEach((btn) => {
      btn.addEventListener("click", function (e) {
        btns.forEach((bt) => {
          bt.classList.add("active");
          if (bt !== e.currentTarget) {
            bt.classList.remove("active");
          }
        });
        // get btn category
        const category = e.currentTarget.dataset.category;
        // filter the data with btn category
        const filteredData = events.filter((item) =>
          item.category.includes(category)
        );
        // display items
        displayMeetings(filteredData, content, false);
        if (category == "ALL") {
          displayMeetings(
            events.filter((item) => item.category != "none"),
            content,
            false
          );
        }
      });
    });
  }
});
