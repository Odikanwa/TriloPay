import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useMemo, useReducer } from "react";
import Splash from "./screens/Splash";
import Home from "./screens/Home.js";
import RegisterForm from "./screens/RegisterForm.js";
import CompleteRegForm from "./screens/CompleteRegForm.js";
import LoginForm from "./screens/LoginForm.js";
import BuyAirtime from "./screens/BuyAirtime.js";
import BuySellUSD from "./screens/BuySellUSD.js";
import FundWallets from "./screens/FundWallets.js";
import PayBills from "./screens/PayBills.js";
import Referrals from "./screens/Referrals.js";
import SendMoney from "./screens/SendMoney.js";
import SupportService from "./screens/SupportService.js";
import ViewTransactions from "./screens/ViewTransactions.js";
import GiftCard from "./screens/GiftCard.js";
import PayWithAccountNum from "./screens/PayWithAccountNum.js";
import { UserProvider } from "./components/UserContext.js";
import { INITIAL_STATE, loginReducer } from "./components/Reducer.js";

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <UserProvider>
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
    </UserProvider>
  );
};

export default App;
