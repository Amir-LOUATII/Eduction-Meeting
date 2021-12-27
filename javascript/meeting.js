// golabal import
import "./toggleMenu.js";
import "./stickyNav.js";
import "./footer.js";
// specific import
import { formatPrice, getElement, getLocalStorage } from "./utils.js";

const events = getLocalStorage("events");
window.addEventListener("DOMContentLoaded", function () {
  const id = window.location.href.substr(
    window.location.href.indexOf("=") + 1,
    1
  );
  if (!isNaN(parseFloat(id))) {
    displayEvent(id);
  }
});

function displayEvent(id) {
  console.log(id);
  const event = events.filter((item) => {
    return item.id == id;
  })[0];
  console.log(event);
  const meeting = getElement(".meeting");
  const {
    name,
    date: { day, month },
    price,
    image,
  } = event;
  console.log(name);
  const newHTML = `<div class="container">
  <div class="box">
    <span>${formatPrice(price)}</span>
    <img
      src=${image}
      alt="Images of ${name}"
    />
    <div class="date">
      <span>${month} </span>
      <span>${day}</span>
    </div>

    <div class="caption">
      <h2 class="title">${name}</h2>
      <p class="adress">
        Recreio dos Bandeirantes, Rio de Janeiro - RJ, 22795-008, Brazil
      </p>
      <div class="description">
        <p>
          This is an edu meeting HTML CSS template provided by
          <span
            ><a href="https://templatemo.com/">
              TemplateMo website.</a
            ></span
          >
          This is a Bootstrap v5.1.3 layout. If you need more free website
          templates like this one, please visit our website TemplateMo.
          Please tell your friends about our website. Thank you. If you
          want to get the latest collection of HTML CSS templates for your
          websites, you may visit
          <span
            ><a href="https://www.toocss.com/">Too CSS website.</a></span
          >
          If you need a working contact form script, please visit our
          contact page for more info.
        </p>
        <p>
          You are allowed to use this edu meeting CSS template for your
          school or university or business. You can feel free to modify or
          edit this layout. You are not allowed to redistribute the
          template ZIP file on any other template website. Please contact
          us for more information.
        </p>
      </div>
      <div class="details">
        <div class="hours">
          <h2>Hours</h2>
          <span>Monday - Friday: 07:00 AM - 13:00 PM</span>
          <span>Saturday- Sunday: 09:00 AM - 15:00 PM </span>
        </div>
        <div class="location">
          <h2>Location</h2>
          <span>Recreio dos Bandeirantes, </span>
          <span>Rio de Janeiro - RJ, 22795-008, Brazil </span>
        </div>
        <div class="booking">
          <h2>Book</h2>
          <span>010-020-0340 </span>
          <span>090-080-0760 </span>
        </div>
      </div>
    </div>
  </div>
</div>`;
  meeting.innerHTML = newHTML;
}
