const scriptURL = 'https://script.google.com/macros/s/AKfycbzUR3lYlA1D15td6pWbbbS6otoWwYw3ev7CB2AxV1H3CT9Rh2qztp-55q0QfzhyFOe_Nw/exec'
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
  updateDate()
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(
        (response) => console.log('Success!', response)
    )
    .then(success())
    .then(reset())
    .catch(error => console.error('Error!', error.message))
})
    
    
function success(){
    document.getElementById("my-form-status").innerHTML = "The information sent to Tony Chan sucessfully."
}
function reset(){
    document.getElementById("my-form").reset();
}


function updateDate(){
  let today = new Date();
  let time = today.getFullYear() + '-' + ("0" + (today.getMonth() + 1)).slice(-2) + '-' +  ("0" + (today.getDate() + 1)).slice(-2)+ "T" + ("0" + today.getHours()).slice(-2) + ":" + ("0" + today.getMinutes()).slice(-2);
  document.getElementById("time-date").setAttribute("value", time.toString()); 
}

