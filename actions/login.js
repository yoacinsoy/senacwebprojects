<<<<<<< HEAD
'use server';

export async function login(username, password) {
    if (username === 'admin' && password === 'password') {
        return { success: true, message: 'Login bem-sucedido!' };
    } else {
        return { success: false, message: 'Credenciais inválidas.' };
    }
=======
"use server";

export async function login(nome, senha) {
  console.log("Tentativa de login no servidor:", { nome, senha });
  if (nome === "admin" && senha === "1234") {
    console.log("Usuário Autenticado com Sucesso");
    return { success: true, message: "Login bem-sucedido" };
  } else {
    return { success: false, message: "Usuário ou senha incorretos" };
  }
>>>>>>> 01d54159c8100a915e50195393afd3eb67bfec68
}
