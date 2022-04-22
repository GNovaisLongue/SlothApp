import React, { useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import styles from "../Styles/styles";

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

// const Item = ({ item, onPress, backgroundColor, textColor }) => (
//   <TouchableOpacity
//     onPress={onPress}
//     style={[styles.itemData, backgroundColor]}
//   >
//     <Text style={[styles.itemName, textColor]}>{item.name}</Text>
//   </TouchableOpacity>
// );

// const Modal = () => {
//   const [status, setStatus] = useState("All");
//   const [datalist, setDataList] = useState(data);

//   const setStatusFilter = (status) => {
//     if (status !== "All") {
//       setDataList([...data.filter((e) => e.status === status)]);
//     } else {
//       setDataList(data);
//     }
//     setStatus(status);
//   };

//   const renderItem = ({ item, index }) => {
//     return (
//       <View key={index} style={styles.itemRenderModal}>
//         <View style={styles.itemLogo}>
//           {/* <Image
//             style={styles.itemImage}
//             source={{uri:}}
//           /> */}
//         </View>
//         {/* data.item.name */}
//         <View style={styles.itemBody}>
//           <Text style={styles.itemName}>{item.name}</Text>
//         </View>
//         {/* data.item.status */}
//         <View
//           style={[
//             styles.itemStatus,
//             {
//               backgroundColor: item.status === "Feet" ? "#e5848e" : "#69c080",
//             },
//           ]}
//         >
//           <Text>{item.status}</Text>
//         </View>
//       </View>
//     );
//   };

//   return (
//     <SafeAreaView>
//       <View>
//         <View style={styles.listModal}>
//           {listModal.map((e) => (
//             <TouchableOpacity
//               style={[
//                 styles.buttonModal,
//                 status === e.status && styles.buttonModalActive,
//               ]}
//               onPress={() => setStatusFilter(e.status)}
//             >
//               <Text
//                 style={[
//                   styles.textModal,
//                   status === e.status && styles.textModalActive,
//                 ]}
//               >
//                 {e.status}
//               </Text>
//             </TouchableOpacity>
//           ))}
//         </View>
//       </View>
//       <FlatList
//         data={datalist}
//         keyExtractor={(e, i) => i.toString()}
//         renderItem={renderItem}
//       />
//     </SafeAreaView>
//   );
// };

export default Modal;
