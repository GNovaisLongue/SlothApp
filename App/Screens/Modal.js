import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, Text, View, SafeAreaView } from "react-native";
import styles from "../Styles/styles";

const Modal = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Tab - Modal</Text>
        <Text>Open up Modal.js to start working on your app!</Text>
        <Button onPress={() => navigation.goBack()} title="Dismiss" />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
};

export default Modal;
