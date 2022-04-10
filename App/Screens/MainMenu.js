import { StatusBar } from "expo-status-bar";
// import React from "react";
import * as React from 'react';
import { IconButton } from 'react-native-paper';
import { Text, View } from "react-native";
import styles from "../Styles/styles";
import Icon from "react-native-vector-icons/MaterialIcons";

const MainMenu = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.label1} name="label1">
          username
        </Text>
        <Text style={styles.label2} name="label2">
          Level
        </Text>
        <Text style={styles.label3} name="label3">
          XP
        </Text>
      </View>
      {/* CHARACTER IMG  */}
      <View style={styles.characterContainer}>
        <Text>Open up MainMenu.js to start working on your app!</Text>
      </View>
      {/* BALANCE | SHOP */}
      <View
      style={styles.shopContainer}>
        <IconButton
          style={styles.moneyLabel}
          icon="wallet"
          size={32}
          onPress={()=> alert("Your money")}
        >
        </IconButton>
        <IconButton
          style={styles.shopButton}
          icon="store"
          size={32}
          onPress={() => navigation.navigate("MyModal")}
        />
      </View>

    </View>
    
  );
  function onImcPress() {
    //navigation.navigate("");
  }
};

export default MainMenu;
