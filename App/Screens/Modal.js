import React, { useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import styles from "../../assets/Styles/styles";

const listModal = [
  {
    status: "All",
    id: "s1",
  },
  {
    status: "Head",
    id: "s2",
  },
  {
    status: "Torso",
    id: "s3",
  },
  {
    status: "Feet",
    id: "s4",
  },
  {
    status: "Background",
    id: "s5",
  },
];

const data = [
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

//Component inside Flatlist for item type
//Upper horizontal bar
const ModalStatus = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.modalItemType, backgroundColor]}
  >
    <Text style={[styles.modalTitle, textColor]}>{item.status}</Text>
  </TouchableOpacity>
);

//Component inside Flatlist for items
//vertical bar
const ModalItems = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.modalItemType, backgroundColor]}
  >
    <Text style={[styles.modalTitle, textColor]}>{item.name}</Text>
  </TouchableOpacity>
);

const Modal = () => {
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const [filterStatus, setStatus] = useState("All");
  const [datalist, setDataList] = useState(data);
  //
  //Filter between Status and Items
  const setStatusFilter = ({ status }) => {
    if (status !== "All") {
      setDataList([...data.filter((item) => item.status === status)]);
    } else {
      setDataList(data);
    }
    setStatus(status);
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
    const backgroundColor =
      item.id === selectedItem ? "steelblue" : "powderblue";
    const color = item.id === selectedItem ? "white" : "black";
    return (
      <ModalItems
        item={item}
        onPress={() => setSelectedItem(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

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
        data={datalist}
        keyExtractor={(item) => item.id}
        renderItem={renderItems}
        extraData={selectedItem}
      />
    </SafeAreaView>
  );
};

export default Modal;
