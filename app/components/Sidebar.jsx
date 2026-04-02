import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-200 flex flex-col items-center p-8 gap-8 min-h-screen">
      <Image
        src="/senac.png"
        alt="Logo Senac"
        width={150}
        height={150}
        className="object-contain"
      />

      <nav className="flex flex-col gap-4 w-full">
        <Link
          href="/"
          className="text-blue-600 hover:text-blue-800 hover:underline text-justify font-bold"
        >
          Principal
        </Link>
        <Link
          href="/imc"
          className="text-blue-600 hover:text-blue-800 hover:underline text-justify"
        >
          App de IMC
        </Link>
        <Link
          href="/idade"
          className="text-blue-600 hover:text-blue-800 hover:underline text-justify"
        >
          App Idade Aluno
        </Link>
        <Link
          href="/crud"
          className="text-blue-600 hover:text-blue-800 hover:underline text-justify"
        >
          App CRUD
        </Link>
        <Link
          href="/abc"
          className="text-blue-600 hover:text-blue-800 hover:underline text-justify"
        >
          App Soma
        </Link>
        <Link
          href="/ficha"
          className="text-blue-600 hover:text-blue-800 hover:underline text-justify"
        >
          App Ficha do Aluno
        </Link>
      </nav>
    </div>
  );
}