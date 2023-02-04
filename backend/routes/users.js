import express from "express";
import {
  createUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
  getUserByEmail,
  getUserByAccountNum,
  updateReceiverBalance,
  updateSenderBalance,
} from "../controllers/users.js";

const router = express.Router();

// All routes already appended with '/users'

router.get("/", getUsers);

// router.get("/create", createUser);
router.post("/create/", createUser);

router.get("/:id", getUser);
// router.get("/:id", getUser);

router.post("/:email", getUserByEmail);

router.post("/findAccountNumber/:accountNumber", getUserByAccountNum);

router.patch("/update/sendMoney/:id", updateReceiverBalance);

router.patch("/update/sendMoney/updateBalance/:id", updateSenderBalance);

router.get("/delete/:id", deleteUser);
// router.delete("/:id", deleteUser);

// router.get("/update/:id", updateUser);
router.patch("/update/:id", updateUser);

export default router;
