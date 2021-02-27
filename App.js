import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Provider } from "react-redux";
import Stacknavigation from "./src/navigation/Stacknavigation";
import Store from "./src/store/Store";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" backgroundColor="blue" />
      <Provider store={Store}>
        <Stacknavigation />
      </Provider>
    </NavigationContainer>
  );
}
