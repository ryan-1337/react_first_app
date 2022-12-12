namespace GoodNight.Application.UserApplication.Handlers;
using GoodNight.Application.UserApplication.Queries;
using GoodNight.Application.UserApplication.Responses;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


public class GetMaxTenUsersHandler : IRequestHandler<GetMaxTenUsersQuery, List<UserResponse>>
{
    private readonly IUserRepository userRepository;

    public GetMaxTenUsersHandler(IUserRepository userRepository)
    {
        this.userRepository = userRepository;
    }

    public async Task<List<UserResponse>> Handle(GetMaxTenUsersQuery request, CancellationToken cancellationToken)
    {
        var user = await userRepository.GetMaxTenUsersAsync();

        var response = user.Select(u => new UserResponse { Id = u.id, UserName = u.username, InscriptionDate = u.inscription_date, ConnexionDate = u.connexion_date }).ToList();

        return response;
    }
}
