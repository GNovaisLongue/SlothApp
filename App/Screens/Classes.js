import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, Text, View } from "react-native";
import styles from "../../assets/Styles/styles";

const Classes = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Open up Classes.js to start working on your app!</Text>
      <Text>Cards</Text>
      <Button
        buttonStyle={styles.loginButton}
        onPress={() => alert("classes cards")}
        //onPress={() => navigation.navigate("SignUp")}
        title="Teachers' cards"
      />
      <Text>Schedule</Text>
      <Button
        buttonStyle={styles.loginButton}
        onPress={() => alert("calendar?")}
        //onPress={() => navigation.navigate("SignUp")}
        title="Classes's Schedule"
      />
      <StatusBar style="auto" />
    </View>
  );
};

export default Classes;
