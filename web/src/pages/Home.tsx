import Header from "../components/Header";
import StatusEstacionamento from "../components/StatusEstacionamento";
import ControleAcesso from "../components/ControleAcesso";
import { useEstacionamento } from "../hooks/useEstacionamento";
import ListaVeiculos from "../components/ListaVeiculos";
import ResultadoModal from "../components/ResultadoModal";


export default function Home() {
  const { status, entrada, saida, resultado, veiculosEstacionados } = useEstacionamento()

  return (
    <main className="min-h-screen bg-gray-900 text-gray-100 p-6">
      <Header />
      <StatusEstacionamento status={status} />
      <ControleAcesso entrada={entrada} saida={saida} />
      <ResultadoModal resultado={resultado} />
      <ListaVeiculos veiculos={veiculosEstacionados} />
    </main>
  )
}