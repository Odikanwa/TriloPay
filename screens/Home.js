import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import ActionCard from "../components/ActionCard";
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

const Home = (props) => {
  const [fontsLoaded] = useFonts({
    // Orbitron_500Medium,
    Orbitron_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }
  const handlePress = (path) => {
    props.navigation.navigate(path);
  };
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
            <ActionCard
              onPress={() => {
                props.navigation.navigate("Pay Bills");
              }}
            >
              <View style={styles.cardIcon}>
                <FontAwesome5 name="file-invoice" size={32} color="black" />
              </View>
              <Text style={styles.cardText}>Pay Bills</Text>
            </ActionCard>
            <ActionCard onPress={() => handlePress("Send Money")}>
              <View style={styles.cardIcon}>
                <FontAwesome name="send-o" size={32} color="red" />
              </View>
              <Text style={styles.cardText}>Send Money</Text>
            </ActionCard>
            <ActionCard onPress={() => handlePress("Fund Wallets")}>
              <View style={styles.cardIcon}>
                <MaterialCommunityIcons
                  name="card-account-details-star-outline"
                  size={32}
                  color="red"
                />
              </View>
              <Text style={styles.cardText}>Fund Wallets</Text>
            </ActionCard>
            <ActionCard onPress={() => handlePress("Buy Airtime")}>
              <View style={styles.cardIcon}>
                <MaterialCommunityIcons
                  name="phone-in-talk"
                  size={32}
                  color="green"
                />
              </View>
              <Text style={styles.cardText}>Buy Airtime</Text>
            </ActionCard>
          </View>

          <TouchableOpacity
            style={styles.giftCardView}
            onPress={() => handlePress("Gift Card")}
          >
            <FontAwesome5 name="ribbon" size={24} color="black" />
            <Text style={styles.boldText}>Generate a Gift Card</Text>
            <MaterialCommunityIcons
              name="gift-outline"
              size={24}
              color="black"
            />
          </TouchableOpacity>

          <Text style={[styles.boldText, styles.caption]}>EXTRAS</Text>
          <View style={styles.extras}>
            <ActionCard onPress={() => handlePress("Buy/Sell USD")}>
              <View style={styles.cardIcon}>
                <FontAwesome5 name="dollar-sign" size={24} color="#AB8000" />
              </View>
              <Text style={styles.cardText}>Buy/Sell USD</Text>
            </ActionCard>
            <ActionCard onPress={() => handlePress("Referrals")}>
              <View style={styles.cardIcon}>
                <MaterialCommunityIcons
                  name="account-multiple-plus"
                  size={24}
                  color="black"
                />
              </View>
              <Text style={styles.cardText}>Referrals</Text>
            </ActionCard>
            <ActionCard onPress={() => handlePress("View Transactions")}>
              <View style={styles.cardIcon}>
                <MaterialCommunityIcons name="finance" size={24} color="red" />
              </View>
              <Text style={styles.cardText}>View Transactions</Text>
            </ActionCard>
            <ActionCard onPress={() => handlePress("Support Service")}>
              <View style={styles.cardIcon}>
                <FontAwesome5 name="question" size={24} color="green" />
              </View>
              <Text style={styles.cardText}>Support Service</Text>
            </ActionCard>
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
  },
  card: {
    backgroundColor: "#1e002a",
    flex: 1,
    top: 5,
    bottom: 10,
    marginRight: 5,
    marginLeft: 5,
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
  boldText: {
    fontWeight: "bold",
  },
  caption: {
    margin: 5,
    marginTop: 10,
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
    flex: 1,
    height: "auto",
    marginTop: 15,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 10,
    backgroundColor: "white",
    borderWidth: 1.5,
    borderColor: "#AB8000",
    borderLeftWidth: 8,
    borderLeftColor: "#AB8000",
  },
  textHeader: {
    color: "#1e002a",
    fontWeight: "bold",
    marginTop: 5,
    marginLeft: 10,
  },
  msgText: {
    color: "black",
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },
  actionView: {
    flex: 1,
    height: "auto",
    backgroundColor: "white",
    borderColor: "#1e002a",
    margin: 5,
    marginTop: 5,
    marginBottom: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  },
  cardIcon: {
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: 30,
    padding: 10,
  },
  cardText: {
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
  },
  // shadowProp: {
  //   shadowColor: "red",
  //   shadowOffset: { width: -2, height: 4 },
  //   shadowOpacity: 0.2,
  //   shadowRadius: 3,
  // },
  giftCardView: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#AB8000",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 10,
    margin: 5,
    borderRadius: 10,
  },
  extras: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    borderWidth: 1.5,
    borderColor: "#AB8000",
    margin: 5,
    padding: 10,
    borderRadius: 10,
    justifyContent: "space-between",
  },
});
