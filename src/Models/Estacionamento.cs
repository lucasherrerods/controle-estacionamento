using System.ComponentModel.DataAnnotations;

namespace ControleEstacionamento.Models;

public class Estacionamento
{
  [Key]
  public int Id { get; set; }
  public int TotalVagas { get; set; }

  public Estacionamento()
  {
    TotalVagas = 50; // Definindo um valor padrão para o total de vagas
  }

  public Estacionamento(int totalVagas)
  {
    TotalVagas = totalVagas;
  }
}