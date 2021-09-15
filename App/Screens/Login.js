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
} from "react-native";
import { useNavigation } from "@react-navigation/native";
// import Discord from "../Routes/Discord";

import styles from "../Styles/style";

const Login = () => {
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView style={styles.containerView} behavior="padding">
      <TouchableWithoutFeedback>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
            <Text style={styles.logoText}>A</Text>
            {/* <TextInput
              placeholder="Username"
              placeholderColor="#c4c3cb"
              style={styles.loginFormTextInput}
            />
            <TextInput
              placeholder="Password"
              placeholderColor="#c4c3cb"
              style={styles.loginFormTextInput}
              secureTextEntry={true}
            /> */}
            <Button
              buttonStyle={styles.loginButton}
              onPress={() => onLoginPress()}
              title="Discord"
            />
            {/* <Button
              buttonStyle={styles.loginButton}
              onPress={() => onSignInPress()}
              title="SignUp"
            /> */}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );

  function onLoginPress() {
    //auth - user e senha
    //if ok
    window.location.href='/api/discord/login';
    console.log(window.location.href);
    navigation.navigate("Home");
  }
  function onSignInPress() {
    //auth
    //if ok
    navigation.navigate("SignUp");
  }
};
export default Login;
