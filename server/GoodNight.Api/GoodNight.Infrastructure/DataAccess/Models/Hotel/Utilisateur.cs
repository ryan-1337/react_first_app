﻿namespace GoodNight.Infrastructure.DataAccess.Models.Hotel;

public class Utilisateur
{
    public int ID { get; set; }

    public string USERNAME { get; set; }

    public string PASSWORD { get; set; }

    public DateTime INSCRIPTION_DATE { get; set; }

    public DateTime? CONNEXION_DATE { get; set; }

    public DateTime? DECONNEXION_DATE { get; set; }
}
