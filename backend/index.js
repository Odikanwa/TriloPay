import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import usersRoutes from "./routes/users.js";
import { User } from "./models/users.js";
// import { createServer } from "http";
// import { Server } from "socket.io";

//"start": "nodemon index.js"

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(
  cors({
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// const httpServer = createServer(app);
// const io = new Server(httpServer, {
//   cors: {
//     origin: "http://192.168.43.35:3000",
//     credentials: true,
//   },
// });

// Connect to MongoDB
const dbURI =
  "mongodb+srv://Odikanwa:Odikanwa@trilopay.gmpx5eq.mongodb.net/TriloPay?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on port: http://localhost:${PORT}`)
    )
  )
  .catch((err) => console.log(err));

// io.on("connection", (socket) => {
//   console.log("New Connection: ", socket.id);

//   socket.on("disconnect", () => {
//     console.log("Disconnected: ", socket.id);

//     io.emit("Welcome", "This is a socket io server");
//   });
// });

// All routes start with users. run userRoutes once code is hit
app.use("/users", usersRoutes);

// app.get("/users", (req, res) => res.send("Hello from Mike"));

// export default index;
