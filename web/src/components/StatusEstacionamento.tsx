interface Props {
  status: {
    totalVagas: number
    ocupadas: number
    disponiveis: number
  } | null
}

export default function StatusEstacionamento({ status }: Props) {
  const totalVagas = status?.totalVagas ?? 0
  const ocupadas = status?.ocupadas ?? 0
  const disponiveis = status?.disponiveis ?? 0

  const porcentagem = totalVagas > 0 ? (ocupadas / totalVagas) * 100 : 0

  return (
    <div className="bg-gray-800 rounded-3xl p-6 mb-8 relative group">
      <div className="absolute top-0 left-0 w-full h-0.5 from-transparent via-blue-500/50 to-transparent" />
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <h2 className="text-white font-bold tracking-tight uppercase text-sm">Tempo Real</h2>
          </div>
          <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden border border-slate-700/50 p-0.5">
            <div
              className="h-full rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 transition-all duration-1000 ease-out"
              style={{
                width: `${porcentagem}%`
              }}
            />
          </div>
          <p className="text-xs mt-2 tracking-widest">
            <span className={`${porcentagem == 100 ? 'text-rose-500' : 'text-yellow-300'}`}>{porcentagem.toFixed(1)}%</span> de capacidade utilizada
          </p>
        </div>
        <div className="flex items-center gap-4 sm:gap-8">
          <div className="text-center px-4">
            <p className="text-sm text-slate-500 font-bold uppercase">Capacidade</p>
            <p className="text-2xl font-black text-white">
              {totalVagas}
            </p>
          </div>
          <div className="h-10 w-0.5 bg-slate-500" />
          <div className="text-center px-4">
            <p className="text-sm text-slate-500 font-bold uppercase mb-1 text-rose-500">Ocupadas</p>
            <p className="text-2xl font-black text-rose-500">
              {ocupadas}
            </p>
          </div>

          {/* Disponíveis */}
          <div className="text-center px-4">
            <p className="text-sm text-slate-500 font-bold uppercase mb-1 text-emerald-500">Livres</p>
            <p className="text-2xl font-black text-emerald-400">
              {disponiveis}
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}