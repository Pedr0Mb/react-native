import { Text, SafeAreaView, StyleSheet, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>GERADOR DE SENHAS</Text>

      <View style={styles.btn}>
        <Button 
         onPress={() => {
        console.log('You tapped the button!');
          }}
          title="NORMAL"
          backgroundColor="green"
        />
        <Button
          title="PRIORITÁRIO"
          backgroundColor="green"
        />
        <Button
          title="ALTA PRIORIDADE"
          backgroundColor="green"
          width="100%"
        />
      </View>
      <View style={styles.inp}>
        <TextInput style={styles.input} />
     </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text:{
    marginTop:-200,
    textAlign:'center',
    marginBottom: 100,
    fontSize: 30,
    fontWeight:'bold'
  },
  container: {
    flex:1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  btn:{
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    gap: 40,
  },
  input:{
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginTop: 70,
    width: 300,
  },
  inp:{
    alignItems: 'center',
    justifyContent: 'center',
  }
});
