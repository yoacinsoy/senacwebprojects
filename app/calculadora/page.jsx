"use client"

import { useState } from "react"
import { somar } from "@/actions/calculadora/somar"
import { subtrair } from "@/actions/calculadora/subtrair"
import { multiplicar } from "@/actions/calculadora/multiplicar"
import { dividir } from "@/actions/calculadora/dividir"
import { calcularBhaskara } from "@/actions/calculadora/baskara"

export default function Calculadora() {
    const [num1, setNum1] = useState("")
    const [num2, setNum2] = useState("")
    const [numA, setNumA] = useState("")
    const [numB, setNumB] = useState("")
    const [numC, setNumC] = useState("")
    const [resultado, setResultado] = useState(null)
    const [operacaoAtual, setOperacaoAtual] = useState("")

    const executarOperacao = async (operacao) => {
        setOperacaoAtual(operacao)

        const n1 = parseFloat(num1)
        const n2 = parseFloat(num2)

        if (isNaN(n1) || isNaN(n2)) {
            setResultado({ erro: "Por favor, insira números válidos" })
            return
        }

        let res
        switch (operacao) {
            case "somar":
                res = await somar(n1, n2)
                break
            case "subtrair":
                res = await subtrair(n1, n2)
                break
            case "multiplicar":
                res = await multiplicar(n1, n2)
                break
            case "dividir":
                res = await dividir(n1, n2)
                break
        }
        setResultado(res)
    }

    const executarBhaskara = async () => {
        setOperacaoAtual("bhaskara")

        const a = parseFloat(numA)
        const b = parseFloat(numB)
        const c = parseFloat(numC)

        if (isNaN(a) || isNaN(b) || isNaN(c)) {
            setResultado({ erro: "Por favor, insira números válidos" })
            return
        }

        if (a === 0) {
            setResultado({ erro: "O valor de 'a' não pode ser zero" })
            return
        }

        const res = await calcularBhaskara(a, b, c)
        setResultado(res)
    }

    return (
        <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-6">
            <div className="bg-black border border-zinc-800 rounded-2xl p-8 w-full max-w-2xl shadow-2xl shadow-orange-900/10">
                <h1 className="text-3xl font-bold text-white text-center mb-8">
                    Calculadora
                </h1>

                <div className="space-y-8">
                    <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800">
                        <h2 className="text-xl font-semibold text-orange-500 mb-4">Operações Básicas</h2>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <input
                                type="number"
                                placeholder="Primeiro número"
                                value={num1}
                                onChange={(e) => setNum1(e.target.value)}
                                className="bg-zinc-800 border border-zinc-700 rounded-xl py-3 px-4 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                            <input
                                type="number"
                                placeholder="Segundo número"
                                value={num2}
                                onChange={(e) => setNum2(e.target.value)}
                                className="bg-zinc-800 border border-zinc-700 rounded-xl py-3 px-4 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                        </div>
                        <div className="grid grid-cols-4 gap-2">
                            <button
                                onClick={() => executarOperacao("somar")}
                                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-xl transition-all"
                            >
                                +
                            </button>
                            <button
                                onClick={() => executarOperacao("subtrair")}
                                className="bg-zinc-700 hover:bg-zinc-600 text-white font-semibold py-3 px-4 rounded-xl transition-all"
                            >
                                -
                            </button>
                            <button
                                onClick={() => executarOperacao("multiplicar")}
                                className="bg-zinc-700 hover:bg-zinc-600 text-white font-semibold py-3 px-4 rounded-xl transition-all"
                            >
                                ×
                            </button>
                            <button
                                onClick={() => executarOperacao("dividir")}
                                className="bg-zinc-700 hover:bg-zinc-600 text-white font-semibold py-3 px-4 rounded-xl transition-all"
                            >
                                ÷
                            </button>
                        </div>
                    </div>

                    <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800">
                        <h2 className="text-xl font-semibold text-orange-500 mb-4">Fórmula de Bhaskara</h2>
                        <p className="text-zinc-400 text-sm mb-4">Equação: ax² + bx + c = 0</p>
                        <div className="grid grid-cols-3 gap-4 mb-4">
                            <input
                                type="number"
                                placeholder="a"
                                value={numA}
                                onChange={(e) => setNumA(e.target.value)}
                                className="bg-zinc-800 border border-zinc-700 rounded-xl py-3 px-4 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                            <input
                                type="number"
                                placeholder="b"
                                value={numB}
                                onChange={(e) => setNumB(e.target.value)}
                                className="bg-zinc-800 border border-zinc-700 rounded-xl py-3 px-4 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                            <input
                                type="number"
                                placeholder="c"
                                value={numC}
                                onChange={(e) => setNumC(e.target.value)}
                                className="bg-zinc-800 border border-zinc-700 rounded-xl py-3 px-4 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                        </div>
                        <button
                            onClick={executarBhaskara}
                            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-xl transition-all"
                        >
                            Calcular Bhaskara
                        </button>
                    </div>

                    {resultado && (
                        <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800">
                            <h3 className="text-lg font-semibold text-white mb-2">Resultado</h3>
                            {resultado.erro ? (
                                <p className="text-red-500">{resultado.erro}</p>
                            ) : (
                                <div className="space-y-2">
                                    <p className="text-zinc-400">
                                        <span className="text-orange-500">Operação:</span> {resultado.operacao}
                                    </p>
                                    {resultado.operacao === "Fórmula de Bhaskara" ? (
                                        <>
                                            <p className="text-zinc-400">
                                                <span className="text-orange-500">Mensagem:</span> {resultado.mensagem}
                                            </p>
                                            <p className="text-white text-xl">
                                                <span className="text-orange-500">Δ (Delta):</span> {resultado.delta}
                                            </p>
                                            {resultado.x1 !== null && (
                                                <p className="text-white text-xl">
                                                    <span className="text-orange-500">x₁:</span> {resultado.x1.toFixed(4)}
                                                </p>
                                            )}
                                            {resultado.x2 !== null && (
                                                <p className="text-white text-xl">
                                                    <span className="text-orange-500">x₂:</span> {resultado.x2.toFixed(4)}
                                                </p>
                                            )}
                                        </>
                                    ) : (
                                        <p className="text-white text-2xl font-bold">
                                            {resultado.resultado !== null ? resultado.resultado.toFixed(4) : "Erro"}
                                        </p>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
