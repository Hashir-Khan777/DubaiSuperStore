import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Avatar, Text } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

export default function DrawerContent(props) {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        position: "relative",
        top: -5,
      }}
    >
      <DrawerContentScrollView {...props}>
        <View style={styles.userIfoSection}>
          <View>
            <Avatar.Image source={require("../../assets/demoAvatar.png")} />
          </View>
          <View>
            <Text style={styles.avatarText}>Hello, Guest</Text>
            <View style={styles.avatarLogin}>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => props.navigation.navigate("login")}
              >
                <Text style={styles.avatarLink}>Login</Text>
              </TouchableOpacity>
              <Text style={{ color: "#fff" }}> / </Text>
              <TouchableOpacity activeOpacity={0.6}>
                <Text style={styles.avatarLink}>Sign up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.home}>
          <DrawerItem
            label="Home"
            icon={() => <Ionicons name="home" size={20} />}
            onPress={() => props.navigation.navigate("Home")}
          />
        </View>
        <View style={styles.lookingFor}>
          <Text style={styles.lookingForText}>What are you looking for ?</Text>
          <TouchableOpacity activeOpacity={0.6} style={styles.name}>
            <Text>Search Product</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.6} style={styles.name}>
            <Text>Upload Prescription</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.lookingFor}>
          <Text style={styles.lookingForText}>Manage</Text>
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.name}
            onPress={() => props.navigation.navigate("allproducts")}
          >
            <Text>Show Product</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.name}
            onPress={() => props.navigation.navigate("categories")}
          >
            <Text>Show Category</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.name}
            onPress={() => props.navigation.navigate("allDeparts")}
          >
            <Text>Show Departments</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.name}
            onPress={() => props.navigation.navigate("Brands")}
          >
            <Text>Show Brand</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.6} style={styles.name}>
            <Text>Your Orders</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.6} style={styles.name}>
            <Text>Your History</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.lookingFor}>
          <Text style={styles.lookingForText}>Support</Text>
          <TouchableOpacity activeOpacity={0.6} style={styles.name}>
            <Text>Contact Us</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.6} style={styles.name}>
            <Text>About Us</Text>
          </TouchableOpacity>
        </View>
        <DrawerItem
          icon={() => <Ionicons name="exit" size={20} />}
          label="Logout"
        />
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  userIfoSection: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    backgroundColor: "blue",
    paddingVertical: 15,
  },
  home: {
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  lookingFor: {
    display: "flex",
    flexDirection: "column",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    marginHorizontal: 20,
    paddingBottom: 15,
  },
  lookingForText: {
    color: "grey",
    marginVertical: 10,
  },
  avatarText: {
    color: "#fff",
    fontSize: 20,
  },
  avatarLogin: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  avatarLink: {
    color: "#fff",
  },
  name: {
    marginBottom: 15,
  },
});
