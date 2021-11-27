import React from "react";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Icon } from "react-native-vector-icons/MaterialCommunityIcons";
import { Title } from "react-native-paper";

//Screens
import Login from "./App/Screens/Login";
import Home from "./App/Screens/Home";
import SignUp from "./App/Screens/SignUp";
import Profile from "./App/Screens/Profile";
import NewTrain from "./App/Screens/NewTrain";
import Imc from "./App/Screens/Imc";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();
const BottomTab = createBottomTabNavigator();


export default function Main() {
  //colocar um dark mode no app; falta um arquivo style que seja "claro"
  const MyTheme = {
    dark: false,
    colors: {
      primary: "white",
      background: "white",
      card: "#65509f",
      text: "white",
      border: "green",
    },
  };

  const loginStack = () => (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: "LoginScreen",
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          title: "SignUpScreen",
          // headerShown: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={bottomTab}
        options={{
          title: "",
          headerShown: false,
        }}
      />
      {/* <Stack.Screen name="Login with Google" component={ApiGoogle} /> */}
    </Stack.Navigator>
  );

  const bottomTab = () => {
    return (
      <BottomTab.Navigator>
        {/* <BottomTab.Screen name="Home" component={homeStack} /> */}
        <BottomTab.Screen name="Home" component={Home} />
        <BottomTab.Screen name="Novo" component={NewTrain} />
        <BottomTab.Screen name="Perfil" component={profile} />
      </BottomTab.Navigator>
    );
  };

  const profile = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Perfil" component={Profile} />
        <Stack.Screen name="Imc" component={Imc} />
      </Stack.Navigator>
    );
  };
  return <NavigationContainer>{loginStack()}</NavigationContainer>;
}
