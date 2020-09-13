import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import SignUpForm from '../../components/SignUpForm';
import { useSelector } from 'react-redux';

import { isSignUpLoading, signUpResult } from '../../redux/selectors/index';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import ModalError from '../../components/ModalError';

const SignUp = ({ navigation }) => {
    const isLoading = useSelector((state) => isSignUpLoading(state));
    const signupResult = useSelector((state) => signUpResult(state));

    const [sendRequest, setSendRequest] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [error, setError] = useState({
        message: '',
        anyError: false
    });

    const showModal = () => {
        if (sendRequest) {
            if (signupResult) {
                if (!signupResult.ok) {
                    setModalVisible(true);
                    setError({
                        message: signupResult.error.errors.email.message,
                        anyError: true
                    })
                } else {
                    setError({
                        message: '',
                        anyError: false
                    })

                    saveUserAndTokenInLocalStorage(signupResult);
                    navigation.navigate('Home');
                }
            }

            setSendRequest(false);
        }
    }

    const saveUserAndTokenInLocalStorage = ({token, user}) =>{
        AsyncStorage.setItem('token', token);
        AsyncStorage.setItem('user', JSON.stringify(user));
    }

    useEffect(() => {
        showModal()
    }, [signupResult])

    return (
        <KeyboardAwareScrollView
            resetScrollToCoords={{ x: 100, y: 100 }}
            contentContainerStyle={styles.container}
            scrollEnabled>
            <ModalError
                modalVisible={modalVisible}
                styles={styles}
                error={error}
                setModalVisible={setModalVisible}
            />
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require('../../assets/images/instagram-logo.png')}
                />

            </View>
            <View style={styles.formContainer}>
                <SignUpForm
                    isLoading={isLoading}
                    setSendRequest={setSendRequest}
                />
            </View>
        </KeyboardAwareScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
    },
    logoContainer: {
        marginTop: 80,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        height: 100,
        width: '75%'
    },
    formContainer: {
        flex: 1
    },

    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        zIndex: 10
    },
    modalView: {
        margin: 20,
        backgroundColor: Colors.background,
        borderRadius: 20,
        paddingHorizontal: 35,
        paddingTop: 35,
        paddingBottom: 10,
        shadowColor: Colors.black,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    textStyle: {
        color: Colors.buttonColor,
        fontWeight: "bold",
        textAlign: "center"
    },
    modalFooter: {
        paddingTop: 20,
        borderTopWidth: 1,
        borderColor: Colors.borderColor,
    },
    modalButtonFooter: {
        backgroundColor: Colors.background,
    }
});

export default SignUp;