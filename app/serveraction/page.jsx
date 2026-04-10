"use client";
<<<<<<< HEAD
import { chamaServidor } from "@/actions/servidor";
import Image from "next/image";
export default function ServerAction() {

    const serverAction = async () => {
        const data = await chamaServidor();
        for (const key in data) {
            console.log(`${key}: ${data[key]}`);
        }
    };


    function Cliente() {
        alert('Ação executada no cliente!');
    }

    return (
        <div className="min-h-screen bg-zinc-950 flex items-center justify-center flex-col p-6">
            <div className="bg-zinc-900 rounded-2xl border border-zinc-800 w-full max-w-md p-8 shadow-2xl shadow-orange-900/20">
                <div className="flex items-center justify-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/30">
                        <Image src="/senac.png" alt="Icon" width={80} height={80} />
                    </div>
                </div>

                <h1 className="text-center text-3xl font-bold text-white mb-2 tracking-tight">
                    Server Action
                </h1>
                <p className="text-center text-zinc-500 mb-8 text-sm">
                    Escolha uma das opções abaixo
                </p>

                <div className="flex flex-col gap-4">
                    <button
                        onClick={serverAction}
                        type="button"
                        className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 px-6 rounded-xl text-base font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-[0.98] cursor-pointer">
                        <span className="flex items-center justify-center gap-3">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                            Ações no Servidor (Back-END)
                        </span>
                    </button>

                    <button
                        onClick={Cliente}
                        type="button"
                        className="group bg-zinc-800 text-white py-4 px-6 rounded-xl text-base font-semibold border border-zinc-700 hover:bg-zinc-700 hover:border-zinc-600 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer">
                        <span className="flex items-center justify-center gap-3">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            Ações no Cliente (Front-END)
                        </span>
                    </button>

                    <button className="group bg-white text-zinc-900 py-4 px-6 rounded-xl text-base font-semibold hover:bg-zinc-100 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer">
                        <span className="flex items-center justify-center gap-3">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                            </svg>
                            Dashboard
                        </span>
                    </button>
                </div>
            </div>

            <div className="mt-8 text-center">
                <p className="text-zinc-600 text-sm">© 2026 senacminas@edu.br</p>
                <p className="text-zinc-700 text-xs mt-1">Todos os direitos reservados.</p>
            </div>
        </div>
    );
=======
import { useState } from "react";
import Link from "next/link";
import { servidor } from "/actions/servidor";
export default function Page() {
  let contador = 0;
  async function ChamaServidor() {
    try {
      await servidor();
      console.log("Chamou o Servidor");
    } catch {
      console.log("Erro ao tentar logar");
    } finally {
      console.log("Login Terminou");
    }
  }
  async function Cliente(e) {
    e.preventDefault();
    try {
      console.clear();
      console.log("\n\n");
      console.log("Console limpo e ação executada no FrontEnd");
      console.log("Estou no Cliente....:" + contador++);
      console.log("Só funciona no Front-End meu amigo....");
      console.log("\n\n");
    } catch {
      console.log("Erro ao tentar logar 2");
    } finally {
      console.log("Fim de execução da Action no Front End");
    }
  }
  return (
    <div className="bg-black min-h-screen min-w-screen flex items-center justify-center">
      <div className="flex flex-col h-80 w-100 rounded-lg border-4 border-green-400 bg-white items-center justify-center gap-4">
        <h1 className="text-2xl font-bold text-black flex items-center justify-center">
          Server Action
        </h1>
        <button
          onClick={ChamaServidor}
          type="button"
          className="bg-green-500 hover:bg-green-800 w-80 text-lg p-2 font-bold rounded"
        >
          Ações no Servidor (Back-END)
        </button>
        <button
          onClick={Cliente}
          type="button"
          className="bg-red-500 hover:bg-red-800 w-80 text-lg p-2 font-bold rounded"
        >
          Ações no Cliente (Front-END)
        </button>
        <Link
          href="/pageinicial"
          className="bg-gray-300 text-gray-800 border border-black w-80 text-xl p-2 rounded"
        >
          Dashboard
        </Link>
      </div>
    </div>
  );
>>>>>>> 01d54159c8100a915e50195393afd3eb67bfec68
}
