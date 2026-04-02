"use client";
import { useState } from "react";
import Sidebar from "../components/Sidebar";

export default function Idade() {
  const [AnodeNasc, setAnodeNasc] = useState("");
  const [resultado, setResultado] = useState(null);

  function calcularIdade() {
    const anoAtual = 2026;
    const anoNasc = parseInt(AnodeNasc);
    const idade = anoAtual - anoNasc;
    setResultado(idade);
  }
  return (
    <div className="flex min-h-screen bg-gray-800">
      <Sidebar />
      <div className="flex-1 flex flex-col justify-center items-center p-8">
        <div className="flex flex-col bg-gray-400 items-center justify-center p-6 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-2xl font-bold mb-4">Calculadora de Idade</h1>
          <div className="space-y-4">
            <div>
              <label className="block mb-1">Ano de Nascimento:</label>
              <input
                type="number"
                value={AnodeNasc}
                onChange={(e) => setAnodeNasc(e.target.value)}
                className="border rounded px-3 py-2 w-full bg-white text-black"
                placeholder="Digite o ano de nascimento"
              />
            </div>
            <button
              onClick={calcularIdade}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Calcular Idade
            </button>
            {resultado !== null && (
              <div className="mt-4">
                <p className="text-lg font-bold">
                  Sua idade é: {resultado} anos
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
