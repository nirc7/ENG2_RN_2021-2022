import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function FirstPage(props) {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 40 }}>First Page!</Text>
            <TouchableOpacity onPress={() => props.navigation.navigate('SecondPage')}>
                <View>
                    <Text
                        style={{
                            fontSize: 20,
                            borderRadius: 25,
                            borderWidth: 2,
                            borderColor: 'grey', backgroundColor: '#aaaaaa',
                            padding: 15, color: 'green'
                        }}>go 2 secondpage</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate('MaterialTabbedPageNavigator')}>
                <View>
                    <Text
                        style={{
                            fontSize: 20,
                            borderRadius: 25,
                            borderWidth: 2,
                            borderColor: 'grey', backgroundColor: '#aaaaaa',
                            padding: 15, color: 'green'
                        }}>go 2 TabNav</Text>
                </View>
            </TouchableOpacity>
            <StatusBar style="auto" />
        </View >
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
