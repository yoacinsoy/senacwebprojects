"use client";
import { useState } from "react";

export default function Abc() {
  const [numA, setNumA] = useState("");
  const [numB, setNumB] = useState("");
  const [numC, setNumC] = useState("");
  const [resultado, setResultado] = useState(null);

  function calcularABC() {
    const a = parseFloat(numA);
    const b = parseFloat(numB);
    const c = parseFloat(numC);

    if (a == 0) {
      setResultado("Insira um número válido para A");
      return;
    } else if (b == 0) {
      setResultado("Insira um número válido para B");
      return;
    } else if (c == 0) {
      setResultado("Insira um número válido para C");
      return;
    }

    const soma = a + b + c;
    setResultado(soma);
  }

  return (
    <div className="flex flex-col justify-center items-center bg-black min-h-screen mx-auto p-4">
      <div className="flex flex-col bg-gray-400 items-center justify-center p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Calculadora de Soma</h1>
        <div className="space-y-4">
          <div>
            <label className="block mb-1">Número A:</label>
            <input
              type="number"
              value={numA}
              onChange={(e) => setNumA(e.target.value)}
              className="border rounded px-3 py-2 w-full bg-black text-white"
              placeholder="Digite o valor de A"
            />
          </div>

          <div>
            <label className="block mb-1">Número B:</label>
            <input
              type="number"
              value={numB}
              onChange={(e) => setNumB(e.target.value)}
              className="border rounded px-3 py-2 w-full bg-black text-white"
              placeholder="Digite o valor de B"
            />
          </div>

          <div>
            <label className="block mb-1">Número C:</label>
            <input
              type="number"
              value={numC}
              onChange={(e) => setNumC(e.target.value)}
              className="border rounded px-3 py-2 w-full bg-black text-white"
              placeholder="Digite o valor de C"
            />
          </div>

          <button
            onClick={calcularABC}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Calcular Soma
          </button>

          {resultado !== null && (
            <div className="mt-4 p-4 bg-gray-100 rounded">
              <p className="font-semibold text-black">Resultado: {resultado}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
