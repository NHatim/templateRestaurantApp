const express = require('express');
const router = new express.Router();
const tabCom = require('./commandeApi');
const {body, validationResult} = require('express-validator');
const session = require('express-session');


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
    res.render('espace-livreur', { title: 'Eat It | Section Livreur', nom : req.session.nom, prenom : req.session.prenom, tabRestaurant : tabCom.loadRestaurants });
  }

})



router.get('/', (req,res,next) =>{

    res.render('livreur', { title: 'Eat It | Section Livreur' });

})

router.post('/choix-restaurant', (req,res,next) =>{

  res.render('livreur-restaurant', { title: 'Eat It | Section Livreur', nom : req.session.nom, prenom : req.session.prenom });

})

module.exports = router,session;
