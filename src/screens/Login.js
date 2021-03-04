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

export default function Login() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
      }}
    >
      <View style={{ width: "60%", alignSelf: "flex-end" }}>
        <View>
          <TextInput placeholder="Email Address" style={styles.input} />
          <TextInput placeholder="Password" style={styles.input} />
          <View>
            <TouchableOpacity activeOpacity={0.6}>
              <Text style={styles.button}>Log in</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text>Already have an account</Text>
          <TouchableOpacity activeOpacity={0.6}>
            <Text>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomColor: "#000",
    borderBottomWidth: 1,
    padding: 0,
    marginVertical: 10,
  },
  button: {
    width: "100%",
    backgroundColor: "blue",
    color: "#fff",
    textAlign: "center",
    paddingVertical: 10,
    borderRadius: 5,
  },
});
