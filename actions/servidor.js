<<<<<<< HEAD
'use server'

export async function chamaServidor() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
    });
    const data = await response.json();
    return data;
=======
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
>>>>>>> 01d54159c8100a915e50195393afd3eb67bfec68
}
