import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ScrollView,
} from "react-native";
// import { useRoute } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import Axios from "axios";
import { PillButton } from "../components/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "../components/Input";
import Header from "../components/Header";

const schema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
  password: yup.string().min(4).max(15).required("Password is required"),
});

const LoginForm = () => {
  const [emailInput, setEmailInput] = useState("");
  const [errorText, setErrorText] = useState("");
  // const route = useRoute();
  const url = "http://192.168.43.35:5000/users/email";

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
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
          email: data.email,
          password: data.password,
        }),
      });
      const json = await response.json();
      setEmailInput(json);
      console.log(json);
      return json;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (emailInput == null) {
      setErrorText("Email or password is incorrect");
    }
  }, [errorText]);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <StatusBar style={styles.statusBar} hidden={false} />
          <View style={styles.header}>
            <Header />
          </View>
          <View style={styles.inputs}>
            <Text style={styles.caption}>SIGN IN</Text>
            <Text style={styles.required}>{errorText}</Text>
            <Controller
              control={control}
              rules={{
                maxLength: 100,
                required: true,
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

export default LoginForm;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    top: 23,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: -1,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#59076e",
  },
  header: {
    height: 50,
    width: "100%",
  },
  inputs: {
    marginTop: "25%",
    marginLeft: 10,
    marginRight: 10,
    marginBottom: "60%",
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
  caption: {
    fontWeight: "bold",
    textAlign: "center",
  },
});
