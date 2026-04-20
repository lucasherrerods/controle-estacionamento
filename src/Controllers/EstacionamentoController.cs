using Microsoft.AspNetCore.Mvc;
using ControleEstacionamento.Services;
using ControleEstacionamento.DTO;
using System.Diagnostics.CodeAnalysis;

namespace ControleEstacionamento.Controllers;

[ApiController]
[Route("[controller]")]
public class EstacionamentoController : ControllerBase
{
  private readonly VeiculoService _veiculoService;
  private readonly EstacionamentoService _estacionamentoService;

  public EstacionamentoController(VeiculoService service, EstacionamentoService estacionamentoService)
  {
    _veiculoService = service;
    _estacionamentoService = estacionamentoService;
  }

  [HttpPost("entrada")]
  public IActionResult Entrada([FromBody] VeiculoRequest request)
  {
    try
    {
      _veiculoService.RegistrarEntrada(request.Placa);
      return Ok(new { message = "Entrada registrada com sucesso!" });
    }
    catch (InvalidOperationException ex)
    {
      return BadRequest(new { message = ex.Message });
    }
  }

  [HttpPost("saida")]
  public IActionResult Saida([FromBody] VeiculoRequest request)
  {
    try
    {
      var resultado = _veiculoService.RegistrarSaida(request.Placa);
      return Ok(resultado);
    }
    catch (InvalidOperationException ex)
    {
      return BadRequest(new { message = ex.Message });
    }
  }

  // Lista de veículos estacionados no momento
  [HttpGet("veiculos")]
  public IActionResult GetVeiculosEstacionados()
  {
    var veiculos = _veiculoService.GetVeiculosEstacionados();

    if (veiculos.Count == 0)
    {
      return NotFound(new { message = "Nenhum veículo estacionado." });
    }

    return Ok(veiculos);
  }

  // Lista de veículos registrados no geral
  [HttpGet("veiculos/historico")]
  public IActionResult GetVeiculos()
  {
    var veiculos = _veiculoService.GetVeiculos();

    if (veiculos.Count == 0)
    {
      return NotFound(new { message = "Nenhum veículo registrado." });
    }

    return Ok(veiculos);
  }

  [HttpGet("veiculos/{placa}")]
  public IActionResult GetVeiculoByPlaca([FromRoute] VeiculoRequest request)
  {
    try
    {
      var veiculo = _veiculoService.GetVeiculoByPlaca(request.Placa);
      return Ok(veiculo);
    }
    catch (InvalidOperationException ex)
    {
      return NotFound(new { message = ex.Message });
    }
  }

  [HttpGet("status")]
  public IActionResult GetStatusEstacionamento()
  {
    var status = _estacionamentoService.GetStatus();
    return Ok(status);
  }
}