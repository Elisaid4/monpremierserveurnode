//importe le framework
//import express from "express";

//on cree l'application 
const express = require("express");
// Déclaration de l'application express
const app = express();

// Middleware pour parser le JSON dans les requêtes
app.use(express.json());

// Routes GET existantes
app.get("/", (req, res) => {
   res.send("Akori serveur tsara");
});




app.get("/acceuil", (req, res) => {
    res.send("Bienvenue à notre accueil");
});


app.get("/apropos", (req, res) => {
    res.send("Bienvenue à notre page à propos");
});

app.get("/service", (req, res) => {
    res.send("Bienvenue à notre page service");
});

app.get("/contact", (req, res) => {
    res.send("Bienvenue à notre page contact");
});

// Route POST pour `colonne`
app.post("/colonne", (req, res) => {
    res.json({ 
        message: "Données reçues avec succès pour la colonne",
       
    });
});

// Route PUT pour `notion`
app.put("/notion", (req, res) => {
    res.json({
        message: `Notion avec l'ID mise à jour`,
      
    });
});

// Route DELETE pour `suprimation`
app.delete("/suprimation", (req, res) => {
    res.json({
        message: `Ressource avec  supprimée`
    });
});



 
 

//app.get("/bonjour",(req, res) => {
   // res.end("Akori anao");
//});

//app.listen(3001, () => { 
 //   console.log(" serveur ecoute le port");
//});

// on export notre application 


module.exports = app;