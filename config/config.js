const dotEnv = require('dotenv');

dotEnv.config();

const config = {
  env: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || 5000,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  dbPort: process.env.DB_PORT,
  dbUrl: process.env.DATABASE_URL,
  dbPublicUrl: process.env.DATABASE_PUBLIC_URL,
  jwtSecret: process.env.JWT_SECRET,
};

const whatsappNumber = process.env.WHATSAPP_NUMBER;

module.exports = { config, whatsappNumber };
