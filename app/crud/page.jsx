"use client";
import { useState } from "react";
import Sidebar from "../components/Sidebar";

export default function CRUD() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [idade, setIdade] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cidade, setCidade] = useState("");
  const [alunos, setAlunos] = useState([]);

  const limparCampos = () => {
    setNome("");
    setEmail("");
    setIdade("");
    setTelefone("");
    setCidade("");
  };

  const cadastrarAluno = () => {
    if (!nome || !email || !idade || !telefone || !cidade) {
      alert("Preencha todos os campos!");
      return;
    }
    const novoAluno = { nome, email, idade, telefone, cidade };
    limparCampos();
    alert("Aluno cadastrado com sucesso!");

    const novaLista = alunos.slice();
    novaLista.push({ nome, email, idade, telefone, cidade });
    setAlunos(novaLista);
  };
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
              onClick={cadastrarAluno}
            >
              Cadastrar
            </button>
          </div>
        </div>

        {alunos.length > 0 && (
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
                {alunos.map((aluno, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-700 hover:bg-gray-800"
                  >
                    <td className="py-3 px-4 text-black">{aluno.nome}</td>
                    <td className="py-3 px-4 text-black">{aluno.email}</td>
                    <td className="py-3 px-4 text-black">{aluno.idade}</td>
                    <td className="py-3 px-4 text-black">{aluno.telefone}</td>
                    <td className="py-3 px-4 text-black">{aluno.cidade}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
