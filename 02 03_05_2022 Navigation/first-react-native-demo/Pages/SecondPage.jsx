import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {Button, StyleSheet, Text, View, TextInput, Image } from 'react-native';
// import { Button } from '@rneui/themed';

export default function SecondPage() {
  const [numTxt, setNumTxt] = useState(0);

  const bynSayHello = () => {
    setNumTxt(parseInt(numTxt) + 1);
  }

  return (
      <View style={styles.container}>
        <Text style={{ fontSize: 40 }}>nir!</Text>
        <TextInput onChangeText={(text) => setNumTxt(text)} />
        <Button title="add hello2" onPress={bynSayHello} />
        <Text style={{ fontSize: 40 }}>{numTxt}</Text>
        <Image source={require('../assets/cp2.jpg')}
          style={{ width: 250, height: 200, borderWidth: 1, borderColor: 'red', margin: 10 }} />

        {/* <Button
          title="Danger"
          buttonStyle={{ backgroundColor: 'rgba(214, 61, 57, 1)' }}
          containerStyle={{
            height: 40,
            width: 200,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
          titleStyle={{ color: 'white', marginHorizontal: 20 }}
        /> */}
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
    fontSize: 40
  },
});
