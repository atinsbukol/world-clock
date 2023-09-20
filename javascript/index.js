// Los Angeles
function updateTime () {

let losAngelesElement = document.querySelector("#los-angeles")
let loasAngelesDateElement = losAngelesElement.querySelector(".date")
let loasAngelesTimeElement = losAngelesElement.querySelector(".time")
let losAgelesTime = moment().tz("America/Los_Angeles")



loasAngelesDateElement.innerHTML = losAgelesTime.format("MMMM Do YYYY")
loasAngelesTimeElement.innerHTML = `${losAgelesTime.format("hh:mm:ss:SS")} <small>${losAgelesTime.format("A")}</small>`







// Paris


let parisElement = document.querySelector("#paris")
let parisDateElement = parisElement.querySelector(".date")
let parisTimeElement = parisElement.querySelector(".time")
let parisTime = moment().tz("Europe/Paris")



parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY")
parisTimeElement.innerHTML = `${parisTime.format("hh:mm:ss:SS")} <small>${parisTime.format("A")}</small>`
}

setInterval(updateTime, 1)

