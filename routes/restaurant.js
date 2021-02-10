const express = require('express');
const router = new express.Router();
const tabCom = require('./commandeApi');

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.render('restaurant', {title: 'Eat It | Section restaurateur'});
});

router.post('/', (req, res, next) => {
  res.render('monrestaurant', {title: 'Eat It | Section restaurateur', restaurant : req.body.restaurant, tableauCommande : tabCom.tabCommande});
  console.log(tabCom.tabCommande);
});

router.get('/restaurant', (req, res, next) => {
  res.render('monrestaurant', {title: 'Eat It | Section restaurateur'});
});


module.exports = router;
