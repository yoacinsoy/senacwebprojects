"use client";
import { useState } from "react";
import Sidebar from "../components/Sidebar";

export default function CRUD() {
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
        <div className="w-full max-w-2xl bg-gray-200 rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-black font-bold mb-4 text-lg">
            Cadastro de Aluno
          </h2>
          <div className="grid grid-cols-1 gap-4">
            <input
              type="text"
              placeholder="Nome"
              className="p-3 border bg-gray-800 text-white rounded w-full"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              className="p-3 border bg-gray-800 text-white rounded w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="number"
              placeholder="Idade"
              className="p-3 border bg-gray-800 text-white rounded w-full"
              value={idade}
              onChange={(e) => setIdade(e.target.value)}
            />
            <input
              type="text"
              placeholder="Telefone"
              className="p-3 border bg-gray-800 text-white rounded w-full"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />
            <input
              type="text"
              placeholder="Cidade"
              className="p-3 border bg-gray-800 text-white rounded w-full"
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
            />
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold text-lg p-3 rounded w-full"
              onClick={limparCampos}
            >
              Cadastrar
            </button>
          </div>
        </div>

        {/* Tabela de Alunos */}
        <div className="w-full max-w-4xl bg-gray-200 rounded-lg shadow-lg p-6">
          <h2 className="text-black font-bold mb-4 text-lg">
            Alunos Cadastrados
          </h2>
          <table className="w-full text-left">
            <thead>
              <tr className="border-b-2 border-gray-600">
                <th className="py-2 px-4 text-black font-bold">Nome</th>
                <th className="py-2 px-4 text-black font-bold">Email</th>
                <th className="py-2 px-4 text-black font-bold">Idade</th>
                <th className="py-2 px-4 text-black font-bold">Telefone</th>
                <th className="py-2 px-4 text-black font-bold">Cidade</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700 hover:bg-gray-800">
                <td className="py-3 px-4 text-black">João Silva</td>
                <td className="py-3 px-4 text-black">joao@email.com</td>
                <td className="py-3 px-4 text-black">25</td>
                <td className="py-3 px-4 text-black">(11) 99999-1234</td>
                <td className="py-3 px-4 text-black">São Paulo</td>
              </tr>
              <tr className="border-b border-gray-700 hover:bg-gray-800">
                <td className="py-3 px-4 text-black">Maria Santos</td>
                <td className="py-3 px-4 text-black">maria@email.com</td>
                <td className="py-3 px-4 text-black">30</td>
                <td className="py-3 px-4 text-black">(21) 98888-5678</td>
                <td className="py-3 px-4 text-black">Rio de Janeiro</td>
              </tr>
              <tr className="border-b border-gray-700 hover:bg-gray-800">
                <td className="py-3 px-4 text-black">Pedro Oliveira</td>
                <td className="py-3 px-4 text-black">pedro@email.com</td>
                <td className="py-3 px-4 text-black">28</td>
                <td className="py-3 px-4 text-black">(31) 97777-9012</td>
                <td className="py-3 px-4 text-black">Belo Horizonte</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
