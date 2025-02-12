const Boom = require('@hapi/boom');
const { whatsappNumber } = require('../config/config');

const getWhatsappNumber = () => {
  if (!whatsappNumber) {
    throw Boom.notFound('El recurso no se encuentra disponible');
  }
  return whatsappNumber;
};

module.exports = { getWhatsappNumber };
