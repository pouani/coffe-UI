import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const HomeScreen = ({ route, navigation }) => {

    React.useLayoutEffect(() => {
        navigation.setOptions({ headerShown: false });
    }, [useNavigation]);
    const {name} = route.params.email;

    setTimeout(() => {
        navigation.navigate('Coffe');
    }, 3000);

  return (
    <View>
        <ImageBackground
            source={require('../../assets/images/mukul-wadhwa-unsplash.jpg')} 
            style={{width: '100%', height: '100%', justifyContent: 'space-around'}}>
            <View>
                <Text style={styles.text1}>Bienvenue !!</Text>
                <Text style={{fontSize: 12, textAlign: 'center'}}>Redirection en cours...</Text>
            </View>
            
            <Text style={styles.text2}>{route.params.email}</Text>
        </ImageBackground>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text1:{
        color: '#324A59',
        fontSize: 55,
        fontWeight: 'bold',
        textAlign: 'center',
        letterSpacing: -2
    },
    text2:{
        color: '#fff',
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center'
    },
})