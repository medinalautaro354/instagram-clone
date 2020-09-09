import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import IconButton from '../IconButton';

import { faCamera} from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';

const HeaderHome = () => {
    return (
        <View style={styles.container}>
            <IconButton
            size={30}
            icon={faCamera}
            style={styles.iconLeft}
            />
            <Image
                style={styles.logo}
                source={require('../../assets/images/instagram-logo.png')}
            />
            <IconButton
            size={30}
            icon={faPaperPlane}
            style={styles.iconRight}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding:5,
        borderBottomWidth: 1,
        borderColor: 'gray',
        height: 65
    },
    logo:{
        height: 40,
        width: 150,
        paddingBottom: 50
    },
    iconLeft:{
        marginLeft: 5
    },
    iconRight:{
        marginRight: 5
    }

});

export default HeaderHome;