namespace GoodNight.Application.UserApplication.Handlers;
using GoodNight.Application.UserApplication.Queries;
using GoodNight.Application.UserApplication.Responses;
using MediatR;
using System.Threading.Tasks;


public class LoginHandler : IRequestHandler<LoginQuery, LoginResponse>
{
    private readonly IUserRepository userRepository;

    public LoginHandler(IUserRepository userRepository)
    {
        this.userRepository = userRepository;
    }

    public async Task<LoginResponse> Handle(LoginQuery request, CancellationToken cancellationToken)
    {
        var user = await userRepository.LoginAsync(request.user);

        if (user == null) return null;

        return new LoginResponse { Id = user.id, UserName = user.username, ConnexionDate = user.connexion_date, Token = user.token };
    }
}
