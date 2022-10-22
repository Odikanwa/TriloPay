import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import Header from "../components/Header";
import { PillButton } from "../components/Button";
import { RedNotification } from "../components/Notification";

const SendMoney = (props) => {
  const handlePress = (path) => {
    props.navigation.navigate(path);
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View styles={styles.container}>
          <View style={styles.header}>
            <Header />
          </View>
          <RedNotification>
            <Text style={styles.msgText}>
              Hi Michael, Please be advised that payments to sanctioned
              countries have been restricted. Kindly refer to our sanctioned
              list below...
            </Text>
          </RedNotification>
          <View style={styles.buttons}>
            <PillButton onPress={() => handlePress("Pay with Account")}>
              <Text style={styles.btnText}>PAY WITH ACCOUNT NUMBER</Text>
            </PillButton>
            <PillButton
            // onPress={() => {
            //   props.navigation.navigate("Home");
            // }}
            >
              <Text style={styles.btnText}>PAY WITH QR CODE</Text>
            </PillButton>
            <PillButton
            // onPress={() => {
            //   props.navigation.navigate("Home");
            // }}
            >
              <Text style={styles.btnText}>
                PAY INTO NON-DOMICILIARY ACCOUNT
              </Text>
            </PillButton>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SendMoney;

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
  },
  header: {
    marginTop: 20,
    height: 50,
    width: "100%",
  },
  buttons: {
    margin: 10,
    marginTop: 20,
  },
  btnText: {
    fontWeight: "bold",
  },

  msgText: {
    color: "black",
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },
});
