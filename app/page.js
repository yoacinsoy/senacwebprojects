import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen bg-[#D9D9D9] p-8 pb-20 gap-16 sm:p-20">
      <h1 className="font-bold text-black text-2xl sm:text-4xl">
        Sistema de Cadastro
      </h1>
      <section className="grid grid-cols-1">
        <Link href="/produtos" className="flex flex-col h-15 mb-5 rounded-3xl cursor-pointer items-center justify-center bg-gradient-to-r from-[#570000] to-[#CC0707] items-center">
          <h1 className="font-bold text-white text-lg sm:text-xl">CADASTRO DE PRODUTOS</h1>
          <p className="text-white">Nome, preço, categoria e mais</p>
        </Link>
        <Link href="/clientes" className="flex flex-col h-15 mb-5 rounded-3xl cursor-pointer items-center justify-center bg-gradient-to-r from-[#570000] to-[#CC0707] items-center">
          <h1 className="font-bold text-white text-lg sm:text-xl">CADASTRO DE CLIENTES</h1>
          <p className="text-white">Nome, email, telefone e mais</p>
        </Link>
        <Link href="/fornecedores" className="flex flex-col h-15 mb-5 rounded-3xl cursor-pointer items-center justify-center bg-gradient-to-r from-[#570000] to-[#CC0707] items-center">
          <h1 className="font-bold text-white pl-2 pr-2 text-sm sm:text-xl">CADASTRO DE FORNECEDORES</h1>
          <p className="text-white">Nome, email, telefone e mais</p>
        </Link>
      </section>
    </div>
  );
}
