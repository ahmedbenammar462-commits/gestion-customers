# Gestion Customers 👥

Une petite application Node.js/Express pour **gérer des clients (customers)** :
- Affichage de la liste des customers
- Ajout d’un nouveau customer via un formulaire
- Édition des informations d’un customer existant

## 🚀 Fonctionnalités
- Page **Home** : affiche la liste des customers avec boutons pour éditer.
- Page **Ajouter** : formulaire pour ajouter un nouveau customer.
- Intégration de **Bootstrap** pour le design.
- Backend avec **Express.js** et **MongoDB Atlas (cloud)**.
- Vues rendues avec **EJS**.
- Organisation du style avec **CSS** custom.

## 🛠 Technologies
- **Frontend** : HTML, CSS, Bootstrap, EJS
- **Backend** : Node.js, Express.js
- **Database** : MongoDB (cloud via MongoDB Atlas)
- **Outils** : dotenv, nodemon, mongoose

## 📂 Structure du projet
├── models
   ├── customers.js
├── node_modules
├── /public
├── routes
   ├── AllRouter.js
   ├── RouterAdd.js
├── /views
   ├── Component
      ├── dark-light.ejs
      ├── navbar.ejs
      ├── sidebar.ejs
    ├── user
       ├── add.ejs
       ├── edit.ejs
       ├── search.ejs
       ├── view.ejs
       ├── view.html
      
     ├── index.ejs
├── app.js
├── package.json
├── .gitgnore

## ⚙️ Installation et démarrage

1. Cloner le projet :
   ```bash
   git clone https://github.com/TON_USER/gestion-customers.git
   cd gestion-customers

2. Installer les dépendances :
  npm install
3. Lance le projet :
npm start 
     

