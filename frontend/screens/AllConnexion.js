import { FontAwesome } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { ImageBackground, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-elements";
import { connect } from "react-redux";
import Logo from "../components/Logo";
import SquareButtonBorder from "../components/SquareButtonBorder";
import SquareButtonFilled from "../components/SquareButtonFilled";
import config from "../config";
import StyleGuide from "../style/styleGuide";

function AllConnexion(props) {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const guestSignUp = async () => {
    let number = getRandomInt(1, 9999);
    let user = await fetch(`${config.myIp}/sign-up`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `username=Guest${number}&email=guest${number}@guest.com&password=ocotopuses&isGuest=true`,
    });
    let backResponse = await user.json();
    if (backResponse.result) {
      props.saveUser(backResponse.user);
      AsyncStorage.setItem("token", backResponse.user.token);
      props.navigation.navigate("Home");
    }
  };

  return (
    <ImageBackground source={require("../assets/bg.png")} style={StyleGuide.container}>
      <Logo />
      <TouchableOpacity style={StyleGuide.facebookButton} onPress={() => props.navigation.navigate("FacebookPage")} >
        <FontAwesome name="facebook" size={27} color="white" />
        <Text style={StyleGuide.titleFacebookButton}> Connexion Facebook</Text>
      </TouchableOpacity>
      <View style={{ marginBottom: 20 }}>
        <SquareButtonBorder onPress={() => props.navigation.navigate("SignUp")} buttonTitle="S'inscrire" />
        <SquareButtonBorder onPress={() => props.navigation.navigate("SignIn")} buttonTitle="Se connecter" />
        <SquareButtonFilled onPress={() => guestSignUp()} buttonTitle="Jouer en tant qu'invité" />
      </View>
    </ImageBackground>
  );
}

function maDispatchToProps(dispatch) {
  return {
    saveUser: function (gameUser) {
      dispatch({ type: "saveUser", gameUser });
    }
  };
}
export default connect(null, maDispatchToProps)(AllConnexion);
