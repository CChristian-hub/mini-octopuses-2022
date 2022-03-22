import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {Dimensions, StyleSheet, Text,TouchableOpacity, View} from "react-native";

export default function SquareButtonBorder(props) {
    return (
        <TouchableOpacity onPress={props.onPress} style={{ marginBottom: 20 }} >
            <LinearGradient
                start={[0, 0.5]}
                end={[1, 0.5]}
                colors={["#F81C8F", "#FFA353"]}
                style={{ borderRadius: 5 }}>
                <View style={styles.squareButtonBorder}>
                    <Text style={styles.buttonTitle}>{props.buttonTitle}</Text>
                </View>
            </LinearGradient>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonTitle: {
        textAlign: "center",
        textAlignVertical: 'center',
        color: 'white',
        fontSize: 20,
    },
    squareButtonBorder: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 3,
        backgroundColor: "#2B2B2B",
        borderRadius: 5,
        width: Dimensions.get('window').width / 1.3 + 6,
        height: Dimensions.get('window').height / 15 + 6,
    }
});