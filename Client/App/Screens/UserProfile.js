import React, { useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
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
import Avatar from "@material-ui/core/Avatar";
// import Avatar from "react-avatar";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import axios from "axios";

const imageItem = require("../../App/assets/adaptive-icon.png");
const imageUserProfile = require("../../App/assets/Images/Blue_owl.png");

const Inventory = ({ item, backgroundColor, textColor }) => (
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
      image={imageItem}
      //item.imageName //crown.png
    />
    <CardContent sx={{ flex: "1 0 auto" }}>
      <Typography component="div" variant="h5">
        {item.item_name} ({item.item_name})
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" component="div">
        {item.item_type}
      </Typography>
      {/* <Typography variant="subtitle1" color="text.s econdary" component="div">
        {item.itemPrice}
      </Typography> */}
    </CardContent>
  </Card>
);

//main
const UserProfile = () => {
  const [inventoryList, setInventoryList] = useState([]);
  const [userCurrency, setCurrency] = useState([]);

  const getUserInvExpress = async (id) => {
    //http://localhost:19007
    axios
      .post("https://sloth-app-backend.herokuapp.com/userItems", {
        user_id: id,
      })
      .then((response) => {
        setInventoryList(response.data);
      })
      .catch((error) => {
        console.log("ERROR " + error);
      });
  };

  const getCurrencyExpress = async (id) => {
    axios
      .post("https://sloth-app-backend.herokuapp.com/userCurrency", {
        user_id: id,
      })
      .then((response) => {
        setCurrency(response.data[0]);
      })
      .catch((error) => {
        console.log("ERROR " + error);
      });
  };

  const renderInventory = ({ item }) => {
    return <Inventory item={item} />;
  };

  useFocusEffect(
    React.useCallback(() => {
      getUserInvExpress(sessionStorage.getItem("user_id"));
      getCurrencyExpress(sessionStorage.getItem("user_id"));
    }, [])
  );

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
              sx={{
                width: 200,
                height: 200,
              }}
              src={imageUserProfile}
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
              GET for the name here
            </Text>
          </CardContent>
        </Card>
      </View>
      <View style={{ flex: 1 }}>
        <Text>Currency: {userCurrency.user_money}</Text>
      </View>
      <FlatList
        style={{ flex: 2 }}
        data={inventoryList}
        keyExtractor={(item, index) => item.item_id}
        renderItem={renderInventory}
      />
    </SafeAreaView>
  );
};

export default UserProfile;
