import React from 'react';
import { Text, View, Button } from 'react-native';

const Login = ({navigation}) =>{
    return(
        <View>
            <Button 
            title="Acceder"
            onPress={() => navigation.navigate('Home')}/>
        </View>
        )
}

export default Login;