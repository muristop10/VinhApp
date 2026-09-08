import { View, Text } from "react-native";
import React from "react";
import { styles } from "../../assets/styles/styles";
import { Feather } from "@expo/vector-icons";

const CarrinhoItem = ({ vinho }) => {

  return (
    <View style={styles.carrinhoItem}>
      <View style={styles.carrinhoInfo}>
        <Text style={styles.carrinhoNome}>{vinho.nome}</Text>
        <Text style={styles.carrinhoPreco}>{vinho.preco}</Text>
      </View>

      <View style={styles.buttonsView}>
        <Feather
          name="minus"
          size={24}
          color="black"
          style={styles.opButton}
          onPress={() => (alert("Diminuir quantidade"))}
        />
        <Text style={styles.quantidadeText}>{vinho.quantidade}</Text>
        <Feather
          name="plus"
          size={24}
          color="black"
          style={styles.opButton}
          onPress={() =>(alert("Aumentar quantidade"))}
        />
      </View>
    </View>
  );
};

export default CarrinhoItem;
