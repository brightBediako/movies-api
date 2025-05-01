// import OpenAI from 'openai';
const OpenAIApi = require("openai");
const mongoose = require("mongoose");




const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo-16k",
    prompt: prompt,
    // messages: [],
    // temperature: 1,
    max_tokens: 100,
    // top_p: 1,
    // frequency_penalty: 0,
    // presence_penalty: 0,
});