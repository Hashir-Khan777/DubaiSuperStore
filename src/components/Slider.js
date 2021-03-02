import React from "react";
import { View, Image, FlatList, Dimensions } from "react-native";
import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";
import banner3 from "../../assets/banner3.jpg";

export default function Slider() {
  const { width: windowWidth } = Dimensions.get("window");
  const Images = [
    {
      id: 1,
      image: banner1,
    },
    {
      id: 2,
      image: banner2,
    },
    {
      id: 3,
      image: banner3,
    },
  ];

  return (
    <View
      style={{
        marginVertical: 20,
      }}
    >
      <FlatList
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        data={Images}
        automaticallyAdjustContentInsets={true}
        renderItem={({ item }) => {
          return (
            <Image
              key={item.id}
              source={item.image}
              style={{
                flex: 1,
                width: windowWidth,
                height: 200,
                resizeMode: "contain",
              }}
            />
          );
        }}
      />
    </View>
  );
}
