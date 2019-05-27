const express = require('express');
const { normalize } = require('path');
const axios = require('axios');
require('dotenv').config()

const app = express();

const baseOMDBUrl = process.env.BASE_OMDB_URL;
const omdbAPIKey = process.env.OMDB_API_KEY;

app.get('/searchMovie', async (req, res) => {
  try {
    const response = await axios.get(`${baseOMDBUrl}/?type=movie&apikey=${omdbAPIKey}&s=${req.query.movie}`);
    console.log(response.data);
    res.send(response.data.Search);
  } catch (error) {
    console.error(error);
    res.send(error);
  }
});

app.get('/searchMovieByIMDBId', async (req, res) => {
  try {
    const response = await axios.get(`${baseOMDBUrl}/?type=movie&apikey=${omdbAPIKey}&i=${req.query.imdbId}`);
    console.log(response.data);
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.send(error);
  }
});

// Serve up static files
app.use(express.static(normalize(`${__dirname}`)));

app.listen(process.env.PORT || 3001, () => {
  console.log(`Server listening on port ${process.env.PORT || 3001}!`);
});

module.exports = app;
