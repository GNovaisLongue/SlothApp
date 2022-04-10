import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, Text, View } from "react-native";
import styles from "../Styles/styles"

const Settings = () => {
  return (
    <View style={styles.container}>
      <Text>Tab 1 - Settings</Text>
      <Text>Open up Settings.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default Settings;