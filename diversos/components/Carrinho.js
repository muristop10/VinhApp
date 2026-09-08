import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../styles'
import CarrinhoItem from './CarrinhoItem'

const Carrinho = ({
    carrinho,
    setCarrinho
}) => {

    vinhosComprados = carrinho.filter((vinho) => {
        return vinho.quantidade > 0;
    })

    return (
        <View style={styles.carrinho}>
            <Text style={styles.carrinhoLabel}>Carrinho:</Text>
            <View style={styles.carrinhoItems}>
                {vinhosComprados.map((vinho, index) => (
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