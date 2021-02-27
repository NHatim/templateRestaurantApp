
let reponse = false;
const ulStats = document.querySelector('.stats');
const ulListe = document.querySelector('.liste')
const nomResto = document.querySelector('.nom-restaurant')
const liStats = document.createElement('li');
let tempsMilli = 0;
let dateCrea;
let datePrepa;

const options = {year: 'numeric', month: 'numeric', day: 'numeric' };
function majStatsResto() {
  fetch('/restaurant/api')
  .then(response => response.json())
  .then(data => {

    const restaurants = data.loadRestaurants;
    const tabCommande = data.tabCommande;
    let findResto = restaurants.find(element => element.nom === nomResto.textContent)
    ulListe.innerHTML = ''
    tabCommande.forEach(commande => {
      const liCommande = document.createElement('li');
      const btn = document.createElement('button');
      if(commande.restaurant.nom === findResto.nom){
        tempsMilli = commande.tempsMs;
        if(commande.etatCommande === "aprep"){
          liCommande.textContent = `Commande n° ${commande.numero}, commandé le ${commande.date} à ${commande.heure}, nombre de repas : ${commande.nbRepas}`;
          btn.innerText = 'Prête'
          btn.setAttribute("name","commande");
          btn.setAttribute("type","submit");
          btn.setAttribute("value", commande.numero);
          btn.classList = "btn btn-success";
          btn.addEventListener("click", () =>{
            reponse = confirm(`Veuillez confirmer que la commande n° ${commande.numero} contient bien ${commande.nbRepas} repas`);
          });
          liCommande.appendChild(btn)
          ulListe.appendChild(liCommande)
        }
      };
    });
    ulStats.innerHTML =''
    var diffMins = Math.round(((tempsMilli % 86400000) % 3600000) / 60000);
    const date = new Date();
    liStats.textContent = `Commande à préparer : ${findResto.commandeTot - findResto.commandePrep} |
    prêt à être enlever : ${findResto.commandePrep - findResto.commandeEnlever} |
    déjà enlever : ${findResto.commandeEnlever} |
    Délai prép. minutes : ${diffMins ? (diffMins / findResto.commandePrep) : 0} |
    Date MÀJ : ${date.toLocaleDateString('fr-FR', options)} ${new Date().toString().slice(16,24)}`
    ulStats.appendChild(liStats);
  })}

  majStatsResto()
  setInterval(majStatsResto, 10000);






