import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {

  const btnSave = () => {
    let person = {
      Id: 7,
      name: 'avi'
    };
    storeData(person);
  }

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('personData', jsonValue)
      console.log('stored!');
    } catch (e) {
      // saving error
    }
  }

  const btngetData = async () => {
    let obj = await getData();
    console.log(obj.name);
  }

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('personData')
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  }


  return (
    <View style={styles.container}>
      <Text>nir app!</Text>
      <Button title="save on asyncStorage" onPress={btnSave} />
      <View style={{margin:15}}>
        <Button title="Get asyncStorage data" onPress={btngetData} />
      </View>
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
  },
});
