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
} from "react-native";
import { Card, Avatar } from "react-native-paper";
import Typography from "@mui/material/Typography";
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

var datefns = require("date-fns");
let today = datefns.format(new Date(), "yyyy-MM-dd");

const ModalCalendar = () => {
  return (
    <View>
      <FullCalendar plugins={[dayGridPlugin]} />
    </View>
  );
};

export default ModalCalendar;
