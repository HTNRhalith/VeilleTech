const express = require('express');
const bcrypt = require('bcrypt');
const request = require('../database/auth');
const router = express.Router();

router.get('/',async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    let resultat;
    let name = "jdupont"
    try {
        resultat = await request.test(name);
    } catch (error) {
        res.status(500).json(error.message);
    }

    return res.status(200).json(resultat);
});

router.post('/inscription', async (req, res) => {
    const { Nom } = req.body;
    const { Prenom } = req.body;
    const { Nom_Utilisateur } = req.body;
    const { MotDePasse } = req.body;
    console.log(Nom,Prenom,Nom_Utilisateur,MotDePasse);

    if (!Nom || !Prenom || !Nom_Utilisateur || !MotDePasse) {
        return res.status(400).json('Le Nom,Prenom,Nom_Utilisateur,MotDePasse ne doivent pas etre vides');
    }

    const resultatmail = await request.ifUserExists(Nom_Utilisateur);
    if (resultatmail.length !== 0) return res.status(404).json({ success: false, message: 'Le Nom Utilisateur existe deja' });

    var MotDePasseHash = await bcrypt.hash(MotDePasse, 8);

    try {
        const id = await request.CreateUser(
            Nom,
            Prenom,
            Nom_Utilisateur,
            MotDePasseHash
        );
        return res.status(200).json({
            message: 'Personne ajoutée',
            Personne: id,
        });
    } catch (error) {
        return res.status(500).json(error.message);
    }
});

module.exports = router;