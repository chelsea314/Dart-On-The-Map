// Pseudocode

// HTML and Bulma docs will handle layout arrangements across the page

// Upon loading of page, Search Bar should be populated with placeholder text, 
// dropdown menu should have some form of placeholder text stating what it will list, and 
// 'Search' button should appear below both.

// Below the 'Search' container, four cards will appear that contain information randomized from 
// a database of potential destinations that someone can go to right away, and each of these cards
// will be links to pages about that city.

// var possDest = {
//     'paris': {
//         ''
//     }
// }

var destContainer1 = document.getElementById('suggestion1');


var destName = document.createElement('h4');
var destPic = document.createElement('img');

// destName.textContent = ;
// destPic. (need to figure out correct property here)
destContainer1.append(destName);
destContainer1.append(destPic);
