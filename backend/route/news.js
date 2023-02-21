const express = require("express");
const fetch = require("node-fetch");

const requestTranslatte = require("../database/function");

const request = require("../database/article_scan");
const router = express.Router();

router.get("/", async (req, res) => {
  const url = `https://newsapi.org/v2/everything?q=bitcoin&from=2023-01-21&sortBy=publishedAt&apiKey=23b785e4015c42f4a179e72e78decdf0`;
  const response = await fetch(url);
  const json = await response.json();
  data = json.articles;
  try {
    for (let i = 0; i < data.length; i++) {
      const titre = await requestTranslatte.translatedText(data[i].title);
      const description = await requestTranslatte.translatedText(
        data[i].description
      );
      const content = await requestTranslatte.translatedText(data[i].content);
      console.log(i);
      // console.log(titre);
      // console.log(description);
      // console.log(content);
      let resultat;
      try {
      resultat = await request.insertArticle(
        data[i].source.name,
        data[i].author,
        titre,
        description,
        data[i].url,
        data[i].urlToImage,
        data[i].publishedAt,
        content
      );

    }catch (error) {
      continue;
    }
    continue;
  }
  } catch (error) {
    return res.status(500).json(error.message);
  }
  return res.status(200);
});


module.exports = router;
