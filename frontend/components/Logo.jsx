import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import { Text } from 'react-native-elements';

export default function Logo({ style }) {
    return (
        <View style={[styles.container, style]}>
            <Image source={require('../assets/Logo.png')} style={styles.logo} />
            <View style={styles.titleContainer}>
                <Image source={require('../assets/LogoText.png')} />
                <Text style={styles.subTitle}>Dev Quizz Battle</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        margin: 0,
        padding: 0,
    },
    logo: {
        width: Dimensions.get('window').width / 1.2,
        height: Dimensions.get('window').height / 2.3,
        resizeMode: 'contain',
        position: 'absolute',
        top: 0
    },

    titleContainer: {
        position: 'absolute',
        top: Dimensions.get('window').height / 2.3 - 60,
    },
    subTitle: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff',

    }
})