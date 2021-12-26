// set item in the local storage
const setLocalStorage = (key, value) => {
  const theValue = JSON.stringify(value);
  localStorage.setItem(key, theValue);
};

// get item from local storage
const getLocalStorage = (item) => {
  const value = JSON.parse(localStorage.getItem(item));
  if (value) {
    return value;
  } else return [];
};

// getElement function

const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error(`please check there is no such element: ${selection}`);
};

function formatPrice(price) {
  const formatedPrice = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
  }).format((price / 100).toFixed(2));
  return formatedPrice;
}
export { setLocalStorage, getLocalStorage, formatPrice, getElement };
