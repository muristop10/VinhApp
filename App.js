// Alunos: Murilo Eduardo Thomé, Eloiza Teodoro De Carli
import { Text, View, ScrollView } from 'react-native';
import { useState, useRef } from 'react'; 
import { styles } from './assets/styles/styles';
import { vinhos } from './listagem/vinhos';
import Card from './diversos/components/Card';
import Carrinho from './diversos/components/Carrinho';
import Formulario from './formulario/Formulario';
import Header from './diversos/components/Header';
import Filtro from './diversos/components/Filtro';
import Footer from './diversos/components/Footer';


export default function App() {
  
  // referêcias e scrool footer
  const scrollViewRef = useRef(null);

  const handleScrollToTop = () => {
    scrollViewRef.current?.scrollTo({ y: 0, animated: true });
  };

  // states (estados) do APP
  const [carrinho, setCarrinho] = useState(
    vinhos.map((vinho) => ({
      id: vinho.id,
      nome: vinho.nome,
      preco: vinho.preco,
      tipo: vinho.tipo,
      descricao: vinho.descricao,
      imagem: vinho.imagem,
      teorAlcool: vinho.teorAlcool,
      quantidade: vinho.quantidade,
    }))
  );
  
  const [filtro, setFiltro] = useState('');

  // lógica de filtro
  const vinhosFiltrados = vinhos.filter((vinho) => {
    return vinho.nome.toLowerCase().includes(filtro.toLowerCase());
  });

  // renderização da tela
  return <>
    <Header />
    <ScrollView ref={scrollViewRef} style={styles.container}>
      <View>

        <Filtro filtro={filtro} setFiltro={setFiltro} />
        
        <View style={styles.cardContainer}>
          {vinhosFiltrados.map((vinho, index) => {
            return (
              <Card
                key={index}
                id={vinho.id}
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
      <Footer onScrollToTop={handleScrollToTop} />
      
    </ScrollView>
  </>;
}