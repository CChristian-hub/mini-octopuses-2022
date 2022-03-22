import { FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";
import { Dimensions, View } from "react-native";
import { Text } from "react-native-elements";
import { connect } from "react-redux";
import FormInput from "../components/FormInput";
import Logo from "../components/Logo";
import SquareButtonBorder from "../components/SquareButtonBorder";
import config from "../config";
import StyleGuide from "../style/styleGuide";

function SignUp(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFocus, setIsFocus] = useState(false);

  const signUp = async () => {
    let user = await fetch(`${config.myIp}/sign-up`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `username=${username}&email=${email}&password=${password}&isGuest=false`,
    });
    let backResponse = await user.json();
    if (backResponse.result) {
      props.saveUser(backResponse.user);
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
          marginBottom: 30,
        }}>
          <Logo />
        </View>}
      <Text style={{ color: "white", fontSize: 22 }}>Inscription</Text>
      <FormInput
        focus={() => setIsFocus(true)}
        isDefocus={() => setIsFocus(false)}
        placeholder="Prénom / Pseudo"
        icon="pseudo"
        value={username}
        onChangeText={(val) => setUsername(val)}
      />
      <FormInput
        focus={() => setIsFocus(true)}
        isDefocus={() => setIsFocus(false)}
        placeholder="Email"
        icon="email"
        value={email}
        onChangeText={(val) => setEmail(val)}
      />
      <FormInput
        focus={() => setIsFocus(true)}
        isDefocus={() => setIsFocus(false)}
        placeholder="Mot de passe"
        value={password}
        onChangeText={(val) => setPassword(val)}
      />
      <SquareButtonBorder onPress={() => signUp()} buttonTitle="Valider" />
    </View>
  );
}

function maDispatchToProps(dispatch) {
  return {
    saveUser: function (gameUser) {
      dispatch({ type: "saveUser", gameUser });
    }
  };
}

function mapStatesToProps(state) {
  return { user: state.user };
}
export default connect(mapStatesToProps, maDispatchToProps)(SignUp);
