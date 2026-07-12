const cityInput = document.querySelector("#cityInput")
const searchBtn = document.querySelector('.searchBtn')
const cityName = document.querySelector('#cityName')
const temperature = document.querySelector('#temperature')
const condition  = document.querySelector('#condition ')
const wind = document.querySelector('#wind')
const visibility = document.querySelector('#visibility')
const humidity = document.querySelector("#humidity")
const weatherIcon = document.querySelector('#weatherIcon')


const apiKey = "ccc43894139be20df8875788b9c08e2a"

searchBtn.addEventListener('click', () =>{
    let city = cityInput.value

    if(city == ""){
        alert("Please enter a city name!")
        return;
    }

    getWeather(city)
})

async function getWeather(city) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

    let response = await fetch(url)
    let data = await response.json()

    console.log(data);

    cityName.innerHTML = data.name
    temperature.innerHTML = `${Math.round(data.main.temp)}`
    condition.innerHTML = data.weather[0].description
    humidity.innerHTML = `Humidity: ${data.main.humidity}%`
    wind.innerHTML = `Wind: ${data.wind.speed} km/h`
    visibility.innerHTML = `Visibility: ${data.visibility / 1000} km`
    weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
}