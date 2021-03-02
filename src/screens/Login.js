import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import { Header } from "react-native/Libraries/NewAppScreen";
import background from "../../assets/login.jpg";

export default function Login() {
  return (
    <SafeAreaView>
      <View>
        <Image
          source={background}
          style={{
            width: 200,
            height: 300,
            resizeMode: "cover",
            // borderRadius: 100,
          }}
        />
      </View>
      <View>
        <Text>Hello</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
