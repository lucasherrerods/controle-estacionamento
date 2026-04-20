namespace ControleEstacionamento.DTO;

public class SaidaResult
{
  public required string Placa { get; set; }
  public double Horas { get; set; }
  public decimal Valor { get; set; }
}