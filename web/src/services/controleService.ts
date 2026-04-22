import api from "./api"

export const registrarEntrada = (placa: string) => {
  return api.post("/entrada", { placa })
}

export const registrarSaida = (placa: string) => {
  return api.post("/saida", { placa })
}

export const getVeiculosEstacionados = () => {
  return api.get("/veiculos")
}

export const getVeiculos = () => {
  return api.get("/veiculos/historico")
}