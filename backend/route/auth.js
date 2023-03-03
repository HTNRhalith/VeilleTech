const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
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

router.post('/connexion', async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');

    let resultat;

    try {
        const { Username, MotDePasse } = req.body;
        console.log( Username, MotDePasse )
        resultat = await request.Connexion(Username);
        console.log(resultat)
        if (resultat.length === 0) {

            return res.status(404).json({ succes: false });
        }
        password = bcrypt.compareSync(MotDePasse, resultat[0].MotDePasse);
        if (!password) return res.status(401).json({ success: false })

    } catch (error) {
        return res.status(500).json(error);
    }
    const expiresIn = 14400;
    const accessToken = jwt.sign({ Id: resultat[0].Id}, process.env.TOKEN_KEY, {
        expiresIn,
    },resultat[0]);

    return res.status(200).json({
        success: true,
        Id: resultat[0].Id,
        Username: resultat[0].Nom_Utilisateur,
        Nom: resultat[0].Nom,
        Prenom: resultat[0].Prenom,
        access_token: accessToken,
        expires_in: expiresIn,
    });
});

module.exports = router;