import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Button,
} from "react-native";
import styles from "../../assets/Styles/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import axios from "axios";

// let QueryString = require("query-string");

const teacherData = [
  {
    name: "A1",
    status: "Head",
    id: "1",
  },
  {
    name: "A2",
    status: "Head",
    id: "2",
  },
  {
    name: "A3",
    status: "Torso",
    id: "3",
  },
  {
    name: "A4",
    status: "Torso",
    id: "4",
  },
  {
    name: "A5",
    status: "Feet",
    id: "5",
  },
  {
    name: "A6",
    status: "Feet",
    id: "6",
  },
  {
    name: "A7",
    status: "Feet",
    id: "7",
  },
  {
    name: "A8",
    status: "Background",
    id: "8",
  },
];

//Card Component inside Flatlist for items
const Cards = ({ item, onPress }) => (
  <Card style={{ display: "flex" }}>
    <CardActionArea onClick={onPress}>
      <Box style={{ display: "flex", flexDirection: "column" }}>
        <CardContent style={{ flex: "2 1 auto" }}>
          <Typography component="div" variant="h5">
            {item.classDesc}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {item.language}
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        style={{ flex: 1, width: 151 }}
        image={require("../../assets/Images/Blue_owl.png")}
        alt="Creepy Smile"
      />
    </CardActionArea>
  </Card>
);

//main
const Classes = ({ navigation }) => {
  const [teacherList, setTeacherList] = useState([]);

  const getTeachers = async (token) => {
    console.log("TOKEN " + token);
    axios
      .get("http://localhost:8080/activeClasses", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setTeacherList(response.data);
      })
      .catch((error) => {
        console.log("ERROR " + error);
      });
  };

  const renderItems = ({ item }) => {
    return (
      <Cards
        item={item}
        onPress={() => {
          // getTeachers(AsyncStorage.getItem("Access_token"));
          alert("YOU CLICKED ME");
        }}
      />
    );
  };

  // getAccessToken();
  useEffect(() => {
    getTeachers(localStorage.getItem("Access_token"));
  }, []);

  //Visual part
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Schedule</Text>
        <Button
          buttonStyle={styles.loginButton}
          onPress={() => alert("calendar?")}
          title="Classes's Schedule"
        />
      </View>
      <FlatList
        data={teacherList}
        keyExtractor={(item, index) => item.id}
        renderItem={renderItems}
      />
    </SafeAreaView>
  );
};

export default Classes;
