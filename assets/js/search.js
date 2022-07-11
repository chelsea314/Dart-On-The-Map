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
        'image': "url(https://cdn.getyourguide.com/img/tour/cf879ee295abc8e4.jpeg/159.jpg)",
    },
    '2' : {
        'name': 'London',
        'image': "url(https://upload.wikimedia.org/wikipedia/commons/5/50/Wv_London_banner.jpg)",
    },
    '3' : {
        'name': 'Hong Kong',
        'image': "url(https://merics.org/sites/default/files/2020-04/20200121_Banner_Hongkong_Hafen_manjik%20_via123rf_81776094_m.jpg)",
    },
    '4' : {
        'name': 'New York City',
        'image': "url(https://sia.psu.edu/sites/default/files/styles/content_header/public/nyc_skyline.jpg?itok=XMbtXjcS)",
    },   
    '5' : {
        'name': 'Dubai',
        'image': "url(https://www.thetravelspecialists.net.au/wp-content/uploads/2017/04/Dubai-skyline-WEB-Banner-1920x600.jpg)",
    },
    '6' : {
        'name': 'Sydney',
        'image': "url(https://i0.wp.com/liftoff.network/wp-content/uploads/2019/10/Sydney-FF-banner-3.png?ssl=1)",
    },
    '7' : {
        'name': 'Rio de Janeiro',
        'image': "url(https://image.volunteerworld.com/6aa7b5f5f513e3c8c86dc6ef452be20b743f9870/rio-de-janeiro-banner.jpg?auto=format&crop=faces&fit=crop&h=410&w=1230)",
    },
    '8' : {
        'name': 'Cape Town',
        'image': "url(https://adventuresafrica.com/wp-content/uploads/2019/11/Cape-Town-banner.jpg)",
    },
    '9' : {
        'name': 'Kuala Lumpur',
        'image': "url(2)",
    },
    '10': {
        'name': 'Buenos Aires',
        'image': "url(2)",
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

places.splice(parseInt(randomPlace, 10) - 1, 1);
console.log(places);

// randomPlace = places[Math.floor(Math.random()*places.length)].toString();