const tabCom = require('../../routes/commandeApi');

tabCom.tabCommande.forEach(element => {
  if(element.restaurant.nom === req.body.restaurant.trim()){
    const li = document.createElement('li');
    const ul = document.querySelector('ul');

    li.textContent = element.nom;

    ul.appendChild

  }

});


