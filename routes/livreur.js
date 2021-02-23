const express = require('express');
const router = new express.Router();
const commandeApi = require('./commandeApi');
const {body, validationResult} = require('express-validator');
const session = require('express-session');
let commandeClient;

router.use(session({
  secret : 'secret',
  resave : false,
  saveUninitialized : false,
}));

router.get('/', (req,res,next) =>{
  res.render('livreur', { title: 'Eat It | Section Livreur' });
})

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
    req.session.nom = req.body.nom;
    req.session.prenom = req.body.prenom;
    res.render('espace-livreur', { title: 'Eat It | Section Livreur liste restaurant', nom : req.session.nom, prenom : req.session.prenom, tabRestaurant : commandeApi.loadRestaurants });
  }
})

router.post('/choix-restaurant', (req,res,next) =>{
  let findResto = commandeApi.loadRestaurants.find(element =>  req.body.restaurant.trim() === element.nom );
  let tabNumCom = [];

  commandeApi.tabCommande.forEach(element => {
    if(req.body.restaurant.trim() === element.restaurant.nom && element.etatCommande === "pret"){
      tabNumCom.push(element.numero);
    }
  })
  res.render('livreur-restaurant', { title: 'Eat It | Section Livreur confirmation restaurant', nom : req.session.nom, prenom : req.session.prenom, resto : findResto, tabCommande : commandeApi.tabCommande, tabNumCom : tabNumCom });
});

router.post('/confirmation-commande',(req,res,next) =>{
  commandeClient = commandeApi.tabCommande.find(element => element.numero === parseInt(req.body.commande));
  commandeClient.heureEnlevement = new Date().toString().slice(16,24);
  commandeClient.etatCommande = "enlever";
  res.render('livreur-confirmation', { title: 'Eat It | Section Livreur confirmation commande', commandeClient : commandeClient});
})

router.post('/commande-livrer', (req,res,next) =>{
  commandeClient.heureLivraison = new Date().toString().slice(16,24);
  if(!commandeClient.nomLivreur){
    commandeClient.etatCommande = "livrer";
    commandeClient.restaurant.commandeLivrer++;
    commandeClient.nomLivreur = `${req.session.nom} ${req.session.prenom}`
  }
  res.render('espace-livreur', {title: 'Eat It | Section Livreur liste restaurant', nom : req.session.nom, prenom : req.session.prenom, tabRestaurant : commandeApi.loadRestaurants})
})

router.get('/commande-livrer', (req,res,next) =>{
  res.render('espace-livreur', {title: 'Eat It | Section Livreur liste restaurant', nom : req.session.nom, prenom : req.session.prenom})
})


module.exports = router,session,commandeApi;
