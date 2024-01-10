document.addEventListener("DOMContentLoaded", () => {
    // Charger les données depuis le fichier JSON
    fetch("main-todo-list.json")
        .then(response => response.json())
        .then(data => {
            const todoList = document.getElementById("todo-list");
            data.forEach(task => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${task.id}</td>
                    <td>${task.task}</td>
                    <td>${task.startDate}</td>
                    <td>${task.endDate}</td>
                `;
                todoList.appendChild(row);
            });
        })
        .catch(error => {
            console.error("Une erreur est survenue lors du chargement des données :", error);
        });
});
