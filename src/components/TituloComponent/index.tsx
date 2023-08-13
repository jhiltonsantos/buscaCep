import { Text, ITextProps } from 'native-base';
import { ReactNode } from 'react';

interface TituloProps extends ITextProps {
    text: ReactNode
    boldText?: ReactNode

}

export function TituloComponent({ text, boldText, ...otherProps }: TituloProps) {
    return (
        <Text
            fontSize="3xl"
            color="purple.800"
            {...otherProps}
        >
            <Text fontWeight="bold">{boldText}</Text>{text}
        </Text>
    )
}