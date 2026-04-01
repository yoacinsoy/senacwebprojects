import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen bg-[#D9D9D9] p-8 pb-10 gap-1 sm:p-33">
      <div>
        <h1 className="font-bold text-black text-2xl sm:text-4xl">
        Cadastro de Produtos
      </h1>
      <p className="text-[#B40000] text-center">Preencha todos os campos abaixo</p>
      </div>
      <section className="grid grid-cols-1 gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-black text-xl">1.Nome do Produto</label>
          <input type="text" className="bg-white text-zinc-500 rounded-sm w-150 border-1 border-zinc-400 h-10" placeholder="Ex: Notebook Dell Inspirion"/>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-black text-xl">2.Código do Produto</label>
          <input type="text" className="bg-white text-zinc-500 rounded-sm w-150 border-1 border-zinc-400 h-10" placeholder="Ex: 1030585"/>
        </div>
        <div className="flex flex-row gap-1">
          <div className="flex flex-col gap-1">
          <label className="text-black text-xl">3.Preço(R$)</label>
          <input type="text" className="bg-white text-zinc-500 rounded-sm w-75 border-1 border-zinc-400 h-10" placeholder="Ex: R$ 3599,00"/>
          </div>
          <div className="flex flex-col gap-1">
          <label className="text-black text-xl">4.Quantidade em Estoque</label>
          <input type="text" className="bg-white text-zinc-500 rounded-sm w-75 border-1 border-zinc-400 h-10" placeholder="Ex: 10"/>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-black text-xl">5.Categoria</label>
          <input type="text" className="bg-white text-zinc-500 rounded-sm w-150 border-1 border-zinc-400 h-10" placeholder="Ex: Dispositivo Eletrônico"/>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-black text-xl">6.Descrição do Produto</label>
          <input type="text" className="bg-white text-zinc-500 rounded-sm w-150 border-1 border-zinc-400 h-10" placeholder="Ex: Notebook de alto desempenho"/>
        </div>
      </section>
      <Link href={"/clientes"} className="bg-green-400 text-white w-150 text-center h-10 flex items-center justify-center rounded-sm">CONCLUÍDO</Link>
    </div>
  );
}