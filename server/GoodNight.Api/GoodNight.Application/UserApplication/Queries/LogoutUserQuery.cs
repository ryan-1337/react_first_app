namespace GoodNight.Application.UserApplication.Queries;

using GoodNight.Application.UserApplication.Responses;
using GoodNight.Domain;
using MediatR;

public class LogoutUserQuery : IRequest<LogoutUserResponse>
{
    public User user;

    public LogoutUserQuery(User user)
    {
        this.user = user;
    }
    
}