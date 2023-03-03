const knex = require('knex')({
    client: 'sqlite3',
    connection: {
      filename: "./school.db"
    }
  });

function CreateUser(nom, prenom, Nom_Utilisateur, MotDePasse) {
    return knex('Profil')
        .insert({
            nom,
            prenom,
            Nom_Utilisateur,
            MotDePasse,
        });
}

function Connexion(Username) {
    return knex('Profil')
        .where('Nom_Utilisateur', Username)
}

function ifUserExists(Username) {
    return knex('Profil').where({
        Nom_Utilisateur: Username
    }).select('Nom_Utilisateur', 'Id')
}

function findMdp(Nom_Utilisateur) {
    return knex('Profil').where({
        Nom_Utilisateur: Nom_Utilisateur
    }).select('MotDePasse')
}


module.exports = {
    CreateUser,
    Connexion,
    ifUserExists,
    findMdp
};