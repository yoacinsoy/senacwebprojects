"use client";
import Sidebar from "./components/Sidebar";
import { use, useState } from "react";
export default function Home() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="relative min-h-screen flex text-white font-sans overflow-hidden items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: "url('/backgroundimage.jpg')",
          filter: "brightness(0.2)",
        }}
      ></div>
      <div className="bg-white flex flex-col items-center justify-center p-8 gap-4 rounded shadow-lg relative z-10">
        <h1 className="font-bold text-zinc-600 text-2xl">Acessar Plataforma</h1>
        <form className="grid grid-cols-1 gap-4">
          <div className="grid gap-1">
            <label className="font-bold text-zinc-700 text-xl">Usuário</label>
            <input
              type="text"
              placeholder="Ex: admin"
              className="border border-gray-300 rounded py-2 text-black px-4 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>
          <div className="grid gap-1">
            <label className="font-bold text-zinc-700 text-xl">Senha</label>
            <input
              type="password"
              placeholder="Ex: 123456"
              className="border border-gray-300 rounded py-2 text-black px-4 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>
          <button
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
