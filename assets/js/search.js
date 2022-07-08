// Pseudocode

// HTML and Bulma docs will handle layout arrangements across the page

// Upon loading of page, Search Bar should be populated with placeholder text, 
// dropdown menu should have some form of placeholder text stating what it will list, and 
// 'Search' button should appear below both.

// Below the 'Search' container, four cards will appear that contain information randomized from 
// a database of potential destinations that someone can go to right away, and each of these cards
// will be links to pages about that city.


var possDest = {
    'one': {
        'name': 'Paris',
        'image': "url(1)",
    },
    'two': {
        'name': 'London',
        'image': "url(2)",
    },
    'three': {
        'name': 'Tokyo',
        'image': "url(3)",
    },
};

var destCardOne = document.getElementById(suggestion1);

var destNameOne = document.createElement('h4');


destNameOne.classList({});
destNameOne.textContent = possDest.one.name;


destCardOne.append(destNameOne);
destCardOne.style.backgroundImage = "()";