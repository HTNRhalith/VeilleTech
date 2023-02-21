-- SQLite
CREATE TABLE Profil (
  Id INTEGER PRIMARY KEY,
  nom TEXT NOT NULL,
  prenom TEXT NOT NULL,
  Nom_Utilisateur TEXT UNIQUE NOT NULL,
  MotDePasse TEXT NOT NULL
);

INSERT INTO Profil (Id, nom, prenom, Nom_Utilisateur, MotDePasse) VALUES
(1, 'Dupont', 'Jean', 'jdupont', 'monmotdepasse'),
(2, 'Martin', 'Marie', 'mmartin', 'motdepasse123'),
(3, 'Garcia', 'Pierre', 'pgarcia', 'password123');
