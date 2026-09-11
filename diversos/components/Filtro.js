import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';
import { styles } from '../../assets/styles/styles';

const Filtro = () => {
  const [filter, setFilter] = useState('');

  function handleFilter(text) {
    setFilter(text);
  }

  return (
    <View style={styles.filtro}>
    <Text style={styles.labelFiltro}>Filtre os vinhos...</Text>
      <TextInput
        placeholder="Digite o nome do vinho..."
        onChangeText={handleFilter}
      />
      
    </View>
  );
};

export default Filtro;
