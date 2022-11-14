namespace GoodNight.Application.UserApplication.Handlers;
using GoodNight.Application.UserApplication.Queries;
using GoodNight.Application.UserApplication.Responses;
using MediatR;
using System.Threading.Tasks;

public class LogoutUserHandler : IRequestHandler<LogoutUserQuery, LogoutUserResponse>
{
    private readonly IUserRepository userRepository;

    public LogoutUserHandler(IUserRepository userRepository)
    {
        this.userRepository = userRepository;
    }

    public async Task<LogoutUserResponse> Handle(LogoutUserQuery request, CancellationToken cancellationToken)
    {
        var user = await userRepository.LogoutUserAsync(request.user);

        if (user == null) return null;

        return new LogoutUserResponse { UserName = user.username };
    }
}
