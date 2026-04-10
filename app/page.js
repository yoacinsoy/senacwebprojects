"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/actions/login";
import { toast } from "sonner";

function Toast({ message, type, isVisible }) {
    if (!isVisible) return null;

    const bgColor = type === "success" ? "bg-green-500" : type === "error" ? "bg-red-500" : "bg-orange-500";

    return (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 animate-slide-down">
            <div className={`${bgColor} text-white px-6 py-3 rounded-xl shadow-lg shadow-black/30 flex items-center gap-3`}>
                {type === "success" && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                )}
                {type === "error" && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                )}
                {type === "loading" && (
                    <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                )}
                <span className="font-medium">{message}</span>
            </div>
        </div>
    );
}

export default function Home() {
    const router = useRouter();
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [toastState, setToastState] = useState({ isVisible: false, message: "", type: "" });

    const showToast = (message, type) => {
        setToastState({ isVisible: true, message, type });
        setTimeout(() => {
            setToastState({ isVisible: false, message: "", type: "" });
        }, 3000);
    };

    async function enviarFormulario(e) {
        e.preventDefault();

        await new Promise(resolve => setTimeout(resolve, 800));

        const resultadoLogin = await login(user, password);
        if (resultadoLogin.success) {
            toast.promise(
                new Promise((resolve) => setTimeout(resolve, 800)),
                {
                    loading: "Verificando credenciais...",
                    success: resultadoLogin.message,
                    error: resultadoLogin.message,
                    position: "top-center",
                }
            );
            setTimeout(() => {
                router.push("/dashboard");
            }, 1000);
        } else {
            toast.promise(
                new Promise((resolve) => setTimeout(resolve, 800)),
                {
                    loading: "Verificando credenciais...",
                    success: resultadoLogin.message,
                    error: resultadoLogin.message,
                    position: "top-center",
                }
            );
        }
    }

    return (
        <>
            <Toast message={toastState.message} type={toastState.type} isVisible={toastState.isVisible} />

            <div className="relative min-h-screen flex text-white font-sans overflow-hidden items-center justify-center p-4">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
                    style={{
                        backgroundImage: "url('/background.png')",
                        filter: "brightness(0.15)",
                    }}
                ></div>

                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-zinc-950/50 via-transparent to-zinc-950/80 z-[1]"></div>

                <div className="bg-zinc-900/95 backdrop-blur-xl flex flex-col items-center justify-center p-10 gap-6 rounded-2xl shadow-2xl shadow-black/50 border border-zinc-800 relative z-10 w-full max-w-md">
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/30 mb-2">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    </div>

                    <h1 className="font-bold text-white text-3xl tracking-tight">Acessar Plataforma</h1>
                    <p className="text-zinc-500 text-sm -mt-3">Entre com suas credenciais</p>

                    <form className="grid grid-cols-1 gap-5 w-full mt-2">
                        <div className="grid gap-2">
                            <label className="font-semibold text-zinc-300 text-sm uppercase tracking-wide">Usuário</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <svg className="w-5 h-5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Digite seu usuário"
                                    className="w-full bg-zinc-800 border border-zinc-700 rounded-xl py-4 pl-12 pr-4 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                                    value={user}
                                    onChange={(e) => setUser(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="grid gap-2">
                            <label className="font-semibold text-zinc-300 text-sm uppercase tracking-wide">Senha</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <svg className="w-5 h-5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </div>
                                <input
                                    type="password"
                                    placeholder="Digite sua senha"
                                    className="w-full bg-zinc-800 border border-zinc-700 rounded-xl py-4 pl-12 pr-4 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>
                        <button
                            onClick={enviarFormulario}
                            type="submit"
                            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-4 rounded-xl transition-all duration-300 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-[0.98] mt-2"
                        >
                            <span className="flex items-center justify-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                </svg>
                                Entrar
                            </span>
                        </button>
                    </form>

                    <p className="text-zinc-600 text-xs mt-4">© 2026 senacminas@edu.br</p>
                </div>
            </div>
        </>
    );
}
