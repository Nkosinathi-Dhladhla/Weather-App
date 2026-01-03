const API_KEY = "Your API key";
const cityName = document.getElementById("p1");
const mainTemp = document.querySelector("#heading h1");
const description = document.getElementById("p2");
const feelsLike = document.querySelector("#feelsLike h1");
const humidity = document.querySelector("#humidity h1");
const windSpeed = document.querySelector("#windSpeed h1");
const cityInput = document.getElementById("cityInp");
const searchBtn = document.getElementById("mag");

function getWeather(city) {
  const url = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${encodeURIComponent(city)}`;
  
  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data);


      cityName.textContent = data.location.name;
      mainTemp.textContent = data.current.temperature + "°C";
      description.textContent = data.current.weather_descriptions[0];
      feelsLike.textContent = data.current.feelslike + "°C";
      humidity.textContent = data.current.humidity + "%";
      windSpeed.textContent = data.current.wind_speed + " km/h";
    })
    .catch(err => {
      console.error(err);
      alert("City not found or API error!");
    });
}


searchBtn.addEventListener("click", () => {
  const city = cityInput.value || "Johannesburg";
  getWeather(city);
});


cityInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") getWeather(cityInput.value || "Johannesburg");
});

window.addEventListener("load", () => {
  getWeather("Johannesburg");
});