import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const App = () => {
  const [senhaNormal, setSenhaNormal] = useState(1);
  const [senhaPrioritario, setSenhaPrioritario] = useState(1);
  const [senhaAltaPrioridade, setSenhaAltaPrioridade] = useState(1);
  const [senhaGerada, setSenhaGerada] = useState('');

  const gerarSenhaNormal = () => {
    const senha = `N0${senhaNormal}`;
    setSenhaNormal(senhaNormal + 1);
    setSenhaGerada(senha);
  };

  const gerarSenhaPrioritario = () => {
    const senha = `P0${senhaPrioritario}`;
    setSenhaPrioritario(senhaPrioritario + 1);
    setSenhaGerada(senha);
  };

  const gerarSenhaAltaPrioridade = () => {
    let senha;
    if (senhaAltaPrioridade < 10) {
      senha = `AP00${senhaAltaPrioridade}`;
    } else {
      senha = `AP0${senhaAltaPrioridade}`;
    }
    setSenhaAltaPrioridade(senhaAltaPrioridade + 1);
    setSenhaGerada(senha);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gerador de Senhas</Text>
      <View style={styles.buttonContainer}>
        <Button color='#006400' title="Gerar Senha Normal" onPress={gerarSenhaNormal} />
        <Button color='#006400' title="Gerar Senha Prioritário" onPress={gerarSenhaPrioritario} />
        <Button color='#006400' title="Gerar Senha Alta Prioridade" onPress={gerarSenhaAltaPrioridade} />
      </View>
      <Text style={styles.senhaGerada}>Senha Gerada: {senhaGerada}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,  
    backgroundColor: 'grey',
    height:'100%',
    },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 150,
    color:'white',
  },
  buttonContainer: {
    marginBottom: 80,
    gap: 5,
  },
  senhaGerada: {
    fontSize: 25,
    marginTop: 20,
     color:'white',
  },

});

export default App;