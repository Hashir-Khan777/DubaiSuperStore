import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Add_To_Cart } from "../store/action/CartAction";

export default function AllProductComponent(props) {
  const dispatch = useDispatch();

  const Cart = useSelector((state) => state.Cart);
  const { flex, cartItems } = Cart;

  console.log(flex, cartItems);

  return (
    <View style={styles.card}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() =>
          props.prop.navigation.navigate("product", {
            image: props.image,
            name: props.name,
            price: props.price,
            id: props.id,
          })
        }
      >
        <View>
          <Image
            style={styles.departImage}
            source={{
              uri: props.image,
            }}
          />
        </View>
        <Text style={styles.description}>{props.name}</Text>
        <View style={styles.buttonPrice}>
          <View>
            <Text style={styles.price}>{props.price}</Text>
          </View>
          <TouchableOpacity
            style={styles.cartButton}
            activeOpacity={0.6}
            onPress={() =>
              dispatch(
                Add_To_Cart(props.id, props.name, 1, props.image, props.price)
              )
            }
          >
            <Ionicons name="cart" color="#fff" size={20} />
            <Text style={{ color: "#fff" }}>Add</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      {cartItems && (
        <View style={styles.item}>
          <Text>{cartItems.length}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    position: "relative",
    width: "45%",
    borderRadius: 10,
    marginVertical: 5,
    backgroundColor: "#fff",
    padding: 10,
  },
  departImage: {
    width: "100%",
    height: 150,
    resizeMode: "center",
  },
  buttonPrice: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cartButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "blue",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  price: {
    fontSize: 20,
    color: "blue",
    fontWeight: "bold",
  },
  description: {
    marginVertical: 10,
  },
  item: {
    display: flex ? "flex" : "none",
    width: "100%",
  },
});
