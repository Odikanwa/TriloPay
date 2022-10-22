import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { useNavigation, useNavigationState } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();

  const routes = useNavigationState((state) => state.routes);
  const activeRoute = routes[routes.length - 1].name;

  return (
    <View style={styles.container}>
      <View style={styles.screen}>
        <TouchableOpacity
          style={styles.chevronLeft}
          onPress={() => navigation.goBack()}
        >
          <Entypo name="chevron-thin-left" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.text}>{activeRoute}</Text>
      </View>
      <View style={styles.photoView}>
        <Image
          style={styles.photo}
          source={require("../assets/images/profilephoto.png")}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    top: 0,
    left: 0,
    right: 0,
    height: 46,
    marginTop: 0,
    backgroundColor: "#59076e",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  screen: {
    flex: 1,
    flexDirection: "row",
  },
  chevronLeft: {
    paddingLeft: 10,
    paddingRight: 15,
  },
  text: {
    fontSize: 17,
    color: "white",
    fontWeight: "bold",
  },
  photoView: {
    marginRight: 10,
    marginTop: 4,
    marginBottom: 4,
    backgroundColor: "white",
    padding: 7,
    borderRadius: 20,
  },
  photo: {
    height: 25,
    width: 15,
    resizeMode: "cover",
    alignSelf: "center",
  },
});
