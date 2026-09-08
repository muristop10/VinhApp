import { View, Text, Image, Pressable } from 'react-native'
import { styles } from '../styles'

const Card = ({
    nome,
    preco,
    imagem,
    teorAlcool,
    carrinho,
    setCarrinho
}) => {

    function handleComprar() {
        const vinho = {
            nome,
            preco,
            quantidade: 1
        }
        setCarrinho([...carrinho, vinho]);
    }

    return (
        <View style={styles.card}>
            <View style={styles.cardData}>
                <Text style={styles.nomeVinho}>{nome}</Text>
                <Text style={styles.precoVinho}>{preco}</Text>
                <Image source={{ uri: imagem }} style={styles.imagemVinho} />
                <Text>Teor Alcoólico: {teorAlcool}</Text>
            </View>

            <Pressable style={styles.botaoComprar}
                onPress={handleComprar}>
                <Text style={styles.comprarText}>Comprar</Text>
            </Pressable>
        </View>
    )
}

export default Card