import { View, Text, StyleSheet } from "react-native";
import React from "react";

export const Notification = (props) => {
  return (
    <View style={styles.notificationView}>
      <Text style={styles.textHeader}>Notifications</Text>
      {props.children}
    </View>
  );
};

export const GreenNotification = (props) => {
  return (
    <View style={[styles.notificationView, styles.green]}>
      <Text style={styles.textHeader}>Notifications</Text>
      {props.children}
    </View>
  );
};

export const RedNotification = (props) => {
  return (
    <View style={[styles.notificationView, styles.red]}>
      <Text style={styles.textHeader}>Notifications</Text>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  notificationView: {
    flex: 1,
    height: "auto",
    marginTop: 15,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 10,
    backgroundColor: "white",
    borderWidth: 1.5,
    borderColor: "#AB8000",
    borderLeftWidth: 8,
    borderLeftColor: "#AB8000",
  },
  green: {
    backgroundColor: "#99e699",
    borderColor: "#99e699",
  },
  red: {
    backgroundColor: "#FFCBD1",
    borderColor: "#FFCBD1",
  },
  textHeader: {
    color: "#1e002a",
    fontWeight: "bold",
    marginTop: 5,
    marginLeft: 10,
  },
});
