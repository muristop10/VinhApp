import { View, Text, Pressable } from "react-native";
import React from "react";
import { styles } from "../../assets/styles/styles";
import CarrinhoItem from "./CarrinhoItem";

const Carrinho = ({ carrinho, setCarrinho }) => {
  const vinhosCarrinho = carrinho.filter((vinho) => {
    return vinho.quantidade > 0;
  });

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
        <Text style={styles.carrinhoTotalText}>
          Total: R$ {''}
        </Text>
      </View>

      <View style={styles.carrinhoBotaoContainer}>
        <Pressable style={styles.carrinhoBotao} onPress={() => setCarrinho([])}>
          <Text style={styles.carrinhoBotaoText}>Limpar Carrinho</Text>
        </Pressable>

        <Pressable
          style={styles.carrinhoBotao}
          onPress={() => alert("Compra realizada!")}
        >
          <Text style={styles.carrinhoBotaoText}>Finalizar Compra</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Carrinho;
