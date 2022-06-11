import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Text,
  View,
  FlatList,
  Button,
  CheckBox,
  Web,
  Platform,
} from "react-native";
import { Card, Avatar } from "react-native-paper";
import Typography from "@mui/material/Typography";
//googleapis
// const { google } = require("googleapis");
// import calendarAPI from "../config/google-calendar";
//full Calendar
import { Calendar } from "@fullcalendar/core";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import FullCalendar, { formatDate } from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
//react google calendar api
import ApiCalendar from "react-google-calendar-api";
//react native calendar
import { AgendaListProps, AgendaProps, Agenda } from "react-native-calendars";
//date package
var datefns = require("date-fns");
let today = datefns.format(new Date(), "yyyy-MM-dd");
//webview
import { WebView } from "react-native-webview";

{
  /* <iframe
  src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Europe%2FLuxembourg&showTitle=1&showCalendars=0&showTabs=1&showPrint=0&showDate=1&showNav=1&showTz=1&src=dmY5cGF1NzBtNTExMXVhNzZldTl0b2c1MzhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23F6BF26"
  style="border:solid 1px #777"
  width="800"
  height="600"
  frameborder="0"
  scrolling="no"
></iframe>; */
}

// html: '<iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Europe%2FLuxembourg&showTitle=1&showCalendars=0&showTabs=1&showPrint=0&showDate=1&showNav=1&showTz=1&src=dmY5cGF1NzBtNTExMXVhNzZldTl0b2c1MzhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23F6BF26" style="border:solid 1px #777" width="400px" height="300px" frameborder="0" scrolling="no"/>',
const ModalCalendar = () => {
  // return (
  //   <View>
  //     <WebView
  //       originWhitelist={["*"]}
  //       source={{
  //         uri: "https://calendar.google.com/calendar/embed?src=vf9pau70m5111ua76eu9tog538%40group.calendar.google.com&ctz=Europe%2FLuxembourg",
  //  }}
  //       style={{ marginTop: 20 }}
  //     />
  //   </View>
  // );

  return Platform.OS === "web" ? (
    <iframe
      src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%233F51B5&ctz=Europe%2FLuxembourg&mode=WEEK&showPrint=0&showCalendars=0&showTitle=0&showTz=1&src=dmY5cGF1NzBtNTExMXVhNzZldTl0b2c1MzhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%237986CB"
      width={"100%"}
      height={"100%"}
      frameBorder="0"
      scrolling="no"
    />
  ) : (
    <View style={{ flex: 1 }}>
      <WebView
        source={{
          uri: "https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%233F51B5&ctz=Europe%2FLuxembourg&mode=WEEK&showPrint=0&showCalendars=0&showTitle=0&showTz=1&src=dmY5cGF1NzBtNTExMXVhNzZldTl0b2c1MzhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%237986CB",
        }}
        style={{ marginTop: 22, flex: 1 }}
      />
    </View>
  );
};

export default ModalCalendar;
