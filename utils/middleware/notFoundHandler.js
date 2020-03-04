const boom = require('@hapi/boom');

// this middleware havent next callback
// because is not necesary. This is the last middleware
function notFoundHandler(req, res) {
  const {
    output: { statusCode, payload }
  } = boom.notFound();

  res.status(statusCode).json(payload);
}

module.exports = notFoundHandler;
