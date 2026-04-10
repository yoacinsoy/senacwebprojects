'use server';

export async function login(username, password) {
    if (username === 'admin' && password === 'password') {
        return { success: true, message: 'Login bem-sucedido!' };
    } else {
        return { success: false, message: 'Credenciais inválidas.' };
    }
}
