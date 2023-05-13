const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5433,
  user: 'postgres',
  password: 'M4ur1c100c4mp0',
  database: 'Smart_Pocket'
});

module.exports = pool;
