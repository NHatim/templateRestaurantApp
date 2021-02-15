const express = require('express');
const router = new express.Router();
const tabCom = require('./commandeApi');
const {body, validationResult} = require('express-validator');
const session = require('express-session');
const { loadRestaurants } = require('../class/restaurant');


router.use(session({
  secret : 'yourSecret',
  resave : false,
  saveUninitialized : false,
  }));


router.post('/connexion',
[
  body('nom').trim().isLength({ min: 3 }).escape(),
  body('prenom').trim().isLength({ min: 3 }).escape(),
],

(req,res,next) =>{

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    next(createError(400));
  } else {
    console.log()
    req.session.nom = req.body.nom;
    req.session.prenom = req.body.prenom;
    console.log(req.session.nom);
    console.log(req.session.prenom);
    console.log(tabCom.loadRestaurants)
    res.render('espace-livreur', { title: 'Eat It | Section Livreur', nom : req.session.nom, prenom : req.session.prenom, tabRestaurant : tabCom.loadRestaurants });
  }

})



router.get('/', (req,res) =>{

    res.render('livreur', { title: 'Eat It | Section Livreur' });

})

module.exports = router,session,loadRestaurants;
