const scriptURL = 'https://script.google.com/macros/s/AKfycbzUR3lYlA1D15td6pWbbbS6otoWwYw3ev7CB2AxV1H3CT9Rh2qztp-55q0QfzhyFOe_Nw/exec'
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
  updateDate()
  e.preventDefault()
  fetch(scriptURL, {method: 'POST', body: new FormData(form)})
    .then(
        (response) => console.log('Success!', response)
    )
    .then(success())
    .then(reset())
    .catch(error => console.error('Error!', error.message))
})
    
    
function success(){
    document.getElementById("my-form-status").innerHTML = "The information sent to Tony Chan successfully."
}
function reset(){
    document.getElementById("my-form").reset();
}


function updateDate(){
  let today = new Date();
  let time = today.getFullYear() + '-' + ("0" + (today.getMonth() + 1)).slice(-2) + '-' +  ("0" + (today.getDate() + 1)).slice(-2)+ "T" + ("0" + today.getHours()).slice(-2) + ":" + ("0" + today.getMinutes()).slice(-2);
  document.getElementById("time-date").setAttribute("value", time.toString()); 
}


//fetch weather info
const weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=hongkong&units=metric&appid=631c6cff00ef11048ff8b2102fd50352"
    
window.addEventListener("DOMContentLoaded", e => {
    fetch(weatherURL)
    .then(res => {return res.json()})
    .then(data => renewDiv (data.main.temp, data.main.humidity, data.weather[0].icon))
})

function renewDiv (temp, hum, icon){
    document.querySelector("#temp").innerHTML = "Temperature: " + temp
    document.querySelector("#humidity").innerHTML = "humidity: " + hum
    document.querySelector("#weather-icon").setAttribute("src", "https://openweathermap.org/img/wn/" + icon + ".png")
}