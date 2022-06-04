import React, { useEffect, useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { AgendaListProps, AgendaProps, Agenda } from "react-native-calendars";
import { Card, Avatar } from "react-native-paper";
import Typography from "@mui/material/Typography";
// import { format } from "date-fns";

var datefns = require("date-fns");
let today = datefns.format(new Date(), "yyyy-MM-dd");

const ModalCalendar = () => {
  const [items, setItems] = useState({});
  const [currentDay, setCurrentDay] = useState("");

  const getCurrentDate = () => {
    setCurrentDay(today);
    console.log("FUNCTION");
    console.log(today);
    console.log(currentDay);
  };
  const timeToString = (time) => {
    const date = new Date(time);
    return date.toISOString().split("T")[0];
  };

  const loadItems = (day) => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
        if (!items[strTime]) {
          items[strTime] = [];
          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: "Item for " + strTime + " #" + j,
              height: Math.max(50, Math.floor(Math.random() * 150)),
            });
          }
        }
      }
      const newItems = {};
      Object.keys(items).forEach((key) => {
        newItems[key] = items[key];
      });
      setItems(newItems);
    }, 1000);
  };

  const renderItem = (item) => {
    return (
      <TouchableOpacity style={{ marginRight: 10, marginTop: 15 }}>
        <Card>
          <Card.Content>
            <View
              style={{
                backgroundColor: "silver",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography>{item.name}</Typography>
              <Avatar.Text label="J" />
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    getCurrentDate();
    console.log("CONSOLE LOG");
    console.log(currentDay);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        selected={String(today)}
        renderItem={renderItem}
      />
    </View>
  );
};

export default ModalCalendar;
