import React, { useState, useEffect } from "react";
import { IconButton } from "react-native-paper";
import { Text, View } from "react-native";
import styles from "../../assets/Styles/styles";
import axios from "axios";
const JSONBigInt = require("json-bigint")({ storeAsString: true });

const MainMenu = ({ navigation }) => {
  const [memberScore, setMemberScore] = useState([]);

  const getScoreExpress = async (id) => {
    //split bigint into to integers
    // let part1 = id.slice(0, 8);
    // let part2 = id.slice(8);
    // console.log(parseInt(part1) + "" + parseInt(part2));
    axios
      .post("http://localhost:19007/membersScore", {
        user_id: id,
      })
      .then((response) => {
        setMemberScore(response.data);
        console.log("SCORE VOLTOU");
        console.log(response.data);
      })
      .catch((error) => {
        console.log("ERROR " + error);
      });
  };

  const getUserInv = async (token, userId) => {
    await axios
      .get(`http://localhost:8080/membersScore/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setMemberScore(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log("ERROR " + error);
      });
  };

  //load before rendering
  useEffect(() => {
    let user_id = "352507043514679307";
    getScoreExpress(user_id);
    // getUserInv(sessionStorage.getItem("Access_token"), 1);
  }, []);
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.mainMenuHeader}>
        <Text style={styles.mainMenuLabel1} name="label1">
          {memberScore.members_score_id}
        </Text>
        <Text style={styles.mainMenuLabel2} name="label2">
          {memberScore.user_lvl}
        </Text>
        <Text style={styles.mainMenuLabel3} name="label3">
          {memberScore.user_xp}
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
