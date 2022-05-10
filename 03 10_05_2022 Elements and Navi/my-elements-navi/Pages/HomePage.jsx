import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from '@rneui/base';

export default function HomePage() {
  return (
      <View style={styles.container}>
        <Text>Home page</Text>
        <Button title="Hello World" />
        <Button
          title="HOME"
          icon={{
            name: 'home',
            type: 'font-awesome',
            size: 35,
            color: 'black',
          }}
          iconContainerStyle={{ marginRight: 10 }}
          titleStyle={{ fontWeight: '700' }}
          buttonStyle={{
            backgroundColor: 'rgba(10, 254, 230, 1)',
            borderColor: 'transparent',
            borderWidth: 0,
            borderRadius: 30,
          }}
          containerStyle={{
            width: 300,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
        />
        
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
