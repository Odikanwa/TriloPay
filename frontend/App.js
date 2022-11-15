import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Splash from "./screens/Splash";
import Home from "./screens/Home";
import RegisterForm from "./screens/RegisterForm";
import CompleteRegForm from "./screens/CompleteRegForm";
import LoginForm from "./screens/LoginForm";
import BuyAirtime from "./screens/BuyAirtime";
import BuySellUSD from "./screens/BuySellUSD";
import FundWallets from "./screens/FundWallets";
import PayBills from "./screens/PayBills";
import Referrals from "./screens/Referrals";
import SendMoney from "./screens/SendMoney";
import SupportService from "./screens/SupportService";
import ViewTransactions from "./screens/ViewTransactions";
import GiftCard from "./screens/GiftCard";
import PayWithAccountNum from "./screens/PayWithAccountNum";

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#59076e",
          },
          headerShown: false,
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Register" component={RegisterForm} />
        <Stack.Screen
          name="Complete Registration"
          component={CompleteRegForm}
        />
        <Stack.Screen name="Login" component={LoginForm} />
        <Stack.Screen name="Buy Airtime" component={BuyAirtime} />
        <Stack.Screen name="Buy/Sell USD" component={BuySellUSD} />
        <Stack.Screen name="Fund Wallets" component={FundWallets} />
        <Stack.Screen name="Pay Bills" component={PayBills} />
        <Stack.Screen name="Referrals" component={Referrals} />
        <Stack.Screen name="Send Money" component={SendMoney} />
        <Stack.Screen name="Support Service" component={SupportService} />
        <Stack.Screen name="View Transactions" component={ViewTransactions} />
        <Stack.Screen name="Gift Card" component={GiftCard} />
        <Stack.Screen name="Pay with Account" component={PayWithAccountNum} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
