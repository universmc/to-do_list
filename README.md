# Todo-App

Bienvenue dans Todo-App, une application de gestion de tâches simple et efficace. Cette documentation vous guidera à travers l'installation, l'utilisation et la structure de l'application.

## Installation

Pour exécuter Todo-App sur votre machine locale, suivez ces étapes :

# Clonez le référentiel depuis GitHub :

- Github

<code>git clone https://github.com/universmc/todo-app.git</code>

Accédez au répertoire du projet :

 bash

<code>cd Todo-App</code>

- Ouvrez le fichier index.html dans votre navigateur pour lancer l application.

# Documentation d'Utilisation
Interface Utilisateur

- Pour ajouter une nouvelle tâche, remplissez le formulaire sur la page d'accueil et cliquez sur le bouton "Ajouter Tâche".
- Pour mettre à jour une tâche, cliquez sur la tâche que vous souhaitez modifier, apportez les modifications nécessaires dans le formulaire, puis cliquez sur "Mettre à jour".
- Pour supprimer une tâche, cliquez sur la tâche que vous souhaitez supprimer, puis cliquez sur "Supprimer".

# Structure Fullstack

La structure fullstack de l'application est divisée en plusieurs composants :
Frontend

- Le frontend de l'application est basé sur HTML, CSS et JavaScript.
- Les fichiers CSS sont situés dans le répertoire frontend/css.
- Le code CSS est généré à partir de fichiers Sass situés dans frontend/sass.

# Backend

    Le backend de l'application gère les opérations CRUD et la base de données.
    Consultez les fichiers dans le répertoire md pour accéder à la documentation détaillée du backend.

Endpoints Meta-Prompt

Chaque endpoint de l'application dispose d'un Meta-Prompt d'instruction pour vous guider dans son utilisation. Voici quelques exemples :
Endpoint /api/tasks

    CRUD Operations: Création, lecture, mise à jour et suppression de tâches.
    Meta-Prompt d'instruction : Consultez prompt/api/tasks.json.

Endpoint /api/users

    Gestion des utilisateurs.
    Meta-Prompt d'instruction : Consultez prompt/api/users.json.

Chartre Graphique

Consultez le fichier chartre-graphique.md pour obtenir des informations sur la charte graphique et le style de l'application.
Ressources Supplémentaires

    Explorez le répertoire prompt pour les instructions et les intentions de prompts.
    Consultez le fichier swagger.md pour des informations sur l'API et la documentation Swagger.

Amusez-vous à utiliser Todo-App et restez organisé !