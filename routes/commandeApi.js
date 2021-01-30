const express = require('express');
const router = new express.Router();
const { body, validationResult } = require('express-validator');
const createError = require('http-errors');
let restaurant ="";

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
})

router.post('/commande', (req, res,next) =>{
  res.render('created', {title: 'Eat It | Confirmation', nom : req.body.nom,
  nombre : req.body.nombre, rue : req.body.rue,
  maison : req.body.maison, boite : req.body.boite,
  codePostal : req.body.codePostal, commune : req.body.commune, restaurant : restaurant[0], plat : restaurant[1]})
})

router.post('/indien', (req,res,next) =>{
  restaurant = req.body.restaurant.split(":")
  res.render('commande', {title: 'Eat It | Confirmation', restaurant : restaurant[0], plat : restaurant[1]})
})

router.post('/mexicain', (req,res,next) =>{
  restaurant = req.body.restaurant.split(":")
  res.render('commande', {title: 'Eat It | Confirmation', restaurant : restaurant[0], plat : restaurant[1]})
})

router.post('/italien', (req,res,next) =>{
  restaurant = req.body.restaurant.split(":")
  res.render('commande', {title: 'Eat It | Confirmation', restaurant : restaurant[0], plat : restaurant[1]})
})

router.post('/snacks', (req,res,next) =>{
  restaurant = req.body.restaurant.split(":")
  res.render('commande', {title: 'Eat It | Confirmation', restaurant : restaurant[0], plat : restaurant[1]})
})


module.exports = router;

