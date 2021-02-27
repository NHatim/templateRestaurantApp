const express = require('express');
const router = new express.Router();
const commandeApi = require('./commandeApi');
const Commande = require('../class/commande.js');

router.get('/', (req, res, next) => {
  console.log(commandeApi.tabCommande);
  res.render('gestionnaire', { title: 'Eat It | Section Gestionnaire' });
});

router.get('/api', (req, res, next) => {
  res.json({ commandeApi: commandeApi.tabCommande });
});

router.post('/annulation-commande', (req, res, next) => {
  const indexCommande = commandeApi.tabCommande.findIndex(
    (element) => element === parseInt(req.body.commande)
    );
    commandeApi.tabCommande.splice(indexCommande, 1);
    console.log(commandeApi.tabCommande);
    res.render('gestionnaire', { title: 'Eat It | Section Gestionnaire' });
  });

  router.get('/vider-table-commande', (req, res, next) => {
    res.render('vider-table-commande', {
      title: 'Eat It | Section Gestionnaire',
    });
  });

  router.post('/vider-table-commande', (req, res, next) => {
    commandeApi.tabCommande.splice(0, commandeApi.tabCommande.length);
    commandeApi.loadRestaurants.forEach((element) => {
      element.commandeTot = 0;
      element.commandePrep = 0;
      element.commandeEnlever = 0;
      element.commandeLivrer = 0;
    });
    Commande.numCommande = 0;
    res.render('gestionnaire', { title: 'Eat It | Section Gestionnaire' });
  });

  module.exports = router;
