const { Pool } = require('pg');
const Boom = require('@hapi/boom');

const { config } = require('./../config/config');
const urlDatabase = config.dbUrl;
if (!urlDatabase) {
  throw Boom.internal('La url de la base de datos no está definida.');
}

const URI = config.dbUrl;

const pool = new Pool({
  connectionString: URI,
  ssl: { rejectUnauthorized: false },
});

module.exports = pool;
