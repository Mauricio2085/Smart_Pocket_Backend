const express = require('express');
const { whatsappNumber } = require('../config/config');

const router = express.Router();

router.get('/', async (req, res) => {
  res.json({ phone: whatsappNumber });
});

module.exports = router;
