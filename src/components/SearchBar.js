import React from "react";
import { StyleSheet, View, TextInput, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SearchBar() {
  return (
    <SafeAreaView>
      <View>
        <TextInput placeholder="Search Product" style={styles.searchInput} />
        <Ionicons style={styles.searchBarIcon} name="search" size={23} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  searchInput: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "blue",
    fontSize: 16,
    paddingHorizontal: 20,
    paddingVertical: 8,
    paddingLeft: 40,
    marginTop: 10,
    borderRadius: 15,
  },
  searchBarIcon: {
    position: "absolute",
    bottom: 10,
    left: 10,
  },
});
