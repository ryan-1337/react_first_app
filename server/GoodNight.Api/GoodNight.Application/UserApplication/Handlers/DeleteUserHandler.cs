namespace GoodNight.Application.UserApplication.Handlers;
using GoodNight.Application.UserApplication.Queries;
using GoodNight.Application.UserApplication.Responses;
using MediatR;
using System.Threading.Tasks;

public class DeleteUserHandler : IRequestHandler<DeleteUserQuery, DeleteUserResponse>
{
    private readonly IUserRepository userRepository;

    public DeleteUserHandler(IUserRepository userRepository)
    {
        this.userRepository = userRepository;
    }

    public async Task<DeleteUserResponse> Handle(DeleteUserQuery request, CancellationToken cancellationToken)
    {
        var user = await userRepository.DeleteUserAsync(request.id);

        if (user == null) return null;

        return new DeleteUserResponse { UserName = user.username };
    }
}
