import { View, Text } from 'react-native';
import React from 'react';
import { styles } from '../../assets/styles/styles';
import { Feather } from '@expo/vector-icons';

const CarrinhoItem = ({ vinho, carrinho, setCarrinho }) => {
  function handleAumentar() {
    const novoCarrinho = carrinho.map((item) => {
      if (item.id === vinho.id) {
        return { ...item, quantidade: item.quantidade + 1 };
      }
      return item;
    });
    setCarrinho(novoCarrinho);
  }

  function handleDiminuir() {
    const novoCarrinho = carrinho.map((item) => {
      if (item.id === vinho.id && item.quantidade > 0) {
        return { ...item, quantidade: item.quantidade - 1 };
      }
      return item;
    });
    setCarrinho(novoCarrinho);
  }

  return (
    <View style={styles.carrinhoItem}>
      <View style={styles.carrinhoInfo}>
        <Text style={styles.carrinhoNome}>{vinho.nome}</Text>
        <Text style={styles.carrinhoPreco}>
          R$ {(vinho.preco * vinho.quantidade).toFixed(2)}
        </Text>
      </View>

      <View style={styles.buttonsView}>
        <Feather
          name="minus"
          size={24}
          color="black"
          style={styles.opButton}
          onPress={handleDiminuir}
        />
        <Text style={styles.quantidadeText}>{vinho.quantidade}</Text>
        <Feather
          name="plus"
          size={24}
          color="black"
          style={styles.opButton}
          onPress={handleAumentar}
        />
      </View>
    </View>
  );
};

export default CarrinhoItem;
