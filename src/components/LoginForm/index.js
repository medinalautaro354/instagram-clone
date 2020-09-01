import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';

const LoginForm = ({navigation}) => {
    return (
        <>
            <View style={styles.container}>
                <Text>¿No tienes una cuenta? </Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('SignUp')}
                    
                >
                    <Text style={styles.text}>Registrate.</Text>
                </TouchableOpacity>
            </View>
        </>);
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        color: '#2196f2',
        textDecorationLine: 'underline'
    }
});

export default LoginForm;