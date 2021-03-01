import React from "react";
import { View, SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Slider from "../components/Slider";
import Departments from "./Departments";
import HotProducts from "./HotProducts";

export default function Home(props) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View>
        <Header prop={props} />
        <View>
          <ScrollView
            style={{
              marginBottom: 170,
            }}
          >
            <View>
              <View>
                <SearchBar />
              </View>
              <View>
                <Slider />
              </View>
              <View>
                <Departments prop={props} />
              </View>
              <View>
                <HotProducts prop={props} />
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}
