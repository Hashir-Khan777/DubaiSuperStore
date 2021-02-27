import React, { useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import AllProductComponent from "../components/AllProductComponent";
import Header from "../components/Header";
import { Fetch_Products } from "../store/action/FetchData";

export default function AllProducts(props) {
  const dispatch = useDispatch();

  const AllProducts = useSelector((state) => state.AllProducts);
  const { loading, error, Products } = AllProducts;

  useEffect(() => {
    dispatch(Fetch_Products());
  }, [dispatch]);

  return (
    <SafeAreaView>
      <View>
        <Header productprop={props} name={props.route.name} />
        <View>
          <ScrollView>
            <Text style={styles.productHeading}>Products</Text>
            <View style={styles.products}>
              {/* {loading ? (
                <ActivityIndicator size="large" color="#00ff00" />
              ) : error ? (
                <Text>{error}</Text>
              ) : (
                Products.map((item) => {
                  return (
                    );
                  })
                )} */}
              <AllProductComponent
                prop={props}
                name={"7UP 345ML ALL"}
                image={
                  "https://www.dubaisuperstore.com.pk/Images/Uploaded/2395SKU_download (1).jpg"
                }
                price={1000}
                id={1}
              />
              <AllProductComponent
                prop={props}
                name={"7UP BOTTLE 1.5LT ALL RANGE"}
                image={
                  "https://www.dubaisuperstore.com.pk/Images/Uploaded/2397SKU_PEPSI BOTTLE 1.5LT ALL RANGE.jpg"
                }
                price={100}
                id={2}
              />
              <AllProductComponent
                prop={props}
                name={"7UP BOTTLE 2.25LT ALL RANGE"}
                image={
                  "https://www.dubaisuperstore.com.pk/Images/Uploaded/2404SKU_download (2).jpg"
                }
                price={2000}
                id={3}
              />
              <AllProductComponent
                prop={props}
                name={"UP BOTTLE 300ML ALL RANGE"}
                image={
                  "https://www.dubaisuperstore.com.pk/Images/Uploaded/2407SKU_download (3).jpg"
                }
                price={200}
                id={4}
              />
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
