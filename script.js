// API CALLING
const btn = document.getElementById("SearchBtn");
const input = document.getElementById("city-input");

const city = document.getElementById("city-name");
const time = document.getElementById("city-time");
const temperature = document.getElementById("city-temp");
const feeltemp = document.getElementById("Feel-temp");
const weather = document.getElementById("weather");

const currentCityBtn = document.getElementById("curr-city");

// http://api.weatherapi.com/v1/current.json?key=b2b047a7577f4660a4a193329243005&q=London&aqi=yes

async function getData(cityName) {
  const promise = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=b2b047a7577f4660a4a193329243005&q=${cityName}&aqi=yes`
  );

  return promise.json();
}


btn.addEventListener("click", async () => {
  const val = input.value; //input.value -> to get the value input in input feild by the user

  const result = await getData(val);
  // console.log(result)
  city.innerText = `${result.location.name}, ${result.location.region}, ${result.location.country}`;

  time.innerText = `${result.location.localtime}`;

  weather.innerText = `${result.current.condition["text"]}`;

  temperature.innerText = `${result.current.temp_c} °c`;

  feeltemp.innerText = `${result.current.feelslike_c} °c`;
});


