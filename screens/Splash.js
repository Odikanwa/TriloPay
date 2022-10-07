import { StatusBar } from "expo-status-bar";
import React from "react";
import { PillButton } from "../components/Button";
import { StyleSheet, Text, View, Image } from "react-native";

const Splash = (props) => {
  React.useLayoutEffect(() => {
    props.navigation.setOptions({ headerShown: false });
  }, [props.navigation]);

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} backgroundColor="#1f002b" style="light" />
      <View style={styles.logo}>
        <Image
          style={styles.img}
          source={require("../assets/images/triloLogo.png")}
        />
        <Text style={styles.companyName}>Trilopay</Text>
      </View>
      <PillButton
        onPress={() => {
          props.navigation.navigate("Register");
        }}
      >
        <Text style={styles.btnText}>REGISTER FOR A NEW ACCOUNT</Text>
      </PillButton>
      <PillButton
        onPress={() => {
          props.navigation.navigate("Login");
        }}
      >
        <Text style={styles.btnText}>SIGN IN</Text>
      </PillButton>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: -1,
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#1e002a",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    height: 50,
    width: 50,
    marginRight: -5,
  },
  companyName: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 0,
    color: "gold",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#AB8000",
    padding: 10,
    marginVertical: 10,
    borderRadius: 20,
  },
  btnText: {
    color: "#1e002a",
    fontWeight: "bold",
  },
  statusBar: {
    color: "red",
  },
});
