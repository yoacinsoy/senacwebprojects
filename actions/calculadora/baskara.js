"use server"

export async function calcularBhaskara(a, b, c) {
    const delta = (b * b) - (4 * a * c);

    if (delta < 0) {
        return {
            resultado: null,
            mensagem: "Não ha raízes reais",
            delta: delta,
            x1: null,
            x2: null,
            operacao: "Fórmula de Bhaskara"
        };
    }

    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);

    return {
        resultado: delta,
        mensagem: "Raízes calculadas com sucesso",
        delta: delta,
        x1: x1,
        x2: x2,
        operacao: "Fórmula de Bhaskara"
    };
}
