import React from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Welcome from "./src/screens/Welcome";
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold,
} from "@expo-google-fonts/jost";
import AppLoading from "expo-app-loading";
import UserIdentification from "screens/UserIndentification";
import Confirmation from "screens/Confirmation";
import Routes from "routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="dark" />
      <Routes />
    </View>
  );
}
