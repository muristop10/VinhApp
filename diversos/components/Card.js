import { View, Text, Image, Pressable } from 'react-native';
import { styles } from '../../assets/styles/styles';

const Card = ({
  id,
  nome,
  preco,
  imagem,
  teorAlcool,
  carrinho,
  setCarrinho,
}) => {
  
  function handleComprar() {
    const item = carrinho.find((item) => item.id === id);

    if (item) {
      setCarrinho(
        carrinho.map((item) =>
          item.id === id ? { ...item, quantidade: item.quantidade + 1 } : item
        )
      );
    } else {
      setCarrinho([
        ...carrinho,
        { id, nome, preco, imagem, teorAlcool, quantidade: 1 },
      ]);
    }
  }

  return (
    <View style={styles.card}>
      <View style={styles.cardData}>
        <Text style={styles.nomeVinho}>{nome}</Text>
        <Text style={styles.precoVinho}>R$ {preco.toFixed(2)}</Text>
        <Image source={{ uri: imagem }} style={styles.imagemVinho} />
        <Text>Teor Alcoólico: {teorAlcool}</Text>
      </View>

      <Pressable style={styles.botaoComprar} onPress={handleComprar}>
        <Text style={styles.comprarText}>Comprar</Text>
      </Pressable>
    </View>
  );
};

export default Card;
