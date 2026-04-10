"use server"

export async function converterCelsiusParaFahrenheit(celsius) {
    const valor = parseFloat(celsius);

    if (isNaN(valor)) {
        return { erro: "Por favor, insira um valor numérico válido", resultado: null };
    }

    const resultado = (valor * 9 / 5) + 32;
    return {
        erro: null,
        resultado: resultado.toFixed(2),
        tipo: "fahrenheit",
        simbolo: "°F",
        tipo_origem: "celsius",
        valor_original: valor
    };
}

export async function converterFahrenheitParaCelsius(fahrenheit) {
    const valor = parseFloat(fahrenheit);

    if (isNaN(valor)) {
        return { erro: "Por favor, insira um valor numérico válido", resultado: null };
    }

    const resultado = (valor - 32) * 5 / 9;
    return {
        erro: null,
        resultado: resultado.toFixed(2),
        tipo: "celsius",
        simbolo: "°C",
        tipo_origem: "fahrenheit",
        valor_original: valor
    };
}

export async function converterTemperatura(valor, tipoOrigem) {
    if (tipoOrigem === "celsius") {
        return converterCelsiusParaFahrenheit(valor);
    } else {
        return converterFahrenheitParaCelsius(valor);
    }
}
