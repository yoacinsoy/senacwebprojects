"use client";
import { useState } from "react";
import Image from "next/image";

export default function Ficha() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [idade, setIdade] = useState("");
  const [telefone, setTelefone] = useState("");

  function limparFicha() {
    setNome("");
    setEmail("");
    setIdade("");
    setTelefone("");
  }
  return (
    <div className="font-sans flex flex-col items-center justify-center min-h-screen p-8 pb-20">
      <h1 className="text-orange-500 font-bold mb-2 text-2xl">
        Ficha do Aluno
      </h1>
      <div className="flex flex-row bg-gray-900 rounded-lg shadow-lg p-6 gap-x-10">
        <main className="flex flex-col items-center justify-center">
          <div className="bg-gray-300 rounded text-black p-4 flex flex-col gap-y-3 shadow-lg">
            <input
              type="text"
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="p-2 border bg-white rounded"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 border bg-white rounded"
            />
            <input
              type="number"
              placeholder="Idade"
              value={idade}
              onChange={(e) => setIdade(e.target.value)}
              className="p-2 border bg-white rounded"
            />
            <input
              type="text"
              placeholder="Telefone"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              className="p-2 border bg-white rounded"
            />
            <button className="bg-blue-500 hover:bg-blue-600 text-black font-bold text-xl p-2 rounded">
              Enviar Dados
            </button>
            <button
              className="bg-orange-300 hover:bg-orange-400 text-black font-bold text-xl p-2 rounded"
              onClick={limparFicha}
            >
              Limpar
            </button>
          </div>
        </main>
        <div className="bg-gray-300 rounded text-black p-4 flex flex-col gap-y-3 shadow-lg">
          <h2 className="text-lg font-bold">Informações do Aluno</h2>
          <p><strong>Nome:</strong> {nome}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Idade:</strong> {idade}</p>
          <p><strong>Telefone:</strong> {telefone}</p>
        </div>
      </div>
    </div>
  );
}
