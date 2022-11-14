namespace GoodNight.Application.UserApplication.Handlers;
using GoodNight.Application.UserApplication.Queries;
using GoodNight.Application.UserApplication.Responses;
using MediatR;
using System.Threading.Tasks;

public class GetUserByIdHandler : IRequestHandler<GetUserByIdQuery, UserResponse>
{
    private readonly IUserRepository userRepository;

    public GetUserByIdHandler(IUserRepository userRepository)
    {
        this.userRepository = userRepository;
    }

    public async Task<UserResponse> Handle(GetUserByIdQuery request, CancellationToken cancellationToken)
    {
        var user = await userRepository.GetUserByIdAsync(request.Id);

        if (user == null) return null;

        return new UserResponse { Id = user.id, UserName = user.username };
    }
}
