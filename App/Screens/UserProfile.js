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
import Avatar from "@material-ui/core/Avatar";
// import Avatar from "react-avatar";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import axios from "axios";

const Inventory = ({ item, onPress, backgroundColor, textColor }) => (
  <Card
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
      //item.imageName //crown.png
    />
    <CardContent sx={{ flex: "1 0 auto" }}>
      <Typography component="div" variant="h5">
        {item.itemName}
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" component="div">
        {item.itemType}
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" component="div">
        {item.itemPrice}
      </Typography>
    </CardContent>
  </Card>
);

//main
const Notifications = () => {
  const [inventoryList, setInventoryList] = useState([]);

  const getItems = async (token) => {
    axios
      .get("http://localhost:8080/registeredItems", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setInventoryList(response.data);
        // return response.data;
      })
      .catch((error) => {
        console.log("ERROR " + error);
      });
  };

  const renderInventory = ({ item }) => {
    return (
      <Inventory
        item={item}
        onPress={() => {
          alert("Just an item!");
        }}
      />
    );
  };

  useEffect(() => {
    getItems(localStorage.getItem("Access_token"));
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 3 }}>
        <Card
          sx={{
            borderRadius: 12,
            minWidth: 512,
            justifyContent: "center",
            textAlign: "center",
            display: "flex",
          }}
        >
          <CardContent>
            <Avatar
              className={{
                width: 200,
                height: 200,
              }}
              src={require("../../assets/Images/Blue_owl.png")}
            />
            <Text
              sx={{
                fontSize: 18,
                fontWeight: "bold",
                letterSpacing: "0.5px",
                marginTop: 8,
                marginBottom: 0,
              }}
            >
              Get for the name here
            </Text>
          </CardContent>
        </Card>
      </View>
      <FlatList
        style={{ flex: 2 }}
        data={inventoryList}
        keyExtractor={(item, index) => item.registeredItemsId}
        renderItem={renderInventory}
      />
    </SafeAreaView>
  );
};

export default Notifications;
