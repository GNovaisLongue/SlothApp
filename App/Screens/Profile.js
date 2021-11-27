import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, Button, TouchableOpacity } from "react-native";
import styles from "../Styles/styles"
import Icon from 'react-native-vector-icons/MaterialIcons';

const Profile = ({navigation}) => {
  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <Text>Header</Text>
      </View>

      <View style={styles.container}>
        <Text>Open up Profile.js to start working on your app!</Text>
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("MyModal")}>
          <Icon name="store" size={36}/>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    </View>
  );
  function onImcPress() {
    //navigation.navigate("");
  }
};

export default Profile;