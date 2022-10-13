namespace GoodNight.Application.UserApplication;

using GoodNight.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

public interface IUserRepository
{
    Task<IList<User>> getAllUserAsync();
    Task<User?> getUserByIdAsync(int id);
    Task<User?> CreateUserAsync(User user);
    Task<User?> LoginAsync(User user);
}
