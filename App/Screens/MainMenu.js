import React, { useState } from "react";
// import * as React from "react";
import { IconButton } from "react-native-paper";
import { Text, View } from "react-native";
import styles from "../../assets/Styles/styles";

const MainMenu = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.mainMenuHeader}>
        <Text style={styles.mainMenuLabel1} name="label1">
          username
        </Text>
        <Text style={styles.mainMenuLabel2} name="label2">
          Level
        </Text>
        <Text style={styles.mainMenuLabel3} name="label3">
          XP
        </Text>
      </View>
      {/* CHARACTER IMG  */}
      <View style={styles.mainMenuCharacterContainer}>
        <Text>Open up MainMenu.js</Text>
      </View>
      {/* BALANCE | SHOP */}
      <View style={styles.mainMenuShopContainer}>
        <IconButton
          style={styles.mainMenuMoneyLabel}
          color="black"
          icon="bag-personal"
          size={32}
          onPress={() => alert("Your money")}
        ></IconButton>
        <IconButton
          style={styles.mainMenuShopButton}
          color="black"
          icon="store"
          size={32}
          onPress={() => navigation.navigate("MyModal")}
        />
      </View>
    </View>
  );
  function onPressFunction() {
    //navigation.navigate("");
  }
};

export default MainMenu;
