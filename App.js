import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Splash from "./screens/Splash";
import Home from "./screens/Home";
import RegisterForm from "./screens/RegisterForm";
import LoginForm from "./screens/LoginForm";

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Register" component={RegisterForm} />
        <Stack.Screen name="Login" component={LoginForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
