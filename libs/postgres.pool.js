const { Pool } = require('pg');
const { config } = require('./../config/config');

// const USER = encodeURIComponent(config.dbUser);
// const PASSWORD = encodeURIComponent(config.dbPassword);
// const URI =
//   config.dbUrl ||
//   `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
// console.log(URI);
const connectionString = config.dbPublicUrl || config.dbUrl;
console.log(connectionString);
const pool = new Pool({
  connectionString,
  ssl: { rejectUnauthorized: false },
});

module.exports = pool;

// postgresql://postgres:tZDcqOPLXAlnNjpUelNdrlOVMsWoMVrK@postgres.railway.internal:5432/railway
