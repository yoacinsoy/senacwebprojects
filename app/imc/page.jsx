"use client";
import { useState } from "react";
import Image from "next/image";

export default function Imc() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [resultado, setResultado] = useState(null);
  const [classificacao, setClassificacao] = useState("");

  function calcularIMC() {
    if (!peso || !altura) return;
    const imc = peso / (altura * altura);
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

  // Função movida para fora para corrigir o erro de escopo
  function limparImc() {
    setResultado(null);
    setClassificacao("");
    setAltura("");
    setPeso("");
  }

  return (
    <div className="font-sans flex flex-col items-center justify-center min-h-screen p-8 pb-20">
      <h1>Calculadora de IMC</h1>
      <main className="flex flex-col items-center justify-center">
        <div className="bg-gray-300 rounded text-black p-4 flex flex-col gap-y-3 shadow-lg">
          <input
            type="number"
            placeholder="Peso (kg)"
            className="p-2 border bg-white rounded"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
          />
          <input
            type="number"
            placeholder="Altura (m) Ex: 1.75"
            className="p-2 border bg-white rounded"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
          />
          <button
            onClick={calcularIMC}
            className="p-2 bg-blue-500 text-black rounded hover:bg-blue-600 transition font-bold"
          >
            Calcular IMC
          </button>
          <button
            onClick={limparImc}
            className="p-2 bg-red-500 text-black rounded hover:bg-red-600 transition font-bold"
          >
            Limpar
          </button>
          {resultado && (
            <div className="mt-4 p-3 bg-white rounded shadow">
              <p>
                <strong>Seu IMC é:</strong> {resultado}
              </p>
              <p>
                <strong>Classificação:</strong> {classificacao}
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
