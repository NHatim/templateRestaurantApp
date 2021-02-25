const btn = document.querySelector('.btn-vider-table');
let reponse = false;

btn.addEventListener('click',() =>{

  reponse = confirm('Vous allez supprimer toutes les commandes, attention cette action est irréversible');
})
