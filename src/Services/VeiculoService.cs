using System.Security.Cryptography.X509Certificates;
using ControleEstacionamento.Models;
using ControleEstacionamento.Repositories;

namespace ControleEstacionamento.Services;

public class VeiculoService
{
  private readonly VeiculoRepository _repository;

  public VeiculoService(VeiculoRepository repository)
  {
    _repository = repository;
  }

  public void RegistrarEntrada(string placa)
  {
    var existente = _repository.GetVeiculoByPlaca(placa);

    if (existente != null)
    {
      throw new InvalidOperationException("Veículo já está estacionado.");
    }

    if (string.IsNullOrWhiteSpace(placa))
    {
      throw new InvalidOperationException("Formato de placa inválido");
    }

    var veiculo = new Veiculo
    {
      Placa = placa,
      HoraEntrada = DateTime.Now,
      Estacionado = true
    };

    _repository.Adicionar(veiculo);
  }

  public void RegistrarSaida(string placa)
  {
    var veiculo = _repository.GetVeiculoByPlaca(placa);

    if (veiculo == null)
    {
      throw new InvalidOperationException("Veículo não encontrado.");
    }

    veiculo.HoraSaida = DateTime.Now;
    veiculo.Estacionado = false;

    _repository.UpdateVeiculo(veiculo);
  }

  public List<Veiculo> GetVeiculos()
  {
    return _repository.GetVeiculos();
  }

  public List<Veiculo> GetVeiculosEstacionados()
  {
    return _repository.GetVeiculosEstacionados();
  }
}