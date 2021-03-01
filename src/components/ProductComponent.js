import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function ProductComponent(props) {
  const product = props.route.params;

  const [qty, setQty] = useState(product.quantity ? product.quantity : "1");

  return (
    <SafeAreaView>
      <View>
        <ScrollView>
          <View>
            <Image
              style={styles.departImage}
              source={{
                uri: product.image,
              }}
            />
          </View>
          <View>
            <Text style={styles.departText}>{product.name}</Text>
            <Text style={styles.departPrice}>{product.price}</Text>
          </View>
          <View style={styles.increase}>
            <Text>+</Text>
            <TextInput
              style={{
                textAlign: "center",
                width: 50,
              }}
              onChangeText={(e) => setQty(e)}
              keyboardType="number-pad"
              value={qty}
              style={{
                marginHorizontal: 10,
              }}
            />
            <Text>-</Text>
          </View>
          <View>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() =>
                props.navigation.navigate("Cart", {
                  image: product.image,
                  name: product.name,
                  price: product.price,
                  quantity: qty,
                  id: product.id,
                })
              }
            >
              <Text style={styles.cartButton}>Add To Cart</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  departImage: {
    width: "100%",
    height: 300,
    resizeMode: "center",
  },
  departText: {
    margin: 10,
    fontWeight: "bold",
    fontSize: 20,
  },
  departPrice: {
    margin: 10,
    fontWeight: "bold",
    fontSize: 20,
    color: "blue",
  },
  increase: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  cartButton: {
    backgroundColor: "blue",
    color: "#fff",
    textAlign: "center",
    marginTop: 10,
    paddingVertical: 10,
    fontSize: 20,
  },
});
