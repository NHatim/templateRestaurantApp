module.exports = class Restaurant {
  constructor(nom,plat,adresse) {
    this.nom = nom;
    this.plat = plat;
    this.adresse = adresse;
  }


  loadRestaurants(){
    const tabResto =[];
    /* INDIEN */
    /* findbyId Array */
    const maharaja =  new Restaurant("Maharaja", "Chicken Korma", "Boulevard Maurice Lemonnier 163, 1000 Bruxelles");
    const mumbai = new Restaurant("Mumbai Dreams", "Poulet Tandoori", "Rue Basse 9, 1180 Uccle");
    const bombay = new Restaurant("Bombay Inn", "Samosa", "Rue de la Fourche 38, 1000 Bruxelles");
    const raaj = new Restaurant("Taste of Raaj", "Curry de veau", "Chaussée de Waterloo 591, 1050 Ixelles");

    /* ITALIEN */

    const dolce = new Restaurant("DOLCE e SALATO", "Spaghetti Bolognese", "Camille Vandeloockstraat 14, 1600 Sint-Pieters-Leeuw");
    const sorrento = new Restaurant("Il Sorrento Ristorante", "Lasagne", "Kerkplein 32, 1601 Sint-Pieters-Leeuw");
    const cucina = new Restaurant ("La Mia Cucina 2", "Spaghetti Carbonara", "Herman Teirlinckplein 2, 1650 Beersel");
    const carpaccio = new Restaurant ("Il Carpaccio", "Grand Stromboli" ,"Chaussée de Waterloo 1033, 1180 Uccle");

    /* MEXICAIN */

    const agaves = new Restaurant("Los agaves","Chilaquiles","Avenue Jean Volders 4A, 1060 Saint-Gilles");
    const tacos = new Restaurant("Los Tacos","Taco","Quai aux Briques 30, 1000 Bruxelles");
    const rosita = new Restaurant ("Rosita’s Cantina", "Enchiladas", "Rue du Pont de la Carpe 12, 1000 Bruxelles");
    const cafe = new Restaurant ("El Café","Burritos","Avenue Jean Volders 4A, 1060 Saint-Gilles");

    /* SNACKS */

    const lilicup = new Restaurant ("Lilicup","Cupcake météorite","Rue du Page 65, 1050 Bruxelles");
    const twins = new Restaurant ("Snack Twins","Assiette 7 saveurs","Avenue brugmann 474 1180 uccle, 1180 Brussel");
    const terroir = new Restaurant ("Au Terroir","Cheese-cake au speculoos belge","Chaussée de Lessines 290, 7060 Soignies");
    const sofra = new Restaurant ("Snack Friture Sofra","Cupcake météorite","Félix Wittouckstraat 1, 1600 Sint-Pieters-Leeuw");

    tabResto.push(maharaja,mumbai,bombay,raaj,dolce,sorrento,cucina,carpaccio,agaves,tacos,rosita,cafe,lilicup,twins,terroir,sofra)
    return tabResto;
  }
}

