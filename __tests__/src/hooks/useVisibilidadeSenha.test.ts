import { renderHook, act } from '@testing-library/react-hooks';
import { useVisibilidadeSenha } from '../../../src/hooks/useVisibilidadeSenha';

describe('Hook pegarVisibilidadeSenha', () => {
  it('A senha deve estar visivel e o icone deve ser o mostrar', () => {
    const { result } = renderHook(() => useVisibilidadeSenha());

    expect(result.current.senhaVisibilidade).toBe(true);
    expect(result.current.iconeDireita).toBe('mostrar');
  });

  it('Chamar a função mudarVisibilidadeSenha para alterar a visiblidade da senha se tornando invisível e o ícone deve ser o enconder', () => {
    const { result } = renderHook(() => useVisibilidadeSenha());

    act(() => {
      result.current.mudarVisibilidadeSenha();
    });

    expect(result.current.senhaVisibilidade).toBe(false);
    expect(result.current.iconeDireita).toBe('esconder');
  });
});
