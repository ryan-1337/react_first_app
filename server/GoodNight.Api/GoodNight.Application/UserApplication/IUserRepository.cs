namespace GoodNight.Application.UserApplication;

using GoodNight.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

public interface IUserRepository
{
    Task<IList<User>> GetAllUserAsync();
    Task<IList<User>> GetMaxTenUsersAsync();
    Task<User?> GetUserByIdAsync(int id);
    Task<User?> CreateUserAsync(User user);
    Task<User?> LoginAsync(User user);
    Task<User?> LogoutUserAsync(int id);
}
