import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, Text, View } from "react-native";
import styles from "../Styles/styles"

const Classes = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Tab 1 - Class</Text>
      <Text>Open up Menu.js to start working on your app!</Text>
      <Button
        buttonStyle={styles.loginButton}
        onPress={() => navigation.navigate("SignUp")}
        title="Button"
      />
      <StatusBar style="auto" />
    </View>
  );
};

export default Classes;