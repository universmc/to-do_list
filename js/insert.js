function ajouterTache(id, tache, startDate, endDate) {
    const tableau = document.querySelector("table tbody");
    const nouvelleLigne = document.createElement("tr");
    
    nouvelleLigne.innerHTML = `
        <td>${id}</td>
        <td>${tache}</td>
        <td>${startDate}</td>
        <td>${endDate}</td>
        <td>
            <button onclick="editerTache(${id})">Éditer</button>
            <button onclick="supprimerTache(${id})">Supprimer</button>
        </td>
    `;

    tableau.appendChild(nouvelleLigne);
}
