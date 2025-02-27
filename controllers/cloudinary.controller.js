const crypto = require('crypto');
const { config } = require('../config/config');

const cloudinaryController = (req, res) => {
  const timestamp = Math.round(new Date().getTime() / 1000); // Tiempo en segundos

  //Cloudinary espera una firma en el formato: `timestamp=1234567890api_secret`
  const paramsToSign = `timestamp=${timestamp}${config.cloudinaryApiSecret}`;

  //Se genera la firma con SHA-256
  const signature = crypto
    .createHash('sha256')
    .update(paramsToSign)
    .digest('hex');

  res.json({
    timestamp, // Enviado al frontend para la validación
    signature, // Firma segura generada
    api_key: config.cloudinaryApiKey, // API Key
  });
};

module.exports = { cloudinaryController };
