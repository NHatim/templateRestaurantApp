const express = require('express');
const router = new express.Router();
const { body, validationResult } = require('express-validator');
const createError = require('http-errors');
const Commande = require('../class/commande.js');
const fs = require('fs');
const NodeGeocoder = require('node-geocoder');
const loadRestaurants = []
fs.readFile('/home/hatim/Bureau/projet-NHatim/class/restaurant.json', 'utf8', (err, fileContents) => {

    const data = JSON.parse(fileContents);
    const mesRestos = []
    for (const geolocalisation in data) {
      if (Object.hasOwnProperty.call(data, geolocalisation)) {
        const element = data[geolocalisation];
       mesRestos.push(element);
      }
    }
    for (const element of mesRestos[0]) {
        loadRestaurants.push(element);
    }
  })

const options = {
  provider: 'google',
  apiKey: 'AIzaSyBgzsppydLqk_aKI4DIcG1uUkVwUhrsj7A',
};
const geoCoder = NodeGeocoder(options);
let restaurant = "";
let numCommande = 1;
const tabCommande = [];
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
  body('commune').trim().escape(),
],
async (req, res,next) =>{
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    next(createError(400));
  } else {
    const date = new Date()
    const options = {year: 'numeric', month: 'numeric', day: 'numeric' };
    const heure = new Date().toString().slice(16,24);
    const nomResto = restaurant[0];
    const platResto = restaurant[1];
    const restoCommande = loadRestaurants.find(el => nomResto.trim() === el.nom)
    const adresse = `${req.body.rue} ${req.body.maison}, ${req.body.codePostal} ${req.body.commune}`
    const commande = new Commande(numCommande, req.body.nom, req.body.prenom , req.body.nombre, adresse, restoCommande ,  date.toLocaleDateString('fr-FR', options), heure);
    commande.etatCommande = "aprep"
    commande.restaurant.commandeTot++;
    await geoCoder.geocode(adresse)
    .then((res)=> {
    commande.geolocalisation =  {lat : res[0].latitude, lng : res[0].longitude}
    })
    .catch((err)=> {
      console.log(err);
    });
    tabCommande.push(commande);
    numCommande++;
    console.log(commande);
    res.render('created', {title: 'Eat It | Confirmation', nom : commande.nom, prenom : commande.prenom,
    nombre : commande.nbRepas, adresse : commande.adresse, restaurant : nomResto, plat : platResto, geolocalisation : commande.geolocalisation});
  }
})

module.exports = router;
module.exports.tabCommande = tabCommande;
module.exports.loadRestaurants = loadRestaurants;

