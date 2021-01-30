const express = require('express');
const { body, validationResult } = require('express-validator');
const createError = require('http-errors');
const numCom = 1;

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

const tabCommande = [];


const router = new express.Router();


router.post(
  '/commande',
  [
    body('nom').trim().escape().isLength({ min: 1 }),
    body('nombre').trim().escape().isInt({min : 1, max : 20}),
    body('rue').trim().escape().isLength({ min: 1 }),
    body('maison').trim().escape(),
    body('boite').trim().escape(),
    body('codepostal').trim().escape().isInt({min : 1000, max : 9999}),
    body('commune').trim().escape().isAlpha(),
  ],

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      next(createError(400));
    } else {
      const date = new Date(new Date().getFullYear(),new Date().getMonth() , new Date().getDate(), new Date().getHours())
      const heure = new Date(new Date().getHours());
      const commande = new Commande(numCom, req.body.nom, req.body.nombre, req.body.rue, req.body.maison, req.body.boite, req.body.codePostal, req.body.commune, date, heure);
      tabCommande.push(commande);
      res.status(201);
      res.send("Created");
      console.log("OK");
    }
  }
);

module.exports = router, tabCommande;
