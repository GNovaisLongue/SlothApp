import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, Text, View } from "react-native";
import styles from "../Styles/styles"

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Tab 1 - Home</Text>
      <Text>Open up Menu.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default Home;
