namespace GoodNight.Infrastructure.DataAccess.Repositories;

using Application.UserApplication;
using GoodNight.Domain;
using GoodNight.Infrastructure.DataAccess.Models.Hotel;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using BCrypt.Net;

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

        var userSaved = await this.hotelContext.Utilisateur.AddAsync(new Utilisateur {  USERNAME = user.username, PASSWORD =  BCrypt.HashPassword(user.password), INSCRIPTION_DATE = DateTime.Now});
        await this.hotelContext.SaveChangesAsync();

        user.id = userSaved.Entity.ID;
        user.username = userSaved.Entity.USERNAME;
        user.password = String.Empty;
        user.inscription_date = userSaved.Entity.INSCRIPTION_DATE;

        return user;
    }

    public async Task<User?> LoginAsync(User user)
    {
        var userToLog = await this.hotelContext.Utilisateur.Where(u => u.USERNAME == user.username).FirstOrDefaultAsync();

        if (userToLog == null) return null;

        var password = BCrypt.Verify(user.password, userToLog.PASSWORD);

        if(password)
        {
            userToLog.CONNEXION_DATE = DateTime.Now;
            this.hotelContext.Utilisateur.Update(userToLog); 
            await this.hotelContext.SaveChangesAsync();
            return new User { id = userToLog.ID, username = userToLog.USERNAME, connexion_date = (DateTime)userToLog.CONNEXION_DATE };
        }
        else
        {
            return null;
        }
    }
}
