GO

ALTER  TABLE  Utilisateur WITH CHECK 
   ADD CONSTRAINT UQ_Username UNIQUE (Username);