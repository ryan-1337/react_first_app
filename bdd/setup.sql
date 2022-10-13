CREATE DATABASE Hotel;
GO
USE Hotel;
GO

CREATE TABLE Utilisateur (ID int NOT NULL identity(1,1) PRIMARY KEY, Username varchar(30), Password varchar(255), Inscription_Date smalldatetime, Connexion_Date smalldatetime);

GO