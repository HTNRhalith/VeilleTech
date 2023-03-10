const knex = require('knex')({
    client: 'sqlite3',
    connection: {
      filename: "./school.db"
    },
    useNullasDefault: true
  });


function getArticle(){
    return knex('Article')
    .select('*');

}

function getArticleId() {
    return knex('Article')
      .select('id')
      .orderBy('id', 'desc');
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
    getArticleParProfil,
    getArticleId

    
};