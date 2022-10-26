using Bogus;
using FizzWare.NBuilder;
using GoodNight.Application.UserApplication;
using GoodNight.Application.UserApplication.Handlers;
using GoodNight.Application.UserApplication.Queries;
using GoodNight.Application.UserApplication.Responses;
using GoodNight.Domain;
using GoodNightApi.Controllers;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Moq;

namespace Hotel.Api.Test
{
    public class ApiTest
    {
        private Faker fakerData;
        private Mock<IMediator> mediator;

        public ApiTest()
        {
            mediator = new Mock<IMediator>();
            fakerData = new Faker("fr");
        }

        [Fact]
        public async Task GetAllUsersReturnsHttpFoundResultWhenUsersIsOk()
        {
            var controller = new UserController(mediator.Object);
            var result = await controller.GetAllUsers();

            Assert.IsType<OkObjectResult>(result.Result);
        }

        [Fact]
        public async Task GetUsersByIdReturnsHttpFoundResultWhenUsersIsOk()
        {
            var fakeUserResponse = Builder<UserResponse>
                .CreateNew()
                .With(u => u.Id = fakerData.Random.Int())
                .With(u => u.UserName = fakerData.Lorem.Text())
                .With(u => u.InscriptionDate = fakerData.Date.Recent())
                .Build();

            mediator
               .Setup(mock => mock.Send(It.IsAny<GetUserByIdQuery>(), It.IsAny<CancellationToken>()))
               .ReturnsAsync(fakeUserResponse);

            var controller = new UserController(mediator.Object);
            var result = await controller.GetUserById(fakerData.Random.Int());

            Assert.IsType<OkObjectResult>(result.Result);
        }

        [Fact]
        public async Task DoNotGetUsersByIdWhenResultIsNull()
        {
            var fakeUserResponse = Builder<UserResponse>
                .CreateNew()
                .With(u => u.Id = fakerData.Random.Int())
                .With(u => u.UserName = fakerData.Lorem.Text())
                .With(u => u.InscriptionDate = fakerData.Date.Recent())
                .Build();

            var controller = new UserController(mediator.Object);
            var result = await controller.GetUserById(fakerData.Random.Int());

            Assert.IsType<NotFoundObjectResult>(result.Result);
        }


        [Fact]
        public async Task GetUsersByIdReturnsHttpNotFoundResultWhenUsersIsKo()
        {
            mediator
            .Setup(mock => mock.Send(It.IsAny<GetUserByIdQuery>(), It.IsAny<CancellationToken>()))
            .Returns(Task.FromResult<UserResponse>(null));

            var controller = new UserController(mediator.Object);
            var result = await controller.GetUserById(fakerData.Random.Int());

            Assert.IsType<NotFoundObjectResult>(result.Result);
        }

        [Fact]
        public async Task CreateUserReturnsHttpFoundResultWhenUserIsOk()
        {
            var fakeUser = Builder<User>
                .CreateNew()
                .With(u => u.id = fakerData.Random.Int())
                .With(u => u.username = fakerData.Lorem.Text())
                .With(u => u.inscription_date = fakerData.Date.Recent())
                .Build();

            mediator
            .Setup(mock => mock.Send(It.IsAny<CreateUserQuery>(), It.IsAny<CancellationToken>()))
            .ReturnsAsync(new UserResponse { Id = 1 });

            var controller = new UserController(mediator.Object);

            var result = await controller.CreateUser(fakeUser);

            Assert.IsType<OkObjectResult>(result.Result);
        }

        [Fact]
        public async Task DoNotCreateUserWhenResultIsNull()
        {
            var fakeUser = Builder<User>
                .CreateNew()
                .With(u => u.id = fakerData.Random.Int())
                .With(u => u.username = fakerData.Lorem.Text())
                .With(u => u.inscription_date = fakerData.Date.Recent())
                .Build();

            var controller = new UserController(mediator.Object);

            var result = await controller.CreateUser(fakeUser);

            Assert.IsType<NotFoundObjectResult>(result.Result);
        }
    }
}