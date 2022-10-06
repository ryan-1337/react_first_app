namespace GoodNight.Infrastructure.DataAccess.Repositories;

using Application.UserApplication;
using GoodNight.Domain;
using GoodNight.Infrastructure.DataAccess.Models.Hotel;
using Microsoft.EntityFrameworkCore;
using System.Linq;

public class UserRepository : IUserRepository
{
    private readonly HotelContext hotelContext;

    public UserRepository(HotelContext hotelContext)
    {
        this.hotelContext = hotelContext;
    }

    public async Task<IList<User>> getAllUserAsync()
    {
        return await this.hotelContext.Utilisateur.Select(u => new User { id = u.ID, username = u.USERNAME, password = u.PASSWORD}).ToListAsync();
    }

    public async Task<User?> getUserByIdAsync(int userId)
    {
        var user = await this.hotelContext.Utilisateur.FirstOrDefaultAsync(u => u.ID == userId);

        if (user == null) return null;

        return new User { id = user.ID, username = user.USERNAME, password = user.PASSWORD };
    }

    public async Task<User?> CreateUserAsync(User user)
    {
        if (user == null) return null;

        var userSaved = await this.hotelContext.Utilisateur.AddAsync(new Utilisateur {  USERNAME = user.username, PASSWORD = user.password });
        await this.hotelContext.SaveChangesAsync();

        user.id = userSaved.Entity.ID;
        user.username = userSaved.Entity.USERNAME;
        user.password = String.Empty;

        return user;
    }
}
