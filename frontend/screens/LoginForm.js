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
import { UserContext } from "../components/Context";
import { INITIAL_STATE, loginReducer } from "../components/Reducer";
import Input from "../components/Input";
import Header from "../components/Header";

const schema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
  password: yup.string().min(4).max(15).required("Password is required"),
});

const LoginForm = (props) => {
  const [state, dispatch] = useReducer(loginReducer, INITIAL_STATE);
  // const [errorText, setErrorText] = useState("");
  // const [id, setId] = useState(null);
  // const route = useRoute();
  const url = "http://192.168.43.35:5000/users/email";

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
        return json;
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handlePress = (path) => {
    props.navigation.navigate(path, state.user._id);
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
    paddingLeft: 10,
    paddingRight: 10,
  },
  caption: {
    fontWeight: "bold",
    textAlign: "center",
  },
});
