"use server"

export async function subtrair(a, b) {
    return { resultado: a - b, operacao: "subtração" };
}
