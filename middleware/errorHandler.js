const Boom = require('@hapi/boom');

const errorHandler = (err, req, res, next) => {
  if (Boom.isBoom(err)) {
    return res.status(err.output.statusCode).json(err.output.payload);
  }
  res.status(500).json({ message: 'Error interno del servidor' });
};

module.exports = errorHandler;
