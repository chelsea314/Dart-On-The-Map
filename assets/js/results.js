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
    searchActivities("foods",lat,lon)
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
    let container = $("<div>")
    let temps = $("<div>")
    temps.html("<h1>max:ex min:ex</h1>")
    let descDiv = $("<div>")
    let icon = $("<img>")
    icon.attr("src","url(http://openweathermap.org/img/wn/10d@2x.png)")
    descDiv.append(icon,"description")

    

    container.append(temps,descDiv)
    $('#weatherResults').append(container)
    console.log(`max:${e.temp.max}\nmin:${e.temp.min}\n${e.weather[0].description}`)
   })
  })
}

// function searchActivities(filter,Lat,Lon){

//   let activitiesUlr = `https://opentripmap-places-v1.p.rapidapi.com/en/places/radius?radius=16093.4&limit=50&lon=${Lon}&lat=${Lat}`
//   const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': '50bbf92f8cmsh3f683fecdd8114dp171169jsn8652d923bcec',
//       'X-RapidAPI-Host': 'opentripmap-places-v1.p.rapidapi.com'
//     }
//   };

//   fetch(activitiesUlr,options)
//   .then(response => response.json())
//   .then(data =>{
//     console.log(data)
//     $("#resultsContainer").html("")
//     data.features.forEach(e=>{
//       let xid  = e.properties.xid
//       const options1 = {
//         method: 'GET',
//         headers: {
//           'X-RapidAPI-Key': '50bbf92f8cmsh3f683fecdd8114dp171169jsn8652d923bcec',
//           'X-RapidAPI-Host': 'opentripmap-places-v1.p.rapidapi.com'
//         }
//       };
//       var index = 0;
//       fetch('https://opentripmap-places-v1.p.rapidapi.com/en/places/xid/'+xid, options1)
//         .then(response => response.json())
//         .then(dataResult => {
//             if(dataResult.sources.attributes.length > 1 && index <5){
//               let container = $("<article>")
//               container.addClass("tile is-child notification borderGray backgroundKeppel")
//               let title = $("<p>")
//               title.addClass("title")
//               title.text(dataResult.name)
              
//               let description =  $("<p>")
//               description.addClass("subtitle")
//               description.text(dataResult.wikipedia_extracts.text)

//               let linktag = $("<p>")
//               linktag.html(`<a herf=${dataResult.otm}>read more here</a>`)
//               // container.innerhtml = `<p class="title">${data.name}</p><p class="subtitle">${data.wikipedia_extracts.html}</p><p><a herf=${data.otm}>read more here</a></p>`
//               container.append(title,description,linktag)
//               $("#resultsContainer").append(container)
//               // console.log(index)
//               index = 5;
//             }
          
//         })
//         .then("console")
//     })
//   })
// }
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

