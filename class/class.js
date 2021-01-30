class Commande {
  constructor(numero,nbRepas,rue,maison,boite,codePostal,commune,date,heure) {
    this.numero = numero;
    this.nbRepas = nbRepas;
    this.rue = rue;
    this.maison = maison;
    this.boite = boite;
    this.codePostal = codePostal;
    this.commune = commune;
    this.date = date;
    this.heure = heure;
    this.nomDuLivreur = "";
    this.heureEnlevement = "";
    this.heureLivraison = "";
    this.etatCommande = ""
  }
}

