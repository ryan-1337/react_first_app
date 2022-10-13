namespace GoodNight.Infrastructure.DataAccess.Models.Configurations;

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Hotel;

public class UserConfiguration : IEntityTypeConfiguration<Utilisateur>
{
    public void Configure(EntityTypeBuilder<Utilisateur> entity)
    {
        entity.ToTable("Utilisateur", "Hotel");

        entity.Property(e => e.ID)
            .UseIdentityColumn(1);
        entity.Property(e => e.USERNAME)
            .HasMaxLength(30)
            .IsRequired();
        entity.Property(e => e.PASSWORD)
            .HasMaxLength(255)
            .IsRequired();
        entity.Property(e => e.INSCRIPTION_DATE);
        entity.Property(e => e.CONNEXION_DATE);
    }
}
