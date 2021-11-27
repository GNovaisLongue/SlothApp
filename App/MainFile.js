import React from "react";
import BottomTabs from "./Screens/BottomTabs";
import {Modal,SignUp} from "./Screens/Index";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const RootStack = createStackNavigator();

export default function MainFile(){

  const rootStack = () => {
    return(
      <RootStack.Navigator mode="modal">
        <RootStack.Screen
          name="BottomTab"
          component={BottomTabs}
          options={{
            title: "",
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name="MyModal" component={Modal}
        />
        <RootStack.Screen 
          name="SignUp" component={SignUp}
        />
      </RootStack.Navigator>
    );
  }
  return <NavigationContainer>{rootStack()}</NavigationContainer>;
}