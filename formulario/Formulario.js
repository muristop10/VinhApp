import { View, Text, Pressable, /* Image */ } from "react-native";
import React from "react";
import { styles } from "../assets/styles/styles";
import { vinhos } from "../diversos/constants/vinhos";
import {
  opcoesPreco,
  opcoesTeorAlcool,
  opcoesVinho,
} from "../diversos/constants/formOptions";

const Formulario = () => {

  let vinhoEscolhido = {};
  const handleSubmit = () => {
    vinhoEscolhido = vinhos.find((vinho) => {
      return vinho.id === 1;
    });
  };

  return (
    <View>
      <Text style={styles.tituloh2}>Formulário</Text>
      <Text style={styles.span}>
        Qual será o vinho ideal para você? Descubra aqui!
      </Text>
      <View style={styles.formulario}>
        <Text style={styles.formularioLabel}>
          Selecione o tipo de vinho favorito:
        </Text>
        <View style={styles.formularioCampo}>
          {opcoesVinho.map((opcao) => (
            <Text key={opcao.id} style={styles.formInput}>
              {opcao.nome}
            </Text>
          ))}
        </View>

        <View style={styles.formularioCampo}>
          <Text style={styles.formularioLabel}>Faixa de preço:</Text>
          {opcoesPreco.map((opcao) => (
            <Text key={opcao.id} style={styles.formInput}>
              {opcao.nome}
            </Text>
          ))}
        </View>

        <View style={styles.formularioCampo}></View>
        <Text style={styles.formularioLabel}>Teor alcoólico:</Text>
        {opcoesTeorAlcool.map((opcao) => (
          <Text key={opcao.id} style={styles.formInput}>
            {opcao.nome}
          </Text>
        ))}
      </View>

      <View style={styles.formularioBotaoView}>
        <Pressable style={styles.formularioBotao} onPress={handleSubmit}>
          Descubra seu vinho!
        </Pressable>
      </View>

      {/* <View style={styles.formularioResultado}>
        <Image source={{ uri: `${vinhoEscolhido.imagem}` }} />
      </View> */}
    </View>
  );
};

export default Formulario;
