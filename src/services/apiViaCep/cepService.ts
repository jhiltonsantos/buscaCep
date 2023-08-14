import apiViaCep from './api';

export async function procurarCep(cep: string) {
  if (!cep) return;
  try {
    const resultado = await apiViaCep.get(`/${cep}/json/`);
    return resultado.data;
  } catch (error) {
    console.log(error);
    return;
  }
}
