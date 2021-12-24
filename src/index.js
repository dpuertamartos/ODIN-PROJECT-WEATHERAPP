import css from "./style.css"
import createCard from "./createWeatherCard.js"
import createLoading from "./loading.js"
import {destroyLoading} from "./loading.js"

const API_KEY = "f0ff2b9afab2f7a7896bbb38273a7a85"

const BASE_URL = "https://api.openweathermap.org/data/2.5"
const BASE_URL_ICON = "http://openweathermap.org/img/wn/"
const ICON_ZOOM = "4x"

const apiCall = async (loc) => {
    console.log("hey")
    createLoading()
    const response = await fetch(`${BASE_URL}/weather?q=${loc}&units=metric&appid=${API_KEY}`)
    const data = await response.json()
    destroyLoading()
    return data
}

const cleanJson = async (loc) => {
    const jsondata = await apiCall(loc)
    console.log(jsondata)
    const newjson={
        name: jsondata.name,
        weather: jsondata.weather[0].main,
        weatherDescription: jsondata.weather[0].description,
        icon_url: `${BASE_URL_ICON}/${jsondata.weather[0].icon}@${ICON_ZOOM}.png`,
        temp: jsondata.main.temp,
        humidity: jsondata.main.humidity,
        windspeed: jsondata.wind.speed,
    }
    return newjson
}

const createWeather = async (city) => {
    const data = await cleanJson(city)

}

const cityInput = document.querySelector("#inputCity")
const submitButton = document.querySelector(".submitCity")
submitButton.addEventListener("click", ()=>{
    cleanJson(cityInput.value)
    cityInput.value=""
})