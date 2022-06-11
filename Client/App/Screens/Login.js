import React, { useState } from "react";
import {
  Text,
  View,
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { TextInput } from "react-native-paper";
// import styles from "../../assets/Styles/styles";
import axios from "axios";

const imageBackground = require("../../App/assets/Images/forest.jpg");

const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const getAccessExpress = async () => {
    return await axios
      .post("https://sloth-app-backend.herokuapp.com/login", {
        username: username,
        password: password,
      })
      .then((response) => {
        const newUser = response.data;
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
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={imageBackground}
        style={{ width: "100%", height: "100%", zIndex: 1 }}
      >
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <View style={styles.registerContainer}>
            <View style={{ flex: 1, alignItems: "center" }}>
              <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior="padding"
                enabled
              >
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <View style={styles.inputContainer}>
                    <TextInput
                      borderless
                      placeholder="Name"
                      theme={{
                        colors: {
                          text: "black",
                          placeholder: "black",
                          background: "#ffffff",
                        },
                      }}
                      left={<TextInput.Icon name="account" color="black" />}
                      value={username ?? ""}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </View>
                  <View style={styles.inputContainer}>
                    <TextInput
                      borderless
                      placeholder="Password"
                      theme={{
                        colors: {
                          text: "black",
                          placeholder: "black",
                          background: "#ffffff",
                        },
                      }}
                      secureTextEntry={true}
                      left={<TextInput.Icon name="lock" color="black" />}
                      value={password ?? ""}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </View>
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <View style={styles.viewButton}>
                      <Pressable
                        style={styles.Button}
                        onPress={() => onLogin()}
                      >
                        <Text style={styles.buttonText}>Login</Text>
                      </Pressable>
                    </View>
                    <View style={styles.viewButton}>
                      <Pressable
                        style={styles.Button}
                        onPress={() => onSignIn()}
                      >
                        <Text style={styles.buttonText}>Sign Up</Text>
                      </Pressable>
                    </View>
                  </View>
                </View>
              </KeyboardAvoidingView>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );

  function onLogin() {
    if (username == "" || password == "") {
      alert("1 ou mais campos vazios");
    } else {
      // getAccessExpress(); //comment this and uncomment the other two below to skip login check
      sessionStorage.setItem("user_id", 4);
      navigation.navigate("Home");
    }
  }
  function onSignIn() {
    navigation.navigate("SignUp");
  }
};
export default Login;

const styles = StyleSheet.create({
  registerContainer: {
    width: "90%",
    height: "85%",
    backgroundColor: "#FFFFFFB4",
    borderRadius: 4,
    shadowColor: "#DFDFDF56",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: "hidden",
  },
  inputContainer: {
    width: "110%",
    marginBottom: 15,
  },
  viewButton: {
    margin: 10,
    width: "90%",
    borderRadius: 10,
    // backgroundColor: "#6DBD39",
  },
  Button: {
    // width: "100%",
    // backgroundColor: "#A0BF30",
    // width: "80%",
    // borderRadius: 5,
    // padding: 5,
  },
  buttonText: {
    color: "#476E20",
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    fontWeight: "bold",
    margin: 15,
  },
});
