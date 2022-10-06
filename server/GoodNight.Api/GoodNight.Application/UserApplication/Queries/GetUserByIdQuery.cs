namespace GoodNight.Application.UserApplication.Queries;

using GoodNight.Application.UserApplication.Responses;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

public class GetUserByIdQuery : IRequest<UserResponse>
{
    public int Id { get; set; }
    public GetUserByIdQuery(int userId)
    {
        Id = userId;
    }
    
}
