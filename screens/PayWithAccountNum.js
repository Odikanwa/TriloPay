import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Header from "../components/Header";
import Input from "../components/Input";
import { PillButton } from "../components/Button";

const PayWithAccountNum = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
      </View>
      <View style={styles.inputs}>
        <Text style={styles.caption}>SEND MONEY</Text>
        <Input placeholder="Amount" keyboardType="default" />
        <Input placeholder="Account Number" keyboardType="default" />
        <Input placeholder="Bank" keyboardType="default" />
        <Input placeholder="Purpose" keyboardType="default" />
        <PillButton
          onPress={() => {
            props.navigation.navigate("Home");
          }}
        >
          <Text style={styles.btnText}>SUBMIT</Text>
        </PillButton>
      </View>
    </View>
  );
};

export default PayWithAccountNum;

const styles = StyleSheet.create({
  container: {
    top: 0,
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
    marginTop: 20,
    height: 50,
    width: "100%",
  },
  inputs: {
    marginTop: "20%",
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "white",
    padding: 10,
    paddingTop: 30,
    paddingBottom: 30,
    borderRadius: 15,
  },
  caption: {
    fontWeight: "bold",
    textAlign: "center",
  },
  btnText: {
    color: "#1e002a",
    fontWeight: "bold",
  },
});
