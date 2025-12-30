# SOA-miniProjet
Mohammed aziz saidi (tp8) & Fedi ben hadj fraj (tp8)

# Person Management System – Frontend REST Client

## Description du projet
Ce projet consiste à développer le **frontend d’une application web** consommant un **backend RESTful JEE (JAX-RS)**.  
L’application permet la gestion complète des personnes via une architecture **Client / Serveur**.

Le frontend communique exclusivement avec les services REST exposés par le backend exécuté sur **Tomcat**.

## Architecture globale

- **Frontend**
  - HTML5 / CSS3 / JavaScript

- **Backend**
  - JEE / JAX-RS
  - Endpoints REST pour la gestion des personnes
  - Déployé sur Tomcat  
---

## Fonctionnalités:

### 1. Liste des personnes
- Récupération de toutes les personnes via REST
- Affichage dans un tableau

### 2. Ajout d’une personne
- Formulaire avec validation des champs
- Envoi des données au backend via requête HTTP `PUT`
- Mise à jour automatique de la liste

### 3. Modification d’une personne
- Pré-remplissage du formulaire à partir des données existantes
- Mise à jour via service REST

### 4. Suppression d’une personne
- Bouton de suppression par ligne
- Fenêtre de confirmation
- Suppression via requête HTTP `DELETE`

### 5. Recherche
- Recherche par **ID**
- Recherche par **nom**

---

## Endpoints REST consommés

| Méthode | Endpoint                     | Description                  |
|-------|------------------------------|------------------------------|
| PUT   | `/add/{age}/{name}`           | Ajouter une personne         |
| PUT   | `/update/{id}/{age}/{name}`   | Modifier une personne        |
| DELETE| `/remove/{id}`                | Supprimer une personne       |
| GET   | `/getid/{id}`                 | Recherche par ID             |
| GET   | `/getname/{name}`             | Recherche par nom            |
| GET   | `/list`                       | Liste de toutes les personnes|

---

## Technologies utilisées

- HTML5
- CSS3
- JavaScript 
- Backend REST JEE / JAX-RS
- Apache Tomcat

---

## Structure du projet 

/WebContent
│
├── index.html
├── css/
│ └── style.css
├── js/
│ └── app.js