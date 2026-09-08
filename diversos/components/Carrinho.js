import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../styles'

const Carrinho = ({
    carrinho,
    setCarrinho
}) => {
    return (
        <View style={styles.carrinho}>
            <Text style={styles.carrinhoLabel}>Carrinho:</Text>
            <View style={styles.carrinhoItems}>
                {carrinho.map((vinho, index) => (
                    <CarrinhoItem key={index}
                    vinho={vinho}
                    carrinho={carrinho}
                    setCarrinho={setCarrinho}
                    />
                ))}
            </View>
        </View>
    )
}

export default Carrinho