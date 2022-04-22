import { NavigationHelpersContext } from "@react-navigation/core";
import React from "react";
import {
  Keyboard,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Button,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
// import Discord from "../Routes/Discord";

import styles from "../Styles/styles";

const Login = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.loginScreenContainer}>
      <Text style={styles.loginLogoText}>A</Text>
      <TextInput
        placeholder="Username"
        placeholderColor="#c4c3cb"
        style={styles.loginFormTextInput}
      />
      <TextInput
        placeholder="Password"
        placeholderColor="#c4c3cb"
        style={styles.loginFormTextInput}
        secureTextEntry={true}
      />
      <Pressable style={styles.loginButton} onPress={() => onLoginPress()}>
        <Text style={styles.loginText}>Discord</Text>
      </Pressable>
      <Pressable style={styles.loginButton} onPress={() => onSignInPress()}>
        <Text style={styles.loginText}>SignUp</Text>
      </Pressable>
      {/* <Button
        Style={styles.loginButton}
        onPress={() => onLoginPress()}
        title="Discord"
      />
      <Button
        style={styles.loginButton}
        onPress={() => onSignInPress()}
        title="SignUp"
      /> */}
    </View>
  );

  function onLoginPress() {
    //auth - user e senha
    //if ok
    //window.location.href='https://discord.com/api/oauth2/authorize?client_id=845808880171876393&redirect_uri=http%3A%2F%2Flocalhost%3A19006%2Fauth%2Fredirect&response_type=code&scope=identify%20guilds';
    // console.log(window.location.href);
    navigation.navigate("Home");
  }
  function onSignInPress() {
    //auth
    //if ok
    navigation.navigate("SignUp");
  }
};
export default Login;
