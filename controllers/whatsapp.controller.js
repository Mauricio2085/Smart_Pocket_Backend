const { getWhatsappNumber } = require('../services/whatsapp.service');

const whatsappNumber = async (req, res, next) => {
  try {
    const number = await getWhatsappNumber();
    res.json({ phone: number });
  } catch (error) {
    next(error);
  }
};

module.exports = { whatsappNumber };
