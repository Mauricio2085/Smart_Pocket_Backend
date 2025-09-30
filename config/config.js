const path = require('path');
const Boom = require('@hapi/boom');
const dotEnv = require('dotenv');

dotEnv.config();

const nodeEnv = process.env.NODE_ENV || 'development';

if (nodeEnv === 'development') {
  const envPath = path.resolve(__dirname, `../.env.${nodeEnv}.local`);
  dotEnv.config({ path: envPath });
}

if (!process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
  throw Boom.internal(
    'Las variables de entorno de cloudinary no están definidas.'
  );
}

if (!process.env.JWT_SECRET) {
  throw Boom.internal('La variable de entorno JWT_SECRET no está definida.');
}

if (!process.env.DATABASE_URL) {
  throw Boom.internal('La variable de entorno DATABASE_URL no está definida.');
}

const config = {
  env: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || 5000,
  dbUrl: process.env.DATABASE_URL,
  jwtSecret: process.env.JWT_SECRET,
  cloudinaryApiKey: process.env.CLOUDINARY_API_KEY,
  cloudinaryApiSecret: process.env.CLOUDINARY_API_SECRET,
  whatsappNumber: process.env.WHATSAPP_NUMBER,
  cloudinaryApiSecret: process.env.CLOUDINARY_API_SECRET,
};

module.exports = { config };
