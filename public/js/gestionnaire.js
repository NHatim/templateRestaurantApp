const tableBody = document.getElementById('liste-commande');



function majListeCommande() {
  fetch('/gestionnaire/api')
    .then(response => response.json())
    .then(data => {
      tableBody.innerHTML = '';
      const listeCommande = data.commandeApi;
      listeCommande.forEach(commande => {
        const line = document.createElement('tr');
        const col1 = document.createElement('td');
        col1.innerText = `${commande.date} ${commande.heure}`;
        const col2 = document.createElement('td');
        col2.innerText = `${commande.adresse}`;
        const col3 = document.createElement('td');
        col3.innerText = `${commande.restaurant.nom}`;
        const col4 = document.createElement('td');
        col4.innerText = commande.datePrep ? `${commande.datePrep} ${commande.heurePrep}` : '';
        const col5 = document.createElement('td');
        col5.innerText = commande.nomLivreur ?`${commande.nomLivreur}` : '';
        const col6 = document.createElement('td');
        col6.innerText = commande.heureEnlevement ? `${commande.datePrep} ${commande.heureEnlevement}` : '';
        const col7 = document.createElement('td');
        col7.innerText =  commande.heureLivraison ? `${commande.date} ${commande.heureLivraison}` : '';
        const col8 = document.createElement('td');
        col8.innerText = `${commande.etatCommande}`;
        const col9 = document.createElement('button');
        col9.innerText = 'Supprimer'
        col9.setAttribute("name","commande");
        col9.setAttribute("type","submit");
        col9.setAttribute("value", commande.numero);
        col9.classList = "btn btn-danger btn-gestionnaire";
        line.appendChild(col1);
        line.appendChild(col2);
        line.appendChild(col3);
        line.appendChild(col4);
        line.appendChild(col5);
        line.appendChild(col6);
        line.appendChild(col7);
        line.appendChild(col8);
        line.appendChild(col9)
        tableBody.appendChild(line);

      });
    });
}

majListeCommande();

setInterval(majListeCommande, 10000);
