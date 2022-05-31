import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Alert,
  KeyboardAvoidingView,
  Pressable,
} from "react-native";
import axios from "axios";
import styles from "../../assets/Styles/styles";

const SignUp = ({ navigation, route }) => {
  const [usernameSignup, setUsernameSignup] = useState("");
  const [passwordSignup, setPasswordSignup] = useState("");
  const [userEmailSignup, setUserEmailSignup] = useState("");

  const userRegisterExpress = async () => {
    axios
      .post("http://localhost:19007/register", {
        username: usernameSignup,
        user_email: userEmailSignup,
        password: passwordSignup,
      })
      .then((response) => {
        alert(response.data.message);
        navigation.pop(); //remove from stack
        navigation.navigate("Login"); //return to login screen
      })
      .catch((error) => {
        console.log("ERROR " + error);
      });
  };

  //main
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <TouchableWithoutFeedback>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
            <TextInput
              placeholder="Username"
              placeholderColor="#c4c3cb"
              style={styles.loginFormTextInput}
              onChangeText={setUsernameSignup}
            />
            <TextInput
              placeholder="Email"
              placeholderColor="#c4c3cb"
              style={styles.loginFormTextInput}
              onChangeText={setUserEmailSignup}
            />
            <TextInput
              placeholder="Password"
              placeholderColor="#c4c3cb"
              style={styles.loginFormTextInput}
              secureTextEntry={true}
              onChangeText={setPasswordSignup}
            />

            <Pressable
              style={styles.loginButton}
              onPress={() => onSignUpPress()}
            >
              <Text style={styles.loginText}>Sign Up</Text>
            </Pressable>
            <Pressable
              style={styles.loginButton}
              onPress={() => onCancelPress()}
            >
              <Text style={styles.loginText}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );

  function onSignUpPress() {
    if (usernameSignup == "" || passwordSignup == "" || userEmailSignup == "") {
      alert("1 ou mais campos vazios");
    } else {
      userRegisterExpress(); //add user to db
    }
  }
  function onCancelPress() {
    navigation.navigate("Login");
  }
};

export default SignUp;
