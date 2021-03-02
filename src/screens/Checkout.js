import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import Constants from "expo-constants";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

export default function Checkout(props) {
  const [makli, setMakli] = useState(100);
  const [thatta, setThatta] = useState(200);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ marginTop: Constants.statusBarHeight }}>
        <View style={styles.header}>
          <Text
            style={{
              color: "#fff",
              textAlign: "center",
              fontSize: 20,
            }}
          >
            Dubai Super Store
          </Text>
        </View>
        <View>
          <Text
            style={{
              color: "blue",
              textAlign: "center",
              fontSize: 25,
              marginVertical: 5,
            }}
          >
            Delivery Time
          </Text>
          <Text
            style={{
              color: "blue",
              textAlign: "center",
              fontSize: 20,
              marginBottom: 5,
            }}
          >
            11:00 Am to 11:00 Pm
          </Text>
          <View>
            <TextInput placeholder="Search Area" style={styles.searchInput} />
            <Ionicons style={styles.searchBarIcon} name="search" size={23} />
          </View>
          <View>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() =>
                props.navigation.navigate("placeOrder", { price: makli })
              }
            >
              <Text
                style={{
                  marginTop: 15,
                  backgroundColor: "#fff",
                  padding: 10,
                  elevation: 5,
                  marginHorizontal: 10,
                }}
              >
                MAkli {makli}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() =>
                props.navigation.navigate("placeOrder", { price: thatta })
              }
            >
              <Text
                style={{
                  marginTop: 15,
                  backgroundColor: "#fff",
                  padding: 10,
                  elevation: 5,
                  marginHorizontal: 10,
                }}
              >
                Thatta {thatta}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
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
  header: {
    backgroundColor: "blue",
    paddingVertical: 10,
  },
});
