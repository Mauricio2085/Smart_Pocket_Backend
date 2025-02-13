const { Pool } = require('pg');

const { config } = require('./../config/config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI =
  config.dbUrl ||
  `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const pool = new Pool({
  connectionString: URI,
  ssl: config.dbUrl ? { rejectUnauthorized: false } : false,
});

module.exports = pool;
