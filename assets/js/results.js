$('#searchBtn').on('click',searchLocation)

 
function searchLocation(){
  let lat;
  let lon;

  let searched = $("#resultSearch")
  let geoSearchUrl =  `http://api.openweathermap.org/geo/1.0/direct?q=${searched.val()}&limit=1&appid=032ac5bb5a798a3a36948d8599fceafc`

  fetch(geoSearchUrl)
  .then(response => response.json())
  .then(data => {
    lat = data[0].lat
    lon = data[0].lon
    displayWeather(lat,lon)
    displayActivities("foods",lat,lon)
  })
}


function displayWeather(Lat,Lon){
  weatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${Lat}&lon=${Lon}&units=imperial&appid=9309cef4ed7aea83116c9db1984a5503`
  fetch(weatherUrl)
  .then(response => response.json())
  .then(data =>{
   let weatherArr = [data.daily[0],data.daily[1],data.daily[2]]
   console.log(weatherArr)
   weatherArr.forEach(e=>{
    console.log(`max:${e.temp.max}\nmin:${e.temp.min}\n${e.weather[0].description}`)
   })
  })
}

function displayActivities(filter,Lat,Lon){
  let filteredArr = []

  let activitiesUlr = `https://opentripmap-places-v1.p.rapidapi.com/en/places/radius?radius=500&lon=${Lon}&lat=${Lat}`
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'e4e16440e4msh33e5ed6142ae823p18048ejsn9a8190f62ac2',
      'X-RapidAPI-Host': 'opentripmap-places-v1.p.rapidapi.com'
    }
  };

  fetch(activitiesUlr,options)
  .then(response => response.json())
  .then(data =>{
    
    data.features.forEach(e=>{
      let xid  = e.properties.xid
      const options1 = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'e4e16440e4msh33e5ed6142ae823p18048ejsn9a8190f62ac2',
          'X-RapidAPI-Host': 'opentripmap-places-v1.p.rapidapi.com'
        }
      };
      
      fetch('https://opentripmap-places-v1.p.rapidapi.com/en/places/xid/'+xid, options1)
        .then(response => response.json())
        .then(dataResult => {
            // console.log(dataP.sources.attributes.length)
            if(dataResult.sources.attributes.length > 1){
              console.log(dataP)
            }
          
        })
    })
  })
}

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

