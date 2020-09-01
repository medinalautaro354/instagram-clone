import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import SignUpForm from '../../components/SignUpForm';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const SignUp = () => {

    return (
        <KeyboardAwareScrollView
            resetScrollToCoords={{ x: 100, y: 100 }}
            contentContainerStyle={styles.container}
            scrollEnabled>
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require('../../assets/images/instagram-logo.png')}
                />

            </View>
            <View style={styles.formContainer}>
                <SignUpForm
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
    }
});

export default SignUp;