let now = new Date();
let h6 = document.querySelector("h6");
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thrusday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()];
let date = now.getDate();
let year = now.getFullYear();
let hour = now.getHours();
let minutes = now.getMinutes();
h6.innerHTML = `${day}, ${month} ${date} ${year}, ${hour} : ${minutes}`;

function showTemperature(response) {
  document.querySelector("h2").innerHTML = response.data.name;
  document.querySelector("p").innerHTML =
    Math.round(response.data.main.temp) + "°C";
}

function searchedcity(event) {
  event.preventDefault();
  let apiKey = "5b582e413e399c28874a89c57e26dd21";
  let city = document.querySelector("#enterCity").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}

let form = document.querySelector("#city-search");

form.addEventListener("submit", searchedcity);
