import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React, { useContext, useState } from "react";
import { UserContext } from "./UserContext";
import {
  Entypo,
  MaterialCommunityIcons,
  Fontisto,
  MaterialIcons,
  Ionicons,
  FontAwesome,
} from "@expo/vector-icons";
import { useNavigation, useNavigationState } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();
  const routes = useNavigationState((state) => state.routes);
  const activeRoute = routes[routes.length - 1].name;
  const { state, dispatch } = useContext(UserContext);
  const [modalVisible, setModalVisible] = useState(false);
  // console.log("HEADER PHOTO:", state.user.photo);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={[styles.container, styles.elevation]}>
          <View style={[styles.headerView]}>
            <View style={styles.screen}>
              <TouchableOpacity
                style={styles.chevronLeft}
                onPress={() => navigation.goBack()}
              >
                <Entypo name="chevron-thin-left" size={24} color="#1e002a" />
              </TouchableOpacity>
              <Text style={styles.text}>{activeRoute}</Text>
            </View>

            <View>
              <TouchableOpacity
                style={styles.photoView}
                onPress={() => setModalVisible(!modalVisible)}
              >
                {state.user.photo && (
                  <Image
                    source={{ uri: state.user.photo }}
                    style={styles.photo}
                  />
                )}
                {state.user.photo && (
                  <MaterialCommunityIcons
                    style={styles.menuBtn}
                    name="dots-vertical"
                  />
                )}
              </TouchableOpacity>
              {/* <Image style={styles.photo} source={{ uri: state.user.photo }} /> */}
            </View>
          </View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            statusBarTranslucent={false}
            onRequestClose={() => {
              // Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <TouchableOpacity
                  style={styles.cancelView}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <MaterialCommunityIcons style={styles.cancel} name="cancel" />
                </TouchableOpacity>
                <View>
                  {state.user.photo && (
                    <Image
                      source={{ uri: state.user.photo }}
                      style={styles.photoOnModal}
                    />
                  )}
                </View>
                <Text style={styles.nameOnModal}>
                  {state.user.firstName + " " + state.user.lastName}
                </Text>
                <View style={styles.buttonsView}>
                  <TouchableOpacity style={[styles.btnFlex, styles.elevation]}>
                    <Fontisto name="person" style={styles.btnICon} />
                    <Text style={styles.btn}>Personal</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.btnFlex}>
                    <MaterialCommunityIcons
                      name="card-account-details-star"
                      style={styles.btnICon}
                    />
                    <Text style={styles.btn}>Account Details</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.btnFlex}>
                    <MaterialIcons
                      name="notifications-on"
                      style={styles.btnICon}
                    />
                    <Text style={styles.btn}>Notifications</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.btnFlex, styles.purpleBtn]}>
                    <MaterialCommunityIcons
                      name="wallet-giftcard"
                      style={styles.btnICon}
                    />
                    <Text style={[styles.btn, styles.whiteText]}>
                      Gift Cards
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.btnFlex, styles.purpleBtn]}>
                    <MaterialIcons name="history" style={styles.btnICon} />
                    <Text style={[styles.btn, styles.whiteText]}>
                      Activity History
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.btnFlex, styles.purpleBtn]}>
                    <Ionicons name="settings-sharp" style={styles.btnICon} />
                    <Text style={[styles.btn, styles.whiteText]}>Settings</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.btnFlex, styles.purpleBtn]}>
                    <MaterialIcons
                      name="contact-support"
                      style={styles.btnICon}
                    />
                    <Text style={[styles.btn, styles.whiteText]}>
                      Help Center
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.btnFlex, styles.purpleBtn]}>
                    <FontAwesome name="power-off" style={styles.btnICon} />
                    <Text style={[styles.btn, styles.whiteText]}>Sign Out</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    top: 0,
    left: 0,
    right: 0,
    height: "100%",
    marginTop: 0,
    marginBottom: 0,
    backgroundColor: "white",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerView: {
    top: 0,
    left: 0,
    right: 0,
    height: 50,
    marginTop: 0,
    marginBottom: 0,
    backgroundColor: "white",
    flex: 1,
    paddingTop: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  elevation: {
    elevation: 20,
    shadowColor: "black",
    // shadowColor: "red",
    // shadowOffset: { width: -2, height: 4 },
    // shadowOpacity: 0.2,
    // shadowRadius: 3,
  },
  screen: {
    flex: 1,
    flexDirection: "row",
  },
  chevronLeft: {
    paddingLeft: 5,
    paddingRight: 15,
    alignSelf: "center",
  },
  text: {
    fontSize: 17,
    color: "#1e002a",
    fontWeight: "bold",
    alignSelf: "center",
  },
  photoView: {
    marginRight: 5,
    marginTop: 2,
    marginBottom: 2,
    backgroundColor: "transparent",
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignContent: "flex-end",
  },
  photo: {
    height: 34,
    width: 34,
    borderRadius: 20,
    resizeMode: "cover",
    alignSelf: "center",
  },
  name: {
    color: "#1e002a",
    alignSelf: "center",
    marginRight: 3,
    fontWeight: "bold",
  },
  menuBtn: {
    fontSize: 24,
    color: "#1e002a",
    alignSelf: "center",
  },

  centeredView: {
    top: 0,
    right: 0,
    bottom: 0,
    // backgroundColor: "rgba(52, 52, 52, 0.8)"
    backgroundColor: "transparent",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginTop: 0,
  },
  modalView: {
    top: 0,
    right: 0,
    bottom: 0,
    margin: 0,
    height: "100%",
    width: "70%",
    backgroundColor: "white",
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    padding: 6,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.9,
    shadowRadius: 6,
    elevation: 20,
  },
  cancelView: {
    top: 0,
    right: 0,
    alignSelf: "flex-end",
    justifyContent: "center",
  },
  cancel: {
    color: "#59076e",
    fontSize: 40,
    alignSelf: "flex-end",
  },
  photoOnModal: {
    marginTop: "10%",
    height: 120,
    width: 120,
    borderRadius: 20,
    resizeMode: "cover",
    alignSelf: "center",
  },
  nameOnModal: {
    padding: 5,
    fontSize: 16,
    color: "#1e002a",
    alignSelf: "center",
    fontWeight: "bold",
  },
  buttonsView: {
    width: "100%",
    margin: 0,
    marginTop: "20%",
    flex: 1,
    flexDirection: "column",
    alignSelf: "flex-start",
    alignContent: "center",
    justifyContent: "center",
  },
  btnFlex: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    elevation: 20,
    shadowColor: "black",
    padding: 6,
    marginBottom: 4,
    borderRadius: 4,
    borderBottomRightRadius: 20,
  },
  btn: {
    color: "#1e002a",
    alignSelf: "center",
  },
  btnICon: {
    color: "#fcc201",
    paddingRight: 7,
    fontSize: 22,
    alignSelf: "center",
  },
  purpleBtn: {
    borderBottomRightRadius: 20,
    backgroundColor: "#59076e",
  },
  whiteText: {
    color: "white",
  },
});
