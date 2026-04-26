import { useState } from "react"
import type { ResultadoSaida } from "../types"

export default function BilheteSaidas({ historicoSaidas }: { historicoSaidas: ResultadoSaida[] }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="bg-slate-800 p-2.5 rounded-xl hover:bg-slate-700 transition-colors shadow-lg border border-slate-700 flex items-center gap-2 group cursor-pointer"
      >
        <span className="text-xl">🧾</span>
        <span className="text-sm font-medium text-slate-300 group-hover:text-white pr-1">Histórico</span>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            onClick={() => setOpen(false)}
          />
          <div className="relative bg-slate-900 w-full max-w-sm rounded-3xl shadow-2xl border border-slate-800 overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="bg-slate-800/50 px-6 py-4 border-b border-slate-800 flex justify-between items-center">
              <div>
                <h3 className="text-white font-bold">Relatório de Saídas</h3>
                <p className="text-xs text-slate-400">Registros recentes <span className="font-bold">(5)</span></p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-700 text-slate-400 transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="p-6">
              {historicoSaidas.length === 0 ? (
                <div className="text-center py-10">
                  <p className="text-slate-500 italic">Nenhum registro encontrado</p>
                </div>
              ) : (
                <div className="flex flex-col gap-3 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
                  {historicoSaidas.map((item, index) => (
                    <div
                      key={index}
                      className="group relative bg-slate-800/40 border border-slate-700/50 p-4 rounded-2xl hover:border-blue-500/50 transition-all shadow-sm"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <span className="bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                          Ticket Finalizado
                        </span>
                        <span className="text-xs text-slate-500 font-mono">#{index + 1}</span>
                      </div>

                      <div className="flex justify-between items-end">
                        <div>
                          <p className="text-lg font-mono font-bold text-white tracking-tight leading-none mb-1">
                            {item.placa.toUpperCase()}
                          </p>
                          <p className="text-xs text-slate-400 flex items-center gap-1">
                            🕒 {item.horas}h de permanência
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-slate-500 leading-none">Total pago</p>
                          <p className="text-xl font-black text-emerald-400">
                            <span className="text-xs mr-0.5">R$</span>
                            {item.valor?.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="bg-slate-800/30 px-6 py-3 text-center">
              <div className="w-full border-t border-dashed border-slate-700 mb-2" />
              <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em]">Contrle de Estacionamento v1.0</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
