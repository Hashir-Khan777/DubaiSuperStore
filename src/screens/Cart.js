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
    <SafeAreaView>
      <View>
        <Header name={props.route.name} cartProp={props} />
        <View>
          <ScrollView>
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
                return (
                  <ScrollView key={item.name}>
                    <TouchableOpacity
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
                              <Text>Qty</Text>
                              <Text>{item.quantity}</Text>
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
                  </ScrollView>
                );
              })
            )}
          </ScrollView>
        </View>
      </View>
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
  },
  cardImage: {
    width: 100,
    height: 100,
    resizeMode: "center",
  },
});
