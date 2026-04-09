"use server";

export async function login(nome, senha) {
  console.log("Tentativa de login no servidor:", { nome, senha });
  if (nome === "admin" && senha === "1234") {
    console.log("Usuário Autenticado com Sucesso");
    return { success: true, message: "Login bem-sucedido" };
  } else {
    return { success: false, message: "Usuário ou senha incorretos" };
  }
}
