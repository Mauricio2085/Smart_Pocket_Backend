// delete process.env.PGUSER;
// delete process.env.PGPASSWORD;
// delete process.env.PGHOST;
// delete process.env.PGPORT;
// delete process.env.PGDATABASE;

const { Pool } = require('pg');

const { config } = require('./../config/config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const pool = new Pool({
  connectionString: URI,
});

module.exports = pool;
