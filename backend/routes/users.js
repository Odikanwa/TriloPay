import express from "express";
import {
  createUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
  getUserByEmail,
} from "../controllers/users.js";

const router = express.Router();

// All routes already appended with '/users'

router.get("/", getUsers);

// router.get("/create", createUser);
router.post("/create/", createUser);

router.get("/:id", getUser);
// router.get("/:id", getUser);

router.post("/:email", getUserByEmail);

router.get("/delete/:id", deleteUser);
// router.delete("/:id", deleteUser);

// router.get("/update/:id", updateUser);
router.patch("/update/:id", updateUser);

export default router;
