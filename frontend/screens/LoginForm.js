import { View, Text, StyleSheet, StatusBar } from "react-native";

import { PillButton } from "../components/Button";
import Input from "../components/Input";
import Header from "../components/Header";

const LoginForm = (props) => {
  return (
    <View style={styles.container}>
      <StatusBar hidden={false} />
      <View style={styles.header}>
        <Header />
      </View>

      <View style={styles.inputs}>
        <Text style={styles.caption}>SIGN IN</Text>
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
