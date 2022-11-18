namespace GoodNight.Infrastructure.DataAccess.Models.Configurations;

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Hotel;

public class ConnectLogConfiguration : IEntityTypeConfiguration<Connect_Log>
{
    public void Configure(EntityTypeBuilder<Connect_Log> entity)
    {
        entity.ToTable("Connect_Log", "Hotel");

        entity.Property(e => e.ID)
            .UseIdentityColumn(1);
        entity.Property(e => e.CLE)
            .HasMaxLength(30);
        entity.Property(e => e.GENERATED_KEY);
    }
}
