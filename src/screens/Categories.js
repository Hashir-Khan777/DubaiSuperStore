import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  SafeAreaView,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import { Fetch_Categories } from "../store/action/FetchData";

export default function Categories(props) {
  const dispatch = useDispatch();

  const AllCategories = useSelector((state) => state.AllCategories);
  const { loading, error, Categories } = AllCategories;

  useEffect(() => {
    dispatch(Fetch_Categories());
  }, [dispatch]);

  return (
    <SafeAreaView>
      <Header name={props.route.name} catprop={props} />
      <ScrollView style={{ marginBottom: 100 }}>
        <View>
          <View>
            <View>
              <Text style={styles.categoryHeading}>Categories</Text>
              <View style={styles.components}>
                {loading ? (
                  <ActivityIndicator size="large" color="#00ff00" />
                ) : error ? (
                  <Text>{error}</Text>
                ) : (
                  Categories.map((item) => {
                    return (
                      <View style={styles.card} key={item.Name}>
                        <TouchableOpacity
                          activeOpacity={1}
                          onPress={() =>
                            props.navigation.navigate("relaedsubcategories", {
                              id: item.SKUCatId,
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
