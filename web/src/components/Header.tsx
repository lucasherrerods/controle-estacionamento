import Profile from "../assets/profile.jpg"

export default function Header() {
  return (
    <header className="bg-gray-800 p-4 mb-6 rounded-b-lg shadow">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl uppercase font-bold text-gray-100">
            Herrero Vagas
          </h1>
          <p className="text-base italic text-gray-400">
            Controle de Estacionamento
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-right">
            <h2 className="text-sm font-semibold text-gray-100">
              Olá, Lucas!
            </h2>
            <p className="text-xs text-gray-400">
              Admin
            </p>
          </div>
          <a href="https://github.com/lucasherrerods/estacionamento" target="_blank" rel="noopener noreferrer">
            <img
              src={Profile}
              alt="Profile"
              className="w-14 h-14 rounded-full border border-gray-600"
            />
          </a>
        </div>
      </div>
    </header>
  )
}