using Microsoft.AspNetCore.Mvc;
using ControleEstacionamento.Services;
using ControleEstacionamento.DTO;
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
  public IActionResult Entrada([FromBody] VeiculoRequest request)
  {
    try
    {
      _service.RegistrarEntrada(request.Placa);
      return Ok(new { message = "Entrada registrada com sucesso!" });
    }
    catch (InvalidOperationException ex)
    {
      return BadRequest(ex.Message);
    }
  }

  [HttpPost("saida")]
  public IActionResult Saida([FromBody] VeiculoRequest request)
  {
    try
    {
      var resultado = _service.RegistrarSaida(request.Placa);
      return Ok(resultado);
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
      return Ok(new { message = "Nenhum veículo registrado." });
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