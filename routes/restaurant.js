const express = require('express');
const router = new express.Router();
const tabCom = require('./commandeApi');
let findResto;
/* GET users listing. */
router.get('/', (req, res, next) => {
  res.render('restaurant', {title: 'Eat It | Section restaurateur'});
});

router.post('/liste', (req, res, next) => {
  findResto = tabCom.tabCommande.find(element => element.restaurant.nom === req.body.restaurant)
  res.render('monrestaurant', {title: 'Eat It | Section restaurateur',
  restaurant : findResto ? findResto.restaurant.nom : req.body.restaurant ,
  tableauCommande : tabCom.tabCommande,
  nbPret : findResto ? findResto.restaurant.commandePrep : 0 ,
  nbRestant : findResto ? (findResto.restaurant.commandeTot - findResto.restaurant.commandePrep) : 0 });
  console.log(tabCom.tabCommande);

});

router.post('/confirmation', (req, res, next) => {
  const date = new Date();
  const options = {year: 'numeric', month: 'numeric', day: 'numeric' };
  const heure = new Date().toString().slice(16,24);
  tabCom.tabCommande.forEach(element => {
    if(element.numero == req.body.button){
      element.etatCommande = "pret";
      element.datePrep = date.toLocaleDateString('fr-FR', options);
      element.heurePrep = heure;
      element.restaurant.commandePrep++;
    }
  });
  res.render('monrestaurant', {title: 'Eat It | Section restaurateur',
  restaurant : findResto.restaurant.nom,
  tableauCommande : tabCom.tabCommande,
  nbPret : findResto.restaurant.commandePrep,
  nbRestant : (findResto.restaurant.commandeTot - findResto.restaurant.commandePrep) });
  console.log(tabCom.tabCommande);
});

router.get('/confirmation', (req,res,next) =>{
  res.render('monrestaurant', {title: 'Eat It | Section restaurateur',
  restaurant : findResto.restaurant.nom,
  tableauCommande : tabCom.tabCommande,
  nbPret : findResto.restaurant.commandePrep,
  nbRestant : (findResto.restaurant.commandeTot - findResto.restaurant.commandePrep) })
})


router.get('/liste', (req, res, next) => {
  res.render('monrestaurant', {title: 'Eat It | Section restaurateur',
  restaurant : findResto.restaurant.nom,
  tableauCommande : tabCom.tabCommande,
  nbPret : findResto.restaurant.commandePrep,
  nbRestant : (findResto.restaurant.commandeTot - findResto.restaurant.commandePrep) });
});


module.exports = router;
