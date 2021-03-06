import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Constants from "expo-constants";
import { useSelector } from "react-redux";

export default function Header(props) {
  const Cart = useSelector((state) => state.Cart);
  const { cartItems } = Cart;

  const openDrawer = () => {
    if (props.name === "Cart") {
      props.cartProp.navigation.openDrawer();
    } else if (props.name === "categories") {
      props.catprop.navigation.openDrawer();
    } else if (props.name === "subcategories") {
      props.subprop.navigation.openDrawer();
    } else if (props.name === "allproducts") {
      props.productprop.navigation.openDrawer();
    } else if (props.name === "relatedcategories") {
      props.subcatprop.navigation.openDrawer();
    } else if (props.name === "relaedsubcategories") {
      props.subprop.navigation.openDrawer();
    } else if (props.name === "relatedproducts") {
      props.productprop.navigation.openDrawer();
    } else if (props.name === "Brands") {
      props.brandprop.navigation.openDrawer();
    } else if (props.name === "allDeparts") {
      props.alldeptprop.navigation.openDrawer();
    } else {
      props.prop.navigation.openDrawer();
    }
  };

  const goCart = () => {
    if (props.name === "Cart") {
      props.cartProp.navigation.navigate("Cart");
    } else if (props.name === "categories") {
      props.catprop.navigation.navigate("Cart");
    } else if (props.name === "subcategories") {
      props.subprop.navigation.navigate("Cart");
    } else if (props.name === "allproducts") {
      props.productprop.navigation.navigate("Cart");
    } else if (props.name === "relatedcategories") {
      props.subcatprop.navigation.navigate("Cart");
    } else if (props.name === "relaedsubcategories") {
      props.subprop.navigation.navigate("Cart");
    } else if (props.name === "relatedproducts") {
      props.productprop.navigation.navigate("Cart");
    } else if (props.name === "Brands") {
      props.brandprop.navigation.navigate("Cart");
    } else if (props.name === "allDeparts") {
      props.alldeptprop.navigation.navigate("Cart");
    } else {
      props.prop.navigation.navigate("Cart");
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <View style={styles.openDrawerContainer}>
          <View>
            <TouchableOpacity activeOpacity={0.6} onPress={openDrawer}>
              <View style={styles.openDrawer}></View>
              <View style={styles.openDrawer}></View>
              <View style={styles.openDrawer}></View>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.headerText}>Dubai Super Store</Text>
          </View>
        </View>
        <View>
          {props.name !== "Cart" && (
            <View>
              <Ionicons
                name="cart"
                style={styles.cartIcon}
                size={30}
                onPress={goCart}
              />
              {cartItems && cartItems.length >= 1 && (
                <Text
                  style={{
                    position: "absolute",
                    color: "#fff",
                    backgroundColor: "red",
                    width: 20,
                    height: 20,
                    borderRadius: 100,
                    textAlign: "center",
                    textAlignVertical: "center",
                    top: -10,
                    right: -8,
                    fontWeight: "bold",
                  }}
                >
                  {cartItems.length}
                </Text>
              )}
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "blue",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: Constants.statusBarHeight,
    paddingHorizontal: 10,
    height: 58,
  },
  headerText: {
    color: "#fff",
    fontSize: 15,
    marginLeft: 10,
  },
  cartIcon: {
    color: "#fff",
  },
  openDrawer: {
    width: 25,
    height: 4,
    backgroundColor: "#fff",
    marginVertical: 2,
    borderRadius: 5,
  },
  openDrawerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
