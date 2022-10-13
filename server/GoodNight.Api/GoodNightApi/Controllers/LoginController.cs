namespace GoodNightApi.Controllers;
using GoodNight.Application.UserApplication.Queries;
using GoodNight.Application.UserApplication.Responses;
using GoodNight.Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/login")]
public class LoginController : ControllerBase
{

    private readonly IMediator mediator;

    public LoginController(IMediator mediator)
    {
        this.mediator = mediator;
    }

    [HttpPost]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(User))]
    [ProducesResponseType(StatusCodes.Status404NotFound, Type = typeof(User))]
    public async Task<ActionResult<LoginResponse>> LoginUser(User user)
    {
        var query = new LoginQuery(user);
        var result = await mediator.Send(query);

        if (result == null)
        {
            return this.NotFound(new ProblemDetails
            {
                Detail = "Login or password is invalid",
            });
        }
        return Ok(result);
    }
}