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

let loadedItems; //IMPORTANT Array
let message;

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
  const [userId, setUserId] = useState("");
  const [registeredItemImageName, setRegisteredItemImageName] = useState("");
  const [registeredItemType, setRegisteredItemType] = useState("");
  const [registeredItemName, setRegisteredItemName] = useState("");
  const [registeredItemId, setRegisteredItemId] = useState("");
  const [registeredItemPrice, setRegisteredItemPrice] = useState("");
  //button text - if user already has item or not
  const [hasItem, setHasItem] = useState(false);
  const [popupLabel, setLabel] = useState("");

  //Load Store
  const getStoreItemsExpress = async () => {
    axios
      .get("http://localhost:19007/registeredItems")
      .then((response) => {
        loadedItems = [];
        for (var i = 0; i < response.data.length; i++) {
          loadedItems.push(response.data[i]);
        }
        setItemsList(loadedItems);
      })
      .catch((error) => {
        console.log("ERROR " + error);
      });
  };

  //check inv and add item
  const checkUserInventory = async (item) => {
    //userInvInsert
    await axios
      .post("http://localhost:19007/checkUserInv", {
        user_id: userId,
        registered_items_id: item.registered_items_id,
      })
      .then((response) => {
        message = response.data.message;
        if (response.data.result.length === 0) {
          //EDIT LATER - label delayed ---------------------------------
          const label = `Are you sure you want to buy '${item.item_name}', ID ${item.registered_items_id} for ${item.item_price} ?`;
          setLabel(label);
          setHasItem(false);
        } else {
          //the user already has the item
          setLabel(message);
          setHasItem(true);
          console.log(hasItem);
        }
        //show modal popup
        setVisible(true);
      })
      .catch((error) => {
        console.log("ERROR " + error);
      });
  };

  //check money and buy item
  const checkUserMoney = async () => {
    axios
      .post("http://localhost:19007/transaction", {
        user_id: userId,
        image_name: registeredItemImageName,
        item_name: registeredItemName,
        item_type: registeredItemType,
        registered_items_id: registeredItemId,
      })
      .then((response) => {
        message = response.data.message;
        // setLabel(message);
        alert(message);
        setVisible(false);
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
          //save some info we need
          setRegisteredItemImageName(item.image_name);
          setRegisteredItemName(item.item_name);
          setRegisteredItemType(item.item_type);
          setRegisteredItemId(item.registered_items_id);
          setRegisteredItemPrice(item.item_price);
          //Check if user already has item
          checkUserInventory(item);
          console.log(item);
        }}
      />
    );
  };

  //load before rendering
  useEffect(() => {
    setUserId(sessionStorage.getItem("user_id"));
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
      {/* popup */}
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
          <Text style={styles.modalPopupText}>{popupLabel}</Text>
          <Pressable
            disabled={hasItem}
            style={styles.modalPopupButton}
            onPress={() => {
              checkUserMoney();
            }}
          >
            <Text style={styles.loginText}>
              {hasItem ? "You already have this item!" : "CONFIRM"}
            </Text>
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
