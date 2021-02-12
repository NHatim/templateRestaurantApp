module.exports = class Commande {
  constructor(numero,nom,nbRepas,rue,maison,boite,codePostal,commune,restaurant,date,heure) {
    this.numero = numero;
    this.nom = nom;
    this.nbRepas = nbRepas;
    this.rue = rue;
    this.maison = maison;
    this.boite = boite;
    this.codePostal = codePostal;
    this.commune = commune;
    this.restaurant = restaurant;
    this.date = date;
    this.heure = heure;
    this.datePrep = undefined;
    this.heurePrep = undefined;
    this.nomDuLivreur = undefined;
    this.heureEnlevement = undefined;
    this.heureLivraison = undefined;
    this.etatCommande = "";
  }
}



