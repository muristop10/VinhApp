// Footer, contatos, e botão para scrollar até o inicio novamente
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles, colors } from '../../assets/styles/styles';

// Componente estruturado como classe 
class Footer extends Component {
  render() {
    const { onScrollToTop } = this.props;
    const anoAtual = new Date().getFullYear();

    // array de contatos
    const contatos = [
      'eloizadecarli08@gmail.com', 
      'murilo.et@aluno.ifsc.edu.br'
    ];

    return (
      <View style={styles.footerContainer}>
      {/*text que usa o ano atual após o &copy:*/}
        <Text style={styles.footerText}>
          &copy; {anoAtual} Protótipo desenvolvido por Eloiza Teodoro e Murilo Thom
        </Text>
        
        <View style={styles.footerLinksContainer}>
          <TouchableOpacity onPress={onScrollToTop}>
            <Text style={styles.footerLinkText}>VOLTE AO INÍCIO</Text>
          </TouchableOpacity>

          {/* REQUISITO 4: uso do map() em um componente de classe */}
          {/* aqui o .map() percorre o array 'contatos' e faz um <Text> para cada e-mail */}
          <View style={{ alignItems: 'center' }}>

            <Text style={styles.footerLinkText}>CONTATOS:</Text>
            {contatos.map((email, index) => (
              <Text key={index} style={styles.footerLinkText}>
                {email}
              </Text>
            ))}

          </View>

        </View>
      </View>
    );
  }
} // fim da classe

export default Footer;