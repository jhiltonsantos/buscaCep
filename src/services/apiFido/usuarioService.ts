import { Usuario } from '../../interfaces/usuario';
import apiFido from './api';

export async function pegarDadosUsuario(id: string) {
  if (!id) return null;
  try {
    const resultado = await apiFido.get(`/user/${id}`);
    return resultado.data;
  } catch (error) {
    console.log(error);
    return;
  }
}

export async function pegarDadosTodosUsuario() {
  try {
    const resultado = await apiFido.get('/user');
    return resultado.data;
  } catch (error) {
    console.log(error);
    return;
  }
}

export async function atualizarDadosUsuario(id: string, usuario: Usuario) {
  if (!id) {
    console.log('ID de usuário inválido.');
    return null;
  }

  try {
    const resultado = await apiFido.put(`/user/${id}`, usuario);
    console.log('Funcao atualizar:', resultado.data);
    return resultado.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
