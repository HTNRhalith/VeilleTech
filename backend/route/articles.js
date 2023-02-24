const express = require('express');
const authentification = require('../authentification');

const requestArticle = require('../database/articles');

const router = express.Router();

router.get('/', async (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');

  let resultat;
  try {
    resultat = await requestArticle.getArticle();
  } catch (error) {
    return res.status(500).json(error.message);
  }

  return res.status(200).json(resultat);
});

router.post('/ajouter-livre', authentification,async (req, res) => {
  const {titre,mot_cle,video, description,contenu} = req.body;
  try {
    const id = await requestArticle.getArticleId();
    newsId = id[0].id + 1;
    const reponse = await requestArticle.insertArticle(titre,mot_cle,video, description,contenu,req.decoded.Id)
    return res.status(200).send({
      success: true,
      Message: "Le livre a été ajouté avec succès",
      Status: 200,
      Information: reponse
    });

  } catch (error) {
    console.log(error)
    return res.status(400).json({
      success: false,
      message: 'server error'
    })
  }
});

router.delete('/:bookId', authentification,async (req, res) => {
  try {

    const reponse = await requestArticle.supArticle(req.params.bookId)

    return res.status(200).send({
      success: true,
      Message: "Le livre a été supprimer avec succès",
      Status: 200,
      Information: reponse
    });

  } catch (error) {
    console.log(error)
    return res.status(400).json({
      success: false,
      message: 'server error'
    })
  }
});

router.get('/utilisateurs/:userId', authentification,async (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');

  let resultat;
  try {
    resultat = await requestArticle.getArticleParProfil(req.params.userId);
  } catch (error) {
    return res.status(500).json(error.message);
  }

  return res.status(200).json(resultat);
});

router.get('/:articleId', async (req, res) => {

  let resultat;

  try {
    resultat = await requestArticle.getArticleParId(req.params.articleId);
    console.log(resultat)
  } catch (error) {
    return res.status(500).json(error.message);
  }

  return res.status(200).json(resultat[0]);
});

module.exports = router;