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
