"use client";
import { useState } from "react";
import Sidebar from "../components/Sidebar";

export default function Idade() {
    const [anoNasc, setAnoNasc] = useState("");
    const [resultado, setResultado] = useState(null);
    const [erro, setErro] = useState("");

    function calcularIdade() {
        const anoAtual = 2026;
        const ano = parseInt(anoNasc);

        if (isNaN(ano)) {
            setErro("Por favor, digite um ano válido");
            setResultado(null);
            return;
        }

        if (ano > anoAtual || ano < 1900) {
            setErro("Ano de nascimento inválido");
            setResultado(null);
            return;
        }

        setErro("");
        const idade = anoAtual - ano;
        setResultado(idade);
    }

    return (
        <div className="flex min-h-screen bg-zinc-950">
            <Sidebar />
            <div className="flex-1 flex flex-col justify-center items-center p-8">
                <div className="bg-black border border-zinc-800 rounded-2xl p-8 w-full max-w-md shadow-2xl shadow-orange-900/10">
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/30 mb-6">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>

                        <h1 className="text-2xl font-bold text-white mb-2">Calculadora de Idade</h1>
                        <p className="text-zinc-500 text-sm mb-6">Descubra sua idade atual</p>

                        <div className="space-y-4 w-full">
                            <div>
                                <label className="block mb-2 text-zinc-400 text-sm font-medium">Ano de Nascimento:</label>
                                <input
                                    type="number"
                                    value={anoNasc}
                                    onChange={(e) => setAnoNasc(e.target.value)}
                                    className="w-full bg-zinc-800 border border-zinc-700 rounded-xl py-4 px-4 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                                    placeholder="Ex: 2000"
                                />
                            </div>

                            <button
                                onClick={calcularIdade}
                                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-4 rounded-xl transition-all duration-300 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-[0.98]"
                            >
                                Calcular Idade
                            </button>

                            {erro && (
                                <div className="mt-4 p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
                                    <p className="text-red-500 text-center">{erro}</p>
                                </div>
                            )}

                            {resultado !== null && !erro && (
                                <div className="mt-6 p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl text-center">
                                    <p className="text-zinc-400 text-sm">Sua idade é</p>
                                    <p className="text-4xl font-bold text-orange-500 mt-1">{resultado}</p>
                                    <p className="text-zinc-400 text-sm">anos</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
