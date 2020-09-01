import React, { useEffect, useState, useRef } from 'react';
import { Text, View, KeyboardAvoidingView, TextInput, TouchableHighlight, StyleSheet } from 'react-native';


import { useForm } from 'react-hook-form';

const SignUpForm = () => {

    const onSubmit = data => {
        trigger(['email','password','passwordConfirm']);
        console.log("Form Data: ", data);
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
                        <Text style={styles.textButton}>Registrar</Text>
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
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginVertical: 5,
        paddingVertical: 7,
        backgroundColor: '#ebebeb'
    },
    btnContainer: {
        marginTop: 30
    },
    btn: {
        borderRadius: 5,
        alignItems: "center",
        backgroundColor: '#2196F3',
        padding: 8
    },
    textButton: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold'
    },
    textError: {
        color: '#ff2724'
    }
})

export default SignUpForm;