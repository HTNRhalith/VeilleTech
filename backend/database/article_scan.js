const knex = require("knex")({
  client: "sqlite3",
  connection: {
    filename: "./school.db",
  },
});

function getArticleScan() {
  return knex("Article_scan").select("*");
}

function insertArticle(
  source_name,
  author,
  title,
  description,
  url,
  url_to_image,
  published_at,
  content
) {
  return knex("Article_scan").insert({
    source_name,
    author,
    title,
    description,
    url,
    url_to_image,
    published_at,
    content,
  });
}

function supArticle(idArticle) {
  return knex("Article_scan")
    .where({
      id: idArticle,
    })
    .del();
}

function getArticleById(id){
    return knex("Article_scan")
    .where({
        id : id
    })
}

module.exports = {
  insertArticle,
  getArticleScan,
  supArticle,
  getArticleById
};
