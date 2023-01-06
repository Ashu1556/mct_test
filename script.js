let input_box = document.getElementById("input_box");
const search_box = document.getElementById("search-btn");
const weather = document.getElementById("weather_image");
const temperature = document.getElementById("temperature");
const season = document.getElementById("season");
const wind = document.getElementById("wind");
const humidity = document.getElementById("humidity");
const clouds = document.getElementById("precipitation")

init();

function init(){
    search_box.addEventListener("click", renders);

}


async function renders(){
    let inputValue = input_box.value;
    const api   =   await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=e1a19f6c656159a30867b281b7dabd3a`);
    const textBody = await api.text();
    const jsonData = JSON.parse(textBody);
    console.log(jsonData);
    const weatherDescription = jsonData.weather[0].description
    const weatherIcon = jsonData.weather[0].icon
    const temperature = jsonData.main.temp
    const humidity = jsonData.main.humidity
    const windSpeed = jsonData.wind.speed
    console.log(windSpeed);
    const cloudiness = jsonData.clouds.all
    season.innerText = weatherDescription
    weather.setAttribute('src', `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`)
    temperature.innerHTML = `${temperature}&deg;F`;
    wind.innerText = `${windSpeed}km`;
    humidity.innerText = `${humidity}`;
    clouds.innerText = `${cloudiness}%`;
}