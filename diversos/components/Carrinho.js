//Construção do carrinho e adiciona ou dimuniu itens

import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { styles } from '../../assets/styles/styles';
import CarrinhoItem from './CarrinhoItem'; // Componente que renderiza cada item individual

// Componente principal do Carrinho (recebe o lista e a função de atualizar via props)
const Carrinho = ({ carrinho, setCarrinho }) => {

  // seleciona apenas os vinhos que têm pelo menos 1 unidade no carrinho
  const vinhosCarrinho = carrinho.filter((vinho) => {
    return vinho.quantidade > 0;
  });

  // multiplica a quantidade pelo preço de cada vinho e soma tudo
  const precoTotal = vinhosCarrinho.reduce((acumulador, vinho) => {
    return acumulador + vinho.quantidade * vinho.preco;
  }, 0); // Começa a contagem do acumulador em 0

  // valida se tem itens antes de finalizar a compra
  const handleComprar = () => {
    if (precoTotal <= 0) {
      alert('Compra inválida, adicione itens ao carrinho!');
    } else {
      alert(`Compra concluída no valor de R$ ${precoTotal.toFixed(2)}!`);
    }
  };

  return (
    <View style={styles.formulario}>
      <Text style={styles.carrinhoLabel}>Carrinho:</Text>

      {/* Lista visual dos itens */}
      <View style={styles.carrinhoItems}>
        {/* .map percorre a lista filtrada e gera um componente CarrinhoItem para cada vinho */}
        {vinhosCarrinho.map((vinho, index) => (
          <CarrinhoItem
            key={index}
            vinho={vinho}
            carrinho={carrinho}
            setCarrinho={setCarrinho}
          />
        ))}
      </View>

      {/* Exibição do valor total calculado */}
      <View style={styles.carrinhoTotal}>
        <Text style={styles.carrinhoTotalText}>
          Total: R$ {precoTotal.toFixed(2)}
        </Text>
      </View>

      <View style={styles.carrinhoBotaoContainer}>
        {/* botão limpar: Sobrescreve o carrinho com um array vazio [] */}
        <Pressable
          style={styles.carrinhoBotaoSecundario}
          onPress={() => setCarrinho([])}
        >
          <Text>Limpar Carrinho</Text>
        </Pressable>

        {/* botão finalizar: Dispara a função handleComprar */}
        <Pressable
          style={styles.carrinhoBotaoPrimario}
          onPress={handleComprar}
        >
          <Text style={styles.carrinhoBotaoPrimarioText}>
            Finalizar Compra
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Carrinho;