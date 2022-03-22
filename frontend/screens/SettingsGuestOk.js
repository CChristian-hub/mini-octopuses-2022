import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Dimensions, Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { connect } from "react-redux";
import SquareButtonBorder from "../components/SquareButtonBorder";
import SwitchComponent from "../components/SwitchComponent";
import StyleGuide from "../style/styleGuide";

function SettingsGuestOk(props) {
  const [effetSonore, setEffetSonore] = useState(false);
  const [musique, setMusique] = useState(false);
  const [vibration, setVibration] = useState(false);
  const [notification, setNotification] = useState(false);
  const [langageFr, setLangageFr] = useState(true);

  const isLanguage = () => {
    setLangageFr(!langageFr);
  };

  return (
    <ImageBackground
      source={require("../assets/Profile.png")}
      style={StyleGuide.container}
    >
      <View style={StyleGuide.header}>
        <FontAwesome
          onPress={() => props.navigation.goBack(null)}
          style={{ marginTop: 30, marginLeft: 10 }}
          name="arrow-left"
          size={25}
          color="white"
        />
      </View>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          top: -40,
        }}
      >
        <Image
          style={{
            width: Dimensions.get("window").width / 3.5,
            height: Dimensions.get("window").height / 5.5,
            borderRadius: 100,
          }}
          source={require("../assets/octo_blue.png")}
        />
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 20,
              textAlign: "center",
              marginLeft: 10,
            }}
          >
            #guest_321
          </Text>
        </View>
      </View>

      <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
        <FontAwesome
          style={{ marginTop: 10, marginRight: 10, paddingBottom: 10 }}
          name="volume-up"
          size={25}
          color="white"
        />
        <Text style={{ color: "white", fontWeight: "bold", width: 130 }}>
          Effets sonores
        </Text>
        <SwitchComponent
          isEnabled={effetSonore}
          toggleSwitch={setEffetSonore}
        />
      </View>

      <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
        <FontAwesome
          style={{ marginTop: 10, marginRight: 10, paddingBottom: 10 }}
          name="music"
          size={25}
          color="white"
        />
        <Text style={{ color: "white", fontWeight: "bold", width: 130 }}>
          Musique
        </Text>
        <SwitchComponent isEnabled={musique} toggleSwitch={setMusique} />
      </View>

      <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
        <MaterialIcons
          style={{ marginTop: 10, marginRight: 10, paddingBottom: 10 }}
          name="vibration"
          size={25}
          color="white"
        />
        <Text style={{ color: "white", fontWeight: "bold", width: 130 }}>
          Vibration
        </Text>
        <SwitchComponent isEnabled={vibration} toggleSwitch={setVibration} />
      </View>

      <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
        <Ionicons
          style={{ marginTop: 10, marginRight: 10, paddingBottom: 10 }}
          name="notifications"
          size={25}
          color="white"
        />
        <Text style={{ color: "white", fontWeight: "bold", width: 130 }}>
          Notifications
        </Text>
        <SwitchComponent
          isEnabled={notification}
          toggleSwitch={setNotification}
        />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <FontAwesome
          style={{ marginTop: 10, marginRight: 10, paddingBottom: 10 }}
          name="globe"
          size={25}
          color="white"
        />
        <Text style={{ color: "white", fontWeight: "bold", width: 160 }}>
          Langage{" "}
        </Text>
        <Text
          onPress={isLanguage}
          style={{
            margin: 3,
            color: langageFr ? "orange" : "white",
            fontWeight: "bold",
          }}
        >
          {" "}
          FR{" "}
        </Text>
        <Text
          onPress={isLanguage}
          style={{ color: langageFr ? "white" : "orange", fontWeight: "bold" }}
        >
          {" "}
          EN{" "}
        </Text>
      </View>

      <TouchableOpacity
        style={[
          StyleGuide.facebookButton,
          { marginBottom: Dimensions.get("window").height / 40 },
        ]}
        onPress={() => props.navigation.navigate("FacebookPage")}
      >
        <FontAwesome name="facebook" size={27} color="white" />
        <Text style={StyleGuide.titleFacebookButton}> Connexion Facebook</Text>
      </TouchableOpacity>

      <View style={{ marginBottom: 20 }}>
        <SquareButtonBorder
          onPress={() => props.navigation.navigate("SignUp")}
          buttonTitle="S'inscrire"
        />
      </View>
    </ImageBackground>
  );
}

function mapStateToProps(state) {
  return { user: state.user };
}
export default connect(mapStateToProps, null)(SettingsGuestOk);
