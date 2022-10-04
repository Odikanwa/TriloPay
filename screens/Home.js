import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import {
  FontAwesome5,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import {
  Orbitron_400Regular,
  Orbitron_500Medium,
  Orbitron_600SemiBold,
  Orbitron_700Bold,
  Orbitron_800ExtraBold,
  Orbitron_900Black,
} from "@expo-google-fonts/orbitron";

const Home = () => {
  const [fontsLoaded] = useFonts({
    // Orbitron_500Medium,
    Orbitron_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.card}>
            <ImageBackground
              style={styles.cardBackgroundImg}
              imageStyle={{ borderRadius: 10 }}
              resizeMode={"stretch"}
              source={require("../assets/images/cardBackground.jpg")}
            >
              <View style={styles.flexRow}>
                <View style={styles.balanceTextView}>
                  <Text style={styles.balanceText}>₦250, 500.76</Text>
                </View>
                <View style={styles.wifiImg}>
                  <MaterialCommunityIcons
                    name="contactless-payment"
                    size={40}
                    color="white"
                  />
                </View>
              </View>
              <View style={styles.flexRow}>
                <Image
                  style={styles.chipImg}
                  source={require("../assets/images/chip.png")}
                />
                <Text style={styles.violetText}>Debit</Text>
              </View>
              <Text style={styles.acctNumText}>1111 2222 3333 4444</Text>
              <Text style={styles.centeredWhiteText}>
                MICHAEL CHIMEZIE ODIKANWA
              </Text>
              <View style={styles.logoWrapper}>
                <Text style={styles.centeredWhiteText}>
                  Validity: Indefinite
                </Text>
                <View style={styles.logo}>
                  <Image
                    style={styles.logoImg}
                    source={require("../assets/images/triloLogo.png")}
                  />
                  <Text style={styles.logoText}>Trilopay</Text>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.notificationView}>
            <Text style={styles.textHeader}>Notifications</Text>
            <Text style={styles.msgText}>
              Hi Michael, you have one unread message. Read now...
            </Text>
          </View>
          <View style={styles.actionView}>
            <LinearGradient
              // colors={["#c33764", "#1d2671"]}
              colors={[
                "#f2e6ff",
                "#e5ccff",
                "#d9b3ff",
                "#cc99ff",
                "#bf80ff",
                "#b2c6ff",
                "#a54dff",
                "#9933ff",
                "#8c19ff",
                "#7f00ff",
              ]}
              style={[styles.cardBtn, styles.shadowProp]}
            >
              <View style={styles.cardIcon}>
                <FontAwesome5 name="file-invoice" size={32} color="red" />
              </View>
              <Text style={styles.cardText}>Pay Bills</Text>
            </LinearGradient>
            <LinearGradient
              colors={[
                "#f2e6ff",
                "#e5ccff",
                "#d9b3ff",
                "#cc99ff",
                "#bf80ff",
                "#b2c6ff",
                "#a54dff",
                "#9933ff",
                "#8c19ff",
                "#7f00ff",
              ]}
              style={styles.cardBtn}
            >
              <View style={styles.cardIcon}>
                <FontAwesome name="send-o" size={32} color="red" />
              </View>
              <Text style={styles.cardText}>Send Money</Text>
            </LinearGradient>
            <LinearGradient
              colors={[
                "#f2e6ff",
                "#e5ccff",
                "#d9b3ff",
                "#cc99ff",
                "#bf80ff",
                "#b2c6ff",
                "#a54dff",
                "#9933ff",
                "#8c19ff",
                "#7f00ff",
              ]}
              style={styles.cardBtn}
            >
              <View style={styles.cardIcon}>
                <MaterialCommunityIcons
                  name="card-account-details-star-outline"
                  size={32}
                  color="red"
                />
              </View>
              <Text style={styles.cardText}>Fund Wallets</Text>
            </LinearGradient>

            <LinearGradient
              // colors={["#c33764", "#1d2671"]}
              colors={[
                "#f2e6ff",
                "#e5ccff",
                "#d9b3ff",
                "#cc99ff",
                "#bf80ff",
                "#b2c6ff",
                "#a54dff",
                "#9933ff",
                "#8c19ff",
                "#7f00ff",
              ]}
              style={styles.cardBtn}
            >
              <View style={styles.cardIcon}>
                <MaterialCommunityIcons
                  name="phone-in-talk-outline"
                  size={32}
                  color="red"
                />
              </View>
              <Text style={styles.cardText}>Buy Airtime</Text>
            </LinearGradient>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    height: "100%",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: -1,
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
    // alignItems: "center",
    // justifyContent: "center",
  },
  card: {
    backgroundColor: "#1e002a",
    width: "97%",
    top: 5,
    bottom: 10,
    right: 5,
    left: 5,
    borderRadius: 10,
  },
  cardBackgroundImg: {
    width: "100%",
    borderRadius: 20,
  },
  flexRow: {
    height: "auto",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    marginBottom: 5,
  },
  balanceTextView: {
    height: 30,
    width: "auto",
    backgroundColor: "#1e002a",
    paddingBottom: 5,
    paddingRight: 8,
    paddingLeft: 8,

    borderRadius: 20,
    textAlign: "center",
  },
  balanceText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  violetText: {
    color: "#1e002a",
    fontWeight: "bold",
  },
  chipImg: {
    borderRadius: 9,
    height: 40,
  },
  acctNumText: {
    fontFamily: "Orbitron_700Bold",
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "center",
    color: "white",
  },
  centeredWhiteText: {
    fontWeight: "bold",
    color: "white",
    alignSelf: "center",
  },
  logoWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 10,
    marginRight: 10,
  },
  logo: {
    height: "auto",
    flexDirection: "row",
    margin: 10,
  },
  logoImg: {
    height: 30,
    width: 30,
    marginRight: -2,
  },
  logoText: {
    fontWeight: "bold",
    color: "white",
    alignSelf: "center",
  },
  notificationView: {
    width: "97%",
    height: "auto",
    marginTop: 15,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 10,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#1e002a",
  },
  textHeader: {
    color: "#1e002a",
    fontWeight: "bold",
    marginTop: 5,
    marginLeft: 10,
  },
  msgText: {
    color: "#1e002a",
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },
  actionView: {
    height: "auto",
    backgroundColor: "white",
    borderColor: "#1e002a",
    margin: 10,
    marginTop: 5,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  },
  cardBtn: {
    width: "47%",
    marginTop: 5,
    marginBottom: 10,
    // backgroundColor: "#1e002a",
    padding: 10,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 10,
  },
  cardIcon: {
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: 30,
    padding: 10,
  },
  cardText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
  shadowProp: {
    shadowColor: "red",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
