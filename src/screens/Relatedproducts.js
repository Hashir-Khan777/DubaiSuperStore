import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import AllProductComponent from "../components/AllProductComponent";
import Header from "../components/Header";
import { Fetch_All_Products } from "../store/action/FetchData";

export default function Relatedproducts(props) {
  const dispatch = useDispatch();

  const AllProducts = useSelector((state) => state.AllProducts);
  const { loading, error, Products } = AllProducts;

  const Cart = useSelector((state) => state.Cart);
  const { cartItems } = Cart;

  const relatedProducts =
    Products && Products.filter((x) => x.SKUSubCatId == props.route.params.id);

  useEffect(() => {
    dispatch(Fetch_All_Products());
  }, [dispatch]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Header productprop={props} name={props.route.name} />
      <ScrollView>
        <View>
          <View>
            <Text style={styles.productHeading}>Products</Text>
            <View style={styles.products}>
              {loading ? (
                <ActivityIndicator size="large" color="#00ff00" />
              ) : error ? (
                <Text>{error}</Text>
              ) : (
                relatedProducts.map((item) => {
                  return (
                    <AllProductComponent
                      prop={props}
                      key={item.RowId}
                      name={item.SKUName}
                      image={item.SKUImageURL1}
                      price={item.SalePrice}
                      id={item.RowId}
                    />
                  );
                })
              )}
            </View>
          </View>
        </View>
      </ScrollView>
      {cartItems.length >= 1 && (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            paddingVertical: 10,
            backgroundColor: "#d3d3d3",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{ marginRight: 30 }}>
              <Text>item: {cartItems.length}</Text>
            </View>
            <View>
              <Text>
                Rs. {cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}
              </Text>
            </View>
          </View>
          <View>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => props.navigation.navigate("Cart")}
            >
              <Text style={{ color: "#000" }}>View Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  products: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  productHeading: {
    textAlign: "center",
    marginVertical: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: "blue",
  },
});
