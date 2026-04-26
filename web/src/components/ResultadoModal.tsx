import { useEffect, useState } from "react"

interface Props {
  resultado: any
}

export default function ResultadoModal({ resultado }: Props) {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    if (resultado) {
      setShowModal(true)
    }
  }, [resultado])

  return (
    <div>
      {showModal && resultado && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
          <div
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-300"
            onClick={() => setShowModal(false)}
          ></div>
          <div className="relative bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl w-full max-w-96 overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="bg-emerald-500/20 py-2 text-center border-b border-emerald-500/20">
              <span className="text-emerald-400 text-[10px] font-bold uppercase tracking-[0.3em]">
                Pagamento Confirmado
              </span>
            </div>
            <div className="p-8">
              <h2 className="text-white text-xl font-black text-center mb-8 tracking-tight">
                Saída Registrada
              </h2>
              <div className="flex flex-col gap-6 text-center">
                <div className="relative">
                  <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mb-1">Veículo</p>
                  <div className="bg-slate-800 border border-slate-700 py-2 rounded-lg">
                    <p className="text-2xl font-mono font-bold text-white uppercase tracking-tighter">
                      {resultado.placa}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 border-y border-dashed border-slate-700 py-6">
                  <div className="text-left">
                    <p className="text-[10px] text-slate-500 uppercase font-bold">Permanência</p>
                    <p className="text-lg font-bold text-slate-200">{resultado.horas}h</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-slate-500 uppercase font-bold">Total</p>
                    <p className="text-2xl font-black text-emerald-400">
                      <span className="text-xs mr-0.5">R$</span>
                      {resultado.valor?.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="mt-2 w-full bg-slate-100 hover:bg-white text-slate-900 font-bold py-3 rounded-2xl transition-all active:scale-95 shadow-lg shadow-white/5"
                >
                  Concluído
                </button>
              </div>
            </div>
            <div className="flex justify-center pb-4">
              <div className="h-1 w-12 bg-slate-800 rounded-full" />
            </div>
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  )
}