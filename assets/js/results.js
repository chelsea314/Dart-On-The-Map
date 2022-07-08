$(".is-info").on('click',searchLocation)

function searchLocation(){
  var lat;
  let lon;
let geoSearch = $("#resultSearch")

let geoSearchUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${geoSearch.val()}&limit=1&appid=032ac5bb5a798a3a36948d8599fceafc`
fetch(geoSearchUrl)
.then(response => response.json())
  .then(data => {
    lat = data[0].lat
    lon = data[0].lon
    geoSearch.val("")
  })
  .then(function displayWeather(){
    weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=877b2c2b745ff4c56b4c20032441b906`
    fetch(weatherUrl)
    .then(response => response.json())
  .then(data => {
    weatherArr = [data.list[0],data.list[8],data.list[16]]
    weatherArr.forEach(e=>{
      console.log(`temp:${e.main.temp}\ndesc:${e.weather[0].description}`)
    })
  })
  .catch(error => console.log('error', error));
  })
  .catch(error => console.log('error', error));
  

}


$('#convert-Btn').on('click',convertCurrency)

function convertCurrency(){
  var myHeaders = new Headers();
myHeaders.append("apikey", "UB6XaduROqPg9b6Y4lom3zo2FNX1CVL4");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};
  let convertingAmount = $("#amount").val()
  let fromCurrency = $("#from").val()
  let toCurrency =  $("#to").val()

  fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${toCurrency}&from=${fromCurrency}&amount=${convertingAmount}`, requestOptions)
  .then(response => response.json())
  .then(data => {
     $('#converted').text(data.result)
  })
  .catch(error => console.log('error', error));

}