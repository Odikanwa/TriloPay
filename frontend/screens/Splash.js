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
      <StatusBar hidden={true} backgroundColor="#4b025e" style="light" />
      <View style={styles.logoDiv}>
        <View style={styles.logo}>
          <Image
            style={styles.img}
            source={require("../assets/images/icon2.png")}
          />
          <Text style={styles.companyName}>Trilopay</Text>
        </View>
        <Text style={styles.slogan}> Your money, your bank !</Text>
      </View>
      <View style={styles.btnsView}>
        <PillButton
          onPress={() => {
            props.navigation.navigate("Register");
          }}
        >
          <Text style={styles.btnText}>CREATE NEW ACCOUNT</Text>
        </PillButton>
        <PillButton
          onPress={() => {
            props.navigation.navigate("Login");
          }}
        >
          <Text style={styles.btnText}>SIGN IN</Text>
        </PillButton>
      </View>
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
  logoDiv: { marginTop: "20%", marginBottom: "20%" },
  logo: {
    width: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: -30,
  },
  img: {
    height: 80,
    width: 80,
    marginRight: -5,
    marginBottom: 0,
  },
  companyName: {
    marginTop: -10,
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 0,
    color: "gold",
  },
  slogan: {
    marginTop: 0,
    fontStyle: "italic",
    fontWeight: "600",
    color: "gold",
    marginLeft: "35%",
  },
  // btnsView: {
  //   marginTop: "30%",
  // },
  btnText: {
    color: "#1e002a",
    fontWeight: "bold",
  },
});
