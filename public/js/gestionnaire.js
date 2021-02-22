const table_body = document.getElementById('liste_commande');

function updateListeCommande() {
  fetch('/gestionnaire/api')
    .then(response => response.json())
    .then(data => {
      const liste_commande = data.commandeApi;
      liste_commande.forEach(commande => {
        const line = document.createElement('tr');
        const col1 = document.createElement('td');
        col1.innerText = commande.heure_commande;
        const col2 = document.createElement('td');
        const col3 = document.createElement('td');
        line.appendChild(col1);
        line.appendChild(col2);
        line.appendChild(col3);
        table_body.appendChild(line);
      });
    });
}

updateListeCommande();
