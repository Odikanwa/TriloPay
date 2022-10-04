import { View, Text, StyleSheet, StatusBar, TextInput } from "react-native";
import React from "react";
import { PillButton } from "../components/Button";
import Input from "../components/Input";

const RegisterForm = () => {
  return (
    <View style={styles.container}>
      <StatusBar style={styles.statusBar} hidden={false} />
      <View>
        <Input placeholder="Name & Surname" keyboardType="default" />
        <Input placeholder="Phone Number" keyboardType="default" />
        <Input placeholder="Email" keyboardType="default" />
        <Input placeholder="Password" keyboardType="default" />
        <PillButton>
          <Text style={styles.btnText}>SUBMIT</Text>
        </PillButton>
      </View>
    </View>
  );
};

export default RegisterForm;

const styles = StyleSheet.create({
  container: {
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: -1,
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    color: "#1e002a",
    fontWeight: "bold",
  },
});
