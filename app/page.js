"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "/actions/login";
export default function Home() {
  const [nome, setUsername] = useState("");
  const [senha, setPassword] = useState("");
  const router = useRouter();

  async function Logar(e) {
    e.preventDefault();

    if (nome && senha) {
      const res = await login(nome, senha);
      if (res?.success) {
        console.log("Usuário Autenticado com Sucesso");
        console.log("REDIRECIONANDO....");
        router.push("/pageinicial");
        router.refresh();
      } else {
        alert("Erro ao logar, verifique suas credenciais");
      }
    } else {
      alert("Favor Informar Usuário e Senha para Logar");
    }
  }

  return (
    <div className="relative min-h-screen flex text-white items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: "url('/backgroundimage.jpg')",
          filter: "brightness(0.2)",
        }}
      ></div>
      <div className="bg-white flex flex-col items-center justify-center p-8 gap-4 rounded shadow-lg relative">
        <h1 className="font-bold text-zinc-600 text-2xl">Acessar Plataforma</h1>
        <form className="grid grid-cols-1 gap-4">
          <div className="grid gap-1">
            <label className="font-bold text-zinc-700 text-xl">Usuário</label>
            <input
              type="text"
              placeholder="Ex: admin"
              className="border border-gray-300 rounded py-2 text-black px-4 focus:outline-none focus:ring-2 focus:ring-gray-500"
              value={nome}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="grid gap-1">
            <label className="font-bold text-zinc-700 text-xl">Senha</label>
            <input
              type="password"
              placeholder="Ex: 123456"
              className="border border-gray-300 rounded py-2 text-black px-4 focus:outline-none focus:ring-2 focus:ring-gray-500"
              value={senha}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            onClick={Logar}
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
