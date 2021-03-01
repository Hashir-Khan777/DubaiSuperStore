import React, { useEffect } from "react";
import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import DepartmentComponent from "../components/DepartmentComponent";
import { Fetch_Departments } from "../store/action/FetchData";

export default function Departments(props) {
  const dispatch = useDispatch();

  const AllDepartments = useSelector((state) => state.AllDepartments);
  const { loading, error, Departments } = AllDepartments;

  useEffect(() => {
    dispatch(Fetch_Departments());
  }, [dispatch]);

  return (
    <View>
      <SafeAreaView>
        <View style={styles.ctegories}>
          <View>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => props.prop.navigation.navigate("categories")}
            >
              <Image
                source={require("../../assets/category.jpg")}
                style={{
                  width: 70,
                  height: 70,
                  resizeMode: "center",
                }}
              />
              <Text>Categories</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => props.prop.navigation.navigate("subcategories")}
            >
              <Image
                source={require("../../assets/subcategory.jpg")}
                style={{
                  width: 70,
                  height: 70,
                  resizeMode: "center",
                }}
              />
              <Text>Sub Categories</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            resizeMode="center"
            source={require("../../assets/uploadpre.jpg")}
            style={{
              width: "100%",
              height: 100,
              resizeMode: "center",
            }}
          />
        </View>

        <View style={styles.departView}>
          <Text style={styles.departText}>Department</Text>
          <View style={styles.components}>
            {loading ? (
              <ActivityIndicator size="large" color="#00ff00" />
            ) : error ? (
              <Text>{error}</Text>
            ) : (
              Departments.map((item) => {
                return (
                  <DepartmentComponent
                    key={item.Name}
                    prop={props.prop}
                    name={item.Name}
                    id={item.SKUDeptId}
                    image={item.ImageUrl1}
                  />
                );
              })
            )}
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  departText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    color: "blue",
  },
  components: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  cardButton: {
    position: "relative",
    width: 400,
    borderRadius: 10,
    marginVertical: 5,
  },
  ctegories: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 10,
  },
});
