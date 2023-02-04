import React, { useState, useContext, useReducer } from "react";
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
import { PillButton } from "../components/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { UserContext, UserProvider } from "../components/UserContext";
import { INITIAL_STATE, loginReducer } from "../components/Reducer";
import Input from "../components/Input";
import Header from "../components/Header";

const schema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
  password: yup.string().min(4).max(15).required("Password is required"),
});

const LoginForm = (props) => {
  const { state, dispatch } = useContext(UserContext);
  // const [state, dispatch] = useReducer(loginReducer, INITIAL_STATE);
  // const [errorText, setErrorText] = useState("");
  // const [id, setId] = useState(null);
  // const route = useRoute();
  const url = "http://192.168.115.13:5000/users/email";

  const {
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
      dispatch({ type: "LOGIN_START" });
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
      if (json.value == "null") {
        dispatch({ type: "LOGIN_ERROR" });
        handlePress("Login");
      } else {
        console.log("@JSON RESPONSE: ", json);
        dispatch({ type: "LOGIN_SUCCESS", payload: json });
        console.log("@STATE: ", state);
        handlePress("Home");
      }
      return json;
    } catch (error) {
      console.error(error);
    }
  };

  const handlePress = (path) => {
    setTimeout(() => props.navigation.navigate(path), 20);
  };

  return (
    <SafeAreaView>
      <StatusBar style={styles.statusBar} hidden={false} />
      <View style={styles.header}>
        <Header />
      </View>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.inputs}>
            <Text style={styles.caption}>SIGN IN</Text>
            <Text style={styles.required}>{state.errorText}</Text>
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
    top: 0,
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
    marginTop: 25,
    width: "100%",
  },
  inputs: {
    marginTop: "40%",
    marginBottom: "100%",
    marginLeft: 10,
    marginRight: 10,
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
    paddingLeft: 10,
    paddingRight: 10,
  },
  caption: {
    fontWeight: "bold",
    textAlign: "center",
  },
});
