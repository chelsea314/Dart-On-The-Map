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
    weatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=9309cef4ed7aea83116c9db1984a5503`
    fetch(weatherUrl)
    .then(response => response.json())
  .then(data => {
    console.log(data)
    let index = 1;
    weatherArr = [data.daily[0],data.daily[1],data.daily[1]]
    console.log(weatherArr)
    
    // $("#weatherDiv").html = ""
    // weatherArr.forEach(e=>{
    //   // console.log(`temp:${e.main.temp}\ndesc:${e.weather[0].description}`)
    //   let dayDiv = $("<div>")
    //   dayDiv.append(`temperature:${e.main.temp}`)
    //   let iconIMG = $("<img>")
    //   iconIMG.attr("src",`http://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png`)
    //   dayDiv.append(iconIMG)
    //   $("#weatherDiv").append(dayDiv)
    // })
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