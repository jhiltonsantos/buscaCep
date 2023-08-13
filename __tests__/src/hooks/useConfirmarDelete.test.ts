import { renderHook, act } from '@testing-library/react-hooks';
import { waitFor } from '@testing-library/react-native';
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

  it('Chamando o navigation.goBack() e colocando bottomSheetVisivel como falso ao executar handleDeletar()', async () => {
    const navigation = { goBack: jest.fn() };
    const { result } = renderHook(() => useConfirmarDelete({ navigation }));

    await act(async () => {
      result.current.setBottomSheetVisivel(true);
      await result.current.handleDeletar();
      await waitFor(() => {
        return result.current.bottomSheetVisivel === false;
      });
    });

    expect(navigation.goBack).toHaveBeenCalledTimes(1);
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
