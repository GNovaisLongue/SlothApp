import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, Text, View } from "react-native";
import styles from "../Styles/styles"

const Notifications = () => {
  return (
    <View style={styles.container}>
      <Text>Tab 1 - Notifications</Text>
      <Text>Open up Notifications.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default Notifications;