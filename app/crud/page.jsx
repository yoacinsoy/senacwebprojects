"use client";
import { useState } from "react";
import Image from "next/image";
import Sidebar from "../components/Sidebar";

export default function Ficha() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [idade, setIdade] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cidade, setCidade] = useState("");

  function limparCampos() {
    setNome("");
    setEmail("");
    setIdade("");
    setTelefone("");
    setCidade("");
  }
  return (
    <div className="font-sans flex min-h-screen bg-gray-800">
      <Sidebar />
      <div className="flex-1 flex flex-col items-center justify-center p-8">
        <h1 className="text-orange-500 font-bold mb-2 text-2xl">
          CRUD de Alunos
        </h1>
        <div className="flex flex-row bg-gray-900 rounded-lg shadow-lg p-6 gap-x-10">
          <main className="flex flex-col items-center justify-center">
            <div className="bg-gray-300 rounded text-black p-4 flex flex-col gap-y-3 shadow-lg">
              <input
                type="text"
                placeholder="Nome"
                className="p-2 border bg-white rounded"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                className="p-2 border bg-white rounded"
                value={email}
                onChange={(e) => setNome(e.target.value)}
              />
              <input
                type="text"
                placeholder="Telefone"
                className="p-2 border bg-white rounded"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
              />
              <input
                type="text"
                placeholder="Cidade"
                className="p-2 border bg-white rounded"
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
              />
              <input
                type="number"
                placeholder="Idade"
                className="p-2 border bg-white rounded"
                value={idade}
                onChange={(e) => setIdade(e.target.value)}
              />
              <button className="bg-blue-500 hover:bg-blue-600 text-black font-bold text-xl p-2 rounded">
                Cadastrar
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
