import React from "react";
import { View, SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Departments from "./Departments";

export default function Home(props) {
  return (
    <SafeAreaView>
      <View>
        <Header prop={props} />
        <View>
          <ScrollView>
            <SearchBar />
            <Departments prop={props} />
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}
