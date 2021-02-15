const li = document.querySelectorAll('li');
function initMap() {


  const bruxelles = {lat : 50.84919411049337, lng:  4.3522119306344615}


  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: bruxelles,
  });
  // The marker, positioned at Uluru
  li.forEach(element => {
    console.log(element.getAttribute('geolocalisation-lat'));
    let lat = Number.parseFloat(element.getAttribute('geolocalisation-lat'));
    let long = Number.parseFloat(element.getAttribute('geolocalisation-lng'))
    let valeur = {lat : lat, lng : long }
    const marker = new google.maps.Marker({
      position: valeur,
      map: map,
    });

  });

}
