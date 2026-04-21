interface Props {
  status: {
    totalVagas: number
    ocupadas: number
    disponiveis: number
  } | null
}

export default function StatusEstacionamento({ status }: Props) {

  return (
    <div className="bg-gray-800 rounded-2xl shadow p-6 mb-6">
      <h2 className="text-lg font-semibold mb-4">Status</h2>
      <div className="flex gap-8">
        <div>
          <p className="text-gray-400">Total</p>
          <p className="text-xl text-center font-bold">{status?.totalVagas}</p>
        </div>

        <div>
          <p className="text-gray-400">Ocupadas</p>
          <p className="text-xl text-center font-bold text-red-400">{status?.ocupadas}</p>
        </div>

        <div>
          <p className="text-gray-400">Disponíveis</p>
          <p className="text-xl text-center font-bold text-green-400">{status?.disponiveis}</p>
        </div>
      </div>
    </div>
  )
}