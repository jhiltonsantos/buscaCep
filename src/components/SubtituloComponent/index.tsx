import {Text} from 'native-base';

import subtitulo from '../../mocks/subtitulo';

export function SubtituloComponent({...outrasProps}) {
  return (
    <Text fontSize="md" color="gray.500" {...outrasProps}>
      {subtitulo.text}
    </Text>
  );
}
