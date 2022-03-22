import AsyncStorage from "@react-native-async-storage/async-storage";
import LottieView from "lottie-react-native";
import React, { useEffect } from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { connect } from "react-redux";
import Logo from "../components/Logo";
import config from "../config";
import StyleGuide from "../style/styleGuide";


function SplashScreen(props) {
  useEffect(() => {
    setTimeout(() => {
      async function loadToken() {
        AsyncStorage.getItem("token", async function (error, data) {
          if (data) {
            let rawResponse = await fetch(
              `${config.myIp}/get-user?token=${data}`
            );
            let response = await rawResponse.json();
            if (response.result) {
              props.saveUser(response.user);
              props.navigation.navigate("Home");
            } else {
              props.navigation.navigate("AllConnexion");
            }
          } else {
            props.navigation.navigate("AllConnexion");
          }
        });
      }
      loadToken();
    }, 1500);
  }, []);

  return (
    <ImageBackground
      source={require("../assets/bg.png")}
      style={StyleGuide.container}
    >
      <Logo style={{ marginTop: 100 }} />
      <LottieView
        style={styles.loading}
        source={require("../assets/lottie/loading.json")}
        autoPlay
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  loading: {
    height: 350
  },
});
function maDispatchToProps(dispatch) {
  return {
    saveUser: function (gameUser) {
      dispatch({ type: "saveUser", gameUser });
    },
  };
}
export default connect(null, maDispatchToProps)(SplashScreen);
