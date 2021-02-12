
const Restaurant = require('/home/hatim/Bureau/projet-NHatim/class/restaurant.js');
const loadRestaurants = Restaurant.loadRestaurants();
let restaurantDropdown = document.getElementById('liste-restauration');
const li = document.createElement('li');
const ul = document.querySelector('ul');
function refresh() {
  window.location.reload();
}
  window.setInterval(refresh(), 10000);
loadRestaurants.forEach(el => {
let optionEl = document.createElement('option');
optionEl.text = el.nom;
optionEl.value = el.nom;
restaurantDropdown.appendChild(optionEl);
})
