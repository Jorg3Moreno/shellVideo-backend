const express = require('express');
const moviesApi = require('./routes/movies');
const { config } = require('./config/index');

const app = express();

moviesApi(app);

app.listen(config.port, () => {
  console.log(`Listening http://localhost:${config.port}`);
});
