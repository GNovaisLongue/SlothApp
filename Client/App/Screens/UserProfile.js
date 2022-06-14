import React, { useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Image,
  ImageBackground,
} from "react-native";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import axios from "axios";
import Images from "../Constants/Images";

//Item card
const Inventory = ({ item, backgroundColor, textColor }) => (
  <Card
    sx={{
      display: "flex",
      padding: 1,
      marginBottom: 0.5,
      backgroundColor: "lightblue",
    }}
  >
    <CardMedia
      title="owl"
      sx={{ width: 145, backgroundColor: "gray" }}
      component="img"
      image={Images.imageItem}
      //item.imageName //crown.png
    />
    <CardContent sx={{ flex: "1 0 auto" }}>
      <Typography component="div" style={{ fontSize: 24, fontWeight: "bold" }}>
        {item.item_name}
      </Typography>
      <Typography
        component="div"
        color="text.secondary"
        style={{ fontSize: 18, fontWeight: "normal" }}
      >
        {item.item_type}
      </Typography>
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
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <ImageBackground
        source={Images.imageBackground}
        style={{ width: "100%", height: "100%", zIndex: 1 }}
      >
        <View
          style={{ flex: 0.45, alignItems: "center", justifyContent: "center" }}
        >
          <View style={styles.infoContainer}>
            <View style={styles.avatarContainer}>
              <Image source={Images.imageUserProfile} style={styles.avatar} />
            </View>
            <View
              style={{
                justifyContent: "stretch",
                marginTop: 10,
                marginBottom: 5,
                marginHorizontal: 10,
              }}
            >
              <View style={{ alignItems: "center", marginBottom: 15 }}>
                <Text style={styles.nameText}>
                  {sessionStorage.getItem("username")}
                </Text>
              </View>
              <View style={{ marginBottom: 5 }}>
                <Text style={styles.currencyText}>
                  Currency: {userCurrency.user_money}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ flex: 0.55, marginHorizontal: 2 }}>
          <FlatList
            data={inventoryList}
            keyExtractor={(item, index) => item.item_id}
            renderItem={renderInventory}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    marginTop: 26,
  },
  avatar: {
    justifySelf: "center",
    alignSelf: "center",
    width: 160,
    height: 160,
    borderRadius: 100,
    borderWidth: 0,
  },
  infoContainer: {
    width: "95%",
    height: "95%",
    backgroundColor: "#FFFFFFB4",
    borderRadius: 4,
    margin: 4,
    shadowColor: "#DFDFDF56",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: "hidden",
  },
  nameText: {
    fontSize: 24,
    fontWeight: "500",
  },
  currencyText: {
    fontSize: 20,
    fontWeight: "450",
  },
});

export default UserProfile;
