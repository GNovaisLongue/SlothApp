import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Open up Profile.js to start working on your app!</Text>
      <Button
        buttonStyle={styles.loginButton}
        onPress={() => onImcPress()}
        title="IMC"
      />
      <StatusBar style="auto" />
    </View>
  );
  function onImcPress() {
    navigation.navigate("Imc");
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Profile;
