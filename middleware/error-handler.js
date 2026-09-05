const { StatusCodes } = require('http-status-codes');

const errorHandlerMiddleware = (err, req, res, next) => {
  // Default values
  let statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
  let message = err.message || 'Something went wrong, please try again';

  // Mongoose validation error
  if (err.name === 'ValidationError') {
    statusCode = StatusCodes.BAD_REQUEST;
    message = Object.values(err.errors)
      .map((item) => item.message)
      .join(', ');
  }

  // Mongoose duplicate key error (email already exists)
  if (err.code === 11000) {
    statusCode = StatusCodes.BAD_REQUEST;
    message = `Duplicate value for ${Object.keys(err.keyValue)} field`;
  }

  // Mongoose cast error (invalid ObjectId)
  if (err.name === 'CastError') {
    statusCode = StatusCodes.NOT_FOUND;
    message = `No item found with id: ${err.value}`;
  }

  res.status(statusCode).json({ msg: message });
};

module.exports = errorHandlerMiddleware;