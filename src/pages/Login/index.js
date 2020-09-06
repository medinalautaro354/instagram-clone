import React from 'react';
import { Text, View, Button, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';

import Colors from '../../utils/colors';

import LoginForm from '../../components/LoginForm';

const Login = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScrollView>

                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={require('../../assets/images/instagram-logo.png')}
                    />
                </View>
                <View>
                    <LoginForm navigation={navigation} />
                </View>
            </ScrollView>

            <View style={styles.footerContainer}>
                <Text style={styles.textFooter}>¿No tienes una cuenta? </Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('SignUp')}
                >
                    <Text style={styles.btn}>Registrate.</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    logoContainer: {
        marginTop: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        height: 100,
        width: '75%'
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        borderTopWidth: 1,
        borderColor: Colors.borderColor,
        height: 40
    },
    textFooter:{
      color: Colors.borderColor
    },
    btn: {
        color: Colors.buttonColor,
        textDecorationLine: 'underline'
    }
});

export default Login;