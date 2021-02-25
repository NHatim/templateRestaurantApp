const express = require('express');
const router = new express.Router();
const commandeApi = require('./commandeApi');

router.get('/', (req, res, next) => {
  console.log(commandeApi.tabCommande);
  res.render('gestionnaire', {title: 'Eat It | Section Gestionnaire'} );
});

router.get('/api', (req, res, next) => {
  res.json({commandeApi : commandeApi.tabCommande});
});

router.post('/annulation-commande', (req, res, next) => {
  const indexCommande = commandeApi.tabCommande.findIndex(element => element === parseInt(req.body.commande));
  commandeApi.tabCommande.splice(indexCommande,1);
  console.log(commandeApi.tabCommande)
  res.render('gestionnaire', {title: 'Eat It | Section Gestionnaire'})
});

router.get('/vider-table-commande', (req,res,next) =>{
  res.render('vider-table-commande',  {title: 'Eat It | Section Gestionnaire'})
})

router.post('/vider-table-commande',(req,res,next) =>{
  commandeApi.tabCommande.splice(0,commandeApi.tabCommande.length)
  res.render('gestionnaire', {title: 'Eat It | Section Gestionnaire'});
})


module.exports = router;
