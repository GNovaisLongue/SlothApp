import React, { useState } from "react";
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

let QueryString = require("query-string");

//images
import Blue_owl from "../../assets/Images/Blue_owl.png";

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

// getAllActiveClasses() = async() =>{
//   try{
//     const response = await fetch('localhost:8080/activeClasses',{
//       method: "GET",
//       header: {'Authorization': 'Bearer '+ token}
//     })
//     return await response.json()

//   }catch{
//     alert("GET deu ruim")
//     console.log("GET deu ruim")
//   }
// }

//Card Component inside Flatlist for items
const Cards = ({ item, onPress }) => (
  <Card style={{ display: "flex" }}>
    <CardActionArea onClick={onPress}>
      <Box style={{ display: "flex", flexDirection: "column" }}>
        <CardContent style={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {item.name}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {item.id}
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        style={{ width: 151 }}
        image={require("../../assets/Images/Blue_owl.png")}
        alt="Creepy Smile"
      />
    </CardActionArea>
  </Card>
);

//main
const Classes = ({ navigation }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [teacherList, setTeacherList] = useState([]);

  const getAccessToken = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/login",
        QueryString.stringify({
          username: "Gaddini",
          password: "123456",
        })
      );
      console.log("INSIDE POST " + response.data.access_token);
      const token = response.data.access_token;
      return await token;
    } catch {
      console.log("LOGIN DEU RUIM");
    }
    // getTeachers(authToken);
  };

  const getTeachers = (token) => {
    console.log("TOKEN " + token);
    axios
      .get("http://localhost:8080/activeClasses", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log("ERROR " + error);
      });
  };

  const renderItems = ({ item }) => {
    // const backgroundColor =
    //   item.id === selectedItem ? "steelblue" : "powderblue";
    // const color = item.id === selectedItem ? "white" : "black";
    return (
      <Cards
        item={item}
        onPress={() => {
          const authToken = getAccessToken();
          console.log("PROMISE " + authToken);
          getTeachers(authToken);
        }}
        // backgroundColor={{ backgroundColor }}
        // textColor={{ color }}
      />
    );
  };

  //Visual part
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Button
          buttonStyle={styles.loginButton}
          onPress={() => alert("classes cards")}
          //onPress={() => navigation.navigate("SignUp")}
          title="Teachers' cards"
        />
        <Text>Schedule</Text>
        <Button
          buttonStyle={styles.loginButton}
          onPress={() => alert("calendar?")}
          //onPress={() => navigation.navigate("SignUp")}
          title="Classes's Schedule"
        />
      </View>
      <FlatList
        data={teacherData}
        keyExtractor={(item) => item.id}
        renderItem={renderItems}
        extraData={selectedItem}
      />
    </SafeAreaView>
  );
};

export default Classes;
