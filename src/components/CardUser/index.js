import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../../utils/colors';

import Colors from '../../utils/colors';

const CardUser = ({images, username, description, id, profilePictureUrl}) => {

    return (<View style={styles.container}>
        <Image style={styles.image}
            source={{
                uri: profilePictureUrl,
            }} />
        <Text style={styles.text}>{username}</Text>
        <Text>{description}</Text>
        <View style={styles.containerImages}>
            {images.map((item, i) => {
                const { url } = item;

                return (<Image
                    style={styles.images}
                    source={{
                        uri: url,
                    }} />)
            })}
        </View>
        <Text> Recomendado(a) por instagram</Text>
        <View style={styles.containerBtn}>
                <TouchableOpacity
                onPress={() => { }}
            >
                <Text style={styles.textBtn}>Seguir</Text>
            </TouchableOpacity>
        </View>
    </View>)
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.background,
        borderRadius: 30,
        padding: 15,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 100,
        marginBottom: 5
    },
    text: {
        fontWeight: 'bold'
    },
    containerImages: {
        flexDirection: 'row',
        marginVertical: 20
    },
    images: {
        width: 80,
        height: 80,
        margin: 1
    },
    containerBtn: {
        borderRadius: 8,
        alignItems: "center",
        backgroundColor: Colors.buttonColor,
        paddingHorizontal: 40,
        paddingVertical: 10,
        marginVertical: 20
    },
    textBtn:{
        color: Colors.background,
        fontWeight: 'bold',
        fontSize: 20
    }
});

export default CardUser;