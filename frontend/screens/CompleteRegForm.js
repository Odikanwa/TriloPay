import React, { useState } from "react";
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
import * as yup from "yup";
import Input from "../components/Input";
import Header from "../components/Header";

// const EMAIL_REGEX = /^\S+@\S+\.\S+$/;

//TODO
// Collect Input and update against the users schema(find user using OTP value)

const schema = yup.object().shape({
  phoneNumber: yup.string().required("Phone number is required"),
  address: yup.string().required("Address is required"),
  BVN: yup.string().required("BVN is required"),
  NIN: yup.string().required("NIN is required"),
  photo: yup.mixed().required("Please select a file"),
});

const RegisterForm = () => {
  const [image, setImage] = useState(null);

  const route = useRoute();
  const [modalVisible, setModalVisible] = useState(false);
  const url = "http://192.168.43.35:5000/users/create";

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
          photo: data.photo,
        }),
      });
      const json = await response.json();
      console.log(json);
      setModalVisible(true);
      return json;
    } catch (error) {
      console.error(error);
    }
  };

  //   const mySubmit = () => {
  //     console.log(route.params.otpInput);
  //   };

  return (
    <SafeAreaView>
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
                <Text>Hi Michael!</Text>
                <Text>
                  Thank you for signing up. A code been sent to your email.
                </Text>
                <Input placeholder="Enter Code" />
                <PillButton onPress={() => setModalVisible(!modalVisible)}>
                  <Text type="submit" style={styles.btnText}>
                    SUBMIT
                  </Text>
                </PillButton>
              </View>
            </View>
          </Modal>

          <StatusBar style={styles.statusBar} hidden={false} />
          <View style={styles.header}>
            <Header />
          </View>
          <View style={styles.inputs}>
            <Controller
              control={control}
              rules={{
                maxLength: 100,
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
                maxLength: 100,
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
                maxLength: 100,
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

            <View style={styles.photoView}>
              <Button title="Upload Photo" onPress={pickImage} />
              {image && <Image source={{ uri: image }} style={styles.photo} />}
            </View>

            {/* <Controller
              control={control}
              rules={{
                maxLength: 100,
                required: true,
              }}
              type="file"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Upload Photo"
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="photo"
            />
            {errors.uploadFile && (
              <Text style={styles.required}>File is invalid</Text>
            )} */}

            <PillButton title="Submit">
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

export default RegisterForm;

const styles = StyleSheet.create({
  container: {
    height: "100%",
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
    marginTop: "5%",
    marginLeft: 10,
    marginRight: 10,
    marginBottom: "50%",
    backgroundColor: "white",
    padding: 10,
    paddingTop: 30,
    paddingBottom: 30,
    borderRadius: 15,
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
    marginTop: 22,
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
