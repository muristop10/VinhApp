//construção do titulo através da concatenação das Strings
import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../../assets/styles/styles';

// componente usando função Tradicional/Anônima
export default function Header() {
  
  // array com as partes do título do aplicativo
  const partesDoTitulo = ['Vinh', 'App'];

  // REQUISITO 4: uso do REDUCE() em um componente de Função Tradicional
  // reduce pega o array ['Vinh', 'App'] e concatena em uma string só:
  // "VinhApp"
  const tituloCompleto = partesDoTitulo.reduce((acumulador, palavraAtual) => {
    return acumulador + palavraAtual;
  }, ''); // string vazia '' é o valor inicial do acumulador

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>{tituloCompleto}</Text>
    </View>
  );
}