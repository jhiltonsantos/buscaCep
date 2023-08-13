import { Usuario } from '../interfaces/usuario';

function criarEnderecoMock(enderecoUsuario: Usuario) {
  const enderecoMock = [
    {
      id: 0,
      titulo: 'CEP',
      dado: enderecoUsuario.cep,
    },
    {
      id: 1,
      titulo: 'UF',
      dado: enderecoUsuario.estado,
    },
    {
      id: 2,
      titulo: 'Cidade',
      dado: enderecoUsuario.cidade,
    },
    {
      id: 3,
      titulo: 'Logradouro',
      dado: enderecoUsuario.endereco,
    },
    {
      id: 4,
      titulo: 'Complemento',
      dado: enderecoUsuario.complemento,
    },
    {
      id: 5,
      titulo: 'Número',
      dado: enderecoUsuario.numero,
    },
  ];

  return enderecoMock;
}

export { criarEnderecoMock };
