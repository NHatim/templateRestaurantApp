module.exports = class Commande {
  constructor(numero,nom, prenom,nbRepas,adresse,restaurant,date,heure) {
    this.numero = numero;
    this.nom = nom;
    this.prenom = prenom;
    this.nbRepas = nbRepas;
    this.adresse = adresse;
    this.geolocalisation = undefined;
    this.restaurant = restaurant;
    this.date = date;
    this.heure = heure;
    this.dateCreation = undefined;
    this.datePrep = undefined;
    this.heurePrep = undefined;
    this.tempMs = undefined;
    this.nomLivreur = undefined;
    this.heureEnlevement = undefined;
    this.heureLivraison = undefined;
    this.etatCommande = "";
  }
}



