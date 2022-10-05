import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";

const ActionCard = (props) => {
  return (
    <LinearGradient
      {...props}
      colors={[
        "#f2e6ff",
        "#e5ccff",
        "#d9b3ff",
        "#cc99ff",
        "#bf80ff",
        "#b2c6ff",
        "#a54dff",
        "#9933ff",
        "#8c19ff",
        "#7f00ff",
      ]}
      style={styles.cardBtn}
    >
      {props.children}
    </LinearGradient>
  );
};

export default ActionCard;

const styles = StyleSheet.create({
  cardBtn: {
    width: "48%",
    marginTop: 5,
    marginBottom: 10,
    // backgroundColor: "#1e002a",
    padding: 10,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 10,
    shadowColor: "red",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
});
