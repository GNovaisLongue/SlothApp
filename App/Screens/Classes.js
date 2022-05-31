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

const classes = [
  {
    activeClassesId: 1,
    teacherId: 748189967225847928,
    txtId: 822772206509490186,
    vcId: 822772208626696202,
    language: "Kanji Radicals",
    classType: "Pronunciation",
    vcTimestamp: null,
    vcTime: null,
    members: 2,
    classDesc: "kanji radicals JLPT4",
    taughtIn: "English",
  },
  {
    activeClassesId: 2,
    teacherId: 448569847807475735,
    txtId: 832709600905920573,
    vcId: 832709605472731166,
    language: "French",
    classType: "Pronunciation",
    vcTimestamp: 1618604133,
    vcTime: 232,
    members: 1,
    classDesc: "French for beginners",
    taughtIn: "English",
  },
  {
    activeClassesId: 3,
    teacherId: 389140879052374018,
    txtId: 834080924253683734,
    vcId: 834080926706434088,
    language: "polish",
    classType: "grammar",
    vcTimestamp: null,
    vcTime: 4678,
    members: 19,
    classDesc: "x",
    taughtIn: "English",
  },
  {
    activeClassesId: 4,
    teacherId: 810134717579395073,
    txtId: 834764076516769792,
    vcId: 834764078899658773,
    language: "Japanese",
    classType: "Grammar",
    vcTimestamp: null,
    vcTime: 567,
    members: 5,
    classDesc: "testing",
    taughtIn: "English",
  },
  {
    activeClassesId: 5,
    teacherId: 811650354269650944,
    txtId: 852931218197839902,
    vcId: 852931220840513556,
    language: "English",
    classType: "Pronunciation",
    vcTimestamp: null,
    vcTime: 9,
    members: 1,
    classDesc: "Englishhhhhh",
    taughtIn: "Korean",
  },
  {
    activeClassesId: 6,
    teacherId: 744203679292325918,
    txtId: 856857105838505994,
    vcId: 856857110037266442,
    language: "Farsi",
    classType: "Pronunciation",
    vcTimestamp: null,
    vcTime: 3827,
    members: 11,
    classDesc: "Beginner farsi class",
    taughtIn: "English",
  },
];

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
      .get("http://localhost:19007/activeClasses")
      .then((response) => {
        setTeacherList(response.data);
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
    // setTeacherList(classes); //local array
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
