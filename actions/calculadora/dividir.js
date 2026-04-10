"use server"

export async function dividir(a, b) {
    if (b === 0) {
        return { resultado: null, erro: "Não é possível dividir por zero", operacao: "divisão" };
    }
    return { resultado: a / b, operacao: "divisão" };
}
