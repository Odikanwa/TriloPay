import { View, Text, StyleSheet, StatusBar, TextInput } from "react-native";
import React from "react";
import { PillButton } from "../components/Button";
import Input from "../components/Input";
import Header from "../components/Header";

const RegisterForm = () => {
  return (
    <View style={styles.container}>
      <StatusBar style={styles.statusBar} hidden={false} />
      <View style={styles.header}>
        <Header />
      </View>
      <View style={styles.inputs}>
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
    top: 23,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: -1,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#59076e",
  },
  header: {
    height: 50,
    width: "100%",
  },
  inputs: {
    marginTop: "15%",
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "white",
    padding: 10,
    paddingTop: 30,
    paddingBottom: 30,
    borderRadius: 15,
  },
  btnText: {
    color: "#1e002a",
    fontWeight: "bold",
  },
});
