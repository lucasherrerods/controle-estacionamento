using Microsoft.EntityFrameworkCore;
using ControleEstacionamento.Models;

namespace ControleEstacionamento.Data;

public class AppDbContext : DbContext
{
  public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
  {
  }

  public DbSet<Veiculo> Veiculos { get; set; }
}