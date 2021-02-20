const express = require('express');
const router = new express.Router();
const commandeApi = require('./commandeApi');
const bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));

router.get('/', (req, res, next) => {

  res.json({commandeApi : commandeApi.loadRestaurants})
  res.render('gestionnaire', {title: 'Eat It | Section Gestionnaire', tableauCommande : JSON.stringify(commandeApi.tabCommande)} );
});



module.exports = router;
