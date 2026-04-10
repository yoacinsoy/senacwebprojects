import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
    return (
        <div className="w-72 bg-black flex flex-col items-center p-6 gap-6 min-h-screen border-r border-zinc-800">
            <div className="w-full flex items-center justify-center py-6 border-b border-zinc-800">
                <Image
                    src="/senac.png"
                    alt="Logo Senac"
                    width={140}
                    height={140}
                    className="object-contain"
                />
            </div>

<<<<<<< HEAD
            <nav className="flex flex-col gap-2 w-full">
                <Link
                    href="/pageinicial"
                    className="group flex items-center gap-3 px-4 py-3 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-900 transition-all duration-300"
                >
                    <svg className="w-5 h-5 group-hover:text-orange-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span className="font-medium">Início</span>
                </Link>

                <Link
                    href="/imc"
                    className="group flex items-center gap-3 px-4 py-3 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-900 transition-all duration-300"
                >
                    <svg className="w-5 h-5 group-hover:text-orange-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <span className="font-medium">Calculadora IMC</span>
                </Link>

                <Link
                    href="/idade"
                    className="group flex items-center gap-3 px-4 py-3 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-900 transition-all duration-300"
                >
                    <svg className="w-5 h-5 group-hover:text-orange-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-medium">Idade do Aluno</span>
                </Link>

                <Link
                    href="/crud"
                    className="group flex items-center gap-3 px-4 py-3 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-900 transition-all duration-300"
                >
                    <svg className="w-5 h-5 group-hover:text-orange-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    </svg>
                    <span className="font-medium">Gerenciamento CRUD</span>
                </Link>

                <Link
                    href="/abc"
                    className="group flex items-center gap-3 px-4 py-3 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-900 transition-all duration-300"
                >
                    <svg className="w-5 h-5 group-hover:text-orange-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    <span className="font-medium">Calculadora</span>
                </Link>

                <Link
                    href="/calculadora"
                    className="group flex items-center gap-3 px-4 py-3 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-900 transition-all duration-300"
                >
                    <svg className="w-5 h-5 group-hover:text-orange-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <span className="font-medium">Operações</span>
                </Link>

                <Link
                    href="/baskara"
                    className="group flex items-center gap-3 px-4 py-3 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-900 transition-all duration-300"
                >
                    <svg className="w-5 h-5 group-hover:text-orange-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01" />
                    </svg>
                    <span className="font-medium">Bhaskara</span>
                </Link>

                <Link
                    href="/ficha"
                    className="group flex items-center gap-3 px-4 py-3 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-900 transition-all duration-300"
                >
                    <svg className="w-5 h-5 group-hover:text-orange-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span className="font-medium">Ficha do Aluno</span>
                </Link>
            </nav>

            <div className="mt-auto pt-6 border-t border-zinc-800 w-full">
                <div className="flex items-center justify-center gap-2 text-zinc-500 text-sm">
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                    <span>Online</span>
                </div>
            </div>
        </div>
    );
=======
      <nav className="flex flex-col gap-4 w-full">
        <Link
          href="/pageinicial"
          className="text-white hover:text-blue-400 hover:underline text-justify"
        >
          Bem Vindo
        </Link>
        <Link
          href="/imc"
          className="text-white hover:text-blue-400 hover:underline text-justify"
        >
          App de IMC
        </Link>
        <Link
          href="/idade"
          className="text-white hover:text-blue-400 hover:underline text-justify"
        >
          App Idade Aluno
        </Link>
        <Link
          href="/crud"
          className="text-white hover:text-blue-400 hover:underline text-justify"
        >
          App CRUD
        </Link>
        <Link
          href="/abc"
          className="text-white hover:text-blue-400 hover:underline text-justify"
        >
          App Soma
        </Link>
        <Link
          href="/ficha"
          className="text-white hover:text-blue-400 hover:underline text-justify"
        >
          App Ficha do Aluno
        </Link>
        <Link
          href="/serveraction"
          className="text-white hover:text-blue-400 hover:underline text-justify"
        >
          Server Action
        </Link>
      </nav>
    </div>
  );
>>>>>>> 01d54159c8100a915e50195393afd3eb67bfec68
}
