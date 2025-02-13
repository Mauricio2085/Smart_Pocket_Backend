const express = require('express');
const Boom = require('@hapi/boom');
const { pool } = require('../libs/postgres.pool');

const router = express.Router();

router.get('/test-db', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ success: true, time: result.rows[0].now });
  } catch (err) {
    throw Boom.badRequest('Error al consultar la base de datos Railway', {
      error: err.message,
    });
  }
});

module.exports = router;
