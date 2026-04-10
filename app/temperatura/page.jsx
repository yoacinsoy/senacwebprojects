"use client";
import { useState } from "react";
import Sidebar from "../components/Sidebar";

export default function Temperatura() {
  const [valor, setValor] = useState("");
  const [resultado, setResultado] = useState(null);
  const [tipoOrigem, setTipoOrigem] = useState("celsius");
  const [erro, setErro] = useState("");

  function converterTemperatura() {
    const valorNumerico = parseFloat(valor);

    if (isNaN(valorNumerico)) {
      setErro("Por favor, insira um valor numérico válido");
      setResultado(null);
      return;
    }

    setErro("");
    let resultadoConvertido;

    if (tipoOrigem === "celsius") {
      // Celsius para Fahrenheit
      resultadoConvertido = (valorNumerico * 9/5) + 32;
      setResultado({
        valor: resultadoConvertido.toFixed(2),
        tipo: "fahrenheit",
        simbolo: "°F"
      });
    } else {
      // Fahrenheit para Celsius
      resultadoConvertido = (valorNumerico - 32) * 5/9;
      setResultado({
        valor: resultadoConvertido.toFixed(2),
        tipo: "celsius",
        simbolo: "°C"
      });
    }
  }

  function limpar() {
    setValor("");
    setResultado(null);
    setErro("");
  }

  function inverterTipo() {
    setTipoOrigem(tipoOrigem === "celsius" ? "fahrenheit" : "celsius");
    setResultado(null);
  }

  return (
    <div className="flex min-h-screen bg-zinc-950">
      <Sidebar />
      <div className="flex-1 flex flex-col justify-center items-center p-8">
        <div className="bg-black border border-zinc-800 rounded-2xl p-8 w-full max-w-md shadow-2xl shadow-orange-900/10">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/30 mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 21V10.87a1 1 0 00-.41-1l-3.58-.64A1 1 0 001.18 9H2a1 1 0 00-1 1v9a1 1 0 001 1h3a1 1 0 001-1v-2m0-7.13V3.87a1 1 0 00-.41-1l-3.58-.64A1 1 0 001.18 1H2a1 1 0 00-1 1v11a1 1 0 001 1h3a1 1 0 001-1z" />
              </svg>
            </div>

            <h1 className="text-2xl font-bold text-white mb-2">Conversor de Temperatura</h1>
            <p className="text-zinc-500 text-sm mb-6">Converta °C ↔ °F</p>

            <div className="space-y-4 w-full">
              <div className="flex gap-2 mb-4">
                <button
                  onClick={() => setTipoOrigem("celsius")}
                  className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all ${
                    tipoOrigem === "celsius"
                      ? "bg-orange-500 text-white"
                      : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
                  }`}
                >
                  °C → °F
                </button>
                <button
                  onClick={() => setTipoOrigem("fahrenheit")}
                  className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all ${
                    tipoOrigem === "fahrenheit"
                      ? "bg-orange-500 text-white"
                      : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
                  }`}
                >
                  °F → °C
                </button>
              </div>

              <div>
                <label className="block mb-2 text-zinc-400 text-sm font-medium">
                  Temperatura em {tipoOrigem === "celsius" ? "Celsius (°C)" : "Fahrenheit (°F)"}:
                </label>
                <input
                  type="number"
                  value={valor}
                  onChange={(e) => setValor(e.target.value)}
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-xl py-4 px-4 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  placeholder={tipoOrigem === "celsius" ? "Ex: 25" : "Ex: 77"}
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={converterTemperatura}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-4 rounded-xl transition-all duration-300 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Converter
                </button>
                <button
                  onClick={limpar}
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
                  <p className="text-zinc-400 text-sm">
                    {tipoOrigem === "celsius" ? "Fahrenheit" : "Celsius"}
                  </p>
                  <p className="text-4xl font-bold text-orange-500 mt-1">
                    {resultado.valor}{resultado.simbolo}
                  </p>
                </div>
              )}

              <div className="mt-4 p-4 bg-zinc-900/30 border border-zinc-800 rounded-xl">
                <p className="text-zinc-500 text-xs text-center">
                  Fórmulas: °F = °C × 9/5 + 32 | °C = (°F - 32) × 5/9
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
