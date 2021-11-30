import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import styles from "../Styles/styles";

const listModal = [
  {
    status: "All",
  },
  {
    status: "Head",
  },
  {
    status: "Torso",
  },
  {
    status: "Feet",
  },
  {
    status: "Background",
  },
];

const data = [
  {
    name: "A1",
    status: "Head",
  },
  {
    name: "A2",
    status: "Head",
  },
  {
    name: "A3",
    status: "Torso",
  },
  {
    name: "A4",
    status: "Torso",
  },
  {
    name: "A5",
    status: "Feet",
  },
  {
    name: "A6",
    status: "Feet",
  },
  {
    name: "A7",
    status: "Feet",
  },
  {
    name: "A8",
    status: "background",
  },
];

const Modal = () => {
  const [status, setStatus] = useState("All");
  const [datalist, setDataList] = useState(data);

  const setStatusFilter = (status) => {
    if (status !== "All") {
      setDataList([...data.filter((e) => e.status === status)]);
    } else {
      setDataList(data);
    }
    setStatus(status);
  };

  const renderItem = ({ item, index }) => {
    return (
      <View key={index} style={styles.itemRenderModal}>
        <View style={styles.itemLogo}>
          {/* <Image
            style={styles.itemImage}
            source={{uri:}}
          /> */}
        </View>

        <View style={styles.itemBody}>
          <Text style={styles.itemName}>{item.name}</Text>
        </View>

        <View
          style={[
            styles.itemStatus,
            {
              backgroundColor: item.status === "Purple" ? "#e5848e" : "#69c080",
            },
          ]}
        >
          <Text>{item.status}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listModal}>
        {listModal.map((e) => (
          <TouchableOpacity
            style={[
              styles.buttonModal,
              status === e.status && styles.buttonModalActive,
            ]}
            onPress={() => setStatusFilter(e.status)}
          >
            <Text
              style={[
                styles.textModal,
                status === e.status && styles.textModalActive,
              ]}
            >
              {e.status}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <StatusBar style="auto" />
      <FlatList
        data={datalist}
        keyExtractor={(e, i) => i.toString()}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

export default Modal;
