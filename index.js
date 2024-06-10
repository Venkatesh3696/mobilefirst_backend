import express from "express";
import dotenv from "dotenv";
// import { connectDB } from "./db";
import morgan from "morgan";
import connectDB from "./config/dbConnection.js";

// dot env config
dotenv.config();

// db connection

const app = express();
app.use(morgan("dev"));

app.use(express.json()); // parse JSON bodies
app.use(express.urlencoded({ extended: true })); // parse URL-encoded bodies

app.get("/", (req, res) => {
  res.send({ message: "home page" });
});

const connectDBAndStartServer = () => {
  connectDB()
    .then(() => {
      app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
connectDBAndStartServer();
