const date = new Date();
const theYear = date.getFullYear();
const theYearDOM = document.querySelector(".year");
theYearDOM.textContent = `${theYear}`;
