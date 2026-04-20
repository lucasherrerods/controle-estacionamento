using Microsoft.EntityFrameworkCore;
using ControleEstacionamento.Repositories;
using ControleEstacionamento.Services;

var builder = WebApplication.CreateBuilder(args);

// Injetando dependências

builder.Services.AddControllers();
builder.Services.AddScoped<VeiculoRepository>();
builder.Services.AddScoped<VeiculoService>();
builder.Services.AddScoped<EstacionamentoService>();

// Database em memória
builder.Services.AddDbContext<ControleEstacionamento.Data.AppDbContext>(options =>
    options.UseInMemoryDatabase("MemoryDb"));

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
