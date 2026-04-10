"use client";
import { useState } from "react";
import Sidebar from "../components/Sidebar";

export default function Imc() {
    const [peso, setPeso] = useState("");
    const [altura, setAltura] = useState("");
    const [resultado, setResultado] = useState(null);
    const [classificacao, setClassificacao] = useState("");
    const [erro, setErro] = useState("");

    function calcularIMC() {
        const p = parseFloat(peso);
        const a = parseFloat(altura);

        if (isNaN(p) || isNaN(a) || p <= 0 || a <= 0) {
            setErro("Por favor, insira valores válidos");
            setResultado(null);
            setClassificacao("");
            return;
        }

        const imc = p / (a * a);
        setErro("");
        setResultado(imc.toFixed(2));

        if (imc < 18.5) {
            setClassificacao("Abaixo do peso");
        } else if (imc < 25) {
            setClassificacao("Peso normal");
        } else if (imc < 30) {
            setClassificacao("Sobrepeso");
        } else {
            setClassificacao("Obesidade");
        }
    }

    function limparImc() {
        setResultado(null);
        setClassificacao("");
        setAltura("");
        setPeso("");
        setErro("");
    }

    return (
        <div className="flex min-h-screen bg-zinc-950">
            <Sidebar />
            <div className="flex-1 flex flex-col justify-center items-center p-8">
                <div className="bg-black border border-zinc-800 rounded-2xl p-8 w-full max-w-md shadow-2xl shadow-orange-900/10">
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/30 mb-6">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                        </div>

                        <h1 className="text-2xl font-bold text-white mb-2">Calculadora de IMC</h1>
                        <p className="text-zinc-500 text-sm mb-6">Índice de Massa Corporal</p>

                        <div className="space-y-4 w-full">
                            <div>
                                <label className="block mb-2 text-zinc-400 text-sm font-medium">Peso (kg):</label>
                                <input
                                    type="number"
                                    value={peso}
                                    onChange={(e) => setPeso(e.target.value)}
                                    className="w-full bg-zinc-800 border border-zinc-700 rounded-xl py-4 px-4 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                                    placeholder="Ex: 70"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 text-zinc-400 text-sm font-medium">Altura (m):</label>
                                <input
                                    type="number"
                                    value={altura}
                                    onChange={(e) => setAltura(e.target.value)}
                                    className="w-full bg-zinc-800 border border-zinc-700 rounded-xl py-4 px-4 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                                    placeholder="Ex: 1.75"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <button
                                    onClick={calcularIMC}
                                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-4 rounded-xl transition-all duration-300 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-[0.98]"
                                >
                                    Calcular IMC
                                </button>
                                <button
                                    onClick={limparImc}
                                    className="bg-zinc-700 hover:bg-zinc-600 text-white font-bold py-4 px-4 rounded-xl transition-all"
                                >
                                    Limpar
                                </button>
                            </div>

                            {erro && (
                                <div className="mt-4 p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
                                    <p className="text-red-500 text-center">{erro}</p>
                                </div>
                            )}

                            {resultado && !erro && (
                                <div className="mt-6 p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl text-center">
                                    <p className="text-zinc-400 text-sm">Seu IMC é</p>
                                    <p className="text-4xl font-bold text-orange-500 mt-1">{resultado}</p>
                                    <p className="text-white font-medium mt-2">{classificacao}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
