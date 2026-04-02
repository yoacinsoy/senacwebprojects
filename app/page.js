import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col items-center justify-center p-8 bg-gray-800 text-orange-400">
        <h1 className="text-4xl font-bold mb-4">Bem-Vindo!</h1>
        <h2 className="text-2xl mb-2 text-white">
          Aplicativos Web do Curso Senac 2026
        </h2>
        <h3 className="text-xl text-white">Turma 027</h3>
      </div>
    </div>
  );
}