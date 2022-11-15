namespace GoodNight.Application.UserApplication.Responses;
using System;

public class LoginResponse
{
    public int Id { get; set; }

    public string UserName { get; set; }

    public DateTime ConnexionDate { get; set; }

    public string Token { get; set; }
}

