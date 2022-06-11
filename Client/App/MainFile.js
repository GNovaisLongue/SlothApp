import React from "react";
import { NativeBaseProvider } from "native-base";
import BottomTabs from "./Screens/BottomTabs";
import {
  Login,
  SignUp,
  ModalStore,
  ModalCalendar,
  Calendar,
} from "./Screens/Index";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider as PaperProvider } from "react-native-paper";

const Stack = createStackNavigator();
const RootStack = createStackNavigator();

export default function MainFile() {
  const loginStack = () => (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: "Login",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          title: "SignUp",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={rootStack}
        options={{
          title: "Home",
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );

  const rootStack = () => {
    return (
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
          name="ModalStore"
          component={ModalStore}
          options={{ title: "Sloth Store" }}
        />
        <RootStack.Screen name="ModalCalendar" component={ModalCalendar} />
        <RootStack.Screen name="Calendar" component={Calendar} />
      </RootStack.Navigator>
    );
  };
  return (
    <NativeBaseProvider>
      <PaperProvider>
        <NavigationContainer>{loginStack()}</NavigationContainer>
      </PaperProvider>
    </NativeBaseProvider>
  );
}
