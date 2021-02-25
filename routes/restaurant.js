const express = require('express');
const router = new express.Router();
const commandeApi = require('./commandeApi');
let findResto;



router.get('/', (req, res, next) => {
  res.render('liste-restaurant', {title: 'Eat It | Section restaurateur', restaurant : commandeApi.loadRestaurants});
});

router.get('/api', (req, res, next) => {
  res.json({loadRestaurants : commandeApi.loadRestaurants, tabCommande : commandeApi.tabCommande});
});

router.post('/liste', (req, res, next) => {
  findResto = commandeApi.loadRestaurants.find(element => element.nom === req.body.restaurant);
  res.render('restaurateur', {title: 'Eat It | Section restaurateur', restaurant : findResto.nom});

});

router.post('/confirmation', (req, res, next) => {
  const date = new Date();
  const options = {year: 'numeric', month: 'numeric', day: 'numeric' };
  const heure = new Date().toString().slice(16,24);
  commandeApi.tabCommande.forEach(element => {
    if(element.numero === parseInt(req.body.commande)){
      element.etatCommande = "pret";
      element.datePrep = date.toLocaleDateString('fr-FR', options);
      element.heurePrep = heure;
      element.tempsMs = (new Date() - element.dateCreation);
      element.restaurant.commandePrep++;
      console.log(element.tempsMs)
    }
  });
  res.render('restaurateur', {title: 'Eat It | Section restaurateur',
  restaurant : findResto.nom});
});
router.get('/confirmation', (req,res,next) =>{
  res.render('restaurateur', {title: 'Eat It | Section restaurateur',restaurant : findResto.nom})
})


router.get('/liste', (req, res, next) => {
  res.render('restaurateur', {title: 'Eat It | Section restaurateur', restaurant : findResto.nom});
});


module.exports = router,commandeApi;
