// Search Page

// Variable that directs to the Results Page
var resultsPage = './results.html';
// Upon clicking the Search Button, the name of the City that has been input is saved to Local Storage and the user is directed to the Results Page
var searchGo = document.querySelector('.searchButton');
searchGo.addEventListener('click', function() {
    var searchInput = document.querySelector('.searchTerm').value;
    console.log(searchInput);
    localStorage.setItem('localSearch', searchInput);
    document.location.replace(resultsPage);
})

// Object containing popular tourist destinations across the globe along with general images of each
var possDest = {
    '0': {
        'name': 'Paris',
        'image': "url(https://upload.travelawaits.com/ta/uploads/2021/04/eiffel-tower-800x800.jpg)",
    },
    '1': {
        'name': 'London',
        'image': "url(https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTYyNDg1MjE3MTI1Mjc5Mzk4/topic-london-gettyimages-760251843-promo.jpg)",
    },
    '2': {
        'name': 'Hong Kong',
        'image': "url(https://img.static-kl.com/images/media/4EA8CE28-6BF4-4503-88618BAEF81EE29C?aspect_ratio=1:1&min_width=456)",
    },
    '3': {
        'name': 'New York City',
        'image': "url(https://res.cloudinary.com/simplotel/image/upload/w_5000,h_2812/x_1094,y_0,w_2812,h_2812,r_0,c_crop,q_80,fl_progressive/w_400,f_auto,c_fit/night-hotel-broadway/Night_time_view_of_Broadway)",
    },   
    '4': {
        'name': 'Dubai',
        'image': "url(https://pro.cosentino.com/wp-content/uploads/2020/09/Dubai.jpg)",
    },
    '5': {
        'name': 'Sydney',
        'image': "url(https://assets.airtrfx.com/media-em/cx/60f56c170a16b_dg-sydney-02-sydney-opera-house.jpg)",
    },
    '6': {
        'name': 'Rio de Janeiro',
        'image': "url(https://whc.unesco.org/uploads/thumbs/site_1100_0004-750-750-20120625114004.jpg)",
    },
    '7': {
        'name': 'Cape Town',
        'image': "url(https://upload.travelawaits.com/ta/uploads/2021/04/arial-view-of-cape-town-in-sobd3fe3-800x800.jpg)",
    },
    '8': {
        'name': 'Kuala Lumpur',
        'image': "url(https://lh3.googleusercontent.com/0pYmu6l8bh-l5hfFVWjXPICE_KbIqnEg6uysvMa4Y7aepPVYtfw7sCG7yU4-lJpe)",
    },
    '9': {
        'name': 'Buenos Aires',
        'image': "url(https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Microcentro%2C_Buenos_Aires_%2840774240522%29.jpg/800px-Microcentro%2C_Buenos_Aires_%2840774240522%29.jpg)",
    },
};

// Series of methods used to randomly populate each card on the initial Search Page with values from the objects above,
// along with splice methods utilized to ensure no cards share the same city.
var places = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var randomIndex = Math.floor(Math.random()*places.length);
var randomPlace = places[randomIndex];
console.log(randomPlace);
var destCardOne = document.getElementById('suggestion1');
var destNameOne = document.createElement('h3');
destNameOne.setAttribute('class', 'nameStyle');
destNameOne.textContent = possDest[randomPlace].name;
destCardOne.append(destNameOne);
destCardOne.style.backgroundImage = possDest[randomPlace].image;

places.splice(randomIndex, 1);
console.log(places);

randomIndex = Math.floor(Math.random()*places.length);
randomPlace = places[randomIndex];
console.log(randomPlace);
var destCardTwo = document.getElementById('suggestion2');
var destNameTwo = document.createElement('h3');
destNameTwo.setAttribute('class', 'nameStyle');
destNameTwo.textContent = possDest[randomPlace].name;
destCardTwo.append(destNameTwo);
destCardTwo.style.backgroundImage = possDest[randomPlace].image;

places.splice(randomIndex, 1);
console.log(places);

randomIndex = Math.floor(Math.random()*places.length);
randomPlace = places[randomIndex];
console.log(randomPlace);
var destCardThree = document.getElementById('suggestion3');
var destNameThree = document.createElement('h3');
destNameThree.setAttribute('class', 'nameStyle');
destNameThree.textContent = possDest[randomPlace].name;
destCardThree.append(destNameThree);
destCardThree.style.backgroundImage = possDest[randomPlace].image;

places.splice(randomIndex, 1);
console.log(places);

randomIndex = Math.floor(Math.random()*places.length);
randomPlace = places[randomIndex];
console.log(randomPlace);
var destCardFour = document.getElementById('suggestion4');
var destNameFour = document.createElement('h3');
destNameFour.setAttribute('class', 'nameStyle');
destNameFour.textContent = possDest[randomPlace].name;
destCardFour.append(destNameFour);
destCardFour.style.backgroundImage = possDest[randomPlace].image;


// Upon clicking one of the cards, the name of the City the user has selected is sent to Local Storage and the user is directed to the Results Page.
var recommDests = document.querySelectorAll(".suggestion");
recommDests.forEach(suggestion => {
    suggestion.addEventListener('click', function(event) {
        console.log('Card clicked', event);
        var dest = event.target.firstElementChild.innerText;
        localStorage.setItem('localSearch', dest);
        document.location.replace(resultsPage);
    })
})


