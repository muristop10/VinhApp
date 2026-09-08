import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../styles'
import { Feather } from '@expo/vector-icons'

const CarrinhoItem = ({
    vinho,
    carrinho,
    setCarrinho
}) => {

    let qtdVinho = carrinho.filter((vinho) => {
        return vinho.nome === vinho.nome;
    }).length;

    return (
        <View styles={styles.carrinhoItem}>
            <Text>{vinho.nome}</Text>

            <View style={styles.buttonsView}>
                <Feather name='minus' size={24} color='black' />
                <Text style={styles.quantidadeText}>{qtdVinho}</Text>
                <Feather name='plus' size={24} color='black' />
            </View>
        </View>
    )
}

export default CarrinhoItem