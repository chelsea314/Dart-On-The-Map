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
  })
  .then(function giveResults(){
    console.log(lat)
    console.log(lon)
  })
  .catch(error => console.log('error', error));
  geoSearch.val("")

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