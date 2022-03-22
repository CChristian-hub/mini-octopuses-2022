import { FontAwesome } from '@expo/vector-icons';
import React, { useEffect } from 'react';
import { ImageBackground, Text, View } from 'react-native';
import { connect } from 'react-redux';
import SquareButtonBorder from "../components/SquareButtonBorder";
import SquareButtonFilled from "../components/SquareButtonFilled";
import config from '../config';
import StyleGuide from "../style/styleGuide";

function ResultScreen(props) {
    useEffect(() => {
        props.setTimeZero()
    }, [props.time])

    async function generateGame() {
        let rawResponse = await fetch(`${config.myIp}/generate-game`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `deviceLang=EN&topics=${props.user.topics}`
        });
        let response = await rawResponse.json()
        if (response.result) {
            props.saveGame(response.game)
            props.setTimeZero()
            props.resetPos()
            props.navigation.navigate("TrainingScreen");
        }
    }

    return (
        <ImageBackground
            source={require("../assets/Profile.png")}
            style={StyleGuide.container}
        >
            <FontAwesome
                style={{ position: 'absolute', color: '#FFCB53', top: 50 }}
                name="trophy"
                size={170}
                color="white"
            />

            <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 70, marginTop: 250 }}>
                <Text style={{ fontSize: 34, color: 'white' }}>Voici ton score</Text>
                <Text style={{ fontSize: 70, color: 'white' }}>{props.game.score} / 8</Text>
            </View>

            <View >
                <SquareButtonFilled
                    onPress={() => { generateGame() }}
                    buttonTitle="Rejouer"
                />
                <SquareButtonBorder
                    onPress={() => {
                        props.navigation.navigate("HistoryScreen", { from: 'ResultScreen' })
                        props.setTimeZero()
                        props.resetPos()
                    }}
                    buttonTitle="Voir les réponses"
                />
                <SquareButtonBorder
                    onPress={() => {
                        props.setTimeZero()
                        props.resetPos()
                        props.navigation.navigate("Home")
                    }}
                    buttonTitle="Accueil"
                />
            </View>
        </ImageBackground>
    )
}

function mapStateToProps(state) {
    return ({
        game: state.game,
        score: state.score,
        user: state.user,
        time: state.time
    })
}
function mapDispatchToProps(dispatch) {
    return {
        saveGame: function (game) {
            dispatch({ type: 'saveGame', game })
        },
        setTimeZero: function () {
            dispatch({ type: 'setTimeZero' })
        },
        resetPos: function () {
            dispatch({ type: 'resetPos' })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ResultScreen);