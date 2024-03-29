import { View, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { UserContext } from "./UserContext";

export const PillButton = (props) => {
  return (
    <View>
      <TouchableOpacity style={styles.button} {...props}>
        {props.children}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#fcc201",
    color: "#1e002a",
    padding: 10,
    marginVertical: 10,
    borderRadius: 20,
  },
});
