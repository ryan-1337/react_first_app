namespace GoodNight.Application.UserApplication.Queries;

using GoodNight.Application.UserApplication.Responses;
using GoodNight.Domain;
using MediatR;

public class DeleteUserQuery : IRequest<DeleteUserResponse>
{
    public int id;

    public DeleteUserQuery(int id)
    {
        this.id = id;
    }
    
}