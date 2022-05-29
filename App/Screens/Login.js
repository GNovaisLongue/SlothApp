import React, { useState } from "react";
import { Text, View, TextInput, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../../assets/Styles/styles";
import axios from "axios";

const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const getAccessExpress = async () => {
    return await axios
      .post("http://localhost:19007/login", {
        username: username,
        password: password,
      })
      .then((response) => {
        console.log("USUARIO LOGADO");
        console.log(response.data);
        if (response.data.message) {
          alert(response.data.message);
        }
        if (response.data[0].username == username) {
          sessionStorage.setItem("user_id", response.data.user_id);
          console.log(response.data.user_id);
          navigation.navigate("Home");
          // sessionStorage.setItem("Access_token", response.data.access_token);
        }
      })
      .catch((error) => {
        if (error.data) {
          alert(error.data.message);
        }
      });
  };

  return (
    <View style={styles.loginScreenContainer}>
      <Text style={styles.loginLogoText}>A</Text>
      <TextInput
        placeholder="Username"
        placeholderColor="#c4c3cb"
        style={styles.loginFormTextInput}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        placeholderColor="#c4c3cb"
        style={styles.loginFormTextInput}
        secureTextEntry={true}
        onChangeText={setPassword}
      />
      <Pressable style={styles.loginButton} onPress={() => onLogin()}>
        <Text style={styles.loginText}>Login</Text>
      </Pressable>
      <Pressable style={styles.loginButton} onPress={() => onSignIn()}>
        <Text style={styles.loginText}>Sign Up</Text>
      </Pressable>
    </View>
  );

  function onLogin() {
    if (username == "" || password == "") {
      alert("1 ou mais campos vazios");
    } else {
      // getAccessExpress();
      navigation.navigate("Home"); // temporario
      // console.log(sessionStorage.getItem("Access_token"));
    }
  }

  function onSignIn() {
    navigation.navigate("SignUp");
  }
};
export default Login;
