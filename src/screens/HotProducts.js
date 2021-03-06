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
import { Add_To_Cart } from "../store/action/CartAction";
import {
  Fetch_Hot_Products,
  Fetch_Sale_Products,
} from "../store/action/FetchData";

export default function HotProducts(props) {
  const dispatch = useDispatch();

  const ToRatedProducts = useSelector((state) => state.ToRatedProducts);
  const { error, HotProducts } = ToRatedProducts;

  const TopSaleProducts = useSelector((state) => state.TopSaleProducts);
  const { Saleerror, SaleProducts } = TopSaleProducts;

  useEffect(() => {
    dispatch(Fetch_Hot_Products());
    dispatch(Fetch_Sale_Products());
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
        resizeMode="contain"
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
            {error ? (
              <Text>{error}</Text>
            ) : (
              HotProducts &&
              HotProducts.map((item) => {
                return (
                  <View style={styles.card} key={item.RowId}>
                    <TouchableOpacity
                      activeOpacity={1}
                      onPress={() =>
                        props.prop.navigation.navigate("product", {
                          image: item.SKUImageURL1,
                          name: item.SKUName,
                          price: item.SalePrice,
                          id: item.SKUId,
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
                        resizeMode="center"
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
                          dispatch(
                            Add_To_Cart(
                              item.SKUId,
                              item.SKUName,
                              1,
                              item.SKUImageURL1,
                              item.SalePrice
                            )
                          )
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
            {Saleerror ? (
              <Text>{Saleerror}</Text>
            ) : (
              SaleProducts &&
              SaleProducts.map((item) => {
                return (
                  <View style={styles.card} key={item.SKUId}>
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
                        resizeMode="contain"
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
                          dispatch(
                            Add_To_Cart(
                              item.SKUId,
                              item.SKUName,
                              1,
                              item.SKUImageURL1,
                              item.SalePrice
                            )
                          )
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
    elevation: 10,
    marginHorizontal: 10,
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
