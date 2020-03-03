const express = require('express');
const moviesApi = require('./routes/movies');
const { config } = require('./config/index');

const app = express();

// body parser midleware
app.use(express.json());

moviesApi(app);

app.listen(config.port, () => {
  console.log(`Listening http://localhost:${config.port}`);
});
