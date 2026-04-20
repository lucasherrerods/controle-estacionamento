import Header from "../components/Header";
import StatusEstacionamento from "../components/StatusEstacionamento";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-100 p-6">
      <Header />
      <StatusEstacionamento />
    </main>
  )
}