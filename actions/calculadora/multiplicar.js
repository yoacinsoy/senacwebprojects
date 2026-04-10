"use server"

export async function multiplicar(a, b) {
    return { resultado: a * b, operacao: "multiplicação" };
}
