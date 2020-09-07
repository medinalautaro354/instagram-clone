import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    Button,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    Image,
    Modal
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import { useSelector } from "react-redux";

import Colors from '../../utils/colors';
import { isLoginLoading, loginResult } from '../../redux/selectors/index';

import LoginForm from '../../components/LoginForm';

const Login = ({ navigation }) => {
    const isLoading = useSelector((state) => isLoginLoading(state));
    const loginResponse = useSelector((state) => loginResult(state));

    const [sendRequest, setSendRequest] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [error, setError] = useState({
        message: '',
        anyError: false
    });

    const showModal = () => {
         if (sendRequest) {
            if (loginResponse) {
                if (!loginResponse.ok) {
                    setModalVisible(true);
                    setSendRequest(false);
                    setError({
                        message: loginResponse.err.message,
                        anyError: true
                    })
                } else {
                    setError({
                        message: '',
                        anyError: false
                    })
                    setSendRequest(false);
                    saveUserAndTokenInLocalStorage(loginResponse);

                    navigation.navigate('Home');
                }
            }
        }
    }

    const saveUserAndTokenInLocalStorage = ({token, user}) =>{
        AsyncStorage.setItem('token', token);
        AsyncStorage.setItem('user', JSON.stringify(user));
    }

    useEffect(() => {
        showModal();
    }, [loginResponse])

    return (
        <View style={styles.container}>
            <ScrollView>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                    }}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>
                                {error.anyError ? error.message : ''}
                            </Text>

                            <View style={styles.modalFooter}>

                                <TouchableOpacity
                                    style={styles.modalButtonFooter}
                                    onPress={() => {
                                        setModalVisible(!modalVisible);
                                    }}
                                >
                                    <Text style={styles.textStyle}>Intentar de nuevo</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={require('../../assets/images/instagram-logo.png')}
                    />
                </View>
                <View>
                    <LoginForm
                        navigation={navigation}
                        isLoading={isLoading}
                        setSendRequest={setSendRequest}
                    />
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
    textFooter: {
        color: Colors.borderColor
    },
    btn: {
        color: Colors.buttonColor,
        textDecorationLine: 'underline'
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

export default Login;