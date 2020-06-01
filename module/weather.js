import * as Util from "./util.js";

export const weather = document.querySelector(".js-weather");

export const API_KEY = "854b2621a4b31be1eb45457bfa2e182c",
  COORDS = "coords";

//Rendering logic.
//Load coordinate when rendered.
export function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    const parsedCoords = JSON.parse(loadedCoords);
    getWeather(parsedCoords.latitude, parsedCoords.longitude);
  }
}

//Ask for coordinates if there aren't value in LS.
export function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

//Handle geo location if found.
export function handleGeoSuccess(position) {
  const latitude = position.coords.latitude,
    longitude = position.coords.longitude;

  const coordsObj = {
    latitude,
    longitude,
  };

  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}

//Alert error if not found geo location.
export function handleGeoError() {
  alert("Can't access geo location.");
}

//Save coordinate in LS.
export function saveCoords(obj) {
  localStorage.setItem(COORDS, JSON.stringify(obj));
}

//Get weather using geo location.
export function getWeather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      const temperature = json.main.temp,
        place = json.name,
        text = `${temperature} @ ${place}`;
      Util.fadeIn(weather, text);
    });
}

export * from "./weather.js";
