require("express-async-errors");
const express = require("express");
require("dotenv").config();

const addMovie = require("./controllers/addMovie");
const mongoose = require("mongoose");
const getAllMovies = require("./controllers/getAllMovies");
const getSingleMovie = require("./controllers/getSingleMovie");
const editMovie = require("./controllers/editMovie");
const deleteMovie = require("./controllers/deleteMovie");
const movieRecommendation = require("./controllers/movieRecommendation");
const errorHandler = require("./handlers/errorHandler");

// connecting to mongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use(errorHandler);
app.use(express.json());

// Models...
require("./models/movies");

// Routes...
app.get("/movies/getRecommendation", movieRecommendation);
app.post("/api/movies", addMovie);
app.get("/api/movies", getAllMovies);
app.get("/api/movies/:movie_id", getSingleMovie);
app.patch("/api/movies", editMovie);
app.delete("/api/movies/:movie_id", deleteMovie);

// Openai recommendation
app.get("/api/movies/openai/getRecommendations", movieRecommendation);

app.use(errorHandler);

app.listen(process.env.PORT || 5000, () => {
  console.log("Server server is running!");
});
