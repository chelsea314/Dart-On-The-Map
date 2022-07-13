$('#searchBtn').on('click',function(){
  searchLocation($("#resultSearch").val())
})

 
function searchLocation(e){
  let lat;
  let lon;
  console.log(e)
  let geoSearchUrl =  `https://api.openweathermap.org/geo/1.0/direct?q=${e}&limit=1&appid=032ac5bb5a798a3a36948d8599fceafc`

  fetch(geoSearchUrl)
  .then(response => response.json())
  .then(data => {
    lat = data[0].lat
    lon = data[0].lon
    displayWeather(lat,lon)
    searchActivities("foods",lat,lon)
  })
}


function displayWeather(Lat,Lon){
  weatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${Lat}&lon=${Lon}&units=imperial&appid=9309cef4ed7aea83116c9db1984a5503`
  fetch(weatherUrl)
  .then(response => response.json())
  .then(data =>{
    $('#weatherResults').html("")
   let weatherArr = [data.daily[0],data.daily[1],data.daily[2]]
   weatherArr.forEach(e=>{
    let date = new Date(e.dt*1000)
    let dateText = `${date.getMonth()}/${date.getDate()}`
    let iconcode = e.weather[0].icon

    let container = $("<div>")
    let temps = $("<div>")
    temps.html(`<h1>max:${e.temp.max} min:${e.temp.min}</h1>`)
    let descDiv = $("<div>")
    let icon = $("<img>")
    icon.attr("src",`http://openweathermap.org/img/wn/${iconcode}@2x.png`)
    let description = $('<p>')
    description.text(e.weather[0].description)
    descDiv.append(description,icon)

    

    container.append(dateText,temps,descDiv)
    $('#weatherResults').append(container)
   })
  })
}

function searchActivities(filter,Lat,Lon){

  let activitiesUlr = `https://opentripmap-places-v1.p.rapidapi.com/en/places/radius?radius=16093.4&limit=50&lon=${Lon}&lat=${Lat}`
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key':'e4e16440e4msh33e5ed6142ae823p18048ejsn9a8190f62ac2',
      'X-RapidAPI-Host': 'opentripmap-places-v1.p.rapidapi.com'
    }
  };

  fetch(activitiesUlr,options)
  .then(response => response.json())
  .then(data =>{
    $("#resultsContainer").html("")
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
          let resultAmount = document.getElementById('resultsContainer').querySelectorAll('article').length
            if(dataResult.sources.attributes.length > 1 && resultAmount <5){
              let container = $("<article>")
              container.addClass("tile is-child notification borderGray backgroundKeppel")
              let title = $("<p>")
              title.addClass("title")
              title.text(dataResult.name)
              
              let description =  $("<p>")
              description.addClass("subtitle")
              description.text(dataResult.wikipedia_extracts.text)

              let linktag = $("<p>")
              linktag.html(`<a target="_blank" href="${dataResult.otm}">Show more at OpenTripMap</a>`)
              // container.innerhtml = `<p class="title">${data.name}</p><p class="subtitle">${data.wikipedia_extracts.html}</p><p><a herf=${data.otm}>read more here</a></p>`
              container.append(title,description,linktag)
              $("#resultsContainer").append(container)
              // console.log(index)
              
            }
          
        })
    })
  })
}
$("#convert-Btn").on('click',convertCurrency)
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

let storedSearch = localStorage.getItem("localSearch")
console.log("ex", storedSearch)
searchLocation(storedSearch)