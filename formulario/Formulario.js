//formulário Calculadora de Vinhos
import { View, Text, Pressable, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { styles, colors } from '../assets/styles/styles';
import { vinhos } from '../listagem/vinhos'; 

const Formulario = () => {

//declarando estados
  const [convidados, setConvidados] = useState('');
  const [horas, setHoras] = useState('');
  const [vinhoId, setVinhoId] = useState(null); // Guarda o ID do vinho selecionado

  const [resultado, setResultado] = useState(null);
  const [erro, setErro] = useState('');

  //limpa erro e resultado de possíveis intervenções anteriores:
  const handleSubmit = () => {
    setErro('');
    setResultado(null);

    // tratamento de erro:
    try {
      if (!convidados || !horas || vinhoId === null) {
        throw new Error('Atenção: Preencha os dados e selecione um vinho!');
      }

      const numConv = parseInt(convidados);
      const numHoras = parseInt(horas);

      if (isNaN(numConv) || isNaN(numHoras)) {
        throw new Error('Erro: Digite apenas números válidos nos campos!');
      }
      if (numConv <= 0 || numHoras <= 0) {
        throw new Error('Erro: Os valores devem ser maiores que zero!');
      }

      // Busca as informações completas do vinho que o usuário selecionou pelo ID
      const vinhoEscolhido = vinhos.find((vinho) => vinho.id === vinhoId);

      // REQUISITO 3: CÁLCULO SIGNIFICATIVO
      // 1- volume total em ml (150ml por pessoa por hora)
      const volumeTotalMl = numConv * numHoras * 150;
      
      // 2- garrafas (750ml) arredondadas para cima (math ceil)
      const garrafas = Math.ceil(volumeTotalMl / 750);
      
      // 3-  Valor total com base no preço real do vinho selecionado
      const totalFinal = garrafas * vinhoEscolhido.preco;
      
      // 4- divisão por pessoa
      const custoPorPessoa = totalFinal / numConv;

      // Salva o resultado
      setResultado({
        garrafas,
        totalFinal,
        custoPorPessoa,
        vinho: vinhoEscolhido // Passamos o objeto inteiro para exibir a imagem
      });

    } catch (error) {
      setErro(error.message);
    }
  };

  return (
    <View style={styles.formulario}>
      <Text style={styles.tituloh2}>Calculadora de Orçamento</Text>
      <Text style={styles.span}>
        Planeje a compra e escolha o vinho ideal para a sua festa!
      </Text>

      {/* MENSAGEM DE ERRO NA TELA */}
      {erro !== '' && (
        <Text style={styles.erroText}>
          {erro}
        </Text>
      )}

      {/* primeira entrada cnvidados */}
      <View style={styles.formularioCampo}>
        <Text style={styles.formularioLabel}>1. Número de Convidados:</Text>
        <TextInput 
          style={styles.formInput} 
          keyboardType="numeric" 
          value={convidados} 
          onChangeText={setConvidados} 
          placeholder="Ex: 15" 
        />
      </View>

      {/* segunda entrada tempo de festa */}
      <View style={styles.formularioCampo}>
        <Text style={styles.formularioLabel}>2. Duração do Evento (horas):</Text>
        <TextInput 
          style={styles.formInput} 
          keyboardType="numeric" 
          value={horas} 
          onChangeText={setHoras} 
          placeholder="Ex: 4" 
        />
      </View>

      {/* terceira entrada - escolher o vinho */}
      <View style={styles.formularioCampo}>
        <Text style={styles.formularioLabel}>3. Qual vinho será servido?</Text>

        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={true} 
          persistentScrollbar={true} //barrinha pra ir para o lado
          style={styles.scrollVinhos}
        >
          {vinhos.map((vinho) => (
            <TouchableOpacity 
              key={vinho.id} 
              style={[styles.vinhoOption, vinhoId === vinho.id && styles.vinhoOptionSelecionado]}
              onPress={() => setVinhoId(vinho.id)}
            >
              <Image source={{ uri: vinho.imagem }} style={styles.vinhoOptionImagem} />
              <Text 
                numberOfLines={2} 
                style={[styles.vinhoOptionText, vinhoId === vinho.id && styles.vinhoOptionTextSelecionado]}
              >
                {vinho.nome}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* BOTÃO */}
      <View style={styles.formularioBotaoView}>
        <Pressable style={styles.formularioBotao} onPress={handleSubmit}>
          <Text style={styles.formularioBotaoText}>
            Calcular Orçamento
          </Text>
        </Pressable>
      </View>

      {/* RESULTADO (Com a foto e nome do vinho) */}
      {resultado && (
        <View style={styles.resultadoContainer}>
          <Text style={styles.resultadoTextoDestaque}>
            Você precisará de: {resultado.garrafas} Garrafa(s)
          </Text>
          
          <Image source={{ uri: resultado.vinho.imagem }} style={{ width: 60, height: 100, resizeMode: 'contain', marginVertical: 10 }} />
          <Text style={styles.resultadoTextoDestaque}>{resultado.vinho.nome}</Text>
          
          <Text style={styles.resultadoTextoSecundario}>
            Custo Total: R$ {resultado.totalFinal.toFixed(2)}
          </Text>
          <Text style={styles.resultadoTextoFinal}>
            Custo por Pessoa: R$ {resultado.custoPorPessoa.toFixed(2)}
          </Text>
        </View>
      )}
    </View>
  );
};

export default Formulario;