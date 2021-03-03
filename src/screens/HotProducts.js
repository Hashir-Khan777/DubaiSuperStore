import { Ionicons } from "@expo/vector-icons";
import React, { useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Fetch_All_Products } from "../store/action/FetchData";

export default function HotProducts(props) {
  const dispatch = useDispatch();

  const AllProducts = useSelector((state) => state.AllProducts);
  const { loading, error, Products } = AllProducts;

  Products && (Products.length = 17);

  useEffect(() => {
    dispatch(Fetch_All_Products());
  }, [dispatch]);

  return (
    <View style={{ marginVertical: 30 }}>
      <Image
        source={require("../../assets/banner2.jpg")}
        style={{
          width: "100%",
          height: 200,
          resizeMode: "center",
        }}
      />
      <View>
        <Text
          style={{
            fontSize: 25,
            textAlign: "center",
            marginVertical: 20,
            fontWeight: "bold",
            color: "blue",
          }}
        >
          Hot Products
        </Text>
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {loading ? null : error ? (
              <Text>{error}</Text>
            ) : (
              Products.map((item) => {
                return (
                  <View style={styles.card} key={item.RowId}>
                    <TouchableOpacity
                      activeOpacity={1}
                      onPress={() =>
                        props.prop.navigation.navigate("product", {
                          image: item.SKUImageURL1,
                          name: item.SKUName,
                          price: item.SalePrice,
                          id: item.RowId,
                        })
                      }
                    >
                      <Image
                        source={{ uri: item.SKUImageURL1 }}
                        style={{
                          flex: 1,
                          height: 100,
                          resizeMode: "center",
                        }}
                      />
                    </TouchableOpacity>
                    <Text style={styles.description}>{item.SKUName}</Text>
                    <View style={styles.buttonPrice}>
                      <View>
                        <Text style={styles.price}>{item.SalePrice}</Text>
                      </View>
                      <TouchableOpacity
                        style={styles.cartButton}
                        activeOpacity={0.6}
                        onPress={() =>
                          props.prop.navigation.navigate("Cart", {
                            image: item.SKUImageURL1,
                            name: item.SKUName,
                            price: item.SalePrice,
                            id: item.RowId,
                            quantity: 1,
                          })
                        }
                      >
                        <Ionicons name="cart" color="#fff" size={20} />
                        <Text style={{ color: "#fff" }}>Add</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              })
            )}
          </ScrollView>
        </View>
      </View>

      <View>
        <Text
          style={{
            fontSize: 25,
            textAlign: "center",
            marginVertical: 20,
            fontWeight: "bold",
            color: "blue",
          }}
        >
          Sale Products
        </Text>
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {loading ? null : error ? (
              <Text>{error}</Text>
            ) : (
              Products.map((item) => {
                return (
                  <View style={styles.card} key={item.RowId}>
                    <TouchableOpacity
                      activeOpacity={1}
                      onPress={() =>
                        props.prop.navigation.navigate("product", {
                          image: item.SKUImageURL1,
                          name: item.SKUName,
                          price: item.SalePrice,
                          id: item.RowId,
                        })
                      }
                    >
                      <Image
                        source={{ uri: item.SKUImageURL1 }}
                        style={{
                          flex: 1,
                          height: 100,
                          resizeMode: "center",
                        }}
                      />
                    </TouchableOpacity>
                    <Text style={styles.description}>{item.SKUName}</Text>
                    <View style={styles.buttonPrice}>
                      <View>
                        <Text style={styles.price}>{item.SalePrice}</Text>
                      </View>
                      <TouchableOpacity
                        style={styles.cartButton}
                        activeOpacity={0.6}
                        onPress={() =>
                          props.prop.navigation.navigate("Cart", {
                            image: item.SKUImageURL1,
                            name: item.SKUName,
                            price: item.SalePrice,
                            id: item.RowId,
                            quantity: 1,
                          })
                        }
                      >
                        <Ionicons name="cart" color="#fff" size={20} />
                        <Text style={{ color: "#fff" }}>Add</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              })
            )}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    position: "relative",
    borderRadius: 10,
    width: 170,
    marginVertical: 5,
    backgroundColor: "#fff",
    padding: 10,
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
});
