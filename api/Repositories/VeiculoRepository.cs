using ControleEstacionamento.Models;
using ControleEstacionamento.Data;
using Microsoft.EntityFrameworkCore;

namespace ControleEstacionamento.Repositories;

public class VeiculoRepository
{
  private readonly AppDbContext _context;

  public VeiculoRepository(AppDbContext context)
  {
    _context = context;
  }

  public void Adicionar(Veiculo veiculo)
  {
    _context.Veiculos.Add(veiculo);
    _context.SaveChanges();
  }

  public List<Veiculo> GetVeiculos()
  {
    return _context.Veiculos.ToList();
  }

  public List<Veiculo> GetVeiculosEstacionados()
  {
    return _context.Veiculos.Where(v => v.Estacionado).ToList();
  }

  public Veiculo? GetVeiculoByPlaca(string placa)
  {
    return _context.Veiculos.FirstOrDefault(v => v.Placa == placa && v.Estacionado);
  }

  public void UpdateVeiculo(Veiculo veiculo)
  {
    _context.Veiculos.Update(veiculo);
    _context.SaveChanges();
  }
}