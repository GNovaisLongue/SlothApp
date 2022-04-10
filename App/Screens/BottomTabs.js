import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialIcons";

import { MainMenu, Classes, Settings, Notifications, Modal } from "./Index";
import styles from "../Styles/styles";

const Tab = createMaterialBottomTabNavigator(); //Android
//const Tab = createBottomTabNavigator(); //IOS

const BottomTabs = () => {
  // return (
  //   <NavigationContainer>
  //     <Tab.Navigator>
  //           <Tab.Screen name="Home">
  //               {(props) => <HomeScreen  {...props} text={homeText} />}
  //           </Tab.Screen>
  //          <Tab.Screen name="Settings" component={SettingsScreen} />
  //     </Tab.Navigator>
  //   </NavigationContainer>
  // );
  return (
    <Tab.Navigator
      barStyle={{
        backgroundColor: "#19A04FB5",
      }}
    >
      <Tab.Screen
        name="MainMenu"
        component={MainMenu}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Class"
        component={Classes}
        options={{
          tabBarLabel: "Class",
          tabBarIcon: ({ color }) => (
            <Icon name="class" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notifications}
        options={{
          tabBarLabel: "Notifications",
          tabBarIcon: ({ color }) => (
            <Icon name="notifications" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color }) => (
            <Icon name="settings" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTabs;
