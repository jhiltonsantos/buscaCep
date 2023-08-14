import { Box, FormControl, Text } from "native-base";
import { styles } from "./styles";
import SelectDropdown from "react-native-select-dropdown";

import ArrowDownIcon from '../../assets/icons/arrow-down.svg';
import { useState } from "react";
import { estados } from "../../constants/estados";

interface SeletorModalProps {
  estadoSelecionado: any;
  setEstadoSelecionado: (value: any) => void;
  atualizarEnderecoEditado: (property: string, value: any) => void;
}

export default function SeletorModalComponent({
  estadoSelecionado,
  setEstadoSelecionado,
  atualizarEnderecoEditado
}: SeletorModalProps) {

  const [dropdownVisivel, setDropdownVisivel] = useState(false);

  const alternarDropdown = () => {
    setDropdownVisivel(!dropdownVisivel);
  }

  return (

    <SelectDropdown
      buttonStyle={styles.selectList}
      buttonTextStyle={styles.textSelect}
      dropdownStyle={styles.dropdown}
      renderCustomizedButtonChild={
        () => (
          <Box flexDirection="row" justifyContent="space-between" alignItems="center">
            <Text style={styles.textSelect}>{estadoSelecionado || " "}</Text>
            <ArrowDownIcon style={styles.dropdownButtonDown} />
          </Box>
        )
      }
      dropdownOverlayColor='transparent'
      showsVerticalScrollIndicator={false}
      data={estados}
      defaultButtonText={estadoSelecionado ? estadoSelecionado : " "}
      onSelect={(itemSelecionado) => {
        setEstadoSelecionado(itemSelecionado);
        atualizarEnderecoEditado('estado', itemSelecionado);
      }}
      buttonTextAfterSelection={(itemSelecionado) => {
        setEstadoSelecionado(itemSelecionado);
        return itemSelecionado;
      }}
      rowTextForSelection={(item) => { return item; }}
    />

  );
}