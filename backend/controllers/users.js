import { User } from "../models/users.js";

//Generate account number
// const AccountNum = () => {
//   const randomNum = Math.random().toString();
//   randomNum.substring(2, 10);
//   return randomNum;
// };

// Create User
export const createUser = (req, res) => {
  const body = req.body;
  console.log("You have reached the create user API. see body below:");

  //Generate a random Number
  const randomNum1 = Math.random();
  const randomNum2 = Math.random();
  const accountNum = randomNum1.toString().slice(2, 12);
  const cardNumber = randomNum2.toString().slice(2, 18);
  const cvv = (randomNum1 + randomNum2).toString().slice(2, 5);
  const otp = (randomNum2 + randomNum2).toString().slice(6, 11);

  const user = new User({
    ...body,
    accountNumber: accountNum,
    balance: "0.00",
    cardNumber: cardNumber,
    CVV: cvv,
    OTP: otp,
  });

  user
    .save()
    .then((result) => {
      res.send(result);
      console.log(result);
    })
    .then((err) => {
      console.log(err);
    });
  //   const user = req.body;
  //   usrs.push({ ...user, id: uuidv4() });
  //   res.send(`User with the name ${user.firstname} added to the database`);
};

// Get all users
export const getUsers = (req, res) => {
  User.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

// Get user with ID
export const getUser = (req, res) => {
  User.findById(req.params.id)
    .then((result) => {
      res.send(result);
      console.log(result);
      console.log(req.params.id);
    })
    .catch((err) => {
      console.log(err);
    });
  console.log("Mike here");

  //   res.send("GET ID ROUTE");
  //   const { id } = req.params;
  //   const foundUser = users.find((user) => user.id === id);
  //   res.send(foundUser);
};

// Delete user with ID
export const deleteUser = (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect("/users");
    })
    .catch((err) => {
      console.log(err);
    });

  //   const { id } = req.params;
  //   users = users.filter((user) => user.id !== id);
  //   res.send(`User with the id ${id} has been deleted from the database`);
};

export const getUserByEmail = (req, res) => {
  User.findOne({ email: req.body.email, password: req.body.password })
    .exec()
    .then((result) => {
      if (result == null || result == "") {
        result = JSON.stringify({
          value: "null",
          msg: "No record found",
        });
        res.send(result);
      } else {
        res.send(result);
      }
      console.log("You have reached FindUserBy Email route");
      console.log(req.body.email, req.body.password);
    })
    .catch((error) => {
      console.log(error);
    });
};

// Update user with ID
export const updateUser = (req, res) => {
  User.findByIdAndUpdate(req.params.id, {
    phoneNumber: req.body.phoneNumber,
    address: req.body.address,
    BVN: req.body.BVN,
    NIN: req.body.NIN,
    photo: req.body.photo,
  })
    .then((result) => {
      res.send(result);
      // res.redirect("/users");
      console.log(
        `User with the id ${req.params.id} has been updated successfully`
      );
    })
    .catch((err) => {
      console.log(err);
    });
};
