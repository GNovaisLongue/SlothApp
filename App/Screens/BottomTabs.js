import { StatusBar } from "expo-status-bar";
import React from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Profile,Classes,Settings,Games,Modal} from "./Index";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createMaterialBottomTabNavigator();
//const Tab = createBottomTabNavigator();

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
    <Tab.Navigator>
      <Tab.Screen name="Profile" component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon:({color}) =>(
            <Icon name="home" color={color} size={26}/> 
          ),
        }}
      />
      <Tab.Screen name="Class" component={Classes} 
        options={{
          tabBarLabel: "Class",
          tabBarIcon:({color}) =>(
            <Icon name="class" color={color} size={26}/> 
          ),
        }}
      />
      <Tab.Screen name="Settings" component={Settings} 
        options={{
          tabBarLabel: "Settings",
          tabBarIcon:({color}) =>(
            <Icon name="settings" color={color} size={26}/> 
          ),
        }}
      />
      <Tab.Screen name="Games" component={Games}
        options={{
          tabBarLabel: "Games",
          tabBarIcon:({color}) =>(
            <Icon name="videogame-asset" color={color} size={26}/> 
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTabs;