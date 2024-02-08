const errorHandler = (err, req, res, next) => {
  // Check if the error has a status code, otherwise default to 500 (Internal Server Error)
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  // Send the status code and error message in the response
  res.status(statusCode).json({
    error: {
      status: statusCode,
      message: err.message,
    },
  });
};

//not found
const notFounnd = (req, res, next) => {
  const error = new Error(`Not Found : ${req.original}`);
  res.status(404);
  next(error);
};

module.exports = { errorHandler, notFounnd };
