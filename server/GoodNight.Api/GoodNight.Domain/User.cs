
namespace GoodNight.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
public class User
{
    public int id { get; set; }    

    public string username { get; set; }    

    public string password { get; set; }

    public DateTime inscription_date { get; set; }

    public DateTime connexion_date { get; set; }

    public DateTime? deconnexion_date { get; set; }

    public string? token { get; set; }
}
