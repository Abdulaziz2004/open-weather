const container = document.querySelector(".container");
const loader = document.querySelector(".lds-dual-ring");
const searchBox = document.querySelector(".search-box");

fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    loader.style.display = "none";

    data.forEach((country) => {
      const html = `
                <div class="country">
                    <img src=${country.flags.png} alt="">
                    <h2>${country.name.common}</h2>
                    <b>${country.population}</b>
                    <p>${renderCurrencies(country.currencies)}</p>
                </div>
            `;
            console.log(country)
      container.insertAdjacentHTML("beforeend", html);
    });
  });


searchBox.addEventListener("change", function () {
  fetch(`https://restcountries.com/v3.1/name/${searchBox.value}`)
    .then((response) => response.json())
    .then((country) => {
      container.innerHTML = "";
      const html = `
          <div class="country-input">
            <img src=${country[0].flags.png} alt="">
            <h2>${country[0].name.common}</h2>
            <b>${country[0].population}</b>
            <p>${renderCurrencies(country[0].currencies)}</p>
        </div>
      `;
      container.insertAdjacentHTML("beforeend", html);
    });
  searchBox.value = "";
});

function renderCurrencies(currencies) {
  for (let i in currencies) {
    return currencies[i].name;
  }
}

// function setQuary(e) {
//   if (e.keyCode == 13) {
//     getResult(searchBox.value);
//     console.log(searchBox.value);
//   }
// }

// function getResult(query) {

// }
