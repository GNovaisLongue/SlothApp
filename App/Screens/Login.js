import React, { useState } from "react";
import { Text, View, TextInput, Pressable } from "react-native";
import styles from "../../assets/Styles/styles";
import axios from "axios";

const Login = ({ navigation }) => {
  const [userData, setUserData] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const getAccessExpress = async () => {
    return await axios
      .post("http://localhost:19007/login", {
        username: username,
        password: password,
      })
      .then((response) => {
        const newUser = response.data;
        setUserData(newUser);
        if (response.data.message) {
          alert(response.data.message);
        }
        if (newUser[0].username == username) {
          sessionStorage.setItem("user_id", newUser[0].user_id); //response.data[0].user_id
          navigation.navigate("Home");
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
      getAccessExpress(); //comment this and uncomment the other two below to skip login check
      // sessionStorage.setItem("user_id", 1);
      // navigation.navigate("Home");
    }
  }

  function onSignIn() {
    navigation.navigate("SignUp");
  }
};
export default Login;
