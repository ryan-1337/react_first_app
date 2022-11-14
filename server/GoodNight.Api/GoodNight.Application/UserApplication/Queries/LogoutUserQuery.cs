namespace GoodNight.Application.UserApplication.Queries;

using GoodNight.Application.UserApplication.Responses;
using GoodNight.Domain;
using MediatR;

public class LogoutUserQuery : IRequest<LogoutUserResponse>
{
    public int id;

    public LogoutUserQuery(int id)
    {
        this.id = id;
    }
    
}