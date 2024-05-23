const mongoose = require("mongoose");

const moviesSchema = new mongoose.Schema({
  movie_name: {
    type: String,
    required: [true, "Movie name is required!"],
  },
  description: {
    type: String,
  },
  genre: {
    type: String,
  },
  year: {
    type: Number,
  },
  rating: {
    type: Number,
  },
});

const moviesModel = mongoose.model("movies", moviesSchema);

module.exports = moviesModel;
