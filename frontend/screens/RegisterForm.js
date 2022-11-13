import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import Axios from "axios";
import { PillButton } from "../components/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "../components/Input";
import Header from "../components/Header";

const EMAIL_REGEX = /^\S+@\S+\.\S+$/;

const schema = yup.object().shape({
  firstName: yup.string().required("Fist name required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email().required("Email is required"),
  password: yup
    .string()
    .min(4, "Password is too short")
    .max(15, "Password is too long")
    .required(),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});

const RegisterForm = () => {
  const url = "http://192.168.43.35:5000/users/create";

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Accept:
            "application/json, text/plain, multipart/form-data, application/x-www-form-urlencoded, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          password: data.password,
          confirmPassword: data.confirmPassword,
        }),
      });
      const json = await response.json();
      console.log(json);
      return json;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
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
                  placeholder="First name"
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="firstName"
            />
            {errors.firstName && (
              <Text style={styles.required}>{errors.firstName.message}</Text>
            )}

            <Controller
              control={control}
              rules={{
                maxLength: 100,
                required: true,
              }}
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Last name"
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="lastName"
            />
            {errors.lastName && (
              <Text style={styles.required}>{errors.lastName.message}</Text>
            )}

            <Controller
              control={control}
              rules={{
                maxLength: 100,
                required: {
                  value: true,
                  message: "This is required",
                },
              }}
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Email"
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="email"
            />
            {errors.email && (
              <Text style={styles.required}>{errors.email.message}</Text>
            )}

            <Controller
              control={control}
              rules={{
                maxLength: 100,
                required: true,
              }}
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Password"
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="password"
            />
            {errors.password && (
              <Text style={styles.required}>{errors.password.message}</Text>
            )}

            <Controller
              control={control}
              rules={{
                maxLength: 100,
                required: true,
              }}
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Confirm Password"
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="confirmPassword"
            />
            {errors.confirmPassword && (
              <Text style={styles.required}>Passwords should match!</Text>
            )}

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
});
