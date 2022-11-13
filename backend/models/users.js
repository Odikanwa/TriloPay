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
      required: true,
    },
    balance: {
      type: Number,
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
    photo: {
      data: Buffer,
      contentType: String,
      required: false,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
