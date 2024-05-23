const mongoose = require("mongoose");

const editMovie = async (req, res) => {
  const moviesModel = mongoose.model("movies");

  const { movie_id, movie_name, description, genre, year, rating } = req.body;

  try {
    if (!movie_id) throw "Movie id is required!";
  } catch (e) {
    res.status(400).json({
      status: "failed",
      message: e,
    });
    return;
  }

  try {
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
  } catch (e) {
    res.status(400).json({
      status: "failed",
      message: e.message,
    });
    return;
  }

  res.status(200).json({
    status: "success",
    message: "Movie updated successfully!",
  });
};

module.exports = editMovie;
