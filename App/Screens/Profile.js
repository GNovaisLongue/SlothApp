import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, Button, TouchableOpacity } from "react-native";
import styles from "../Styles/styles";
import Icon from "react-native-vector-icons/MaterialIcons";

const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
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
      <View style={styles.shopContainer}>
        <Text>Open up Profile.js to start working on your app!</Text>
        <View style={styles.moneyLabel}>
          <Icon name="account-balance-wallet" size={28} />
          <Text>Currency </Text>
        </View>
        {/* <TouchableOpacity style={styles.shopButton} onPress={()=>navigation.navigate("MyModal")}>
          <Icon name="store" size={36}/>
        </TouchableOpacity> */}
        <Icon
          style={styles.shopButton}
          name="store"
          size={36}
          onPress={() => navigation.navigate("MyModal")}
        />
        <StatusBar style="auto" />
      </View>
    </View>
  );
  function onImcPress() {
    //navigation.navigate("");
  }
};

export default Profile;
