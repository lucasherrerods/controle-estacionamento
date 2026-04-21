interface Props {
  entrada: (placa: string) => Promise<void>
  saida: (placa: string) => Promise<void>
  resultado: any
}

import { useState } from "react"

export default function ControleAcesso({ entrada, saida, resultado }: Props) {

  const [placaEntrada, setPlacaEntrada] = useState("")
  const [placaSaida, setPlacaSaida] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <div className="bg-gray-800 rounded-2xl shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Entrada</h2>

        <input
          value={placaEntrada}
          onChange={(e) => setPlacaEntrada(e.target.value)}
          type="text"
          placeholder="Digite a placa"
          className="w-full bg-gray-900 border border-gray-700 rounded-lg p-2 mb-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button onClick={() => entrada(placaEntrada)} className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          Registrar Entrada
        </button>
      </div>
      <div className="bg-gray-800 rounded-2xl shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Saída</h2>
        <input
          value={placaSaida}
          onChange={(e) => setPlacaSaida(e.target.value)}
          type="text"
          placeholder="Digite a placa"
          className="w-full bg-gray-900 border border-gray-700 rounded-lg p-2 mb-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <button onClick={() => saida(placaSaida)} className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition">
          Registrar Saída
        </button>
      </div>
      {resultado && (
        <div className="w-full bg-gray-800 rounded-2xl shadow p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">Resultado da Saída</h2>

          <div className="flex gap-6">
            <div>
              <p className="text-gray-400">Placa</p>
              <p className="font-bold">{resultado?.placa}</p>
            </div>

            <div>
              <p className="text-gray-400">Horas</p>
              <p className="font-bold">{resultado?.horas}</p>
            </div>

            <div>
              <p className="text-gray-400">Valor</p>
              <p className="font-bold text-green-400">R$ {resultado?.valor}</p>
            </div>
          </div>
        </div>
      )}
    </form>
  )
}