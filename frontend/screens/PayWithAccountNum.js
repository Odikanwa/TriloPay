import {
  View,
  Text,
  StyleSheet,
  Modal,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useState, useContext, useEffect } from "react";
import Header from "../components/Header";
import Input from "../components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRoute } from "@react-navigation/native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { useForm, Controller } from "react-hook-form";
import { PillButton } from "../components/Button";
import { UserContext } from "../components/UserContext";

const schema = yup.object().shape({
  amount: yup.string().max(16, "Invalid amount").required("amount is required"),
  accountNumber: yup
    .string()
    .max(11, "Invalid Account Number")
    .required("Account number is required"),
  bankName: yup
    .string()
    .max(50, "Invalid Bank Name")
    .required("Bank name is required"),
  purpose: yup
    .string()
    .max(100, "Description is too long")
    .required("This is required"),
});

const PayWithAccountNum = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [receiptModalVisible, setReceiptModalVisible] = useState(false);
  const [PINinput, setPINinput] = useState("");
  const [id, setId] = useState("");
  const [balance, setBalance] = useState("");
  const [senderBalance, setSenderBalance] = useState("");
  const [amount, setAmount] = useState("");
  const { state, dispatch } = useContext(UserContext);

  const getAcctNumURL =
    "http://192.168.115.13:5000/users/findAccountNumber/accountNumber";
  const sendMoneyURL = `http://192.168.115.13:5000/users/update/sendMoney/${id}`;
  const updateBalanceURL = `http://192.168.115.13:5000/users/update/sendMoney/updateBalance/${state.user._id}`;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      amount: "",
      accountNumber: "",
      bankName: "",
      purpose: "",
    },
    resolver: yupResolver(schema),
  });

  const handlePress = (path) => {
    props.navigation.navigate(path, { senderBalance, amount });
  };

  const onSubmit = async (data) => {
    try {
      const response = await fetch(getAcctNumURL, {
        method: "POST",
        headers: {
          Accept:
            "application/json, text/plain, multipart/form-data, application/x-www-form-urlencoded, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          accountNumber: data.accountNumber,
        }),
      });
      const json = await response.json();
      console.log("JSON VALUE: ", json);
      setId(json._id);
      setBalance(json.balance);
      console.log("JSON BALANCE: ", json.balance);
      setModalVisible(true);
      setReceiptModalVisible(false);
      return json;
    } catch (error) {
      console.error(error);
    }
  };

  const onSendMoney = async (data) => {
    // if (state.user.PIN !== PINinput && errors.PIN !== null) {
    //   dispatch({ type: "INCORRECT_PIN" });
    // }
    if (state.user.PIN == PINinput && errors.PIN == null) {
      try {
        const response = await fetch(sendMoneyURL, {
          method: "PATCH",
          headers: {
            Accept:
              "application/json, text/plain, multipart/form-data, application/x-www-form-urlencoded, */*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount: data.amount,
            accountNumber: data.accountNumber,
            bankName: data.bankName,
            purpose: data.purpose,
            receiverBalance: balance,
            // senderId: state.user._id,
            // senderBalance: state.user.balance,
          }),
        });
        const json = await response.json();
        console.log(json);
        setAmount(data.amount);
        setModalVisible(false);
        setReceiptModalVisible(true);
        updateBalance(data);
        // dispatch({ type: "UPDATE_STATE", payload: json });
        return json;
      } catch (error) {
        console.error(error);
      }
    }
    if (
      (state.user.PIN.length >= 4 && state.user.PIN !== PINinput) ||
      errors.PIN !== null
    ) {
      dispatch({ type: "INCORRECT_PIN" });
    }
  };

  const updateBalance = async (data) => {
    try {
      const response = await fetch(updateBalanceURL, {
        method: "PATCH",
        headers: {
          Accept:
            "application/json, text/plain, multipart/form-data, application/x-www-form-urlencoded, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          senderId: state.user._id,
          senderBalance: state.user.balance,
          amount: data.amount,
        }),
      });
      const json = await response.json();
      setSenderBalance(json.balance);
      dispatch({ type: "UPDATE_BALANCE", payload: json });
      return json;
    } catch (error) {
      console.log("UpdateBalance function failed: ", error);
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Header />
      </View>
      <ScrollView>
        <View style={styles.container}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            statusBarTranslucent={true}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text>Hi {state.user.firstName}!</Text>
                <Text>Please enter your PIN</Text>
                <Text style={styles.required}>{state.errorText}</Text>
                <Controller
                  control={control}
                  rules={{
                    maxLength: 4,
                    required: true,
                  }}
                  render={({ field: { onChange, value } }) => (
                    <Input
                      placeholder="Enter PIN"
                      onChangeText={(PINinput) => setPINinput(PINinput)}
                      value={PINinput}
                    />
                  )}
                  name="PIN"
                />
                {/* {otpInput.length < 5 && <Text style={styles.required}></Text>}
                {otpInput.length >= 5 && otp !== otpInput && (
                  <Text style={styles.required}>OTP is invalid</Text>
                )} */}

                <PillButton onPress={handleSubmit(onSendMoney)}>
                  <Text type="submit" style={styles.btnText}>
                    SEND MONEY
                  </Text>
                </PillButton>
              </View>
            </View>
          </Modal>

          <Modal
            animationType="slide"
            transparent={true}
            visible={receiptModalVisible}
            statusBarTranslucent={true}
            onRequestClose={() => {
              setReceiptModalVisible(!receiptModalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.receiptModalView}>
                <View style={styles.successfulCaption}>
                  <Text style={styles.successTxt}>SUCCESSFUL ...</Text>
                </View>
                <View style={styles.checkmarkView}>
                  <SimpleLineIcons style={styles.checkmark} name="check" />
                  <Text style={styles.regularText}>
                    Transaction Successful!
                  </Text>
                </View>
                <View style={styles.amountView}>
                  <Text style={styles.regularText}>
                    Your account has been debited
                  </Text>
                  <Text style={styles.amount}>{amount}.00 NGN</Text>
                </View>
                <View style={styles.transactionView}>
                  {/* <Text>Transaction receipt has been generated</Text> */}
                  <View style={styles.shareView}>
                    <TouchableOpacity style={styles.btnFlex}>
                      <Text style={styles.btnTxt}>Share Receipt</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnFlex}>
                      <Text>Preview</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <PillButton onPress={() => handlePress("Home")}>
                  <Text type="submit" style={styles.btnText}>
                    CLOSE
                  </Text>
                </PillButton>
              </View>
            </View>
          </Modal>

          <View style={styles.inputsView}>
            <View style={styles.inputs}>
              <Text style={styles.caption}>SEND MONEY</Text>
              <Controller
                control={control}
                rules={{
                  maxLength: 16,
                  required: true,
                }}
                render={({ field: { onChange, value } }) => (
                  <Input
                    placeholder="Amount"
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="amount"
              />
              {errors.amount && (
                <Text style={styles.required}>{errors.amount.message}</Text>
              )}

              <Controller
                control={control}
                rules={{
                  maxLength: 11,
                  required: true,
                }}
                render={({ field: { onChange, value } }) => (
                  <Input
                    placeholder="Account Number"
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="accountNumber"
              />
              {errors.accountNumber && (
                <Text style={styles.required}>
                  {errors.accountNumber.message}
                </Text>
              )}

              <Controller
                control={control}
                rules={{
                  maxLength: 50,
                  required: true,
                }}
                render={({ field: { onChange, value } }) => (
                  <Input
                    placeholder="Bank name"
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="bankName"
              />
              {errors.bankName && (
                <Text style={styles.required}>{errors.bankName.message}</Text>
              )}

              <Controller
                control={control}
                rules={{
                  maxLength: 100,
                  required: true,
                }}
                render={({ field: { onChange, value } }) => (
                  <Input
                    placeholder="Purpose of transaction"
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="purpose"
              />
              {errors.purpose && (
                <Text style={styles.required}>{errors.purpose.message}</Text>
              )}
              {/* <PillButton title="Submit" onPress={handleSubmit(onSubmit)}> */}
              <PillButton title="Submit" onPress={handleSubmit(onSubmit)}>
                <Text type="submit" style={styles.btnText}>
                  SUBMIT
                </Text>
              </PillButton>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PayWithAccountNum;

const styles = StyleSheet.create({
  container: {
    top: 0,
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
    marginTop: 25,
    // height: 50,
    width: "100%",
  },
  inputsView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  inputs: {
    marginTop: "30%",
    marginBottom: "70%",
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: "white",
    padding: 10,
    paddingTop: 30,
    paddingBottom: 30,
    borderRadius: 15,
    alignSelf: "center",
  },
  caption: {
    fontWeight: "bold",
    textAlign: "center",
    color: "#1e002a",
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
  receiptModalView: {
    height: "100%",
    width: "100%",
    paddingBottom: "15%",
    margin: 0,
    padding: 20,
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "white",
  },
  fieldValueFlex: {
    flex: 1,
    flexDirection: "row",
  },
  successfulCaption: {
    alignContent: "center",
    alignItems: "center",
    paddingTop: 13,
    paddingBottom: 13,
    backgroundColor: "#59076e",
    marginBottom: "10%",
  },
  successTxt: {
    color: "white",
    fontWeight: "bold",
  },
  checkmarkView: {
    marginTop: "10%",
    marginBottom: "10%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  checkmark: {
    color: "#fcc201",
    fontSize: 140,
    paddingBottom: 5,
  },
  transactionView: {
    flex: 1,
    flexDirection: "column",
  },
  shareView: {
    padding: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 0,
  },
  btnFlex: {
    borderWidth: 2,
    borderColor: "white",
    backgroundColor: "#fcc201",
    height: 40,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    // width: "35%",
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 20,
    elevation: 10,
    shadowColor: "black",
  },
  amountView: {
    // flex: 1,
    // flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  regularText: {
    color: "#1e002a",
  },
  amount: {
    color: "#1e002a",
    fontSize: 33,
    fontWeight: "bold",
    alignSelf: "center",
  },
});
