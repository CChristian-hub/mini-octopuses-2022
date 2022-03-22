import { FontAwesome } from '@expo/vector-icons';
import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { connect } from "react-redux";
import SquareButtonBorder from "../components/SquareButtonBorder";
import config from "../config";
import StyleGuide from "../style/styleGuide";

function PastBattles(props) {
    const [gameList, setGameList] = useState([]);

    useEffect(() => {
        async function loadGames() {
            let rawResponse = await fetch(`${config.myIp}/get-user-all-games?token=${props.user.token}`);
            let response = await rawResponse.json()
            if (response.result) {
                setGameList(response.gameList)
            } else {
                console.log("Error: could not fetch user's gamelist")
            }
        }
        loadGames();
    }, []);

    async function getGame(id, game) {
        props.saveGame(game)
        props.navigation.navigate("HistoryScreen", { from: 'PastBattles' })
    }

    let tab = gameList.map((elem, i) => {
        let title = "Bataille " + i
        return (
            <SquareButtonBorder key={i} onPress={() => {
                getGame(elem._id, elem)
            }} buttonTitle={title} />
        )
    })

    return (
        <View style={StyleGuide.container}>
            <View style={StyleGuide.header}>
                <FontAwesome
                    onPress={() => props.navigation.goBack()}
                    style={{ marginTop: 30, marginLeft: 10 }} name="arrow-left" size={25} color="white"
                />
            </View>
            <Text style={{ fontSize: 20, marginBottom: 20, color: 'white' }}>Batailles passées</Text>
            <ScrollView>
                {tab}
            </ScrollView>
        </View>
    );
}

function mapStateToProps(state) {
    return { user: state.user }
}

function mapDispatchToProps(dispatch) {
    return {
        saveGame: function (game) {
            dispatch({ type: 'saveGame', game })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PastBattles)
