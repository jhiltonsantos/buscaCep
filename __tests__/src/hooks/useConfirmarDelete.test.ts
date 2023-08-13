import { renderHook, act } from '@testing-library/react-hooks';
import { useConfirmarDelete } from '../../../src/hooks/useConfirmarDelete';

describe('Hook pegarConfirmarDelete', () => {
  it('Caso inicialize bottomSheetVisivel como false', () => {
    const { result } = renderHook(() => useConfirmarDelete({}));

    expect(result.current.bottomSheetVisivel).toBe(false);
  });

  it('Caso inicialize bottomSheetVisivel como true quando setBottomSheetVisivel for true', () => {
    const { result } = renderHook(() => useConfirmarDelete({}));

    act(() => {
      result.current.setBottomSheetVisivel(true);
    });

    expect(result.current.bottomSheetVisivel).toBe(true);
  });

  it('Caso bottomSheetVisivel como false quando setBottomSheetVisivel for chamado como false', () => {
    const { result } = renderHook(() => useConfirmarDelete({}));

    act(() => {
      result.current.setBottomSheetVisivel(false);
    });

    expect(result.current.bottomSheetVisivel).toBe(false);
  });

  it('Chamando o navigation.goBack() e colocando bottomSheetVisivel como falso ao executar handleDeletar()', () => {
    const navigation = { goBack: jest.fn() };
    const { result } = renderHook(() => useConfirmarDelete({ navigation }));

    act(() => {
      result.current.setBottomSheetVisivel(true);
      result.current.handleDeletar();
    });

    expect(navigation.goBack).toHaveBeenCalledTimes(1);
    expect(result.current.bottomSheetVisivel).toBe(false);
  });

  it('Tornando bottomSheetVisivel como false ao chamar handleCancelar()', () => {
    const { result } = renderHook(() => useConfirmarDelete({}));

    act(() => {
      result.current.setBottomSheetVisivel(true);
      result.current.handleCancelar();
    });

    expect(result.current.bottomSheetVisivel).toBe(false);
  });
});
