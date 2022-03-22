import AsyncStorage from '@react-native-async-storage/async-storage';
import React from "react";
import { Dimensions, Image, View } from "react-native";
import { Button } from "react-native-elements";
import { connect } from "react-redux";
import config from "../config";

function FacebookPage(props) {
  const facebookSignUp = async () => {
    let number = getRandomInt(1, 9999);
    let user = await fetch(`${config.myIp}/sign-up`, {
      method: "POST",
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `username=Hiken${number}&email=facebook${number}@facebook.com&password=ocotopuses&isGuest=false`,
    });
    let backResponse = await user.json();
    if (backResponse.result) {
      props.saveUser(backResponse.user);
      AsyncStorage.setItem('token', backResponse.user.token);
      props.navigation.navigate("Home");
    }
  };

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <View style={{ position: "relative" }}>
      <View
        style={{
          position: "absolute",
          zIndex: 1000,
          top: Dimensions.get("window").height / 1.4,
          left: Dimensions.get("window").width / 12,
        }}
      >
        <Button
          buttonStyle={{
            width: Dimensions.get("window").width / 1.19,
            height: Dimensions.get("window").height / 12,
            marginBottom: 10,
            borderRadius: 10,
            backgroundColor: "#4267B2",
          }}
          onPress={() => { facebookSignUp() }}
          title="Se connecter en tant que Hiken"
        >
        </Button>
        <Button
          buttonStyle={{
            width: Dimensions.get("window").width / 1.19,
            height: Dimensions.get("window").height / 12,
            borderRadius: 10,
            backgroundColor: "lightgrey",
          }}
          onPress={() => props.navigation.navigate("AllConnexion")}
          title="Annuler"
        >
        </Button>
      </View>
      <Image
        source={require("../assets/facebook.png")}
        style={{ width: Dimensions.get("window").width / 1, height: Dimensions.get("window").height / 0.9, }}
      />
    </View>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    saveUser: function (gameUser) {
      dispatch({ type: "saveUser", gameUser });
    }
  }
}
export default connect(null, mapDispatchToProps)(FacebookPage)