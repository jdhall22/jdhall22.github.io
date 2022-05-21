//const apiURL = "https://api.openweathermap.org/data/2.5/weather?lat=42.09&lon=-111.87&units=imperial&appid=22f3c3cce0748bdd502dd953d20d1a3b";
const requestURL = 'https://api.openweathermap.org/data/2.5/weather?lat=42.09&lon=-111.87&units=imperial&appid=22f3c3cce0748bdd502dd953d20d1a3b';
const block = document.querySelector(".block");

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const weather = jsonObject["weather"];
    weather.forEach(displayWeather);
  });

  function displayWeather(weather) {
      let temp = document.createElement("p");
      let high = document.createElement("p");
      let wind = document.createElement("p");
      let humid = document.createElement("p");
      let speed = document.createElement("p");

      weather.innerHTML = '<strong>Current: </strong> ${weather.temp}<br> <strong>High: </strong> ${weather.temp_max}<br> <strong>Wind Chill: </strong> ${weather.feels_like}<br> <strong>Humidity: </strong> ${weather.humidity}<br> <strong>Wind Speed: </strong> ${weather.speed}';

    
  }