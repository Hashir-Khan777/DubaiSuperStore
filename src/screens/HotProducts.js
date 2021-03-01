import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function HotProducts(props) {
  const data = [
    {
      id: 1,
      product: {
        iamge:
          "https://www.dubaisuperstore.com.pk/Images/Uploaded/2547SKU_8964000074732.jpg",
        name: "ADAMS SANDWITCH CHEESE 200G",
        price: 340,
        id: 10,
      },
    },
    {
      id: 2,
      product: {
        iamge:
          "https://www.dubaisuperstore.com.pk/Images/Uploaded/2547SKU_8964000074732.jpg",
        name: "ADAMS SANDWITCH CHEESE 200G",
        price: 340,
        id: 10,
      },
    },
    {
      id: 3,
      product: {
        iamge:
          "https://www.dubaisuperstore.com.pk/Images/Uploaded/2547SKU_8964000074732.jpg",
        name: "ADAMS SANDWITCH CHEESE 200G",
        price: 340,
        id: 10,
      },
    },
    {
      id: 4,
      product: {
        iamge:
          "https://www.dubaisuperstore.com.pk/Images/Uploaded/2547SKU_8964000074732.jpg",
        name: "ADAMS SANDWITCH CHEESE 200G",
        price: 340,
        id: 10,
      },
    },
    {
      id: 5,
      product: {
        iamge:
          "https://www.dubaisuperstore.com.pk/Images/Uploaded/2547SKU_8964000074732.jpg",
        name: "ADAMS SANDWITCH CHEESE 200G",
        price: 340,
        id: 10,
      },
    },
    {
      id: 6,
      product: {
        iamge:
          "https://www.dubaisuperstore.com.pk/Images/Uploaded/2547SKU_8964000074732.jpg",
        name: "ADAMS SANDWITCH CHEESE 200G",
        price: 340,
        id: 10,
      },
    },
    {
      id: 7,
      product: {
        iamge:
          "https://www.dubaisuperstore.com.pk/Images/Uploaded/2547SKU_8964000074732.jpg",
        name: "ADAMS SANDWITCH CHEESE 200G",
        price: 340,
        id: 10,
      },
    },
    {
      id: 8,
      product: {
        iamge:
          "https://www.dubaisuperstore.com.pk/Images/Uploaded/2547SKU_8964000074732.jpg",
        name: "ADAMS SANDWITCH CHEESE 200G",
        price: 340,
        id: 10,
      },
    },
    {
      id: 9,
      product: {
        iamge:
          "https://www.dubaisuperstore.com.pk/Images/Uploaded/2547SKU_8964000074732.jpg",
        name: "ADAMS SANDWITCH CHEESE 200G",
        price: 340,
        id: 10,
      },
    },
  ];

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
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={data}
            renderItem={({ item }) => {
              return (
                <View style={styles.card}>
                  <TouchableOpacity
                    activeOpacity={1}
                    onPress={() =>
                      props.prop.navigation.navigate("product", {
                        image: item.product.iamge,
                        name: item.product.name,
                        price: item.product.price,
                        id: item.product.id,
                      })
                    }
                  >
                    <Image
                      source={{ uri: item.product.iamge }}
                      style={{
                        flex: 1,
                        height: 100,
                        resizeMode: "center",
                      }}
                    />
                  </TouchableOpacity>
                  <Text style={styles.description}>{item.product.name}</Text>
                  <View style={styles.buttonPrice}>
                    <View>
                      <Text style={styles.price}>{item.product.price}</Text>
                    </View>
                    <TouchableOpacity
                      style={styles.cartButton}
                      activeOpacity={0.6}
                      onPress={() =>
                        props.prop.navigation.navigate("Cart", {
                          name: item.product.name,
                          price: item.product.price,
                          image: item.product.iamge,
                          quantity: 1,
                          id: item.id,
                        })
                      }
                    >
                      <Ionicons name="cart" color="#fff" size={20} />
                      <Text style={{ color: "#fff" }}>Add</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            }}
          />
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
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={data}
            renderItem={({ item }) => {
              return (
                <View style={styles.card}>
                  <TouchableOpacity
                    activeOpacity={1}
                    onPress={() =>
                      props.prop.navigation.navigate("product", {
                        image: item.product.iamge,
                        name: item.product.name,
                        price: item.product.price,
                        id: item.product.id,
                      })
                    }
                  >
                    <Image
                      source={{ uri: item.product.iamge }}
                      style={{
                        flex: 1,
                        height: 100,
                        resizeMode: "center",
                      }}
                    />
                  </TouchableOpacity>
                  <Text style={styles.description}>{item.product.name}</Text>
                  <View style={styles.buttonPrice}>
                    <View>
                      <Text style={styles.price}>{item.product.price}</Text>
                    </View>
                    <TouchableOpacity
                      style={styles.cartButton}
                      activeOpacity={0.6}
                      onPress={() =>
                        props.prop.navigation.navigate("Cart", {
                          name: item.product.name,
                          price: item.product.price,
                          image: item.product.iamge,
                          quantity: 1,
                          id: item.id,
                        })
                      }
                    >
                      <Ionicons name="cart" color="#fff" size={20} />
                      <Text style={{ color: "#fff" }}>Add</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            }}
          />
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
