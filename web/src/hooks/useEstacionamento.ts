import { useEffect, useState } from "react"
import type { Status, ResultadoSaida, Veiculo } from "../types"
import api from "../services/api"
import { registrarEntrada, registrarSaida, getVeiculos } from "../services/controleService"
import { toast } from "react-toastify"

export function useEstacionamento() {
  const [status, setStatus] = useState<Status | null>(null)
  const [loading, setLoading] = useState(false)
  const [resultado, setResultado] = useState<ResultadoSaida | null>(null)
  const [veiculosEstacionados, setVeiculosEstacionados] = useState<Veiculo[]>([])
  const [historicoSaidas, setHistoricoSaidas] = useState<ResultadoSaida[]>([])

  async function getStatus() {
    try {
      setLoading(true)

      const response = await api.get("/status")
      setStatus(response.data)
    } catch (error) {
      console.error("Erro ao buscar status:", error)
      toast.error("Erro ao buscar status")

    } finally {
      setLoading(false)
    }
  }

  async function entrada(placa: string) {
    try {
      setLoading(true)
      const response = await registrarEntrada(placa)
      await Promise.all([getStatus(), getVeiculosHistorico()])

      toast.success(response.data.message)
    } catch (error: any) {
      const message = error.response?.data?.message || "Erro ao registrar entrada"
      toast.error(message)

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
      await Promise.all([getStatus(), getVeiculosHistorico()])
    } catch (error: any) {
      const message = error.response?.data?.message || "Erro ao registrar entrada"
      toast.error(message)

      console.error("Erro ao registrar saída:", error)
    } finally {
      setLoading(false)
    }
  }

  async function getVeiculosHistorico() {
    try {
      setLoading(true)
      const response = await getVeiculos()

      const historicoOrdenado = response.data
        .filter((v: Veiculo) => v.horaSaida)
        .sort(
          (a: Veiculo, b: Veiculo) =>
            new Date(b.horaSaida!).getTime() - new Date(a.horaSaida!).getTime()
        )
        .slice(0, 5)

      setHistoricoSaidas(historicoOrdenado)
      setVeiculosEstacionados(response.data)
    } catch (error) {
      console.error("Erro ao buscar veículos estacionados:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getStatus()
    getVeiculosHistorico()
  }, [])

  return { status, loading, resultado, veiculosEstacionados, historicoSaidas, entrada, saida }
}