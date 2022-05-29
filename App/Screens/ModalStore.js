import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Modal,
  Pressable,
} from "react-native";
import styles from "../../assets/Styles/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { IconButton } from "react-native-paper";
import axios from "axios";

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
    itemType: "body",
    id: "s3",
  },
  {
    itemType: "hand",
    id: "s4",
  },
  {
    itemType: "foot",
    id: "s5",
  },
  {
    itemType: "background",
    id: "s6",
  },
];

let loadedItems; //IMPORTANT

//Modal popup during purchase
const ModalPopUp = ({ visible, children }) => {
  return (
    <Modal transparent visible={visible}>
      <View style={styles.modalPopupBackground}>
        <View style={styles.modalPopupContainer}>{children}</View>
      </View>
    </Modal>
  );
};

//Component inside Flatlist for item type. Upper horizontal bar
const ModalStatus = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.modalItemType, backgroundColor]}
  >
    <Text style={[styles.modalTitle, textColor]}>{item.itemType}</Text>
  </TouchableOpacity>
);

//Card Component inside Flatlist for items. Vertical bar
const ModalItems = ({ item, onPress }) => (
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
            {item.item_name} ({item.registered_items_id})
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {item.item_type}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {item.item_price}
          </Typography>
        </CardContent>
      </Box>
    </CardActionArea>
  </Card>
);

//main
const ModalStore = () => {
  const [selectedStatus, setSelectedStatus] = useState(null);
  //DB data
  const [itemsList, setItemsList] = useState(loadedItems);
  //ModalPopUp visibility
  const [visible, setVisible] = useState(false);
  //item data - ModalPopupContent and DB receive that data
  const [registeredItemImageName, setRegisteredItemImageName] = useState("");
  const [registeredItemType, setRegisteredItemType] = useState("");
  const [registeredItemName, setRegisteredItemName] = useState("");
  const [registeredItemId, setRegisteredItemId] = useState("");
  const [registeredItemPrice, setRegisteredItemPrice] = useState("");

  const getStoreItemsExpress = async () => {
    axios
      .get("http://localhost:19007/registeredItems")
      .then((response) => {
        loadedItems = [];
        for (var i = 0; i < response.data.length; i++) {
          loadedItems.push(response.data[i]);
        }
        setItemsList(loadedItems);
        console.log("ITEMS LISTA SETADO");
      })
      .catch((error) => {
        console.log("ERROR " + error);
      });
  };

  //check inv and add item
  const checkUserInventory = async () => {
    axios
      .get("http://localhost:19007/registeredItems")
      .then((response) => {
        loadedItems = [];
        for (var i = 0; i < response.data.length; i++) {
          loadedItems.push(response.data[i]);
        }
        setItemsList(loadedItems);
        console.log("ITEMS LISTA SETADO");
      })
      .catch((error) => {
        console.log("ERROR " + error);
      });
  };

  //
  //Filter between Status and Items
  const setStatusFilter = ({ itemType, id }) => {
    if (itemType !== "all") {
      setItemsList([
        ...loadedItems.filter((item) => item.item_type === itemType),
      ]);
    } else {
      setItemsList(loadedItems);
    }
    setSelectedStatus(id);
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
        onPress={() => {
          setRegisteredItemImageName(item.image_name);
          setRegisteredItemName(item.item_name);
          setRegisteredItemType(item.item_type);
          setRegisteredItemId(item.registered_items_id);
          setRegisteredItemPrice(item.item_price);
          setVisible(true); // SHOW ModalPopupContent
          console.log(item);
        }}
      />
    );
  };

  //load before rendering
  useEffect(() => {
    // getItems(sessionStorage.getItem("Access_token"));
    getStoreItemsExpress();
    setStatusFilter({ itemType: "all", id: "s1" });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList
          data={listModal}
          keyExtractor={(item) => item.id}
          horizontal={true}
          renderItem={renderItemType}
        />
      </View>
      <ModalPopUp visible={visible}>
        <View style={{ alignItems: "center" }}>
          <View style={styles.modalPopupHeader}>
            <IconButton
              style={{ height: 30, width: 30 }}
              color="black"
              icon="window-close"
              onPress={() => {
                setVisible(false);
              }}
            />
          </View>
          <Text style={styles.modalPopupText}>
            Are you sure you want to buy {registeredItemName}, ID{" "}
            {registeredItemId} for {registeredItemPrice} ?
          </Text>
          <Pressable
            style={styles.modalPopupButton}
            onPress={() => {
              checkUserInventory();
            }}
          >
            <Text style={styles.loginText}>CONFIRM</Text>
          </Pressable>
        </View>
      </ModalPopUp>
      <FlatList
        data={itemsList}
        keyExtractor={(item, index) => item.registered_items_id}
        renderItem={renderItems}
      />
    </SafeAreaView>
  );
};

export default ModalStore;
