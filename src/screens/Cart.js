import { Ionicons } from "@expo/vector-icons";
import React, { useEffect } from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
  TextInput,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import { Add_To_Cart, Remove_From_Cart } from "../store/action/CartAction";

export default function Cart(props) {
  const cart = props.route.params != "undefined" && props.route.params;

  const dispatch = useDispatch();

  const Cart = useSelector((state) => state.Cart);
  const { cartItems } = Cart;

  const clearItem = (id) => {
    Alert.alert(
      "Remove Product",
      "Are you sure you want to remove product ?",
      [
        {
          text: "Cancel",
        },
        { text: "OK", onPress: () => dispatch(Remove_From_Cart(id)) },
      ],
      { cancelable: false }
    );
  };

  useEffect(() => {
    cart &&
      dispatch(
        Add_To_Cart(cart.id, cart.name, cart.quantity, cart.image, cart.price)
      );
  }, [dispatch]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#fff",
      }}
    >
      <Header name={props.route.name} cartProp={props} />
      <ScrollView>
        <View style={{ marginHorizontal: 15 }}>
          {cartItems.length <= 0 ? (
            <View>
              <View style={styles.cartContainer}>
                <Text style={styles.cartEmptyText}>Cart is Empty</Text>
              </View>
              <View>
                <TouchableOpacity
                  activeOpacity={0.6}
                  style={styles.cartEmptyButton}
                  onPress={() => props.navigation.navigate("Home")}
                >
                  <Text style={styles.cartEmptyButtonText}>
                    Continue Shopping
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            cartItems.map((item) => {
              item.quantity <= 0 && (item.quantity = 1);
              return (
                <TouchableOpacity
                  key={item.id}
                  activeOpacity={1}
                  onPress={() =>
                    props.navigation.navigate("product", {
                      name: item.name,
                      image: item.image,
                      price: item.price,
                      id: item.id,
                      quantity: item.quantity,
                    })
                  }
                  style={{ flex: 1, height: "100%" }}
                >
                  <View style={styles.cardView}>
                    <View>
                      <Image
                        style={styles.cardImage}
                        source={{
                          uri: item.image,
                        }}
                      />
                    </View>
                    <View>
                      <View>
                        <Text
                          style={{
                            fontSize: 20,
                            width: 200,
                          }}
                        >
                          {item.name}
                        </Text>
                      </View>
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-evenly",
                          alignItems: "center",
                        }}
                      >
                        <View>
                          <Text style={{ textAlign: "center" }}>Qty</Text>
                          <View
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <TouchableOpacity
                              activeOpacity={1}
                              onPress={() =>
                                dispatch(
                                  Add_To_Cart(
                                    item.id,
                                    item.name,
                                    item.quantity - 1,
                                    item.image,
                                    item.price
                                  )
                                )
                              }
                            >
                              <Text
                                style={{
                                  color: "#000",
                                  backgroundColor: "yellow",
                                  borderRadius: 50,
                                  width: 30,
                                  height: 30,
                                  textAlign: "center",
                                  textAlignVertical: "center",
                                  fontSize: 16,
                                }}
                              >
                                -
                              </Text>
                            </TouchableOpacity>
                            <TextInput
                              style={{
                                textAlign: "center",
                              }}
                              value={item.quantity.toString()}
                              keyboardType="number-pad"
                            />
                            <TouchableOpacity
                              activeOpacity={1}
                              onPress={() =>
                                dispatch(
                                  Add_To_Cart(
                                    item.id,
                                    item.name,
                                    item.quantity + 1,
                                    item.image,
                                    item.price
                                  )
                                )
                              }
                            >
                              <Text
                                style={{
                                  color: "#000",
                                  backgroundColor: "yellow",
                                  borderRadius: 50,
                                  width: 30,
                                  height: 30,
                                  textAlign: "center",
                                  textAlignVertical: "center",
                                  fontSize: 16,
                                }}
                              >
                                +
                              </Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                        <View>
                          <Text>Price</Text>
                          <Text>{item.price}</Text>
                        </View>
                      </View>
                    </View>
                    <View>
                      <Ionicons
                        style={{
                          marginRight: 15,
                        }}
                        name="trash-bin"
                        size={20}
                        onPress={() => clearItem(item.id)}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })
          )}
        </View>
      </ScrollView>
      {cartItems && cartItems.length >= 1 && (
        <View style={styles.checkout}>
          <View
            style={{
              width: "40%",
              borderRightColor: "#fff",
              borderRightWidth: 1,
            }}
          >
            <Text style={{ color: "#fff" }}>Total</Text>
            <Text style={{ color: "#fff" }}>
              Rs. {cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}
            </Text>
          </View>
          <View>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => props.navigation.navigate("checkout")}
            >
              <Text style={{ color: "#fff" }}>CHECKOUT</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cartContainer: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  cartEmptyText: {
    fontSize: 35,
    fontWeight: "bold",
  },
  cartEmptyButton: {
    backgroundColor: "blue",
    paddingVertical: 10,
    borderRadius: 5,
  },
  cartEmptyButtonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 17,
  },
  cardView: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 8,
    elevation: 10,
    paddingVertical: 10,
    borderRadius: 5,
  },
  cardImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  checkout: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 25,
    backgroundColor: "#000",
  },
});
