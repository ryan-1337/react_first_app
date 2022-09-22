namespace GoodNight.Infrastructure.DataAccess.Models.Configurations;

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Hotel;

public class UserConfiguration : IEntityTypeConfiguration<USER>
{
    public void Configure(EntityTypeBuilder<USER> entity)
    {
        entity.ToTable("USER", "Hotel");

        entity.Property(e => e.ID);
        entity.Property(e => e.USERNAME)
            .HasMaxLength(30).IsRequired();
        entity.Property(e => e.PASSWORD)
            .HasMaxLength(30).IsRequired();
    }
}
