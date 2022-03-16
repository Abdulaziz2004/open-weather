// API => Application Programming Interface

// navigator.geolocation.getCurrentPosition()

// 123.1234.2345

// g-1todos.uz

// footbalmatches, awrstdyfughio54w567tiyuu

// GET

// kun.uz/assets/

// https://g-1todos.uz/todos
// https://g-1todos.uz/todos
// GET, https://g-1todos.uz/todos
// POST, https://g-1todos.uz/todos, {title: "Asdfghj"}
// DELETE, https://g-1todos.uz/todos, {id: 23}
// PUT, https://g-1todos.uz/todos, {id: 23, {title: "Asdfghj"}}


// XML, JSON

const request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all")
request.send()



const container = document.querySelector(".container")

request.addEventListener("load", function () {
    const response = JSON.parse(request.responseText)

    response.forEach(country => {
        const html = `
            <div class="country">
                <img src=${country.flags.png} alt="">
                <h2>${country.name.common}</h2>
                <b>${country.population}</b>
                <p>${renderCurrencies(country.currencies)}</p>
            </div>
        `
        container.insertAdjacentHTML("beforeend", html)
    })
})

function renderCurrencies(currencies) {
    for (let i in currencies) {
        return currencies[i].name
    }
}