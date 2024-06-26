const mongoose = require("mongoose");

const addMovie = async (req, res) => {
  const moviesModel = mongoose.model("movies");

  const { movie_name, description, genre, year, rating } = req.body;

  //validations...

  if (!movie_name) throw "Movie name is required!";
  if (!description) throw "Description is required!!";
  if (!genre) throw "Genre is required!!";
  if (!year) throw "Year is required!!";
  if (!rating) throw "Rating is required!!";
  if (rating < 1 || rating > 10) throw "Rating must be between 1-10";

  // success!
  const createdMovie = await moviesModel.create({
    movie_name: movie_name,
    description: description,
    genre: genre,
    year: year,
    rating: rating,
  });

  res.status(200).json({
    status: "success",
    message: "Movie added successfully!",
  });
};

module.exports = addMovie;
