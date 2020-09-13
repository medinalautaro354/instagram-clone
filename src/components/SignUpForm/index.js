import React, { useEffect, useState, useRef } from 'react';
import { Text, View, KeyboardAvoidingView, TextInput, TouchableHighlight, StyleSheet, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { postSignUp } from '../../redux/actions/signup';

import Colors from '../../utils/colors';

import { useForm } from 'react-hook-form';

const SignUpForm = ({ isLoading, setSendRequest }) => {

    const distpach = useDispatch();

    const onSubmit = data => {
        trigger(['email', 'password', 'passwordConfirm']);

        let signUpDto = {
            email: data.email,
            password: data.password
        }

        distpach(postSignUp(signUpDto));
        setSendRequest(true);
    }

    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    const { register, handleSubmit, setValue, errors, trigger } = useForm();

    useEffect(() => {
        register('email', { required: true, maxLength: 50, min: 4 });
        register('password', { required: true, maxLength: 50, min: 4 });
        register('passwordConfirm', { required: true, maxLength: 50, min: 4 });
    }, [register])

    return (
        <View
            style={styles.container}>
            <TextInput
                placeholder='Correo electrónico'
                onChangeText={text => {
                    setValue('email', text)
                    trigger('email');
                }}
                autoCompleteType="email"
                keyboardType="email-address"
                textContentType="emailAddress"
                style={styles.textInput}
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
                    passwordConfirmRef.current.focus();
                    trigger('password');
                }}
                ref={(e) => {
                    register(e)
                    passwordRef.current = e
                }}
            />
            {errors.password?.type === 'required' && <Text style={styles.textError}>La contraseña es necesaria</Text>}
            <TextInput
                placeholder='Reingrese contraseña'
                onChangeText={text => {
                    setValue('passwordConfirm', text)
                    trigger('passwordConfirm');
                }}
                secureTextEntry={true}
                style={styles.textInput}
                onSubmitEditing={() => {
                    trigger('passwordConfirm');
                }}
                ref={(e) => {
                    register(e)
                    passwordConfirmRef.current = e
                }}
            />
            {errors.passwordConfirm?.type === 'required' && <Text style={styles.textError}>La contraseña es necesaria</Text>}
            <View style={styles.btnContainer}>
                <TouchableHighlight
                    onPress={handleSubmit(onSubmit)}
                    style={styles.btn}>
                    <View style={styles.btn}>
                        {isLoading ?
                            <ActivityIndicator size="small" color={Colors.background} /> :
                            <Text style={styles.textButton}>Registrar</Text>}
                    </View>
                </TouchableHighlight>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    btnContainer: {
        marginTop: 30
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
    }
})

export default SignUpForm;