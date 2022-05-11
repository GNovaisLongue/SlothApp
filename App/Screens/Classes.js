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
import cx from "clsx";

// let QueryString = require("query-string");

//Card Component inside Flatlist for items
const Cards = ({ item, onPress }) => (
  <Card
    // className={styles.classesCard}
    sx={{
      display: "flex",
      padding: 1,
      marginBottom: 0.5,
      backgroundColor: "lightgray",
    }}
  >
    <CardMedia
      title="owl"
      sx={{ width: 145, backgroundColor: "gray" }}
      component="img"
      image={require("../../assets/adaptive-icon.png")}
      // style={styles.classesCardMediaImg}
    />
    <CardActionArea onClick={onPress}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "skyblue",
        }}
      >
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {item.teacherId}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {item.language}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {item.classType}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {item.classDesc}
          </Typography>
        </CardContent>
      </Box>
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
