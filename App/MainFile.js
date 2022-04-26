import React from "react";
import BottomTabs from "./Screens/BottomTabs";
import { Login, SignUp, Modal } from "./Screens/Index";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
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
          title: "LoginScreen",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          title: "SignUpScreen",
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
      {/* <Stack.Screen name="Login with Google" component={ApiGoogle} /> */}
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
        <RootStack.Screen name="MyModal" component={Modal} />
      </RootStack.Navigator>
    );
  };
  return (
    <PaperProvider>
      <NavigationContainer>{loginStack()}</NavigationContainer>
    </PaperProvider>
  );
}
