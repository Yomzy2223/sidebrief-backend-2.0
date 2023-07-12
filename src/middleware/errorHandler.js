const logger = require("../config/logger");

const ErrorHandler = (err, req, res, next) => {
  const errStatuts = err.statusCode || 500;
  const errMessage = err?.message ?? "Error occured";

  logger.error({
    method: req.method,
    url: req.originalUrl,
    message: errMessage,
  });
  res.status(errStatuts).json({
    error: errMessage,
  });
};

module.exports = ErrorHandler;
