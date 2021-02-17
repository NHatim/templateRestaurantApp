const geolocalisation = document.querySelector('.geolocalisation');
const btn = document.querySelector('.confirmation');
let reponse = false;
btn.addEventListener('click', () => {
  reponse = confirm(`Confirmation de la livraison de la commande`);
})
console.log(btn);
function initMap() {
  const bruxelles = {lat : 50.84919411049337, lng:  4.3522119306344615}
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: bruxelles,
  });

  let lat = Number.parseFloat(geolocalisation.getAttribute('geolocalisation-lat'));
  let long = Number.parseFloat(geolocalisation.getAttribute('geolocalisation-lng'))
  let valeur = {lat : lat, lng : long }
  const marker = new google.maps.Marker({
    position: valeur,
    map: map,
  });

}


