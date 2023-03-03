const express = require('express');
const authentification = require('../authentification');

const requestArticle = require('../database/article_scan');

const router = express.Router();

router.get('/', async (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');

  let resultat;
  try {
    resultat = await requestArticle.getArticleScan();
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