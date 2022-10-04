import { View, Text, StyleSheet, StatusBar } from "react-native";
import { Navigation } from "@react-navigation/native";
import React from "react";
import { PillButton } from "../components/Button";
import Input from "../components/Input";

const LoginForm = (props) => {
  return (
    <View style={styles.container}>
      <StatusBar style={styles.statusBar} hidden={false} />
      <View>
        <Input placeholder="Username or Email" keyboardType="default" />
        <Input placeholder="Password" keyboardType="default" />
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

export default LoginForm;

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
