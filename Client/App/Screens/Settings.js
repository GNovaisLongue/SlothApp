import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  SectionList,
  Pressable,
} from "react-native";
import styles from "../../assets/Styles/styles";

const DATA = [
  {
    title: "Login",
    data: ["Button 1", "Button 2"],
  },
  {
    title: "Theme",
    data: ["Button 3"],
  },
  {
    title: "Privacy",
    data: ["Button 4", "Button 5", "Button 6"],
  },
  {
    title: "About Me",
    data: ["button 7", "Button 8"],
  },
];

const Item = ({ title, onPress }) => (
  <View style={styles.settingsItem}>
    <Pressable style={styles.loginButton} onPress={() => {}}>
      <Text style={styles.settingsTitle}>{title}</Text>
    </Pressable>
  </View>
);

const Settings = () => {
  return (
    <View style={styles.container}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Item title={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.settingsHeader}>{title}</Text>
        )}
      />
    </View>
  );
};

export default Settings;
