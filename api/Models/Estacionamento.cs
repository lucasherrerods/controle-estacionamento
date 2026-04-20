using System.ComponentModel.DataAnnotations;

namespace ControleEstacionamento.Models;

public class Estacionamento
{
  [Key]
  public int Id { get; set; }
  public int TotalVagas { get; set; }

  public Estacionamento()
  {
  }
}