import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import { Fetch_Brands } from "../store/action/FetchData";

export default function AllBrands(props) {
  const dispatch = useDispatch();

  const AllBrands = useSelector((state) => state.AllBrands);
  const { loading, error, Brands } = AllBrands;

  useEffect(() => {
    dispatch(Fetch_Brands());
  }, [dispatch]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Header name={props.route.name} brandprop={props} />
      <ScrollView>
        <View>
          <View>
            <Text style={styles.categoryHeading}>All Brands</Text>
            <View style={styles.components}>
              {loading ? (
                <ActivityIndicator size="large" color="#00ff00" />
              ) : error ? (
                <Text>{error}</Text>
              ) : (
                Brands.map((item) => {
                  return (
                    <View style={styles.card} key={item.Name}>
                      <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => props.navigation.navigate("allproducts")}
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
              )}
            </View>
          </View>
        </View>
      </ScrollView>
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
