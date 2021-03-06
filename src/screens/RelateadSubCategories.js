import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import AllProductComponent from "../components/AllProductComponent";
import Header from "../components/Header";
import {
  Fetch_All_Products,
  Fetch_Sub_Categories,
} from "../store/action/FetchData";

export default function RelateadSubCategories(props) {
  const dispatch = useDispatch();

  const AllSubCategories = useSelector((state) => state.AllSubCategories);
  const { loading, error, SubCategories } = AllSubCategories;

  const AllProducts = useSelector((state) => state.AllProducts);
  const { Products } = AllProducts;

  const Cart = useSelector((state) => state.Cart);
  const { cartItems } = Cart;

  const relatedSubCategories =
    SubCategories &&
    SubCategories.filter((x) => x.SKUCatId == props.route.params.id);

  const relatedProducts =
    Products && Products.filter((x) => x.SKUCatId == props.route.params.id);

  useEffect(() => {
    dispatch(Fetch_Sub_Categories());
    dispatch(Fetch_All_Products());
  }, [dispatch]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Header name={props.route.name} subprop={props} />
      <ScrollView>
        <View>
          <View>
            <Text style={styles.categoryHeading}>
              {relatedSubCategories && relatedSubCategories.length >= 1
                ? "Sub Categories"
                : "Products"}
            </Text>
            <View style={styles.components}>
              {loading ? (
                <ActivityIndicator size="large" color="#00ff00" />
              ) : error ? (
                <Text>{error}</Text>
              ) : relatedSubCategories && relatedSubCategories.length >= 1 ? (
                relatedSubCategories.map((item) => {
                  return (
                    <View style={styles.card} key={item.Name}>
                      <TouchableOpacity
                        activeOpacity={1}
                        onPress={() =>
                          props.navigation.navigate("relatedproducts", {
                            id: item.SKUSubCatId,
                          })
                        }
                      >
                        <View>
                          <Image
                            style={styles.departImage}
                            source={{
                              uri: item.ImageUrl1,
                            }}
                          />
                        </View>
                        <View>
                          <Text style={styles.departText}>{item.Name}</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  );
                })
              ) : relatedProducts ? (
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
              ) : null}
            </View>
          </View>
        </View>
      </ScrollView>
      {relatedSubCategories && relatedSubCategories.length <= 0
        ? cartItems.length >= 1 && (
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
                    Rs.
                    {cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}
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
          )
        : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  components: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  card: {
    position: "relative",
    width: "45%",
    borderRadius: 10,
    marginVertical: 15,
    marginHorizontal: 5,
    backgroundColor: "#fff",
    elevation: 10,
  },
  departImage: {
    width: "100%",
    height: 100,
  },
  departText: {
    textAlign: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  categoryHeading: {
    textAlign: "center",
    marginVertical: 10,
    fontSize: 30,
    color: "blue",
    fontWeight: "bold",
  },
});
