
using GoodNight.Infrastructure.DataAccess;
using Microsoft.EntityFrameworkCore;
using MediatR;
using Microsoft.EntityFrameworkCore.Migrations;
using GoodNight.Application.UserApplication.Handlers;
using GoodNight.Application.UserApplication;
using GoodNight.Infrastructure.DataAccess.Repositories;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy("CORSPolicy",
        builder =>
        {
            builder
            .AllowAnyMethod()
            .AllowAnyHeader()
            .WithOrigins("http://localhost:3000");
        });
});

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddMediatR(typeof(GetAllUsersHandler).Assembly);
builder.Services.AddHealthChecks().AddSqlServer(builder.Configuration.GetConnectionString("GoodNightDatabase"));
builder.Services.AddDbContext<HotelContext>(opts =>
{
    var connString = builder.Configuration.GetConnectionString("GoodNightDatabase");
    opts.UseSqlServer(connString,
        options => { options.MigrationsAssembly(typeof(HotelContext).Assembly.FullName.Split(',')[0]); });
}).AddTransient<IUserRepository, UserRepository>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors("CORSPolicy");

app.UseAuthorization();

app.MapControllers();

app.Run();
