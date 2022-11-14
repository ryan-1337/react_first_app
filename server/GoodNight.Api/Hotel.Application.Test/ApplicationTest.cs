using Bogus;
using FizzWare.NBuilder;
using GoodNight.Application.UserApplication;
using GoodNight.Application.UserApplication.Handlers;
using GoodNight.Application.UserApplication.Queries;
using GoodNight.Domain;
using MediatR;
using Moq;

namespace Hotel.Application.Test
{
    public class ApplicationTest
    {
        private Faker fakerData;
        private Mock<IMediator> mediator;
        private Mock<IUserRepository> userRepositoryMock;

        public ApplicationTest()
        {
            mediator = new Mock<IMediator>();
            fakerData = new Faker("fr");
            userRepositoryMock = new Mock<IUserRepository>();
        }

        [Fact]
        public async Task GetAllUsersHandlerReturnsNotNullWhenUsersIsOk()
        {
            var fakeUserList = Builder<User>
                .CreateListOfSize(5)
                .All()
                .With(u => u.id = fakerData.Random.Int())
                .With(u => u.username = fakerData.Lorem.Text())
                .With(u => u.inscription_date = fakerData.Date.Recent())
                .Build()
                .ToList();
                
            userRepositoryMock.Setup(mock => mock.GetAllUserAsync())
                .ReturnsAsync(fakeUserList);

            var handlder = new GetAllUsersHandler(userRepositoryMock.Object);
            var result = await handlder.Handle(new GetAllUsersQuery(), new CancellationToken());

            userRepositoryMock.Verify(m => m.GetAllUserAsync(), Times.Once);
            Assert.NotNull(result);
            Assert.Equal(5, result.Count);
        }

        [Fact]
        public async Task GetAllUsersHandlerReturnsEmptyValueWhenUsersIsEmpty()
        {
            var fakeUserList = new List<User>();
                
            userRepositoryMock.Setup(mock => mock.GetAllUserAsync())
                .ReturnsAsync(fakeUserList);

            var handlder = new GetAllUsersHandler(userRepositoryMock.Object);
            var result = await handlder.Handle(new GetAllUsersQuery(), new CancellationToken());

            userRepositoryMock.Verify(m => m.GetAllUserAsync(), Times.Once);
            Assert.Empty(result);
        }

        [Fact]
        public async Task GetUsersByIdHandlerReturnsNotNullWhenUserIsOk()
        {
            var fakeUser = Builder<User>
                .CreateNew()
                .With(u => u.id = fakerData.Random.Int())
                .With(u => u.username = fakerData.Lorem.Text())
                .With(u => u.inscription_date = fakerData.Date.Recent())
                .Build();
                
            userRepositoryMock.Setup(mock => mock.GetUserByIdAsync(fakeUser.id))
                .ReturnsAsync(fakeUser);

            var handlder = new GetUserByIdHandler(userRepositoryMock.Object);
            var result = await handlder.Handle(new GetUserByIdQuery(fakeUser.id), new CancellationToken());

            userRepositoryMock.Verify(m => m.GetUserByIdAsync(fakeUser.id), Times.Once);
            Assert.NotNull(result);
        }

        [Fact]
        public async Task GetUsersByIdHandlerReturnsNullWhenUserIsNotExist()
        {
            var fakeUser = Builder<User>
                .CreateNew()
                .With(u => u.id = fakerData.Random.Int())
                .With(u => u.username = fakerData.Lorem.Text())
                .With(u => u.inscription_date = fakerData.Date.Recent())
                .Build();
                
            userRepositoryMock.Setup(mock => mock.GetUserByIdAsync(200))
                .ReturnsAsync(fakeUser);

            var handlder = new GetUserByIdHandler(userRepositoryMock.Object);
            var result = await handlder.Handle(new GetUserByIdQuery(fakeUser.id), new CancellationToken());

            userRepositoryMock.Verify(m => m.GetUserByIdAsync(200), Times.Never);
            Assert.Null(result);
        }

        [Fact]
        public async Task IsUserLoggedReturnsNotNullWhenUserIsOk()
        {
            var fakeUser = Builder<User>
                .CreateNew()
                .With(u => u.id = fakerData.Random.Int())
                .With(u => u.username = fakerData.Lorem.Text())
                .With(u => u.connexion_date = fakerData.Date.Recent())
                .Build();

            userRepositoryMock.Setup(mock => mock.LoginAsync(fakeUser))
                .ReturnsAsync(fakeUser);

            var handlder = new LoginHandler(userRepositoryMock.Object);
            var result = await handlder.Handle(new LoginQuery(fakeUser), new CancellationToken());

            Assert.NotNull(result);
        }

        [Fact]
        public async Task IsUserNotLoggedReturnsNullWhenUserIsKo()
        {
            var fakeUser = new User();

            userRepositoryMock.Setup(mock => mock.LoginAsync(null))
                .ReturnsAsync(fakeUser);

            var handlder = new LoginHandler(userRepositoryMock.Object);
            var result = await handlder.Handle(new LoginQuery(fakeUser), new CancellationToken());

            Assert.Null(result);
        }

        [Fact]
        public async Task IsUserCreatedReturnsNotNullWhenUserIsOk()
        {
            var fakeUser = Builder<User>
                .CreateNew()
                .With(u => u.id = fakerData.Random.Int())
                .With(u => u.username = fakerData.Lorem.Text())
                .With(u => u.inscription_date = fakerData.Date.Recent())
                .Build();

            userRepositoryMock.Setup(mock => mock.CreateUserAsync(fakeUser))
                .ReturnsAsync(fakeUser);

            var handlder = new CreateUserHandler(userRepositoryMock.Object);
            var result = await handlder.Handle(new CreateUserQuery(fakeUser), new CancellationToken());

            Assert.NotNull(result);
        }

        [Fact]
        public async Task NotUserCreatedReturnsNull()
        {
            var fakeUser = Builder<User>
                .CreateNew()
                .With(u => u.id = fakerData.Random.Int())
                .With(u => u.username = fakerData.Lorem.Text())
                .With(u => u.inscription_date = fakerData.Date.Recent())
                .Build();

            userRepositoryMock.Setup(mock => mock.CreateUserAsync(null))
                .ReturnsAsync(fakeUser);

            var handlder = new CreateUserHandler(userRepositoryMock.Object);
            var result = await handlder.Handle(new CreateUserQuery(fakeUser), new CancellationToken());

            Assert.Null(result);
        }

       [Fact]
        public async Task IsUserLoggedOutReturnsNotNullWhenUserIsOk()
        {
            var fakeUser = Builder<User>
                .CreateNew()
                .With(u => u.id = fakerData.Random.Int())
                .With(u => u.username = fakerData.Lorem.Text())
                .With(u => u.connexion_date = fakerData.Date.Recent())
                .Build();

            userRepositoryMock.Setup(mock => mock.LogoutUserAsync(fakeUser.id))
                .ReturnsAsync(fakeUser);

            var handlder = new LogoutUserHandler(userRepositoryMock.Object);
            var result = await handlder.Handle(new LogoutUserQuery(fakeUser.id), new CancellationToken());

            Assert.NotNull(result);
        }

        [Fact]
        public async Task IsUserNotLoggedOutReturnsNullWhenUserIsKo()
        {
            var fakeUser = new User();

            userRepositoryMock.Setup(mock => mock.LogoutUserAsync(0))
                .ReturnsAsync(fakeUser);

            var handlder = new LogoutUserHandler(userRepositoryMock.Object);
            var result = await handlder.Handle(new LogoutUserQuery(fakeUser.id), new CancellationToken());

            Assert.Null(result);
        }
    }
}