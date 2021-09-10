import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Keyboard,
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
} from "react-native";

const Imc = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text>Tab 3 - Imc</Text>
        <Text>Open up Imc.js to start working on your app!</Text>
        <StatusBar style="auto" />
        <TextInput
          placeholder="Height"
          placeholderColor="#c4c3cb"
          style={styles.formTextInput}
        />
        <TextInput
          placeholder="Weight"
          placeholderColor="#c4c3cb"
          style={styles.formTextInput}
        />
        <Button
          buttonStyle={styles.loginButton}
          onPress={() => onCalculateImc()}
          title="Result"
        />
      </View>
    </View>
  );

  function onCalculateImc() {
    alert("...");
  }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  formTextInput: {
    height: 43,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#eaeaea",
    backgroundColor: "#fafafa",
    paddingLeft: 10,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5,
  },
});

export default Imc;
