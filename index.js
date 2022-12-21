const DATA = {
  data: [
    {
      id: 1,
      imgUrl: "https://logo-logos.com/2016/10/Bosch_logo_slogan.png",
      name: "Robert Bosch",
      description: "Bosch is a multinational engineering and electronics name",
    },
    {
      id: 2,
      imgUrl:
        "https://seeklogo.com/images/T/the-body-shop-logo-970611A9F1-seeklogo.com.png",
      name: "The Body Shop",
      description:
        "The Body Shop is a global beauty brand and it has more than 3,000 stores in more than 60 countries",
    },
    {
      id: 3,
      imgUrl: "https://www.rentle.io/hubfs/lapland%20hotels.png",
      name: "Lapland Hotels",
      description:
        "Lapland Hotels is the largest and the most diverse hotel chain in Lapland",
    },
    {
      id: 4,
      imgUrl:
        "https://www.pohjois-suomenmessut.fi/wp-content/uploads/2018/03/ikea-logo-5a82a337a6530.png",
      name: "IKEA",
      description: "IKEA is a multinational furniture store",
    },
  ],
};
// Reference
const referenceContainer = document.querySelector("#reference");
referenceContainer.innerHTML = DATA.data
  .map(
    (company) =>
      `<div class="item__container">
             <div class="item__logo flex">
               <img src=${company.imgUrl} alt="${company.name} logo" height="150px" width="200px"/>
            </div>
            <div class="item__content flex">
              <div class="item__title">${company.name}</div>
              <div class="item__description flex">${company.description}</div>
           </div>
          </div>`
  )
  .join("");
//Number Animation

const clientElement = document.querySelector("#client");
const employeeElement = document.getElementById("employee");
const userElement = document.getElementById("user");

console.log(clientNumber);

// function increasement(from, to, element,interval) {
//   let counter = setInterval(() => {
//     let currentValue = 0
//     from += 1;
//     element.innerHTML = currentValue;
//     console.log(startValue);
//     if (from == to) {
//       currentValue = from
//     } 
//   }, interval);
// }
// increasement(3000, 3003, clientElement, 1000);
// increasement(1, 180, employeeElement, 100);
// increasement(10000, 11000, userElement, 1000);
//Subscribe button

const form = document
  .getElementById("subcribe__form")
  .addEventListener("submit", submitListener);
const input = document.getElementById("subscribe__input__id");
const dialog = document.querySelector("dialog");
let errorMessage = document.querySelector(".error");
errorMessage.style.visibility = "hidden";
function submitListener(event) {
  event.preventDefault();
  console.log("submit");
  console.log(input.value);
  console.log(input.value.trim().length);
  switch (true) {
    case input.value.trim().length == 0:
      errorMessage.innerHTML = "Please fill the input";
      errorMessage.style.visibility = "visible";
      setTimeout(() => {
        errorMessage.style.visibility = "hidden";
      }, 3000);
      break;
    case input.value.trim().length < 10:
      console.log("Too short");
      errorMessage.innerHTML = "Input should longer than 8 characters";
      errorMessage.style.visibility = "visible";
      setTimeout(() => {
        errorMessage.style.visibility = "hidden";
      }, 3000);
      break;
    default:
      // code block
      dialog.showModal();
  }
}
function closeDialog() {
  dialog.close();
}
