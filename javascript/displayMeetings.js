import { getElement, formatPrice } from "./utils.js";

const displayMeetings = (events, section, third) => {
  section.innerHTML = events
    .map((item) => {
      const {
        id,
        name,
        description,
        image,
        price,
        date: { day, month },
      } = item;
      let link = "meeting.html?id=";
      if (!third) {
        link = "meeting.html?id=";
      }
      return ` <a href=${link}${id} 
      ><div class="box" id=${id}>
        <span class="price">${formatPrice(price)}</span>
        <img
          src=${image}
          alt="Images of ${name}"
        />
        <div class="caption">
          <div class="date">
            <span class="month">${month} </span>
            <span class="day">${day}</span>
          </div>
          <div class="description">
            <h4 class="event-name">${name}</h4>
            <p class="descript">
        ${description}
            </p>
          </div>
        </div>
      </div></a>`;
    })
    .join("");
};
function displayFilterBtn(myAarry) {
  // const filter
}
export { displayMeetings };
