require("dotenv").config();
const express = require("express");
const { connectDB } = require("./src/config/db");
const moviesRouter = require("./src/api/routes/movie");
const cinemaRouter = require("./src/api/routes/cinema");

const app = express();

connectDB();

//! línea para configurar que mi servidor sea capaz de recoger datos en formato JSON
app.use(express.json());

app.use("/api/v1/movies", moviesRouter);
app.use("/api/v1/cinemas", cinemaRouter);

// app.use("/saludar", (req, res, next) => {
//   try {
//     return res.status(200).json("Te saludo");
//   } catch (error) {
//     return res.status(500).json("error");
//   }
// });

app.use("*", (req, res, next) => {
  return res.status(404).json("Route not Found");
});

app.listen(3000, () => {
  console.log("Server running in http://localhost:3000");
});
