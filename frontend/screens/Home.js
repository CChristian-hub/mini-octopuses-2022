import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { connect } from "react-redux";
import Logo from "../components/Logo";
import SquareButtonFilled from "../components/SquareButtonFilled";
import StyleGuide from "../style/styleGuide";

function Home(props) {
  return (
    <SafeAreaView style={StyleGuide.container}>
      <View style={StyleGuide.header}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Profile")}
          style={{ justifyContent: 'center', alignItems: 'center' }}
        >
          <Image
            style={StyleGuide.profileImageButton}
            source={require("../assets/octo_blue.png")}
          />
          <Text style={{ marginLeft: 10, color: "white" }}>
            #{props.user.username}
          </Text>
        </TouchableOpacity>
        <FontAwesome
          onPress={() => props.navigation.navigate("Settings")}
          style={{ marginTop: 15, marginRight: 10 }}
          name="gear"
          size={35} color="white"
        />
      </View>
      <Logo style={{ marginTop: -40 }} />
      <SquareButtonFilled
        onPress={() => props.navigation.navigate("Categories")}
        buttonTitle="Entrainement"
      />
      <SquareButtonFilled
        onPress={() => props.navigation.navigate("Categories")}
        buttonTitle="Duel"
      />
    </SafeAreaView>
  );
}

function mapStateToProps(state) {
  return { user: state.user };
}
export default connect(mapStateToProps, null)(Home);
