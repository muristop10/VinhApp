// Alunos: Murilo Eduardo Thomé, Eloiza Teodoro De Carli
import { Text, View, ScrollView } from 'react-native';
import { styles } from './diversos/styles';
import { vinhos } from './diversos/constants/vinhos';
import Card from './diversos/components/Card';
import { useState } from 'react';
import Carrinho from './diversos/components/Carrinho';
import Formulario from './formulario/Formulario';

export default function App() {
  const [carrinho, setCarrinho] = useState([]);

  return (
    <ScrollView>
      <View>
        <Text style={styles.titulo}>VinhApp</Text>
        {vinhos.map((vinho, index) => {
          return (
            <Card
              key={index}
              nome={vinho.nome}
              preco={vinho.preco}
              imagem={vinho.imagem}
              teorAlcool={vinho.teorAlcool}
              carrinho={carrinho}
              setCarrinho={setCarrinho}
            />
          );
        })}
        <Carrinho carrinho={carrinho} setCarrinho={setCarrinho} />
        <Formulario />
      </View>
    </ScrollView>
  );
}
