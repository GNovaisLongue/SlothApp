import React from "react";
import {
  Keyboard,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Alert,
  KeyboardAvoidingView,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../Styles/style";

const SignUp = () => {
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView style={styles.containerView} behavior="padding">
      <TouchableWithoutFeedback>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
            <TextInput
              placeholder="Username"
              placeholderColor="#c4c3cb"
              style={styles.loginFormTextInput}
            />
            <TextInput
              placeholder="Email"
              placeholderColor="#c4c3cb"
              style={styles.loginFormTextInput}
            />
            <TextInput
              placeholder="Height"
              placeholderColor="#c4c3cb"
              style={styles.loginFormTextInput}
            />
            <TextInput
              placeholder="Weight"
              placeholderColor="#c4c3cb"
              style={styles.loginFormTextInput}
            />
            <TextInput
              placeholder="Password"
              placeholderColor="#c4c3cb"
              style={styles.loginFormTextInput}
              secureTextEntry={true}
            />

            <Button
              buttonStyle={styles.loginButton}
              onPress={() => onSignUpPress()}
              title="SignUp"
            />
            <Button
              buttonStyle={styles.loginButton}
              onPress={() => onCancelPress()}
              title="Cancel"
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );

  function onSignUpPress() {
    //auth
    //if ok
    navigation.pop(); //remove from stack
    navigation.navigate("Home");
  }
  function onCancelPress() {
    //auth
    //if ok
    navigation.navigate("Login");
  }
};

export default SignUp;
