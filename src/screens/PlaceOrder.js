import React from "react";
import { View, Text, TextInput, SafeAreaView } from "react-native";
import { useSelector } from "react-redux";
import Constants from "expo-constants";

export default function PlaceOrder(props) {
  const Cart = useSelector((state) => state.Cart);
  const { cartItems } = Cart;

  return (
    <SafeAreaView style={{ flex: 1, marginTop: Constants.statusBarHeight }}>
      <View>
        <View style={{ backgroundColor: "blue", paddingVertical: 20 }}>
          <Text style={{ color: "#fff", textAlign: "center", fontSize: 25 }}>
            Dubai Super Store
          </Text>
        </View>
        <View>
          <TextInput placeholder="First Name" />
          <TextInput placeholder="last Name" />
          <TextInput placeholder="Email" />
          <TextInput placeholder="Address" />
          <TextInput placeholder="Address 2" />
          <TextInput placeholder="Cell No." />
        </View>
        <View>
          <View>
            <Text>Total Items:</Text>
            <Text>{cartItems.length}</Text>
          </View>

          <View>
            <Text>Payment Method:</Text>
            <Text>Cash</Text>
          </View>

          <View>
            <Text>SubTotal:</Text>
            <Text>
              {cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}
            </Text>
          </View>

          <View>
            <Text>Delivery Charges:</Text>
            <Text>{props.route.params.price}</Text>
          </View>

          <View>
            <Text>Total Amount:</Text>
            <Text>
              {props.route.params.price +
                cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
