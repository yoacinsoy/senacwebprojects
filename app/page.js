import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <div className="relative min-h-screen flex text-white font-sans overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: "url('/backgroundimage.jpg')",
          filter: "brightness(0.2)",
        }}
      ></div>

      <div className="relative z-10 flex w-full">
        <Sidebar />

        <main className="flex-1 flex flex-col items-center justify-center p-8 text-center">
          <section className="space-y-4 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
              Bem-Vindo!
            </h1>

            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-medium text-gray-200">
                Aplicativos Web do Curso Senac 2026
              </h2>
              <p className="text-lg md:text-xl text-orange-400 font-semibold tracking-wide uppercase">
                Turma 027
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
