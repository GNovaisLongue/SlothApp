import React from "react";
import {
  Text,
  View,
  FlatList,
  SectionList,
  Pressable,
  SafeAreaView,
  StyleSheet,
} from "react-native";
// import styles from "../../App/assets/Styles/styles";

// const DATA = [
//   {
//     title: "Login",
//     data: ["Button 1", "Button 2"],
//   },
//   {
//     title: "Theme",
//     data: ["Button 3"],
//   },
//   {
//     title: "Privacy",
//     data: ["Button 4", "Button 5", "Button 6"],
//   },
//   {
//     title: "About Me",
//     data: ["button 7", "Button 8"],
//   },
// ];

// const Item = ({ title, onPress }) => (
//   <View style={styles.settingsItem}>
//     <Pressable style={styles.loginButton} onPress={() => {}}>
//       <Text style={styles.settingsTitle}>{title}</Text>
//     </Pressable>
//   </View>
// );

// const Settings = () => {
//   return (
//     <View style={styles.container}>
//       <SectionList
//         sections={DATA}
//         keyExtractor={(item, index) => item + index}
//         renderItem={({ item }) => <Item title={item} />}
//         renderSectionHeader={({ section: { title } }) => (
//           <Text style={styles.settingsHeader}>{title}</Text>
//         )}
//       />
//     </View>
//   );
// };

// export default Settings;

const Settings = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View>
        <Text style={{ fontSize: 25, fontWeight: 400 }}>LOGIN</Text>
        <View style={styles.viewButton}>
          <Pressable style={styles.Button} onPress={() => navigation.pop()}>
            <Text style={styles.buttonText}>logout</Text>
          </Pressable>
        </View>
        <View style={styles.viewButton}>
          <Pressable style={styles.Button}>
            <Text style={styles.buttonText}>BUTTON 2</Text>
          </Pressable>
        </View>
      </View>
      <View>
        <Text style={{ fontSize: 25, fontWeight: 400 }}>THEME</Text>
        <View style={styles.viewButton}>
          <Pressable style={styles.Button}>
            <Text style={styles.buttonText}>BUTTON 1</Text>
          </Pressable>
        </View>
        <View style={styles.viewButton}>
          <Pressable style={styles.Button}>
            <Text style={styles.buttonText}>BUTTON 2</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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

export default Settings;
