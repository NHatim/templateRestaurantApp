const express = require('express');
const router = new express.Router();
const { body, validationResult } = require('express-validator');
const createError = require('http-errors');
const Commande = require('../class/commande.js');
const Restaurant = require('../class/restaurant');
const loadRestaurants = Restaurant.loadRestaurants();
let restaurant = "";
let numCommande = 2;
const tabCommande = [];
let premCom = new Commande(1,"Hatim",13,"Rue picard",3,1,"1180","Uccle", loadRestaurants[0],1,1)
premCom.etatCommande = "aprep";
tabCommande.push(premCom)
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Eat It | Livraison de repas' });
});

router.get('/indien', (req, res, next) =>{
  res.render('indien', {title: 'Eat It | Restaurant Indien'});
});

router.get('/italien', (req, res, next) =>{
  res.render('italien', {title: 'Eat It | Restaurant Italien'});
});

router.get('/mexicain', (req, res, next) =>{
  res.render('mexicain', {title: 'Eat It | Restaurant Mexicain'});
});

router.get('/snacks', (req, res, next) =>{
  res.render('snacks', {title: 'Eat It | Restaurant Snacks'});
});

router.get('/commande', (req, res, next) =>{
  res.render('commande', {title: 'Eat It | Commande'});
});

router.post('/indien', (req,res,next) =>{
  restaurant = req.body.restaurant.split(":")
  res.render('commande', {title: 'Eat It | Confirmation', restaurant : restaurant[0], plat : restaurant[1]})
});

router.post('/mexicain', (req,res,next) =>{
  restaurant = req.body.restaurant.split(":")
  res.render('commande', {title: 'Eat It | Confirmation', restaurant : restaurant[0], plat : restaurant[1]})
});

router.post('/italien', (req,res,next) =>{
  restaurant = req.body.restaurant.split(":")
  res.render('commande', {title: 'Eat It | Confirmation', restaurant : restaurant[0], plat : restaurant[1]})
});

router.post('/snacks', (req,res,next) =>{
  restaurant = req.body.restaurant.split(":")
  res.render('commande', {title: 'Eat It | Confirmation', restaurant : restaurant[0], plat : restaurant[1]})
});

router.post('/commande',
[
  body('nom').trim().escape().isLength({ min: 1 }),
  body('nombre').trim().escape().isInt({min : 1, max : 20}),
  body('rue').trim().escape().isLength({ min: 1 }),
  body('maison').trim().escape(),
  body('boite').trim().escape(),
  body('codePostal').trim().escape().isInt({min : 1000, max : 9999}),
  body('commune').trim().escape().isAlpha(),
],

(req, res,next) =>{
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    next(createError(400));
  } else {
    const date = new Date()
    const options = {year: 'numeric', month: 'numeric', day: 'numeric' };

    const heure = new Date().toString().slice(16,24);
    const nomResto = restaurant[0];
    const platResto = restaurant[1];

    console.log(nomResto);
    const restoCommande = loadRestaurants.find(el => nomResto.trim() === el.nom)
    const commande = new Commande(numCommande, req.body.nom, req.body.nombre, req.body.rue, req.body.maison, req.body.boite, req.body.codePostal, req.body.commune, restoCommande ,  date.toLocaleDateString('fr-FR', options), heure);
    commande.etatCommande = "aprep"
    commande.restaurant.commandeTot++;
    tabCommande.push(commande);
    numCommande++;
    console.log(nomResto);
    console.log(platResto);
    res.render('created', {title: 'Eat It | Confirmation', nom : req.body.nom,
    nombre : req.body.nombre, rue : req.body.rue,
    maison : req.body.maison, boite : req.body.boite,
    codePostal : req.body.codePostal, commune : req.body.commune, restaurant : nomResto, plat : platResto});
    console.log(commande)
    console.log('Created');

  }

})




module.exports = router;
module.exports.tabCommande = tabCommande;

