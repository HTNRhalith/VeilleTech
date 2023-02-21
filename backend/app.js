const express = require('express');
require('dotenv').config();


const app = express();
const cors = require('cors');
const authentification = require('./authentification');

const auths = require('./route/auth');
const news = require('./route/news')
const article = require("./route/articles")
const article_scan = require("./route/articles_scan")

const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', auths);
app.use('/news', news);
app.use('/article',article)
app.use('/article_scan',article_scan)

app.listen(PORT, () => {
    console.log(`Mon application roule sur -> http://localhost:${PORT}\n`);
});
