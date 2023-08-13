import { ITextProps, Text, VStack, View } from 'native-base';

interface ItemProps extends ITextProps {
  tituloText: string
  dadoText: string
  onChangeText?: (text: string) => void
}


export function ItemComponent({ tituloText, dadoText }: ItemProps): JSX.Element {
  return (
    <VStack
      flexDir="row"
      alignItems="center"
    >
      <View
        flexDirection="row"
        alignItems="center"
      >
        <Text color="gray.800" fontSize="md" fontWeight="medium">
          {tituloText}
        </Text>
      </View>

      <View
        flex={1}
        alignItems="flex-end"
      >
        <Text
          color="gray.500"
          fontWeight="normal"
        >
          {dadoText}
        </Text>
      </View>
    </VStack>
  )
}