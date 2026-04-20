import { useEffect, useState } from "react"
import type { Status } from "../types"
import api from "../services/api"

export function useEstacionamento() {
  const [status, setStatus] = useState<Status | null>(null)
  const [loading, setLoading] = useState(false)

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

  useEffect(() => {
    getStatus()
  }, [])

  return { status, loading, getStatus }
}