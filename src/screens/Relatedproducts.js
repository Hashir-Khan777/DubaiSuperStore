import React, { useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import AllProductComponent from "../components/AllProductComponent";
import Header from "../components/Header";
import { Fetch_Products } from "../store/action/FetchData";

export default function Relatedproducts(props) {
  const dispatch = useDispatch();

  const AllProducts = useSelector((state) => state.AllProducts);
  const { loading, error, Products } = AllProducts;

  Products && (Products.length = 30);

  const relatedProducts =
    Products && Products.filter((x) => x.SKUSubCatId == props.route.params.id);

  useEffect(async () => {
    await dispatch(Fetch_Products());
  }, [dispatch]);

  return (
    <SafeAreaView>
      <View>
        <Header productprop={props} name={props.route.name} />
        <View>
          <ScrollView>
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
                      key={item.RowId}
                      prop={props}
                      name={item.SKUName}
                      image={item.SKUImageURL1}
                      price={item.SalePrice}
                      id={item.RowId}
                    />
                  );
                })
              )}
            </View>
          </ScrollView>
        </View>
      </View>
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
