import React from 'react';
import { Text, View, Button, StyleSheet, Image } from 'react-native';

import LoginForm from '../../components/LoginForm';

const Login = ({navigation}) =>{
    return(
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require('../../assets/images/instagram-logo.png')}
                />
            </View>
            <View>
                <LoginForm navigation={navigation}/>
            </View>
        </View>
        )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    logoContainer:{
        marginTop: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },  
    logo:{
        height: 100,
        width: '75%'
    }
  });

export default Login;