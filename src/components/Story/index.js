import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHeart, faComment, faPaperPlane, faBookmark } from '@fortawesome/free-solid-svg-icons'

import IconButton from '../IconButton';
const Story = ({image, username, likes, comentary}) => {
    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <Image
                    style={styles.tinyLogo}
                    source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }}
                />
                <Text style={styles.text}>{username}</Text>
            </View>
            <View>
                <Image
                    style={styles.image}
                    source={{
                        uri: image
                    }}
                />
            </View>
            <View style={styles.containerFooter}>
                <View style={styles.containerIcons}>
                    <IconButton
                        icon={faHeart}
                        size={30}
                        style={styles.icon}
                    />

                    <IconButton
                        size={30}
                        icon={faComment}
                        style={styles.icon}
                    />

                    <IconButton
                        size={30}
                        icon={faPaperPlane}
                        style={styles.icon}
                    />
                    <IconButton
                        size={30}
                        icon={faBookmark}
                        style={styles.iconRight}
                    />
                </View>
                <View style={styles.containerTextFooter}>
                    <Text>{likes} Me gusta</Text>
                </View>
                <View>
                <Text>{username} {comentary}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        marginVertical: 10
    },  
    containerHeader: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    tinyLogo: {
        borderRadius: 100,
        width: 40,
        height: 40,
        margin: 5
    },
    text: {
        fontWeight: 'bold'
    },
    image: {
        width: '100%',
        height: 450,
    },
    containerFooter: {
        margin: 5,
    },
    containerIcons:{
        flexDirection: 'row',
    },
    icon: {
        margin: 5
    },
    iconRight: {
        margin: 5,
        marginLeft: '75%'            
    },
    containerTextFooter:{
        margin: 5
    }
})

export default Story;