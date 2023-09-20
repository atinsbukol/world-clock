// Los Angeles
function updateTime () {

let losAngelesElement = document.querySelector("#los-angeles")
if (losAngelesElement) {
let loasAngelesDateElement = losAngelesElement.querySelector(".date")
let loasAngelesTimeElement = losAngelesElement.querySelector(".time")
let losAgelesTime = moment().tz("America/Los_Angeles")



loasAngelesDateElement.innerHTML = losAgelesTime.format("MMMM Do YYYY")
loasAngelesTimeElement.innerHTML = `${losAgelesTime.format("hh:mm:ss")} <small>${losAgelesTime.format("A")}</small>`

}

// Paris


let parisElement = document.querySelector("#paris")

if (parisElement) {
let parisDateElement = parisElement.querySelector(".date")
let parisTimeElement = parisElement.querySelector(".time")
let parisTime = moment().tz("Europe/Paris")



parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY")
parisTimeElement.innerHTML = `${parisTime.format("hh:mm:ss")} <small>${parisTime.format("A")}</small>`
}}

setInterval(updateTime, 1000)

function updateCity (event) {
    let cityTimeZone = event.target.value

    if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess()
    }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1]
    let cityTime = moment().tz(cityTimeZone)
    let citiesElement = document.querySelector("#cities")
    citiesElement.innerHTML = `
    <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>

          <div class="time">${cityTime.format("hh:mm:ss")}<small>${cityTime.format("A")}</small>
          </div>
        </div>
        <a href="index.html">All Cities</a>
    `
}

let citiesSelectElement = document.querySelector("#city")
citiesSelectElement.addEventListener("change", updateCity)




