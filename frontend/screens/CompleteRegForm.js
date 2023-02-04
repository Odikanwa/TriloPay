import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Modal,
  Button,
  Image,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useRoute } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import Axios from "axios";
import { PillButton } from "../components/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserContext } from "../components/UserContext";
import * as yup from "yup";
import Input from "../components/Input";
import Header from "../components/Header";

const schema = yup.object().shape({
  phoneNumber: yup
    .string()
    .max(11, "Number more than 11 digits")
    .required("Phone number is required"),
  address: yup.string().required("Address is required"),
  BVN: yup
    .string()
    .max(11, "Number more than 11 digits")
    .required("BVN is required"),
  NIN: yup
    .string()
    .max(11, "Number more than 11 digits")
    .required("NIN is required"),
  PIN: yup
    .string()
    .max(4, "PIN is more than 4 digits")
    .required("PIN is required"),
  photo: yup.mixed().required("Please select a file"),
});

const CompleteRegForm = (props) => {
  const { state, dispatch } = useContext(UserContext);
  const [image, setImage] = useState(null);
  const [customerName, setCustomerName] = useState("");

  const route = useRoute();
  const id = route.params.id;
  console.log(id);
  const [modalVisible, setModalVisible] = useState(false);
  const url = `http://192.168.115.13:5000/users/update/${id}`;

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      phoneNumber: "",
      address: "",
      BVN: "",
      NIN: "",
      PIN: "",
      photo: "",
    },
    resolver: yupResolver(schema),
  });

  const pickImage = async () => {
    try {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      console.log(result);
      if (!result.cancelled) {
        setImage(result.uri);
        setModalVisible(false);
      }
      if (result.cancelled) {
        setModalVisible(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmit = async (data) => {
    try {
      const response = await fetch(url, {
        method: "PATCH",
        headers: {
          Accept:
            "application/json, text/plain, multipart/form-data, application/x-www-form-urlencoded, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phoneNumber: data.phoneNumber,
          address: data.address,
          BVN: data.BVN,
          NIN: data.NIN,
          PIN: data.PIN,
          photo: image,
          id,
        }),
      });
      const json = await response.json();
      setModalVisible(true);
      setCustomerName(json.firstName);
      console.log(json);
      return json;
    } catch (error) {
      console.error(error);
    }
  };

  const onModalClick = (path) => {
    setModalVisible(!modalVisible);
    props.navigation.navigate(path);
  };

  return (
    <SafeAreaView>
      <StatusBar style={styles.statusBar} hidden={false} />
      <View style={styles.header}>
        <Header />
      </View>
      <ScrollView>
        <View style={styles.container}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text>Hi {customerName}!</Text>
                <Text>
                  Congratulations. You have completed your registration. We are
                  glad to have you onboard!
                </Text>
                <PillButton onPress={() => onModalClick("Login")}>
                  <Text type="submit" style={styles.btnText}>
                    SIGN IN
                  </Text>
                </PillButton>
              </View>
            </View>
          </Modal>

          {/* <StatusBar style={styles.statusBar} hidden={false} />
          <View style={styles.header}>
            <Header />
          </View> */}
          <View style={styles.inputs}>
            <Controller
              control={control}
              rules={{
                maxLength: 15,
                required: true,
              }}
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Phone Number"
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="phoneNumber"
            />
            {errors.phoneNumber && (
              <Text style={styles.required}>{errors.phoneNumber.message}</Text>
            )}

            <Controller
              control={control}
              rules={{
                maxLength: 100,
                required: true,
              }}
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Address"
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="address"
            />
            {errors.address && (
              <Text style={styles.required}>{errors.address.message}</Text>
            )}

            <Controller
              control={control}
              rules={{
                maxLength: 11,
                required: true,
              }}
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="BVN"
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="BVN"
            />
            {errors.BVN && (
              <Text style={styles.required}>{errors.BVN.message}</Text>
            )}

            <Controller
              control={control}
              rules={{
                maxLength: 11,
                required: true,
              }}
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="NIN"
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="NIN"
            />
            {errors.NIN && (
              <Text style={styles.required}>{errors.NIN.message}</Text>
            )}

            <Controller
              control={control}
              rules={{
                maxLength: 4,
                required: true,
              }}
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Card PIN - 4 digits"
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="PIN"
            />
            {errors.PIN && (
              <Text style={styles.required}>{errors.PIN.message}</Text>
            )}

            <View style={styles.photoView}>
              <View style={styles.uploadBtn}>
                <Button
                  color="#fda50f"
                  title="Upload Photo"
                  onPress={pickImage}
                />
              </View>
              {image && <Image source={{ uri: image }} style={styles.photo} />}
            </View>

            <PillButton title="Submit" onPress={handleSubmit(onSubmit)}>
              <Text type="submit" style={styles.btnText}>
                SUBMIT
              </Text>
            </PillButton>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CompleteRegForm;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: -1,
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#59076e",
  },
  header: {
    marginTop: 25,
    width: "100%",
  },

  inputs: {
    marginTop: "30%",
    marginBottom: "70%",
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "white",
    padding: 10,
    paddingTop: 30,
    paddingBottom: 30,
    borderRadius: 15,
    alignSelf: "center",
  },
  btnText: {
    color: "#1e002a",
    fontWeight: "bold",
  },
  required: {
    color: "red",
  },
  centeredView: {
    height: "100%",
    backgroundColor: "rgba(52, 52, 52, 0.8)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  uploadBtn: {
    marginTop: 10,
    marginBottom: 10,
  },
  photoView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  photo: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginTop: 20,
  },
});
