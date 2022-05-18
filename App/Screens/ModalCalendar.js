import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, Text, View } from "react-native";
import styles from "../../assets/Styles/styles";

const ModalCalendar = () => {
  return (
    <View style={styles.container}>
      <Text>Tab 1 - ModalCalendar.js</Text>
      <Text>Open up Home.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default ModalCalendar;
