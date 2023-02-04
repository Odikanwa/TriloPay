import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    accountNumber: {
      type: String,
      required: false,
    },
    cardNumber: {
      type: String,
      required: false,
    },
    CVV: {
      type: String,
      required: false,
    },
    balance: {
      type: String,
      required: false,
    },
    phoneNumber: {
      type: String,
      required: false,
    },
    address: {
      type: String,
      required: false,
    },
    BVN: {
      type: String,
      required: false,
    },
    NIN: {
      type: String,
      requred: false,
    },
    PIN: {
      type: String,
      required: false,
    },
    photo: {
      data: Buffer,
      contentType: String,
      required: false,
    },
    OTP: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
