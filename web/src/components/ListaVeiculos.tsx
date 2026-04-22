import type { Veiculo } from "../types"

interface Props {
  veiculos: Veiculo[]
}

export default function ListaVeiculos({ veiculos }: Props) {
  return (
    <div className="bg-gray-800 rounded-2xl shadow p-6">
      <h2 className="text-lg font-semibold mb-4">Veículos Estacionados</h2>

      <table className="w-full border-collapse">
        <thead>
          <tr className="text-left border-b border-gray-700">
            <th className="py-2">Placa</th>
            <th className="py-2">Entrada</th>
            <th className="py-2">Status</th>
          </tr>
        </thead>

        <tbody>
          {veiculos.length === 0 ? (
            <tr className="border-b border-gray-700">
              <td className="py-2">Nenhum veículo estacionado.</td>
            </tr>
          ) : (
            veiculos.map((v, index) => (
              <tr key={index}>
                <td className="py-2">{v.placa}</td>
                <td className="py-2">{new Date(v.horaEntrada).toLocaleTimeString()}</td>
                <td className="py-2 text-green-400 font-semibold">
                  Estacionado
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}