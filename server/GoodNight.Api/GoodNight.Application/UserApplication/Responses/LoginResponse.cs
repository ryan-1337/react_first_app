namespace GoodNight.Application.UserApplication.Responses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

public class LoginResponse
{
    public int Id { get; set; }

    public string UserName { get; set; }

    public DateTime ConnexionDate { get; set; }
}

