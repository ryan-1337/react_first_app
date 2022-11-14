namespace GoodNight.Application.UserApplication.Handlers;
using GoodNight.Application.UserApplication.Queries;
using GoodNight.Application.UserApplication.Responses;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


public class GetAllUsersHandler : IRequestHandler<GetAllUsersQuery, List<UserResponse>>
{
    private readonly IUserRepository userRepository;

    public GetAllUsersHandler(IUserRepository userRepository)
    {
        this.userRepository = userRepository;
    }

    public async Task<List<UserResponse>> Handle(GetAllUsersQuery request, CancellationToken cancellationToken)
    {
        var user = await userRepository.GetAllUserAsync();

        var response = user.Select(u => new UserResponse { Id = u.id, UserName = u.username }).ToList();
        
        return response;
    }
}
