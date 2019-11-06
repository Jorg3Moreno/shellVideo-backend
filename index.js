const express = require('express');
const { config } = require('./config/index');

const app = express();

// express routes.
app.get('/', (req, res) => {
  res.send('Hello wold!');
});

app.get('/json', (req, res) => {
  res.json({ hello: 'world' });
});

app.listen(config.port, () => {
  console.log(`Listening http://localhost:${config.port}`);
});
