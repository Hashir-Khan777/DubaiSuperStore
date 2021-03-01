import React from "react";
import { View, Image, FlatList, Dimensions } from "react-native";
export default function Slider() {
  const { width: windowWidth } = Dimensions.get("window");
  const Images = [
    {
      id: 1,
      image:
        "https://www.dubaisuperstore.com.pk/Images/Uploaded/2395SKU_download (1).jpg",
    },
    {
      id: 2,
      image:
        "https://www.dubaisuperstore.com.pk/Images/Uploaded/2395SKU_download (1).jpg",
    },
    {
      id: 3,
      image:
        "https://www.dubaisuperstore.com.pk/Images/Uploaded/2395SKU_download (1).jpg",
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
        onScroll={(event) => console.log( event.nativeEvent.layoutMeasurement.width)}
        showsHorizontalScrollIndicator={false}
        data={Images}
        renderItem={({ item }) => {
          return (
            <Image
              key={item.id}
              source={{ uri: item.image }}
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
