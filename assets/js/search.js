// Pseudocode

// HTML and Bulma docs will handle layout arrangements across the page

// Upon loading of page, Search Bar should be populated with placeholder text, 
// dropdown menu should have some form of placeholder text stating what it will list, and 
// 'Search' button should appear below both.

// Below the 'Search' container, four cards will appear that contain information randomized from 
// a database of potential destinations that someone can go to right away, and each of these cards
// will be links to pages about that city.


var possDest = {
    '1' : {
        'name': 'Paris',
        'image': "url(https://upload.travelawaits.com/ta/uploads/2021/04/eiffel-tower-800x800.jpg)",
    },
    '2' : {
        'name': 'London',
        'image': "url(https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTYyNDg1MjE3MTI1Mjc5Mzk4/topic-london-gettyimages-760251843-promo.jpg)",
    },
    '3' : {
        'name': 'Hong Kong',
        'image': "url(https://img.static-kl.com/images/media/4EA8CE28-6BF4-4503-88618BAEF81EE29C?aspect_ratio=1:1&min_width=456)",
    },
    '4' : {
        'name': 'New York City',
        'image': "url(https://res.cloudinary.com/simplotel/image/upload/w_5000,h_2812/x_1094,y_0,w_2812,h_2812,r_0,c_crop,q_80,fl_progressive/w_400,f_auto,c_fit/night-hotel-broadway/Night_time_view_of_Broadway)",
    },   
    '5' : {
        'name': 'Dubai',
        'image': "url(https://pro.cosentino.com/wp-content/uploads/2020/09/Dubai.jpg)",
    },
    '6' : {
        'name': 'Sydney',
        'image': "url(https://assets.airtrfx.com/media-em/cx/60f56c170a16b_dg-sydney-02-sydney-opera-house.jpg)",
    },
    '7' : {
        'name': 'Rio de Janeiro',
        'image': "url(https://whc.unesco.org/uploads/thumbs/site_1100_0004-750-750-20120625114004.jpg)",
    },
    '8' : {
        'name': 'Cape Town',
        'image': "url(https://upload.travelawaits.com/ta/uploads/2021/04/arial-view-of-cape-town-in-sobd3fe3-800x800.jpg)",
    },
    '9' : {
        'name': 'Kuala Lumpur',
        'image': "url(https://lh3.googleusercontent.com/0pYmu6l8bh-l5hfFVWjXPICE_KbIqnEg6uysvMa4Y7aepPVYtfw7sCG7yU4-lJpe)",
    },
    '10': {
        'name': 'Buenos Aires',
        'image': "url(https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Microcentro%2C_Buenos_Aires_%2840774240522%29.jpg/800px-Microcentro%2C_Buenos_Aires_%2840774240522%29.jpg)",
    },
};

var places = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
var randomPlace = places[Math.floor(Math.random()*places.length)];
console.log(randomPlace);
var destCardOne = document.getElementById('suggestion1');
var destNameOne = document.createElement('h4');
// destNameOne.classList({});
destNameOne.textContent = possDest[randomPlace].name;
destCardOne.append(destNameOne);
destCardOne.style.backgroundImage = possDest[randomPlace].image;

places.splice(randomPlace, 1);
console.log(places);

var randomPlace = places[Math.floor(Math.random()*places.length)];
console.log(randomPlace);
var destCardTwo = document.getElementById('suggestion2');
var destNameTwo = document.createElement('h4');
// destNameTwo.classList({});
destNameTwo.textContent = possDest[randomPlace].name;
destCardTwo.append(destNameTwo);
destCardTwo.style.backgroundImage = possDest[randomPlace].image;

places.splice(randomPlace, 1);
console.log(places);

var randomPlace = places[Math.floor(Math.random()*places.length)];
console.log(randomPlace);
var destCardThree = document.getElementById('suggestion3');
var destNameThree = document.createElement('h4');
// destNameThree.classList({});
destNameThree.textContent = possDest[randomPlace].name;
destCardThree.append(destNameThree);
destCardThree.style.backgroundImage = possDest[randomPlace].image;

places.splice(randomPlace, 1);
console.log(places);

var randomPlace = places[Math.floor(Math.random()*places.length)];
console.log(randomPlace);
var destCardFour = document.getElementById('suggestion4');
var destNameFour = document.createElement('h4');
// destNameFour.classList({});
destNameFour.textContent = possDest[randomPlace].name;
destCardFour.append(destNameFour);
destCardFour.style.backgroundImage = possDest[randomPlace].image;

places.splice(randomPlace, 1);
console.log(places);


// Query Selector all, event target the specific card input, store it
// in Local Storage (preferably html dataset),  