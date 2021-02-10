
const Restaurant = require('/home/hatim/Bureau/projet-NHatim/class/restaurant.js');
const loadRestaurants = Restaurant.loadRestaurants();
let restaurantDropdown = document.getElementById('liste-restauration');
const li = document.createElement('li');
const ul = document.querySelector('ul');

loadRestaurants.forEach(el => {
let optionEl = document.createElement('option');
optionEl.text = el.nom;
optionEl.value = el.nom;
restaurantDropdown.appendChild(optionEl);
})
