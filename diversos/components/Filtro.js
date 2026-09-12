import { View, Text } from 'react-native';
import React from 'react';
import { TextInput } from 'react-native-paper';
import { styles, colors } from '../../assets/styles/styles';


const Filtro = ({ filtro, setFiltro }) => {
  function handleFiltro(text) {
    setFiltro(text);
  }

  return (
    <View style={styles.filtro}>
      <Text style={styles.labelFiltro}>Filtre os vinhos...</Text>
      <TextInput
        placeholder="Digite o nome do vinho..."
        onChangeText={handleFiltro}
        underlineColor="black"
        activeUnderlineColor={colors.primary}
      />
    </View>
  );
};

export default Filtro;
