import { View, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

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
    backgroundColor: "#AB8000",
    padding: 10,
    marginVertical: 15,
    borderRadius: 20,
  },
});
