import { useEffect, useState } from "react"
import type { Status, ResultadoSaida } from "../types"
import api from "../services/api"
import { registrarEntrada, registrarSaida } from "../services/controleService"

export function useEstacionamento() {
  const [status, setStatus] = useState<Status | null>(null)
  const [loading, setLoading] = useState(false)
  const [resultado, setResultado] = useState<ResultadoSaida | null>(null)

  async function getStatus() {
    try {
      setLoading(true)

      const response = await api.get("/status")
      setStatus({ ...response.data })
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
      await getStatus()
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
      await getStatus()
    } catch (error) {
      console.error("Erro ao registrar saída:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getStatus()
  }, [])

  return { status, loading, resultado, entrada, saida }
}