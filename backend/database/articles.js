const knex = require('knex')({
    client: 'sqlite3',
    connection: {
      filename: "./school.db"
    }
  });


function getArticle(){
    return knex('Article')
    .select('*');

}

function insertArticle(titre, mot_cle, video, description,contenu,id_profil) {
    return knex('Article')
        .insert({
            titre, mot_cle, video, description,contenu,id_profil
        });
}

function supArticle(idArticle) {
    return knex('Article')
        .where({
            Id: idArticle,
        })
        .del();
}

function getArticleParProfil(id) {
    return knex("Article")
        .where('id_profil', id)
}

function getArticleParId(id){
    return knex("Article")
    .where("id",id)
}

module.exports = {
    insertArticle,
    getArticle,
    supArticle,
    getArticleParId,
    getArticleParProfil

    
};