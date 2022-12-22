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
const referenceContainer = document.querySelector("#reference");      //get Element
referenceContainer.innerHTML = DATA.data //maping through each and render item card
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

const clientElement = document.querySelector("#client");      //Client number
const employeeElement = document.getElementById("employee");  //Employee number
const userElement = document.getElementById("user");          //User element

function initCounter(from, to, element, interval) {
  let currentValue = from;
  setInterval(() => {
    currentValue += 1;
    element.innerHTML = currentValue;
    if (currentValue == to) {
      currentValue = from;
    }
  }, interval);
}
initCounter(3000, 3003, clientElement, 1000);
initCounter(1, 180, employeeElement, 100);
initCounter(10000, 11000, userElement, 1000);

// Subscribe button

const form = document
  .getElementById("subcribe__form")
  .addEventListener("submit", submitHandler);
const input = document.getElementById("subscribe__input__id");
const dialog = document.querySelector("dialog");
let errorMessage = document.querySelector(".error");
errorMessage.style.visibility = "hidden";
function submitHandler(event) {
  event.preventDefault();
  switch (true) {     // Error handler
    case input.value.trim().length == 0:  //Empty input
      errorMessage.innerHTML = "Please fill the input";
      errorMessage.style.visibility = "visible";
      setTimeout(() => {
        errorMessage.style.visibility = "hidden";
      }, 3000);
      break;
    case input.value.trim().length < 10:    //too short
      errorMessage.innerHTML = "Input should longer than 8 characters";
      errorMessage.style.visibility = "visible";
      setTimeout(() => {
        errorMessage.style.visibility = "hidden";
      }, 3000);
      break;
    default:
      dialog.showModal();
  }
}
function closeDialog() {
  dialog.close();
}
