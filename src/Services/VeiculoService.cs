using ControleEstacionamento.Models;
using ControleEstacionamento.Repositories;
using ControleEstacionamento.DTO;

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

    if (string.IsNullOrWhiteSpace(placa) || placa.Length != 7)
    {
      throw new InvalidOperationException("Placa inválida!");
    }

    var veiculo = new Veiculo
    {
      Placa = placa,
      HoraEntrada = DateTime.Now,
      Estacionado = true
    };

    _repository.Adicionar(veiculo);
  }

  public SaidaResult RegistrarSaida(string placa)
  {
    var veiculo = _repository.GetVeiculoByPlaca(placa);

    if (veiculo == null)
    {
      throw new InvalidOperationException("Veículo não encontrado.");
    }

    veiculo.HoraSaida = DateTime.Now;
    veiculo.Estacionado = false;

    _repository.UpdateVeiculo(veiculo);

    var horas = CalcularHoras(veiculo.HoraEntrada, veiculo.HoraSaida.Value);
    var valor = CalcularValor(horas);

    return new SaidaResult
    {
      Placa = veiculo.Placa,
      Horas = horas,
      Valor = valor
    };
  }

  public List<Veiculo> GetVeiculos()
  {
    return _repository.GetVeiculos();
  }

  public List<Veiculo> GetVeiculosEstacionados()
  {
    return _repository.GetVeiculosEstacionados();
  }

  public double CalcularHoras(DateTime entrada, DateTime saida)
  {
    var tempo = saida - entrada;
    return Math.Ceiling(tempo.TotalHours);
  }

  public decimal CalcularValor(double horas)
  {
    if (horas <= 1)
    {
      return 10;
    }

    return 10 + ((decimal)(horas - 1) * 5);
  }
}