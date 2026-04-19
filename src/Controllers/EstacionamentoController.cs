using Microsoft.AspNetCore.Mvc;
using ControleEstacionamento.Services;
using System.Diagnostics.CodeAnalysis;

namespace ControleEstacionamento.Controllers;

[ApiController]
[Route("[controller]")]
public class EstacionamentoController : ControllerBase
{
  private readonly VeiculoService _service;

  public EstacionamentoController(VeiculoService service)
  {
    _service = service;
  }

  [HttpPost("entrada")]
  public IActionResult Entrada([FromBody] string placa)
  {
    try
    {
      _service.RegistrarEntrada(placa);
      return Ok(new { message = "Entrada registrada com sucesso!" });
    }
    catch (InvalidOperationException ex)
    {
      return BadRequest(ex.Message);
    }
  }

  [HttpPost("saida")]
  public IActionResult Saida([FromBody] string placa)
  {
    try
    {
      _service.RegistrarSaida(placa);
      return Ok(new { message = "Saída registrada com sucesso" });
    }
    catch (InvalidOperationException ex)
    {
      return BadRequest(ex.Message);
    }
  }

  // Lista de veículos geral
  [HttpGet("veiculos")]
  public IActionResult GetVeiculos()
  {
    var veiculos = _service.GetVeiculos();

    if (veiculos.Count == 0)
    {
      return Ok(new { message = "Nenhum veículo estacionado." });
    }

    return Ok(veiculos);
  }

  // Lista de veículos estacionados no momento
  [HttpGet("veiculos/estacionados")]
  public IActionResult GetVeiculosEstacionados()
  {
    var veiculos = _service.GetVeiculosEstacionados();

    if (veiculos.Count == 0)
    {
      return Ok(new { message = "Nenhum veículo estacionado." });
    }

    return Ok(veiculos);
  }
}