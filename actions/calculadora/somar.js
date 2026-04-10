"use server"

export async function somar(a, b) {
    return { resultado: a + b, operacao: "soma" };
}
