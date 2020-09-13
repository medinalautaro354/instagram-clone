import React from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';


const ModalError = ({modalVisible, styles, error, setModalVisible}) => {

    return (<>
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
    </>);
}

export default ModalError;