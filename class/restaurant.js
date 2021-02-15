 class Restaurant {
  constructor(nom,plat,adresse,geolocalisation) {
    this.nom = nom;
    this.plat = plat;
    this.adresse = adresse;
    this.geolocalisation = geolocalisation;
    this.commandeTot = 0;
    this.commandePrep = 0;

  }


};

function loadRestaurants(){
  const tabResto =[];
  /* INDIEN */
  /* findbyId Array */
  const maharaja =  new Restaurant("Maharaja", "Chicken Korma", "Boulevard Maurice Lemonnier 163, 1000 Bruxelles",{ lat: 50.842010, lng: 4.342720} );
  const mumbai = new Restaurant("Mumbai Dreams", "Poulet Tandoori", "Rue Basse 9, 1180 Uccle", { lat : 50.792350, lng : 4.352460});
  const bombay = new Restaurant("Bombay Inn", "Samosa", "Rue de la Fourche 38, 1000 Bruxelles", { lat : 50.848690, lng : 4.353350});
  const raaj = new Restaurant("Taste of Raaj", "Curry de veau", "Chaussée de Waterloo 591, 1050 Ixelles", { lat : 50.818272123770015, lng : 4.3636452136252135});

  /* ITALIEN */

  const dolce = new Restaurant("DOLCE e SALATO", "Spaghetti Bolognese", "Camille Vandeloockstraat 14, 1600 Sint-Pieters-Leeuw", {lat : 50.80513662423276, lng : 4.284697442460059});
  const sorrento = new Restaurant("Il Sorrento Ristorante", "Lasagne", "Kerkplein 32, 1601 Sint-Pieters-Leeuw" ,{lat : 50.7899734045094, lng : 4.297979998283709});
  const cucina = new Restaurant ("La Mia Cucina 2", "Spaghetti Carbonara", "Herman Teirlinckplein 2, 1650 Beersel" ,{lat : 50.76679558061196, lng : 4.307973411777522,});
  const carpaccio = new Restaurant ("Il Carpaccio", "Grand Stromboli" ,"Chaussée de Waterloo 1033, 1180 Uccle" ,{lat : 50.80421038802663, lng : 4.372205659647081});

  /* MEXICAIN */

  const agaves = new Restaurant("Los agaves","Chilaquiles","Avenue Jean Volders 4A, 1060 Saint-Gilles" ,{lat : 50.832711555966306, lng : 4.343246255955285});
  const tacos = new Restaurant("Los Tacos","Taco","Quai aux Briques 30, 1000 Bruxelles" ,{lat : 50.85186933537392, lng : 4.347731755955748});
  const rosita = new Restaurant ("Rosita’s Cantina", "Enchiladas", "Rue du Pont de la Carpe 12, 1000 Bruxelles" ,{lat : 50.84865257894676, lng : 4.3476253136260965});
  const cafe = new Restaurant ("El Café","Burritos","Avenue de la Couronne 463, 1050 Bruxelles" ,{lat : 50.81622244444505, lng : 4.390430100130724});

  /* SNACKS */

  const lilicup = new Restaurant ("Lilicup","Cupcake météorite","Rue du Page 65, 1050 Bruxelles" ,{lat : 50.8237582915502, lng : 4.358082564108263});
  const twins = new Restaurant ("Snack Twins","Assiette 7 saveurs","Avenue brugmann 474 1180 uccle, 1180 Brussel" ,{lat : 50.80266152679233, lng : 4.341190698284046});
  const terroir = new Restaurant ("Brugmann","Cheese-cake au speculoos belge","Avenue Brugmann 52/54, 1190 Forest" ,{lat : 50.82012968244938, lng : 4.3522548518793425});
  const sofra = new Restaurant ("Snack Friture Sofra","Cupcake météorite","Félix Wittouckstraat 1, 1600 Sint-Pieters-Leeuw" ,{lat : 50.80794113506365, lng : 4.289287738767496});

  tabResto.push(maharaja,mumbai,bombay,raaj,dolce,sorrento,cucina,carpaccio,agaves,tacos,rosita,cafe,lilicup,twins,terroir,sofra)
  return tabResto;
};



module.exports.Restaurant = Restaurant;
module.exports.loadRestaurants = loadRestaurants;

