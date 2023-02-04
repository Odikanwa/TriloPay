import { User } from "../models/users.js";

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
    balance: "100.00",
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
      // console.log(result);
      console.log(req.params.id);
    })
    .catch((err) => {
      console.log(err);
    });
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

//Get User with Email
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
      console.log("User found");
      console.log(req.body.email, req.body.password);
    })
    .catch((error) => {
      console.log(error);
    });
};

//Get User with Account Number
export const getUserByAccountNum = (req, res) => {
  User.findOne({ accountNumber: req.body.accountNumber })
    .exec()
    .then((result) => {
      if (result == null || result == "") {
        result = JSON.stringify({
          value: "null",
          msg: "No account record found",
        });
        res.send(result);
      } else {
        res.send(result);
      }
      console.log("Account Number found: ", req.body.accountNumber);
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
    PIN: req.body.PIN,
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

//Send Money - Update User Account Balance
export const updateReceiverBalance = (req, res) => {
  User.findByIdAndUpdate(req.params.id, {
    balance: (
      parseInt(req.body.receiverBalance) + parseInt(req.body.amount)
    ).toString(),
  })
    .then((result) => {
      if (result == null || result == "") {
        result = JSON.stringify({
          value: "null",
          msg: "Operation failed",
        });
      } else {
        // updateSenderBalance(
        //   req.body.senderId,
        //   req.body.senderBalance,
        //   req.body.amount
        // );
        res.send(result);
      }

      console.log(req.body.id);
      console.log(
        "Balance updated: ",
        req.body.receiverBalance + " " + req.body.amount
      );

      // console.log(
      //   "SENDER DETAILS: ",
      //   req.body.senderId,
      //   req.body.senderBalance,
      //   req.body.amount
      // );
    })
    .catch((error) => {
      console.log(error);
    });
};

export const updateSenderBalance = (req, res) => {
  const senderBalance = parseInt(req.body.senderBalance);
  const amount = parseInt(req.body.amount);
  console.log(senderBalance, amount);
  if (senderBalance <= 0 || amount > senderBalance) {
    return;
  } else {
    User.findByIdAndUpdate(req.params.id, {
      balance: (senderBalance - amount).toString(),
    })
      .then((result) => {
        // if (result == null || result == "") {
        //   result = JSON.stringify({
        //     value: "null",
        //     msg: "Operation failed",
        //   });
        // } else {
        res.send(result);
        console.log("Account debited");
        // }
      })
      .catch((error) => {
        console.log(error);
      });
  }
};

// const updateSenderBalance = (senderId, senderBalance, amount) => {
//   senderBalance = parseInt(senderBalance);
//   amount = parseInt(amount);
//   if (senderBalance <= 0 || amount > senderBalance) {
//     return;
//   } else {
//     User.findByIdAndUpdate(senderId, {
//       balance: (senderBalance - amount).toString(),
//     })
//       .then((result) => {
//         console.log("Account debited");
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }
// };

//DOESNT'T WORK? - SEE ALTERNATIVE

// create patch fetch on the frontend
// create an api & Controller to receive the state
// update the document and send to the fetch-frontend
// create a reducer method to update the state
// use dispatch to update the current state from the front-end
