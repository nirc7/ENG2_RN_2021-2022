import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View,TextInput } from 'react-native';


export default function App() {
const [numTxt, setNumTxt] =  useState(0);

  const bynSayHello=()=>{
    setNumTxt(parseInt(numTxt) + 1);
  }

  return (
    <View style={styles.container}>
      <Text style={{fontSize:40}}>nir!</Text>
      <TextInput onChangeText={(text) => setNumTxt(text)}/>
      <Button title="add hello2" onPress={bynSayHello}/>
      <Text style={{fontSize:40}}>{numTxt}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize:40
  },
});
