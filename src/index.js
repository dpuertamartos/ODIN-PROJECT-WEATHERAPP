const API_KEY = "f0ff2b9afab2f7a7896bbb38273a7a85"

const BASE_URL = "https://api.openweathermap.org/data/2.5"
const API_URL = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&appid={API key}"
const location = "LONDON"

const apiCall = async (loc) => {
    const response = await fetch(`${BASE_URL}/weather?q=${loc}&units=metric&appid=${API_KEY}`)
    const data = await response.json()
    return data
}

const cleanJson = async (loc) => {
    const jsondata = await apiCall(loc)
    newjson={
        name: jsondata.name,
        weather: jsondata.weather[0].main,
        weatherDescription: jsondata.weather[0].description,
        temp: jsondata.main.temp,
        humidity: jsondata.main.humidity,
        windspeed: jsondata.wind.speed,
    }
    console.log(newjson)
}


cleanJson(location)