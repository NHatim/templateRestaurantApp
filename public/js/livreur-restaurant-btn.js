const btn = document.querySelector('.livreur-btn');
const liNum = document.querySelector('.livreur-restaurant');
let numCom = liNum.getAttribute("numero").split(',');
let valeur;



btn.addEventListener('click', () =>{

  valeur = prompt(`Veuillez choisir le numéro de la commande à livrer, numéro de commande disponible : ${numCom}`);

  let findCom = numCom.find(element =>  element === valeur )
  if(Math.sign(parseInt(findCom)) === 1){
    btn.setAttribute("value", valeur);
    valeur = true
  }else if(valeur === null){
    valeur = false
  }else{
    alert("Veuillez rentrez un bon numero de commande");
    valeur = false;
  }
})

