import React, { useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { IconButton } from "react-native-paper";
import { Text, View, Modal } from "react-native";
import styles from "../../App/assets/Styles/styles";
import axios from "axios";

//Modal loading
const ModalOnLoad = ({ visible, children }) => {
  return (
    <Modal transparent visible={visible}>
      <View style={styles.modalPopupBackground}>
        <View style={styles.modalPopupContainer}>{children}</View>
      </View>
    </Modal>
  );
};

//main
const MainMenu = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);
  //
  const [memberScore, setMemberScore] = useState([]);

  //data related to the minigames
  const getScoreExpress = async (id) => {
    await axios
      .post("https://sloth-app-backend.herokuapp.com/membersScore", {
        user_id: id,
      })
      .then((response) => {
        const userScore = response.data[0];
        setMemberScore(userScore);
        setLoading(false);
        setVisible(false);
      })
      .catch((error) => {
        console.log("ERROR " + error);
      });
  };

  //pre load - check if user already owns money
  const getCurrencyExpress = async (id) => {
    axios
      .post("https://sloth-app-backend.herokuapp.com/userCurrency", {
        user_id: id,
      })
      .then((response) => {
        // console.log(response.data[0]);
      })
      .catch((error) => {
        console.log("ERROR " + error);
      });
  };

  //load before rendering
  useFocusEffect(
    React.useCallback(() => {
      getScoreExpress(sessionStorage.getItem("user_id"));
      getCurrencyExpress(sessionStorage.getItem("user_id"));
      setVisible(true);
    }, [])
  );

  if (isLoading) {
    return (
      <ModalOnLoad visible={visible}>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.modalPopupText}>Loading . . .</Text>
        </View>
      </ModalOnLoad>
    );
  }
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.mainMenuHeader}>
        <Text style={styles.mainMenuLabel1} name="label1">
          ID: {memberScore.members_score_id}
        </Text>
        <Text style={styles.mainMenuLabel2} name="label2">
          XP: {memberScore.user_xp}
        </Text>
        <Text style={styles.mainMenuLabel3} name="label3">
          Level: {memberScore.user_lvl}
        </Text>
      </View>
      {/* CHARACTER IMG  */}
      <View style={styles.mainMenuCharacterContainer}>
        <Text>Open up MainMenu.js</Text>
      </View>
      {/* BALANCE | SHOP */}
      <View style={styles.mainMenuShopContainer}>
        <IconButton
          disabled={false}
          style={styles.mainMenuMoneyLabel}
          color="black"
          icon="bag-personal"
          size={32}
          onPress={() => localStorage.removeItem("Inventory")}
        ></IconButton>
        <IconButton
          style={styles.mainMenuShopButton}
          color="black"
          icon="store"
          size={32}
          onPress={() => navigation.navigate("ModalStore")}
        />
      </View>
    </View>
  );
};

export default MainMenu;
