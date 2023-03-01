import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import { Entypo } from '@expo/vector-icons'; 
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

const LoginScreen = ({navigation}) => {
    //hook to hide header
    React.useLayoutEffect(() => {
        navigation.setOptions({ headerShown: false });
    }, [useNavigation]);

    const navigate = useNavigation();


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(true);

    const handlePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    const submitForm = () => {
        if(email === '' || password === ''){
            alert('Please fill all fields');
        }else{
            navigation.navigate('Home', {email: email});
        }
    }


  return (
    <View style={styles.container}>
        <View style={styles.topView}>
            <Image source={require('../../assets/Vector.png')} style={{width: 100, height: 100}} />
        </View>
        <View style={{paddingHorizontal: 20, alignItems: 'center', paddingTop: 50}}>
            <Text style={styles.title}>Coffe</Text>
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.input}  
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    placeholder='votre nom'
                />
                <Entypo name="user" size={18} color="gray" />
            </View>
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.input}
                    value={password}
                    onChangeText={(text) => setPassword(text)} 
                    placeholder='password'
                    secureTextEntry={showPassword}
                />
                <TouchableOpacity onPress={handlePasswordVisibility}>
                    <Entypo name={showPassword ? 'eye-with-line' : 'eye' } size={18} color="gray" />
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.btn}>
                <Button title='Login' color='white' onPress={submitForm}/>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    inputContainer:{
        flexDirection: 'row',
        width: '100%',
        backgroundColor: 'rgba(50, 74, 89, 0.1)',
        padding: 15,
        borderRadius: 5,
        marginBottom: 15,
    },
    input:{
        flex: 1,
    },
    title:{
        fontSize: 30,
        marginBottom: 20,
    },
    btn: {
        width: 340,
        backgroundColor: '#324A59',
        color: 'white',
        borderRadius: 5,
        padding: 6,
    },
    topView:{
        backgroundColor: '#324A59',
        width: '100%',
        alignItems: 'center',
        paddingTop: '30%',
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
    }
})