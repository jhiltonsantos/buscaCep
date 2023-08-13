import apiFido from './api';

export async function fazerLogin(nome: string, senha: string) {
  if (!nome || !senha) return;
  try {
    const resultado = await apiFido.post('/login', {
      name: nome,
      password: senha,
    });
    console.log(resultado.data);
    return resultado.data;
  } catch (error) {
    console.log(error);
    return;
  }
}
