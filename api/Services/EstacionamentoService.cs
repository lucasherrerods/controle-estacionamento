using ControleEstacionamento.DTO;
using ControleEstacionamento.Repositories;

namespace ControleEstacionamento.Services;

public class EstacionamentoService
{
  private readonly VeiculoRepository _repository;

  public EstacionamentoService(VeiculoRepository repository)
  {
    _repository = repository;
  }

  private const int TOTAL_VAGAS = 50;

  public StatusEstacionamento GetStatus()
  {
    var ocupadas = _repository.GetVeiculosEstacionados().Count;
    var disponiveis = TOTAL_VAGAS - ocupadas;

    return new StatusEstacionamento
    {
      TotalVagas = TOTAL_VAGAS,
      Ocupadas = ocupadas,
      Disponiveis = disponiveis
    };
  }

  public bool VagaDisponivel()
  {
    var ocupadas = _repository.GetVeiculosEstacionados().Count;
    return ocupadas < TOTAL_VAGAS;
  }
}