import { useEffect, useState } from "react"
import type { Status, ResultadoSaida, Veiculo } from "../types"
import api from "../services/api"
import { registrarEntrada, registrarSaida, getVeiculosEstacionados } from "../services/controleService"

export function useEstacionamento() {
  const [status, setStatus] = useState<Status | null>(null)
  const [loading, setLoading] = useState(false)
  const [resultado, setResultado] = useState<ResultadoSaida | null>(null)
  const [veiculosEstacionados, setVeiculosEstacionados] = useState<Veiculo[]>([])

  async function getStatus() {
    try {
      setLoading(true)

      const response = await api.get("/status")
      setStatus(response.data)
    } catch (error) {
      console.error("Erro ao buscar status:", error)
    } finally {
      setLoading(false)
    }
  }

  async function entrada(placa: string) {
    try {
      setLoading(true)
      await registrarEntrada(placa)
      await Promise.all([getStatus(), getVeiculos()])
    } catch (error) {
      console.error("Erro ao registrar entrada:", error)
    } finally {
      setLoading(false)
    }
  }

  async function saida(placa: string) {
    try {
      setLoading(true)
      const response = await registrarSaida(placa)
      setResultado(response.data)
      await Promise.all([getStatus(), getVeiculos()])
    } catch (error) {
      console.error("Erro ao registrar saída:", error)
    } finally {
      setLoading(false)
    }
  }

  async function getVeiculos() {
    try {
      setLoading(true)
      const response = await getVeiculosEstacionados()
      setVeiculosEstacionados(response.data)
    } catch (error) {
      console.error("Erro ao buscar veículos estacionados:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getStatus()
    getVeiculos()
  }, [])

  return { status, loading, resultado, veiculosEstacionados, entrada, saida }
}