import { View, TextInput, StyleSheet } from "react-native";
import React from "react";

const Input = (props) => {
  return <TextInput {...props} style={styles.input} />;
};

export default Input;

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 250,
    margin: 6,
    borderWidth: 1,
    padding: 10,
    borderColor: "#AB8000",
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 2,
  },
});
