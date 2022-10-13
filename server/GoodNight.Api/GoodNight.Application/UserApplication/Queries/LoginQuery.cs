namespace GoodNight.Application.UserApplication.Queries;

using GoodNight.Application.UserApplication.Responses;
using GoodNight.Domain;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

public class LoginQuery : IRequest<LoginResponse>
{
    public User user;

    public LoginQuery(User user)
    {
        this.user = user;
    }
    
}
