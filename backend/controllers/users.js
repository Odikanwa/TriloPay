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
  const randomNum = Math.random();
  const accountNum = randomNum.toString().slice(2, 12);
  const otp = randomNum.toString().slice(2, 6);

  const user = new User({ ...body, accountNumber: accountNum, OTP: otp });

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

// Update user with ID
export const updateUser = (req, res) => {
  User.findByIdAndUpdate(req.params.id, {
    firstName: "Jane",
    lastName: "Odk",
    phoneNumber: "07000100103",
    email: "jane@gmail.com",
    password: "janeme",
  })
    .then(() => {
      // res.send(`User with the id ${request.params.id} has been updated`);
      res.redirect("/users");
      console.log("ID updated");
    })
    .catch((err) => {
      console.log(err);
    });

  // const { id } = req.params;
  // const { firstName, lastName, age } = req.params;
  // const user = users.find((user) => users.id === id);

  // if (firstName) user.firstName = firstName;
  // if (lastName) user.lastName = lastName;
  // if (age) user.age = age;

  // res.send(`User with the id ${id} has been updated`);
};
