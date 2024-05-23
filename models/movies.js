const mongoose = require("mongoose");

const moviesSchema = new mongoose.Schema({
  movie_name: {
    type: String,
    required: [true, "Movie name is required!"],
    unique: true
  },
  description: {
    type: String,
    required: [true, "Description is required!"],
  },
  genre: {
    type: String,
    required: [true, "Genre is required!"],
  },
  year: {
    type: Number,
    required: [true, "Year is required!"],
  },
  rating: {
    type: Number,
    required: [true, "Rating is required!"],
  },
});

const moviesModel = mongoose.model("movies", moviesSchema);

module.exports = moviesModel;
