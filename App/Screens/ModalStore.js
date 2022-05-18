import React, { useState, useEffect, useInsertionEffect } from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
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

const listModal = [
  {
    itemType: "all",
    id: "s1",
  },
  {
    itemType: "head",
    id: "s2",
  },
  {
    itemType: "torso",
    id: "s3",
  },
  {
    itemType: "feet",
    id: "s4",
  },
  {
    itemType: "background",
    id: "s5",
  },
];

const data = [
  {
    name: "A1",
    itemType: "head",
    id: "1",
  },
  {
    name: "A2",
    itemType: "head",
    id: "2",
  },
  {
    name: "A3",
    itemType: "torso",
    id: "3",
  },
  {
    name: "A4",
    itemType: "torso",
    id: "4",
  },
  {
    name: "A5",
    itemType: "feet",
    id: "5",
  },
  {
    name: "A6",
    itemType: "feet",
    id: "6",
  },
  {
    name: "A7",
    itemType: "feet",
    id: "7",
  },
  {
    name: "A8",
    itemType: "background",
    id: "8",
  },
];

let loadedItems = [];

//Component inside Flatlist for item type
//Upper horizontal bar
const ModalStatus = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.modalItemType, backgroundColor]}
  >
    <Text style={[styles.modalTitle, textColor]}>{item.itemType}</Text>
  </TouchableOpacity>
);

//Card Component inside Flatlist for items
//vertical bar
const ModalItems = ({ item, onPress, backgroundColor, textColor }) => (
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
            {item.itemName}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {item.itemType}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {item.itemPrice}
          </Typography>
        </CardContent>
      </Box>
    </CardActionArea>
  </Card>
);

//main
const Modal = () => {
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [filterStatus, setStatus] = useState("All");
  //static local data
  const [dataList, setDataList] = useState(data);
  //DB data
  const [itemsList, setItemsList] = useState(loadedItems);

  const getItems = async (token) => {
    axios
      .get("http://localhost:8080/registeredItems", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        loadedItems.push(response.data);
        // setItemsList(response.data);
      })
      .catch((error) => {
        console.log("ERROR " + error);
      });
  };
  //
  //Filter between Status and Items
  const setStatusFilter = ({ itemType }) => {
    if (itemType !== "all") {
      setDataList([...data.filter((item) => item.itemType === itemType)]);
      // setItemsList([...loadedItems.filter((item) => item.itemType === itemType),]);
    } else {
      setDataList(data);
      // setItemsList(itemsList);
    }
    setStatus(itemType);
  };
  //
  //selection of touchable Status -- horizontal bar
  const renderItemType = ({ item }) => {
    const backgroundColor =
      item.id === selectedStatus ? "steelblue" : "skyblue";
    const color = item.id === selectedStatus ? "white" : "black";
    return (
      <ModalStatus
        item={item}
        onPress={() => {
          setSelectedStatus(item.id);
          setStatusFilter(item);
        }}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };
  //
  //selection of touchable Items -- vertical bar
  const renderItems = ({ item }) => {
    return (
      <ModalItems
        item={item}
        // onPress={() => setSelectedItem(item.id)}
        onPress={() => {
          alert("modal item clicked");
          console.log("ITEMS " + loadedItems);
        }}
        // backgroundColor={{ backgroundColor }}
        // textColor={{ color }}
      />
    );
  };

  useEffect(() => {
    getItems(localStorage.getItem("Access_token"));
    console.log(itemsList);
    console.log(loadedItems.length);
  }, []);
  return (
    <SafeAreaView style={styles.modalcontainer}>
      <View>
        <FlatList
          data={listModal}
          keyExtractor={(item) => item.id}
          horizontal={true}
          renderItem={renderItemType}
          extraData={selectedStatus}
        />
      </View>
      <FlatList
        data={dataList}
        keyExtractor={(item, index) => item.registeredItemsId}
        renderItem={renderItems}
      />
    </SafeAreaView>
  );
};

export default Modal;
