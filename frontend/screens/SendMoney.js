import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useContext } from "react";
import { UserContext } from "../components/UserContext";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import Header from "../components/Header";
import { PillButton } from "../components/Button";
import { RedNotification } from "../components/Notification";

const SendMoney = (props) => {
  const { state, dispatch } = useContext(UserContext);
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
              Hi {state.user.firstName}, Please be advised that payments to
              sanctioned countries have been restricted. Kindly refer to our
              sanctioned list below...
            </Text>
          </RedNotification>
          <View style={styles.buttons}>
            <TouchableOpacity
              style={styles.btnFlex}
              onPress={() => handlePress("Pay with Account")}
            >
              <MaterialCommunityIcons name="numeric" style={styles.btnIcon} />
              <Text style={styles.btnText}>PAY WITH ACCOUNT NUMBER</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnFlex}>
              <MaterialCommunityIcons
                name="qrcode-scan"
                style={styles.btnIcon}
              />
              <Text style={styles.btnText}>PAY WITH QR CODE</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnFlex}>
              <MaterialIcons name="tap-and-play" style={styles.btnIcon} />
              <Text style={styles.btnText}>PAY WITH TAP-TO-PAY</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    top: 0,
    left: 0,
    right: 0,
    height: "100%",
    marginTop: 0,
    marginBottom: 0,
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  header: {
    marginTop: 23,
    height: 50,
    width: "100%",
  },
  btnFlex: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    padding: 16,
    marginBottom: 7,
    alignContent: "center",
    justifyContent: "center",
    elevation: 20,
    shadowColor: "black",
    borderRadius: 6,
  },
  buttons: {
    margin: 10,
    marginTop: 20,
  },
  btnIcon: {
    fontSize: 32,
    color: "#fcc201",
    paddingRight: 10,
    alignSelf: "center",
  },
  btnText: {
    fontWeight: "bold",
    color: "#1e002a",
    alignSelf: "center",
  },

  msgText: {
    color: "#1e002a",
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },
});

export default SendMoney;
