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
        <Button title="Gerar Senha Normal" onPress={gerarSenhaNormal} />
        <Button title="Gerar Senha Prioritário" onPress={gerarSenhaPrioritario} />
        <Button title="Gerar Senha Alta Prioridade" onPress={gerarSenhaAltaPrioridade} />
      </View>
      <Text style={styles.senhaGerada}>Senha Gerada: {senhaGerada}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    marginBottom: 20,
  },
  senhaGerada: {
    fontSize: 18,
    marginTop: 20,
  },
});

export default App;