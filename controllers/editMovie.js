const mongoose = require("mongoose");

const editMovie = async (req, res) => {
  const moviesModel = mongoose.model("movies");

  const { movie_id, movie_name, description, genre, year, rating } = req.body;

  if (!movie_id) throw "Movie id is required!";

  await moviesModel.updateOne(
    {
      _id: movie_id,
    },
    {
      movie_name: movie_name,
      description: description,
      genre: genre,
      year: year,
      rating: rating,
    },
    {
      runValidators: true,
    }
  );


  res.status(200).json({
    status: "success",
    message: "Movie updated successfully!",
  });
};

module.exports = editMovie;
