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
import normalizeHeaderName from "axios/lib/helpers/normalizeHeaderName";
import utils from "axios/lib/utils";
import axios from "axios";
import { useFocusEffect } from "@react-navigation/native";

const tempInv = [
  {
    userId: 137280911484911616,
    itemId: 125,
    itemName: "Fancy Suit",
    enable: "equipped",
    itemType: "body",
    imageName: "Fancy_Suit.png",
  },
  {
    userId: 137280911484911616,
    itemId: 139,
    itemName: "Pipe",
    enable: "equipped",
    itemType: "head",
    imageName: "Pipe.png",
  },
  {
    userId: 137280911484911616,
    itemId: 143,
    itemName: "Blue Lightsaber",
    enable: "unequipped",
    itemType: "hand",
    imageName: "blue_lightsaber.png",
  },
  {
    userId: 137280911484911616,
    itemId: 152,
    itemName: "Black Sparrow",
    enable: "equipped",
    itemType: "hand",
    imageName: "Sparrow_Black.png",
  },
  {
    userId: 137280911484911616,
    itemId: 153,
    itemName: "Urban City Bg",
    enable: "equipped",
    itemType: "background",
    imageName: "street_background.png",
  },
  {
    userId: 137280911484911616,
    itemId: 155,
    itemName: "Jeans Converse",
    enable: "unequipped",
    itemType: "foot",
    imageName: "jeans_converse.png",
  },
];

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
      image={require("../../assets/adaptive-icon.png")}
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

  //Not working
  const getUserInv = async (token, userId) => {
    axios
      .get(`localhost:8080/userItem/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log("USER INV");
        setInventoryList(response.data);
      })
      .catch((error) => {
        console.log("INV ERROR");
        console.log("ERROR " + error);
      });
  };

  const getUserInvExpress = async (id) => {
    axios
      .post("http://localhost:19007/userItems", {
        user_id: id,
      })
      .then((response) => {
        console.log(response.data);
        setInventoryList(response.data);
        console.log("INVENTARIO VOLTOU");
      })
      .catch((error) => {
        console.log("ERROR " + error);
      });
  };

  //Not Working
  const getUserCurrency = async (token, userId) => {
    axios
      .get(`http://localhost:8080/membersScore/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log("USER CURRENCY");
        console.log(userId);
        console.log(response.data);
      })
      .catch((error) => {
        console.log("ERROR " + error);
      });
  };

  const renderInventory = ({ item }) => {
    return <Inventory item={item} />;
  };
  /* 
  useFocusEffect(() => {
    // getUserInv(sessionStorage.getItem("Access_token"), 1); //inventory - actual one that must work
    getItemsServidor(1);
  }, []); */

  useEffect(() => {
    let id = 1;
    getUserInvExpress(id);
    // getItems(sessionStorage.getItem("Access_token"));
    // setInventoryList(tempInv); //local test
    // getUserCurrency(sessionStorage.getItem("Access_token"),string(137280911484911616));// would be nice to work too
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
              sx={{
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
              GET for the name here
            </Text>
          </CardContent>
        </Card>
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
