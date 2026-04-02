import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <div className="w-64 bg-gray-200 flex flex-col items-center p-8 gap-8">
        <Image
          src="/senac.png"
          alt="Logo Senac"
          width={150}
          height={150}
          className="object-contain"
        />

        <nav className="flex flex-col gap-4 w-full">
          <Link
            href="/imc"
            className="text-blue-600 hover:text-blue-800 hover:underline text-center"
          >
            App de IMC
          </Link>
          <Link
            href="/idade"
            className="text-blue-600 hover:text-blue-800 hover:underline text-center"
          >
            App Idade Aluno
          </Link>
          <Link
            href="/ficha"
            className="text-blue-600 hover:text-blue-800 hover:underline text-center"
          >
            App CRUD
          </Link>
          <Link
            href="/abc"
            className="text-blue-600 hover:text-blue-800 hover:underline text-center"
          >
            App Soma
          </Link>
          <Link
            href="/ficha"
            className="text-blue-600 hover:text-blue-800 hover:underline text-center"
          >
            App Ficha do Aluno
          </Link>
        </nav>
      </div>

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
