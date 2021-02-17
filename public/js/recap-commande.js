const ul = document.querySelector('ul');

function initMap() {
  const bruxelles = {lat : 50.84919411049337, lng:  4.3522119306344615}
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: bruxelles,
  });
  // The marker, positioned at Uluru
    let lat = Number.parseFloat(ul.getAttribute('geolocalisation-lat'));
    let long = Number.parseFloat(ul.getAttribute('geolocalisation-lng'))
    let valeur = {lat : lat, lng : long }
    const marker = new google.maps.Marker({
      position: valeur,
      map: map,
    });

}



