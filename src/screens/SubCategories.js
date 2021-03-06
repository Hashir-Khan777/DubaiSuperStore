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
import Header from "../components/Header";
import { Fetch_Sub_Categories } from "../store/action/FetchData";

export default function SubCategories(props) {
  const dispatch = useDispatch();

  const AllSubCategories = useSelector((state) => state.AllSubCategories);
  const { loading, error, SubCategories } = AllSubCategories;

  useEffect(() => {
    dispatch(Fetch_Sub_Categories());
  }, [dispatch]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Header name={props.route.name} subprop={props} />
      <ScrollView>
        <View>
          <View>
            <Text style={styles.categoryHeading}>Sub Categories</Text>
            <View style={styles.components}>
              {loading ? (
                <ActivityIndicator size="large" color="#00ff00" />
              ) : error ? (
                <Text>{error}</Text>
              ) : (
                SubCategories.map((item) => {
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
