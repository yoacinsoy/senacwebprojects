"use server";
let contador = 0;

export async function servidor() {
  try {
    console.clear();
    console.log("\n\n");
    console.log("Console limpo e ação executada no BackEnd");
    console.log("Estou no Servidor....:" + contador++);
    console.log("Só funciona no Back-End meu amigo....");
    console.log("\n\n");
  } catch {
    console.log("Deu erro no Servidor");
  } finally {
    console.log("Ação Concluída com Sucesso");
    console.log("\n\n");
  }
}
