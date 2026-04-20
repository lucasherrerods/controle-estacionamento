using System.ComponentModel.DataAnnotations;

namespace ControleEstacionamento.Models;

public class Veiculo
{
  [Key]
  public int Id { get; set; }
  public required string Placa { get; set; }
  public DateTime HoraEntrada { get; set; }
  public DateTime? HoraSaida { get; set; }
  public bool Estacionado { get; set; }

  public Veiculo()
  {
  }
}