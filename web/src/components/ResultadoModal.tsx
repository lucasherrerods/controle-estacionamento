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
        <div className="fixed inset-0 flex items-center justify-center z-50">

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fadeIn"></div>

          {/* MODAL */}
          <div className="relative bg-gray-800 rounded-2xl shadow-lg p-6 w-96 ">

            <h2 className="text-lg font-semibold mb-4 text-center">
              Saída registrada
            </h2>

            <div className="flex flex-col gap-3 text-center">
              <div>
                <p className="text-gray-400">Placa</p>
                <p className="font-bold">{resultado.placa}</p>
              </div>

              <div>
                <p className="text-gray-400">Tempo estacionado</p>
                <p className="font-bold">{resultado.horas}h</p>
              </div>

              <div>
                <p className="text-gray-400">Valor</p>
                <p className="font-bold text-green-400">
                  R$ {resultado.valor}
                </p>
              </div>
              <button onClick={() => setShowModal(false)} className="absolute cursor-pointer top-2 right-2 text-gray-400 font-bold">
                ✕
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}