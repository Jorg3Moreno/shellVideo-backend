const express = require('express');
const moviesApi = require('./routes/movies');
const { config } = require('./config/index');
const {
  logErrors,
  wrapErrors,
  errorHandler
} = require('./utils/middleware/errorHandler');
const notFoundHandler = require('./utils/middleware/notFoundHandler');

const app = express();

// body parser middleware
app.use(express.json());

moviesApi(app);

// middleware: catch 404 error
app.use(notFoundHandler);

// error middleware
// a error middleware every should be after routes middleware
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`Listening http://localhost:${config.port}`);
});
