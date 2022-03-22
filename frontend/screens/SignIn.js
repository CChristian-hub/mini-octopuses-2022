import { FontAwesome } from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from "react";
import { Dimensions, View } from "react-native";
import { Text } from "react-native-elements";
import { connect } from "react-redux";
import FormInput from "../components/FormInput";
import Logo from "../components/Logo";
import SquareButtonBorder from "../components/SquareButtonBorder";
import configIp from "../config.js";
import StyleGuide from "../style/styleGuide";

function SignIn(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFocus, setIsFocus] = useState(false);

  const signIn = async () => {
    let user = await fetch(`${configIp.myIp}/sign-in`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `email=${email}&password=${password}`,
    });
    let backResponse = await user.json();
    if (backResponse.result) {
      props.saveUser(backResponse.user);
      AsyncStorage.setItem('token', backResponse.user.token);
      props.navigation.navigate("Home");
    }
  };

  return (
    <View style={StyleGuide.container}>
      <View style={StyleGuide.header}>
        <FontAwesome
          onPress={() => props.navigation.goBack()}
          style={{ marginTop: 30, marginLeft: 10 }}
          name="arrow-left"
          size={25}
          color="white"
        />
      </View>

      {isFocus ? <Text></Text> :
        <View style={{
          width: Dimensions.get("window").width / 1.2,
          height: Dimensions.get("window").height / 2.3,
          marginTop: -50,
          marginBottom: 30
        }}>
          <Logo />
        </View>}
      <Text style={{ color: "white", fontSize: 22 }}>Connexion</Text>

      <FormInput
        placeholder="Email"
        icon="email"
        value={email}
        onChangeText={(val) => setEmail(val)}
        focus={() => setIsFocus(true)}
        isDefocus={() => setIsFocus(false)}
      />
      <FormInput
        focus={() => setIsFocus(true)}
        isDefocus={() => setIsFocus(false)}
        placeholder="Mot de passe"
        value={password}
        onChangeText={(val) => setPassword(val)}
      />

      <SquareButtonBorder onPress={() => signIn()} buttonTitle="Valider" />
    </View>
  );
}

function maDispatchToProps(dispatch) {
  return {
    saveUser: function (gameUser) {
      dispatch({ type: "saveUser", gameUser });
    },
  };
}

function mapStatesToProps(state) {
  return { user: state.user };
}
export default connect(mapStatesToProps, maDispatchToProps)(SignIn);
