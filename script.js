const apiKey = "e7fe34eefb830ee1426fb2a1ae73abde"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&lang=ru&q="

const searchInp = document.querySelector(".search-input");

async function checkWeather(city = "минск") {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    const data = await response.json();
    
    document.querySelector(".main-content__city").innerHTML = data.name
    if (data.name == undefined) {
        document.querySelector(".main-content__city").innerHTML = "Город не найден"
    }
    document.querySelector(".main-content__temperature").innerHTML = Math.round(data.main.temp) + "&deg;C"
}


checkWeather()

searchInp.addEventListener("keyup", (e)=> {
    if (e.code === "Enter") checkWeather(searchInp.value);
})
