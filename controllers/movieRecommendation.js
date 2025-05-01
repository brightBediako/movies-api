const OpenAI = require("openai");
const mongoose = require("mongoose");

const movieRecommendation = async (req, res) => {
  const moviesModel = mongoose.model("movies");
  const allMovies = await moviesModel.find({});
  const moviesString = allMovies.map((el) => el.movie_name).join(",");

  const prompt = `I need a movie recommendation based on these movies : ${moviesString}. Provide me with 10 suggestions! seperate each movie with a comma`;


  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo-16k",
    prompt: prompt,
    max_tokens: 100,
  });

  res.status(200).json({
    suggestions: response.data.choices[0].text,
  });

};

module.exports = movieRecommendation;
