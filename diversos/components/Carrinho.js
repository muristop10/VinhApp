import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { styles } from '../../assets/styles/styles';
import CarrinhoItem from './CarrinhoItem';

const Carrinho = ({ carrinho, setCarrinho }) => {
  const vinhosCarrinho = carrinho.filter((vinho) => {
    return vinho.quantidade > 0;
  });

  const precoTotal = vinhosCarrinho.reduce((acumulador, vinho) => {
    return acumulador + vinho.quantidade * vinho.preco;
  }, 0);

  return (
    <View style={styles.carrinho}>
      <Text style={styles.carrinhoLabel}>Carrinho:</Text>
      <View style={styles.carrinhoItems}>
        {vinhosCarrinho.map((vinho, index) => (
          <CarrinhoItem
            key={index}
            vinho={vinho}
            carrinho={carrinho}
            setCarrinho={setCarrinho}
          />
        ))}
      </View>

      <View style={styles.carrinhoTotal}>
        <Text style={styles.carrinhoTotalText}>Total: R$ {precoTotal.toFixed(2)}</Text>
      </View>

      <View style={styles.carrinhoBotaoContainer}>
        <Pressable
          style={styles.carrinhoBotaoSecundario}
          onPress={() => setCarrinho([])}>
          <Text>Limpar Carrinho</Text>
        </Pressable>

        <Pressable
          style={styles.carrinhoBotaoPrimario}
          onPress={() => alert('Compra realizada!')}>
          <Text style={styles.carrinhoBotaoPrimarioText}>Finalizar Compra</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Carrinho;
