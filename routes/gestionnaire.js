const express = require('express');
const router = new express.Router();
const commandeApi = require('./commandeApi');
const bodyParser = require('body-parser');

router.get('/', (req, res, next) => {

  res.json({commandeApi : commandeApi.tabCommande}) ;
});


router.get('/', (req, res, next) => {

  res.render('gestionnaire', {title: 'Eat It | Section Gestionnaire'} );
});



module.exports = router;
