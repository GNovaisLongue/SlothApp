import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Button,
} from "react-native";
import styles from "../../App/assets/Styles/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import axios from "axios";

const imageItem = require("../../App/assets/adaptive-icon.png");

//Card Component inside Flatlist for items
const TeacherCards = ({ item, onPress }) => (
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
      image={imageItem}
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
            {item.teacher_id}
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
            {item.class_type}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {item.class_desc}
          </Typography>
        </CardContent>
      </Box>
    </CardActionArea>
  </Card>
);

//main
const Classes = ({ navigation }) => {
  const [teacherList, setTeacherList] = useState([]);

  const getTeachersExpress = async () => {
    axios
      .get("https://sloth-app-backend.herokuapp.com/activeClasses")
      .then((response) => {
        setTeacherList(response.data);
      })
      .catch((error) => {
        console.log("ERROR " + error);
      });
  };

  const getUpcomingClasses = async () => {
    axios
      .get("http://localhost:3000/")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log("ERROR " + error);
      });
  };

  const renderItems = ({ item }) => {
    return (
      <TeacherCards
        item={item}
        onPress={() => {
          alert("YOU CLICKED ME");
        }}
      />
    );
  };

  useEffect(() => {
    getTeachersExpress();
    getUpcomingClasses();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Button
          buttonStyle={styles.loginButton}
          onPress={() => {
            navigation.navigate("ModalCalendar");
          }}
          title="Classes's Schedule"
        />
        <Button
          buttonStyle={styles.loginButton}
          onPress={() => {
            navigation.navigate("Calendar");
          }}
          title="Personal Calendar"
        />
      </View>
      <FlatList
        data={teacherList}
        keyExtractor={(item, index) => item.active_classes_id}
        renderItem={renderItems}
      />
    </SafeAreaView>
  );
};

export default Classes;
