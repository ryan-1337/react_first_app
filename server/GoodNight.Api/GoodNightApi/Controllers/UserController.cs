namespace GoodNightApi.Controllers;
using GoodNight.Application.UserApplication.Queries;
using GoodNight.Application.UserApplication.Responses;
using GoodNight.Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/users")]
public class UserController : ControllerBase
{

    private readonly IMediator mediator;

    public UserController(IMediator mediator)
    {
        this.mediator = mediator;
    }

    [HttpGet(Name = "Users")]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(User))]
    public async Task<ActionResult<List<UserResponse>>> GetAllUsers()
    {
        var query = new GetAllUsersQuery();
        var result = await mediator.Send(query);
        return Ok(result);
    }

    [HttpGet("{id:int}")]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(User))]
    [ProducesResponseType(StatusCodes.Status404NotFound, Type = typeof(User))]
    public async Task<ActionResult<UserResponse>> GetUserById(int id)
    {
        var query = new GetUserByIdQuery(id);
        var result = await mediator.Send(query);

        if (result == null)
        {
            return this.NotFound(new ProblemDetails
            {
                Detail = "User not found",
            });
        }
        return Ok(result);
    }

    [HttpPost]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(User))]
    [ProducesResponseType(StatusCodes.Status404NotFound, Type = typeof(User))]
    public async Task<ActionResult<UserResponse>> CreateUser(User user)
    {
        var query = new CreateUserQuery(user);
        var result = await mediator.Send(query);

        if (result == null)
        {
            return this.NotFound(new ProblemDetails
            {
                Detail = "User not found",
            });
        }
        return Ok(result);
    }
}