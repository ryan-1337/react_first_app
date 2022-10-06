using GoodNight.Infrastructure.DataAccess.Models.Configurations;
using GoodNight.Infrastructure.DataAccess.Models.Hotel;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics.Contracts;

namespace GoodNight.Infrastructure.DataAccess
{
    public class HotelContext : DbContext 
    { 
        public HotelContext(DbContextOptions<HotelContext> options) : base(options) 
        { 
        }

        public DbSet<Utilisateur> Utilisateur { get; set; }
    }
}

