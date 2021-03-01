import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import AllProductComponent from "../components/AllProductComponent";
import Header from "../components/Header";
import {
  Fetch_Products,
  Fetch_Sub_Categories,
} from "../store/action/FetchData";

export default function RelateadSubCategories(props) {
  const dispatch = useDispatch();

  const AllSubCategories = useSelector((state) => state.AllSubCategories);
  const { loading, error, SubCategories } = AllSubCategories;

  const AllProducts = useSelector((state) => state.AllProducts);
  const { Products } = AllProducts;

  const relatedSubCategories =
    SubCategories &&
    SubCategories.filter((x) => x.SKUCatId == props.route.params.id);

  const relatedProducts =
    Products && Products.filter((x) => x.SKUCatId == props.route.params.id);

  useEffect(() => {
    dispatch(Fetch_Sub_Categories());
    dispatch(Fetch_Products());
  }, [dispatch]);

  return (
    <SafeAreaView>
      <View>
        <Header name={props.route.name} subprop={props} />
        <View>
          <ScrollView>
            <Text style={styles.categoryHeading}>
              {relatedSubCategories ? "Sub Categories" : "Products"}
            </Text>
            <View style={styles.components}>
              {loading ? (
                <ActivityIndicator size="large" color="#00ff00" />
              ) : error ? (
                <Text>{error}</Text>
              ) : relatedSubCategories ? (
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
              ) : (
                relatedProducts.map((item) => {
                  return (
                    <View style={styles.card} key={item.Name}>
                      <AllProductComponent
                        id={item.SKUSubCatId}
                        prop={props}
                        image={item.ImageUrl1}
                        name={item.Name}
                        price={item.SalePrice}
                      />
                    </View>
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
  components: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  card: {
    position: "relative",
    width: "40%",
    borderRadius: 10,
    marginVertical: 5,
  },
  departImage: {
    width: "100%",
    height: 100,
  },
  departText: {
    textAlign: "center",
  },
  categoryHeading: {
    textAlign: "center",
    marginVertical: 10,
    fontSize: 30,
    color: "blue",
    fontWeight: "bold",
  },
});