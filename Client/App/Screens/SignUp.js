import React, { useState } from "react";
import {
  Text,
  View,
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from "react-native";
import { Checkbox } from "native-base";
import { TextInput } from "react-native-paper";
import SnackbarAlert from "../Components/Snackbar";
import axios from "axios";

const imageBackground = require("../../App/assets/Images/forest.jpg");

const SignUp = ({ navigation, route }) => {
  const [usernameSignup, setUsernameSignup] = useState("");
  const [passwordSignup, setPasswordSignup] = useState("");
  const [userEmailSignup, setUserEmailSignup] = useState("");

  const { width, height } = Dimensions.get("screen");
  const [visible, setVisible] = useState(false);

  const userRegisterExpress = async () => {
    axios
      .post("https://sloth-app-backend.herokuapp.com/register", {
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
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={imageBackground}
        style={{ width: "100%", height: "100%", zIndex: 1 }}
      >
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <View style={styles.registerContainer}>
            <SnackbarAlert open={visible} message={"1 ou mais campos vazios"} />
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
                      value={usernameSignup ?? ""}
                      onChange={(e) => setUsernameSignup(e.target.value)}
                    />
                  </View>
                  <View style={styles.inputContainer}>
                    <TextInput
                      borderless
                      placeholder="Email"
                      theme={{
                        colors: {
                          text: "black",
                          placeholder: "black",
                          background: "#ffffff",
                        },
                      }}
                      /* style={styles.loginFormTextInput} */
                      left={<TextInput.Icon name="email" color="black" />}
                      value={userEmailSignup ?? ""}
                      onChange={(e) => setUserEmailSignup(e.target.value)}
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
                      value={passwordSignup ?? ""}
                      onChange={(e) => setPasswordSignup(e.target.value)}
                    />
                  </View>
                  {/* <View row width={width * 0.8}>
                    <Checkbox
                      checkboxStyle={{
                        borderWidth: 3,
                      }}
                      color="#5E72E4"
                      label="Some text here"
                    />
                  </View> */}
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <View style={styles.viewButton}>
                      <Pressable
                        style={styles.Button}
                        onPress={() => onSignUpPress()}
                      >
                        <Text style={styles.buttonText}>Sign Up</Text>
                      </Pressable>
                    </View>
                    <View style={styles.viewButton}>
                      <Pressable
                        style={styles.Button}
                        onPress={() => onCancelPress()}
                      >
                        <Text style={styles.buttonText}>Cancel</Text>
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

  function onSignUpPress() {
    if (usernameSignup == "" || passwordSignup == "" || userEmailSignup == "") {
      console.log("1 ou mais campos vazios");
      // alert("1 ou mais campos vazios");
      // return <SnackbarAlert open={true} message={"1 ou mais campos vazios"} />;
    } else {
      userRegisterExpress(); //add user to db
    }
  }
  function onCancelPress() {
    navigation.navigate("Login");
  }
};

export default SignUp;

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
