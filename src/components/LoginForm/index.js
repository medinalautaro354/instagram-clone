import React, { useEffect, useState, useRef } from 'react';
import { Text, StyleSheet, TouchableOpacity, View, TextInput, ActivityIndicator } from 'react-native';
import {useDispatch} from 'react-redux';

import { postLogin } from '../../redux/actions/authentication';

import Colors from '../../utils/colors';

import { useForm } from 'react-hook-form';

const LoginForm = ({ navigation, isLoading, setSendRequest }) => {

    const dispatch = useDispatch();

    const onSubmit = data => {
        trigger(['email', 'password']);

        let loginRequestDto = {
            email: data.email,
            password: data.password
        }
        dispatch(postLogin(loginRequestDto));

        setSendRequest(true);
    }

    const { register, handleSubmit, setValue, errors, trigger } = useForm();

    const passwordRef = useRef();

    useEffect(() => {
        register('email', { required: true, maxLength: 50, min: 4 });
        register('password', { required: true, maxLength: 50, min: 4 });
    }, [register]);

    return (
        <>
            <View style={styles.container}>
                <TextInput
                    placeholder='Correo electrónico'
                    onChangeText={text => {
                        setValue('email', text.toLowerCase())
                        trigger('email');
                    }}
                    autoCompleteType="email"
                    keyboardType="email-address"
                    textContentType="emailAddress"
                    style={styles.textInput}
                    autoFocus={true}
                    onSubmitEditing={() => {
                        passwordRef.current.focus();
                        trigger('email');
                    }}
                />
                {errors.email?.type === 'required' && <Text style={styles.textError}>El email es necesario</Text>}

                <TextInput
                    placeholder='Contraseña'
                    onChangeText={text => {
                        setValue('password', text)
                        trigger('password');
                    }}
                    secureTextEntry={true}
                    style={styles.textInput}
                    onSubmitEditing={() => {
                        trigger('password');
                    }}
                    ref={(e) => {
                        register(e)
                        passwordRef.current = e
                    }}
                />
                {errors.password?.type === 'required' && <Text style={styles.textError}>La contraseña es necesaria</Text>}
                
                <View style={styles.containerRecoveryPassword}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('SignUp')}
                >
                    <Text style={styles.textRecoveryPassword}>¿Olvidaste tu contraseña?</Text>
                </TouchableOpacity>
                </View>
                <View style={styles.btnContainer}>
                    <TouchableOpacity
                        onPress={handleSubmit(onSubmit)}
                        style={styles.btn}
                        >
                        <View style={styles.btn}>
                            {isLoading ? <ActivityIndicator size="small" color={Colors.background} /> : 
                            <Text style={styles.textButton}>Iniciar sesión</Text>}
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </>);
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
    },
    textInput: {
        borderColor: Colors.borderColor,
        borderWidth: 1,
        borderRadius: 5,
        marginVertical: 5,
        paddingVertical: 7,
        backgroundColor: Colors.backgroudInput
    },
    containerRecoveryPassword:{
        marginTop: 5,
        justifyContent: 'center',
        alignItems:'flex-end'
    },
    textRecoveryPassword:{
        color: Colors.buttonColor,
        fontWeight: 'bold'
    },
    btnContainer: {
        marginTop: 20
    },
    btn: {
        borderRadius: 5,
        alignItems: "center",
        backgroundColor: Colors.buttonColor,
        padding: 8
    },
    textButton: {
        color: Colors.background,
        fontSize: 15,
        fontWeight: 'bold'
    },
    textError: {
        color: Colors.errorTextColor
    },
});

export default LoginForm;