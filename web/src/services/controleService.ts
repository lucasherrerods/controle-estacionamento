import api from "./api"

export const registrarEntrada = (placa: string) => {
  return api.post("/entrada", { placa })
}

export const registrarSaida = (placa: string) => {
  return api.post("/saida", { placa })
}