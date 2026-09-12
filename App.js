// Alunos: Murilo Eduardo Thomé, Eloiza Teodoro De Carli
import { Text, View, ScrollView } from 'react-native';
import { styles } from './assets/styles/styles';
import { vinhos } from './diversos/constants/vinhos';
import Card from './diversos/components/Card';
import { useState } from 'react';
import Carrinho from './diversos/components/Carrinho';
import Formulario from './formulario/Formulario';
import Filtro from './diversos/components/Filtro';

const App = () => {
  const [carrinho, setCarrinho] = useState([]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.titulo}>VinhApp</Text>
        <Filtro />
        <View style={styles.cardContainer}>
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
        </View>
        <Carrinho carrinho={carrinho} setCarrinho={setCarrinho} />
        <Formulario />
      </View>
    </ScrollView>
  );
};

export default App;
