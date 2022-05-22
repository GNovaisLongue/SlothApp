import React from "react";
import {
  Container,
  Content,
  Left,
  Right,
  Header,
  Button,
  Icon,
  Body,
  Title,
  Text,
} from "native-base";
import {
  StyleSheet,
  View,
  FlatList,
  Dimensions,
  ActivityIndicator,
  Platform,
} from "react-native";
// import styles from "../../assets/Styles/styles";
import _ from "lodash";
// import I18n from "react-native-i18n";
import Calendar from "@ericz1803/react-google-calendar";
import { css } from "@emotion/react";

const API_KEY = "AIzaSyARiB5ib1KWqRYpAIVQmjH3ZxB1dtrH1r8";
let calendars = [
  {
    calendarId: "vf9pau70m5111ua76eu9tog538@group.calendar.google.com",
  },
];
let styles = {
  //you can use object styles (no import required)
  calendar: {
    borderWidth: "3px", //make outer edge of calendar thicker
  },
  /* highlight today by making the text red and giving it a red border */
  today: {
    color: "red",
    border: "4px",
  },
};

const language = "EN";

const ModalCalendar = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text>Tab 1 - ModalCalendar.js</Text>
      <View>
        <Calendar
          apiKey={API_KEY}
          calendars={calendars}
          styles={styles}
          language={language}
        />
      </View>
    </View>
  );
};

export default ModalCalendar;
