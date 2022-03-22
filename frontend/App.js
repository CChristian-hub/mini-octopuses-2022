import React from "react";
import { LogBox } from "react-native";
LogBox.ignoreLogs(["Remote debugger"]);

// * Import of the navigation tools
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

//* Import all pages
import SplashScreen from "./screens/SplashScreen";
import AllConnexion from "./screens/AllConnexion";
import FacebookPage from "./screens/FacebookPage";
import SignUp from "./screens/SignUp";
import SignIn from "./screens/SignIn";
import Home from "./screens/Home";
import Categories from "./screens/Categories";
import TrainingScreen from "./screens/TrainingScreen";
import ResultScreen from "./screens/ResultScreen";
import Profile from "./screens/Profile";
import PastBattles from "./screens/PastBattles";
import HistoryScreen from "./screens/HistoryScreen";
import Settings from "./screens/Settings";
import ProfileSetting from "./screens/ProfileSetting";
import SettingsGuestOk from "./screens/SettingsGuestOk";

//* Import of the tools required for redux
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

import game from "./reducers/game";
import user from "./reducers/user";
import time from "./reducers/time";
import pos from "./reducers/pos";

const store = createStore(combineReducers({ game, user, time, pos }));

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="AllConnexion" component={AllConnexion} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="FacebookPage" component={FacebookPage} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Categories" component={Categories} />
          <Stack.Screen name="TrainingScreen" component={TrainingScreen} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="PastBattles" component={PastBattles} />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="ProfileSetting" component={ProfileSetting} />
          <Stack.Screen name="SettingsGuestOk" component={SettingsGuestOk} />
          <Stack.Screen name="ResultScreen" component={ResultScreen} />
          <Stack.Screen name="HistoryScreen" component={HistoryScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
