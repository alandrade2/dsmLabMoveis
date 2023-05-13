import React, { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";


import * as Animatable from 'react-native-animatable';

import { useNavigation } from "@react-navigation/native";

export default function Welcome() {
    const [user, setUser] = useState([]);

    useEffect(() => {
        userLog()
    }, []);

    async function userLog() {
        const logUser = await AsyncStorage.getItem('users');
        console.log(logUser)
        setUser('Login');
        /* Cadastrar os seguintes dados do usuario
            - nome
            - telefone
            - cpf
            - email
            - curso
            - usuario
            - logado(sim/não)
 
        */
    }

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Animatable.Image
                    animation="flipInY"
                    source={require('../assets/logo.jpg')}
                    style={{ width: '100%' }}
                    resizeMode="contain"
                />
            </View>

            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm} >
                <Text style={styles.title}>  RICK AND MORTY</Text>
                <Text style={styles.text}>Conheça tudo sobre a Serie</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('login')}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>{user}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('register')}
                    style={styles.button1}
                >
                    <Text style={styles.buttonText}>Cadastrar-se</Text>
                </TouchableOpacity>


            </Animatable.View>

        </View >
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#38a69d'
    },
    containerLogo: {
        flex: 2,
        backgroundColor: '#38a69c',
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerForm: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,
        textAlign: 'center',
        color: '#000'
    },
    text: {
        color: '#000',
        fontSize: 20,
        textAlign: 'center'
    },
    button: {
        position: 'relative',
        backgroundColor: '#38a69d',
        top: 20,
        borderRadius: 50,
        paddingVertical: 12,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button1: {
        position: 'relative',
        backgroundColor: '#38a69d',
        top: 40,
        borderRadius: 50,
        paddingVertical: 12,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    }

})