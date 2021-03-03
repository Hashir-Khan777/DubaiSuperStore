import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useSelector } from "react-redux";
import Constants from "expo-constants";

export default function PlaceOrder(props) {
  const Cart = useSelector((state) => state.Cart);
  const { cartItems } = Cart;

  console.log(typeof props.route.params.price);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginTop: Constants.statusBarHeight,
        backgroundColor: "#fff",
      }}
    >
      <View
        style={{
          backgroundColor: "blue",
          paddingVertical: 15,
          elevation: 15,
        }}
      >
        <Text style={{ color: "#fff", textAlign: "center", fontSize: 20 }}>
          Dubai Super Store
        </Text>
      </View>
      <ScrollView>
        <View>
          <View style={styles.form}>
            <View style={styles.shippingDetails}>
              <TextInput
                placeholder="First Name"
                keyboardType="default"
                style={styles.input}
              />
              <TextInput
                placeholder="last Name"
                keyboardType="default"
                style={styles.input}
              />
              <TextInput
                placeholder="Email"
                keyboardType="email-address"
                style={styles.input}
              />
              <TextInput
                placeholder="Address"
                keyboardType="default"
                style={styles.input}
              />
              <TextInput
                placeholder="Address 2"
                keyboardType="default"
                style={styles.input}
              />
              <TextInput
                placeholder="Cell No."
                keyboardType="numeric"
                style={styles.input}
              />
            </View>
            <View style={styles.shippingDetails}>
              <View style={styles.border}>
                <View style={styles.cartItems}>
                  <Text>Total Items:</Text>
                  <Text>{cartItems.length}</Text>
                </View>

                <View style={styles.cartItems}>
                  <Text>Payment Method:</Text>
                  <Text>Cash</Text>
                </View>
              </View>

              <View style={styles.border}>
                <View style={styles.cartItems}>
                  <Text>SubTotal:</Text>
                  <Text>
                    {Number(
                      cartItems.reduce((a, c) => a + c.quantity * c.price, 0)
                    ).toFixed(2)}
                  </Text>
                </View>

                <View style={styles.cartItems}>
                  <Text>Area name:</Text>
                  <Text>{props.route.params.name}</Text>
                </View>

                <View style={styles.cartItems}>
                  <Text>Delivery Charges:</Text>
                  <Text>{props.route.params.price}</Text>
                </View>
              </View>

              <View style={styles.cartItems}>
                <Text>Total Amount:</Text>
                <Text>
                  {Number(
                    Number(props.route.params.price) +
                      cartItems.reduce((a, c) => a + c.quantity * c.price, 0)
                  ).toFixed(2)}
                </Text>
              </View>
            </View>
            <TouchableOpacity activeOpacity={0.6}>
              <Text
                style={{
                  alignSelf: "center",
                  textTransform: "uppercase",
                  backgroundColor: "blue",
                  width: "90%",
                  paddingVertical: 10,
                  borderRadius: 5,
                  color: "#fff",
                  textAlign: "center",
                  marginVertical: 15,
                  fontWeight: "900",
                  fontSize: 17,
                }}
              >
                place order
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  form: {
    flexDirection: "column",
    justifyContent: "center",
    marginHorizontal: 10,
  },
  shippingDetails: {
    display: "flex",
    alignSelf: "center",
    width: "90%",
    backgroundColor: "#fff",
    marginVertical: 10,
    elevation: 10,
    padding: 10,
    borderRadius: 10,
  },
  input: {
    width: "100%",
    padding: 0,
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#000",
  },
  cartItems: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
  },
  border: {
    borderBottomWidth: 1,
    borderBottomColor: "#000",
  },
});
