import { useState } from "react"
import type { Veiculo } from "../types"

interface Props {
  veiculos: Veiculo[]
}

export default function ListaVeiculos({ veiculos }: Props) {
  const [aba, setAba] = useState<"estacionados" | "historico">("estacionados")

  const veiculosFiltrados = aba === "estacionados"
    ? veiculos.filter(v => v.estacionado)
    : veiculos

  const statusEstacionamento = (v: Veiculo) => {
    if (v.estacionado) return "Estacionado"
    if (!v.estacionado) return "Saída registrada"
  }

  return (
    <div className="bg-gray-800 rounded-2xl shadow p-6">
      <h2 className="text-lg font-semibold mb-4">Veículos</h2>

      <div className="flex gap-4 mb-4">
        <button
          onClick={() => setAba("estacionados")}
          className={`px-4 py-2 rounded-lg ${aba === "estacionados"
            ? "bg-blue-600 text-white"
            : "bg-gray-700 text-gray-300"
            }`}
        >
          Estacionados
        </button>

        <button
          onClick={() => setAba("historico")}
          className={`px-4 py-2 rounded-lg ${aba === "historico"
            ? "bg-blue-600 text-white"
            : "bg-gray-700 text-gray-300"
            }`}
        >
          Histórico
        </button>
      </div>

      <table className="w-full border-collapse table-fixed">
        <thead>
          <tr className="text-left border-b border-gray-700">
            <th className="py-2">ID</th>
            <th className="py-2">Placa</th>
            <th className="py-2">Entrada</th>
            <th className="py-2">Saída</th>
            <th className="py-2">Status</th>
          </tr>
        </thead>

        <tbody>
          {veiculosFiltrados.length === 0 ? (
            <tr className="border-b border-gray-700">
              <td className="py-2">Nenhum veículo estacionado.</td>
            </tr>
          ) : (
            veiculosFiltrados.map((v) => (
              <tr key={v.id}>
                <td className="py-2">{v.id}</td>
                <td className="py-2">{v.placa}</td>
                <td className="py-2">{new Date(v.horaEntrada).toLocaleTimeString()}</td>
                <td className="py-2">{v.horaSaida ? new Date(v.horaSaida).toLocaleTimeString() : '-'}</td>
                <td className={`py-2 ${statusEstacionamento(v) === 'Estacionado' ? 'text-green-400' : 'text-yellow-400'} font-semibold`}>
                  {statusEstacionamento(v)}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}