import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

export default function DepartmentComponent(props) {
  return (
    <View style={styles.card}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() =>
          props.prop.navigation.navigate("relatedcategories", { id: props.id })
        }
      >
        <View>
          <Image
            style={styles.departImage}
            source={{
              uri: props.image,
            }}
          />
        </View>
        <View>
          <Text style={styles.departText}>{props.name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
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
    resizeMode: "contain",
  },
  departText: {
    textAlign: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
});
