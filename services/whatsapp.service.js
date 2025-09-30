const Boom = require('@hapi/boom');
const { config } = require('../config/config');

const whatsappNumber = config.whatsappNumber;

const getWhatsappNumber = () => {
  if (!whatsappNumber) {
    throw Boom.notFound('El recurso no se encuentra disponible');
  }
  return whatsappNumber;
};

module.exports = { getWhatsappNumber };
